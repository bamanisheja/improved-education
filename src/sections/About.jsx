// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative isolate overflow-hidden bg-teal-900"
//     >
//       {/* =========================================================
//           BACKGROUND IMAGE
//           ========================================================= */}

//       <div
//         className="absolute inset-0 -z-30 bg-cover bg-center bg-no-repeat transition-transform duration-[3000ms] hover:scale-105"
//         style={{
//           backgroundImage: "url('/new.png')",
//         }}
//       />

//       {/* =========================================================
//           DARK OVERLAY
//           ========================================================= */}

//       <div className="absolute inset-0 -z-20 bg-gradient-to-r from-black/80 via-teal-900/70 to-blue-900/60" />

//       <div className="absolute inset-0 -z-10 bg-black/20" />

//       {/* =========================================================
//           DECORATIVE GRADIENT
//           ========================================================= */}

//       <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-green-500/20 blur-3xl" />

//       <div className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

//       {/* =========================================================
//           DECORATIVE CIRCLES
//           ========================================================= */}

//       <div className="pointer-events-none absolute left-[8%] top-24 h-3 w-3 animate-pulse rounded-full bg-green-300/70" />

//       <div className="pointer-events-none absolute right-[18%] top-32 h-4 w-4 animate-pulse rounded-full bg-white/50" />

//       <div className="pointer-events-none absolute bottom-24 left-[20%] h-2 w-2 rounded-full bg-blue-300/70" />

//       {/* =========================================================
//           MAIN CONTAINER
//           ========================================================= */}

//       <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-8 lg:py-32">
//         <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">

//           {/* =====================================================
//               LEFT CONTENT
//               ===================================================== */}

//           <div className="text-white">

//             {/* Small heading */}

//             <div
//               className="
//                 mb-5
//                 inline-flex
//                 items-center
//                 gap-2
//                 rounded-full
//                 border
//                 border-white/20
//                 bg-white/10
//                 px-4
//                 py-2
//                 shadow-lg
//                 backdrop-blur-md
//               "
//             >
//               <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-400" />

//               <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-100">
//                 Improve Education
//               </p>
//             </div>

//             {/* =================================================
//                 MAIN TITLE
//                 ================================================= */}

//             <h1
//               className="
//                 max-w-4xl
//                 text-4xl
//                 font-extrabold
//                 leading-[1.1]
//                 tracking-tight
//                 text-white
//                 sm:text-5xl
//                 md:text-6xl
//                 lg:text-6xl
//                 xl:text-7xl
//               "
//             >
//               Transforming Education.
//               <br />

//               <span className="text-green-300">
//                 Empowering People.
//               </span>

//               <br />

//               <span className="text-white">
//                 Building the Future.
//               </span>
//             </h1>

//             {/* =================================================
//                 DECORATIVE LINE
//                 ================================================= */}

//             <div className="mt-6 flex items-center gap-2">
//               <span className="h-1 w-16 rounded-full bg-green-400" />
//               <span className="h-1 w-8 rounded-full bg-blue-400" />
//               <span className="h-1 w-3 rounded-full bg-white/60" />
//             </div>

//             {/* =================================================
//                 DESCRIPTION
//                 ================================================= */}

//             <p
//               className="
//                 mt-6
//                 max-w-2xl
//                 text-base
//                 leading-7
//                 text-teal-50
//                 sm:text-lg
//                 sm:leading-8
//                 lg:text-xl
//               "
//             >
//               Improve Education is an education-focused organization
//               committed to improving learning outcomes and creating
//               opportunities for learners, educators, young people,
//               families, and communities.
//             </p>

//             {/* =================================================
//                 BUTTONS
//                 ================================================= */}

//             <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">

//               {/* Explore Services */}

//               <a
//                 href="#services"
//                 className="
//                   group
//                   inline-flex
//                   items-center
//                   justify-center
//                   gap-2
//                   rounded-full
//                   bg-white
//                   px-6
//                   py-3.5
//                   font-semibold
//                   text-teal-800
//                   shadow-xl
//                   transition-all
//                   duration-300
//                   hover:-translate-y-1
//                   hover:bg-teal-50
//                   hover:shadow-2xl
//                   sm:px-7
//                 "
//               >
//                 Explore Our Services

//                 <span
//                   className="
//                     transition-transform
//                     duration-300
//                     group-hover:translate-x-1
//                   "
//                 >
//                   →
//                 </span>
//               </a>

//               {/* Work With Us */}

