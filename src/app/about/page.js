
// "use client";
// import Head from 'next/head';
// import Image from 'next/image';
// import aboutImg from '../../../public/images/Latest-admin-image.jpg'; 
// import aboutImg1 from '../../../public/images/Latest-repairer-admin.jpg'; 
// import aboutthree from '../../../public/images/about-image.jpg';
// import '../styles/About.css';
// import Header from '../components/Header';
// import { usePathname } from 'next/navigation';
// import Footer from '../components/Footer';

// export default function About() {
//   const pathname = usePathname();

//   return (
//     <>
//       <Head>
//         <title>About Us | EBIKE100</title>
//         <meta name="description" content="Get to know the team behind EBIKE100 and our passion for sustainable transport in Melbourne." />
//         <meta name="keywords" content="About EBIKE100, electric bikes, Melbourne, sustainable transport" />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href="https://yourdomain.com/about" />
//       </Head>

//       {/* ✅ Only render Header when not on homepage */}
//       {pathname !== "/" && <Header />}

//       <section className='aboutSection mb-5'>
//         <h1 className='text-center' style={{marginBottom:'40px',color:'#f7931e',marginTop:'40px'}}>About Us</h1>
//         <div className="container px-3 px-sm-0">
//           {/* Section 1 */}
//           <div className="row align-items-center">
//             <div className="col-md-6 mb-4 mb-md-0">
//               <Image
//                 src={aboutImg}
//                 alt="About EBIKE100"
//                 className='ovalImage'
//                 width={500}
//                 height={500}
//               />
//             </div>
//             <div className="col-md-6">
//               <h2 className='orangeHeading'>MISSION</h2>
//               <p>
//                 Beyond Bikes offers reliable and affordable electric bike rentals designed for both everyday riders and food delivery professionals in Melbourne. Whether you are exploring the city or delivering with Uber Eats or DoorDash, our e-bikes provide the perfect blend of power, comfort, and efficiency. We understand the needs of urban commuters - that’s why our bikes are built for performance, long battery life, and convenience. “Freedom to Explore, Power to Move” - that’s the promise we ride on. With flexible rental options, quick support, and service across Melbourne, Beyond Bikes is your go-to for hassle-free electric mobility.
//               </p>
              
//             </div>
//           </div>

//           {/* Section 2 */}
//           <div className="row mt-sm-5 mt-2 align-items-center">
//             <div className="col-md-6 order-sm-1 order-2">
//               <h2 className='orangeHeading'>STORE BACKGROUND</h2>
//               <p>
//                 At Beyond Bikes Pty Ltd, we believe that exceptional service starts with passionate people. We offer a carefully curated range of electric bikes and accessories. We are proud of our roots and even more excited about where we are going. We also offer delivery freedom to any location, with no battery issues.              </p>
//             </div>
//             <div className="col-md-6 order-sm-2 order-1 text-end mb-4 mb-md-0">
//               <Image
//                 src={aboutImg1}
//                 alt="About EBIKE100"
//                 className='ovalImage'
//                 width={500}
//                 height={500}
//               />
//             </div>
//           </div>         
//         </div>
//       </section>
//       {pathname === '/about' && <Footer />}
//     </>
//   );
// }

// "use client";
// import Head from "next/head";
// import Image from "next/image";
// import aboutImg from "../../../public/images/Latest-admin-image.jpg";
// import aboutImg1 from "../../../public/images/Latest-repairer-admin.jpg";
// import aboutthree from "../../../public/images/about-image.jpg";
// import "../styles/About.css";
// import Header from "../components/Header";
// import { usePathname } from "next/navigation";
// import Footer from "../components/Footer";

// export default function About() {
//   const pathname = usePathname();
//   const siteUrl = "https://www.beyondbikes.com.au";

//   const schemaData = {
//     "@context": "https://schema.org",
//     "@type": "Organization",
//     name: "Beyond Bikes",
//     url: siteUrl,
//     logo: `${siteUrl}/images/logo.png`, // replace with actual logo path
//     sameAs: [
//       "https://www.instagram.com/beyondbikes_vic",
//       "https://www.facebook.com/beyondbikes",
//     ],
//     description: "Reliable and affordable e-bike rentals in Melbourne for commuters and delivery riders.",
//     address: {
//       "@type": "PostalAddress",
//       streetAddress: "667 Glen Huntly Rd, Caulfield South",
//       addressLocality: "Melbourne",
//       addressRegion: "VIC",
//       postalCode: "3162",
//       addressCountry: "AU"
//     },
//     contactPoint: {
//       "@type": "ContactPoint",
//       telephone: "+61 422 032 961",
//       contactType: "Customer Service"
//     }
//   };

