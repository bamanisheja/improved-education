
// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="
//         relative
//         isolate
//         min-h-screen
//         overflow-hidden
//         bg-slate-950
//       "
//     >
//       {/* =========================================================
//           RIGHT SIDE BACKGROUND IMAGE
//           ========================================================= */}

//       <div
//         className="
//           absolute
//           inset-0
//           -z-30
//           bg-cover
//           bg-center
//           bg-no-repeat
//         "
//         style={{
//           backgroundImage: "url('/dance1.png')",
//         }}
//       />

//       {/* =========================================================
//           IMAGE COLOR OVERLAY
//           Keeps the original color style
//           ========================================================= */}

//       <div
//         className="
//           absolute
//           inset-0
//           -z-20
//           bg-gradient-to-r
//           from-slate-950
//           via-teal-950/80
//           to-teal-900/40
//         "
//       />

//       {/* =========================================================
//           DIAGONAL DARK PANEL
//           Creates the layout shown in your reference image
//           ========================================================= */}

//       <div
//         className="
//           absolute
//           inset-y-0
//           left-0
//           -z-10
//           hidden
//           w-[70%]
//           bg-slate-950
//           lg:block
//         "
//         style={{
//           clipPath: "polygon(0 0, 100% 0, 78% 100%, 0 100%)",
//         }}
//       />

//       {/* =========================================================
//           MOBILE BACKGROUND OVERLAY
//           ========================================================= */}

//       <div
//         className="
//           absolute
//           inset-0
//           -z-10
//           bg-slate-950/80
//           lg:hidden
//         "
//       />

//       {/* =========================================================
//           MAIN CONTENT
//           ========================================================= */}

//       <div
//         className="
//           relative
//           mx-auto
//           flex
//           min-h-screen
//           max-w-7xl
//           items-center
//           px-6
//           py-20
//           sm:px-8
//           lg:px-10
//           xl:px-12
//         "
//       >
//         <div
//           className="
//             grid
//             w-full
//             items-center
//             lg:grid-cols-[1.05fr_0.95fr]
//           "
//         >
//           {/* =====================================================
//               LEFT CONTENT
//               ===================================================== */}

//           <div
//             className="
//               relative
//               z-10
//               max-w-3xl
//               text-white
//               lg:pr-16
//             "
//           >
//             {/* =================================================
//                 ORGANIZATION LABEL
//                 ================================================= */}

//             <div
//               className="
//                 mb-7
//                 inline-flex
//                 items-center
//                 gap-3
//                 rounded-full
//                 border
//                 border-white/20
//                 bg-white/10
//                 px-4
//                 py-2.5
//                 shadow-lg
//                 backdrop-blur-md
//               "
//             >
//               <span
//                 className="
//                   h-2
//                   w-2
//                   rounded-full
//                   bg-emerald-400
//                   shadow-lg
//                   shadow-emerald-400/50
//                 "
//               />

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
//                 text-5xl
//                 font-extrabold
//                 leading-[0.98]
//                 tracking-tight
//                 text-white
//                 sm:text-6xl
//                 md:text-7xl
//                 lg:text-7xl
//                 xl:text-8xl
//               "
//             >
//               Transforming
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
//                 Education.
//               </span>

//               <br />

//               Empowering
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
//                 People.
//               </span>

//               <br />

//               Building the Future.
//             </h1>

//             {/* =================================================
//                 DECORATIVE LINE
//                 ================================================= */}

//             <div className="mt-8 flex items-center gap-2">
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
//           </div>

//           {/* =====================================================
//               RIGHT IMAGE
//               ===================================================== */}

//           <div
//             className="
//               relative
//               hidden
//               h-[600px]
//               lg:block
//             "
//           >
//             {/* Image container */}

//             <div
//               className="
//                 absolute
//                 inset-y-10
//                 right-0
//                 w-[90%]
//                 overflow-hidden
//                 rounded-l-[3rem]
//                 border
//                 border-white/20
//                 shadow-2xl
//               "
//             >
//               <img
//                 src="/new.png"
//                 alt="Improve Education learners"
//                 className="
//                   h-full
//                   w-full
//                   object-cover
//                   object-center
//                 "
//               />

