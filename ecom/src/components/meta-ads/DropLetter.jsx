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


// "use client";
// import { useEffect, useRef, useState } from "react";
// import Matter from "matter-js";

// const WORD = "UPTHRUST";

// export default function DropLetters({
//     titleItalic = "Meta-First",
//     titleNormal = "Agency For Creative Brands",
// }) {
//     const sceneRef = useRef(null);
//     const sectionRef = useRef(null);
//     const [hasStarted, setHasStarted] = useState(false);

//     // Observe section
//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting && !hasStarted) {
//                         setHasStarted(true);
//                     }
//                 });
//             },
//             { threshold: 0.4 }
//         );

//         if (sectionRef.current) observer.observe(sectionRef.current);

//         return () => observer.disconnect();
//     }, [hasStarted]);

//     useEffect(() => {
//         if (!hasStarted) return;

//         const { Engine, Render, Runner, Bodies, Composite, Events } = Matter;

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
//                 background: "transparent",
//             },
//         });

//         Render.run(render);
//         const runner = Runner.create();
//         Runner.run(runner, engine);

//         const wallThickness = 200;

//         const walls = [
//             Bodies.rectangle(width / 2, height + 40, width, 80, {
//                 isStatic: true,
//                 render: { visible: false },
//             }),
//             Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height * 2, {
//                 isStatic: true,
//                 render: { visible: false },
//             }),
//             Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height * 2, {
//                 isStatic: true,
//                 render: { visible: false },
//             }),
//         ];

//         Composite.add(engine.world, walls);

//         const letters = WORD.split("");

//         // Responsive letter size
//         const size =
//             width < 640
//                 ? Math.min(width, height) * 0.28
//                 : width < 1024
//                     ? Math.min(width, height) * 0.30
//                     : Math.min(width, height) * 0.32;

//         // Safe spacing
//         const padding = width * 0.04;
//         const usableWidth = width - padding * 2;
//         const step = usableWidth / letters.length;

//         const bodies = letters.map((letter, i) => {
//             const startX =
//                 padding + i * step + step / 2 + (Math.random() - 0.5) * step * 0.15;

//             const body = Bodies.rectangle(
//                 startX,
//                 -350 - i * 70,
//                 size * 0.6,
//                 size,
//                 {
//                     restitution: 0.35,
//                     friction: 0.9,
//                     frictionAir: 0.03,
//                     angle: (Math.random() - 0.5) * 0.8,
//                     render: { fillStyle: "transparent" },
//                 }
//             );

//             body.customLetter = letter;
//             return body;
//         });

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
//     }, [hasStarted]);

//     return (
//         <div
//             ref={sectionRef}
//             className="relative w-full h-[120vh] md:h-[150vh] overflow-hidden"
//         >
//             {/* Heading */}
//             <div className="absolute top-20 md:top-32 max-lg:left-1/2 max-lg:-translate-x-1/2 lg:right-[3%] 3xl:right-[7%] z-20 text-start max-w-[720px]">

//                 <h2 className="text-[2.25rem] md:text-[2.5rem] lg:text-[3.125rem] xl:text-[3.75rem] 3xl:text-[4.5rem] font-semibold leading-11 md:leading-[130%] tracking-[-0.02em] xl:tracking-[-0.04em] capitalize max-w-xl">

//                     <span className="text-xs 3xl:text-sm leading-[150%] font-normal tracking-[-0.02em]">
//                         (WE ARE)
//                     </span>{" "}
//                     The{" "}
//                     <span className="text-[2.625rem] md:text-[3.125rem] lg:text-[3.4375rem] xl:text-[4.375rem] 3xl:text-[5rem] font-normal leading-11 xl:leading-[120%] tracking-[-0.02em] xl:tracking-[0em] capitalize font-instrument italic whitespace-pre-line">
//                         {titleItalic}
//                     </span>
//                     <br />
//                     {titleNormal}
//                 </h2>
//             </div>