//               <a
//                 href="#contact"
//                 className="
//                   group
//                   inline-flex
//                   items-center
//                   justify-center
//                   gap-2
//                   rounded-full
//                   border
//                   border-white/50
//                   bg-white/5
//                   px-6
//                   py-3.5
//                   font-semibold
//                   text-white
//                   backdrop-blur-sm
//                   transition-all
//                   duration-300
//                   hover:-translate-y-1
//                   hover:border-white
//                   hover:bg-white/15
//                   hover:shadow-xl
//                   sm:px-7
//                 "
//               >
//                 Work With Us

//                 <span
//                   className="
//                     transition-transform
//                     duration-300
//                     group-hover:translate-x-1
//                   "
//                 >
//                   →
//                 </span>
//               </a>

//             </div>

//             {/* =================================================
//                 QUICK INFORMATION
//                 ================================================= */}

//             <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 sm:gap-5">

//               {/* Learn */}

//               <div
//                 className="
//                   rounded-2xl
//                   border
//                   border-white/10
//                   bg-white/10
//                   p-4
//                   text-center
//                   backdrop-blur-md
//                   transition-all
//                   duration-300
//                   hover:-translate-y-1
//                   hover:bg-white/15
//                 "
//               >
//                 <div className="text-2xl sm:text-3xl">
//                   📚
//                 </div>

//                 <p className="mt-2 text-xs font-bold uppercase tracking-wide text-white sm:text-sm">
//                   Learn
//                 </p>
//               </div>

//               {/* Grow */}

//               <div
//                 className="
//                   rounded-2xl
//                   border
//                   border-white/10
//                   bg-white/10
//                   p-4
//                   text-center
//                   backdrop-blur-md
//                   transition-all
//                   duration-300
//                   hover:-translate-y-1
//                   hover:bg-white/15
//                 "
//               >
//                 <div className="text-2xl sm:text-3xl">
//                   🌱
//                 </div>

//                 <p className="mt-2 text-xs font-bold uppercase tracking-wide text-white sm:text-sm">
//                   Grow
//                 </p>
//               </div>

//               {/* Lead */}

//               <div
//                 className="
//                   rounded-2xl
//                   border
//                   border-white/10
//                   bg-white/10
//                   p-4
//                   text-center
//                   backdrop-blur-md
//                   transition-all
//                   duration-300
//                   hover:-translate-y-1
//                   hover:bg-white/15
//                 "
//               >
//                 <div className="text-2xl sm:text-3xl">
//                   ⭐
//                 </div>

//                 <p className="mt-2 text-xs font-bold uppercase tracking-wide text-white sm:text-sm">
//                   Lead
//                 </p>
//               </div>

//             </div>

//           </div>

//           {/* =====================================================
//               RIGHT VISUAL
//               ===================================================== */}

//           <div className="flex justify-center lg:justify-end">

//             <div className="relative h-[320px] w-[320px] sm:h-[390px] sm:w-[390px] lg:h-[470px] lg:w-[470px]">

//               {/* Outer rotating ring */}

//               <div
//                 className="
//                   absolute
//                   inset-0
//                   animate-[spin_25s_linear_infinite]
//                   rounded-full
//                   border
//                   border-white/20
//                 "
//               />

//               {/* Second ring */}

//               <div
//                 className="
//                   absolute
//                   inset-5
//                   rounded-full
//                   border
//                   border-green-300/20
//                 "
//               />

//               {/* Third ring */}

//               <div
//                 className="
//                   absolute
//                   inset-12
//                   rounded-full
//                   border
//                   border-blue-300/20
//                 "
//               />

//               {/* =================================================
//                   IMAGE CIRCLE
//                   ================================================= */}

//               <div
//                 className="
//                   absolute
//                   inset-20
//                   overflow-hidden
//                   rounded-full
//                   border-4
//                   border-white/30
//                   bg-white/10
//                   shadow-2xl
//                   backdrop-blur-sm
//                   sm:inset-24
//                   lg:inset-28
//                 "
//               >

//                 <img
//                   src="/new.png"
//                   alt="Improve Education learners"
//                   className="
//                     h-full
//                     w-full
//                     object-cover
//                     object-center
//                     transition-transform
//                     duration-700
//                     hover:scale-110
//                   "
//                 />

//                 {/* Image overlay */}

//                 <div className="absolute inset-0 bg-gradient-to-t from-teal-950/70 via-transparent to-transparent" />

//               </div>

//               {/* =================================================
//                   FLOATING LEARN CARD
//                   ================================================= */}

