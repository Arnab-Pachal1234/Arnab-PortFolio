import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// --- CONFIGURATION ---
// IMPORTANT: Replace the placeholder with your actual reCAPTCHA v2 Site Key
const RECAPTCHA_SITE_KEY_V2 = import.meta.env.VITE_APP_GOOGLE_SITE_KEY || 'YOUR_RECAPTCHA_V2_SITE_KEY_HERE'; 
// --- END CONFIGURATION ---

// Define the inline style object for the Honeypot field
const honeypotStyle = {
    position: 'absolute',
    // Using clipPath to hide the element completely without display: none (which bots might detect)
    clipPath: 'rect(1px, 1px, 1px, 1px)', 
    padding: 0,
    border: 0,
    height: '1px',
    width: '1px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    // Setting zIndex to prevent any unintended interaction layering
    zIndex: -1 
};

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
        // 1. Add state for the Honeypot field
        hp_check: "", 
    });

    const [loading, setLoading] = useState(false);

    // --- 1. Load the reCAPTCHA v2 script ---
    useEffect(() => {
        // Only load if the script isn't already present
        if (typeof grecaptcha === 'undefined') {
            const script = document.createElement('script');
            script.src = `https://www.google.com/recaptcha/api.js`;
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // --- 2. Honeypot Check (Must come first!) ---
        // If the hidden field 'hp_check' has any value, it's a bot.
        if (form.hp_check) {
            setLoading(false);
            console.warn("Bot detected via honeypot field. Submission blocked.");
            // Send a false success message to fool the bot
            toast.success('Thank you. I will get back to you as soon as possible.'); 
            return; // STOP the submission
        }

        // --- 3. reCAPTCHA v2 Check ---
        if (typeof grecaptcha === 'undefined') {
            setLoading(false);
            toast.error('reCAPTCHA failed to load.');
            return;
        }

        const recaptchaResponse = grecaptcha.getResponse();

        if (!recaptchaResponse) {
            setLoading(false);
            toast.error("Please complete the reCAPTCHA verification.");
            return; // STOP submission if CAPTCHA is not solved
        }
        
        // --- 4. If all checks pass, proceed with emailjs submission ---
        emailjs
            .send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    name: form.name,
                    email: form.email,
                    message: form.message,
                    time: new Date().toLocaleString(),
                    // Optional: Pass the token to emailjs if needed, but the main check is above
                    'g-recaptcha-response': recaptchaResponse 
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false);
                    toast.success('Thank you. I will get back to you as soon as possible.');

                    // Reset form fields and the honeypot state
                    setForm({ name: "", email: "", message: "", hp_check: "" });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);
                    toast.error("Ahh, something went wrong. Please try again.");
                }
            )
            .finally(() => {
                // CRUCIAL: Reset the CAPTCHA widget so it can be solved again
                grecaptcha.reset(); 
            });
    };

    return (
        <div
            className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
        >
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='mt-12 flex flex-col gap-8'
                >
                    {/* ... (Existing Name, Email, Message Labels & Inputs here) ... */}
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Name</span>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your good name?"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your email</span>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your web address?"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Message</span>
                        <textarea
                            rows={7}
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder='What you want to say?'
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        ></textarea>
                    </label>

                    {/* --- A. Honeypot Field (Bot Trap) with INLINE STYLE --- */}
                    <label 
                        style={honeypotStyle} 
                        className='flex flex-col' // Keep flex layout for React consistency
                    >
                        {/* The span is also hidden by the parent style */}
                        <span className='text-white font-medium mb-4'>Ignore This Field</span>
                        <input
                            type='text'
                            name='hp_check'
                            value={form.hp_check}
                            onChange={handleChange}
                            tabIndex="-1" // Skip via keyboard navigation
                            autoComplete="off" // Prevent browser autofill
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    {/* --- End Honeypot Field --- */}

                    {/* --- B. reCAPTCHA v2 Checkbox --- */}
                    <div className='my-4'>
                        <div 
                            className="g-recaptcha" 
                            data-sitekey={RECAPTCHA_SITE_KEY_V2}
                        ></div>
                    </div>
                    {/* --- End reCAPTCHA Checkbox --- */}

                    <button
                        type='submit'
                        className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </motion.div>
            
            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");