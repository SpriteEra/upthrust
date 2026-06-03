import RatingStars from '@/common/Rating'
import UGCVideoCategories from '@/components/home/UGCVideoCategories'
import AgencyBrandSlider from '@/components/upthrust-agency/AgencyBrandSlider'
import AgencyButton from '@/components/upthrust-agency/AgencyButton'
import AgencyHeading from '@/components/upthrust-agency/AgencyHeading'
import AgencyNavbar from '@/components/upthrust-agency/AgencyNavbar'
import DropBoxScroll from '@/components/upthrust-agency/BoxScroll'
import CaseStudyCard, { AgencyCaseStudy } from '@/components/upthrust-agency/CaseStudyCard'
import HeroSection from '@/components/upthrust-agency/HeroSection'
import MediaGrid from '@/components/upthrust-agency/MediaGrid'
import ScrollText from '@/components/upthrust-agency/ScrollText'
import ServicesSlider from '@/components/upthrust-agency/ServiceSlider'
import PlayVideoSection from '@/components/upthrust-agency/VideoPlay'
import Image from 'next/image'



const brandsRow1 = [
  { id: 1, name: "", logo: "/brands/brand-black/tata-cliq.webp", logoWidth: "w-20", logoHeight: "h-6" },
  { id: 2, name: "", logo: "/brands/brand-black/housr.webp", logoWidth: "w-16", logoHeight: "h-6" },
  { id: 3, name: "", logo: "/brands/brand-black/bagwani.webp", logoWidth: "w-40!", logoHeight: "h-10" },
  { id: 4, name: "", logo: "/brands/brand-black/mukunda-foods.webp", logoWidth: "w-40!", logoHeight: "h-6" },
  { id: 5, name: "", logo: "/brands/brand-black/libas.webp", logoWidth: "w-16", logoHeight: "h-6" },
  { id: 6, name: "", logo: "/brands/brand-black/biba.webp", logoWidth: "w-14", logoHeight: "h-6" },
  { id: 7, name: "", logo: "/brands/brand-black/manohar-lal.webp", logoWidth: "w-20", logoHeight: "h-8" },
  { id: 8, name: "", logo: "/brands/brand-black/shoppetite.webp", logoWidth: "w-18", logoHeight: "h-6" },
  { id: 9, name: "", logo: "/brands/brand-black/yummie.webp", logoWidth: "w-18", logoHeight: "h-6" },
  { id: 10, name: "", logo: "/brands/brand-black/bosch.webp", logoWidth: "w-20", logoHeight: "h-7" },
  { id: 11, name: "", logo: "/brands/brand-black/the-sweet-blend.webp", logoWidth: "w-20", logoHeight: "h-6" },
  { id: 12, name: "", logo: "/brands/brand-black/victorias-secret.webp", logoWidth: "w-22", logoHeight: "h-5" },
  { id: 13, name: "", logo: "/brands/brand-black/nurture-india.webp", logoWidth: "w-20", logoHeight: "h-6" },
  { id: 14, name: "", logo: "/brands/brand-black/dhenu.webp", logoWidth: "w-16", logoHeight: "h-7" },
  { id: 15, name: "", logo: "/brands/brand-black/dell.webp", logoWidth: "w-14", logoHeight: "h-8" },
];

