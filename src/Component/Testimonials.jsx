import React from "react";

const testimonials = [
    {
        name: "Alice Johnson",
        feedback: "WarmPaws helped me find the perfect pet supplies! Highly recommended.",
        img: "https://randomuser.me/api/portraits/men/65.jpg"
    },
    {
        name: "Bob Smith",
        feedback: "Fast delivery and amazing products. My pets love it!",
        img: "https://randomuser.me/api/portraits/men/43.jpg"
    },
    {
        name: "Clara Lee",
        feedback: "Excellent customer service and great quality products.",
        img: "https://randomuser.me/api/portraits/men/22.jpg"
    }
];

const Testimonials = () => {
    return (
        <section className=" py-16">
            <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
                {testimonials.map((t, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow text-center">
                        <img src={t.img} alt={t.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
                        <p className="text-gray-700 mb-2">"{t.feedback}"</p>
                        <h3 className="font-semibold text-blue-500">{t.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
