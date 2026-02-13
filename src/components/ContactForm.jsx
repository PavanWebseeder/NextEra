import {useState} from "react";

const ContactForm = () => {

    const [formData,setFormData] = useState({
        name:'',
        email:'',
        message:''
    })

    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert('Message sent successfully!');
        setFormData({
            name:'',
            email:'',
            message:''
        })
    }
    return(
        <section className="bg-black py-10 px-4">
            <div className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-lg">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <h3 className="text-xl font-semibold text-white text-center">Get in Touch</h3>
                    <div>
                       <label className="block text-sm text-gray-300 mb-1">Name</label>
                       <input type="text" name='name' placeholder="Your Name" value={formData.name}
                       onChange={handleChange}
                       className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-2 text-white focus:border-white"></input>
                    </div>
                    <div>
                       <label className="block text-sm text-gray-300 mb-1">Email</label>
                       <input type="text" name='email' placeholder="Your Email" value={formData.email}
                       onChange={handleChange}
                       className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-2 text-white focus:border-white"></input>
                    </div>
                    
                    <div>
                        <label className="block text-sm text-gray-300 mb-1">Message</label>
                        <textarea name='message' value={formData.message} onChange={handleChange} placeholder="Write your Message...." 
                        className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-2 text-white focus:border-white h-48"></textarea>
                    </div>

                    <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded font-semibold">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;