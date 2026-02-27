import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import img7 from '../assets/img7.png'
import img8 from '../assets/img8.png'
import img9 from '../assets/img9.png'
import img10 from '../assets/img10.png'
import img11 from '../assets/img11.png'
import img12 from '../assets/img12.png'
import img13 from '../assets/img13.png'
import img14 from '../assets/img14.png'

const villages = [
  { img: img1,  label: "Climate Crisis" },
  { img: img2,  label: "Bioremediation" },
  { img: img3,  label: "Conservation" },
  { img: img4,  label: "Fashion & Cosmetics" },
  { img: img5,  label: "Agriculture" },
  { img: img6,  label: "Food & Nutrition" },
  { img: img7,  label: "Diagnostics" },
  { img: img8,  label: "Therapeutics" },
  { img: img9,  label: "Infectious Diseases" },
  { img: img10, label: "Oncology" },
  { img: img11, label: "Foundational Advance" },
  { img: img12, label: "Biomanufacturing" },
  { img: img13, label: "Space" },
  { img: img14, label: "Software & AI" },
]

export default function VillagesSection() {
  return (
    <section className="pt-5 md:pt-14">
      <p className="text-sm uppercase tracking-[0.3em] text-accent">Research Impact Areas</p>
      <h2 className="mt-4 font-display text-3xl md:text-4xl">
        Where Our Research Can Make a Difference
      </h2>
      <p className="mt-3 text-sm text-muted">
        Synthetic biology has the potential to address challenges across 14 critical
        domains — from fighting antimicrobial resistance to sustainable agriculture and beyond.
      </p>

      <div className="mt-8 rounded-2xl border border-black/10 bg-white/90 p-6 shadow-soft">
        <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
          {villages.map((v, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <img
                src={v.img}
                alt={v.label}
                className="w-16 h-16 rounded-full object-cover"
              />
              <span className="text-center text-xs font-semibold text-ink leading-tight">
                {v.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}