//             {/* Letter physics area */}
//             <div className="absolute inset-0 flex justify-start pt-[180px] md:pt-[260px] z-10">
//                 <div className="w-full md:w-[75%] h-full">
//                     <div ref={sceneRef} className="w-full h-full" />
//                 </div>
//             </div>
//         </div>
//     );
// }


// "use client";
// import { useEffect, useRef, useState } from "react";
// import Matter from "matter-js";

// const WORD = "UPTHRUST";

// export default function DropLetters({
//     titleItalic = "Meta-First",
//     titleNormal = "Agency For Creative Brands",
// }) {
//     const sceneRef = useRef(null);
//     const sectionRef = useRef(null);
//     const [hasStarted, setHasStarted] = useState(false);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting && !hasStarted) {
//                         setHasStarted(true);
//                     }
//                 });
//             },
//             { threshold: 0.4 }
//         );

//         if (sectionRef.current) observer.observe(sectionRef.current);

//         return () => observer.disconnect();
//     }, [hasStarted]);

//     useEffect(() => {
//         if (!hasStarted) return;

//         const { Engine, Render, Runner, Bodies, Composite, Events } = Matter;

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
//                 background: "transparent",
//             },
//         });

//         Render.run(render);
//         const runner = Runner.create();
//         Runner.run(runner, engine);

//         const wallThickness = 200;

//         const walls = [
//             Bodies.rectangle(width / 2, height + 40, width, 80, {
//                 isStatic: true,
//                 render: { visible: false },
//             }),
//             Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height * 2, {
//                 isStatic: true,
//                 render: { visible: false },
//             }),
//             Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height * 2, {
//                 isStatic: true,
//                 render: { visible: false },
//             }),
//         ];

//         Composite.add(engine.world, walls);

//         const letters = WORD.split("");

//         // RESPONSIVE LETTER SIZE
//         let size;

//         if (width < 640) {
//             size = height * 0.18;
//         } else if (width < 1024) {
//             size = height * 0.4;
//         } else if (width < 1600) {
//             size = height * 0.22;
//         } else {
//             size = height * 0.28;
//         }

//         const letterWidth = size * 0.6;
//         const gap = letterWidth * 0.35;

//         const totalLettersWidth =
//             letters.length * letterWidth + (letters.length - 1) * gap;

//         const startX = (width - totalLettersWidth) / 2;

//         const bodies = letters.map((letter, i) => {

//             const x =
//                 startX +
//                 i * (letterWidth + gap) +
//                 letterWidth / 2;

//             const body = Bodies.rectangle(
//                 x,
//                 -350 - i * 70,
//                 letterWidth,
//                 size,
//                 {
//                     restitution: 0.35,
//                     friction: 0.9,
//                     frictionAir: 0.03,
//                     angle: (Math.random() - 0.5) * 0.6,
//                     render: { fillStyle: "transparent" },
//                 }
//             );

//             body.customLetter = letter;
//             return body;
//         });

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
//     }, [hasStarted]);

//     return (
//         <div
//             ref={sectionRef}
//             className="relative w-full h-[120vh] md:h-[150vh] overflow-hidden"
//         >
//             {/* Heading */}
//             <div className="absolute top-24 md:top-40 max-lg:left-1/2 max-lg:-translate-x-1/2 lg:right-[3%] 3xl:right-[7%] z-20 text-start max-w-[720px]">

//                 <h2 className="text-[2.25rem] md:text-[2.5rem] lg:text-[3.125rem] xl:text-[3.75rem] 3xl:text-[4.5rem] font-semibold leading-11 md:leading-[130%] tracking-[-0.02em] xl:tracking-[-0.04em] capitalize max-w-xl">

