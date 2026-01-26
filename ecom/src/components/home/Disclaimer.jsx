"use client";
import { useState } from "react";

export default function Disclaimer() {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-5xl mx-auto mt-10">
      {/* HEADER */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 rounded-xl bg-gray-100 px-6 py-4 text-left"
      >
        <span className="font-medium text-black">Disclaimer</span>

        <span className="flex items-center justify-center size-8 rounded-md bg-white border text-xl font-semibold">
          {open ? "−" : "+"}
        </span>
      </button>

      {/* CONTENT */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-[2000px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
      >
        <div className="rounded-xl bg-white p-6 text-sm text-gray-700 leading-relaxed space-y-6">
          <section>
            <h5 className="font-semibold">Client Relationships & Brand Logos</h5>
            <p>
              The logos, trademarks, and brand names displayed on this website
              represent a combination of:
            </p>
            <ul className="list-disc pl-5">
              <li>Clients we’ve worked with directly</li>
              <li>Clients we’ve worked with indirectly through partner agencies</li>
              <li>
                Clients of our fulfillment partner, Division D, for whom we have
                written consent to showcase their results
              </li>
              <li>
                Demonstration projects created to illustrate our creative
                capabilities and marketing frameworks
              </li>
            </ul>
          </section>

          <section>
            <h5 className="font-semibold">Important Clarifications</h5>
            <p>
              The inclusion of any brand logo or case study on this website is
              for illustrative and educational purposes only. Unless explicitly
              stated otherwise, these logos do not imply direct affiliation,
              endorsement, partnership, or ongoing business relationships.
            </p>
          </section>

          <section>
            <h5 className="font-semibold">Intellectual Property Rights</h5>
            <p>
              All trademarks, logos, and brand names remain the property of their
              respective owners. If you are a copyright or trademark holder and
              have concerns, please contact us at{" "}
              <strong>contact@upthrust.io</strong>.
            </p>
          </section>

          <section>
            <h5 className="font-semibold">Platform Disclaimers</h5>
            <ul className="list-disc pl-5">
              <li>Facebook® is a trademark of Meta Platforms, Inc.</li>
              <li>YouTube® and Google® are trademarks of Google LLC</li>
              <li>Bing® is a trademark of Microsoft Corporation</li>
              <li>Instagram® and Meta® are trademarks of Meta Platforms, Inc.</li>
            </ul>
          </section>

          <section>
            <h5 className="font-semibold">Questions or Concerns?</h5>
            <p>
              Email: <strong>sales@upthrust.io</strong>
              <br />
              Address: DLF Two Horizon Centre, Sector 43, Gurugram, Haryana
              122009
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
