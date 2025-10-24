
import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ServiceDetails = () => {
    const service = useLoaderData();


    const [form, setForm] = useState({ name: "", email: "" });
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setForm({ name: "", email: "" });
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
    };

    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <div className="container mx-auto my-10">
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Service Info */}
                        <div className="md:w-2/3 bg-base-100 shadow-lg rounded-lg p-6">
                            <img
                                src={service.image}
                                alt={service.serviceName}
                                className=" h-80 t object-cover rounded-lg mb-5"
                            />
                            <h2 className="text-2xl font-bold mb-2">{service.serviceName}</h2>
                            <p><strong>Provider:</strong> {service.providerName}</p>
                            <p><strong>Email:</strong> {service.providerEmail}</p>
                            <p><strong>Price:</strong> ${service.price}</p>
                            <p><strong>Rating:</strong> {service.rating} ⭐</p>
                            <p><strong>Slots Available:</strong> {service.slotsAvailable}</p>
                            <p className="mt-3">{service.description}</p>
                            <p><strong>Category:</strong> {service.category}</p>
                        </div>

                        {/* Book Service Form */}
                        <div className="md:w-1/3 bg-base-100 shadow-lg rounded-lg p-6">
                            <h3 className="text-xl font-bold mb-4">Book This Service</h3>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="input input-bordered w-full"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="input input-bordered w-full"
                                    required
                                />
                                <button type="submit" className="btn btn-primary w-full">
                                    Book Now
                                </button>
                            </form>
                            {success && <p className="text-green-500 mt-2">Service booked successfully!</p>}
                        </div>
                    </div>
                </div>
            </main>
            <section>
                <Footer></Footer>
            </section>

        </>

    );
};

export default ServiceDetails;
