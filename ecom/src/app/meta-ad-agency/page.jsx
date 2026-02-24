import MetaHeading from '@/common/MetaHeading';
import StylishButton from '@/common/RocketButton';
import BrandSlider from '@/components/meta-ads/BrandSlider';
import ClientStories from '@/components/meta-ads/ClientStories';
import FeatureCards from '@/components/meta-ads/FeatureCard';
import MetaAdsHero from '@/components/meta-ads/HeroSection';
import MobileVideos from '@/components/meta-ads/MobileVideos';
import ScaleCards from '@/components/meta-ads/ScaleCard';
import StatsGrid from '@/components/meta-ads/StatCard';
import MetaNavbar from '@/components/MetaNavbar'
import React from 'react'

const navLinks = [
  { name: 'Why Upthrust', href: '#why-upthrust' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'Creative Library', href: '#creative-library' },
  { name: 'Hear From Them', href: '#hear-from-them' },
];

const page = () => {
  return (
    <main id="meta-ad-agency" >
      <MetaNavbar items={navLinks} />
      <MetaAdsHero />

      <MetaHeading
        tag="h2"
        heading={[
          {
            line: [{ type: "normal", text: "When your friends decides to give the" }],
          },
          {
            line: [
              { type: "normal", text: "secret sauce behind their" },
              { type: "italic", text: "Extraordinary Growths" },
            ],
          },
        ]}
        label="CLIENT STORIES"
      />
      <ClientStories />

      <div className="bg-black text-white py-16 3xl:py-20 mt-10 3xl:mt-16 ">
        <MetaHeading
          tag="h2"
          heading={[
            {
              line: [{ type: "normal", text: " Why most companies are never" }],
            },
            {
              line: [
                { type: "normal", text: "able to" },
                { type: "italic", text: "scale Meta ads" },
              ],
            },
          ]}
          label="CLIENT STORIES"
          subtitle="Cause the most simple and effective process and practices are never followed"

        />
        <ScaleCards />
        <BrandSlider />
      </div>

      <div>
        <h2 className="text-center text-2xl md:text-3xl font-bold mt-10 mb-4">Drop Letter is here ...</h2>
        <StatsGrid />

      </div>
      <section className=" py-16 max-w-[90%] mx-auto flex flex-col lg:flex-row items-center gap-12">


        <div className="flex gap-6 md:gap-15 items-center">

          {/* Left Content */}
          <div className="w-[50%]  overflow-hidden">
            <p className="uppercase text-[12px] tracking-[2px] text-gray-500 mb-4 border-b border-gray-300 pb-3 w-full">
              A NEW ERA OF META AGENCY THAT DELIVER ROI
            </p>
            <h2 className="text-[2.25rem] md:text-[2.5rem] lg:text-[3.125rem] xl:text-[3.75rem] 3xl:text-[4.5rem] font-semibold  leading-11 md:leading-[130%] tracking-[-0.02em] xl:tracking-[-0.04em] capitalize text-black">
              The Quickest, Easiest <br />
              Way To Grow Your <br />
              Business{" "}
              <span className="text-[2.625rem] md:text-[3.125rem] lg:text-[3.4375rem] xl:text-[4.375rem] 3xl:text-[5rem] font-normal  leading-11 xl:leading-[120%] tracking-[-0.02em] xl:tracking-[0em] capitalize font-instrument italic">
                With Meta Ads
              </span>{" "}Is..

            </h2>
            <p className="text-black text-[24px] leading-[150%] tracking-[-0.02em]">
              Upthrust is your dedicated, on-call Meta ads creative team to expand your Meta ads capacity and extend your team’s creative capabilities.
            </p>
            <p className="my-4  text-gray-500 text-[13px] sm:text-[14px]">
              Creative capabilities to drive conversion at a cost you would love.
            </p>
            <StylishButton color='blue' />
          </div>

          {/* Right Video */}
          <div className="w-[50%] h-full">
            <div className="relative w-full aspect-16/10 overflow-hidden ">
              <video
                className="w-full h-full object-cover "
                src="https://cdn.upthrust.agency/Google%20ads/WiseApp%20Google%20Ads.mp4"
                // autoPlay
                muted
                loop
                playsInline
                controls
              />
            </div>
          </div>
        </div>

      </section>

      <div className="bg-black text-white pt-16 3xl:pt-20 mt-10 3xl:mt-16 overflow-hidden">
        <MetaHeading
          tag="h2"
          heading={[
            {
              line: [{ type: "normal", text: " Press on any of the play buttons " }],
            },
            {
              line: [
                { type: "normal", text: "to" },
                { type: "italic", text: "see magic" },
              ],
            },
          ]}
          label="Our Secret Sauce"
          subtitle="WARNING: You're about to see the winning formula, take notes"

        />
        <MobileVideos />
      </div>

      <div className="py-16 3xl:py-20 mt-10 3xl:mt-16 overflow-hidden">
        <MetaHeading
          tag="h2"
          heading={[
            {
              line: [{ type: "normal", text: "The truth behind a successful business" }],
            },
            {
              line: [
                { type: "italic", text: "scaling through Meta" },
                { type: "normal", text: ", which no one tell you" },
              ],
            },
          ]}
          label="CASE STUDIES"
          subtitle="Creative Copy and UGC beats everything else"
        />
        <FeatureCards />

      </div>
    </main>
  )
}

export default page