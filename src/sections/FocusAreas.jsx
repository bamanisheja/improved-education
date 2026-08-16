// // const services = [
// //   {
// //     number: "01",
// //     title: "Academic Support and Tutoring",
// //     text: "Learner-centred academic support designed to strengthen knowledge, skills, confidence, and academic performance.",
// //     items: [
// //       "Individual and group tutoring",
// //       "English and language learning",
// //       "Literacy and numeracy support",
// //       "Homework support",
// //       "Examination preparation",
// //       "Remedial learning",
// //     ],
// //   },
// //   {
// //     number: "02",
// //     title: "Teacher Training and Professional Development",
// //     text: "Training that strengthens classroom practice, instructional leadership, learner engagement, and technology use.",
// //     items: [
// //       "Literacy and language instruction",
// //       "Phonics and phonemic awareness",
// //       "Classroom management",
// //       "Learner-centred teaching",
// //       "Assessment",
// //       "Coaching and mentoring",
// //     ],
// //   },
// //   {
// //     number: "03",
// //     title: "Youth Empowerment and Leadership",
// //     text: "We equip young people with knowledge, skills, confidence, and leadership abilities.",
// //     items: [
// //       "Leadership development",
// //       "Communication",
// //       "Life skills",
// //       "Entrepreneurship",
// //       "Digital skills",
// //       "Career guidance",
// //     ],
// //   },
// //   {
// //     number: "04",
// //     title: "Girls' Empowerment and Inclusion",
// //     text: "We create opportunities for girls and young women to develop confidence, skills, talents, leadership abilities, and aspirations.",
// //     items: [
// //       "Leadership",
// //       "Skills development",
// //       "Mentorship",
// //       "Safe learning environments",
// //       "Inclusion",
// //     ],
// //   },
// //   {
// //     number: "05",
// //     title: "Talent Identification and Development",
// //     text: "We help children and young people identify, develop, and showcase their unique talents.",
// //     items: [
// //       "Music",
// //       "Dance",
// //       "Drama and theatre",
// //       "Film and media",
// //       "Creative arts",
// //       "Public speaking",
// //       "Sports",
// //     ],
// //   },
// //   {
// //     number: "06",
// //     title: "Guidance, Counselling and Mentorship",
// //     text: "We support learners and young people to make informed decisions, overcome challenges, build confidence, and develop positive attitudes.",
// //   },
// //   {
// //     number: "07",
// //     title: "Education Technology and Digital Learning",
// //     text: "We promote effective technology use to improve teaching, learning, assessment, communication, and access to educational resources.",
// //   },
// //   {
// //     number: "08",
// //     title: "Education Research and Consultancy",
// //     text: "Research and consultancy services supporting evidence-based decision-making and better education programs.",
// //     items: [
// //       "Education research",
// //       "Baseline and endline assessments",
// //       "Data collection",
// //       "Monitoring and evaluation",
// //       "Program design",
// //       "School improvement consultancy",
// //     ],
// //   },
// //   {
// //     number: "09",
// //     title: "Parent and Community Engagement",
// //     text: "We support parents and communities to become active partners in children's education.",
// //     items: [
// //       "Positive parenting",
// //       "Learning at home",
// //       "Child protection",
// //       "Positive discipline",
// //       "Talent development",
// //       "School-family collaboration",
// //     ],
// //   },
// //   {
// //     number: "10",
// //     title: "Creative Arts and Language Training",
// //     text: "Practical training in languages and creative arts that develops communication skills, creativity, confidence, and practical abilities.",
// //   },
// // ];

// // export default function Services() {
// //   return (
// //     <section id="services" className="bg-gray-50 py-24">
// //       <div className="mx-auto max-w-7xl px-6">
        
// //         <div className="mx-auto max-w-3xl text-center">
// //           <p className="font-bold uppercase tracking-widest text-teal-700">
// //             What We Do
// //           </p>

// //           <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
// //             Our Services
// //           </h2>

// //           <p className="mt-5 leading-7 text-gray-600">
// //             Practical education solutions designed for learners, educators,
// //             families, schools, and communities.
// //           </p>
// //         </div>

// //         <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
// //           {services.map((service) => (
// //             <article
// //               key={service.number}
// //               className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
// //             >
// //               <div className="flex items-center justify-between">
// //                 <span className="text-3xl font-bold text-teal-100">
// //                   {service.number}
// //                 </span>

// //                 <div className="h-10 w-10 rounded-full bg-teal-50" />
// //               </div>

// //               <h3 className="mt-5 text-xl font-bold text-gray-900">
// //                 {service.title}
// //               </h3>

// //               <p className="mt-3 text-sm leading-7 text-gray-600">
// //                 {service.text}
// //               </p>

// //               {service.items && (
// //                 <ul className="mt-5 space-y-2">
// //                   {service.items.map((item) => (
// //                     <li
// //                       key={item}
// //                       className="flex gap-2 text-sm text-gray-600"
// //                     >
// //                       <span className="text-teal-600">✓</span>
// //                       {item}
// //                     </li>
// //                   ))}
// //                 </ul>
// //               )}
// //             </article>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// // const services = [
// //   {
// //     number: "01",
// //     title: "Academic Support and Tutoring",
// //     text: "Learner-centred academic support designed to strengthen knowledge, skills, confidence, and academic performance.",
// //     image: "/dance.png",
// //     items: [
// //       "Individual and group tutoring",
// //       "English and language learning",
// //       "Literacy and numeracy support",
// //       "Homework support",
// //       "Examination preparation",
// //       "Remedial learning",
// //     ],
// //   },
// //   {
// //     number: "02",
// //     title: "Teacher Training and Professional Development",
// //     text: "Training that strengthens classroom practice, instructional leadership, learner engagement, and technology use.",
// //     image: "/dance1.png",
// //     items: [
// //       "Literacy and language instruction",
// //       "Phonics and phonemic awareness",
// //       "Classroom management",
// //       "Learner-centred teaching",
// //       "Assessment",
// //       "Coaching and mentoring",
// //     ],
// //   },
// //   {
// //     number: "03",
// //     title: "Youth Empowerment and Leadership",
// //     text: "We equip young people with knowledge, skills, confidence, and leadership abilities.",
// //     image: "/dance.png",
// //     items: [
// //       "Leadership development",
// //       "Communication",
// //       "Life skills",
// //       "Entrepreneurship",
// //       "Digital skills",
// //       "Career guidance",
// //     ],
// //   },
// //   {
// //     number: "04",
// //     title: "Girls' Empowerment and Inclusion",
// //     text: "We create opportunities for girls and young women to develop confidence, skills, talents, leadership abilities, and aspirations.",
// //     image: "/dance1.png",
// //     items: [
// //       "Leadership",
// //       "Skills development",
// //       "Mentorship",
// //       "Safe learning environments",
// //       "Inclusion",
// //     ],
// //   },
// //   {
// //     number: "05",
// //     title: "Talent Identification and Development",
// //     text: "We help children and young people identify, develop, and showcase their unique talents.",
// //     image: "/dance.png",
// //     items: [
// //       "Music",
// //       "Dance",
// //       "Drama and theatre",
// //       "Film and media",
// //       "Creative arts",
// //       "Public speaking",
// //       "Sports",
// //     ],
// //   },
// //   {
// //     number: "06",
// //     title: "Guidance, Counselling and Mentorship",
// //     text: "We support learners and young people to make informed decisions, overcome challenges, build confidence, and develop positive attitudes.",
// //     image: "/dance1.png",
// //   },
// //   {
// //     number: "07",
// //     title: "Education Technology and Digital Learning",
// //     text: "We promote effective technology use to improve teaching, learning, assessment, communication, and access to educational resources.",
// //     image: "/dance3.png",
// //   },
// //   {
// //     number: "08",
// //     title: "Education Research and Consultancy",
// //     text: "Research and consultancy services supporting evidence-based decision-making and better education programs.",
// //     image: "/dance1.png",
// //     items: [
// //       "Education research",
// //       "Baseline and endline assessments",
// //       "Data collection",
// //       "Monitoring and evaluation",
// //       "Program design",
// //       "School improvement consultancy",
// //     ],
// //   },
// //   {
// //     number: "09",
// //     title: "Parent and Community Engagement",
// //     text: "We support parents and communities to become active partners in children's education.",
// //     image: "/dance.png",
// //     items: [
// //       "Positive parenting",
// //       "Learning at home",
// //       "Child protection",
// //       "Positive discipline",
// //       "Talent development",
// //       "School-family collaboration",
// //     ],
// //   },
// //   {
// //     number: "10",
// //     title: "Creative Arts and Language Training",
// //     text: "Practical training in languages and creative arts that develops communication skills, creativity, confidence, and practical abilities.",
// //     image: "/dance1.png",
// //   },
// // ];

// // export default function Services() {
// //   return (
// //     <section
// //       id="services"
// //       className="
// //         relative overflow-hidden
// //         bg-gray-50
// //         py-20
// //         sm:py-24
// //         lg:py-28
// //       "
// //     >

// //       {/* ================= BACKGROUND DECORATION ================= */}

// //       <div
// //         className="
// //           pointer-events-none
// //           absolute -left-32 top-20
// //           h-72 w-72
// //           rounded-full
// //           bg-green-100/60
// //           blur-3xl
// //         "
// //       ></div>

// //       <div
// //         className="
// //           pointer-events-none
// //           absolute -right-32 bottom-20
// //           h-72 w-72
// //           rounded-full
// //           bg-blue-100/60
// //           blur-3xl
// //         "
// //       ></div>

// //       {/* Decorative circles */}

// //       <div
// //         className="
// //           pointer-events-none
// //           absolute left-[8%] top-32
// //           h-3 w-3
// //           rounded-full
// //           bg-green-400/40
// //         "
// //       ></div>

// //       <div
// //         className="
// //           pointer-events-none
// //           absolute right-[12%] top-52
// //           h-4 w-4
// //           rounded-full
// //           bg-blue-400/40
// //         "
// //       ></div>

// //       {/* ================= MAIN CONTAINER ================= */}

