import Container from './ui/Container.jsx';
import Button from './ui/Button.jsx';
import { FaChartLine } from "react-icons/fa";

import {motion} from 'framer-motion';
import  {fadeup}   from '../animation.js';
const Hero = () => {
    return(
        <section className='bg-black py-24'>
            <Container>
                <div className='flex flex-col md:flex-row items-center gap-10'>
                    <motion.div
                    variants={fadeup}
                    initial='hidden'
                    animate='show' className='md:w-1/2'>
                        <h1 className='text-4xl font-bold mb-4'>
                            Innovative Platform for Smart Investments
                        </h1>
                        <p className='text-gray-400 mb-6'>Start Trading with a free 10,000 USD demo account</p>

                        <div className='flex gap-4'>
                            <Button text="Create Free Account" variant="primary" />
                            <Button text='Try Demo' variant='outline'/>
                        </div>
                    </motion.div>

                    <motion.div
                    variants={fadeup}
                    initial='hidden'
                    animate='show'
                    transition={{delay:0.2}}
                     className='w-full md:w-1/2 '>
                            <div className='bg-gray-900 h-96 rounded-xl flex items-center justify-center border border-gray-800'>
                                <FaChartLine className="text-blue-500" size={100} />
                                <span className="text-gray-400 text-sm ms-4">
                                    Platform Preview
                                </span>
                            </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}

export default Hero;