//   return (
//     <>
//       <Head>
//         <title>About Us | Beyond Bikes – Melbourne e-Bike Rentals</title>
//         <meta
//           name="description"
//           content="Meet the team behind Beyond Bikes — Melbourne's trusted electric bike rental provider offering flexible, affordable e-bike hire for commuters and delivery riders."
//         />
//         <meta
//           name="keywords"
//           content="Beyond Bikes, e-bike rentals Melbourne, sustainable transport Melbourne, About Beyond Bikes"
//         />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href={`${siteUrl}/about`} />

//         {/* Open Graph tags */}
//         <meta property="og:title" content="About Beyond Bikes — Melbourne e-Bike Rental Business" />
//         <meta
//           property="og:description"
//           content="Learn more about Beyond Bikes, our mission and dedication to affordable, reliable e-bike rentals in Melbourne."
//         />
//         <meta property="og:image" content={`${siteUrl}/images/about-og.jpg`} /> {/* replace as needed */}
//         <meta property="og:url" content={`${siteUrl}/about`} />
//         <meta property="og:type" content="website" />

//         {/* Twitter Card */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="About Beyond Bikes – Melbourne e-Bike Experts" />
//         <meta
//           name="twitter:description"
//           content="Discover Beyond Bikes’ story and mission: to provide sustainable, flexible e-bike rentals across Melbourne."
//         />
//         <meta name="twitter:image" content={`${siteUrl}/images/about-og.jpg`} />

//         {/* JSON-LD Organization Schema */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
//         />
//       </Head>

//       {pathname !== "/" && <Header />}

//       <section className="aboutSection mb-5" itemScope itemType="https://schema.org/AboutPage">
//         <h1
//           className="text-center"
//           style={{ marginBottom: "40px", color: "#f7931e", marginTop: "40px" }}
//         >
//           About Us
//         </h1>
        
//         <div className="container px-3 px-sm-0">
//           {/* Section 1 */}
//           <div className="row align-items-center">
//             <div className="col-md-6 mb-4 mb-md-0">
//               <Image
//                 src={aboutImg}
//                 alt="Beyond Bikes team in Melbourne store"
//                 className="ovalImage"
//                 width={500}
//                 height={500}
//                 itemProp="image"
//               />
//             </div>
//             <div className="col-md-6">
//               <h2 className="orangeHeading" itemProp="headline">
//                 MISSION
//               </h2>
//               <p itemProp="text">
//                 Beyond Bikes offers reliable and affordable electric bike rentals designed for both everyday riders and delivery professionals in Melbourne. Whether you are exploring the city or delivering with Uber Eats or DoorDash, our e-bikes provide power, comfort, and efficiency. Our promise: “Freedom to Explore, Power to Move.” With flexible rentals, fast support, and service across the city, Beyond Bikes is your go-to for hassle-free electric mobility.
//               </p>
//             </div>
//           </div>

//           {/* Section 2 */}
//           <div className="row mt-sm-5 mt-2 align-items-center">
//             <div className="col-md-6 order-sm-1 order-2">
//               <h2 className="orangeHeading">STORE BACKGROUND</h2>
//               <p itemProp="text">
//                 At Beyond Bikes Pty Ltd, exceptional service starts with passionate people. We curate a top-quality range of electric bikes and accessories, and offer delivery anywhere in Melbourne with no battery problems. Our roots are local, and our focus is on making electric mobility seamless for every rider.
//               </p>
//             </div>
//             <div className="col-md-6 order-sm-2 order-1 text-end mb-4 mb-md-0">
//               <Image
//                 src={aboutImg1}
//                 alt="Beyond Bikes team and workshop in Melbourne"
//                 className="ovalImage"
//                 width={500}
//                 height={500}
//                 itemProp="image"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {pathname === "/about" && <Footer />}
//     </>
//   );
// }

"use client";
import Head from "next/head";
import Image from "next/image";
import aboutImg from "../../../public/images/Latest-admin-image.jpg";
import aboutImg1 from "../../../public/images/Latest-repairer-admin.jpg";
import "../styles/About.css";
import Header from "../components/Header";
import { usePathname } from "next/navigation";
import Footer from "../components/Footer";

