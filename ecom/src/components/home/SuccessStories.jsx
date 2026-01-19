"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TestimonialScroll = () => {
    const containerRef = useRef(null);
    const behindTextRef = useRef(null);
    const theirTextRef = useRef(null);
    const centerCardRef = useRef(null);
    const titleContainerRef = useRef(null);
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
                    end: '+=3000',
                    scrub: 1,
                    pin: true,
                }
            });

            // Scene 1: Fade out side text and center card
            tl.to(behindTextRef.current, {
                x: -0,
                opacity: 0,
                duration: 1,
                ease: 'power2.out'
            }, 0)
                .to(theirTextRef.current, {
                    x: 150,
                    opacity: 0,
                    duration: 1,
                    ease: 'power2.out'
                }, 0)
                .to(centerCardRef.current, {
                    scale: 0.7,
                    opacity: 0,
                    duration: 1,
                    ease: 'power2.out'
                }, 0);

            // Scene 2: Show title container with "The Secret Behind" on LEFT and "Their Success" on RIGHT
            tl.to(titleContainerRef.current, {
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out'
            }, 1.2)
                .fromTo(secretBehindRef.current, {
                    x: -100,
                    opacity: 0
                }, {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power3.out'
                }, 1.2)
                .fromTo(theirSuccessRef.current, {
                    x: 100,
                    opacity: 0
                }, {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power3.out'
                }, 1.5);

            // Scene 3: Fade out title
            tl.to(titleContainerRef.current, {
                opacity: 0,
                duration: 0.5,
                ease: 'power2.out'
            }, 2.8);

            // Scene 4: Show cards with scatter effect - centered
            tl.fromTo(card1Ref.current, {
                x: 0,
                y: 0,
                rotation: 0,
                opacity: 0,
                scale: 0.8
            }, {
                x: -300,
                y: 0,
                rotation: -2,
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: 'back.out(1.2)'
            }, 3.2)
                .fromTo(card2Ref.current, {
                    x: 0,
                    y: 0,
                    rotation: 0,
                    opacity: 0,
                    scale: 0.8
                }, {
                    x: -100,
                    y: 20,
                    rotation: 1,
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: 'back.out(1.2)'
                }, 3.35)
                .fromTo(card3Ref.current, {
                    x: 0,
                    y: 0,
                    rotation: 0,
                    opacity: 0,
                    scale: 0.8
                }, {
                    x: 100,
                    y: -20,
                    rotation: -1,
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: 'back.out(1.2)'
                }, 3.5)
                .fromTo(card4Ref.current, {
                    x: 0,
                    y: 0,
                    rotation: 0,
                    opacity: 0,
                    scale: 0.8
                }, {
                    x: 300,
                    y: 0,
                    rotation: 2,
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: 'back.out(1.2)'
                }, 3.65);

            // Show pagination and restart button
            tl.fromTo([paginationRef.current, restartRef.current], {
                opacity: 0,
                y: 20
            }, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power2.out'
            }, 4);

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
                {/* Background text - "Behind" on LEFT, "Their" on RIGHT */}
                <div className="absolute inset-0 flex items-center justify-between px-12 pointer-events-none">
                    <div ref={behindTextRef} className="text-9xl font-bold text-white">
                        Behind
                    </div>
                    <div ref={theirTextRef} className="text-9xl font-bold text-white">
                        Their
                    </div>
                </div>

                {/* Center testimonial card (initial state) - Stacked cards */}
                <div ref={centerCardRef} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                        {/* Background stacked cards */}
                        <div className="absolute top-0 left-0 w-full h-full bg-purple-100 rounded-lg shadow-xl transform rotate-6 -translate-y-3 translate-x-3"></div>
                        <div className="absolute top-0 left-0 w-full h-full bg-green-50 rounded-lg shadow-xl transform rotate-3 -translate-y-2 translate-x-2"></div>
                        <div className="absolute top-0 left-0 w-full h-full bg-blue-50 rounded-lg shadow-xl transform -rotate-1 -translate-y-1 translate-x-1"></div>

                        {/* Front card with content */}
                        <div className="relative bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-lg shadow-2xl w-96 transform -rotate-2">
                            <p className="text-black text-base mb-6 leading-relaxed">
                                <span className="text-3xl">"</span> We were struggling with traffic and poor conversion rates. In 6 months, Upthrust grew our organic traffic 463%, optimized our ads, and improved conversions 3x.
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-2xl">
                                    👨‍💼
                                </div>
                                <div>
                                    <p className="font-semibold text-black">Rishab</p>
                                    <p className="text-gray-600 text-sm">Carobis</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Title container - LEFT: "The Secret Behind", RIGHT: "Their Success" */}
                <div ref={titleContainerRef} className="absolute inset-0 flex items-center justify-between px-24 pointer-events-none opacity-0">
                    <div ref={secretBehindRef} className="text-left opacity-0">
                        <h1 className="text-6xl font-bold text-white leading-tight">
                            The <span className="italic font-serif">Secret</span><br />Behind
                        </h1>
                    </div>
                    <div ref={theirSuccessRef} className="text-right opacity-0">
                        <h1 className="text-6xl font-bold text-white leading-tight">
                            Their<br /><span className="italic font-serif">Success</span>
                        </h1>
                    </div>
                </div>

                {/* Testimonial cards container */}
                <div ref={cardsContainerRef} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            ref={cardRefs[index]}
                            className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 opacity-0"
                        >
                            <div className={`${testimonial.color} p-6 rounded-lg shadow-xl w-72 h-80 flex flex-col justify-between`}>
                                <div>
                                    <p className="text-black text-base leading-relaxed">
                                        <span className="text-3xl">"</span> {testimonial.text}
                                    </p>
                                </div>
                                <div className="flex items-center gap-3 mt-4">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">
                                        {testimonial.image}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-black">{testimonial.name}</p>
                                        <p className="text-gray-700 text-sm">{testimonial.company}</p>
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
                <button
                    ref={restartRef}
                    className="absolute bottom-8 right-8 flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full text-sm text-white transition-colors opacity-0"
                    onClick={handleRestart}
                >
                    <span className="text-xl">↻</span> Restart
                </button>
            </div>
        </div>
    );
};

export default TestimonialScroll;