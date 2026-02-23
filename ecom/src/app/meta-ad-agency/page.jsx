import MetaHeading from '@/common/MetaHeading';
import ClientStories from '@/components/meta-ads/ClientStories';
import MetaAdsHero from '@/components/meta-ads/HeroSection';
import ScaleCards from '@/components/meta-ads/ScaleCard';
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
      </div>

    </main>
  )
}

export default page