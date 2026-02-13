import Container from "./ui/Container.jsx";
import {motion} from 'framer-motion';
import { fadeup, staggerContainer } from "../animation.js";

import {
  FaUserPlus,
  FaWallet,
  FaChartLine,
  FaMoneyBillWave,
} from "react-icons/fa";

const steps = [
  {
    title: "Register",
    description: "Create your free account in just a few minutes.",
    icon: FaUserPlus,
  },
  {
    title: "Deposit",
    description: "Securely add funds to your account and get started.",
    icon: FaWallet,
  },
  {
    title: "Trade",
    description: "Access powerful tools and trade with confidence.",
    icon: FaChartLine,
  },
  {
    title: "Withdraw",
    description: "Quickly withdraw your profits anytime you want.",
    icon: FaMoneyBillWave,
  },
];

const HowItWork = () => {
  return (
    <section className="py-24">
      <Container>
        <motion.h2
        variants={fadeup}
        initial='hidden'
        whileInView='show'
        viewport={{once:true}} className="text-3xl font-bold text-center mb-12">How It Works</motion.h2>
        
        <motion.div 
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{once:true}} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <motion.div
              variants={fadeup}
                key={i}
                className="bg-gray-900 border border-gray-800 p-8 rounded-xl 
                   hover:border-blue-500 transition"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 mx-auto mb-6 flex items-center justify-center 
                        rounded-full bg-blue-600 text-white"
                >
                  <Icon size={24} />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg text-white mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};

export default HowItWork;
