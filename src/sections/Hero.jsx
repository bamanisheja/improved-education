// const services = [
//   "Academic Support and Tutoring",
//   "Teacher Training and Professional Development",
//   "Youth Empowerment and Leadership",
//   "Girls' Empowerment and Inclusion",
//   "Talent Identification and Development",
//   "Guidance, Counselling and Mentorship",
//   "Education Technology and Digital Learning",
//   "Education Research and Consultancy",
//   "Parent and Community Engagement",
//   "Creative Arts and Language Training",
// ];

// export default function Contact() {
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const form = e.currentTarget;

//     const name = form.name.value;
//     const email = form.email.value;
//     const service = form.service.value;
//     const message = form.message.value;

//     const subject = `Improve Education Inquiry - ${service}`;

//     const body = `
// Hello Improve Education,

// I would like to contact you regarding your service.

// Name: ${name}
// Email: ${email}
// Service: ${service}

// Message:
// ${message}

// Thank you.
//     `;

//     const mailtoLink =
//       `mailto:improveeducation3@gmail.com` +
//       `?subject=${encodeURIComponent(subject)}` +
//       `&body=${encodeURIComponent(body)}`;

//     window.location.href = mailtoLink;
//   };

//   return (
//     <section
//       id="contact"
//       className="relative overflow-hidden bg-gray-50 py-20 sm:py-24"
//     >
//       {/* Background decoration */}
//       <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-teal-100/50 blur-3xl" />

//       <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />

//       <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">

//         {/* Section heading */}
//         <div className="mx-auto max-w-3xl text-center">
//           <p className="font-bold uppercase tracking-[0.2em] text-teal-700">
//             Get In Touch
//           </p>

//           <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
//             Contact Improve Education
//           </h2>

//           <p className="mt-5 leading-7 text-gray-600">
//             Have a question, partnership idea, or need one of our
//             education services? Send us a message and our team will
//             get back to you.
//           </p>
//         </div>

//         {/* Contact cards */}
//         <div className="mt-14 grid gap-8 lg:grid-cols-2">

//           {/* Contact information */}
//           <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-800 via-teal-700 to-blue-800 p-8 text-white shadow-xl sm:p-10">

//             {/* Logo watermark */}
//             {/* <img
//               src="/logo.png"
//               alt=""
//               aria-hidden="true"
//               className="pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 object-contain opacity-10"
//             /> */}

//             <div className="relative">

//               <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-teal-100 backdrop-blur-sm">
//                 We would love to hear from you
//               </span>

//               <h3 className="mt-6 text-3xl font-bold">
//                 Let's work together
//               </h3>

//               <p className="mt-4 max-w-lg leading-8 text-teal-50">
//                 Whether you are a learner, parent, teacher, school,
//                 organization, or community partner, we are ready to
//                 explore how we can work together.
//               </p>

//               {/* Contact details */}
//               <div className="mt-10 space-y-6">

//                 {/* Email */}
//                 <div className="flex items-start gap-4">
//                   <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
//                     ✉
//                   </div>

//                   <div>
//                     <p className="text-sm font-semibold text-teal-200">
//                       Email
//                     </p>

//                     <a
//                       href="mailto:improveeducation3@gmail.com"
//                       className="mt-1 block font-medium text-white transition hover:text-teal-200 hover:underline"
//                     >
//                       improveeducation3@gmail.com
//                     </a>
//                   </div>
//                 </div>

//                 {/* Phone */}
//                 <div className="flex items-start gap-4">
//                   <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
//                     ☎
//                   </div>

//                   <div>
//                     <p className="text-sm font-semibold text-teal-200">
//                       Phone
//                     </p>

//                     <a
//                       href="tel:+250785977077"
//                       className="mt-1 block font-medium text-white transition hover:text-teal-200"
//                     >
//                       +250 785 977 077
//                     </a>
//                   </div>
//                 </div>

//                 {/* Location */}
//                 <div className="flex items-start gap-4">
//                   <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
//                     📍
//                   </div>

//                   <div>
//                     <p className="text-sm font-semibold text-teal-200">
//                       Location
//                     </p>

//                     <p className="mt-1 font-medium text-white">
//                       Rwanda
//                     </p>
//                   </div>
//                 </div>

//               </div>

//               {/* Small CTA */}
//               <div className="mt-10 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
//                 <p className="text-sm font-semibold text-white">
//                   Transforming Education • Empowering People
//                 </p>

//                 <p className="mt-2 text-sm text-teal-100">
//                   Learn • Grow • Lead
//                 </p>
//               </div>

