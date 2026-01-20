"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SuccessStories = () => {
    const containerRef = useRef(null);
    const secretBehindRef = useRef(null);
    const theirSuccessRef = useRef(null);
    const cardsContainerRef = useRef(null);
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);
    const card4Ref = useRef(null);
    const paginationRef = useRef(null);
    const restartRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Create main timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: '+=2000',
                    scrub: 1,
                    pin: true,
                }
            });

            // ALL ANIMATIONS WORK TOGETHER
            // Title slides in from left
            tl.fromTo(secretBehindRef.current, {
                x: -400,
                y: 100,
                opacity: 0
            }, {
                x: 300,
                y: 100,
                opacity: 1,
                duration: 1.5,
                ease: 'power3.out'
            }, 0);

            // Title slides in from right (below left text)
            tl.fromTo(theirSuccessRef.current, {
                x: 600,
                y: 200,
                opacity: 0
            }, {
                x: 50,
                y: 200,
                opacity: 1,
                duration: 1.5,
                ease: 'power3.out'
            }, 0);

            // Card 1 - starts stacked with rotation, spreads to left
            tl.fromTo(card1Ref.current, {
                x: 0,
                y: 0,
                rotation: -8,
                opacity: 1,
                scale: 0.95
            }, {
                x: -450,
                y: 200,
                rotation: 0,
                opacity: 1,
                scale: 1,
                duration: 1.5,
                ease: 'back.out(1.2)'
            }, 0);

            // Card 2 - starts stacked with rotation
            tl.fromTo(card2Ref.current, {
                x: 0,
                y: 0,
                rotation: -3,
                opacity: 1,
                scale: 0.97
            }, {
                x: -150,
                y: 200,
                rotation: 0,
                opacity: 1,
                scale: 1,
                duration: 1.5,
                ease: 'back.out(1.2)'
            }, 0);

            // Card 3 - starts stacked with rotation
            tl.fromTo(card3Ref.current, {
                x: 0,
                y: 0,
                rotation: 3,
                opacity: 1,
                scale: 0.98
            }, {
                x: 150,
                y: 200,
                rotation: 0,
                opacity: 1,
                scale: 1,
                duration: 1.5,
                ease: 'back.out(1.2)'
            }, 0);

            // Card 4 - starts stacked with rotation, spreads to right
            tl.fromTo(card4Ref.current, {
                x: 0,
                y: 0,
                rotation: 8,
                opacity: 1,
                scale: 0.99
            }, {
                x: 450,
                y: 200,
                rotation: 0,
                opacity: 1,
                scale: 1,
                duration: 1.5,
                ease: 'back.out(1.2)'
            }, 0);

            // Show pagination and restart button
            tl.fromTo([paginationRef.current, restartRef.current], {
                opacity: 0,
                y: 20
            }, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power2.out'
            }, 1.8);

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const handleRestart = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const testimonials = [
        {
            text: "Upthrust promised 90 days. We saw results in 47 days. Traffic improved, conversions went up, sales became exponential. Worth every penny.",
            name: "Troy",
            company: "MC Overalls",
            image: "👨",
            color: "bg-red-100"
        },
        {
            text: "We were struggling with traffic and poor conversion rates. In 6 months, Upthrust grew our organic traffic 463%, optimized our ads, and improved conversions 3x.",
            name: "Rishab",
            company: "Carobis",
            image: "👨‍💼",
            color: "bg-orange-100"
        },
        {
            text: "Most leads would disqualify we couldn't convert. Upthrust changed that with property-specific targeting and smart budget allocation. Lead quality and conversion improved significantly.",
            name: "Gunjan",
            company: "Housr",
            image: "👩",
            color: "bg-green-100"
        },
        {
            text: "$4,900 with Upthrust returned 2.7x immediately. Now doing $51K+ monthly with multi-channel campaigns. They don't track vanity metrics, they know what growth truly means.",
            name: "Dan",
            company: "Dan Studio",
            image: "👩‍💼",
            color: "bg-purple-100"
        }
    ];

    const cardRefs = [card1Ref, card2Ref, card3Ref, card4Ref];

    return (
        <div className="min-h-[400vh] bg-black mt-20">
            <div ref={containerRef} className="h-screen w-full relative overflow-hidden">

                {/* Title - starts from sides, ends at top-left */}
                <div className="absolute top-0 left-0 right-0 pointer-events-none">
                    <div ref={secretBehindRef} className="absolute opacity-0">
                        <h1 className="text-8xl font-bold text-white leading-tight whitespace-nowrap">
                            The <span className="italic font-serif">Secret</span> Behind
                        </h1>
                    </div>
                    <div ref={theirSuccessRef} className="absolute opacity-0">
                        <h1 className="text-8xl font-bold text-white leading-tight whitespace-nowrap">
                            Their <span className="italic font-serif">Success</span>
                        </h1>
                    </div>
                </div>

                {/* Testimonial cards - start stacked in center with different angles */}
                <div ref={cardsContainerRef} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            ref={cardRefs[index]}
                            className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2"
                        >
                            <div className={`${testimonial.color} p-5 rounded-lg shadow-xl w-64 h-72 flex flex-col justify-between`}>
                                <div>
                                    <p className="text-black text-sm leading-relaxed">
                                        <span className="text-2xl">&quot;</span> {testimonial.text}
                                    </p>
                                </div>
                                <div className="flex items-center gap-3 mt-3">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl">
                                        {testimonial.image}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-black text-sm">{testimonial.name}</p>
                                        <p className="text-gray-700 text-xs">{testimonial.company}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination indicator */}
                <div
                    ref={paginationRef}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-gray-800 px-4 py-2 rounded-full opacity-0"
                >
                    <button className="text-gray-400 hover:text-white transition-colors">←</button>
                    <span className="text-sm text-white">2 / 3</span>
                    <button className="text-gray-400 hover:text-white transition-colors">→</button>
                </div>

                {/* Restart button */}
                {/* <button
                    ref={restartRef}
                    className="absolute bottom-8 right-8 flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full text-sm text-white transition-colors opacity-0"
                    onClick={handleRestart}
                >
                    <span className="text-xl">↻</span> Restart
                </button> */}
            </div>
        </div>
    );
};

export default SuccessStories;