// //       <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

// //         {/* ================= SECTION HEADER ================= */}

// //         <div className="mx-auto max-w-3xl text-center">

// //           {/* Label */}

// //           <div
// //             className="
// //               inline-flex
// //               items-center
// //               gap-2
// //               rounded-full
// //               border
// //               border-green-100
// //               bg-green-50
// //               px-4
// //               py-2
// //               shadow-sm
// //             "
// //           >
// //             <span
// //               className="
// //                 h-2
// //                 w-2
// //                 animate-pulse
// //                 rounded-full
// //                 bg-green-600
// //               "
// //             ></span>

// //             <p
// //               className="
// //                 font-bold
// //                 uppercase
// //                 tracking-widest
// //                 text-green-700
// //               "
// //             >
// //               What We Do
// //             </p>
// //           </div>

// //           {/* Heading */}

// //           <h2
// //             className="
// //               mt-4
// //               text-3xl
// //               font-extrabold
// //               tracking-tight
// //               text-gray-900
// //               sm:text-4xl
// //               lg:text-5xl
// //             "
// //           >
// //             Our{" "}

// //             <span className="text-green-700">
// //               Services
// //             </span>
// //           </h2>

// //           {/* Decorative line */}

// //           <div className="mt-5 flex justify-center gap-1.5">

// //             <span
// //               className="
// //                 h-1
// //                 w-12
// //                 rounded-full
// //                 bg-green-600
// //               "
// //             ></span>

// //             <span
// //               className="
// //                 h-1
// //                 w-6
// //                 rounded-full
// //                 bg-blue-600
// //               "
// //             ></span>

// //             <span
// //               className="
// //                 h-1
// //                 w-2
// //                 rounded-full
// //                 bg-gray-300
// //               "
// //             ></span>

// //           </div>

// //           {/* Description */}

// //           <p
// //             className="
// //               mt-5
// //               leading-7
// //               text-gray-600
// //               sm:text-lg
// //             "
// //           >
// //             Practical education solutions designed for learners,
// //             educators, families, schools, and communities.
// //           </p>

// //         </div>

// //         {/* ================= SERVICES GRID ================= */}

// //         <div
// //           className="
// //             mt-14
// //             grid
// //             gap-6
// //             sm:grid-cols-2
// //             lg:grid-cols-3
// //           "
// //         >

// //           {services.map((service) => (

// //             <article
// //               key={service.number}
// //               className="
// //                 group
// //                 relative
// //                 overflow-hidden
// //                 rounded-3xl
// //                 border
// //                 border-gray-100
// //                 bg-white
// //                 shadow-sm
// //                 transition-all
// //                 duration-500
// //                 hover:-translate-y-2
// //                 hover:border-green-100
// //                 hover:shadow-2xl
// //               "
// //             >

// //               {/* ================= LOGO BACKGROUND ================= */}

// //               <div
// //                 className="
// //                   pointer-events-none
// //                   absolute
// //                   inset-0
// //                   bg-center
// //                   bg-no-repeat
// //                   bg-[length:260px]
// //                   opacity-[0.045]
// //                   transition-all
// //                   duration-700
// //                   group-hover:scale-110
// //                   group-hover:opacity-[0.08]
// //                 "
// //                 style={{
// //                   backgroundImage: "url('/logo.png')",
// //                 }}
// //               ></div>

// //               {/* ================= CARD TOP GRADIENT ================= */}

// //               <div
// //                 className="
// //                   absolute
// //                   left-0
// //                   top-0
// //                   z-20
// //                   h-1
// //                   w-full
// //                   bg-gradient-to-r
// //                   from-green-600
// //                   via-green-400
// //                   to-blue-600
// //                   opacity-80
// //                   transition-all
// //                   duration-500
// //                   group-hover:h-1.5
// //                   group-hover:opacity-100
// //                 "
// //               ></div>

// //               {/* ================= IMAGE ================= */}

// //               <div
// //                 className="
// //                   relative
// //                   h-52
// //                   w-full
// //                   overflow-hidden
// //                   sm:h-56
// //                 "
// //               >

// //                 <img
// //                   src={service.image}
// //                   alt={`${service.title} - Improve Education`}
// //                   className="
// //                     h-full
// //                     w-full
// //                     object-cover
// //                     object-center
// //                     transition-transform
// //                     duration-700
// //                     ease-out
// //                     group-hover:scale-110
// //                   "
// //                 />

// //                 {/* Image overlay */}

// //                 <div
// //                   className="
// //                     absolute
// //                     inset-0
// //                     bg-gradient-to-t
// //                     from-black/60
// //                     via-black/10
// //                     to-transparent
// //                   "
// //                 ></div>

// //                 {/* Image top gradient */}

// //                 <div
// //                   className="
// //                     absolute
// //                     inset-x-0
// //                     top-0
// //                     h-20
// //                     bg-gradient-to-b
// //                     from-black/30
// //                     to-transparent
// //                   "
// //                 ></div>

// //                 {/* Service number on image */}

// //                 <div
// //                   className="
// //                     absolute
// //                     bottom-4
// //                     left-5
// //                     flex
// //                     h-11
// //                     w-11
// //                     items-center
// //                     justify-center
// //                     rounded-xl
// //                     border
// //                     border-white/30
// //                     bg-white/90
// //                     shadow-lg
// //                     backdrop-blur-sm
// //                     transition-all
// //                     duration-500
// //                     group-hover:scale-110
// //                     group-hover:rotate-3
// //                   "
// //                 >
// //                   <span
// //                     className="
// //                       text-sm
// //                       font-extrabold
// //                       text-green-700
// //                     "
// //                   >
// //                     {service.number}
// //                   </span>
// //                 </div>

// //                 {/* Image label */}

// //                 <div
// //                   className="
// //                     absolute
// //                     bottom-4
// //                     right-5
// //                     rounded-full
// //                     border
// //                     border-white/20
// //                     bg-black/30
// //                     px-3
// //                     py-1.5
// //                     text-xs
// //                     font-semibold
// //                     text-white
// //                     backdrop-blur-md
// //                   "
// //                 >
// //                   Improve Education
// //                 </div>

// //               </div>

// //               {/* ================= CARD CONTENT ================= */}

// //               <div
// //                 className="
// //                   relative
// //                   z-10
// //                   p-6
// //                   sm:p-7
// //                 "
// //               >

// //                 {/* ================= CARD HEADER ================= */}

// //                 <div
// //                   className="
// //                     flex
// //                     items-center
// //                     justify-between
// //                   "
// //                 >

// //                   {/* Small number */}

// //                   <div
// //                     className="
// //                       flex
// //                       h-10
// //                       w-10
// //                       items-center
// //                       justify-center
// //                       rounded-xl
// //                       bg-gradient-to-br
// //                       from-green-50
// //                       to-blue-50
// //                       ring-1
// //                       ring-green-100
// //                       transition-all
// //                       duration-500
// //                       group-hover:scale-110
// //                       group-hover:rotate-3
// //                     "
// //                   >
// //                     <span
// //                       className="
// //                         text-xs
// //                         font-extrabold
// //                         text-green-700
// //                       "
// //                     >
// //                       {service.number}
// //                     </span>
// //                   </div>

// //                   {/* Logo */}

// //                   <div
// //                     className="
// //                       flex
// //                       h-12
// //                       w-12
// //                       items-center
// //                       justify-center
// //                       overflow-hidden
// //                       rounded-full
// //                       border
// //                       border-gray-100
// //                       bg-white
// //                       p-1
// //                       shadow-sm
// //                       transition-all
// //                       duration-500
// //                       group-hover:scale-110
// //                       group-hover:rotate-3
// //                       group-hover:shadow-md
// //                     "
// //                   >

// //                     <img
// //                       src="/logo.png"
// //                       alt="Improve Education Logo"
// //                       className="
// //                         h-full
// //                         w-full
// //                         object-contain
// //                         transition-transform
// //                         duration-500
// //                         group-hover:scale-110
// //                       "
// //                     />

// //                   </div>

// //                 </div>

// //                 {/* ================= TITLE ================= */}

// //                 <h3
// //                   className="
// //                     relative
// //                     mt-6
// //                     text-xl
// //                     font-extrabold
// //                     leading-7
// //                     text-gray-900
// //                     transition-colors
// //                     duration-300
// //                     group-hover:text-green-700
// //                   "
// //                 >
// //                   {service.title}
// //                 </h3>

// //                 {/* ================= DESCRIPTION ================= */}

// //                 <p
// //                   className="
// //                     relative
// //                     mt-3
// //                     text-sm
// //                     leading-7
// //                     text-gray-600
// //                   "
// //                 >
// //                   {service.text}
// //                 </p>

// //                 {/* ================= ITEMS ================= */}

// //                 {service.items && (
// //                   <ul
// //                     className="
// //                       relative
// //                       mt-5
// //                       space-y-2.5
// //                     "
// //                   >

// //                     {service.items.map((item) => (

// //                       <li
// //                         key={item}
// //                         className="
// //                           group/item
// //                           flex
// //                           items-start
// //                           gap-2.5
// //                           text-sm
// //                           text-gray-600
// //                           transition-all
// //                           duration-300
// //                           hover:translate-x-1
// //                           hover:text-gray-900
// //                         "
// //                       >

// //                         {/* Check icon */}

// //                         <span
// //                           className="
// //                             mt-0.5
// //                             flex
// //                             h-5
// //                             w-5
// //                             shrink-0
// //                             items-center
// //                             justify-center
// //                             rounded-full
// //                             bg-green-50
// //                             text-xs
// //                             font-bold
// //                             text-green-600
// //                             transition-all
// //                             duration-300
// //                             group-hover/item:bg-green-600
// //                             group-hover/item:text-white
// //                           "
// //                         >
// //                           ✓
// //                         </span>

// //                         <span>
// //                           {item}
// //                         </span>

// //                       </li>

// //                     ))}

// //                   </ul>
// //                 )}

// //                 {/* ================= BOTTOM LINK ================= */}