//                     <span className="text-xs 3xl:text-sm leading-[150%] font-normal tracking-[-0.02em]">
//                         (WE ARE)
//                     </span>{" "}
//                     The{" "}
//                     <span className="text-[2.625rem] md:text-[3.125rem] lg:text-[3.4375rem] xl:text-[4.375rem] 3xl:text-[5rem] font-normal leading-11 xl:leading-[120%] tracking-[-0.02em] xl:tracking-[0em] capitalize font-instrument italic whitespace-pre-line">
//                         {titleItalic}
//                     </span>
//                     <br />
//                     {titleNormal}
//                 </h2>
//             </div>

//             {/* Letters */}
//             <div className="absolute inset-0 flex justify-start pt-[220px] md:pt-[320px] z-10">
//                 <div className="w-full md:w-[75%] h-full">
//                     <div ref={sceneRef} className="w-full h-full" />
//                 </div>
//             </div>
//         </div>
//     );
// }


// "use client";
// import { useEffect, useRef, useState } from "react";
// import Matter from "matter-js";

// const WORD = "UPTHRUST";

// export default function DropLetters({
//     titleItalic = "Meta-First",
//     titleNormal = "Agency For Creative Brands",
// }) {
//     const sceneRef = useRef(null);
//     const sectionRef = useRef(null);
//     const [hasStarted, setHasStarted] = useState(false);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting && !hasStarted) {
//                         setHasStarted(true);
//                     }
//                 });
//             },
//             { threshold: 0.4 }
//         );

//         if (sectionRef.current) observer.observe(sectionRef.current);

//         return () => observer.disconnect();
//     }, [hasStarted]);

//     useEffect(() => {
//         if (!hasStarted) return;

//         const { Engine, Render, Runner, Bodies, Composite, Events } = Matter;

//         const container = sceneRef.current;
//         const width = container.offsetWidth;
//         const height = container.offsetHeight;

//         const engine = Engine.create();
//         engine.gravity.y = 1.2;

//         const render = Render.create({
//             element: container,
//             engine,
//             options: {
//                 width,
//                 height,
//                 wireframes: false,
//                 background: "transparent",
//             },
//         });

//         Render.run(render);

//         const runner = Runner.create();
//         Runner.run(runner, engine);

//         /* ---------- WALLS ---------- */

//         const wallThickness = 500;

//         const walls = [
//             Bodies.rectangle(width / 2, height + 50, width, 100, {
//                 isStatic: true,
//                 render: { visible: false },
//             }),

//             Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height * 2, {
//                 isStatic: true,
//                 render: { visible: false },
//             }),

//             Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height * 2, {
//                 isStatic: true,
//                 render: { visible: false },
//             }),
//         ];

//         Composite.add(engine.world, walls);

//         /* ---------- LETTER SIZE ---------- */

//         let size;

//         if (width < 640) {
//             size = height * 0.18;
//         } else if (width < 1024) {
//             size = height * 0.35;
//         } else if (width < 1600) {
//             size = height * 0.26;
//         } else {
//             size = height * 0.28;
//         }

//         const letterWidth = size * 0.75;

//         /* ---------- SPAWN AREA ---------- */

//         const spawnWidth = width * 0.35;
//         const spawnStart = (width - spawnWidth) / 2;

//         const letters = WORD.split("");

//         const bodies = letters.map((letter, i) => {
//             const x = spawnStart + Math.random() * spawnWidth;

//             const body = Bodies.rectangle(
//                 x,
//                 -300 - i * 80,
//                 letterWidth,
//                 size,
//                 {
//                     restitution: 0.25,
//                     friction: 0.9,
//                     frictionAir: 0.03,
//                     angle: (Math.random() - 0.5) * 1,
//                     render: { fillStyle: "transparent" },
//                 }
//             );

//             body.customLetter = letter;
//             return body;
//         });

//         Composite.add(engine.world, bodies);

//         /* ---------- DRAW LETTERS ---------- */

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
//     }, [hasStarted]);