//               <div
//                 className="
//                   absolute
//                   bottom-10
//                   right-0
//                   rounded-2xl
//                   border
//                   border-white/20
//                   bg-white/95
//                   px-5
//                   py-3
//                   shadow-2xl
//                   backdrop-blur-md
//                   transition-all
//                   duration-300
//                   hover:-translate-y-2
//                   sm:bottom-16
//                   sm:right-2
//                 "
//               >

//                 <div className="flex items-center gap-3">

//                   <div
//                     className="
//                       flex
//                       h-10
//                       w-10
//                       items-center
//                       justify-center
//                       rounded-xl
//                       bg-green-100
//                       text-xl
//                     "
//                   >
//                     📖
//                   </div>

//                   <div>

//                     <p className="text-xs font-medium text-gray-500">
//                       Our Mission
//                     </p>

//                     <p className="font-bold text-teal-800">
//                       Learn • Grow • Lead
//                     </p>

//                   </div>

//                 </div>

//               </div>

//               {/* =================================================
//                   FLOATING STAR
//                   ================================================= */}

//               <div
//                 className="
//                   absolute
//                   right-6
//                   top-6
//                   flex
//                   h-12
//                   w-12
//                   items-center
//                   justify-center
//                   rounded-full
//                   border
//                   border-white/30
//                   bg-white/10
//                   text-xl
//                   shadow-lg
//                   backdrop-blur-md
//                   sm:right-10
//                   sm:top-10
//                 "
//               >
//                 ✨
//               </div>

//             </div>

//           </div>

//         </div>
//       </div>

//       {/* =========================================================
//           BOTTOM WAVE / FADE
//           ========================================================= */}

//       <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />

//       {/* =========================================================
//           SCROLL INDICATOR
//           ========================================================= */}

//       <a
//         href="#about"
//         className="
//           absolute
//           bottom-5
//           left-1/2
//           hidden
//           -translate-x-1/2
//           flex-col
//           items-center
//           gap-1
//           text-white/70
//           transition
//           hover:text-white
//           sm:flex
//         "
//       >

//         <span className="text-xs font-medium">
//           Scroll to explore
//         </span>

//         <span className="animate-bounce text-lg">
//           ↓
//         </span>

//       </a>

//     </section>
//   );
// // }
// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative isolate overflow-hidden bg-slate-950"
//     >
//       {/* =========================================================
//           BACKGROUND IMAGE
//           ========================================================= */}

//       <div
//         className="
//           absolute
//           inset-0
//           -z-30
//           bg-cover
//           bg-center
//           bg-no-repeat
//           transition-transform
//           duration-[3000ms]
//           hover:scale-105
//         "
//         style={{
//           backgroundImage: "url('/new.png')",
//         }}
//       />

//       {/* =========================================================
//           LIGHT PROFESSIONAL OVERLAY
//           ========================================================= */}

//       <div
//         className="
//           absolute
//           inset-0
//           -z-20
//           bg-gradient-to-r
//           from-slate-950/80
//           via-teal-950/65
//           to-teal-900/40
//         "
//       />

//       {/* Soft brightness layer */}

//       <div
//         className="
//           absolute
//           inset-0
//           -z-10
//           bg-gradient-to-b
//           from-teal-950/20
//           via-transparent
//           to-slate-950/60
//         "
//       />

//       {/* =========================================================
//           LARGE DECORATIVE LIGHTS
//           ========================================================= */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -left-32
//           top-10
//           -z-10
//           h-96
//           w-96
//           rounded-full
//           bg-emerald-400/20
//           blur-3xl
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -right-32
//           top-20
//           -z-10
//           h-[500px]
//           w-[500px]
//           rounded-full
//           bg-cyan-400/15
//           blur-3xl
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           bottom-0
//           left-1/3
//           -z-10
//           h-80
//           w-80
//           rounded-full
//           bg-blue-500/10
//           blur-3xl
//         "
//       />

//       {/* =========================================================
//           DECORATIVE FLOATING DOTS
//           ========================================================= */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           left-[8%]
//           top-28
//           h-3
//           w-3
//           animate-pulse
//           rounded-full
//           bg-emerald-300
//           shadow-lg
//           shadow-emerald-400/50
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           left-[45%]
//           top-20
//           h-2
//           w-2
//           animate-pulse
//           rounded-full
//           bg-cyan-300
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           right-[12%]
//           top-32
//           h-4
//           w-4
//           animate-pulse
//           rounded-full
//           bg-white/70
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           bottom-32
//           left-[20%]
//           h-2
//           w-2
//           rounded-full
//           bg-blue-300
//         "
//       />

