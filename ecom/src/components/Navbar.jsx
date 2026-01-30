import Image from 'next/image';
import Link from 'next/link';
import StylishButton from '@/common/RocketButton';
const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact Library', href: '#contact-library' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Why Upthrust?', href: '#why-upthrust' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Here From Them', href: '#here-from-them' },
];

export default function Navbar({ items = navLinks }) {

    return (
        <nav className="bg-white/50 text-black fixed top-0 z-100 backdrop-blur-xs backdrop-saturate-150 w-full flex items-center 3xl:h-[134px] 2xl:h-[120px] xl:h-[100px] sm:h-20 h-19">
            <div className="px-2  sm:px-4 md:px-4 lg:px-8 w-full">
                <div className="flex items-center justify-between ">
                    {/* Logo */}
                    <div className="shrink-0 ">

                        <Image src='/logo.png' height={100} width={200} alt="Upthrust agency logo" priority className="h-6 sm:h-7 3xl:h-10 object-contain w-full" />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden xl:flex justify-between items-center rounded-full p-2 bg-[#08070A] text-white">
                        <div className=" flex items-center justify-center space-x-2">
                            {items.map((link) => {
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`px-3 py-2 2xl:py-2 whitespace-nowrap rounded-full text-xs 2xl:text-[13px] 3xl:text-[16px] bg-[#19181D]  hover:bg-(--red) transition-colors duration-200 
                                            `}
                                    // ${isActive ? 'bg-(--red) text-white' : 'bg-white/10'}
                                    >
                                        {link.name}
                                    </Link>
                                )
                            })}
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
                    </div>
                </div>
            </div>


        </nav>
    );
}