//     return (
//         <div
//             ref={sectionRef}
//             className="relative w-full h-[120vh] md:h-[150vh] overflow-hidden"
//         >
//             {/* Heading */}
//             <div className="absolute top-24 md:top-40 max-lg:left-1/2 max-lg:-translate-x-1/2 lg:right-[3%] 3xl:right-[7%] z-20 text-start max-w-[720px]">
//                 <h2 className="text-[2.25rem] md:text-[2.5rem] lg:text-[3.125rem] xl:text-[3.75rem] 3xl:text-[4.5rem] font-semibold leading-11 md:leading-[130%] tracking-[-0.02em] xl:tracking-[-0.04em] capitalize max-w-xl">
//                     <span className="text-xs 3xl:text-sm leading-[150%] font-normal tracking-[-0.02em]">
//                         (WE ARE)
//                     </span>{" "}
//                     The{" "}
//                     <span className="text-[2.625rem] md:text-[3.125rem] lg:text-[3.4375rem] xl:text-[4.375rem] 3xl:text-[5rem] font-normal leading-11 xl:leading-[120%] tracking-[-0.02em] xl:tracking-[0em] capitalize font-instrument italic whitespace-pre-line">
//                         {titleItalic}
//                     </span>
//                     <br />
//                     {titleNormal}
//                 </h2>
//             </div>

//             {/* Letters */}
//             <div className="absolute inset-0 flex justify-start pt-[220px] md:pt-[320px] z-10">
//                 <div className="w-full md:w-[75%] h-full">
//                     <div ref={sceneRef} className="w-full h-full" />
//                 </div>
//             </div>
//         </div>
//     );
// }


// "use client";
// import { useEffect, useRef, useState } from "react";
// import Matter from "matter-js";

// const WORD = "UPTHRUST";

// export default function DropLetters({
//     titleItalic = "Meta-First",
//     titleNormal = "Agency For Creative Brands",
// }) {
//     const sceneRef = useRef(null);
//     const sectionRef = useRef(null);
//     const [hasStarted, setHasStarted] = useState(false);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting && !hasStarted) {
//                         setHasStarted(true);
//                     }
//                 });
//             },
//             { threshold: 0.4 }
//         );

//         if (sectionRef.current) observer.observe(sectionRef.current);

//         return () => observer.disconnect();
//     }, [hasStarted]);

//     useEffect(() => {
//         if (!hasStarted) return;

//         const { Engine, Render, Runner, Bodies, Composite, Events } = Matter;

//         const container = sceneRef.current;
//         const width = container.offsetWidth;
//         const height = container.offsetHeight;

//         const engine = Engine.create();

//         // smoother gravity
//         engine.gravity.y = 0.7;

//         const render = Render.create({
//             element: container,
//             engine,
//             options: {
//                 width,
//                 height,
//                 wireframes: false,
//                 background: "transparent",
//             },
//         });

//         Render.run(render);
//         const runner = Runner.create();
//         Runner.run(runner, engine);

//         /* WALLS */

//         const wallThickness = 500;

//         const walls = [
//             Bodies.rectangle(width / 2, height + 50, width, 100, {
//                 isStatic: true,
//                 render: { visible: false },
//             }),

//             Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height * 2, {
//                 isStatic: true,
//                 render: { visible: false },
//             }),

//             Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height * 2, {
//                 isStatic: true,
//                 render: { visible: false },
//             }),
//         ];

//         Composite.add(engine.world, walls);

//         /* LETTER SIZE */

//         let size;

//         if (width < 640) {
//             size = height * 0.18;
//         } else if (width < 1024) {
//             size = height * 0.22;
//         } else if (width < 1600) {
//             size = height * 0.26;
//         } else {
//             size = height * 0.28;
//         }

//         const letterWidth = size * 0.75;

//         /* SPAWN AREA */

//         const spawnWidth = width * 0.35;
//         const spawnStart = (width - spawnWidth) / 2;

//         const letters = WORD.split("");

//         const bodies = letters.map((letter, i) => {

