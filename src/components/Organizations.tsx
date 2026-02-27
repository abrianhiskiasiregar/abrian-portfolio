import Image from "next/image";
import { organizations } from "@/data/organizations";

export default function Organizations() {
  return (
    <section id="organizations" className="py-28 relative bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-orange-400 text-sm tracking-widest">
            06.
          </span>
          <h2 className="font-display font-bold text-4xl text-white">
            Community & Organizations
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-orange-500/30 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {organizations.map((org, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-orange-500 transition-all duration-300 group"
            >
              <div className="relative h-60">
                <Image
                  src={org.image}
                  alt={org.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-orange-400">
                  {org.name}
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  {org.role} · {org.period}
                </p>
                <p className="text-gray-300 mt-4 text-sm leading-relaxed">
                  {org.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}