//       {/* =========================================================
//           MAIN CONTAINER
//           ========================================================= */}

//       <div
//         className="
//           mx-auto
//           max-w-7xl
//           px-5
//           py-16
//           sm:px-8
//           sm:py-20
//           lg:px-8
//           lg:py-28
//           xl:py-32
//         "
//       >
//         <div
//           className="
//             grid
//             items-center
//             gap-14
//             lg:grid-cols-[1.05fr_0.95fr]
//             lg:gap-12
//             xl:gap-20
//           "
//         >

//           {/* =====================================================
//               LEFT CONTENT
//               ===================================================== */}

//           <div className="text-white">

//             {/* =================================================
//                 ORGANIZATION LABEL
//                 ================================================= */}

//             <div
//               className="
//                 mb-6
//                 inline-flex
//                 items-center
//                 gap-3
//                 rounded-full
//                 border
//                 border-white/20
//                 bg-white/10
//                 px-4
//                 py-2.5
//                 shadow-xl
//                 backdrop-blur-md
//                 transition-all
//                 duration-300
//                 hover:border-emerald-300/40
//                 hover:bg-white/15
//               "
//             >
//               <span
//                 className="
//                   relative
//                   flex
//                   h-3
//                   w-3
//                 "
//               >
//                 <span
//                   className="
//                     absolute
//                     inline-flex
//                     h-full
//                     w-full
//                     animate-ping
//                     rounded-full
//                     bg-emerald-400
//                     opacity-70
//                   "
//                 />

//                 <span
//                   className="
//                     relative
//                     inline-flex
//                     h-3
//                     w-3
//                     rounded-full
//                     bg-emerald-400
//                   "
//                 />
//               </span>

//               <p
//                 className="
//                   text-xs
//                   font-bold
//                   uppercase
//                   tracking-[0.22em]
//                   text-emerald-100
//                   sm:text-sm
//                 "
//               >
//                 Improve Education
//               </p>
//             </div>

//             {/* =================================================
//                 MAIN TITLE
//                 ================================================= */}

//             <h1
//               className="
//                 max-w-4xl
//                 text-4xl
//                 font-extrabold
//                 leading-[1.08]
//                 tracking-tight
//                 text-white
//                 sm:text-5xl
//                 md:text-6xl
//                 lg:text-6xl
//                 xl:text-7xl
//               "
//             >
//               Transforming Education.
//               <br />

//               <span
//                 className="
//                   bg-gradient-to-r
//                   from-emerald-300
//                   via-teal-200
//                   to-cyan-300
//                   bg-clip-text
//                   text-transparent
//                 "
//               >
//                 Empowering People.
//               </span>

//               <br />

//               <span className="text-white">
//                 Building the Future.
//               </span>
//             </h1>

//             {/* =================================================
//                 DECORATIVE LINE
//                 ================================================= */}

//             <div className="mt-7 flex items-center gap-2">
//               <span className="h-1 w-20 rounded-full bg-emerald-400" />
//               <span className="h-1 w-10 rounded-full bg-cyan-400" />
//               <span className="h-1 w-4 rounded-full bg-white/70" />
//             </div>

//             {/* =================================================
//                 DESCRIPTION
//                 ================================================= */}

//             <p
//               className="
//                 mt-7
//                 max-w-2xl
//                 text-base
//                 leading-7
//                 text-slate-100
//                 sm:text-lg
//                 sm:leading-8
//                 lg:text-xl
//               "
//             >
//               Improve Education is an education-focused organization
//               committed to improving learning outcomes and creating
//               opportunities for learners, educators, young people,
//               families, and communities.
//             </p>

//             {/* =================================================
//                 BUTTONS
//                 ================================================= */}

//             <div
//               className="
//                 mt-9
//                 flex
//                 flex-col
//                 gap-4
//                 sm:flex-row
//                 sm:flex-wrap
//               "
//             >

//               {/* Explore Services */}

//               <a
//                 href="#services"
//                 className="
//                   group
//                   inline-flex
//                   items-center
//                   justify-center
//                   gap-3
//                   rounded-full
//                   bg-gradient-to-r
//                   from-emerald-400
//                   to-teal-400
//                   px-7
//                   py-3.5
//                   font-bold
//                   text-slate-950
//                   shadow-xl
//                   shadow-emerald-900/30
//                   transition-all
//                   duration-300
//                   hover:-translate-y-1
//                   hover:from-emerald-300
//                   hover:to-cyan-300
//                   hover:shadow-2xl
//                   hover:shadow-emerald-400/20
//                 "
//               >
//                 Explore Our Services