// //                 <div
// //                   className="
// //                     relative
// //                     mt-6
// //                     border-t
// //                     border-gray-100
// //                     pt-5
// //                   "
// //                 >

// //                   <a
// //                     href="#contact"
// //                     className="
// //                       group/link
// //                       inline-flex
// //                       items-center
// //                       gap-2
// //                       text-sm
// //                       font-bold
// //                       text-green-700
// //                       transition-all
// //                       duration-300
// //                       hover:text-blue-700
// //                     "
// //                   >

// //                     Learn More

// //                     <span
// //                       className="
// //                         transition-transform
// //                         duration-300
// //                         group-hover/link:translate-x-1
// //                       "
// //                     >
// //                       →
// //                     </span>

// //                   </a>

// //                 </div>

// //               </div>

// //               {/* ================= HOVER CORNER ================= */}

// //               <div
// //                 className="
// //                   pointer-events-none
// //                   absolute
// //                   bottom-0
// //                   right-0
// //                   h-16
// //                   w-16
// //                   translate-x-8
// //                   translate-y-8
// //                   rounded-full
// //                   bg-gradient-to-br
// //                   from-green-500/10
// //                   to-blue-500/10
// //                   transition-all
// //                   duration-500
// //                   group-hover:scale-150
// //                 "
// //               ></div>

// //             </article>

// //           ))}

// //         </div>

// //         {/* ================= BOTTOM CTA ================= */}

// //         <div
// //           className="
// //             relative
// //             mt-14
// //             overflow-hidden
// //             rounded-3xl
// //             bg-gradient-to-r
// //             from-green-700
// //             to-blue-700
// //             px-6
// //             py-8
// //             text-center
// //             shadow-xl
// //             sm:px-10
// //             lg:flex
// //             lg:items-center
// //             lg:justify-between
// //             lg:text-left
// //           "
// //         >

// //           {/* CTA logo watermark */}

// //           <div
// //             className="
// //               pointer-events-none
// //               absolute
// //               right-0
// //               top-1/2
// //               h-64
// //               w-64
// //               -translate-y-1/2
// //               bg-contain
// //               bg-center
// //               bg-no-repeat
// //               opacity-10
// //             "
// //             style={{
// //               backgroundImage: "url('/logo.png')",
// //             }}
// //           ></div>

// //           {/* Decorative circle */}

// //           <div
// //             className="
// //               absolute
// //               -right-10
// //               -top-20
// //               h-48
// //               w-48
// //               rounded-full
// //               bg-white/10
// //             "
// //           ></div>

// //           {/* CTA text */}

// //           <div className="relative z-10">

// //             <h3
// //               className="
// //                 text-xl
// //                 font-extrabold
// //                 text-white
// //                 sm:text-2xl
// //               "
// //             >
// //               Ready to improve education?
// //             </h3>

// //             <p
// //               className="
// //                 mt-2
// //                 text-sm
// //                 leading-6
// //                 text-green-50
// //                 sm:text-base
// //               "
// //             >
// //               Let's work together to create meaningful
// //               learning opportunities.
// //             </p>

// //           </div>

// //           {/* CTA button */}

// //           <a
// //             href="#contact"
// //             className="
// //               relative
// //               z-10
// //               mt-6
// //               inline-flex
// //               items-center
// //               gap-2
// //               rounded-full
// //               bg-white
// //               px-6
// //               py-3
// //               font-bold
// //               text-green-700
// //               shadow-lg
// //               transition-all
// //               duration-300
// //               hover:-translate-y-1
// //               hover:bg-green-50
// //               hover:shadow-xl
// //               lg:mt-0
// //             "
// //           >

// //             Get Started

// //             <span
// //               className="
// //                 transition-transform
// //                 duration-300
// //               "
// //             >
// //               →
// //             </span>

// //           </a>

// //         </div>

// //       </div>

// //     </section>
// //   );
// // // }
// // const services = [
// //   {
// //     number: "01",
// //     title: "Academic Support and Tutoring",
// //     text: "Learner-centred academic support designed to strengthen knowledge, skills, confidence, and academic performance.",
// //     image: "/k.png",
// //     gradient: "from-green-600 to-emerald-400",
// //     badge: "Academic Support",
// //     items: [
// //       "Individual and group tutoring",
// //       "English and language learning",
// //       "Literacy and numeracy support",
// //       "Homework support",
// //       "Examination preparation",
// //       "Remedial learning",
// //     ],
// //   },

// //   {
// //     number: "02",
// //     title: "Teacher Training and Professional Development",
// //     text: "Training that strengthens classroom practice, instructional leadership, learner engagement, and technology use.",
// //     image: "/a.png",
// //     gradient: "from-blue-600 to-cyan-400",
// //     badge: "Teacher Training",
// //     items: [
// //       "Literacy and language instruction",
// //       "Phonics and phonemic awareness",
// //       "Classroom management",
// //       "Learner-centred teaching",
// //       "Assessment",
// //       "Coaching and mentoring",
// //     ],
// //   },

// //   {
// //     number: "03",
// //     title: "Youth Empowerment and Leadership",
// //     text: "We equip young people with knowledge, skills, confidence, and leadership abilities.",
// //     image: "/new 1.png",
// //     gradient: "from-orange-500 to-yellow-400",
// //     badge: "Youth Empowerment",
// //     items: [
// //       "Leadership development",
// //       "Communication",
// //       "Life skills",
// //       "Entrepreneurship",
// //       "Digital skills",
// //       "Career guidance",
// //     ],
// //   },

// //   {
// //     number: "04",
// //     title: "Girls' Empowerment and Inclusion",
// //     text: "We create opportunities for girls and young women to develop confidence, skills, talents, leadership abilities, and aspirations.",
// //     image: "/dance4.png",
// //     gradient: "from-pink-600 to-rose-400",
// //     badge: "Girls' Empowerment",
// //     items: [
// //       "Leadership",
// //       "Skills development",
// //       "Mentorship",
// //       "Safe learning environments",
// //       "Inclusion",
// //     ],
// //   },

// //   {
// //     number: "05",
// //     title: "Talent Identification and Development",
// //     text: "We help children and young people identify, develop, and showcase their unique talents.",
// //     image: "/d.png",
// //     gradient: "from-purple-600 to-fuchsia-400",
// //     badge: "Talent Development",
// //     items: [
// //       "Music",
// //       "Dance",
// //       "Drama and theatre",
// //       "Film and media",
// //       "Creative arts",
// //       "Public speaking",
// //       "Sports",
// //     ],
// //   },

// //   {
// //     number: "06",
// //     title: "Guidance, Counselling and Mentorship",
// //     text: "We support learners and young people to make informed decisions, overcome challenges, build confidence, and develop positive attitudes.",
// //     image: "/dance3.png",
// //     gradient: "from-cyan-600 to-sky-400",
// //     badge: "Mentorship",
// //     items: [
// //       "Personal guidance",
// //       "Career guidance",
// //       "Youth mentorship",
// //       "Confidence building",
// //       "Decision-making skills",
// //     ],
// //   },

// //   {
// //     number: "07",
// //     title: "Education Technology and Digital Learning",
// //     text: "We promote effective technology use to improve teaching, learning, assessment, communication, and access to educational resources.",
// //     image: "/education.png",
// //     gradient: "from-indigo-600 to-blue-400",
// //     badge: "Digital Learning",
// //     items: [
// //       "Digital literacy",
// //       "Technology-supported learning",
// //       "Online learning",
// //       "Digital resources",
// //       "ICT skills",
// //     ],
// //   },

// //   {
// //     number: "08",
// //     title: "Education Research and Consultancy",
// //     text: "Research and consultancy services supporting evidence-based decision-making and better education programs.",
// //     image: "/research.png",
// //     gradient: "from-teal-600 to-emerald-400",
// //     badge: "Research & Consultancy",
// //     items: [
// //       "Education research",
// //       "Baseline and endline assessments",
// //       "Data collection",
// //       "Monitoring and evaluation",
// //       "Program design",
// //       "School improvement consultancy",
// //     ],
// //   },

// //   {
// //     number: "09",
// //     title: "Parent and Community Engagement",
// //     text: "We support parents and communities to become active partners in children's education.",
// //     image: "/parent.png",
// //     gradient: "from-emerald-600 to-green-400",
// //     badge: "Community Engagement",
// //     items: [
// //       "Positive parenting",
// //       "Learning at home",
// //       "Child protection",
// //       "Positive discipline",
// //       "Talent development",
// //       "School-family collaboration",
// //     ],
// //   },

// //   {
// //     number: "10",
// //     title: "Creative Arts and Language Training",
// //     text: "Practical training in languages and creative arts that develops communication skills, creativity, confidence, and practical abilities.",
// //     image: "/creative.png",
// //     gradient: "from-rose-600 to-pink-400",
// //     badge: "Creative Arts",
// //     items: [
// //       "Language training",
// //       "Creative arts",
// //       "Dance and drama",
// //       "Public speaking",
// //       "Communication skills",
// //     ],
// //   },
// // ];

// // export default function Services() {
// //   return (
// //     <section
// //       id="services"
// //       className="
// //         relative
// //         overflow-hidden
// //         bg-gradient-to-b
// //         from-white
// //         via-gray-50
// //         to-green-50/40
// //         py-20
// //         sm:py-24
// //         lg:py-28
// //       "
// //     >

// //       {/* =========================================================
// //           BACKGROUND DECORATIONS
// //       ========================================================= */}

// //       <div
// //         className="
// //           pointer-events-none
// //           absolute
// //           -left-40
// //           top-20
// //           h-96
// //           w-96
// //           rounded-full
// //           bg-green-200/30
// //           blur-3xl
// //         "
// //       />

// //       <div
// //         className="
// //           pointer-events-none
// //           absolute
// //           -right-40
// //           top-[35%]
// //           h-96
// //           w-96
// //           rounded-full
// //           bg-blue-200/30
// //           blur-3xl
// //         "
// //       />

