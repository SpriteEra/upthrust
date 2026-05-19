import AboutNavbar from '@/components/upthrust-about/AboutNavbar'
import TeamGallery from '@/components/upthrust-about/GridImage'
import MarqueeSlider from '@/components/upthrust-about/ImageMarquee'
import LetterScroll from '@/components/upthrust-about/LetterSlide'
import TestimonialSlide from '@/components/upthrust-about/TestimonialSlide'
import AgencyBrandSlider from '@/components/upthrust-agency/AgencyBrandSlider'
import AgencyButton from '@/components/upthrust-agency/AgencyButton'
import AgencyFooter from '@/components/upthrust-agency/AgencyFooter'
import AgencyHeading from '@/components/upthrust-agency/AgencyHeading'
import Image from 'next/image'
import React from 'react'

const topImages = [
    '/main-agency/about-us/leftimg1.png',
    '/main-agency/about-us/leftimg2.png',
    '/main-agency/about-us/leftimg3.png',
    '/main-agency/about-us/leftimg4.png',


]

const bottomImages = [
    '/main-agency/about-us/rightimg1.png',
    '/main-agency/about-us/rightimg2.png',
    '/main-agency/about-us/rightimg3.png',
    '/main-agency/about-us/rightimg4.png',

]

const brandsRow1 = [
    { id: 1, name: "", logo: "/brands/brand-black/tata-cliq.webp", logoWidth: "w-20", logoHeight: "h-6" },
    { id: 2, name: "", logo: "/brands/brand-black/housr.webp", logoWidth: "w-16", logoHeight: "h-6" },
    { id: 3, name: "", logo: "/brands/brand-black/bagwani.webp", logoWidth: "w-40!", logoHeight: "h-10" },
    { id: 4, name: "", logo: "/brands/brand-black/mukunda-foods.webp", logoWidth: "w-40!", logoHeight: "h-6 3xl:h-10!" },
    { id: 5, name: "", logo: "/brands/brand-black/libas.webp", logoWidth: "w-16", logoHeight: "h-6 3xl:h-9!" },
    { id: 6, name: "", logo: "/brands/brand-black/biba.webp", logoWidth: "w-14", logoHeight: "h-6 3xl:h-9!" },
    { id: 7, name: "", logo: "/brands/brand-black/manohar-lal.webp", logoWidth: "w-20", logoHeight: "h-8" },
    { id: 8, name: "", logo: "/brands/brand-black/shopeetite.webp", logoWidth: "w-18", logoHeight: "h-6" },
    { id: 9, name: "", logo: "/brands/brand-black/yummie.webp", logoWidth: "w-18", logoHeight: "h-6" },
    { id: 10, name: "", logo: "/brands/brand-black/bosch.webp", logoWidth: "w-20", logoHeight: "h-7" },
    { id: 11, name: "", logo: "/brands/brand-black/the-sweet-blend.webp", logoWidth: "w-20", logoHeight: "h-6" },
    { id: 12, name: "", logo: "/brands/brand-black/victoria-secret.webp", logoWidth: "w-22", logoHeight: "h-5" },
    { id: 13, name: "", logo: "/brands/brand-black/nurture-india.webp", logoWidth: "w-20", logoHeight: "h-6" },
    { id: 14, name: "", logo: "/brands/brand-black/dhenu.webp", logoWidth: "w-16", logoHeight: "h-7" },
    { id: 15, name: "", logo: "/brands/brand-black/dell.webp", logoWidth: "w-14", logoHeight: "h-8" },
];

const brandsRow2 = [
    { id: 1, name: "", logo: "/brands/brand-black/zomato.webp", logoWidth: "w-20", logoHeight: "h-6" },
    { id: 2, name: "", logo: "/brands/brand-black/urban.webp", logoWidth: "w-16", logoHeight: "h-6" },
    { id: 3, name: "", logo: "/brands/brand-black/welspun.webp", logoWidth: "w-20", logoHeight: "h-6" },
    { id: 4, name: "", logo: "/brands/brand-black/ok.webp", logoWidth: "w-14", logoHeight: "h-7" },
    { id: 5, name: "", logo: "/brands/brand-black/zipnow.webp", logoWidth: "w-20", logoHeight: "h-6" },
    { id: 6, name: "", logo: "/brands/brand-black/petco.webp", logoWidth: "w-20", logoHeight: "h-7" },
    { id: 7, name: "", logo: "/brands/brand-black/velbiom.webp", logoWidth: "w-22", logoHeight: "h-6" },
    { id: 8, name: "", logo: "/brands/brand-black/james-allen.webp", logoWidth: "w-24", logoHeight: "h-5" },
    { id: 9, name: "", logo: "/brands/brand-black/neon-attack.webp", logoWidth: "w-18", logoHeight: "h-8" },
    { id: 10, name: "", logo: "/brands/brand-black/jagwonder.webp", logoWidth: "w-20", logoHeight: "h-6" },
    { id: 11, name: "", logo: "/brands/brand-black/beyond.webp", logoWidth: "w-18", logoHeight: "h-6" },
    { id: 12, name: "", logo: "/brands/brand-black/mc-overalls.webp", logoWidth: "w-16", logoHeight: "h-7" },
    { id: 13, name: "", logo: "/brands/brand-black/tiggle.webp", logoWidth: "w-18", logoHeight: "h-6" },
    { id: 14, name: "", logo: "/brands/brand-black/harley-davidson.webp", logoWidth: "w-22", logoHeight: "h-6" },
    { id: 15, name: "", logo: "/brands/brand-black/audio-art.webp", logoWidth: "w-18", logoHeight: "h-6" },
    { id: 16, name: "", logo: "/brands/brand-black/loreal.webp", logoWidth: "w-18", logoHeight: "h-6" },
    { id: 17, name: "", logo: "/brands/brand-black/last-suppy.webp", logoWidth: "w-18", logoHeight: "h-6" },
];

