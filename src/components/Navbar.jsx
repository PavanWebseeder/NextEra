import { useState } from "react";
import Container from "./ui/Container";
import Button from "./ui/Button";
import { motion,AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.nav
    initial={{y:-60,opacity:0}}
    animate={{y:0,opacity:1,
    transition:{duration:0.6}
    }} className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <Container>
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold text-blue-600"><Link to='/'>NextEra</Link></h1>

          <ul className="hidden md:flex gap-6 text-gray-300">
            <li className="hover:text-blue-500 cursor-pointer">Demo</li>
            <li className="hover:text-blue-500 cursor-pointer">About</li>
            <li className="hover:text-blue-500 cursor-pointer"><Link to="/contact">Contact Us</Link></li>
            <li className="hover:text-blue-500 cursor-pointer">FAQ</li>
            <li className="hover:text-blue-500 cursor-pointer"><Link to="/policy">Privacy Policy</Link></li>
          </ul>

          <div className="flex gap-4">
            <Button text="Login" variant="outline" />
            <Button text="Sign up" variant="outline" />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white focus:outline-none"
            >
              {/* Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    isOpen
                      ? "M6 18L18 6M6 6l12 12" // X icon
                      : "M4 6h16M4 12h16M4 18h16" // Burger icon
                  }
                />
              </svg>
            </button>
          </div>
        </div>
        <AnimatePresence>
        {isOpen && (
            <motion.div
            initial={{height:0,opacity:0}}
            animate={{height:'auto',opacity:1}}
            exit={{height:0,opacity:0}}
            className="md:hidden overflow-hidden pt-4">
                <ul className="flex flex-col gap-4 text-gray-300">
                    <li className="hover:text-blue-500 cursor-pointer" >Demo</li>
                    <li className="hover:text-blue-500 cursor-pointer" >About</li>
                    <li className="hover:text-blue-500 cursor-pointer" ><Link to='/contact'>Contact Us</Link></li>
                    <li className="hover:text-blue-500 cursor-pointer" >FAQ</li>
                    <li className="hover:text-blue-500 cursor-pointer" ><Link to="/policy">Privacy Policy</Link></li>
                </ul>
            </motion.div>
        )}
        </AnimatePresence>
      </Container>
    </motion.nav>
  );
};

export default Navbar;
