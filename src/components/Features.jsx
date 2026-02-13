import Container from "./ui/Container";

// imports for icons
import { HiOutlineViewGrid } from "react-icons/hi";
import { FaSignal } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { IoFlashOutline } from "react-icons/io5";
import { AiOutlineSafety } from "react-icons/ai";
import { RiSpeedUpLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeup, staggerContainer } from "../animation.js";



const features = [
  {
    title: "User-friendly interface",
    description:
      "You have access to all the trading instruments you need, and their speed is impressive.",
    icon: HiOutlineViewGrid,
  },
  {
    title: "Accurate Trading Signals",
    description:
      "Get precise and reliable trading signals to improve decision making.",
    icon: FaSignal,
  },
  {
    title: "Fast Withdrawals",
    description:
      "Withdraw your funds quickly with our optimized transaction system.",
    icon: IoFlashOutline,
  },
  {
    title: "24/7 Customer Support",
    description:
      "Our support team is available around the clock to assist you.",
    icon: MdSupportAgent,
  },
  {
  title: "Advanced Security",
  description:
    "Your data and transactions are protected with enterprise-grade encryption and security protocols.",
  icon: AiOutlineSafety,
},
{
  title: "High Performance Platform",
  description:
    "Experience ultra-fast execution and real-time updates designed for high-frequency trading.",
  icon: RiSpeedUpLine,
},
];


const Features = () => {

    return(
        <section className="py-24 bg-black">
            <Container>
                <motion.h2 
                variants={fadeup}
                initial='hidden'
                whileInView='show'
                viewport={{once:true}}
                className="text-3xl font-bold text-center mb-12">Features of the Platform</motion.h2>
                
                <motion.div
                variants={staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{once:true}} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature,index)=>(
                        <motion.div
                        variants={fadeup}
                        key={index}
                        className="bg-linear-to-b from-gray-900 to-gray-800 border border-gray-800 p-8 rounded-2xl hover:border-blue-600 transition">
                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-600 text-white text-xl mb-6">
                            {feature.icon && <feature.icon />}
                            </div>
                            <h3 className="text-xl text-white font-semibold mb-4">{feature.title}</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
};

export default Features; 