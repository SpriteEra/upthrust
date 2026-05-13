import AgencyBrandSlider from '@/components/upthrust-agency/AgencyBrandSlider'
import AgencyButton from '@/components/upthrust-agency/AgencyButton'
import AgencyHeading from '@/components/upthrust-agency/AgencyHeading'
import AgencyNavbar from '@/components/upthrust-agency/AgencyNavbar'
import HeroSection from '@/components/upthrust-agency/HeroSection'
import PlayVideoSection from '@/components/upthrust-agency/VideoPlay'
import Image from 'next/image'


const brandsRow1 = [
  { id: 1, name: "", logo: "/brands/brand-black/tata-cliq.webp" },
  { id: 2, name: "", logo: "/brands/brand-black/housr.webp" },
  { id: 3, name: "", logo: "/brands/brand-black/bagwani.webp" },
  { id: 4, name: "", logo: "/brands/brand-black/mukunda-foods.webp" },
  { id: 5, name: "", logo: "/brands/brand-black/libas.webp" },
  { id: 6, name: "", logo: "/brands/brand-black/biba.webp" },
  { id: 7, name: "", logo: "/brands/brand-black/manohar-lal.webp" },
  { id: 8, name: "", logo: "/brands/brand-black/shoppetite.webp" },
  { id: 9, name: "", logo: "/brands/brand-black/yummie.webp" },
  { id: 10, name: "", logo: "/brands/brand-black/bosch.webp" },
  { id: 11, name: "", logo: "/brands/brand-black/the-sweet-blend.webp" },
  { id: 12, name: "", logo: "/brands/brand-black/victorias-secret.webp" },
  { id: 13, name: "", logo: "/brands/brand-black/nurture-india.webp" },
  { id: 14, name: "", logo: "/brands/brand-black/dhenu.webp" },
  { id: 15, name: "", logo: "/brands/brand-black/dell.webp" },
]
const brandsRow2 = [
  { id: 1, name: "", logo: "/brands/brand-black/zomato.webp" },
  { id: 2, name: "", logo: "/brands/brand-black/urban.webp" },
  { id: 3, name: "", logo: "/brands/brand-black/welspun.webp" },
  { id: 4, name: "", logo: "/brands/brand-black/ok.webp" },
  { id: 5, name: "", logo: "/brands/brand-black/zipnow.webp" },
  { id: 6, name: "", logo: "/brands/brand-black/petco.webp" },
  { id: 7, name: "", logo: "/brands/brand-black/velbiom.webp" },
  { id: 8, name: "", logo: "/brands/brand-black/james-allen.webp" },
  { id: 9, name: "", logo: "/brands/brand-black/neon-attack.webp" },
  { id: 10, name: "", logo: "/brands/brand-black/jagwonder.webp" },
  { id: 11, name: "", logo: "/brands/brand-black/beyond.webp" },
  { id: 12, name: "", logo: "/brands/brand-black/mc-overalls.webp" },
  { id: 13, name: "", logo: "/brands/brand-black/tiggle.webp" },
  { id: 14, name: "", logo: "/brands/brand-black/harley-davidson.webp" },
  { id: 15, name: "", logo: "/brands/brand-black/audio-art.webp" },
  { id: 15, name: "", logo: "/brands/brand-black/loreal.webp" },
  { id: 15, name: "", logo: "/brands/brand-black/last-supply.webp" },
]

const page = () => {
  return (
    <div>
      <HeroSection />
      <AgencyNavbar />
      <PlayVideoSection />
      <div className="py-20">
        <AgencyHeading
          tag="h2"
          heading={[
            {
              line: [
                { type: "normal", text: "We don't just use AI." },
              ],
            },
            {
              line: [
                { type: "normal", text: " We're " },
                { type: "italic", text: "built on it." },
              ]
            },
          ]}
          label="HOW WE OPERATE"
          subtitle="Every client account has agents running in the background. Researching, reporting, monitoring, flagging. The humans here do the thinking. The system does everything else."
          subTitleCss="max-w-2xl 3xl:max-w-3xl"
        />
      </div>


      {/* good brand  */}
      <section className="py-10 lg:py-20 w-[90%] mx-auto">
        {/* Nav / Top bar can go here */}
        <div className="flex flex-col lg:flex-row items-center gap-12 w-full">

          {/* ── LEFT COLUMN ── */}
          <div className="flex-1 flex flex-col gap-4 max-w-[45%]">

            {/* Pills */}
            <div className="flex flex-wrap gap-2">
              {["Ships fast.", "Thinks sharp.", "No fluff."].map((tag, index) => (
                <span
                  key={tag}
                  className={`text-lg flex items-center justify-center 3xl:text-xl font-normal leading-[150%] tracking-[-0.02em] text-black  bg-[#F3F3F3] rounded-full px-10 3xl:px-15 py-2.5 3xl:py-3 transition-all
      ${index === 0 ? "-rotate-[5.18deg]" : ""}
      ${index === 1 ? "-rotate-[7.33deg] mt-2" : ""}
      ${index === 2 ? "-rotate-2 mt-2.5" : ""}
      `}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-4xl lg:text-[50px] xl:text-[55px] 3xl:text-7xl font-semibold  leading-11 md:leading-[120%] tracking-[-0.02em] xl:tracking-[-0.04em] capitalize">
              Where{" "}
              <span className="capitalize text-4xl  md:text-4xl lg:text-[60px] xl:text-6xl 3xl:text-[5rem] font-instrument italic leading-11 md:leading-[120%] tracking-[-0.02em] xl:tracking-[-0.04em] font-normal">Good Brands</span>
              <br />
              Come to Bite
            </h2>

            {/* Sub-copy */}
            <p className="text-lg 3xl:text-xl leading-[150%] tracking-[-0.02em] text-black  ">
              We are the agency behind brands that stopped blending in. We build
              work that compounds, converts, and makes your competitors quietly,
              embarrassingly nervous.
            </p>

            {/* CTA Button */}

            <AgencyButton text='Show Us What&apos;s Not Working' />

            {/* Why choose section */}
            <div className="flex flex-col gap-2 mt-2 3xl:mt-4">
              <p className="text-xl leading-[150%] tracking-[-0.02em] ">
                Why brands choose Upthrust
              </p>
              <ul className="flex flex-col gap-1">
                {[
                  "→ We make work that actually survives a pitch.",
                  "→ Your brief gets sharper before we even start.",
                  "→ We ship. We don't reschedule. We just ship.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-lg leading-[150%] tracking-[-0.02em] text-black"
                  >
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── RIGHT COLUMN – Video preview card ── */}
          <div className="flex-1 max-w-[55%]">
            <div className="relative rounded-2xl overflow-hidden bg-gray-900 shadow-2xl">

              {/* Thumbnail image */}
              <div className="relative w-full aspect-973/556">
                <Image
                  src="/main-agency/good-video.png"
                  alt="Video preview"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/20" />

                {/* Top-left logo badge */}
              </div>
            </div>
          </div>

        </div>
      </section>

      <div className="py-20">
        <AgencyHeading
          tag="h2"
          heading={[
            {
              line: [
                { type: "normal", text: "Last Month," },
                { type: "italic", text: "47 Brands" },
                { type: "normal", text: "Scaled" },

              ],
            },

          ]}
          label="Work WE'VE done"
          subtitle={`One client rang us mid-campaign. "We just crossed $1M." That's the only metric we care about.`}
          subTitleCss="max-w-2xl 3xl:max-w-3xl"
        />
      </div>
      <AgencyBrandSlider brandsRow1={brandsRow1} brandsRow2={brandsRow2} />



    </div>
  )
}

export default page