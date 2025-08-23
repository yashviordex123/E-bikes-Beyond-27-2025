// "use client";
// import React, { useEffect, useState, useRef } from 'react';
// import { motion } from 'framer-motion';
// import '../styles/OpeningHours.css';

// export default function Promotion() {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef();

//   useEffect(() => {
//     const handleScroll = () => {
//       const section = sectionRef.current;
//       if (!section) return;
//       const rect = section.getBoundingClientRect();
//       if (rect.top <= window.innerHeight * 0.75) {
//         setIsVisible(true);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <motion.section
//       ref={sectionRef}
//       className="promotion-section text-white position-relative"
//       aria-labelledby="opening-hours-heading"
//       initial={{ opacity: 0, y: 60 }}
//       animate={isVisible ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.7, ease: "easeOut" }}
//     >
//       <div className="position-absolute w-100 mt-sm-5 mt-0 h-100 d-flex align-items-center justify-content-center justify-content-md-end pe-md-5">
//         <div
//           className="text-center bg-white text-dark px-5 py-4 rounded shadow-lg opening-box animate-opening"
//           itemScope
//           itemType="https://schema.org/LocalBusiness"
//         >
//           <h2 id="opening-hours-heading" className="fw-bold mb-3" itemProp="name">
//             OPENING HOURS
//           </h2>
//           <h3 className="mb-3" itemProp="openingHours">
//             <time dateTime="Mo-Su 09:00-19:00">
//               Monday - Saturday : 9am – 7pm
//             </time>
//             <time dateTime="Mo-Su 09:00-19:00">
//               Sunday : 11am – 4pm
//             </time>
//           </h3>
//           <p className="mb-0 text-muted">
//             Visit our Melbourne location anytime during our opening hours.
//           </p>
//         </div>
//       </div>
//     </motion.section>
//   );
// }


"use client";
import React, { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import '../styles/OpeningHours.css';

export default function Promotion() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.75) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Your Business Name",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address",
      "addressLocality": "Melbourne",
      "addressRegion": "VIC",
      "postalCode": "3000",
      "addressCountry": "Australia"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "11:00",
        "closes": "16:00"
      }
    ]
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <motion.section
        ref={sectionRef}
        className="promotion-section text-white position-relative"
        aria-labelledby="opening-hours-heading"
        role="region"
        initial={{ opacity: 0, y: 60 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="position-absolute w-100 mt-sm-5 mt-0 h-100 d-flex align-items-center justify-content-center justify-content-md-end pe-md-5">
          <div className="text-center bg-white text-dark px-sm-5 px-3 py-4 rounded shadow-lg opening-box animate-opening">
            <h2 id="opening-hours-heading" className="fw-bold mb-3">
              OPENING HOURS
            </h2>
            <h3 className="mb-3 fs-5">
              Monday - Saturday : 9am - 7pm
            </h3>
            <h3 className="mb-3 fs-5">
              Sunday : 11am - 4pm
            </h3>
            <p className="mb-0 text-muted">
              Visit our Melbourne location anytime during our opening hours.
            </p>
          </div>
        </div>
      </motion.section>
    </>
  );
}
