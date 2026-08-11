export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-teal-800 via-teal-700 to-cyan-700"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:py-32">
        
        <div className="text-white">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-teal-200">
            Improve Education
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Transforming Education.
            <br />
            Empowering People.
            <br />
            Building the Future.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-teal-50">
            Improve Education is an education-focused organization committed
            to improving learning outcomes and creating opportunities for
            learners, educators, young people, families, and communities.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#services"
              className="rounded-full bg-white px-6 py-3 font-semibold text-teal-800 transition hover:bg-teal-50"
            >
              Explore Our Services
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/50 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Work With Us
            </a>
          </div>
        </div>

        {/* Simple visual */}
        <div className="hidden lg:flex justify-center">
          <div className="relative h-80 w-80">
            <div className="absolute inset-0 rounded-full bg-white/10" />
            <div className="absolute inset-8 rounded-full bg-white/10" />
            <div className="absolute inset-16 flex items-center justify-center rounded-full bg-white text-center shadow-2xl">
              <div>
                <div className="text-5xl">📚</div>
                <p className="mt-3 font-bold text-teal-800">
                  Learn
                  <br />
                  Grow
                  <br />
                  Lead
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
   