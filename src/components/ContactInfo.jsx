import Container from "./ui/Container";
const ContactInfo = () => {
    return(
        <section className='bg-black py-10'>
            <Container>
                <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-center text-white">

                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <h3 className="font-bold mb-2">📍Address:</h3>
                    <p>123 Finance Ave, Suite 500</p>
                    <p>New York, NY 10001</p>
                </div>

                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <h3 className="font-bold mb-2">📞Phone:</h3>
                    <p>+1 (555) 123-4567</p>
                    <p>Mon-Fri: 9am - 6pm</p>
                </div>

                 <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <h3 className="font-bold mb-2">✉Mail:</h3>
                    <p>support@NextEra.com</p>
                </div>
            </div>
        </Container>
        </section>
    );
};

export default ContactInfo;