// //       <div
// //         className="
// //           pointer-events-none
// //           absolute
// //           bottom-0
// //           left-[35%]
// //           h-72
// //           w-72
// //           rounded-full
// //           bg-purple-100/20
// //           blur-3xl
// //         "
// //       />

// //       {/* Small decorative circles */}

// //       <div
// //         className="
// //           pointer-events-none
// //           absolute
// //           left-[8%]
// //           top-36
// //           h-3
// //           w-3
// //           rounded-full
// //           bg-green-500/40
// //         "
// //       />

// //       <div
// //         className="
// //           pointer-events-none
// //           absolute
// //           right-[12%]
// //           top-52
// //           h-4
// //           w-4
// //           rounded-full
// //           bg-blue-500/40
// //         "
// //       />

// //       <div
// //         className="
// //           pointer-events-none
// //           absolute
// //           bottom-[20%]
// //           left-[15%]
// //           h-5
// //           w-5
// //           rounded-full
// //           bg-purple-500/20
// //         "
// //       />

// //       {/* =========================================================
// //           MAIN CONTAINER
// //       ========================================================= */}

// //       <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

// //         {/* =======================================================
// //             SECTION HEADER
// //         ======================================================= */}

// //         <div className="mx-auto max-w-3xl text-center">

// //           {/* Label */}

// //           <div
// //             className="
// //               inline-flex
// //               items-center
// //               gap-2
// //               rounded-full
// //               border
// //               border-green-200
// //               bg-white
// //               px-5
// //               py-2.5
// //               shadow-sm
// //               transition-all
// //               duration-300
// //               hover:-translate-y-1
// //               hover:shadow-md
// //             "
// //           >
// //             <span
// //               className="
// //                 h-2.5
// //                 w-2.5
// //                 animate-pulse
// //                 rounded-full
// //                 bg-green-600
// //               "
// //             />

// //             <span
// //               className="
// //                 text-xs
// //                 font-extrabold
// //                 uppercase
// //                 tracking-[0.2em]
// //                 text-green-700
// //                 sm:text-sm
// //               "
// //             >
// //               What We Do
// //             </span>
// //           </div>

// //           {/* Heading */}

// //           <h2
// //             className="
// //               mt-6
// //               text-4xl
// //               font-black
// //               tracking-tight
// //               text-gray-900
// //               sm:text-5xl
// //               lg:text-6xl
// //             "
// //           >
// //             Our{" "}
// //             <span
// //               className="
// //                 bg-gradient-to-r
// //                 from-green-600
// //                 via-green-500
// //                 to-blue-600
// //                 bg-clip-text
// //                 text-transparent
// //               "
// //             >
// //               Services
// //             </span>
// //           </h2>

// //           {/* Decorative line */}

// //           <div className="mt-6 flex justify-center gap-1.5">

// //             <span
// //               className="
// //                 h-1.5
// //                 w-14
// //                 rounded-full
// //                 bg-green-600
// //               "
// //             />

// //             <span
// //               className="
// //                 h-1.5
// //                 w-8
// //                 rounded-full
// //                 bg-blue-600
// //               "
// //             />

// //             <span
// //               className="
// //                 h-1.5
// //                 w-3
// //                 rounded-full
// //                 bg-gray-300
// //               "
// //             />

// //           </div>

// //           {/* Description */}

// //           <p
// //             className="
// //               mx-auto
// //               mt-6
// //               max-w-2xl
// //               text-base
// //               leading-8
// //               text-gray-600
// //               sm:text-lg
// //             "
// //           >
// //             Practical education solutions designed for learners,
// //             educators, families, schools, and communities.
// //           </p>

// //         </div>

// //         {/* =======================================================
// //             SERVICES GRID
// //         ======================================================= */}

// //         <div
// //           className="
// //             mt-16
// //             grid
// //             gap-7
// //             sm:grid-cols-2
// //             lg:grid-cols-3
// //           "
// //         >

// //           {services.map((service) => (

// //             <article
// //               key={service.number}
// //               className="
// //                 group
// //                 relative
// //                 overflow-hidden
// //                 rounded-[2rem]
// //                 border
// //                 border-gray-100
// //                 bg-white
// //                 shadow-md
// //                 transition-all
// //                 duration-500
// //                 hover:-translate-y-3
// //                 hover:border-green-100
// //                 hover:shadow-2xl
// //               "
// //             >

// //               {/* =================================================
// //                   TOP COLOR BAR
// //               ================================================= */}

// //               <div
// //                 className={`
// //                   absolute
// //                   left-0
// //                   top-0
// //                   z-30
// //                   h-1.5
// //                   w-full
// //                   bg-gradient-to-r
// //                   ${service.gradient}
// //                   transition-all
// //                   duration-500
// //                   group-hover:h-2
// //                 `}
// //               />

// //               {/* =================================================
// //                   IMAGE AREA
// //               ================================================= */}

// //               <div
// //                 className="
// //                   relative
// //                   h-60
// //                   w-full
// //                   overflow-hidden
// //                   sm:h-64
// //                 "
// //               >

// //                 {/* Main image */}

// //                 <img
// //                   src={service.image}
// //                   alt={`${service.title} - Improve Education`}
// //                   className="
// //                     h-full
// //                     w-full
// //                     object-cover
// //                     object-center
// //                     transition-transform
// //                     duration-700
// //                     ease-out
// //                     group-hover:scale-110
// //                   "
// //                 />

// //                 {/* Dark bottom overlay */}

// //                 <div
// //                   className="
// //                     absolute
// //                     inset-0
// //                     bg-gradient-to-t
// //                     from-black/75
// //                     via-black/20
// //                     to-transparent
// //                   "
// //                 />

// //                 {/* Top image overlay */}

// //                 <div
// //                   className="
// //                     absolute
// //                     inset-x-0
// //                     top-0
// //                     h-28
// //                     bg-gradient-to-b
// //                     from-black/35
// //                     to-transparent
// //                   "
// //                 />

// //                 {/* Logo watermark */}

// //                 <div
// //                   className="
// //                     pointer-events-none
// //                     absolute
// //                     inset-0
// //                     bg-center
// //                     bg-no-repeat
// //                     bg-[length:190px]
// //                     opacity-[0.08]
// //                     transition-all
// //                     duration-700
// //                     group-hover:scale-110
// //                     group-hover:opacity-[0.16]
// //                   "
// //                   style={{
// //                     backgroundImage: "url('/logo.png')",
// //                   }}
// //                 />

// //                 {/* Service number */}

// //                 <div
// //                   className="
// //                     absolute
// //                     bottom-5
// //                     left-5
// //                     flex
// //                     h-12
// //                     w-12
// //                     items-center
// //                     justify-center
// //                     rounded-2xl
// //                     border
// //                     border-white/40
// //                     bg-white/95
// //                     shadow-xl
// //                     backdrop-blur-md
// //                     transition-all
// //                     duration-500
// //                     group-hover:scale-110
// //                     group-hover:rotate-3
// //                   "
// //                 >
// //                   <span
// //                     className="
// //                       text-sm
// //                       font-black
// //                       text-green-700
// //                     "
// //                   >
// //                     {service.number}
// //                   </span>
// //                 </div>

// //                 {/* Service badge */}

// //                 <div
// //                   className="
// //                     absolute
// //                     bottom-5
// //                     right-5
// //                     max-w-[65%]
// //                     rounded-full
// //                     border
// //                     border-white/30
// //                     bg-black/40
// //                     px-4
// //                     py-2
// //                     text-right
// //                     text-xs
// //                     font-bold
// //                     text-white
// //                     shadow-lg
// //                     backdrop-blur-md
// //                   "
// //                 >
// //                   {service.badge}
// //                 </div>

// //               </div>

// //               {/* =================================================
// //                   CARD CONTENT
// //               ================================================= */}

// //               <div
// //                 className="
// //                   relative
// //                   z-10
// //                   p-6
// //                   sm:p-7
// //                 "
// //               >

// //                 {/* =================================================
// //                     CARD TOP
// //                 ================================================= */}

// //                 <div
// //                   className="
// //                     flex
// //                     items-center
// //                     justify-between
// //                   "
// //                 >

// //                   {/* Number */}

// //                   <div
// //                     className="
// //                       flex
// //                       h-11
// //                       w-11
// //                       items-center
// //                       justify-center
// //                       rounded-xl
// //                       bg-gradient-to-br
// //                       from-green-50
// //                       to-blue-50
// //                       ring-1
// //                       ring-green-100
// //                       transition-all
// //                       duration-500
// //                       group-hover:scale-110
// //                       group-hover:rotate-3
// //                     "
// //                   >
// //                     <span
// //                       className="
// //                         text-xs
// //                         font-black
// //                         text-green-700
// //                       "
// //                     >
// //                       {service.number}
// //                     </span>
// //                   </div>

// //                   {/* Logo */}

// //                   <div
// //                     className="
// //                       flex
// //                       h-12
// //                       w-12
// //                       items-center
// //                       justify-center
// //                       overflow-hidden
// //                       rounded-full
// //                       border
// //                       border-gray-100
// //                       bg-white
// //                       p-1
// //                       shadow-md
// //                       transition-all
// //                       duration-500
// //                       group-hover:scale-110
// //                       group-hover:rotate-3
// //                     "
// //                   >

// //                     <img
// //                       src="/logo.png"
// //                       alt="Improve Education Logo"
// //                       className="
// //                         h-full
// //                         w-full
// //                         object-contain
// //                       "
// //                     />

// //                   </div>

// //                 </div>

// //                 {/* =================================================
// //                     TITLE
// //                 ================================================= */}

// //                 <h3
// //                   className="
// //                     mt-6
// //                     text-xl
// //                     font-black
// //                     leading-7
// //                     text-gray-900
// //                     transition-colors
// //                     duration-300
// //                     group-hover:text-green-700
// //                   "
// //                 >
// //                   {service.title}
// //                 </h3>

// //                 {/* =================================================
// //                     DESCRIPTION
// //                 ================================================= */}