//               {/* Image overlay */}

//               <div
//                 className="
//                   absolute
//                   inset-0
//                   bg-gradient-to-r
//                   from-teal-950/70
//                   via-teal-900/35
//                   to-transparent
//                 "
//               />
//             </div>

//             {/* =================================================
//                 SMALL IMAGE LABEL
//                 ================================================= */}

//             <div
//               className="
//                 absolute
//                 bottom-14
//                 right-8
//                 rounded-full
//                 border
//                 border-white/20
//                 bg-white/10
//                 px-5
//                 py-3
//                 text-sm
//                 font-bold
//                 text-white
//                 shadow-xl
//                 backdrop-blur-md
//               "
//             >
//               <span className="mr-2 text-emerald-300">
//                 ✦
//               </span>

//               Inspiring Futures
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
//           h-20
//           bg-gradient-to-t
//           from-slate-950/70
//           to-transparent
//           pointer-events-none
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
      {/* Background Image */}
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
          backgroundImage: "url('/dance1.png')",
        }}
      />

      {/* Image Overlay */}
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

      {/* Dark Left Panel */}
      <div
        className="
          absolute
          inset-y-0
          left-0
          -z-10
          hidden
          w-[65%]
          bg-slate-950
          lg:block
        "
        style={{
          clipPath: "polygon(0 0, 100% 0, 82% 100%, 0 100%)",
        }}
      />

      {/* Mobile Overlay */}
      <div
        className="
          absolute
          inset-0
          -z-10
          bg-slate-950/70
          lg:hidden
        "
      />

      {/* Main Content */}
      <div
        className="
          relative
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          items-center
          px-5
          py-20
          sm:px-8
          lg:px-10
          xl:px-12
        "
      >
        <div className="w-full max-w-3xl">

          {/* Organization Label */}
          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/20
              bg-white/10
              px-3
              py-2
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
              "
            />

            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-emerald-100
                sm:text-xs
              "
            >
              Improve Education
            </p>
          </div>

          {/* Main Title */}
          <h1
            className="
              max-w-3xl
              text-3xl
              font-extrabold
              leading-tight
              tracking-tight
              text-white
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            Discover Talent.
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
              Develop Potential.
            </span>

            <br />

            Inspire Change.
          </h1>

          {/* Decorative Line */}
          <div className="mt-5 flex items-center gap-1.5">
            <span className="h-1 w-14 rounded-full bg-emerald-400" />
            <span className="h-1 w-7 rounded-full bg-cyan-400" />
            <span className="h-1 w-3 rounded-full bg-white/70" />
          </div>

          {/* Description */}
          <p
            className="
              mt-5
              max-w-2xl
              text-sm
              leading-6
              text-slate-100
              sm:text-base
              sm:leading-7
              lg:text-lg
              lg:leading-8
            "
          >
            We identify, nurture and empower young talents through
            education and the creative arts—using drama, music, dance
            and fashion to educate, inspire and mobilize communities.
          </p>

          {/* Buttons */}
          <div
            className="
              mt-7
              flex
              flex-col
              gap-3
              sm:flex-row
            "
          >
            {/* Discover Our Work */}
            <a
              href="#services"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-gradient-to-r
                from-emerald-400
                to-teal-400
                px-6
                py-3
                text-sm
                font-bold
                text-slate-950
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:from-emerald-300
                hover:to-cyan-300
              "
            >
              Discover Our Work

              <span
                className="
                  text-base
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </a>

            {/* Partner With Us */}
            <a
              href="#Partners"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-white/30
                bg-white/10
                px-6
                py-3
                text-sm
                font-bold
                text-white
                shadow-lg
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-emerald-300/60
                hover:bg-white/15
              "
            >
              Partner With Us

              <span
                className="
                  text-base
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
      </div>

      {/* Bottom Gradient */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-16
          bg-gradient-to-t
          from-slate-950/70
          to-transparent
        "
      />

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="
          absolute
          bottom-4
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-1
          text-white/70
          transition
          hover:text-white
          sm:flex
        "
      >
        <span className="text-[10px] font-medium">
          Scroll to explore
        </span>

        <span className="animate-bounce text-base">
          ↓
        </span>
      </a>
    </section>
  );
}