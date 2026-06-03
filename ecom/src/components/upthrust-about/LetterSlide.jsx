// 'use client'

// import { motion, useScroll, useTransform } from 'framer-motion'
// import { useRef } from 'react'

// const services = [
//     'Branding',
//     'Digital',
//     'Social',
//     'Website',
//     'Content',
// ]

// export default function LetterScroll() {
//     const sectionRef = useRef(null)

//     const { scrollYProgress } = useScroll({
//         target: sectionRef,
//         offset: ['start start', 'end end'],
//     })

//     return (
//         <section
//             ref={sectionRef}
//             className='relative bg-white'
//             style={{
//                 height: `${services.length * 100}vh`,
//             }}
//         >
//             {/* sticky area */}

//             <div className='sticky top-0 h-screen overflow-hidden'>
//                 <div className='grid h-full grid-cols-1 lg:grid-cols-[42%_58%]'>
//                     {/* LEFT */}

//                     <div className='flex items-center px-6 md:px-16 z-20'>
//                         <div className='max-w-[420px]'>
//                             <p className='text-black text-[20px] md:text-[22px] leading-[1.45]'>
//                                 Quick on our feet, we've helped many
//                                 different people solve problems that
//                                 have transformed their brands. We
//                                 approach{' '}
//                                 <span className='font-bold'>
//                                     boldly
//                                 </span>
//                                 -with a touch of brilliant ingenuity.
//                             </p>
//                         </div>
//                     </div>

//                     {/* RIGHT */}

//                     <div className='relative h-full overflow-hidden'>
//                         {services.map((item, index) => {
//                             /*
//                               each word animation timing
//                             */

//                             const start = index * 0.10
//                             const end = start + 0.3

//                             const y = useTransform(
//                                 scrollYProgress,
//                                 [start, end],
//                                 [700, 0]
//                             )

//                             const x = useTransform(
//                                 scrollYProgress,
//                                 [start, end],
//                                 [120, 0]
//                             )

//                             const opacity = useTransform(
//                                 scrollYProgress,
//                                 [start, end],
//                                 [0, 1]
//                             )

//                             return (
//                                 <motion.h2
//                                     key={index}
//                                     style={{
//                                         top: `${index * 100}px`,
//                                         y,
//                                         x,
//                                         opacity,
//                                     }}
//                                     className='
//     absolute
//     left-10
//     md:left-20
//     font-black
//     uppercase
//     whitespace-nowrap
//     text-black
//     tracking-[-0.02em]
//     leading-none
//     will-change-transform
//     text-[70px]

//   '
//                                 >
//                                     {item}
//                                 </motion.h2>
//                             )
//                         })}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }


// 'use client'

// import { motion, useScroll, useTransform } from 'framer-motion'
// import { useRef } from 'react'

// const services = [
//     'Branding',
//     'Digital',
//     'Social',
//     'Website',
//     'Content',
// ]

// export default function LetterScroll() {
//     const sectionRef = useRef(null)

//     const { scrollYProgress } = useScroll({
//         target: sectionRef,
//         offset: ['start start', 'end end'],
//     })

//     return (
//         <section
//             ref={sectionRef}
//             className='relative bg-white'
//             style={{
//                 height: `${services.length * 100}vh`,
//             }}
//         >
//             {/* sticky area */}

//             <div className='sticky top-0 h-screen overflow-hidden'>
//                 <div className='grid h-full grid-cols-1 lg:grid-cols-[42%_58%]'>
//                     {/* LEFT */}

//                     <div className='flex items-center px-6 md:px-16 z-20'>
//                         <div className='max-w-[420px]'>
//                             <p className='text-black text-[20px] md:text-[22px] leading-[1.45]'>
//                                 Quick on our feet, we've helped many
//                                 different people solve problems that
//                                 have transformed their brands. We
//                                 approach{' '}
//                                 <span className='font-bold'>
//                                     boldly
//                                 </span>
//                                 -with a touch of brilliant ingenuity.
//                             </p>
//                         </div>
//                     </div>

//                     {/* RIGHT */}

//                     <div className='flex flex-col justify-center gap-0 overflow-hidden'>
//                         {services.map((item, index) => {
//                             const start = index * 0.10
//                             const end = start + 0.26

