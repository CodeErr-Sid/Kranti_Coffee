import React, { useState } from 'react';
import { toast } from 'react-toastify';

const SubscribeToNewsLetter = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true);

        const formData = {
            email,
        };

        try {
            await fetch("https://script.google.com/macros/s/AKfycbwwj9yc60OUnmorJPd2Wh8bHGmPZl2wWFtrXWmPqwzYBheFpPElI0q0ln2_Vmkxc52Z/exec", {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            setEmail('');
            toast.success("Thanks for subscribing!");
        } catch (err) {
            console.error("Submission failed", err);
        }

        setSubmitted(false);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 max-w-md mx-auto p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-center text-white font-quickSand">Subscribe to our Newsletter</h2>

            <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <button
                type="submit"
                className="w-full px-6 py-2 bg-white text-primary font-quickSand rounded-md hover:bg-primary-dark transition-all ease-in-out duration-200 hover:bg-primary hover:border hover:border-white hover:text-white"
                disabled={submitted}
            >
                {submitted ? "Submitting..." : "Subscribe"}
            </button>
        </form>
    );
};

export default SubscribeToNewsLetter;
