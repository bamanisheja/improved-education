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
      className="relative overflow-hidden bg-gray-50 py-20 sm:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-teal-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">

        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-teal-700">
            Get In Touch
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Contact Improve Education
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            Have a question, partnership idea, or need one of our
            education services? Send us a message and our team will
            get back to you.
          </p>
        </div>

        {/* Contact cards */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">

          {/* Contact information */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-800 via-teal-700 to-blue-800 p-8 text-white shadow-xl sm:p-10">

            {/* Logo watermark */}
            {/* <img
              src="/logo.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 object-contain opacity-10"
            /> */}

            <div className="relative">

              <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-teal-100 backdrop-blur-sm">
                We would love to hear from you
              </span>

              <h3 className="mt-6 text-3xl font-bold">
                Let's work together
              </h3>

              <p className="mt-4 max-w-lg leading-8 text-teal-50">
                Whether you are a learner, parent, teacher, school,
                organization, or community partner, we are ready to
                explore how we can work together.
              </p>

              {/* Contact details */}
              <div className="mt-10 space-y-6">

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
                    ✉
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-teal-200">
                      Email
                    </p>

                    <a
                      href="mailto:improveeducation3@gmail.com"
                      className="mt-1 block font-medium text-white transition hover:text-teal-200 hover:underline"
                    >
                      improveeducation3@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
                    ☎
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-teal-200">
                      Phone
                    </p>

                    <a
                      href="tel:+250785977077"
                      className="mt-1 block font-medium text-white transition hover:text-teal-200"
                    >
                      +250 785 977 077
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
                    📍
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-teal-200">
                      Location
                    </p>

                    <p className="mt-1 font-medium text-white">
                      Rwanda
                    </p>
                  </div>
                </div>

              </div>

              {/* Small CTA */}
              <div className="mt-10 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
                <p className="text-sm font-semibold text-white">
                  Transforming Education • Empowering People
                </p>

                <p className="mt-2 text-sm text-teal-100">
                  Learn • Grow • Lead
                </p>
              </div>

            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl sm:p-10">

            <div className="mb-7">
              <h3 className="text-2xl font-bold text-gray-900">
                Send Us a Message
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Complete the form below and choose the service you
                are interested in.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-gray-700"
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
                    py-3
                    text-sm
                    text-gray-900
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-gray-400
                    focus:border-teal-500
                    focus:bg-white
                    focus:ring-4
                    focus:ring-teal-100
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-700"
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
                    py-3
                    text-sm
                    text-gray-900
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-gray-400
                    focus:border-teal-500
                    focus:bg-white
                    focus:ring-4
                    focus:ring-teal-100
                  "
                />
              </div>

              {/* Services dropdown */}
              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-semibold text-gray-700"
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
                      py-3
                      pr-10
                      text-sm
                      text-gray-700
                      outline-none
                      transition-all
                      duration-300
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

                  {/* Dropdown arrow */}
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    ▼
                  </span>

                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-gray-700"
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
                    py-3
                    text-sm
                    text-gray-900
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-gray-400
                    focus:border-teal-500
                    focus:bg-white
                    focus:ring-4
                    focus:ring-teal-100
                  "
                />
              </div>

              {/* Send button */}
              <button
                type="submit"
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-gradient-to-r
                  from-teal-700
                  to-blue-700
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:from-teal-600
                  hover:to-blue-600
                  hover:shadow-2xl
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

              <p className="text-center text-xs text-gray-400">
                Your email application will open with your message
                prepared for Improve Education.
              </p>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}