// //                 <p
// //                   className="
// //                     mt-3
// //                     text-sm
// //                     leading-7
// //                     text-gray-600
// //                   "
// //                 >
// //                   {service.text}
// //                 </p>

// //                 {/* =================================================
// //                     SERVICE ITEMS
// //                 ================================================= */}

// //                 {service.items && service.items.length > 0 && (

// //                   <ul
// //                     className="
// //                       mt-6
// //                       space-y-3
// //                     "
// //                   >

// //                     {service.items.map((item) => (

// //                       <li
// //                         key={item}
// //                         className="
// //                           group/item
// //                           flex
// //                           items-start
// //                           gap-3
// //                           text-sm
// //                           leading-6
// //                           text-gray-600
// //                           transition-all
// //                           duration-300
// //                           hover:translate-x-1
// //                           hover:text-gray-900
// //                         "
// //                       >

// //                         {/* Check */}

// //                         <span
// //                           className="
// //                             mt-0.5
// //                             flex
// //                             h-5
// //                             w-5
// //                             shrink-0
// //                             items-center
// //                             justify-center
// //                             rounded-full
// //                             bg-green-100
// //                             text-xs
// //                             font-black
// //                             text-green-700
// //                             transition-all
// //                             duration-300
// //                             group-hover/item:bg-green-600
// //                             group-hover/item:text-white
// //                           "
// //                         >
// //                           ✓
// //                         </span>

// //                         {/* Text */}

// //                         <span>
// //                           {item}
// //                         </span>

// //                       </li>

// //                     ))}

// //                   </ul>

// //                 )}

// //                 {/* =================================================
// //                     LEARN MORE
// //                 ================================================= */}

// //                 <div
// //                   className="
// //                     mt-7
// //                     border-t
// //                     border-gray-100
// //                     pt-5
// //                   "
// //                 >

// //                   <a
// //                     href="#contact"
// //                     className="
// //                       inline-flex
// //                       items-center
// //                       gap-2
// //                       rounded-full
// //                       bg-green-50
// //                       px-5
// //                       py-2.5
// //                       text-sm
// //                       font-extrabold
// //                       text-green-700
// //                       transition-all
// //                       duration-300
// //                       hover:-translate-y-0.5
// //                       hover:bg-green-700
// //                       hover:text-white
// //                       hover:shadow-lg
// //                     "
// //                   >

// //                     Learn More

// //                     <span
// //                       className="
// //                         transition-transform
// //                         duration-300
// //                         group-hover:translate-x-1
// //                       "
// //                     >
// //                       →
// //                     </span>

// //                   </a>

// //                 </div>

// //               </div>

// //               {/* =================================================
// //                   BOTTOM DECORATIVE CIRCLE
// //               ================================================= */}

// //               <div
// //                 className="
// //                   pointer-events-none
// //                   absolute
// //                   -bottom-12
// //                   -right-12
// //                   h-36
// //                   w-36
// //                   rounded-full
// //                   bg-gradient-to-br
// //                   from-green-500/10
// //                   to-blue-500/10
// //                   transition-transform
// //                   duration-700
// //                   group-hover:scale-150
// //                 "
// //               />

// //             </article>

// //           ))}

// //         </div>

// //         {/* =======================================================
// //             BOTTOM CTA
// //         ======================================================= */}

// //         <div
// //           className="
// //             relative
// //             mt-16
// //             overflow-hidden
// //             rounded-[2rem]
// //             bg-gradient-to-r
// //             from-green-700
// //             via-green-600
// //             to-blue-700
// //             px-6
// //             py-10
// //             shadow-2xl
// //             sm:px-10
// //             sm:py-12
// //             lg:flex
// //             lg:items-center
// //             lg:justify-between
// //             lg:px-14
// //           "
// //         >

// //           {/* CTA background glow */}

// //           <div
// //             className="
// //               pointer-events-none
// //               absolute
// //               -left-20
// //               -top-20
// //               h-56
// //               w-56
// //               rounded-full
// //               bg-white/10
// //             "
// //           />

// //           <div
// //             className="
// //               pointer-events-none
// //               absolute
// //               -bottom-24
// //               -right-10
// //               h-72
// //               w-72
// //               rounded-full
// //               bg-white/10
// //             "
// //           />

// //           {/* Logo watermark */}

// //           <div
// //             className="
// //               pointer-events-none
// //               absolute
// //               right-5
// //               top-1/2
// //               h-64
// //               w-64
// //               -translate-y-1/2
// //               bg-contain
// //               bg-center
// //               bg-no-repeat
// //               opacity-10
// //             "
// //             style={{
// //               backgroundImage: "url('/logo.png')",
// //             }}
// //           />

// //           {/* CTA Content */}

// //           <div className="relative z-10 max-w-2xl">

// //             <div
// //               className="
// //                 inline-flex
// //                 items-center
// //                 gap-2
// //                 rounded-full
// //                 border
// //                 border-white/20
// //                 bg-white/10
// //                 px-4
// //                 py-2
// //                 text-xs
// //                 font-bold
// //                 uppercase
// //                 tracking-widest
// //                 text-white
// //                 backdrop-blur-sm
// //               "
// //             >
// //               <span
// //                 className="
// //                   h-2
// //                   w-2
// //                   rounded-full
// //                   bg-green-300
// //                 "
// //               />

// //               Let's Work Together
// //             </div>

// //             <h3
// //               className="
// //                 mt-4
// //                 text-2xl
// //                 font-black
// //                 text-white
// //                 sm:text-3xl
// //                 lg:text-4xl
// //               "
// //             >
// //               Ready to improve education?
// //             </h3>

// //             <p
// //               className="
// //                 mt-3
// //                 max-w-xl
// //                 text-sm
// //                 leading-7
// //                 text-green-50
// //                 sm:text-base
// //               "
// //             >
// //               Let's work together to create meaningful
// //               learning opportunities and build a stronger
// //               future through education.
// //             </p>

// //           </div>

// //           {/* CTA Button */}

// //           <div
// //             className="
// //               relative
// //               z-10
// //               mt-7
// //               lg:mt-0
// //             "
// //           >

// //             <a
// //               href="#contact"
// //               className="
// //                 inline-flex
// //                 items-center
// //                 gap-3
// //                 rounded-full
// //                 bg-white
// //                 px-7
// //                 py-3.5
// //                 font-black
// //                 text-green-700
// //                 shadow-xl
// //                 transition-all
// //                 duration-300
// //                 hover:-translate-y-1
// //                 hover:bg-green-50
// //                 hover:shadow-2xl
// //               "
// //             >

// //               Get Started

// //               <span
// //                 className="
// //                   text-lg
// //                   transition-transform
// //                   duration-300
// //                   group-hover:translate-x-1
// //                 "
// //               >
// //                 →
// //               </span>

// //             </a>

// //           </div>

// //         </div>

// //         {/* =======================================================
// //             SMALL FOOTER MESSAGE
// //         ======================================================= */}

// //         <div
// //           className="
// //             mt-10
// //             text-center
// //           "
// //         >

// //           <p
// //             className="
// //               text-sm
// //               font-medium
// //               text-gray-500
// //             "
// //           >
// //             Empowering learners • Supporting educators •
// //             Strengthening communities
// //           </p>

// //         </div>

// //       </div>
// //     </section>
// //   );
// // }
// const services = [
//   {
//     number: "01",
//     title: "Academic Support and Tutoring",
//     text: "Learner-centred academic support designed to strengthen knowledge, skills, confidence, and academic performance.",
//     image: "/k.png",
//     items: [
//       "Individual and group tutoring",
//       "English and language learning",
//       "Literacy and numeracy support",
//       "Homework support",
//       "Examination preparation",
//       "Remedial learning",
//     ],
//   },

//   {
//     number: "02",
//     title: "Teacher Training and Professional Development",
//     text: "Training that strengthens classroom practice, instructional leadership, learner engagement, and technology use.",
//     image: "/a.png",
//     items: [
//       "Literacy and language instruction",
//       "Phonics and phonemic awareness",
//       "Classroom management",
//       "Learner-centred teaching",
//       "Assessment",
//       "Coaching and mentoring",
//     ],
//   },

//   {
//     number: "03",
//     title: "Youth Empowerment and Leadership",
//     text: "We equip young people with knowledge, skills, confidence, and leadership abilities.",
//     image: "/new 1.png",
//     items: [
//       "Leadership development",
//       "Communication",
//       "Life skills",
//       "Entrepreneurship",
//       "Digital skills",
//       "Career guidance",
//     ],
//   },

//   {
//     number: "04",
//     title: "Girls' Empowerment and Inclusion",
//     text: "We create opportunities for girls and young women to develop confidence, skills, talents, leadership abilities, and aspirations.",
//     image: "/dance4.png",
//     items: [
//       "Leadership",
//       "Skills development",
//       "Mentorship",
//       "Safe learning environments",
//       "Inclusion",
//     ],
//   },

//   {
//     number: "05",
//     title: "Talent Identification and Development",
//     text: "We help children and young people identify, develop, and showcase their unique talents.",
//     image: "/dance3.png",
//     items: [
//       "Music",
//       "Dance",
//       "Drama and theatre",
//       "Film and media",
//       "Creative arts",
//       "Public speaking",
//       "Sports",
//     ],
//   },

//   {
//     number: "06",
//     title: "Guidance, Counselling and Mentorship",
//     text: "We support learners and young people to make informed decisions, overcome challenges, build confidence, and develop positive attitudes.",
//     image: "/d.png",
//     items: [
//       "Personal guidance",
//       "Career guidance",
//       "Mentorship",
//       "Life skills",
//       "Confidence building",
//       "Decision making",
//     ],
//   },

//   {
//     number: "07",
//     title: "Education Technology and Digital Learning",
//     text: "We promote effective technology use to improve teaching, learning, assessment, communication, and access to educational resources.",
//     image: "/education.png",
//     items: [
//       "Digital literacy",
//       "Online learning",
//       "Educational technology",
//       "Digital resources",
//       "Computer skills",
//       "Technology for teachers",
//     ],
//   },

