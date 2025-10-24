import React, { useState, useEffect } from "react";
import { useTrail, a } from "@react-spring/web";
import BannerImg from "../assets/Frame 2.png";

// Trail animation component
const Trail = ({ open, children }) => {
    const items = React.Children.toArray(children);
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 300, friction: 60 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        from: { opacity: 0, x: 20 },
    });

    return (
        <div>
            {trail.map(({ opacity, x }, index) => (
                <a.div
                    key={index}
                    style={{
                        opacity,
                        transform: x.to((x) => `translate3d(0,${x}px,0)`),
                    }}
                    className="text-white mb-3"
                >
                    {items[index]}
                </a.div>
            ))}
        </div>
    );
};

const Banner = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(true);
    }, []);

    return (
        <div className="w-11/12 mx-auto">
            <div
                className="hero min-h-screen bg-cover bg-center relative"
                style={{ backgroundImage: `url(${BannerImg})` }}
            >
                <div className="hero-overlay bg-opacity-40"></div>

                <div className="hero-content text-neutral-content text-center px-4 sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:max-w-2xl">
                        <Trail open={open}>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                                Simple Steps to Maintain Your Pet’s Coat and Well-being
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg">
                                We make tails wag with playful energy and delight,
                                we help hearts purr with contentment and love,
                                offering caring, compassionate, and dedicated pet care.
                            </p>
                            <button className="btn bg-[#F75B5F] text-white mt-4 border-none">
                                Learn More
                            </button>
                        </Trail>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