//             </div>
//           </div>

//           {/* Contact form */}
//           <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl sm:p-10">

//             <div className="mb-7">
//               <h3 className="text-2xl font-bold text-gray-900">
//                 Send Us a Message
//               </h3>

//               <p className="mt-2 text-sm leading-6 text-gray-500">
//                 Complete the form below and choose the service you
//                 are interested in.
//               </p>
//             </div>

//             <form
//               onSubmit={handleSubmit}
//               className="space-y-5"
//             >

//               {/* Name */}
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="mb-2 block text-sm font-semibold text-gray-700"
//                 >
//                   Full Name
//                 </label>

//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   required
//                   placeholder="Enter your full name"
//                   className="
//                     w-full
//                     rounded-xl
//                     border
//                     border-gray-200
//                     bg-gray-50
//                     px-4
//                     py-3
//                     text-sm
//                     text-gray-900
//                     outline-none
//                     transition-all
//                     duration-300
//                     placeholder:text-gray-400
//                     focus:border-teal-500
//                     focus:bg-white
//                     focus:ring-4
//                     focus:ring-teal-100
//                   "
//                 />
//               </div>

//               {/* Email */}
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="mb-2 block text-sm font-semibold text-gray-700"
//                 >
//                   Email Address
//                 </label>

//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   placeholder="example@email.com"
//                   className="
//                     w-full
//                     rounded-xl
//                     border
//                     border-gray-200
//                     bg-gray-50
//                     px-4
//                     py-3
//                     text-sm
//                     text-gray-900
//                     outline-none
//                     transition-all
//                     duration-300
//                     placeholder:text-gray-400
//                     focus:border-teal-500
//                     focus:bg-white
//                     focus:ring-4
//                     focus:ring-teal-100
//                   "
//                 />
//               </div>

//               {/* Services dropdown */}
//               <div>
//                 <label
//                   htmlFor="service"
//                   className="mb-2 block text-sm font-semibold text-gray-700"
//                 >
//                   Select a Service
//                 </label>

//                 <div className="relative">

//                   <select
//                     id="service"
//                     name="service"
//                     required
//                     defaultValue=""
//                     className="
//                       w-full
//                       appearance-none
//                       rounded-xl
//                       border
//                       border-gray-200
//                       bg-gray-50
//                       px-4
//                       py-3
//                       pr-10
//                       text-sm
//                       text-gray-700
//                       outline-none
//                       transition-all
//                       duration-300
//                       focus:border-teal-500
//                       focus:bg-white
//                       focus:ring-4
//                       focus:ring-teal-100
//                     "
//                   >
//                     <option value="" disabled>
//                       Choose a service
//                     </option>

//                     {services.map((service) => (
//                       <option
//                         key={service}
//                         value={service}
//                       >
//                         {service}
//                       </option>
//                     ))}
//                   </select>

//                   {/* Dropdown arrow */}
//                   <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
//                     ▼
//                   </span>

//                 </div>
//               </div>

//               {/* Message */}
//               <div>
//                 <label
//                   htmlFor="message"
//                   className="mb-2 block text-sm font-semibold text-gray-700"
//                 >
//                   Message
//                 </label>

//                 <textarea
//                   id="message"
//                   name="message"
//                   required
//                   rows="5"
//                   placeholder="Write your message here..."
//                   className="
//                     w-full
//                     resize-none
//                     rounded-xl
//                     border
//                     border-gray-200
//                     bg-gray-50
//                     px-4
//                     py-3
//                     text-sm
//                     text-gray-900
//                     outline-none
//                     transition-all
//                     duration-300
//                     placeholder:text-gray-400
//                     focus:border-teal-500
//                     focus:bg-white
//                     focus:ring-4
//                     focus:ring-teal-100
//                   "
//                 />
//               </div>

//               {/* Send button */}
//               <button
//                 type="submit"
//                 className="
//                   group
//                   flex
//                   w-full
//                   items-center
//                   justify-center
//                   gap-3
//                   rounded-xl
//                   bg-gradient-to-r
//                   from-teal-700
//                   to-blue-700
//                   px-6
//                   py-3.5
//                   text-sm
//                   font-bold
//                   text-white
//                   shadow-lg
//                   transition-all
//                   duration-300
//                   hover:-translate-y-1
//                   hover:from-teal-600
//                   hover:to-blue-600
//                   hover:shadow-2xl
//                   active:translate-y-0
//                   focus:outline-none
//                   focus:ring-4
//                   focus:ring-teal-200
//                 "
//               >
//                 <span>
//                   Send Message
//                 </span>

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
//               </button>