//                 <span
//                   className="
//                     text-lg
//                     transition-transform
//                     duration-300
//                     group-hover:translate-x-1
//                   "
//                 >
//                   →
//                 </span>
//               </a>

//               {/* Work With Us */}

//               <a
//                 href="#contact"
//                 className="
//                   group
//                   inline-flex
//                   items-center
//                   justify-center
//                   gap-3
//                   rounded-full
//                   border
//                   border-white/30
//                   bg-white/10
//                   px-7
//                   py-3.5
//                   font-bold
//                   text-white
//                   shadow-lg
//                   backdrop-blur-md
//                   transition-all
//                   duration-300
//                   hover:-translate-y-1
//                   hover:border-emerald-300/60
//                   hover:bg-white/15
//                   hover:shadow-2xl
//                 "
//               >
//                 Work With Us

//                 <span
//                   className="
//                     text-lg
//                     transition-transform
//                     duration-300
//                     group-hover:translate-x-1
//                   "
//                 >
//                   →
//                 </span>
//               </a>

//             </div>

//             {/* =================================================
//                 QUICK INFORMATION
//                 ================================================= */}

//             <div
//               className="
//                 mt-10
//                 grid
//                 max-w-xl
//                 grid-cols-3
//                 gap-3
//                 sm:gap-5
//               "
//             >

//               {/* Learn */}

//               <div
//                 className="
//                   group
//                   rounded-2xl
//                   border
//                   border-white/15
//                   bg-white/10
//                   p-4
//                   text-center
//                   shadow-lg
//                   backdrop-blur-md
//                   transition-all
//                   duration-300
//                   hover:-translate-y-2
//                   hover:border-emerald-300/40
//                   hover:bg-white/15
//                   hover:shadow-emerald-500/10
//                 "
//               >
//                 <div
//                   className="
//                     mx-auto
//                     flex
//                     h-11
//                     w-11
//                     items-center
//                     justify-center
//                     rounded-xl
//                     bg-emerald-400/20
//                     text-2xl
//                     transition-transform
//                     duration-300
//                     group-hover:scale-110
//                   "
//                 >
//                   📚
//                 </div>

//                 <p
//                   className="
//                     mt-3
//                     text-xs
//                     font-bold
//                     uppercase
//                     tracking-wide
//                     text-white
//                     sm:text-sm
//                   "
//                 >
//                   Learn
//                 </p>
//               </div>

//               {/* Grow */}

//               <div
//                 className="
//                   group
//                   rounded-2xl
//                   border
//                   border-white/15
//                   bg-white/10
//                   p-4
//                   text-center
//                   shadow-lg
//                   backdrop-blur-md
//                   transition-all
//                   duration-300
//                   hover:-translate-y-2
//                   hover:border-teal-300/40
//                   hover:bg-white/15
//                   hover:shadow-teal-500/10
//                 "
//               >
//                 <div
//                   className="
//                     mx-auto
//                     flex
//                     h-11
//                     w-11
//                     items-center
//                     justify-center
//                     rounded-xl
//                     bg-teal-400/20
//                     text-2xl
//                     transition-transform
//                     duration-300
//                     group-hover:scale-110
//                   "
//                 >
//                   🌱
//                 </div>

//                 <p
//                   className="
//                     mt-3
//                     text-xs
//                     font-bold
//                     uppercase
//                     tracking-wide
//                     text-white
//                     sm:text-sm
//                   "
//                 >
//                   Grow
//                 </p>
//               </div>

//               {/* Lead */}

//               <div
//                 className="
//                   group
//                   rounded-2xl
//                   border
//                   border-white/15
//                   bg-white/10
//                   p-4
//                   text-center
//                   shadow-lg
//                   backdrop-blur-md
//                   transition-all
//                   duration-300
//                   hover:-translate-y-2
//                   hover:border-cyan-300/40
//                   hover:bg-white/15
//                   hover:shadow-cyan-500/10
//                 "
//               >
//                 <div
//                   className="
//                     mx-auto
//                     flex
//                     h-11
//                     w-11
//                     items-center
//                     justify-center
//                     rounded-xl
//                     bg-cyan-400/20
//                     text-2xl
//                     transition-transform
//                     duration-300
//                     group-hover:scale-110
//                   "
//                 >
//                   ⭐
//                 </div>