//             let x;

//             // Force "UP" to appear first
//             if (i === 0) {
//                 x = width * 0.45;
//             } else if (i === 1) {
//                 x = width * 0.50;
//             } else {
//                 x = spawnStart + Math.random() * spawnWidth;
//             }

//             const body = Bodies.rectangle(
//                 x,
//                 -300 - i * 80,
//                 letterWidth,
//                 size,
//                 {
//                     restitution: 0.25,
//                     friction: 0.9,
//                     frictionAir: 0.06, // smoother motion
//                     angle: (Math.random() - 0.5) * 0.5,
//                     render: { fillStyle: "transparent" },
//                 }
//             );

//             body.customLetter = letter;
//             return body;
//         });

//         Composite.add(engine.world, bodies);

//         /* DRAW LETTERS */

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
//     }, [hasStarted]);

//     return (
//         <div
//             ref={sectionRef}
//             className="relative w-full h-[120vh] md:h-[150vh] overflow-hidden"
//         >
//             {/* Heading */}
//             <div className="absolute top-24 md:top-40 max-lg:left-1/2 max-lg:-translate-x-1/2 lg:right-[3%] 3xl:right-[7%] z-20 text-start max-w-[720px]">

//                 <h2 className="text-[2.25rem] md:text-[2.5rem] lg:text-[3.125rem] xl:text-[3.75rem] 3xl:text-[4.5rem] font-semibold leading-11 md:leading-[130%] tracking-[-0.02em] xl:tracking-[-0.04em] capitalize max-w-xl">

//                     <span className="text-xs 3xl:text-sm leading-[150%] font-normal tracking-[-0.02em]">
//                         (WE ARE)
//                     </span>{" "}
//                     The{" "}
//                     <span className="text-[2.625rem] md:text-[3.125rem] lg:text-[3.4375rem] xl:text-[4.375rem] 3xl:text-[5rem] font-normal leading-11 xl:leading-[120%] tracking-[-0.02em] xl:tracking-[0em] capitalize font-instrument italic whitespace-pre-line">
//                         {titleItalic}
//                     </span>
//                     <br />
//                     {titleNormal}
//                 </h2>
//             </div>

//             {/* Letters */}
//             <div className="absolute inset-0 flex justify-start pt-[220px] md:pt-[320px] z-10">
//                 <div className="w-full md:w-[75%] h-full">
//                     <div ref={sceneRef} className="w-full h-full" />
//                 </div>
//             </div>
//         </div>
//     );
// }

// "use client";
// import { useEffect, useRef, useState } from "react";
// import Matter from "matter-js";

// const WORD = "UPTHRUST";

// export default function DropLetters({
//     titleItalic = "Meta-First",
//     titleNormal = "Agency For Creative Brands",
// }) {
//     const sceneRef = useRef(null);
//     const sectionRef = useRef(null);
//     const [hasStarted, setHasStarted] = useState(false);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting && !hasStarted) {
//                         setHasStarted(true);
//                     }
//                 });
//             },
//             { threshold: 0.4 }
//         );

//         if (sectionRef.current) observer.observe(sectionRef.current);

//         return () => observer.disconnect();
//     }, [hasStarted]);

//     useEffect(() => {
//         if (!hasStarted) return;

//         const { Engine, Render, Runner, Bodies, Composite, Events } = Matter;

//         const container = sceneRef.current;
//         const width = container.offsetWidth;
//         const height = container.offsetHeight;

//         const engine = Engine.create();

//         // smoother gravity
//         // engine.gravity.y = 0.7;
//         engine.gravity.y = 1.3;

//         const render = Render.create({
//             element: container,
//             engine,
//             options: {
//                 width,
//                 height,
//                 wireframes: false,
//                 background: "transparent",
//             },
//         });

//         Render.run(render);
//         const runner = Runner.create();
//         Runner.run(runner, engine);

//         /* WALLS */

