import Contanier from "./ui/Container";

const Policy = () => {
    return(
        <section className="bg-black py-24">
            <Contanier>
                <h1 className="text-4xl font-bold text-white mb-6 text-center">Privacy Policy</h1>
                <p className="text-gray-400 max-w-3xl mx-auto text-center">
                    At NextEra, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our trading platform.
                </p>
                <h2 className="text-2xl font-semibold text-white mb-4 text-center mt-20">1. Information We Collect</h2>
                <hr className="border-gray-700 my-4"></hr>
                <p className="text-gray-400 max-w-3xl mx-auto">Welcome to NextEra. Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our platform (tradabit.com) or use our services</p>

                <h3 className="max-w-3xl mx-auto text-xl mt-4">a. Peronal Information</h3>
                <p className="text-gray-400 max-w-3xl mx-auto mt-4">
                    When you register or use our services, we may collect:
                    <ul>
                        <li>Full Name</li>
                        <li>Email Address</li>
                        <li>Phone Number</li>
                        <li>Physical Address</li>
                        <li>Date of Birth</li>
                        <li>Government ID (for verification)</li>
                    </ul>
                </p>

                <h3 className="max-w-3xl mx-auto text-xl mt-4" >b. Trading & Transactional Data</h3>
                <p className="text-gray-400 max-w-3xl mx-auto mt-4">
                    <ul>
                        <li>Trade History</li>
                        <li>Account Balance</li>
                        <li>Deposit & Withdrawal Records</li>
                        <li>Affiliate Commission Details</li>
                    </ul>
                </p>

                <h2 className="text-2xl font-semibold text-white mb-4 text-center mt-10">2. How We Use Your Data</h2>
                <hr className="border-gray-700 my-4"></hr>

                <p className="max-w-3xl mx-auto"> We use the collected data for the following purposes:</p>
                <p className="text-gray-400 max-w-3xl mx-auto">
                   <br></br>
                    <ul>
                        <li className="ms-10">To provide and maintain our trading platform</li>
                        <li className="ms-10">To verify your identity and ensure compliance with regulations</li>
                        <li className="ms-10">To process transactions and manage your account</li>
                        <li className="ms-10">To communicate with you about your account and our services</li>
                        <li className="ms-10">To improve our platform and develop new features</li>
                        <li className="ms-10">To prevent fraud and ensure the security of our users</li>
                    </ul>
                </p>

                
                <h2 className="text-2xl font-semibold text-white mb-4 text-center mt-10">3. Legal Basis for Processing</h2>
                <hr className="border-gray-700 my-4"></hr>

                <p className="max-w-3xl mx-auto">We Process your data under the following legal bases:</p>
                <p className="text-gray-400 max-w-3xl mx-auto">
                    <br></br>
                    <ul>
                        <li className="ms-10">Your Consent: When you agree to our terms and conditions.</li>
                        <li className="ms-10">Contractual Necessity: To fulfill our obligations to you.</li>
                        <li className="ms-10">Legal Compliance: To comply with applicable laws and regulations.</li>
                        <li className="ms-10">Legitimate Interests: To improve our services and ensure security.</li>
                    </ul>
                </p>

            </Contanier>
        </section>
    );
};

export default Policy;