//                 <p
//                   className="
//                     mt-3
//                     text-xs
//                     font-bold
//                     uppercase
//                     tracking-wide
//                     text-white
//                     sm:text-sm
//                   "
//                 >
//                   Lead
//                 </p>
//               </div>

//             </div>

//           </div>

//           {/* =====================================================
//               RIGHT IMAGE DESIGN
//               ===================================================== */}

//           <div className="flex justify-center lg:justify-end">

//             <div
//               className="
//                 relative
//                 h-[330px]
//                 w-[330px]
//                 sm:h-[410px]
//                 sm:w-[410px]
//                 lg:h-[500px]
//                 lg:w-[500px]
//               "
//             >

//               {/* =================================================
//                   OUTER GLOW
//                   ================================================= */}

//               <div
//                 className="
//                   absolute
//                   inset-4
//                   rounded-full
//                   bg-emerald-400/20
//                   blur-3xl
//                 "
//               />

//               {/* =================================================
//                   ROTATING OUTER RING
//                   ================================================= */}

//               <div
//                 className="
//                   absolute
//                   inset-0
//                   animate-[spin_30s_linear_infinite]
//                   rounded-full
//                   border
//                   border-dashed
//                   border-emerald-300/40
//                 "
//               />

//               {/* =================================================
//                   SECOND RING
//                   ================================================= */}

//               <div
//                 className="
//                   absolute
//                   inset-5
//                   rounded-full
//                   border
//                   border-white/20
//                   bg-white/5
//                   backdrop-blur-[2px]
//                 "
//               />

//               {/* =================================================
//                   THIRD RING
//                   ================================================= */}

//               <div
//                 className="
//                   absolute
//                   inset-10
//                   rounded-full
//                   border
//                   border-cyan-300/20
//                 "
//               />

//               {/* =================================================
//                   IMAGE FRAME
//                   ================================================= */}

//               <div
//                 className="
//                   absolute
//                   inset-16
//                   overflow-hidden
//                   rounded-[2.5rem]
//                   border-4
//                   border-white/40
//                   bg-white/10
//                   p-1
//                   shadow-2xl
//                   shadow-black/40
//                   backdrop-blur-md
//                   transition-all
//                   duration-500
//                   hover:scale-[1.02]
//                   hover:border-emerald-300/60
//                   sm:inset-20
//                   lg:inset-24
//                 "
//               >

//                 {/* Inner image */}

//                 <div className="relative h-full w-full overflow-hidden rounded-[2rem]">

//                   <img
//                     src="/new.png"
//                     alt="Improve Education learners"
//                     className="
//                       h-full
//                       w-full
//                       object-cover
//                       object-center
//                       transition-transform
//                       duration-1000
//                       hover:scale-110
//                     "
//                   />

//                   {/* Image gradient */}

//                   <div
//                     className="
//                       absolute
//                       inset-0
//                       bg-gradient-to-t
//                       from-slate-950/70
//                       via-transparent
//                       to-emerald-900/10
//                     "
//                   />

//                   {/* Image shine */}

//                   <div
//                     className="
//                       pointer-events-none
//                       absolute
//                       -left-full
//                       top-0
//                       h-full
//                       w-1/2
//                       skew-x-[-20deg]
//                       bg-gradient-to-r
//                       from-transparent
//                       via-white/20
//                       to-transparent
//                       transition-all
//                       duration-1000
//                       hover:left-[130%]
//                     "
//                   />

//                 </div>

//               </div>

//               {/* =================================================
//                   TOP FLOATING BADGE
//                   ================================================= */}

//               <div
//                 className="
//                   absolute
//                   right-2
//                   top-5
//                   flex
//                   items-center
//                   gap-2
//                   rounded-full
//                   border
//                   border-white/20
//                   bg-white/15
//                   px-4
//                   py-2.5
//                   text-xs
//                   font-bold
//                   text-white
//                   shadow-xl
//                   backdrop-blur-lg
//                   transition-all
//                   duration-300
//                   hover:-translate-y-1
//                   hover:bg-white/20
//                   sm:right-5
//                   sm:top-8
//                 "
//               >
//                 <span className="text-emerald-300">✦</span>
//                 Inspiring Futures
//               </div>

//               {/* =================================================
//                   MISSION CARD
//                   ================================================= */}

//               <div
//                 className="
//                   absolute
//                   bottom-5
//                   left-0
//                   rounded-2xl
//                   border
//                   border-white/20
//                   bg-white/95
//                   px-4
//                   py-3
//                   shadow-2xl
//                   backdrop-blur-lg
//                   transition-all
//                   duration-300
//                   hover:-translate-y-2
//                   sm:bottom-10
//                   sm:left-2
//                   sm:px-5
//                 "
//               >