const brandsRow2 = [
  { id: 1, name: "", logo: "/brands/brand-black/zomato.webp", logoWidth: "w-20", logoHeight: "h-6" },
  { id: 2, name: "", logo: "/brands/brand-black/urban.webp", logoWidth: "w-16", logoHeight: "h-6" },
  { id: 3, name: "", logo: "/brands/brand-black/welspun.webp", logoWidth: "w-20", logoHeight: "h-6" },
  { id: 4, name: "", logo: "/brands/brand-black/ok.webp", logoWidth: "w-14", logoHeight: "h-7" },
  { id: 5, name: "", logo: "/brands/brand-black/zipnow.webp", logoWidth: "w-20", logoHeight: "h-6" },
  { id: 6, name: "", logo: "/brands/brand-black/petco.webp", logoWidth: "w-20", logoHeight: "h-7" },
  { id: 7, name: "", logo: "/brands/brand-black/velbiom.webp", logoWidth: "w-22", logoHeight: "h-6" },
  { id: 8, name: "", logo: "/brands/brand-black/james-allen.webp", logoWidth: "w-24", logoHeight: "h-5" },
  { id: 9, name: "", logo: "/brands/brand-black/neon-attack.webp", logoWidth: "w-18", logoHeight: "h-8" },
  { id: 10, name: "", logo: "/brands/brand-black/jagwonder.webp", logoWidth: "w-20", logoHeight: "h-6" },
  { id: 11, name: "", logo: "/brands/brand-black/beyond.webp", logoWidth: "w-18", logoHeight: "h-6" },
  { id: 12, name: "", logo: "/brands/brand-black/mc-overalls.webp", logoWidth: "w-16", logoHeight: "h-7" },
  { id: 13, name: "", logo: "/brands/brand-black/tiggle.webp", logoWidth: "w-18", logoHeight: "h-6" },
  { id: 14, name: "", logo: "/brands/brand-black/harley-davidson.webp", logoWidth: "w-22", logoHeight: "h-6" },
  { id: 15, name: "", logo: "/brands/brand-black/audio-art.webp", logoWidth: "w-18", logoHeight: "h-6" },
  { id: 16, name: "", logo: "/brands/brand-black/loreal.webp", logoWidth: "w-18", logoHeight: "h-6" },
  { id: 17, name: "", logo: "/brands/brand-black/last-supply.webp", logoWidth: "w-18", logoHeight: "h-6" },
];