//         const wallThickness = 500;

//         const walls = [
//             Bodies.rectangle(width / 2, height + 50, width, 100, {
//                 isStatic: true,
//                 render: { visible: false },
//             }),

//             Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height * 2, {
//                 isStatic: true,
//                 render: { visible: false },
//             }),

//             Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height * 2, {
//                 isStatic: true,
//                 render: { visible: false },
//             }),
//         ];

//         Composite.add(engine.world, walls);

//         /* LETTER SIZE */

//         let size;

//         if (width < 640) {
//             size = height * 0.18;
//         } else if (width < 1024) {
//             size = height * 0.3;
//         } else if (width < 1600) {
//             size = height * 0.26;
//         } else {
//             size = height * 0.28;
//         }

//         const letterWidth = size * 0.75;

//         /* SPAWN AREA */

//         // const spawnWidth = width * 0.35;
//         // const spawnStart = (width - spawnWidth) / 2;
//         const spawnWidth = width * 0.5;
//         const spawnStart = width * 0.05;

//         const letters = WORD.split("");

//         const bodies = letters.map((letter, i) => {

//             let x;

//             // Force "UP" to appear first
//             if (i === 0) {
//                 x = width * 0.45;
//             } else if (i === 1) {
//                 x = width * 0.50;
//             } else {
//                 x = spawnStart + Math.random() * spawnWidth;
//             }

//             const body = Bodies.rectangle(
//                 x,
//                 -300 - i * 80,
//                 letterWidth,
//                 size,
//                 {
//                     restitution: 0.25,
//                     friction: 0.9,
//                     frictionAir: 0.06, // smoother motion
//                     angle: (Math.random() - 0.5) * 0.5,
//                     render: { fillStyle: "transparent" },
//                 }
//             );

//             body.customLetter = letter;
//             return body;
//         });

//         Composite.add(engine.world, bodies);

//         /* DRAW LETTERS */

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
//     }, [hasStarted]);

//     return (
//         <div
//             ref={sectionRef}
//             className="relative w-full h-[120vh] md:h-[150vh] overflow-hidden"
//         >
//             {/* Heading */}
//             <div className="absolute top-24 md:top-40 max-lg:left-1/2 max-lg:-translate-x-1/2 lg:right-[3%] 3xl:right-[7%] z-20 text-start max-w-[720px]">

//                 <h2 className="text-[2.25rem] md:text-[2.5rem] lg:text-[3.125rem] xl:text-[3.75rem] 3xl:text-[4.5rem] font-semibold leading-11 md:leading-[130%] tracking-[-0.02em] xl:tracking-[-0.04em] capitalize max-w-xl">

//                     <span className="text-xs 3xl:text-sm leading-[150%] font-normal tracking-[-0.02em]">
//                         (WE ARE)
//                     </span>{" "}
//                     The{" "}
//                     <span className="text-[2.625rem] md:text-[3.125rem] lg:text-[3.4375rem] xl:text-[4.375rem] 3xl:text-[5rem] font-normal leading-11 xl:leading-[120%] tracking-[-0.02em] xl:tracking-[0em] capitalize font-instrument italic whitespace-pre-line">
//                         {titleItalic}
//                     </span>
//                     <br />
//                     {titleNormal}
//                 </h2>
//             </div>

//             {/* Letters */}
//             <div className="absolute inset-0 flex justify-start pt-[220px] md:pt-[320px] z-10">
//                 <div className="w-full md:w-[75%] h-full">
//                     <div ref={sceneRef} className="w-full h-full" />
//                 </div>
//             </div>
//         </div>
//     );
// }


"use client";
import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

const WORD = "UPTHRUST";

