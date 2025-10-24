import React, { Suspense } from 'react';
import { Link, useLocation } from 'react-router';
import { useLoaderData } from 'react-router';
import CircularText from './CircularText ';
import Marquee from 'react-fast-marquee';

const Home = () => {
    const location = useLocation();
    console.log(location)
    const services = useLoaderData();
    const winterTip = [
        { id: 1, tip: "Keep your pets indoors during heavy snow." },
        { id: 2, tip: "Use pet-safe ice melt on walkways." },
        { id: 3, tip: "Provide warm blankets for your pets." }
    ];
    const vetDoctor = [
        { id: 1, name: "Dr. Steve Rogers", specialty: "Small Animals", image: "https://i.ibb.co.com/qF0JBqZF/marvel-studios-captain-america-civil-war.jpg" },
        { id: 2, name: "Dr. Thor", specialty: "Canines", image: "https://i.ibb.co.com/Lz1CF2y7/fdd769ba-9900-4271-a39d-9f9bb9cf41e9.jpg" },
        { id: 3, name: "Dr. Bruce Wayne", specialty: "Felines", image: "https://i.ibb.co.com/Xr1WH2L8/d5d24991-e255-43c5-a653-e0f488c89bc6.jpg" },
        { id: 3, name: "Dr. Banner", specialty: "Cats", image: "https://i.ibb.co.com/tPkfmNRN/62acc1ba-0c24-4e14-bef1-449fcb17d0b2.jpg" }
    ];

    return (
        <div className=" w-11/12 mx-auto mt-10">


            {/* Services Section */}
            <h2 className="text-2xl font-bold my-10 text-center">Popular Winter Care Services</h2>
            <Suspense fallback={
                <div>
                    <CircularText
                        text="INTERSTELLAR*COMPONENTS*"
                        onHover="speedUp"
                        spinDuration={20}
                        className="custom-class"
                    />

                </div>
            }>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <div key={service.serviceId} className="card bg-base-100 shadow-lg">
                            <figure>
                                <img className='w-full object-cover md:h-90'
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
            </Suspense>

            <div className='flex justify-center items-center my-10'>
                <Link to="/services" className='btn btn-primary'>See More</Link>
            </div>

            {/* Winter Tips Section */}
            <section className="my-16">
                <h2 className="text-2xl font-bold mb-5 text-center">Winter Care Tips for Pets</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {winterTip.map((tip) => (
                        <div key={tip.id} className="card bg-base-100 shadow-md p-4">
                            <div className="card-body">
                                <p className="text-lg">• {tip.tip}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Expert Vets Section */}
            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-5 text-center">Meet Our Expert Vets</h2>
                <Marquee>
                    <div className="grid grid-cols-4 my-4  hover:cursor-pointer">
                        {vetDoctor.map((vet) => (
                            <div key={vet.id} className="card bg-base-100 space-x-6 shadow-lg">
                                <figure>
                                    <img
                                        src={vet.image}
                                        alt={vet.name}
                                        className="w-full h-100 object-cover rounded-s-sm"
                                    />
                                </figure>
                                <div className="card-body text-center">
                                    <h3 className="text-lg font-semibold">{vet.name}</h3>
                                    <p>{vet.specialty}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Marquee>

            </section>




        </div>
    );
};

export default Home;
