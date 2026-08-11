import {
  ArrowRight,
  BookOpen,
  Users,
  Lightbulb,
  Target,
} from "lucide-react";

// import logo from "../assets/logo/logo-main.jpeg";
// import { siteInfo } from "../data/site";
// import { services } from "../data/services";

const Home = () => {
  return (
    <div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50">

        <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8">

          {/* Text */}
          <div>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-[#008F45]">
              <span className="h-2 w-2 rounded-full bg-[#008F45]" />
              Better Education, Better Future
            </div>

            <h1 className="text-4xl font-black leading-tight text-gray-900 sm:text-5xl lg:text-6xl">

              Learn.
              <span className="text-[#008F45]"> Grow.</span>
              <br />
              <span className="text-[#0068B7]">
                Succeed.
              </span>

            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              {siteInfo.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#008F45] px-7 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#0068B7]"
              >
                Explore Our Services
                <ArrowRight size={19} />
              </a>

              <a
                href="/about"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#0068B7] px-7 py-4 font-bold text-[#0068B7] transition hover:bg-[#0068B7] hover:text-white"
              >
                Learn About Us
              </a>

            </div>

          </div>

          {/* Logo visual */}
          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-[#008F45]/10 blur-3xl" />

              <div className="relative rounded-[3rem] border border-white bg-white p-5 shadow-2xl">

                <img
                  src={logo}
                  alt="Improve Education"
                  className="w-full max-w-lg rounded-[2rem]"
                />

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <p className="font-bold uppercase tracking-wider text-[#008F45]">
              What We Believe
            </p>

            <h2 className="mt-3 text-3xl font-black text-gray-900 sm:text-4xl">
              Education That Creates Opportunity
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              We combine education, technology, creativity, mentorship,
              leadership, and community engagement.
            </p>

          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <ValueCard
              icon={<BookOpen />}
              title="Quality Education"
              text="Practical and inclusive learning opportunities."
            />

            <ValueCard
              icon={<Lightbulb />}
              title="Innovation"
              text="Creative and technology-enabled education."
            />

            <ValueCard
              icon={<Users />}
              title="Empowerment"
              text="Building skills, confidence, and leadership."
            />

            <ValueCard
              icon={<Target />}
              title="Success"
              text="Creating meaningful educational outcomes."
            />

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-50 py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <p className="font-bold uppercase tracking-wider text-[#008F45]">
                What We Do
              </p>

              <h2 className="mt-2 text-3xl font-black text-gray-900 sm:text-4xl">
                Our Services
              </h2>

            </div>

            <a
              href="/services"
              className="flex items-center gap-2 font-bold text-[#0068B7]"
            >
              View All Services
              <ArrowRight size={18} />
            </a>

          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {services.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="rounded-2xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 font-bold text-[#008F45]">
                  {String(service.id).padStart(2, "0")}
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-3 line-clamp-3 leading-7 text-gray-600">
                  {service.shortDescription}
                </p>

                <a
                  href="/services"
                  className="mt-5 inline-flex items-center gap-2 font-bold text-[#008F45]"
                >
                  Learn More
                  <ArrowRight size={17} />
                </a>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* MISSION / VISION */}
      <section className="bg-[#0068B7] py-20 text-white">

        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:px-8">

          <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-sm">
            <p className="font-bold uppercase tracking-wider text-green-300">
              Our Mission
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Improve Education
            </h2>

            <p className="mt-5 leading-8 text-blue-50">
              {siteInfo.mission}
            </p>
          </div>

          <div className="rounded-3xl bg-[#008F45] p-8">
            <p className="font-bold uppercase tracking-wider text-green-100">
              Our Vision
            </p>

            <h2 className="mt-3 text-3xl font-black">
              A Better Future
            </h2>

            <p className="mt-5 leading-8 text-green-50">
              {siteInfo.vision}
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-3xl font-black text-gray-900 sm:text-4xl">
            Ready to Improve Education Together?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
            Whether you are a school, teacher, parent, organization, or
            young person, we are here to create opportunities for learning,
            growth, and success.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#008F45] px-8 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#0068B7]"
          >
            Contact Improve Education
            <ArrowRight size={19} />
          </a>

        </div>

      </section>

    </div>
  );
};

const ValueCard = ({ icon, title, text }) => {
  return (
    <div className="group rounded-2xl border border-gray-100 bg-white p-7 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-[#008F45] transition group-hover:bg-[#008F45] group-hover:text-white">
        {icon}
      </div>

      <h3 className="mt-5 font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-600">
        {text}
      </p>

    </div>
  );
};

export default Home;