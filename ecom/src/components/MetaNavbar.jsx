import Image from 'next/image';
import Link from 'next/link';
import NavbarCTAButton from './NavbarCTAButton';
import MetaRocketButton from './meta-ads/MetaRocketButton';
import MetaLeadModal from './meta-ads/MetaLeadModal';


export default function MetaNavbar({ items }) {
    return (
        <nav className="bg-white/50 text-black fixed top-0 z-100 backdrop-blur-xs backdrop-saturate-150 w-full flex items-center  2xl:h-[120px] xl:h-[100px] 1800:h-[134px] sm:h-20 h-19">
            <div className="px-4 md:px-4 lg:px-8 w-full">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="shrink-0 ">

                        <Image src='/logo.png' height={40} width={100} alt="Upthrust agency logo" priority className="w-26 sm:w-30 3xl:w-[145px] object-contain h-fit" />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden xl:flex justify-between items-center rounded-full p-2 3xl:p-3 bg-[#08070A] text-white">
                        <div className=" flex items-center justify-center space-x-2 3xl:space-x-4">
                            {items.map((link) => {
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`p-2 1800:p-3 whitespace-nowrap rounded-full text-xs 2xl:text-[13px] 3xl:text-base bg-[#19181D]  hover:bg-blue transition-colors duration-200 
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
                        <MetaRocketButton color='blue' />
                    </div>
                    {/* Mobile menu button */}
                    <NavbarCTAButton ModalComponent={MetaLeadModal} className="border-blue" />
                </div>
            </div>
        </nav>
    );
}