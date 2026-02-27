import Image from "next/image";
import { workshops } from "@/data/workshops";

export default function WorkshopGallery() {
  return (
    <section id="workshops" className="py-28 relative bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-orange-400 text-sm tracking-widest">
            07.
          </span>

          <h2 className="font-display font-bold text-4xl text-white">
            Workshop, Training, Self Development & Seminar
          </h2>

          <div className="flex-1 h-px bg-gradient-to-r from-orange-500/30 to-transparent" />
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {workshops.map((item, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 group hover:border-orange-500/40 transition-all duration-300"
            >
              <Image
                src={item.image}
                alt={`Workshop ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}