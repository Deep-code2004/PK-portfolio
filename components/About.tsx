import React from 'react';

const About: React.FC = () => {
    return (
        <section className="py-20 sm:py-24 bg-neutral-100">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-3xl sm:text-4xl font-bold font-display text-neutral-900">About Me</h2>
                        <p className="mt-6 text-lg text-neutral-700 max-w-xl">
                            With over 12 years of experience in the financial services industry, I am dedicated to helping individuals and families navigate the complexities of financial planning. My mission is to provide personalized, honest, and effective solutions that empower my clients to achieve financial independence and peace of mind.
                        </p>
                        <p className="mt-4 text-lg text-neutral-700 max-w-xl">
                            I believe in building long-term relationships based on trust and transparency. Whether you're planning for retirement, seeking the right insurance coverage, or looking for investment opportunities, I'm here to guide you every step of the way.
                        </p>
                    </div>
                    <div className="lg:w-1/2">
                        <img
                            src="/PK-portfolio/pk1.jpeg"
                            alt="About the advisor"
                            width={600}
                            height={500}
                            loading="lazy"
                            className="w-full max-w-md mx-auto lg:mx-0 rounded-lg shadow-xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