//                             /*
//                               slight right deviation
//                             */

//                             const x = useTransform(
//                                 scrollYProgress,
//                                 [start, end],
//                                 [120, 0]
//                             )

//                             /*
//                               comes from bottom
//                             */

//                             const y = useTransform(
//                                 scrollYProgress,
//                                 [start, end],
//                                 [180, 0]
//                             )

//                             /*
//                               fade
//                             */

//                             const opacity = useTransform(
//                                 scrollYProgress,
//                                 [start, end],
//                                 [0, 1]
//                             )

//                             return (
//                                 <motion.div
//                                     key={index}
//                                     style={{
//                                         x,
//                                         opacity,
//                                     }}
//                                     className='overflow-hidden'
//                                 >
//                                     <h2
//                                         className='
//             uppercase
//             font-black
//             leading-[0.88]
//             tracking-[-0.06em]
//             whitespace-nowrap
//             text-black
//             text-[70px]
//             md:text-[90px]
//             lg:text-[120px]
//           '
//                                     >
//                                         {item}
//                                     </h2>
//                                 </motion.div>
//                             )
//                         })}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }


'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
    'Branding',
    'Digital',
    'Social',
    'Website',
    'Content',
]

// ── layout config ──────────────────────────────────────
const ROW_PX = 105   // px between each word's top edge
const TOP_OFFSET = 28    // px from top of right panel to first word
const ENTRY_Y = 450   // px - how far below each word starts (from bottom)
// ──────────────────────────────────────────────────────

export default function LetterScroll() {
    const sectionRef = useRef(null)
    const wordRefs = useRef([])

    useEffect(() => {
        const section = sectionRef.current
        const words = wordRefs.current
        if (!section || !words.length) return

        // Set all words to their start state (below, invisible)
        gsap.set(words, { y: ENTRY_Y, opacity: 0 })

        // ── Master timeline: purely sequential ──────────────
        // Each word animates only after the previous one settles.
        // '>' shorthand means "start after previous ends".
        const tl = gsap.timeline({ paused: true })

        words.forEach((word) => {
            tl.to(
                word,
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',   // smooth deceleration
                },
                '>'   // sequential - no overlap
            )
        })

        // ── Tie timeline to scroll ──────────────────────────
        // scrub: 1.2 → GSAP adds ~1.2s of inertia/smoothing
        // so the animation lags slightly behind scroll for a
        // silky-smooth feel rather than snapping 1:1.
        ScrollTrigger.create({
            trigger: section,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.2,
            onUpdate: (self) => {
                tl.progress(self.progress)
            },
        })

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill())
            tl.kill()
        }
    }, [])

    return (
        <section
            ref={sectionRef}
            className='relative bg-white'
            style={{ height: `${services.length * 100}vh` }}
        >
            {/* ── sticky viewport ── */}
            <div className='sticky top-0 h-screen overflow-hidden'>
                <div className='grid h-full grid-cols-1 lg:grid-cols-[42%_58%]'>

                    {/* ── LEFT ── */}
                    <div className='flex sm:items-center px-6 md:px-16 z-20'>
                        <div className='max-w-[420px]'>
                            <p className='text-black text-[20px] md:text-[22px] leading-[1.45]'>
                                This is not a place where average quietly slips through. We've built something a little stubborn on purpose, the kind of team that genuinely cannot let bad work ship.
                            </p>
                        </div>
                    </div>

                    {/* ── RIGHT - words rise from bottom, one by one ── */}
                    <div className='relative h-full overflow-hidden'>
                        {services.map((item, index) => (
                            <h2
                                key={item}
                                ref={(el) => (wordRefs.current[index] = el)}
                                style={{
                                    position: 'absolute',
                                    top: `${TOP_OFFSET + index * ROW_PX}px`,
                                    left: 0,
                                }}
                                className='
                                    left-8 md:left-16
                                    font-black
                                    uppercase
                                    whitespace-nowrap
                                    text-black
                                    tracking-[-0.02em]
                                    leading-none
                                    will-change-transform
                                    text-[70px] md:text-[90px]
                                    3xl:text-[120px]
                                    cursor-pointer
                                    pl-8 md:pl-16
                                '
                            >
                                {item}
                            </h2>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
