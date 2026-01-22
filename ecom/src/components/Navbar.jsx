'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import StylishButton from '@/common/RocketButton';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Contact Library', href: '#contact-library' },
        { name: 'Case Studies', href: '#case-studies' },
        { name: 'Why Limitless?', href: '#why-limitless' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Make From Plans', href: '#plans' },
    ];

    return (
        <nav className="bg-white/50 text-black fixed top-0 z-100 backdrop-blur-xs backdrop-saturate-150 w-full flex items-center 3xl:h-[134px] 2xl:h-[120px] xl:h-[100px] sm:h-20 h-19">
            <div className="px-2  sm:px-4 md:px-4 lg:px-8 w-full">
                <div className="flex items-center justify-between ">
                    {/* Logo */}
                    <div className="shrink-0 ">

                        <Image src='/logo.png' height={100} width={200} alt="logo" priority className="h-6 sm:h-7 3xl:h-10 object-contain w-full" />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden xl:flex justify-between items-center rounded-full p-2 bg-[#08070A] text-white">
                        <div className=" flex items-center justify-center space-x-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="px-3 py-2 2xl:py-2 whitespace-nowrap rounded-full text-xs 2xl:text-[13px] 3xl:text-[16px]  bg-white/10 hover:bg-(--red) transition-colors duration-200"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className='max-lg:hidden'>
                        <StylishButton color='red' />
                    </div>


                    {/* Mobile menu button */}
                    <div className="lg:hidden max-lg:flex gap-0 sm:gap-2">
                        <button
                            className="px-5 rounded-full py-2.5 sm:py-3 md:py-3.5 bg-black border-2 border-(--red) hover:bg-(--black) hover:border- text-white text-xs transition-colors duration-200 flex items-center space-x-1 sm:space-x-2 relative group font-medium"
                        >
                            Book A Demo Call
                        </button>
                        {/* <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center px-1 sm:p-2 rounded-md hover:bg-gray-800 focus:outline-none"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button> */}
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="lg:hidden border-t border-gray-800">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 transition-colors duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="pt-4 space-y-2">
                            <button className="w-full px-4 py-2 text-sm font-medium hover:bg-gray-800 rounded-lg transition-colors duration-200">
                                Show Us
                            </button>
                            <button className="w-full px-5 py-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                                <span>How To Scale</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}