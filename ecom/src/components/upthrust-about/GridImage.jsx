'use client'

import Image from 'next/image'

const galleryImages = [
    {
        id: 1,
        src: '/main-agency/about-us/gallery/pic1.png',
        col: 'col-span-2 ',
        row: 'row-span-1',
    },
    {
        id: 2,
        src: '/main-agency/about-us/gallery/pic2.png',
        col: 'col-span-1',
        row: 'row-span-1',
    },
    {
        id: 3,
        src: '/main-agency/about-us/gallery/pic3.png',
        col: 'col-span-1',
        row: 'row-span-1',
    },
    {
        id: 4,
        src: '/main-agency/about-us/gallery/pic4.png',
        col: 'col-span-2 ',
        row: 'row-span-1',
    },
    {
        id: 5,
        src: '/main-agency/about-us/gallery/pic5.png',
        col: 'col-span-1 ',
        row: 'row-span-1',
    },
    {
        id: 6,
        src: '/main-agency/about-us/gallery/pic6.png',
        col: 'col-span-1 ',
        row: 'row-span-1',
    },
    {
        id: 7,
        src: '/main-agency/about-us/gallery/pic7.png',
        col: 'col-span-2',
        row: 'row-span-1',
    },
    {
        id: 8,
        src: '/main-agency/about-us/gallery/pic8.png',
        col: 'col-span-1 ',
        row: 'row-span-1',
    },
    {
        id: 9,
        src: '/main-agency/about-us/gallery/pic9.png',
        col: 'col-span-1 ',
        row: 'row-span-1',
    },
    {
        id: 10,
        src: '/main-agency/about-us/gallery/pic10.png',
        col: 'col-span-2',
        row: 'row-span-1',
    },
]

export default function TeamGallery() {
    return (
        <section className="w-full py-10 bg-white">
            <div className="px-4 3xl:px-8 flex flex-col justify-center w-full">

                <div className="grid grid-cols-2 auto-rows-[190px]  lg:auto-rows-[500px] 3xl:auto-rows-[800px] gap-2 sm:gap-4">

                    {galleryImages.map((item) => (
                        <div
                            key={item.id}
                            className={`
                                ${item.col}
                                ${item.row}
                                relative
                                overflow-hidden
                                rounded-[4px] sm:rounded-2xl
                                group
                            `}
                        >
                            <Image
                                src={item.src}
                                alt={`gallery-image-${item.id}`}
                                fill
                                className="
                                    object-cover
                                    transition-transform
                                    duration-500
                                    group-hover:scale-105
                                "
                            />
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}