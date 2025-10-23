import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Navbar from './Navbar';

const Service = () => {
    const services = useLoaderData();
    console.log(services)
    return (
        <>
        <Navbar></Navbar>
            <div>
                <div className="container mx-auto mt-10">
                    <h2 className="text-2xl font-bold my-10 text-center">Popular Winter Care Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {services.map((service) => (
                            <div key={service.serviceId} className="card bg-base-100 shadow-lg">
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