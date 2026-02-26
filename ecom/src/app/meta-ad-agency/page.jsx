import { Curve1 } from '@/common/HandWritten';
import MetaHeading from '@/common/MetaHeading';
import { ComparisonTable } from '@/components/home/ComparisonTable';
import FAQ from '@/components/home/Faq';
import HomeFooter from '@/components/home/HomeFooter';
import MobileTestimonialsSlider from '@/components/home/MobileTestimonialsSlider';
import SuccessStories from '@/components/home/SuccessStories';
import BrandSlider from '@/components/meta-ads/BrandSlider';
import ClientStories from '@/components/meta-ads/ClientStories';
import DashboardStacks from '@/components/meta-ads/DashboardStack';
import FeatureCards from '@/components/meta-ads/FeatureCard';
import MetaAdsHero from '@/components/meta-ads/HeroSection';
import MetaDisclaimer from '@/components/meta-ads/MetaDisclaimer';
import MetaLeadForm from '@/components/meta-ads/MetaLeadForm';
import MetaRocketButton from '@/components/meta-ads/MetaRocketButton';
import MetaUgcs from '@/components/meta-ads/MetaUgcs';
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
            <MetaRocketButton color='blue' />
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

      <div className="py-16 space-y-10 3xl:space-y-16 3xl:py-20 mt-10 3xl:mt-16 overflow-hidden">
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

      <div className='space-y-16 3xl:space-y-30 mt-10 3xl:mt-20 mb-40 3xl:mb-50'>
        <MetaHeading
          tag="h2"
          heading={[
            {
              line: [{ type: "normal", text: "Why Brands Choose " }],
            },
            {
              line: [
                { type: "italic", text: "Upthrust" },
                { type: "normal", text: "Over Traditional Agencies" },
              ],
            },
          ]}
          label="UPTHRUST vs Other Agencies"
          subtitle="Why Should You Hire Us?"
        />

        <ComparisonTable showCurve={false} rocketBgColor='#0457CB' checkBgColor='#0457CB' />
      </div>

      <div className='space-y-5 lg:space-y-16 3xl:space-y-30 mb-20 3xl:mb-30'>
        <MetaHeading
          tag="h2"
          heading={[
            {
              line: [{ type: "normal", text: "Look but don't replay these" },
              { type: "italic", text: "UGCs" },

              ],
            }
          ]}
          label="WHY WE ARE DIFFERENT"
          subtitle="Creatives that gets conversion"
        />
        <MetaUgcs />
      </div>

      <div className='space-y-16 3xl:space-y-30 mb-20 3xl:mb-30'>
        <MetaHeading
          tag="h2"
          heading={[
            {
              line: [{ type: "normal", text: " Live dashboards, real revenue numbers, and the" },

              ],
            },
            {
              line: [
                { type: "italic", text: " exact strategies" },
                { type: "normal", text: " we used to get there." },

              ],
            }
          ]}
          label="CASE STUDIES"
          subtitle="We Don't Just Talk—We Show"
        />
        <DashboardStacks />
      </div>
      <MobileTestimonialsSlider
        cardColors={
          [
            {
              bg: 'bg-[#0457CB]',
              text: "text-white",
              quote: '#010202',
              companyNameColor: 'text-white',
              clientNameColor: 'text-white'
            },
            {
              bg: 'bg-[#E8F3FF]',
              text: "text-black",
              quote: '#010202'
            },
            {
              bg: 'bg-[#F6F6F6]',
              text: "text-black",
              quote: '#010202'
            },
            {
              bg: 'bg-[#0457CB]',
              text: "text-white",
              quote: '#010202',
              companyNameColor: 'text-white',
              clientNameColor: 'text-white'
            },
          ]
        }
      />
      <div className="max-lg:hidden">

        <SuccessStories cardColors={
          [
            {
              bg: 'bg-[#0457CB]',
              text: "text-white",
              quote: '#010202',
              companyNameColor: 'text-white',
              clientNameColor: 'text-white'
            },
            {
              bg: 'bg-[#E8F3FF]',
              text: "text-black",
              quote: '#010202'
            },
            {
              bg: 'bg-[#F6F6F6]',
              text: "text-black",
              quote: '#010202'
            },
            {
              bg: 'bg-[#0457CB]',
              text: "text-white",
              quote: '#010202',
              companyNameColor: 'text-white',
              clientNameColor: 'text-white'
            },
          ]
        } />
      </div>

      <div className='space-y-16 3xl:space-y-30 mb-20 mt-40 3xl:mb-30 3xl:mt-50'>
        <MetaHeading
          tag="h2"
          heading={[
            {
              line: [{ type: "normal", text: " Everything You Need To Acquire," },

              ],
            },
            {
              line: [
                { type: "normal", text: "Convert, And " },
                { type: "italic", text: "Retain Customers" },

              ],
            }
          ]}
          label="READY TO BOOK YOUR DEMO"
        />

        <div className='relative  h-full pb-40'>
          <Curve1
            lines={[
              {
                parts: [
                  { type: "text", text: "One Partner for" },
                ]
              },
              {
                parts: [
                  { type: "text", text: "your entire" },
                  { type: 'highlight', text: 'funnel', bgColor: '#0457CB' },
                ]
              },

            ]}
            imageClassName='-right-35 3xl:-right-40 top-8 3xl:top-10 w-full'
            curvePosition="end"
            curveFlipHorizontal={true}
            curveFlipVertical={false}
            tiltAngle={-7}
            imageIndex={6}
            className="absolute left-25 lg:left-15 2xl:left-30 3xl:left-40 top-1/4 "

          />
          <Curve1
            lines={[
              {
                parts: [
                  { type: "text", text: "Don't just" },
                  { type: 'highlight', text: 'read', bgColor: '#0457CB' },
                  { type: "text", text: "see" },
                ]
              },
              {
                parts: [
                  { type: "text", text: "how it actually works" },
                ]
              },

            ]}
            imageClassName='left-0 xs:left-18 scale-x-[-1] scale-y-[-1] -top-18 w-full -rotate-60'
            curvePosition="end"
            curveFlipHorizontal={true}
            curveFlipVertical={false}
            tiltAngle={7}
            imageIndex={3}
            hiddenInSmall={false}
            className="absolute left-8 xs:left-18 bottom-0 xs:-bottom-10 lg:hidden"

          />
          <Curve1
            lines={[
              {
                parts: [
                  { type: "text", text: "Your complete" },
                ]
              },
              {
                parts: [
                  { type: 'highlight', text: 'growth', bgColor: '#0457CB' },
                  { type: "text", text: "engine" },
                ]
              },

            ]}
            imageClassName='right-17 -top-12 3xl:-top-12 w-full -rotate-6 !h-10 lg:!h-12 3xl:!h-12'
            curvePosition="end"
            curveFlipHorizontal={true}
            curveFlipVertical={false}
            tiltAngle={7}
            imageIndex={3}
            className="absolute right-35 2xl:right-70  3xl:right-80 bottom-4 3xl:bottom-0"

          />
          <MetaLeadForm showOnlyIframe={true} />
        </div>
      </div>

      <div className='space-y-16 3xl:space-y-30'>
        <MetaHeading
          tag="h2"
          heading={[
            {
              line: [{ type: "normal", text: " Everything You Need To Know" },

              ],
            },
            {
              line: [
                { type: "normal", text: "Before" },
                { type: "italic", text: "Working With Us" },

              ],
            }
          ]}
          label="GOT QUESTIONS?/ FAQ'S"
          subtitle=""
        />
        <FAQ
          shadow={true}
          actionCss={{
            active: "bg-[#0457CB] text-white",
            default: "bg-[#E8F3FF] text-black/70",
          }}
        />
      </div>

      <MetaDisclaimer />
      <HomeFooter text1="Request a free consultation." bgColor="#0457CB" text2={{
        desktop: {
          text1: "WE'LL FIND YOUR WASTED",
          text2: "AD SPEND. YOU'LL WONDER WHY\n YOU WAITED. LET'S GO.",
        },
        mobile: {
          text1: "AD SPEND. YOU'LL WONDER WHY YOU WAITED. Let’s go.",
          text2: "",
        },
      }} />
    </main>
  )
}

export default page