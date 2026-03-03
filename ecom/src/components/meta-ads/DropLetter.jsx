// "use client";
// import { useEffect, useRef } from "react";
// import Matter from "matter-js";

// const WORD = "UPTHRUST";

// export default function DropLetters() {
//     const sceneRef = useRef(null);

//     useEffect(() => {
//         const {
//             Engine,
//             Render,
//             Runner,
//             Bodies,
//             Composite,
//             Events,
//         } = Matter;

//         const container = sceneRef.current;
//         const width = container.offsetWidth;
//         const height = container.offsetHeight;

//         const engine = Engine.create();
//         engine.gravity.y = 1.1;

//         const render = Render.create({
//             element: container,
//             engine,
//             options: {
//                 width,
//                 height,
//                 wireframes: false,
//                 background: "transparent", // no background
//             },
//         });

//         Render.run(render);
//         const runner = Runner.create();
//         Runner.run(runner, engine);

//         // Invisible walls (no black visible floor)
//         const wallThickness = 200;

//         const walls = [
//             Bodies.rectangle(width / 2, height + 40, width, 80, {
//                 isStatic: true,
//                 render: { visible: false },
//             }),
//             Bodies.rectangle(
//                 -wallThickness / 2,
//                 height / 2,
//                 wallThickness,
//                 height * 2,
//                 { isStatic: true, render: { visible: false } }
//             ),
//             Bodies.rectangle(
//                 width + wallThickness / 2,
//                 height / 2,
//                 wallThickness,
//                 height * 2,
//                 { isStatic: true, render: { visible: false } }
//             ),
//         ];

//         Composite.add(engine.world, walls);

//         const letters = WORD.split("");

//         const size = Math.min(width, height) * 0.32;

//         const bodies = letters.map((letter, i) => {
//             const body = Bodies.rectangle(
//                 width * 0.2 + Math.random() * width * 0.6,
//                 -300 - i * 60,
//                 size * 0.6,
//                 size,
//                 {
//                     restitution: 0.35,
//                     friction: 0.8,
//                     frictionAir: 0.02,
//                     angle: (Math.random() - 0.5) * 1.5,
//                     render: { fillStyle: "transparent" },
//                 }
//             );

//             body.customLetter = letter;
//             return body;
//         });

//         // const bodies = letters.map((letter, i) => {
//         //     // Controlled horizontal spread instead of random
//         //     const baseStartX = width * 0.1;
//         //     const spreadWidth = width * 0.6;

//         //     const step = spreadWidth / letters.length;

//         //     const startX =
//         //         baseStartX +
//         //         i * step +
//         //         (Math.random() - 0.5) * step * 0.4; // small variation only

//         //     const body = Bodies.rectangle(
//         //         startX,
//         //         -300 - i * 60, // slight vertical stagger
//         //         size * 0.6,
//         //         size,
//         //         {
//         //             restitution: 0.35,   // less bounce = more readable
//         //             friction: 0.9,
//         //             frictionAir: 0.03,
//         //             angle: (Math.random() - 0.5) * 0.8, // reduce extreme tilt
//         //             render: { fillStyle: "transparent" },
//         //         }
//         //     );

//         //     body.customLetter = letter;
//         //     return body;
//         // });
//         Composite.add(engine.world, bodies);

//         Events.on(render, "afterRender", () => {
//             const ctx = render.context;

//             ctx.textAlign = "center";
//             ctx.textBaseline = "middle";
//             ctx.fillStyle = "#111";
//             ctx.font = `900 ${size}px sans-serif`;

//             bodies.forEach((body) => {
//                 ctx.save();
//                 ctx.translate(body.position.x, body.position.y);
//                 ctx.rotate(body.angle);
//                 ctx.fillText(body.customLetter, 0, 0);
//                 ctx.restore();
//             });
//         });

//         return () => {
//             Matter.Render.stop(render);
//             Matter.Runner.stop(runner);
//             Engine.clear(engine);
//             render.canvas.remove();
//             render.textures = {};
//         };
//     }, []);

//     return (
//         <div className="w-full flex justify-start">
//             <div className="w-full md:w-[80%] h-[80vh] relative">
//                 <div ref={sceneRef} className="w-full h-full" />
//             </div>
//         </div>
//     );
// }


"use client";
import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

const WORD = "UPTHRUST";