//                 <div className="flex items-center gap-3">

//                   <div
//                     className="
//                       flex
//                       h-11
//                       w-11
//                       shrink-0
//                       items-center
//                       justify-center
//                       rounded-xl
//                       bg-gradient-to-br
//                       from-emerald-100
//                       to-teal-100
//                       text-xl
//                     "
//                   >
//                     📖
//                   </div>

//                   <div>

//                     <p className="text-xs font-medium text-slate-500">
//                       Our Mission
//                     </p>

//                     <p className="text-sm font-extrabold text-teal-800 sm:text-base">
//                       Learn • Grow • Lead
//                     </p>

//                   </div>

//                 </div>

//               </div>

//               {/* =================================================
//                   FLOATING STAR
//                   ================================================= */}

//               <div
//                 className="
//                   absolute
//                   left-2
//                   top-12
//                   flex
//                   h-12
//                   w-12
//                   animate-pulse
//                   items-center
//                   justify-center
//                   rounded-full
//                   border
//                   border-white/30
//                   bg-white/10
//                   text-xl
//                   shadow-xl
//                   backdrop-blur-md
//                   sm:left-4
//                   sm:top-16
//                 "
//               >
//                 ✨
//               </div>

//               {/* =================================================
//                   SMALL DECORATIVE DOT
//                   ================================================= */}

//               <div
//                 className="
//                   absolute
//                   bottom-24
//                   right-1
//                   h-5
//                   w-5
//                   animate-ping
//                   rounded-full
//                   bg-emerald-300/70
//                   sm:right-5
//                 "
//               />

//             </div>

//           </div>

//         </div>
//       </div>

//       {/* =========================================================
//           BOTTOM GRADIENT
//           ========================================================= */}

//       <div
//         className="
//           absolute
//           bottom-0
//           left-0
//           right-0
//           h-24
//           bg-gradient-to-t
//           from-slate-950/70
//           to-transparent
//         "
//       />

//       {/* =========================================================
//           SCROLL INDICATOR
//           ========================================================= */}

//       <a
//         href="#about"
//         className="
//           absolute
//           bottom-5
//           left-1/2
//           hidden
//           -translate-x-1/2
//           flex-col
//           items-center
//           gap-1
//           text-white/70
//           transition-all
//           duration-300
//           hover:text-white
//           sm:flex
//         "
//       >
//         <span className="text-xs font-medium">
//           Scroll to explore
//         </span>

//         <span className="animate-bounce text-lg">
//           ↓
//         </span>
//       </a>