//   {
//     number: "08",
//     title: "Education Research and Consultancy",
//     text: "Research and consultancy services supporting evidence-based decision-making and better education programs.",
//     image: "/research.png",
//     items: [
//       "Education research",
//       "Baseline and endline assessments",
//       "Data collection",
//       "Monitoring and evaluation",
//       "Program design",
//       "School improvement consultancy",
//     ],
//   },

//   {
//     number: "09",
//     title: "Parent and Community Engagement",
//     text: "We support parents and communities to become active partners in children's education.",
//     image: "/parent.png",
//     items: [
//       "Positive parenting",
//       "Learning at home",
//       "Child protection",
//       "Positive discipline",
//       "Talent development",
//       "School-family collaboration",
//     ],
//   },

//   {
//     number: "10",
//     title: "Creative Arts and Language Training",
//     text: "Practical training in languages and creative arts that develops communication skills, creativity, confidence, and practical abilities.",
//     image: "/creative.png",
//     items: [
//       "Language training",
//       "Creative arts",
//       "Communication skills",
//       "Music and dance",
//       "Drama and theatre",
//       "Public speaking",
//     ],
//   },
// ];

// export default function Services() {
//   return (
//     <section
//       id="services"
//       className="
//         relative
//         overflow-hidden
//         bg-gradient-to-b
//         from-gray-50
//         via-white
//         to-gray-50
//         py-20
//         sm:py-24
//         lg:py-28
//       "
//     >

//       {/* =========================================================
//           BACKGROUND DECORATION
//       ========================================================= */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -left-40
//           top-20
//           h-96
//           w-96
//           rounded-full
//           bg-green-100/50
//           blur-3xl
//         "
//       ></div>

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -right-40
//           bottom-20
//           h-96
//           w-96
//           rounded-full
//           bg-blue-100/50
//           blur-3xl
//         "
//       ></div>

//       <div
//         className="
//           pointer-events-none
//           absolute
//           left-[10%]
//           top-36
//           h-3
//           w-3
//           rounded-full
//           bg-green-500/50
//         "
//       ></div>

//       <div
//         className="
//           pointer-events-none
//           absolute
//           right-[12%]
//           top-52
//           h-4
//           w-4
//           rounded-full
//           bg-blue-500/50
//         "
//       ></div>

//       <div
//         className="
//           pointer-events-none
//           absolute
//           bottom-40
//           left-[45%]
//           h-3
//           w-3
//           rounded-full
//           bg-green-400/40
//         "
//       ></div>


//       {/* =========================================================
//           MAIN CONTAINER
//       ========================================================= */}

//       <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">


//         {/* =======================================================
//             SECTION HEADER
//         ======================================================= */}

//         <div className="mx-auto max-w-3xl text-center">

//           {/* Label */}

//           <div
//             className="
//               inline-flex
//               items-center
//               gap-2
//               rounded-full
//               border
//               border-green-200
//               bg-green-50
//               px-4
//               py-2
//               shadow-sm
//             "
//           >
//             <span
//               className="
//                 h-2.5
//                 w-2.5
//                 animate-pulse
//                 rounded-full
//                 bg-green-600
//               "
//             ></span>

//             <p
//               className="
//                 text-xs
//                 font-bold
//                 uppercase
//                 tracking-[0.2em]
//                 text-green-700
//                 sm:text-sm
//               "
//             >
//               What We Do
//             </p>
//           </div>


//           {/* Heading */}

//           <h2
//             className="
//               mt-5
//               text-3xl
//               font-extrabold
//               tracking-tight
//               text-gray-900
//               sm:text-4xl
//               lg:text-5xl
//             "
//           >
//             Our{" "}
//             <span className="text-green-700">
//               Services
//             </span>
//           </h2>


//           {/* Decorative line */}

//           <div className="mt-5 flex justify-center gap-1.5">

//             <span
//               className="
//                 h-1
//                 w-14
//                 rounded-full
//                 bg-green-600
//               "
//             ></span>

//             <span
//               className="
//                 h-1
//                 w-7
//                 rounded-full
//                 bg-blue-600
//               "
//             ></span>

//             <span
//               className="
//                 h-1
//                 w-2
//                 rounded-full
//                 bg-gray-300
//               "
//             ></span>

//           </div>


//           {/* Description */}

//           <p
//             className="
//               mx-auto
//               mt-6
//               max-w-2xl
//               text-sm
//               leading-7
//               text-gray-600
//               sm:text-lg
//             "
//           >
//             Practical education solutions designed for learners,
//             educators, families, schools, and communities.
//           </p>

//         </div>


//         {/* =======================================================
//             SERVICES GRID
//         ======================================================= */}

//         <div
//           className="
//             mt-14
//             grid
//             gap-7
//             sm:grid-cols-2
//             lg:grid-cols-3
//           "
//         >

//           {services.map((service) => (

//             <article
//               key={service.number}
//               className="
//                 group
//                 relative
//                 overflow-hidden
//                 rounded-3xl
//                 border
//                 border-gray-200
//                 bg-white
//                 shadow-md
//                 transition-all
//                 duration-500
//                 hover:-translate-y-2
//                 hover:border-green-200
//                 hover:shadow-2xl
//               "
//             >

//               {/* =================================================
//                   TOP COLOR LINE
//               ================================================= */}

//               <div
//                 className="
//                   absolute
//                   left-0
//                   top-0
//                   z-30
//                   h-1
//                   w-full
//                   bg-gradient-to-r
//                   from-green-600
//                   via-green-400
//                   to-blue-600
//                   transition-all
//                   duration-500
//                   group-hover:h-1.5
//                 "
//               ></div>


//               {/* =================================================
//                   IMAGE
//               ================================================= */}

//               <div
//                 className="
//                   relative
//                   h-56
//                   w-full
//                   overflow-hidden
//                   bg-gray-100
//                   sm:h-60
//                 "
//               >

//                 <img
//                   src={service.image}
//                   alt={`${service.title} - Improve Education`}
//                   className="
//                     h-full
//                     w-full
//                     object-cover
//                     object-center
//                     transition-transform
//                     duration-700
//                     ease-out
//                     group-hover:scale-110
//                   "
//                 />


//                 {/* Dark image overlay */}

//                 <div
//                   className="
//                     absolute
//                     inset-0
//                     bg-gradient-to-t
//                     from-black/65
//                     via-black/15
//                     to-transparent
//                   "
//                 ></div>


//                 {/* Soft image overlay */}

//                 <div
//                   className="
//                     absolute
//                     inset-0
//                     bg-gradient-to-br
//                     from-green-700/10
//                     via-transparent
//                     to-blue-700/20
//                     opacity-0
//                     transition-opacity
//                     duration-500
//                     group-hover:opacity-100
//                   "
//                 ></div>


//                 {/* Service number */}

//                 <div
//                   className="
//                     absolute
//                     bottom-5
//                     left-5
//                     flex
//                     h-12
//                     w-12
//                     items-center
//                     justify-center
//                     rounded-2xl
//                     border
//                     border-white/40
//                     bg-white/95
//                     shadow-xl
//                     backdrop-blur-sm
//                     transition-all
//                     duration-500
//                     group-hover:scale-110
//                     group-hover:rotate-3
//                   "
//                 >
//                   <span
//                     className="
//                       text-sm
//                       font-extrabold
//                       text-green-700
//                     "
//                   >
//                     {service.number}
//                   </span>
//                 </div>


//                 {/* Service label */}

//                 <div
//                   className="
//                     absolute
//                     bottom-5
//                     right-5
//                     rounded-full
//                     border
//                     border-white/30
//                     bg-black/35
//                     px-3
//                     py-1.5
//                     text-xs
//                     font-semibold
//                     text-white
//                     backdrop-blur-md
//                   "
//                 >
//                   Improve Education
//                 </div>

//               </div>


//               {/* =================================================
//                   CARD CONTENT
//               ================================================= */}

//               <div
//                 className="
//                   relative
//                   z-10
//                   p-6
//                   sm:p-7
//                 "
//               >

//                 {/* Card header */}

//                 <div
//                   className="
//                     flex
//                     items-center
//                     justify-between
//                   "
//                 >

//                   {/* Number badge */}

//                   <div
//                     className="
//                       flex
//                       h-10
//                       w-10
//                       items-center
//                       justify-center
//                       rounded-xl
//                       bg-gradient-to-br
//                       from-green-50
//                       to-blue-50
//                       ring-1
//                       ring-green-100
//                       transition-all
//                       duration-500
//                       group-hover:scale-110
//                     "
//                   >
//                     <span
//                       className="
//                         text-xs
//                         font-extrabold
//                         text-green-700
//                       "
//                     >
//                       {service.number}
//                     </span>
//                   </div>


//                   {/* Colored decorative icon */}

//                   <div
//                     className="
//                       flex
//                       h-10
//                       w-10
//                       items-center
//                       justify-center
//                       rounded-full
//                       bg-gradient-to-br
//                       from-green-600
//                       to-blue-600
//                       text-lg
//                       font-bold
//                       text-white
//                       shadow-md
//                       transition-all
//                       duration-500
//                       group-hover:scale-110
//                       group-hover:rotate-6
//                     "
//                   >
//                     ✓
//                   </div>

//                 </div>


//                 {/* =================================================
//                     TITLE
//                 ================================================= */}

//                 <h3
//                   className="
//                     mt-6
//                     text-xl
//                     font-extrabold
//                     leading-7
//                     text-gray-900
//                     transition-colors
//                     duration-300
//                     group-hover:text-green-700
//                   "
//                 >
//                   {service.title}
//                 </h3>


//                 {/* =================================================
//                     DESCRIPTION
//                 ================================================= */}

//                 <p
//                   className="
//                     mt-3
//                     text-sm
//                     leading-7
//                     text-gray-600
//                   "
//                 >
//                   {service.text}
//                 </p>


//                 {/* =================================================
//                     ITEMS
//                 ================================================= */}

//                 {service.items && (
//                   <ul
//                     className="
//                       mt-5
//                       space-y-2.5
//                     "
//                   >

//                     {service.items.map((item) => (

