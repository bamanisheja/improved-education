import React from "react";

const staffMembers = [
   {
    id: 3,
    name: " Nzanzimfura Jean Damascene",
    role: "Chief Executive Officer",
    image: "/damasi.png",
    description:
      "Provides executive leadership and helps transform the organization's vision into effective education, talent development, mentorship, and creative arts programs.",
  },
  {
    id: 1,
    name: " Dr. Nsengiyumva Venuste",
    role: "Managing Director",
    image: "/umupapa.png",
    description:
      "Provides overall leadership and direction, ensuring that Improve Education achieves its mission of discovering talent, developing potential, and inspiring positive change.",
  },
  {
    id: 2,
    name: "Ayinkamiye Alice",
    role: "Director of Finance",
    image: "/umumama.png",
    description:
      "Manages the organization's financial resources and ensures that programs and activities are supported through responsible financial planning and accountability.",
  },
  
  {
    id: 4,
    name: "Twahirwa Jean Bosco",
    role: "Training Coordinator",
    image: "/murumuna.png",
    description:
      "Supports organizational management and coordinates activities that create opportunities for young people to discover, develop, and showcase their talents.",
  },
  {
    id: 5,
    name: "Abayo Sezerano Josue",
    role: "Administrative Assistant",
    image: "/joshua.png",
    description:
      "Supports daily administration and ensures that communication, documentation, scheduling, and organizational activities run smoothly.",
  },
];

const Staff = () => {
  return (
    <section
      id="staff"
      className="relative overflow-hidden bg-white py-20 sm:py-24"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-green-50 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-green-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-green-50 px-5 py-2 text-sm font-semibold tracking-wide text-green-700 ring-1 ring-inset ring-green-100">
            Our Team
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Meet the People Behind{" "}
            <span className="text-green-700">
              Improve Education
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Our dedicated team works together to discover talent, develop
            potential, empower young people, and use education and creativity
            to inspire positive change in communities.
          </p>
        </div>

        {/* Staff Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {staffMembers.map((member) => (
            <article
              key={member.id}
              className="group overflow-hidden rounded-2xl border border-green-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-green-300 hover:shadow-xl"
            >
              {/* =========================
                  PHOTO AREA
              ========================== */}
              <div className="relative flex h-56 items-end justify-center bg-[#f1f8ed]">
                
                {/* Staff Photo */}
                <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-white p-2 shadow-lg ring-1 ring-white transition-all duration-500 group-hover:shadow-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full rounded-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://placehold.co/500x500/f1f8ed/2f6f3e?text=Staff+Photo";
                    }}
                  />
                </div>
              </div>

              {/* =========================
                  STAFF INFORMATION
              ========================== */}
              <div className="px-5 pb-8 pt-7 text-center sm:px-6">

                {/* Name */}
                <h3 className="text-xl font-bold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-green-700">
                  {member.name}
                </h3>

                {/* Position */}
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-green-700 sm:text-sm">
                  {member.role}
                </p>

                {/* Description */}
                <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-slate-600">
                  {member.description}
                </p>

                {/* Bottom Line */}
                <div className="mx-auto mt-6 h-0.5 w-10 rounded-full bg-green-600 transition-all duration-500 group-hover:w-24" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Staff;