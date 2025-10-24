import React, { Suspense } from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router';
import Navbar from './Navbar';
import CircularText from './CircularText ';
import 'animate.css';

const Service = () => {
    const services = useLoaderData();
    console.log(services)
    const navigation = useNavigation();

    if (navigation.state === "loading" || !services) {
        return (
            <div className="flex justify-center items-center h-screen">
                <CircularText
                    text="INTERSTELLAR*"
                    spinDuration={20}
                    className="text-xl text-primary"
                />
            </div>
        );
    }
    return (
        <>
            <Navbar></Navbar>
            <div>


                <div className="container mx-auto mt-10 ">
                    <h2 className="text-2xl font-bold my-10 text-center">Popular Winter Care Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {services.map((service,index) => (
                            <div key={service.serviceId} className="animate__animated animate__fadeInUp card bg-base-100 shadow-lg"
                                style={{ animationDelay: `${index * 0.4}s` }}>

                                <figure>
                                    <img className='w-full object-cover md:h-80'
                                        src={service.image}
                                        alt={service.serviceName}
                                    />
                                </figure>
                                <div className="card-body">
                                    <h3 className="text-lg font-semibold">
                                        {service.serviceName}
                                    </h3>
                                    <p>Rating: {service.rating || "4.5"} ⭐</p>
                                    <p>Price: ${service.price || 25}</p>
                                    <Link to={`/services/${service.serviceId}`} className="btn btn-primary mt-2">View Details</Link>
                                </div>
                            </div>
                        ))}
                    </div>




                </div>

            </div>
        </>

    );
};

export default Service;