export default function DropLetters({
    titleItalic = "Meta-First",
    titleNormal = "Agency For Creative Brands",
}) {
    const sceneRef = useRef(null);
    const sectionRef = useRef(null);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasStarted) {
                        setHasStarted(true);
                    }
                });
            },
            { threshold: 0.4 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        const { Engine, Render, Runner, Bodies, Composite, Events } = Matter;

        const container = sceneRef.current;
        const width = container.offsetWidth;
        const height = container.offsetHeight;

        const engine = Engine.create();

        /* smoother gravity */
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

        /* WALLS */

        const wallThickness = 500;

        const walls = [
            Bodies.rectangle(width / 2, height + 50, width, 100, {
                isStatic: true,
                render: { visible: false },
            }),

            Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height * 2, {
                isStatic: true,
                render: { visible: false },
            }),

            Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height * 2, {
                isStatic: true,
                render: { visible: false },
            }),
        ];

        Composite.add(engine.world, walls);

        /* LETTER SIZE */

        let size;

        if (width < 640) {
            size = height * 0.18;
        } else if (width < 1024) {
            size = height * 0.33;
        } else if (width < 1600) {
            size = height * 0.35;
        } else {
            size = height * 0.28;
        }

        /* smaller collision box so letters don't hide */

        const letterWidth = size * 0.55;
        // letter height
        const letterHeight = size * 0.6;

        /* SPAWN AREA */

        const spawnWidth = width * 0.55;
        const spawnStart = width * 0.02;

        const letters = WORD.split("");

        const bodies = letters.map((letter, i) => {

            let x;

            /* FORCE UP TO LEFT TOP */

            if (i === 0) {
                x = width * 0.08;
            } else if (i === 1) {
                x = width * 0.18;
            } else {
                x = spawnStart + Math.random() * spawnWidth;
            }

            const body = Bodies.rectangle(
                x,
                -300 - i * 80,
                letterWidth,
                letterHeight,
                {
                    restitution: 0.45,
                    friction: 0.6,
                    frictionAir: 0.02,
                    // angle: (Math.random() - 0.5) * 0.8,
                    angle: (Math.random() - 0.5) * 0.7,
                    render: { fillStyle: "transparent" },
                }
            );

            body.customLetter = letter;

            return body;
        });

        Composite.add(engine.world, bodies);

        /* DRAW LETTERS */

        Events.on(render, "afterRender", () => {
            const ctx = render.context;

            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = "#111";
            ctx.font = `700 ${size}px sans-serif`;

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
            className="relative w-full h-[120vh] md:h-[150vh] overflow-hidden"
        >
            {/* Heading */}

            <div className="absolute top-24 md:top-40 max-sm:w-full max-sm:px-4 max-lg:left-1/2 max-lg:-translate-x-1/2 lg:right-[3%] 3xl:right-[7%] z-20 text-start max-w-[720px] ">

                <h2 className="text-[2.25rem] md:text-[2.5rem] lg:text-[3.125rem] xl:text-[3.75rem] 3xl:text-[4rem] 1800:text-[4.5rem] font-semibold leading-11 md:leading-[130%] tracking-[-0.02em] xl:tracking-[-0.04em] capitalize max-w-xl 2xl:max-w-[600px] 1800:max-w-2xl">

                    <span className="text-xs md:text-sm 3xl:text-sm font-normal tracking-[0.05em] mr-2 align-middle">
                        (WE ARE)
                    </span>

                    The{" "}
                    <span className="text-[2.625rem] md:text-[3.125rem] lg:text-[3.4375rem] xl:text-[4.375rem]  1800:text-[5rem] font-normal leading-11 xl:leading-[120%] tracking-[-0.02em] xl:tracking-[0em] capitalize font-instrument italic">
                        {titleItalic}
                    </span>

                    <br />

                    {titleNormal}

                </h2>
            </div>

            {/* LETTERS */}

            <div className="absolute inset-0 flex justify-start pt-[220px] md:pt-[250px] z-10">
                <div className="w-full md:w-[75%] h-full">
                    <div ref={sceneRef} className="w-full h-full " />
                </div>
            </div>
        </div>
    );
}