//     </section>
//   );
// }
export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        isolate
        min-h-screen
        overflow-hidden
        bg-slate-950
      "
    >
      {/* =========================================================
          RIGHT SIDE BACKGROUND IMAGE
          ========================================================= */}

      <div
        className="
          absolute
          inset-0
          -z-30
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: "url('/new.png')",
        }}
      />

      {/* =========================================================
          IMAGE COLOR OVERLAY
          Keeps the original color style
          ========================================================= */}

      <div
        className="
          absolute
          inset-0
          -z-20
          bg-gradient-to-r
          from-slate-950
          via-teal-950/80
          to-teal-900/40
        "
      />

      {/* =========================================================
          DIAGONAL DARK PANEL
          Creates the layout shown in your reference image
          ========================================================= */}

      <div
        className="
          absolute
          inset-y-0
          left-0
          -z-10
          hidden
          w-[70%]
          bg-slate-950
          lg:block
        "
        style={{
          clipPath: "polygon(0 0, 100% 0, 78% 100%, 0 100%)",
        }}
      />

      {/* =========================================================
          MOBILE BACKGROUND OVERLAY
          ========================================================= */}

      <div
        className="
          absolute
          inset-0
          -z-10
          bg-slate-950/80
          lg:hidden
        "
      />

      {/* =========================================================
          MAIN CONTENT
          ========================================================= */}

      <div
        className="
          relative
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          items-center
          px-6
          py-20
          sm:px-8
          lg:px-10
          xl:px-12
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            lg:grid-cols-[1.05fr_0.95fr]
          "
        >
          {/* =====================================================
              LEFT CONTENT
              ===================================================== */}

          <div
            className="
              relative
              z-10
              max-w-3xl
              text-white
              lg:pr-16
            "
          >
            {/* =================================================
                ORGANIZATION LABEL
                ================================================= */}

            <div
              className="
                mb-7
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/20
                bg-white/10
                px-4
                py-2.5
                shadow-lg
                backdrop-blur-md
              "
            >
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-emerald-400
                  shadow-lg
                  shadow-emerald-400/50
                "
              />

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-emerald-100
                  sm:text-sm
                "
              >
                Improve Education
              </p>
            </div>

            {/* =================================================
                MAIN TITLE
                ================================================= */}

            <h1
              className="
                max-w-4xl
                text-5xl
                font-extrabold
                leading-[0.98]
                tracking-tight
                text-white
                sm:text-6xl
                md:text-7xl
                lg:text-7xl
                xl:text-8xl
              "
            >
              Transforming
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-emerald-300
                  via-teal-200
                  to-cyan-300
                  bg-clip-text
                  text-transparent
                "
              >
                Education.
              </span>

              <br />

              Empowering
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-emerald-300
                  via-teal-200
                  to-cyan-300
                  bg-clip-text
                  text-transparent
                "
              >
                People.
              </span>

              <br />

              Building the Future.
            </h1>

            {/* =================================================
                DECORATIVE LINE
                ================================================= */}

            <div className="mt-8 flex items-center gap-2">
              <span className="h-1 w-20 rounded-full bg-emerald-400" />
              <span className="h-1 w-10 rounded-full bg-cyan-400" />
              <span className="h-1 w-4 rounded-full bg-white/70" />
            </div>

            {/* =================================================
                DESCRIPTION
                ================================================= */}

            <p
              className="
                mt-7
                max-w-2xl
                text-base
                leading-7
                text-slate-100
                sm:text-lg
                sm:leading-8
              "
            >
              Improve Education is an education-focused organization
              committed to improving learning outcomes and creating
              opportunities for learners, educators, young people,
              families, and communities.
            </p>

            {/* =================================================
                BUTTONS
                ================================================= */}

            <div
              className="
                mt-9
                flex
                flex-col
                gap-4
                sm:flex-row
              "
            >
              {/* Explore Services */}

              <a
                href="#services"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-gradient-to-r
                  from-emerald-400
                  to-teal-400
                  px-7
                  py-3.5
                  font-bold
                  text-slate-950
                  shadow-xl
                  shadow-emerald-900/30
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:from-emerald-300
                  hover:to-cyan-300
                  hover:shadow-2xl
                  hover:shadow-emerald-400/20
                "
              >
                Explore Our Services

                <span
                  className="
                    text-lg
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </a>

              {/* Work With Us */}

              <a
                href="#contact"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  border-white/30
                  bg-white/10
                  px-7
                  py-3.5
                  font-bold
                  text-white
                  shadow-lg
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-emerald-300/60
                  hover:bg-white/15
                  hover:shadow-2xl
                "
              >
                Work With Us

                <span
                  className="
                    text-lg
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </a>
            </div>
          </div>

          {/* =====================================================
              RIGHT IMAGE
              ===================================================== */}

          <div
            className="
              relative
              hidden
              h-[600px]
              lg:block
            "
          >
            {/* Image container */}

            <div
              className="
                absolute
                inset-y-10
                right-0
                w-[90%]
                overflow-hidden
                rounded-l-[3rem]
                border
                border-white/20
                shadow-2xl
              "
            >
              <img
                src="/new.png"
                alt="Improve Education learners"
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                "
              />

              {/* Image overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-teal-950/70
                  via-teal-900/35
                  to-transparent
                "
              />
            </div>

            {/* =================================================
                SMALL IMAGE LABEL
                ================================================= */}

            <div
              className="
                absolute
                bottom-14
                right-8
                rounded-full
                border
                border-white/20
                bg-white/10
                px-5
                py-3
                text-sm
                font-bold
                text-white
                shadow-xl
                backdrop-blur-md
              "
            >
              <span className="mr-2 text-emerald-300">
                ✦
              </span>

              Inspiring Futures
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM GRADIENT
          ========================================================= */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-20
          bg-gradient-to-t
          from-slate-950/70
          to-transparent
          pointer-events-none
        "
      />

      {/* =========================================================
          SCROLL INDICATOR
          ========================================================= */}

      <a
        href="#about"
        className="
          absolute
          bottom-5
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-1
          text-white/70
          transition-all
          duration-300
          hover:text-white
          sm:flex
        "
      >
        <span className="text-xs font-medium">
          Scroll to explore
        </span>

        <span className="animate-bounce text-lg">
          ↓
        </span>
      </a>
    </section>
  );
}