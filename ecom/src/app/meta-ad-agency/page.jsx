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
    </main>
  )
}

export default page