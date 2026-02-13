import Container from "./ui/Container";
import { motion } from "framer-motion";
import { fadeup } from "../animation.js";

const FAQ = () => {
  return (
    <section className="bg-black py-24">
      <Container>
        <motion.h2
        variants={fadeup}
        initial='hidden'
        whileInView='show'
        viewport={{once:true}} className="text-3xl font-bold text-center mb-10">
          FAQ
        </motion.h2>

        <motion.div 
        variants={fadeup}
        initial='hidden'
        whileInView='show'
        viewport={{once:true}}
        className="max-w-3xl mx-auto space-y-6">
          <div className="bg-gray-900 border border-gray-800 p-5 rounded-lg">
            <h3 className="font-semibold">Is this platform beginner friendly?</h3>
            <p className="text-gray-400 mt-2">
              Yes, a demo account is provided for practice.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-5 rounded-lg">
            <h3 className="font-semibold">How fast are withdrawals?</h3>
            <p className="text-gray-400 mt-2">
              Usually within 1–3 working days.
            </p>
          </div>

          
          <div className="bg-gray-900 border border-gray-800 p-5 rounded-lg">
            <h3 className="font-semibold">Is my data secure on the platform?</h3>
            <p className="text-gray-400 mt-2">
              Yes, we use secure encryption and follow standard data protection practices.
            </p>
          </div>

          
          <div className="bg-gray-900 border border-gray-800 p-5 rounded-lg">
            <h3 className="font-semibold">Do I need prior trading experience to start?</h3>
            <p className="text-gray-400 mt-2">
              No, beginners can start using the free demo account to learn first.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default FAQ;