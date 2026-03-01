import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
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

                <div className='mt-12 flex flex-col gap-8'>
                    {/* Email Card */}
                    <div className='bg-tertiary p-6 rounded-2xl flex flex-col gap-3 shadow-md shadow-primary border border-transparent hover:border-secondary transition-all duration-300'>
                        <span className='text-secondary font-medium text-[16px] uppercase tracking-wider'>
                            Email
                        </span>
                        <a 
                            href="mailto:arnabpacha2004@gmail.com" 
                            className='text-white font-bold text-[18px] sm:text-[24px] hover:text-[#aaa6c3] transition-colors break-words'
                        >
                            arnabpacha2004@gmail.com
                        </a>
                    </div>

                    {/* Phone Card */}
                    <div className='bg-tertiary p-6 rounded-2xl flex flex-col gap-3 shadow-md shadow-primary border border-transparent hover:border-secondary transition-all duration-300'>
                        <span className='text-secondary font-medium text-[16px] uppercase tracking-wider'>
                            Phone
                        </span>
                        <a 
                            href="tel:+917679458369" 
                            className='text-white font-bold text-[18px] sm:text-[24px] hover:text-[#aaa6c3] transition-colors'
                        >
                            +91 7679458369
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* The 3D Earth Canvas */}
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