//                       <li
//                         key={item}
//                         className="
//                           group/item
//                           flex
//                           items-start
//                           gap-2.5
//                           text-sm
//                           text-gray-600
//                           transition-all
//                           duration-300
//                           hover:translate-x-1
//                           hover:text-gray-900
//                         "
//                       >

//                         {/* Check */}

//                         <span
//                           className="
//                             mt-0.5
//                             flex
//                             h-5
//                             w-5
//                             shrink-0
//                             items-center
//                             justify-center
//                             rounded-full
//                             bg-green-50
//                             text-xs
//                             font-bold
//                             text-green-600
//                             transition-all
//                             duration-300
//                             group-hover/item:bg-green-600
//                             group-hover/item:text-white
//                           "
//                         >
//                           ✓
//                         </span>

//                         <span>
//                           {item}
//                         </span>

//                       </li>

//                     ))}

//                   </ul>
//                 )}


//                 {/* =================================================
//                     BOTTOM LINK
//                 ================================================= */}

//                 <div
//                   className="
//                     mt-6
//                     border-t
//                     border-gray-100
//                     pt-5
//                   "
//                 >

//                   <a
//                     href="#contact"
//                     className="
//                       group/link
//                       inline-flex
//                       items-center
//                       gap-2
//                       text-sm
//                       font-bold
//                       text-green-700
//                       transition-all
//                       duration-300
//                       hover:text-blue-700
//                     "
//                   >

//                     Learn More

//                     <span
//                       className="
//                         transition-transform
//                         duration-300
//                         group-hover/link:translate-x-1
//                       "
//                     >
//                       →
//                     </span>

//                   </a>

//                 </div>

//               </div>


//               {/* =================================================
//                   HOVER DECORATION
//               ================================================= */}

//               <div
//                 className="
//                   pointer-events-none
//                   absolute
//                   -bottom-8
//                   -right-8
//                   h-24
//                   w-24
//                   rounded-full
//                   bg-gradient-to-br
//                   from-green-500/10
//                   to-blue-500/10
//                   transition-all
//                   duration-500
//                   group-hover:scale-150
//                 "
//               ></div>

//             </article>

//           ))}

//         </div>


//         {/* =======================================================
//             BOTTOM CTA
//         ======================================================= */}

//         <div
//           className="
//             relative
//             mt-16
//             overflow-hidden
//             rounded-3xl
//             bg-gradient-to-r
//             from-green-700
//             via-green-600
//             to-blue-700
//             px-6
//             py-9
//             text-center
//             shadow-xl
//             sm:px-10
//             sm:py-10
//             lg:flex
//             lg:items-center
//             lg:justify-between
//             lg:text-left
//           "
//         >

//           {/* Decorative circles */}

//           <div
//             className="
//               pointer-events-none
//               absolute
//               -right-16
//               -top-20
//               h-56
//               w-56
//               rounded-full
//               bg-white/10
//             "
//           ></div>

//           <div
//             className="
//               pointer-events-none
//               absolute
//               -bottom-24
//               left-1/3
//               h-56
//               w-56
//               rounded-full
//               bg-blue-400/20
//             "
//           ></div>


//           {/* CTA text */}

//           <div className="relative z-10">

//             <h3
//               className="
//                 text-xl
//                 font-extrabold
//                 text-white
//                 sm:text-2xl
//                 lg:text-3xl
//               "
//             >
//               Ready to improve education?
//             </h3>

//             <p
//               className="
//                 mt-2
//                 max-w-2xl
//                 text-sm
//                 leading-6
//                 text-green-50
//                 sm:text-base
//               "
//             >
//               Let's work together to create meaningful
//               learning opportunities.
//             </p>

//           </div>


//           {/* CTA button */}

//           <a
//             href="#contact"
//             className="
//               relative
//               z-10
//               mt-6
//               inline-flex
//               items-center
//               justify-center
//               gap-2
//               rounded-full
//               bg-white
//               px-7
//               py-3.5
//               font-bold
//               text-green-700
//               shadow-lg
//               transition-all
//               duration-300
//               hover:-translate-y-1
//               hover:bg-green-50
//               hover:shadow-2xl
//               lg:mt-0
//             "
//           >

//             Get Started

//             <span
//               className="
//                 transition-transform
//                 duration-300
//                 group-hover:translate-x-1
//               "
//             >
//               →
//             </span>

//           </a>

//         </div>

//       </div>

//     </section>
//   );
// }