const page = () => {
  return (
    <div>
      <HeroSection />
      <ScrollText />
      <AgencyNavbar />
      <PlayVideoSection />
      <div className="pb-10 pt-30 ">
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

      <div className="py-15">
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

      <div className="py-20">
        <AgencyHeading
          tag="h2"
          heading={[
            {
              line: [
                { type: "normal", text: "The work that gets" }

              ],
            },
            {
              line: [
                { type: "italic", text: "brands remembered" }
              ],
            },

          ]}
          label="What we do"
          subtitle={`Not a list of services. One connected system. Click any to see exactly how it works`}
          subTitleCss="max-w-2xl 3xl:max-w-3xl"
        />
      </div>

      {/* <ServicesSlider slides={myServices} /> */}
      <ServicesSlider />


      <div className="pt-20 pb-10">
        <AgencyHeading
          tag="h2"
          heading={[
            {
              line: [
                { type: "normal", text: "Real briefs. Real budgets." }

              ],
            },
            {
              line: [
                { type: "italic", text: "Real results." }
              ],
            },

          ]}
          label="Our Work"
          subtitle={`No case studies were harmed`}
          subTitleCss="max-w-2xl 3xl:max-w-3xl"
        />
      </div>
      {/* <MediaGrid cards={myCards} /> */}
      <MediaGrid />


      <section className="py-10 lg:py-20 w-[90%] mx-auto">
        {/* Nav / Top bar can go here */}
        <div className="flex flex-col lg:flex-row items-center gap-12 w-full">

          {/* ── LEFT COLUMN ── */}
          <div className="flex-1 flex flex-col gap-4 max-w-[45%]">

            {/* Pills */}


            {/* Headline */}
            <h2 className="text-4xl md:text-4xl lg:text-[50px] xl:text-[55px] 3xl:text-7xl font-semibold  leading-11 md:leading-[120%] tracking-[-0.02em] xl:tracking-[-0.04em] capitalize">
              Where Top<br /> Brands Come To{" "}<br />
              <span className="capitalize text-4xl  md:text-4xl lg:text-[60px] xl:text-6xl 3xl:text-[5rem] font-instrument italic leading-11 md:leading-[120%] tracking-[-0.02em] xl:tracking-[-0.04em] font-normal">Create</span>
            </h2>

            {/* Sub-copy */}
            <p className="text-lg 3xl:text-xl leading-[150%] tracking-[-0.02em] text-black  ">
              Performance marketers, strategists and<br />
              top-tier creatives under one roof.
            </p>

            {/* CTA Button */}

            <AgencyButton text='Show Us How To Scale' />
          </div>

          {/* ── RIGHT COLUMN – Video preview card ── */}
          <div className="flex-1 max-w-[55%]">
            <div className="relative rounded-2xl bg-gray-900 ">

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
              </div>

              {/* Bottom Stats Card */}
              <div className="absolute -bottom-[25%] left-1/2 -translate-x-1/2 w-full bg-black rounded-2xl px-6 py-4 flex items-center justify-between z-20">

                <div className="text-center">
                  <h3 className="text-white text-2xl font-semibold leading-none">
                    543+
                  </h3>
                  <p className="text-[#BDBDBD] text-xs mt-1 uppercase tracking-wide">
                    Qualified leads in 2024
                  </p>
                </div>

                <div className="w-px h-10 bg-white/20" />

                <div className="text-center">
                  <h3 className="text-white text-2xl font-semibold leading-none">
                    498%
                  </h3>
                  <p className="text-[#BDBDBD] text-xs mt-1 uppercase tracking-wide">
                    Increase in demo bookings
                  </p>
                </div>

                <div className="w-px h-10 bg-white/20" />

                <div className="text-center">
                  <h3 className="text-white text-2xl font-semibold leading-none">
                    18%
                  </h3>
                  <p className="text-[#BDBDBD] text-xs mt-1 uppercase tracking-wide">
                    Boost in organic traffic
                  </p>
                </div>

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
                { type: "normal", text: "How we approach your" }

              ],
            },
            {
              line: [
                { type: "italic", text: "Ecom store growth?" }
              ],
            },

          ]}
          label="Our Services"
          subtitle={`Performance marketers, strategists and top-tier creatives under one roof.`}
          subTitleCss="max-w-2xl 3xl:max-w-3xl"
        />
      </div>

      <UGCVideoCategories />

      <section className="max-w-4xl mx-auto py-6 ">
        <div className="w-[90%] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Left Text */}
          <div>
            <p className="text-black text-[28px] 3xl:text-[33px] font-normal leading-[100%] font-instrument italic ">
              Need More <br />
              Inspiration?
            </p>
          </div>

          {/* Center Button */}
          <button className="bg-black text-white rounded-full px-6 md:px-8 py-3 flex items-center gap-3 text-lg 3xl:text-xl font-bold  transition-all duration-300 hover:bg-orange cursor-pointer">
            Go to Creative Library

            <span className="w-8 h-8 rounded-full  text-white flex items-center justify-center text-sm">
              <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.24503 3.62562V1.60629C1.29093 0.734304 1.97934 0.0458939 2.80543 0.0458939L20.6581 0C21.5302 0.0458939 22.2186 0.734304 22.2186 1.5604V19.459C22.2186 20.2852 21.5302 20.9736 20.6581 21.0194H18.6388C17.7669 20.9736 17.0785 20.2852 17.0326 19.4132L17.3079 8.58218L4.13634 21.7538C3.49385 22.3962 2.57596 22.3962 1.93344 21.7538L0.464836 20.2852C-0.131786 19.6885 -0.17768 18.7248 0.464836 18.0822L13.6364 4.91066L2.85133 5.23191C1.97934 5.18601 1.24503 4.5435 1.24503 3.62562Z" fill="white" />
              </svg>
            </span>
          </button>

          {/* Right Logo + Text */}
          <div className="flex flex-col items-center sm:items-center">
            <div className="relative flex items-center  3xl:mb-3">
              {/* First Circle */}
              <Image
                src="/google-ads/clutch.webp"
                alt="Clutch Logo"
                width={100}
                height={100}
                className="object-contain size-10 sm:size-10"
              />

              {/* Second Circle (Overlapping) */}
              <Image
                src="/google-ads/Googleone.webp"
                alt="google Logo"
                width={100}
                height={100}
                className="object-contain size-10 size-10 -ml-3"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm 2xl:text-[16px] 3xl:text-[17px] ">4.9</span>
              <div className="flex gap-1">
                <RatingStars rating={5} fillColor='#FFB900' size='size-4.75 3xl:size-5' />
              </div>
            </div>
            <h1 className="text-[11px] text-black   font-normal leading-[150%] ">Discover why Brands Choose us.</h1>
          </div>

        </div>
      </section>

      <div className="py-20">
        <AgencyHeading
          tag="h2"
          heading={[
            {
              line: [
                { type: "normal", text: "The" },
                { type: "italic", text: "Numbers." },
                { type: "normal", text: "What We Did." },

              ],
            },

          ]}
          label="Case Studies"
          subtitle={`Live dashboards. Real accounts. No mock-ups.`}
          subTitleCss="max-w-2xl 3xl:max-w-3xl"
        />
      </div>
      <div>
        <AgencyCaseStudy />
      </div>

      <div className="py-20 bg-black">
        <AgencyHeading
          tag="h2"
          textColor="text-white"
          heading={[
            {
              line: [
                { type: "normal", text: "The" },
                { type: "italic", text: "Dashboards." }
              ],
            },
            {
              line: [
                { type: "italic", text: "The Numbers. What We Did." }
              ],
            },
          ]}
          label="Case Studies"
          subtitle={`We Don't Just Talk-We Show`}
          subTitleCss="max-w-2xl 3xl:max-w-3xl"
        />

        {/* Videos Section */}
        <div className="w-[92%] mx-auto mt-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Left Video */}
            <div className="relative rounded-2xl overflow-hidden bg-[#111]">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/main-agency/case-study-1.png"
                  alt="Case Study Video"
                  fill
                  className="object-cover"
                />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="black"
                      viewBox="0 0 24 24"
                      className="w-7 h-7 ml-1"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>

                {/* Small Bottom Badge */}
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs">
                  0:32 mins
                </div>
              </div>
            </div>

            {/* Right Video */}
            <div className="relative rounded-2xl overflow-hidden bg-[#111]">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/main-agency/case-study-2.png"
                  alt="Case Study Video"
                  fill
                  className="object-cover"
                />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="black"
                      viewBox="0 0 24 24"
                      className="w-7 h-7 ml-1"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>

                {/* Small Bottom Badge */}
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs">
                  0:32 mins
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Content */}
          <div className="mt-10 border-t border-white/10 pt-8">
            <span className="text-[#FF6B00] text-xs uppercase tracking-[0.25em]">
              Testimonials
            </span>

            <h3 className="text-white text-2xl md:text-4xl font-semibold leading-[130%] tracking-[-0.03em] mt-5 max-w-6xl">
              Upthrust Promised 90 Days. We Saw Results In 47 Days.
              Traffic Improved, Conversions Went Up, Sales Became
              Exponential. Worth Every Penny."
            </h3>

            <p className="text-white/60 text-sm mt-6">
              - Tony, MC Creative
            </p>

            {/* CTA */}
            <button className="mt-10 bg-white text-black rounded-full px-6 py-3 flex items-center gap-3 text-sm font-medium hover:scale-105 transition-all">
              See all reviews

              <span className="w-7 h-7 rounded-full bg-[#FF6B00] text-white flex items-center justify-center text-sm">
                ↗
              </span>
            </button>
          </div>
        </div>
      </div>


      <div>
        <DropBoxScroll />
      </div>




    </div>
  )
}

export default page