export default function DropLetters() {
    const sceneRef = useRef(null);
    const sectionRef = useRef(null);
    const [hasStarted, setHasStarted] = useState(false);

    // 👇 Observe section visibility
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasStarted) {
                        setHasStarted(true);
                    }
                });
            },
            { threshold: 0.4 } // trigger when 40% visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [hasStarted]);

    // 👇 Matter logic runs only after visible
    useEffect(() => {
        if (!hasStarted) return;

        const {
            Engine,
            Render,
            Runner,
            Bodies,
            Composite,
            Events,
        } = Matter;

        const container = sceneRef.current;
        const width = container.offsetWidth;
        const height = container.offsetHeight;

        const engine = Engine.create();
        engine.gravity.y = 1.1;

        const render = Render.create({
            element: container,
            engine,
            options: {
                width,
                height,
                wireframes: false,
                background: "transparent",
            },
        });

        Render.run(render);
        const runner = Runner.create();
        Runner.run(runner, engine);

        const wallThickness = 200;

        const walls = [
            Bodies.rectangle(width / 2, height + 40, width, 80, {
                isStatic: true,
                render: { visible: false },
            }),
            Bodies.rectangle(
                -wallThickness / 2,
                height / 2,
                wallThickness,
                height * 2,
                { isStatic: true, render: { visible: false } }
            ),
            Bodies.rectangle(
                width + wallThickness / 2,
                height / 2,
                wallThickness,
                height * 2,
                { isStatic: true, render: { visible: false } }
            ),
        ];

        Composite.add(engine.world, walls);

        const letters = WORD.split("");
        const size = Math.min(width, height) * 0.36;

        const bodies = letters.map((letter, i) => {
            const baseStartX = width * 0.1;
            const spreadWidth = width * 0.55;
            const step = spreadWidth / letters.length;

            const startX =
                baseStartX +
                i * step +
                (Math.random() - 0.5) * step * 0.4;

            const body = Bodies.rectangle(
                startX,
                -300 - i * 60,
                size * 0.6,
                size,
                {
                    restitution: 0.35,
                    friction: 0.9,
                    frictionAir: 0.03,
                    angle: (Math.random() - 0.5) * 0.8,
                    render: { fillStyle: "transparent" },
                }
            );

            body.customLetter = letter;
            return body;
        });

        Composite.add(engine.world, bodies);

        Events.on(render, "afterRender", () => {
            const ctx = render.context;

            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = "#111";
            ctx.font = `900 ${size}px sans-serif`;

            bodies.forEach((body) => {
                ctx.save();
                ctx.translate(body.position.x, body.position.y);
                ctx.rotate(body.angle);
                ctx.fillText(body.customLetter, 0, 0);
                ctx.restore();
            });
        });

        return () => {
            Matter.Render.stop(render);
            Matter.Runner.stop(runner);
            Engine.clear(engine);
            render.canvas.remove();
            render.textures = {};
        };
    }, [hasStarted]);

    return (
        <div
            ref={sectionRef}
            className="relative w-full h-screen  overflow-hidden"
        >
            {/* TEXT - TOP RIGHT CORNER */}
            <div className="absolute top-16 right-12 z-20 text-start max-w-[720px]">

                <h2 className="text-[2.25rem] md:text-[2.5rem] lg:text-[3.125rem] xl:text-[3.75rem] 3xl:text-[4.5rem] font-semibold leading-11 md:leading-[130%] tracking-[-0.02em] xl:tracking-[-0.04em] capitalize">

                    <span className="text-xs 3xl:text-sm leading-[150%] font-normal tracking-[-0.02em] ">(WE ARE)</span>  The{" "}
                    <span className="text-[2.625rem] md:text-[3.125rem] lg:text-[3.4375rem] xl:text-[4.375rem] 3xl:text-[5rem] font-normal  leading-11 xl:leading-[120%] tracking-[-0.02em] xl:tracking-[0em] capitalize font-instrument italic">
                        Meta-First
                    </span>
                    <br />
                    Agency For Creative
                    <br />
                    Brands
                </h2>
            </div>

            {/* LETTERS */}
            <div className="absolute inset-0 flex justify-start z-10">
                <div className="w-full md:w-[80%] h-full">
                    <div ref={sceneRef} className="w-full h-full" />
                </div>
            </div>
        </div>
    );
}