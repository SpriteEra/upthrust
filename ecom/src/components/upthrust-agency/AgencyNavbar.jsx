'use client'
import Image from 'next/image';
import Link from 'next/link';
import NavbarCTAButton from './NavbarCTAButton';
import { useEffect, useState } from 'react';
import AgencyButton from './AgencyButton';
const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    {
        name: 'Services',
        href: '#services',
        dropdown: true,
        children: ['service1', 'service2']
    },
    { name: 'Case Study', href: '#case-study' },
];

export default function AgencyNavbar({ items = navLinks }) {
    const [showNavbar, setShowNavbar] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {

    //         // 70vh scroll height
    //         const scrollTrigger = window.innerHeight * 1.2;

    //         if (window.scrollY > scrollTrigger) {
    //             setShowNavbar(true);
    //         } else {
    //             setShowNavbar(false);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth < 1280) {
                setShowNavbar(true); // Always visible on mobile/tablet
                return;
            }

            const scrollTrigger = window.innerHeight * 1.2;

            setShowNavbar(window.scrollY > scrollTrigger);
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`bg-white/50 text-black fixed top-0 z-100 backdrop-blur-xs backdrop-saturate-150 w-full flex items-center 1800:h-[134px] 2xl:h-[120px] xl:h-[100px] sm:h-20 h-19 transition-all duration-300
  ${showNavbar
                    ? 'xl:translate-y-0 xl:opacity-100'
                    : 'xl:-translate-y-full xl:opacity-0'
                }
  translate-y-0 opacity-100`}
        >
            <div className="px-4 md:px-4 lg:px-8 w-full">
                <div className="flex items-center justify-between ">
                    {/* Logo */}
                    <div className="shrink-0 ">

                        <Image src='/logo.png' height={40} width={100} alt="Upthrust agency logo" priority className="h-6 sm:h-7 3xl:h-10 object-contain w-full" />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden xl:flex justify-between items-center p-2 3xl:p-3 text-black">
                        <div className="flex items-center justify-center space-x-2 3xl:space-x-3">
                            {items.map((link) => {
                                return (
                                    <div key={link.name} className="relative group">
                                        {/* Main Nav Link */}
                                        <Link
                                            href={link.href}
                                            className="p-2.5 1800:p-3 whitespace-nowrap rounded-full text-[15px] xl:text-base 3xl:text-lg hover:bg-(--red) transition-colors duration-200 flex items-center gap-1"
                                        >
                                            {link.name}

                                            {link.dropdown && (
                                                <svg
                                                    className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 9l-7 7-7-7"
                                                    />
                                                </svg>
                                            )}
                                        </Link>

                                        {/* Dropdown Menu */}
                                        {link.dropdown && (
                                            <div className="absolute top-full left-0 mt-2 w-48 bg-white  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
                                                {link.children?.map((child, index) => (
                                                    <Link
                                                        key={index}
                                                        href={`/${child}`}
                                                        className="block px-5 py-3 text-base hover:bg-orange hover:text-white transition-colors duration-200"
                                                    >
                                                        {child}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className='max-lg:hidden'>
                        <AgencyButton color='red' text="Show Us how to scale" />
                    </div>


                    {/* Mobile menu button */}
                    <NavbarCTAButton />
                </div>
            </div>


        </nav>
    );
}