//               <p className="text-center text-xs text-gray-400">
//                 Your email application will open with your message
//                 prepared for Improve Education.
//               </p>

//             </form>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }
const services = [
  "Academic Support and Tutoring",
  "Teacher Training and Professional Development",
  "Youth Empowerment and Leadership",
  "Girls' Empowerment and Inclusion",
  "Talent Identification and Development",
  "Guidance, Counselling and Mentorship",
  "Education Technology and Digital Learning",
  "Education Research and Consultancy",
  "Parent and Community Engagement",
  "Creative Arts and Language Training",
];

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = form.name.value;
    const email = form.email.value;
    const service = form.service.value;
    const message = form.message.value;

    const subject = `Improve Education Inquiry - ${service}`;

    const body = `
Hello Improve Education,

I would like to contact you regarding your service.

Name: ${name}
Email: ${email}
Service: ${service}

Message:
${message}

Thank you.
    `;

    const mailtoLink =
      `mailto:improveeducation3@gmail.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-gray-50
        via-white
        to-teal-50/40
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
          -left-32
          top-20
          h-80
          w-80
          rounded-full
          bg-teal-200/30
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-10
          h-96
          w-96
          rounded-full
          bg-blue-200/30
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-64
          w-64
          -translate-x-1/2
          rounded-full
          bg-emerald-100/30
          blur-3xl
        "
      />

      {/* Decorative circles */}

      <div
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-24
          h-20
          w-20
          rounded-full
          border
          border-teal-200/40
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[10%]
          top-28
          h-12
          w-12
          rounded-full
          border
          border-blue-200/40
        "
      />

      {/* =========================================================
          MAIN CONTAINER
          ========================================================= */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-6
          sm:px-8
          lg:px-8
        "
      >

        {/* =======================================================
            SECTION HEADING
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
              border-teal-200
              bg-teal-50
              px-5
              py-2
              text-sm
              font-bold
              text-teal-700
              shadow-sm
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-teal-500
                shadow-lg
                shadow-teal-400/50
              "
            />

            Get In Touch
          </div>

          <h2
            className="
              mt-5
              text-4xl
              font-extrabold
              tracking-tight
              text-gray-900
              sm:text-5xl
              lg:text-6xl
            "
          >
            Let's Build a Better
            <span
              className="
                block
                bg-gradient-to-r
                from-teal-700
                via-teal-600
                to-blue-700
                bg-clip-text
                text-transparent
              "
            >
              Future Together
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-gray-600
              sm:text-lg
              sm:leading-8
            "
          >
            Have a question, partnership idea, or need one of our
            education services? Reach out to Improve Education and
            let's explore how we can make a meaningful difference
            together.
          </p>

          {/* Decorative line */}

          <div className="mt-7 flex items-center justify-center gap-2">
            <span className="h-1 w-16 rounded-full bg-teal-600" />
            <span className="h-1 w-8 rounded-full bg-blue-600" />
            <span className="h-1 w-3 rounded-full bg-teal-300" />
          </div>
        </div>

        {/* =======================================================
            MAIN CONTACT AREA
            ======================================================= */}

        <div
          className="
            mt-16
            grid
            gap-8
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-10
          "
        >

          {/* =====================================================
              LEFT CONTACT INFORMATION
              ===================================================== */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              bg-gradient-to-br
              from-teal-900
              via-teal-800
              to-blue-900
              p-8
              text-white
              shadow-2xl
              sm:p-10
            "
          >

            {/* Background glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-64
                w-64
                rounded-full
                bg-emerald-400/20
                blur-3xl
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-20
                -left-20
                h-64
                w-64
                rounded-full
                bg-blue-400/20
                blur-3xl
              "
            />

            {/* Decorative ring */}

            <div
              className="
                pointer-events-none
                absolute
                right-8
                top-8
                h-24
                w-24
                rounded-full
                border
                border-white/10
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                right-14
                top-14
                h-12
                w-12
                rounded-full
                border
                border-white/10
              "
            />

            <div className="relative">

              {/* Badge */}

              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/10
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-teal-100
                  backdrop-blur-md
                "
              >
                <span className="text-emerald-300">
                  ✦
                </span>

                We would love to hear from you
              </span>

              <h3
                className="
                  mt-7
                  text-3xl
                  font-extrabold
                  sm:text-4xl
                "
              >
                Let's work together
              </h3>

              <p
                className="
                  mt-5
                  max-w-lg
                  leading-8
                  text-teal-50
                "
              >
                Whether you are a learner, parent, teacher, school,
                organization, or community partner, we are ready to
                explore how we can work together.
              </p>

              {/* =================================================
                  CONTACT DETAILS
                  ================================================= */}

              <div className="mt-10 space-y-4">

                {/* EMAIL */}

                <div
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/10
                    p-4
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-white/15
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-emerald-400/20
                      text-xl
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    ✉
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-teal-200">
                      Email
                    </p>

                    <a
                      href="mailto:improveeducation3@gmail.com"
                      className="
                        mt-1
                        block
                        break-all
                        font-medium
                        text-white
                        transition
                        hover:text-emerald-300
                      "
                    >
                      improveeducation3@gmail.com
                    </a>
                  </div>
                </div>

                {/* PHONE */}

                <div
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/10
                    p-4
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-white/15
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-blue-400/20
                      text-xl
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    ☎
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-teal-200">
                      Phone
                    </p>

                    <a
                      href="tel:+250785977077"
                      className="
                        mt-1
                        block
                        font-medium
                        text-white
                        transition
                        hover:text-emerald-300
                      "
                    >
                      +250 785 977 077
                    </a>
                  </div>
                </div>

                {/* LOCATION */}

                <div
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/10
                    p-4
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-white/15
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-teal-400/20
                      text-xl
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    📍
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-teal-200">
                      Location
                    </p>

                    <p className="mt-1 font-medium text-white">
                      Rwanda
                    </p>
                  </div>
                </div>
              </div>

              {/* =================================================
                  MISSION BOX
                  ================================================= */}

              <div
                className="
                  mt-8
                  rounded-2xl
                  border
                  border-white/10
                  bg-gradient-to-r
                  from-white/10
                  to-white/5
                  p-5
                  backdrop-blur-md
                "
              >
                <p className="text-sm font-bold text-white">
                  Transforming Education
                </p>

                <p className="mt-1 text-sm text-teal-100">
                  Empowering People • Building the Future
                </p>

                <div className="mt-4 flex items-center gap-2">
                  <span className="h-1.5 w-8 rounded-full bg-emerald-400" />
                  <span className="h-1.5 w-4 rounded-full bg-cyan-400" />
                  <span className="h-1.5 w-2 rounded-full bg-white/60" />
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT CONTACT FORM
              ===================================================== */}

          <div
            className="
              relative
              rounded-[2rem]
              border
              border-gray-100
              bg-white
              p-8
              shadow-2xl
              shadow-gray-200/60
              sm:p-10
            "
          >

            {/* Top accent */}

            <div
              className="
                absolute
                left-0
                right-0
                top-0
                h-1.5
                rounded-t-[2rem]
                bg-gradient-to-r
                from-teal-600
                via-emerald-500
                to-blue-700
              "
            />

            <div className="mb-8">

              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-gradient-to-br
                    from-teal-100
                    to-blue-100
                    text-xl
                  "
                >
                  💬
                </div>

                <div>
                  <h3
                    className="
                      text-2xl
                      font-extrabold
                      text-gray-900
                    "
                  >
                    Send Us a Message
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    We are ready to hear from you.
                  </p>
                </div>

              </div>

              <p
                className="
                  mt-5
                  text-sm
                  leading-6
                  text-gray-500
                "
              >
                Complete the form below and select the education
                service you are interested in.
              </p>
            </div>

            {/* =================================================
                FORM
                ================================================= */}

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* NAME */}

              <div>
                <label
                  htmlFor="name"
                  className="
                    mb-2
                    block
                    text-sm
                    font-bold
                    text-gray-700
                  "
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-gray-200
                    bg-gray-50
                    px-4
                    py-3.5
                    text-sm
                    text-gray-900
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-gray-400
                    hover:border-teal-300
                    focus:border-teal-500
                    focus:bg-white
                    focus:ring-4
                    focus:ring-teal-100
                  "
                />
              </div>

              {/* EMAIL */}

              <div>
                <label
                  htmlFor="email"
                  className="
                    mb-2
                    block
                    text-sm
                    font-bold
                    text-gray-700
                  "
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="example@email.com"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-gray-200
                    bg-gray-50
                    px-4
                    py-3.5
                    text-sm
                    text-gray-900
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-gray-400
                    hover:border-teal-300
                    focus:border-teal-500
                    focus:bg-white
                    focus:ring-4
                    focus:ring-teal-100
                  "
                />
              </div>

              {/* SERVICE */}

              <div>
                <label
                  htmlFor="service"
                  className="
                    mb-2
                    block
                    text-sm
                    font-bold
                    text-gray-700
                  "
                >
                  Select a Service
                </label>

                <div className="relative">

                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="
                      w-full
                      appearance-none
                      rounded-xl
                      border
                      border-gray-200
                      bg-gray-50
                      px-4
                      py-3.5
                      pr-12
                      text-sm
                      text-gray-700
                      outline-none
                      transition-all
                      duration-300
                      hover:border-teal-300
                      focus:border-teal-500
                      focus:bg-white
                      focus:ring-4
                      focus:ring-teal-100
                    "
                  >
                    <option value="" disabled>
                      Choose a service
                    </option>

                    {services.map((service) => (
                      <option
                        key={service}
                        value={service}
                      >
                        {service}
                      </option>
                    ))}
                  </select>

                  <span
                    className="
                      pointer-events-none
                      absolute
                      right-4
                      top-1/2
                      -translate-y-1/2
                      text-teal-600
                    "
                  >
                    ▼
                  </span>
                </div>
              </div>

              {/* MESSAGE */}

              <div>
                <label
                  htmlFor="message"
                  className="
                    mb-2
                    block
                    text-sm
                    font-bold
                    text-gray-700
                  "
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  placeholder="Write your message here..."
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-gray-200
                    bg-gray-50
                    px-4
                    py-3.5
                    text-sm
                    text-gray-900
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-gray-400
                    hover:border-teal-300
                    focus:border-teal-500
                    focus:bg-white
                    focus:ring-4
                    focus:ring-teal-100
                  "
                />
              </div>

              {/* =================================================
                  SEND BUTTON
                  ================================================= */}

              <button
                type="submit"
                className="
                  group
                  relative
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  overflow-hidden
                  rounded-xl
                  bg-gradient-to-r
                  from-teal-700
                  via-teal-600
                  to-blue-700
                  px-6
                  py-4
                  text-sm
                  font-bold
                  text-white
                  shadow-lg
                  shadow-teal-700/20
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:from-teal-600
                  hover:via-teal-500
                  hover:to-blue-600
                  hover:shadow-2xl
                  hover:shadow-teal-700/30
                  active:translate-y-0
                  focus:outline-none
                  focus:ring-4
                  focus:ring-teal-200
                "
              >
                <span>
                  Send Message
                </span>

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
              </button>

              {/* Email note */}

              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  text-center
                  text-xs
                  text-gray-400
                "
              >
                <span className="text-teal-600">
                  🔒
                </span>

                Your message will be prepared securely in your
                email application.
              </div>
            </form>
          </div>
        </div>

        {/* =======================================================
            BOTTOM SERVICE HIGHLIGHTS
            ======================================================= */}

        <div className="mt-12 grid gap-4 sm:grid-cols-3">

          {/* Card 1 */}

          <div
            className="
              group
              rounded-2xl
              border
              border-teal-100
              bg-white
              p-5
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-teal-200
              hover:shadow-xl
            "
          >
            <div className="flex items-center gap-4">

              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-teal-100
                  text-xl
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              >
                📚
              </div>

              <div>
                <h4 className="font-bold text-gray-900">
                  Education Support
                </h4>

                <p className="mt-1 text-xs text-gray-500">
                  Helping learners achieve more.
                </p>
              </div>

            </div>
          </div>

          {/* Card 2 */}

          <div
            className="
              group
              rounded-2xl
              border
              border-emerald-100
              bg-white
              p-5
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-emerald-200
              hover:shadow-xl
            "
          >
            <div className="flex items-center gap-4">

              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-emerald-100
                  text-xl
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              >
                🌱
              </div>

              <div>
                <h4 className="font-bold text-gray-900">
                  Youth Empowerment
                </h4>

                <p className="mt-1 text-xs text-gray-500">
                  Building skills and confidence.
                </p>
              </div>

            </div>
          </div>

          {/* Card 3 */}

          <div
            className="
              group
              rounded-2xl
              border
              border-blue-100
              bg-white
              p-5
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-blue-200
              hover:shadow-xl
            "
          >
            <div className="flex items-center gap-4">

              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-100
                  text-xl
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              >
                🤝
              </div>

              <div>
                <h4 className="font-bold text-gray-900">
                  Community Partnership
                </h4>

                <p className="mt-1 text-xs text-gray-500">
                  Creating impact together.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}