const members = [
    'Akshey Gera',
    'Aditya',
    'Shubham Sharma',
    'Rajat Sharma',
    'Dev Kumar',
    'Nirupum Nishant',
    'Prachi Pancholi',
    'Isha Katiyar',
    'Aaditya Porwal',
    'Vikshita Jain',
    'Bhavika',
    'MD Ismail',
    'Anmol Gupta',
    'Mehak Taneja',
    'Vardaan Singh',
    'Ashray Bajaj',
    'Mayank Malik',
    'Gaurvi',
    'Keerti Gulati',
    'Yogesh Dayma',
    'Ishika',
    'Vaibhav Mohan',
    'Kriti Singh',
    'Spardha Wadekar',
    'Sumit Kumar',
]


const page = () => {
    return (
        <div className="w-full flex flex-col justify-center ">
            <AboutNavbar />
            <section className="bg-black h-[97vh] sm:h-[135vh] max-h-[1024px] w-full">
                <div className="px-4 xl:px-15 3xl:px-20 mt-30 sm:mt-45 3xl:mt-60">
                    <div className="hidden sm:block">
                        <AgencyHeading
                            textColor='text-white'
                            align='left'
                            tag="h1"
                            heading={[
                                {
                                    line: [
                                        { type: "normal", text: "We don't make ads." },
                                    ],
                                },
                                {
                                    line: [
                                        { type: "normal", text: `We make the Creatives` },
                                    ]
                                },
                                {
                                    line: [
                                        { type: "normal", text: "people will " },
                                        { type: "italic", text: "screenshot and share " },
                                    ]
                                },
                            ]}
                            // label="HOW WE OPERATE"
                            subtitle="Upthrust is a creative agency for brands tired of looking like everyone copied each other's homework. We build work that stacks, compounds, and quietly makes your competitors very uncomfortable."
                            subTitleCss="max-w-2xl 3xl:max-w-3xl text-left"
                        />
                    </div>
                    <div className="block sm:hidden" >
                        <AgencyHeading
                            textColor='text-white'
                            align='left'
                            tag="h1"
                            heading={[
                                {
                                    line: [
                                        { type: "normal", text: "We don't make ads." },
                                    ],
                                },
                                {
                                    line: [
                                        { type: "normal", text: `We make the` },
                                    ]
                                },
                                {
                                    line: [
                                        { type: "normal", text: "people will " },
                                        { type: "italic", text: "screenshot and share " },
                                    ]
                                },
                            ]}
                            // label="HOW WE OPERATE"
                            subtitle="Upthrust is a creative agency for brands tired of looking like everyone copied each other's homework. We build work that stacks, compounds, and quietly makes your competitors very uncomfortable."
                            subTitleCss="max-w-2xl 3xl:max-w-3xl text-left"
                        />
                    </div>
                </div>
            </section>
            <div className="absolute top-130 3xl:top-160 max-h-[600px] 3xl:max-h-[876px] w-[85%] left-1/2 -translate-x-1/2">
                <MarqueeSlider
                    topImages={topImages}
                    bottomImages={bottomImages}
                    speed={50}
                />
            </div>
            <div className=" mt-38 sm:mt-190 3xl:mt-170">
                <AgencyHeading
                    tag="h2"
                    heading={[
                        {
                            line: [
                                { type: "normal", text: "Not for brands who describe " },
                            ],
                        },

                        {
                            line: [
                                { type: "normal", text: "themselves as " },
                                { type: "italic", text: `"Ordinary"` },
                            ]
                        },
                    ]}
                />
                <TestimonialSlide />
            </div>
            <div>
                <AgencyBrandSlider brandsRow1={brandsRow1} brandsRow2={brandsRow2} />
            </div>

            <div className="flex max-sm:flex-col max-sm:gap-y-8 justify-between w-full max-w-[85%] mx-auto py-20 ">

                {/* Left Content */}
                <div className="w-full sm:w-[35%]">
                    <p className="uppercase tracking-[-0.02em] leading-[150%] text-[14px] text-black mb-4">
                        in our dna
                    </p>

                    <h2 className="text-[40px] 3xl:text-5xl  font-semibold leading-[130%] tracking-[-0.02em] text-black">
                        We don't just<br /> recommend AI. <br />We run on it.
                    </h2>
                    <p className="mt-4 text-black leading-[150%] tracking-[-0.02em] text-base 3xl:text-xl  max-w-lg mb-8 ">
                        Claude Code is how a team our size moves at a pace that shouldn't be possible. Every designer, strategist, and writer here uses it daily, on real briefs, for real clients.
                        <br />
                        Not to replace the thinking. To get rid of everything that slows it down.
                    </p>
                    <AgencyButton text='See The Work' />
                </div>

                {/* Right Slider */}
                <div className=" h-full w-full sm:w-[65%] overflow-hidden ">
                    <Image width={1200} height={600} src="/main-agency/about-us/claude-code.svg" alt="claude-code works" className="max-sm:h-[358px] max-sm:object-cover sm:aspect-1200/600" />
                </div>
            </div>
            <div className="py-10">
                <AgencyHeading
                    tag="h2"
                    heading={[
                        {
                            line: [
                                { type: "italic", text: `Built different.` },
                                { type: "normal", text: "Not just" },
                            ]
                        },
                        {
                            line: [
                                { type: "normal", text: "bigger but compelling" },
                            ],
                        },
                    ]}
                    label="Founded in 2021"
                    subtitle="No account managers playing telephone. No juniors doing the work seniors take credit for. When you hire Upthrust, you get whoever actually had the idea. Same brain. Same inbox. Same problem."
                    subTitleCss="max-w-2xl 3xl:max-w-3xl "
                />
                <div className="flex w-full py-10  overflow-hidden">
                    <Image width={2000} height={799} src="/main-agency/about-us/team.png" alt="team picture" className=" aspect-auto/799  w-full object-contain" />
                </div>


            </div>
            <div>
                <p className="text-[32px] lg:text-[28px] py-5 lg:py-10 3xl:text-4xl leading-[130%] tracking-[-0.02em] max-w-[85%] mx-auto font-semibold">
                    We didn't set out to build the loudest agency in the room, just the one doing the best work in it. If the brief is boring, we'll tell you, fix it together, make something worth putting your name on. That part matters more than most clients expect.
                </p>
                <div className="flex w-full py-10  overflow-hidden">
                    <Image width={2500} height={900} src="/main-agency/about-us/framepic.png" alt="team picture" className=" 3xl:aspect-auto/900  w-full object-contain" />
                </div>

            </div>
            <div className="pt-10 sm:pt-15 sm:pb-10">
                <AgencyHeading
                    tag="h2"
                    heading={[
                        {
                            line: [
                                { type: "normal", text: "The Minds Behind " },
                                { type: "italic", text: `the Work` },
                            ]
                        },

                    ]}
                    // label="Founded in 2021"
                    subtitle="Designers, strategists, writers, and performance marketers who get personally offended by average work. They chose this. Ships every time."
                    subTitleCss="max-w-2xl 3xl:max-w-3xl "
                />
                <TeamGallery />
            </div>

            <div>
                <LetterScroll />
            </div>

            <div className="py-20">
                <AgencyHeading
                    tag="h2"
                    heading={[
                        {
                            line: [
                                { type: "normal", text: "The Minds Behind " },
                                { type: "italic", text: `the Work` },
                            ]
                        },

                    ]}
                    label="Founded in 2021"
                    subtitle="Designers, strategists, writers, and performance marketers who get personally offended by average work. They chose this. Ships every time."
                    subTitleCss="max-w-2xl 3xl:max-w-3xl "
                />
                <section className='w-full py-10 sm:py-20'>
                    <div className='max-w-6xl mx-auto px-2 sm:px-4'>
                        <div className='flex flex-wrap justify-center gap-3'>
                            {members.map((member, index) => (
                                <button
                                    key={index}
                                    className='py-1.5 px-4
                sm:px-7
                sm:py-3
                rounded-full
                border
                border-black/70
                text-black
                text-[12px]
                lg:text-[18px] 3xl:text-[24px]
                font-normal
                leading-[150%]
                tracking-[-0.02em]
                transition-all
                duration-300
                hover:bg-black
                hover:text-white
              '
                                >
                                    {member}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <AgencyFooter />
        </div>
    )
}

export default page