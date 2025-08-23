// // components/ContactPage.js
// "use client";
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/Contact.css';


// export default function ContactPage() {
//   return (
//     <section className='mt-5' style={{background:'#f8f8f8'}}>
//     <div className="container py-5 px-3 text-white" aria-label="Store Locations">
//       <div className="row justify-content-center mb-4">        
//           <h2 className="text-center" style={{color:'#ff6b00'}}>Contact Us on Store Location</h2>  
        
//       </div>

//       {/* Branch 1 */}
//       <div className="row align-items-start position-relative mb-5" itemScope itemType="https://schema.org/LocalBusiness">
//         <div className="col-md-6 set-location-padding">
//           {/* <h4 className="fw-bold" itemProp="name" style={{color:'#9b5402'}}>Branch 1: EBIKE100</h4> */}
//           <p itemProp="address" style={{color:'#ff6b00'}}><strong>Address:-</strong>  667 Glen Huntly Rd Caulfield South, Caulfield VIC 3162, Australia</p>
//           <p itemProp="email" style={{color:'#ff6b00'}}><strong>Email Id:-</strong> info.beyondbikes@gmail.com</p>
//           <p itemProp="telephone" style={{color:'#ff6b00'}}><strong>Phone Number:-</strong> +61422032961</p>
//           {/* <div className="d-flex gap-3 mt-2">
//             <a href="#" aria-label="Instagram"><FaInstagram size={20} className="text-white" /></a>
//             <a href="#" aria-label="WhatsApp"><FaWhatsapp size={20} className="text-white" /></a>
//             <a href="#" aria-label="Facebook"><FaFacebookF size={20} className="text-white" /></a>
//           </div> */}
//         </div>
//         <div className="col-md-6 d-flex justify-content-center">
          
//   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.892981477474!2d145.01450907569838!3d-37.88618537195743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xad2bb1333866ab51%3A0xa4b86ef9fc66b952!2sBeyond%20Bikes!5e0!3m2!1sen!2sin!4v1752858283636!5m2!1sen!2sin" allowFullScreen={true}
//   loading="lazy"
//   referrerPolicy="no-referrer-when-downgrade" className='responsive-map'></iframe>

//         </div>
//       </div>

      
//     </div>
//     </section>
//   );
// }

// SEO
// components/ContactPage.js
"use client";

import React from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Contact.css';

export default function ContactPage() {
  return (
    <>
      {/* SEO Head */}
      <Head>
        <title>Contact Beyond Bikes | E-Bike Store in Caulfield South</title>
        <meta
          name="description"
          content="Get in touch with Beyond Bikes at our Caulfield South store. Visit us for premium e-bikes, helmets, and accessories. Call +61 422 032 961 or email info.beyondbikes@gmail.com."
        />
        <meta
          name="keywords"
          content="Beyond Bikes contact, ebike store Melbourne, electric bike shop Caulfield, Beyond Bikes Australia location"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact Beyond Bikes | Melbourne E-Bike Store" />
        <meta
          property="og:description"
          content="Find Beyond Bikes at 667 Glen Huntly Rd, Caulfield South VIC 3162, Australia. Call +61 422 032 961 for premium electric bikes."
        />
        <meta property="og:type" content="business.business" />
        <meta property="og:url" content="https://www.beyondbikes.com.au/contact" />
        <meta property="og:image" content="https://www.beyondbikes.com.au/images/storefront.jpg" />
        <meta property="business:contact_data:street_address" content="667 Glen Huntly Rd" />
        <meta property="business:contact_data:locality" content="Caulfield South" />
        <meta property="business:contact_data:region" content="VIC" />
        <meta property="business:contact_data:postal_code" content="3162" />
        <meta property="business:contact_data:country_name" content="Australia" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Beyond Bikes | Melbourne E-Bike Store" />
        <meta
          name="twitter:description"
          content="Visit Beyond Bikes in Caulfield South for premium electric bikes and accessories."
        />
        <meta name="twitter:image" content="https://www.beyondbikes.com.au/images/storefront.jpg" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Beyond Bikes",
              "image": "https://www.beyondbikes.com.au/images/storefront.jpg",
              "@id": "",
              "url": "https://www.beyondbikes.com.au",
              "telephone": "+61 422 032 961",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "667 Glen Huntly Rd",
                "addressLocality": "Caulfield South",
                "addressRegion": "VIC",
                "postalCode": "3162",
                "addressCountry": "AU"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -37.8861853,
                "longitude": 145.0145090
              },
              "openingHours": "Mo-Su 09:00-19:00",
              "sameAs": [
                "https://www.facebook.com/BeyondBikes",
                "https://www.instagram.com/beyondbikes",
                "https://twitter.com/beyondbikes"
              ]
            })
          }}
        />
      </Head>

      {/* Contact Section */}
      <section className="mt-5" style={{ background: '#f8f8f8' }}>
        <div
          className="container py-5 px-3 text-white"
          aria-label="Store Locations"
        >
          <div className="row justify-content-center mb-4">
            <h2 className="text-center" style={{ color: '#ff6b00' }}>
              Contact Beyond Bikes in Melbourne
            </h2>
          </div>

          {/* Branch */}
          <div
            className="row align-items-start position-relative mb-5"
            itemScope
            itemType="https://schema.org/LocalBusiness"
          >
            <div className="col-md-6 set-location-padding">
              <p itemProp="address" style={{ color: '#ff6b00' }}>
                <strong>Address:</strong> 667 Glen Huntly Rd Caulfield South, Caulfield VIC 3162, Australia
              </p>
              <p itemProp="email" style={{ color: '#ff6b00' }}>
                <strong>Email:</strong> info.beyondbikes@gmail.com
              </p>
              <p itemProp="telephone" style={{ color: '#ff6b00' }}>
                <strong>Phone:</strong> +61 422 032 961
              </p>
            </div>

            <div className="col-md-6 d-flex justify-content-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.892981477474!2d145.01450907569838!3d-37.88618537195743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xad2bb1333866ab51%3A0xa4b86ef9fc66b952!2sBeyond%20Bikes!5e0!3m2!1sen!2sin!4v1752858283636!5m2!1sen!2sin"
                allowFullScreen={true}
                loading="lazy"
                title="Beyond Bikes Location Map"
                aria-label="Beyond Bikes Store Location on Google Maps"
                referrerPolicy="no-referrer-when-downgrade"
                className="responsive-map"
              ></iframe>
              <noscript>
                View our location on{' '}
                <a
                  href="https://goo.gl/maps/7hK3uDNWv5LJbGf86"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Maps
                </a>
              </noscript>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