const services = [
  {
    number: "01",
    title: "Academic Support and Tutoring",
    text: "Learner-centred academic support designed to strengthen knowledge, skills, confidence, and academic performance.",
    image: "/k.png",
    items: [
      "Individual and group tutoring",
      "English and language learning",
      "Literacy and numeracy support",
      "Homework support",
      "Examination preparation",
      "Remedial learning",
    ],
  },

  {
    number: "02",
    title: "Teacher Training and Professional Development",
    text: "Training that strengthens classroom practice, instructional leadership, learner engagement, and technology use.",
    image: "/a.png",
    items: [
      "Literacy and language instruction",
      "Phonics and phonemic awareness",
      "Classroom management",
      "Learner-centred teaching",
      "Assessment",
      "Coaching and mentoring",
    ],
  },

  {
    number: "03",
    title: "Youth Empowerment and Leadership",
    text: "We equip young people with knowledge, skills, confidence, and leadership abilities.",
    image: "/new 1.png",
    items: [
      "Leadership development",
      "Communication",
      "Life skills",
      "Entrepreneurship",
      "Digital skills",
      "Career guidance",
    ],
  },

  {
    number: "04",
    title: "Girls' Empowerment and Inclusion",
    text: "We create opportunities for girls and young women to develop confidence, skills, talents, leadership abilities, and aspirations.",
    image: "/dance4.png",
    items: [
      "Leadership",
      "Skills development",
      "Mentorship",
      "Safe learning environments",
      "Inclusion",
    ],
  },

  {
    number: "05",
    title: "Talent Identification and Development",
    text: "We help children and young people identify, develop, and showcase their unique talents.",
    image: "/dance3.png",
    items: [
      "Music",
      "Dance",
      "Drama and theatre",
      "Film and media",
      "Creative arts",
      "Public speaking",
      "Sports",
    ],
  },

  {
    number: "06",
    title: "Guidance, Counselling and Mentorship",
    text: "We support learners and young people to make informed decisions, overcome challenges, build confidence, and develop positive attitudes.",
    image: "/d.png",
    items: [
      "Personal guidance",
      "Career guidance",
      "Mentorship",
      "Life skills",
      "Confidence building",
      "Decision making",
    ],
  },

  {
    number: "07",
    title: "Education Technology and Digital Learning",
    text: "We promote effective technology use to improve teaching, learning, assessment, communication, and access to educational resources.",
    image: "/education.png",
    items: [
      "Digital literacy",
      "Online learning",
      "Educational technology",
      "Digital resources",
      "Computer skills",
      "Technology for teachers",
    ],
  },

  {
    number: "08",
    title: "Education Research and Consultancy",
    text: "Research and consultancy services supporting evidence-based decision-making and better education programs.",
    image: "/research.png",
    items: [
      "Education research",
      "Baseline and endline assessments",
      "Data collection",
      "Monitoring and evaluation",
      "Program design",
      "School improvement consultancy",
    ],
  },

  {
    number: "09",
    title: "Parent and Community Engagement",
    text: "We support parents and communities to become active partners in children's education.",
    image: "/parent.png",
    items: [
      "Positive parenting",
      "Learning at home",
      "Child protection",
      "Positive discipline",
      "Talent development",
      "School-family collaboration",
    ],
  },

  {
    number: "10",
    title: "Creative Arts and Language Training",
    text: "Practical training in languages and creative arts that develops communication skills, creativity, confidence, and practical abilities.",
    image: "/creative.png",
    items: [
      "Language training",
      "Creative arts",
      "Communication skills",
      "Music and dance",
      "Drama and theatre",
      "Public speaking",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-slate-50
        via-white
        to-emerald-50
        py-20
        sm:py-24
        lg:py-28
      "
    >

      {/* =========================================================
          BACKGROUND DECORATIONS
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-96
          w-96
          rounded-full
          bg-emerald-300/20
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-[30%]
          h-96
          w-96
          rounded-full
          bg-blue-300/20
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-[35%]
          h-80
          w-80
          rounded-full
          bg-purple-300/10
          blur-3xl
        "
      />

      {/* Decorative circles */}

      <div
        className="
          pointer-events-none
          absolute
          left-[8%]
          top-32
          h-3
          w-3
          animate-pulse
          rounded-full
          bg-emerald-500
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[12%]
          top-48
          h-4
          w-4
          animate-pulse
          rounded-full
          bg-blue-500
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[18%]
          left-[12%]
          h-5
          w-5
          rounded-full
          bg-purple-400/50
        "
      />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =======================================================
            HEADER
        ======================================================= */}

        <div className="mx-auto max-w-3xl text-center">

          {/* Small label */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-emerald-200
              bg-white/80
              px-5
              py-2.5
              shadow-sm
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
            "
          >
            <span
              className="
                relative
                flex
                h-3
                w-3
                items-center
                justify-center
              "
            >
              <span
                className="
                  absolute
                  h-3
                  w-3
                  animate-ping
                  rounded-full
                  bg-emerald-400
                  opacity-60
                "
              />

              <span
                className="
                  relative
                  h-2
                  w-2
                  rounded-full
                  bg-emerald-600
                "
              />
            </span>

            <span
              className="
                text-xs
                font-extrabold
                uppercase
                tracking-[0.2em]
                text-emerald-700
                sm:text-sm
              "
            >
              What We Do
            </span>
          </div>

          {/* Main heading */}

          <h2
            className="
              mt-6
              text-4xl
              font-black
              tracking-tight
              text-slate-900
              sm:text-5xl
              lg:text-6xl
            "
          >
            Our{" "}
            <span
              className="
                bg-gradient-to-r
                from-emerald-600
                via-green-500
                to-blue-600
                bg-clip-text
                text-transparent
              "
            >
              Services
            </span>
          </h2>

          {/* Decorative line */}

          <div className="mt-6 flex justify-center gap-1.5">
            <span
              className="
                h-1.5
                w-16
                rounded-full
                bg-gradient-to-r
                from-emerald-600
                to-green-400
              "
            />

            <span
              className="
                h-1.5
                w-8
                rounded-full
                bg-gradient-to-r
                from-blue-600
                to-cyan-400
              "
            />

            <span
              className="
                h-1.5
                w-3
                rounded-full
                bg-slate-300
              "
            />
          </div>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-sm
              leading-8
              text-slate-600
              sm:text-lg
            "
          >
            Practical and innovative education solutions designed to empower
            learners, educators, families, schools, and communities.
          </p>

        </div>

        {/* =======================================================
            SERVICES GRID
        ======================================================= */}

        <div
          className="
            mt-16
            grid
            gap-8
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >

          {services.map((service) => (

            <article
              key={service.number}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-slate-200
                bg-white
                shadow-lg
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-emerald-200
                hover:shadow-2xl
              "
            >

              {/* =================================================
                  TOP GRADIENT LINE
              ================================================= */}

              <div
                className="
                  absolute
                  left-0
                  top-0
                  z-30
                  h-1.5
                  w-full
                  bg-gradient-to-r
                  from-emerald-600
                  via-green-400
                  to-blue-600
                  transition-all
                  duration-500
                  group-hover:h-2
                "
              />

              {/* =================================================
                  IMAGE
              ================================================= */}

              <div
                className="
                  relative
                  h-60
                  w-full
                  overflow-hidden
                  bg-slate-100
                  sm:h-64
                "
              >

                <img
                  src={service.image}
                  alt={`${service.title} - Improve Education`}
                  className="
                    h-full
                    w-full
                    object-cover
                    object-center
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-110
                  "
                />

                {/* Dark overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-slate-950/80
                    via-slate-900/20
                    to-transparent
                  "
                />

                {/* Color overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-emerald-600/10
                    via-transparent
                    to-blue-600/30
                    opacity-60
                    transition-all
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Image shine */}

                <div
                  className="
                    absolute
                    -left-20
                    top-0
                    h-full
                    w-20
                    rotate-12
                    bg-white/20
                    blur-xl
                    transition-all
                    duration-1000
                    group-hover:left-[120%]
                  "
                />

                {/* Number */}

                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    flex
                    h-13
                    w-13
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/50
                    bg-white/95
                    shadow-xl
                    backdrop-blur-md
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:rotate-6
                  "
                >
                  <span
                    className="
                      text-sm
                      font-black
                      text-emerald-700
                    "
                  >
                    {service.number}
                  </span>
                </div>

                {/* Brand label */}

                <div
                  className="
                    absolute
                    bottom-5
                    right-5
                    rounded-full
                    border
                    border-white/30
                    bg-black/30
                    px-4
                    py-2
                    text-xs
                    font-bold
                    text-white
                    shadow-lg
                    backdrop-blur-lg
                  "
                >
                  Improve Education
                </div>

              </div>

              {/* =================================================
                  CARD CONTENT
              ================================================= */}

              <div className="relative z-10 p-6 sm:p-7">

                {/* Card header */}

                <div className="flex items-center justify-between">

                  {/* Number badge */}

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-emerald-50
                      to-blue-50
                      ring-1
                      ring-emerald-100
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:shadow-md
                    "
                  >
                    <span
                      className="
                        text-xs
                        font-black
                        text-emerald-700
                      "
                    >
                      {service.number}
                    </span>
                  </div>

                  {/* Innovation icon */}

                  <div
                    className="
                      relative
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-full
                      bg-gradient-to-br
                      from-emerald-600
                      via-green-500
                      to-blue-600
                      text-lg
                      font-black
                      text-white
                      shadow-lg
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:rotate-12
                    "
                  >
                    <span className="relative z-10">
                      ✓
                    </span>

                    <span
                      className="
                        absolute
                        inset-0
                        translate-x-[-100%]
                        bg-white/30
                        transition-transform
                        duration-700
                        group-hover:translate-x-[100%]
                      "
                    />
                  </div>

                </div>

                {/* =================================================
                    TITLE
                ================================================= */}

                <h3
                  className="
                    mt-6
                    text-xl
                    font-black
                    leading-7
                    text-slate-900
                    transition-colors
                    duration-300
                    group-hover:text-emerald-700
                  "
                >
                  {service.title}
                </h3>

                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <p
                  className="
                    mt-3
                    text-sm
                    leading-7
                    text-slate-600
                  "
                >
                  {service.text}
                </p>

                {/* =================================================
                    SERVICE ITEMS
                ================================================= */}

                {service.items && service.items.length > 0 && (

                  <ul className="mt-6 space-y-3">

                    {service.items.map((item) => (

                      <li
                        key={item}
                        className="
                          group/item
                          flex
                          items-start
                          gap-3
                          text-sm
                          leading-6
                          text-slate-600
                          transition-all
                          duration-300
                          hover:translate-x-1
                          hover:text-slate-900
                        "
                      >

                        {/* Check */}

                        <span
                          className="
                            mt-0.5
                            flex
                            h-5
                            w-5
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-emerald-50
                            text-xs
                            font-black
                            text-emerald-600
                            ring-1
                            ring-emerald-100
                            transition-all
                            duration-300
                            group-hover/item:bg-emerald-600
                            group-hover/item:text-white
                            group-hover/item:ring-emerald-600
                          "
                        >
                          ✓
                        </span>

                        <span>
                          {item}
                        </span>

                      </li>

                    ))}

                  </ul>

                )}

                {/* =================================================
                    LEARN MORE
                ================================================= */}

                <div
                  className="
                    mt-7
                    border-t
                    border-slate-100
                    pt-5
                  "
                >

                  <a
                    href="#contact"
                    className="
                      group/link
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-gradient-to-r
                      from-emerald-50
                      to-blue-50
                      px-5
                      py-2.5
                      text-sm
                      font-extrabold
                      text-emerald-700
                      ring-1
                      ring-emerald-100
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-emerald-600
                      hover:text-white
                      hover:shadow-lg
                    "
                  >
                    Learn More

                    <span
                      className="
                        transition-transform
                        duration-300
                        group-hover/link:translate-x-1
                      "
                    >
                      →
                    </span>

                  </a>

                </div>

              </div>

              {/* =================================================
                  CARD BOTTOM GLOW
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-14
                  -right-14
                  h-36
                  w-36
                  rounded-full
                  bg-gradient-to-br
                  from-emerald-400/10
                  to-blue-500/10
                  blur-xl
                  transition-all
                  duration-700
                  group-hover:scale-150
                  group-hover:opacity-100
                "
              />

              {/* Border glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-[2rem]
                  ring-1
                  ring-transparent
                  transition-all
                  duration-500
                  group-hover:ring-emerald-300/40
                "
              />

            </article>

          ))}

        </div>

        {/* =======================================================
            BOTTOM CTA
        ======================================================= */}

        <div
          className="
            relative
            mt-20
            overflow-hidden
            rounded-[2rem]
            bg-gradient-to-r
            from-emerald-700
            via-green-600
            to-blue-700
            px-7
            py-10
            shadow-2xl
            sm:px-12
            sm:py-12
            lg:px-16
          "
        >

          {/* Background glow */}

          <div
            className="
              pointer-events-none
              absolute
              -left-20
              -top-20
              h-64
              w-64
              rounded-full
              bg-white/10
              blur-2xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-24
              right-10
              h-72
              w-72
              rounded-full
              bg-blue-400/20
              blur-2xl
            "
          />

          {/* Decorative rings */}

          <div
            className="
              pointer-events-none
              absolute
              right-16
              top-8
              h-32
              w-32
              rounded-full
              border
              border-white/10
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              right-24
              top-16
              h-16
              w-16
              rounded-full
              border
              border-white/10
            "
          />

          {/* CTA content */}

          <div
            className="
              relative
              z-10
              lg:flex
              lg:items-center
              lg:justify-between
              lg:gap-10
            "
          >

            <div className="max-w-3xl">

              {/* Badge */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  px-4
                  py-2
                  text-xs
                  font-bold
                  uppercase
                  tracking-widest
                  text-white
                  backdrop-blur-md
                "
              >
                <span
                  className="
                    h-2
                    w-2
                    animate-pulse
                    rounded-full
                    bg-emerald-300
                  "
                />

                Let's Work Together
              </div>

              {/* CTA heading */}

              <h3
                className="
                  mt-5
                  text-2xl
                  font-black
                  leading-tight
                  text-white
                  sm:text-3xl
                  lg:text-4xl
                "
              >
                Ready to improve education?
              </h3>

              {/* CTA description */}

              <p
                className="
                  mt-3
                  max-w-2xl
                  text-sm
                  leading-7
                  text-emerald-50
                  sm:text-base
                "
              >
                Let's work together to create meaningful learning
                opportunities, empower people, and build a stronger future
                through education.
              </p>

            </div>

            {/* CTA button */}

            <div className="relative z-10 mt-8 lg:mt-0">

              <a
                href="#contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-white
                  px-7
                  py-4
                  font-black
                  text-emerald-700
                  shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-emerald-50
                  hover:shadow-2xl
                "
              >

                Get Started

                <span
                  className="
                    text-lg
                    transition-transform
                    duration-300
                    group-hover:translate-x-2
                  "
                >
                  →
                </span>

              </a>

            </div>

          </div>

        </div>

        {/* =======================================================
            FOOTER MESSAGE
        ======================================================= */}

        <div className="mt-10 text-center">

          <p
            className="
              text-sm
              font-semibold
              text-slate-500
            "
          >
            <span className="text-emerald-600">
              Empowering learners
            </span>

            {" • "}

            <span className="text-blue-600">
              Supporting educators
            </span>

            {" • "}

            <span className="text-green-600">
              Strengthening communities
            </span>
          </p>

        </div>

      </div>

    </section>
  );
}