export default function About() {
  const pathname = usePathname();
  const siteUrl = "https://www.beyondbikes.com.au";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Beyond Bikes",
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    sameAs: [
      "https://www.instagram.com/beyondbikes_vic",
      "https://www.facebook.com/beyondbikes",
    ],
    description: "Reliable and affordable e-bike rentals in Melbourne for commuters and delivery riders.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "576 North Rd, Ormond VIC 3204, Australia",
      addressLocality: "Melbourne",
      addressRegion: "VIC",
      postalCode: "3162",
      addressCountry: "AU"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+61 422 032 961",
      contactType: "Customer Service"
    }
  };

  // Dynamic heading tags
  const MainHeadingTag = pathname === "/about" ? "h1" : "h2";
  const SubHeadingTag = pathname === "/about" ? "h2" : "h3";

  return (
    <>
      <Head>
        <title>About Us | Beyond Bikes – Melbourne e-Bike Rentals</title>
        <meta
          name="description"
          content="Meet the team behind Beyond Bikes — Melbourne's trusted electric bike rental provider offering flexible, affordable e-bike hire for commuters and delivery riders."
        />
        <meta
          name="keywords"
          content="Beyond Bikes, e-bike rentals Melbourne, sustainable transport Melbourne, About Beyond Bikes"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${siteUrl}/about`} />

        {/* Open Graph */}
        <meta property="og:title" content="About Beyond Bikes — Melbourne e-Bike Rental Business" />
        <meta property="og:description" content="Learn more about Beyond Bikes, our mission and dedication to affordable, reliable e-bike rentals in Melbourne." />
        <meta property="og:image" content={`${siteUrl}/images/about-og.jpg`} />
        <meta property="og:url" content={`${siteUrl}/about`} />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Beyond Bikes – Melbourne e-Bike Experts" />
        <meta name="twitter:description" content="Discover Beyond Bikes’ story and mission: to provide sustainable, flexible e-bike rentals across Melbourne." />
        <meta name="twitter:image" content={`${siteUrl}/images/about-og.jpg`} />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      {pathname !== "/" && <Header />}

      <section className="aboutSection mb-5" itemScope itemType="https://schema.org/AboutPage">
        <MainHeadingTag
          className="text-center"
          style={{ marginBottom: "40px", color: "#f7931e", marginTop: "40px" }}
        >
          About Us
        </MainHeadingTag>
        
        <div className="container px-3 px-sm-0">
          {/* Section 1 */}
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <Image
                src={aboutImg}
                alt="Beyond Bikes team in Melbourne store"
                className="ovalImage"
                width={500}
                height={500}
                itemProp="image"
              />
            </div>
            <div className="col-md-6">
              <SubHeadingTag className="orangeHeading" itemProp="headline">
                MISSION
              </SubHeadingTag>
              <p itemProp="text">
                Beyond Bikes offers reliable and affordable electric bike rentals designed for both everyday riders and food delivery professionals in Melbourne. Whether you are exploring the city or delivering with Uber Eats or DoorDash, our e-bikes provide the perfect blend of power, comfort, and efficiency. We understand the needs of urban commuters - that’s why our bikes are built for performance, long battery life, and convenience. “Freedom to Explore, Power to Move” - that’s the promise we ride on. With flexible rental options, quick support, and service across Melbourne, Beyond Bikes is your go-to for hassle-free electric mobility.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="row mt-sm-5 mt-2 align-items-center">
            <div className="col-md-6 order-sm-1 order-2">
              <SubHeadingTag className="orangeHeading">STORE BACKGROUND</SubHeadingTag>
              <p itemProp="text">
                At Beyond Bikes Pty Ltd, we believe that exceptional service starts with passionate people. We offer a carefully curated range of electric bikes and accessories. We are proud of our roots and even more excited about where we are going. We also offer delivery freedom to any location, with no battery issues.
              </p>
            </div>
            <div className="col-md-6 order-sm-2 order-1 text-end mb-4 mb-md-0">
              <Image
                src={aboutImg1}
                alt="Beyond Bikes team and workshop in Melbourne"
                className="ovalImage"
                width={500}
                height={500}
                itemProp="image"
              />
            </div>
          </div>
        </div>
      </section>

      {pathname === "/about" && <Footer />}
    </>
  );
}
