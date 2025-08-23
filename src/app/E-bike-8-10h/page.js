// 'use client';
// import { useEffect, useState } from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
// // import { useState } from 'react';
// // import '../styles/productdetails.css';
// import '../styles/productdetails.css'
// import Header from '../components/Header';
// import { useRouter } from 'next/navigation';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import Footer from '../components/Footer';
// import Instagram from '../../../public/images/instagram-latest.svg';
// import Google from '../../../public/images/google-latest.svg';
// import Call from '../../../public/images/phone-latest.svg';



// const images = {
//   front: '/images/BlueCycleProductDetailsFront.jpg',
//   back: '/images/BlueCycleProductDetailsAngleBlur.jpg',
//   middle: '/images/BlueCycleProductDetailsFrontLatest.jpg',
//   battery:'/images/BlueCycleProductDetailsBackBlur.jpg'
// };

// export default function ProductPage() {
//   const [selectedColor, setSelectedColor] = useState('middle');
//   const [quantity, setQuantity] = useState(1);
//   const [showModal, setShowModal] = useState(false);
//   const router = useRouter();

//   const handleAddToCart = () => {
//     router.push('/rental'); // navigate to your cart page
//     alert('sbhs')
//   };

//   const documentsForRent = [
//     'Name',
//     'Phone Number',
//     'Address & Unit Number',
//     'Email',
//     'Valid Visa Grant',
//     'Passport',
//   ];

//   const importantInformation = [
//     'Delivery bag',
//     'Locks (2)',
//     'Helmet',
//     'Charger',
//     'Basic maintenance',
//   ];

//   const handleClick = () => {
//     setShowModal(true);
//   };

//   // Function to close the modal
//   const handleClose = () => {
//     setShowModal(false);
//   };

//   useEffect(() => {
//     // Ensures Bootstrap's JS is loaded once
//     import('bootstrap/dist/js/bootstrap.bundle.min.js');
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>Cali Cruiser | Electric Bike</title>
//         <meta name="description" content="Buy Cali Cruiser – a powerful all-terrain mid-drive electric bicycle for both trails and city roads. Available now!" />
//         <meta name="keywords" content="electric bike, e-bike, Cali Cruiser, green transport" />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href="https://yourdomain.com/product" />
//       </Head>

//       <Header />
//       <div className="container py-5">
//         <div className="row align-items-start">
//           {/* Left Image */}
//           <div className="col-xl-7 mb-4 only-mobile-center">
//             <Image src={images[selectedColor]} alt="Cali Cruiser" width={600} height={600} className='set-image-bikes'/>

//             <div className="d-sm-flex thumbnail-gallery mt-3 gap-3">
//               {Object.keys(images).map(color => (
//                 <Image
//                   key={color}
//                   src={images[color]}
//                   alt={color}
//                   width={138}
//                   height={120}
//                   // className={`thumb me-4 me-sm-0 mt-3 mt-sm-0 ${selectedColor === color ? 'border border-dark' : ''}`}
//                   className={`thumb ${selectedColor === color ? 'active' : ''}`}
//                   onClick={() => setSelectedColor(color)}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Right Info */}
//           <div className="col-xl-5">
//             <h1 className="text-orange fw-bold">E-bike 8-10h</h1>
//             {/* <small className="text-muted" style={{fontSize:'20px'}}>★ ★ ★ ☆ ☆ (3 Reviews)</small> */}
//             <p className="mt-3">
//               Take to the streets or trails with this powerful all-terrain mid-drive electric bicycle. The City Surfer delivers unmatched performance you won’t find anywhere else.
//             </p>

//             <div className="fs-4 fw-bold">PRICE : $65 AUD <del className="text-muted fs-4 ms-2">$70 AUD</del></div>
//             <div className="mt-3">
//   <h5 className="fw-bold text-orange mb-3">Specifications</h5>
//   <ul className="list-unstyled">
//     <li className="mb-3">
//       <strong>Speed Modes:</strong>
//       <ul className="ps-3 mt-1">
//         <li>Gear 1: 25 km/h</li>
//         <li>Gear 2: 35 km/h</li>
//         <li>Gear 3: 45 km/h</li>
//       </ul>
//     </li>

//     <li className="mb-3">
//       <strong>Display:</strong> Multifunctional LED display, clearly visible under sunlight.
//     </li>

//     <li className="mb-3">
//       <strong>Lighting:</strong>
//       <ul className="ps-3 mt-1">
//         <li>Front high-brightness headlight with wide aperture</li>
//         <li>Rear light with laser projection for night safety</li>
//         {/* <li>Front and rear indicators</li>
//         <li>Breathing light strips on frame and rear rack</li> */}
//       </ul>
//     </li>

//     <li className="mb-3">
//       <strong>Phone Holder:</strong> Comes with USB port (2.1A output) — no need for a power bank.
//     </li>

//     <li className="mb-3">
//       <strong>Safety System:</strong>
//       <ul className="ps-3 mt-1">
//         <li>Smart anti-theft remote (alarm + keyless start)</li>
//         <li>NFC smart unlock feature</li>
//       </ul>
//     </li>

//     <li className="mb-3">
//       <strong>Braking System:</strong> Hydraulic disc brakes (optimized for high power engine).
//     </li>
//     <li className="mb-3">
//       <strong>Battery Hours:</strong> 8-10 hrs.
//     </li>
//     <li className="mb-3">
//       <strong>Battery Life:</strong> 48V 70A.
//     </li>
//   </ul>
// </div>


            
//             <div className="mt-4 d-flex align-items-center gap-3">
//               <button 
//         className="btn" 
//         style={{ background: '#f7931e' }} 
//         onClick={handleClick}
//       >
//         {/* <i className="bi bi-bike text-light me-2" aria-label="bike"></i> */}
//         <span className="text-light">Rental</span>
//       </button>

      
//       {showModal && (
//               <div
//                 className="modal fade show"
//                 style={{
//                   display: 'block',
//                   opacity: 1,
//                   transition: 'opacity 0.3s ease',
//                 }}
//                 aria-labelledby="exampleModalLabel"
//                 aria-hidden="true"
//               >
//                 {/* Modal backdrop with blur effect */}
//                 <div
//                   className="modal-backdrop fade show"
//                   style={{
//                     backdropFilter: 'blur(5px)',  // Apply blur effect to the background
//                     position: 'fixed',
//                     top: 0,
//                     left: 0,
//                     right: 0,
//                     bottom: 0,
//                     zIndex: -1,  // Make sure the backdrop is behind the modal
//                     backgroundColor: 'rgba(0, 0, 0, 0.8)', // Semi-transparent background
//                   }}
//                 ></div>
      
//                 <div
//                   className="modal-dialog"
//                   style={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     minHeight: '100vh',
//                   }}
//                 >
//                   <div className="modal-content">
//                     <div className="modal-header">
//                       <h5 className="modal-title" id="exampleModalLabel" style={{color:'rgb(247, 147, 30)'}}>Social Media Links</h5>
//                       <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
//                     </div>
//                     <div className="modal-body">
//                       {/* Icons and Labels for Instagram, Google, and Call */}
//                       <div className="d-flex justify-content-around">
//                         <a target='_blank'  href="https://www.instagram.com/beyondbikes_vic/?igsh=MTRzcnZ6OG1yc3YzMg%3D%3D" className="text-decoration-none text-center"><Image src={Instagram} height={30} width={30}/><br /><span style={{color:'rgb(247, 147, 30)',fontSize:'17px'}}>Instagram</span></a>
//                   <a target='_blank' href="https://g.co/kgs/66Atysa" className="text-decoration-none text-center"><Image src={Google} height={30} width={30}/><br /><span style={{color:'rgb(247, 147, 30)',fontSize:'17px'}}>Google</span></a>
//                   <a target='_blank' href="tel:+61422032961" className="text-decoration-none text-center" title="Call Us">
//         <Image src={Call} height={30} width={30}/><br /><span style={{color:'rgb(247, 147, 30)',fontSize:'17px'}}>Call</span>
//       </a>
//                       </div>
//                     </div>
//                     <div className="modal-footer">
//                       <button type="button" className="btn" style={{background:'#f7931e',color:'white'}} onClick={handleClose}>Close</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}


      
//             </div>

//             {/* <div className="mt-3">
//               <span className="badge rounded-pill border border-dark text-dark">Urban</span>
//             </div> */}
//           </div>
//         </div>
//       </div>
//       <div className="container text-center py-4">
      
//     <div className="description-section">
//   <h1 className="section-title" style={{color:'rgb(247,147,30)'}}>Description</h1>

//   <div className="insurance-box">
//     <h2 className="insurance-title">Insurance Offered</h2>
//     <p className="positive">✔ Insurance only covers theft of battery.</p>
//     <p className="negative">✘ No accident compensation.</p>
//     <p className="negative">✘ No third-party costs insured.</p>
//   </div>

//   <h2 className="rental-title">Rental Information</h2>

//   <div className="info-cards">
//     <div className="info-card">
//       <div className="info-header">Documents for Rent</div>
//       <ul className="info-list">
//         <li>1. Name</li>
//         <li>2. Phone Number</li>
//         <li>3. Address & Unit Number</li>
//         <li>4. Email</li>
//         <li>5. Valid Visa Grant</li>
//         <li>6. Passport</li>
//       </ul>
//     </div>

//     <div className="info-card">
//       <div className="info-header">Our Rental Fee Includes</div>
//       <ul className="info-list">
//         <li>1. Delivery bag</li>
//         <li>2. Locks(2)</li>
//         <li>3. Helmet</li>
//         <li>4. Charger</li>
//         <li>5. Basic maintenance</li>
//       </ul>
//     </div>
//   </div>
// </div>

//         {/* <p className="mt-3 fs-5 text-muted px-2 px-md-5">
//          The MK220 new generation 20 Cargo E-Bike comes with our Battery Efficiency Saving (BES) technology.  This new BES technology give riders 20% more of their trip is distance and 10% more of the gradeability and 10% less of its weight than our old generation .  </p> */}

//         <div className="row g-4 mt-5">
//           <div className="col-md-4">
//             <div className="border rounded py-4 px-2 h-100">
//               <Image src="/images/speed.svg" alt="Top Speed" width={40} height={40} />
//               <p className="text-muted mb-1 mt-3 small">Top Speed</p>
//               <h5 className="text-orange fw-bold">45 MPH</h5>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="border rounded py-4 px-2 h-100">
//               <Image src="/images/running.svg" alt="Average Miles" width={40} height={40} />
//               <p className="text-muted mb-1 mt-3 small">Battery Hours</p>
//               <h5 className="text-orange fw-bold">8-10 hrs</h5>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="border rounded py-4 px-2 h-100">
//               <Image src="/images/battery.svg" alt="Battery Life" width={40} height={40} />
//               <p className="text-muted mb-1 mt-3 small">Battery Life</p>
//               <h5 className="text-orange fw-bold">48V 70A</h5>
//             </div>
//           </div>
          
//         </div>
//       </div>
//            <Footer />
//     </>
//   );
// }

// SEO
'use client';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import '../styles/productdetails.css'
import Header from '../components/Header';
import { useRouter } from 'next/navigation';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from '../components/Footer';
import Instagram from '../../../public/images/instagram-latest.svg';
import Google from '../../../public/images/google-latest.svg';
import Call from '../../../public/images/phone-latest.svg';

const images = {
  front: '/images/BlueCycleProductDetailsFront.jpg',
  back: '/images/BlueCycleProductDetailsAngleBlur.jpg',
  middle: '/images/BlueCycleProductDetailsFrontLatest.jpg',
  battery:'/images/BlueCycleProductDetailsBackBlur.jpg'
};

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState('middle');
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleClick = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      <Head>
        {/* Primary SEO Tags */}
        <title>E-bike 8-10h E-Bike | Beyond Bikes Electric Bicycle</title>
        <meta name="description" content="Explore E-bike 8-10h E-Bike by Beyond Bikes. Rent or buy this all-terrain electric bike with 8-10 hours battery, safety features, and mid-drive power." />
        <meta name="keywords" content="E-bike 8-10h, Beyond Bikes, electric bike, e-bike, all-terrain, rental, battery life, mid-drive, eco transport" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/product/cali-cruiser" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="product" />
        <meta property="og:title" content="Cali Cruiser E-Bike | Beyond Bikes Electric Bicycle" />
        <meta property="og:description" content="Explore Cali Cruiser E-Bike by Beyond Bikes. Rent or buy this all-terrain electric bike with 8-10 hours battery, safety features, and mid-drive power." />
        <meta property="og:image" content="https://yourdomain.com/images/BlueCycleProductDetailsFront.jpg" />
        <meta property="og:url" content="https://yourdomain.com/product/cali-cruiser" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cali Cruiser E-Bike | Beyond Bikes Electric Bicycle" />
        <meta name="twitter:description" content="Explore Cali Cruiser E-Bike by Beyond Bikes. Rent or buy this all-terrain electric bike with 8-10 hours battery, safety features, and mid-drive power." />
        <meta name="twitter:image" content="https://yourdomain.com/images/BlueCycleProductDetailsFront.jpg" />

        {/* Structured Data for Google Rich Results */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Product",
          "name": "Cali Cruiser E-Bike",
          "image": [
            "https://yourdomain.com/images/BlueCycleProductDetailsFront.jpg",
            "https://yourdomain.com/images/BlueCycleProductDetailsAngleBlur.jpg",
            "https://yourdomain.com/images/BlueCycleProductDetailsFrontLatest.jpg",
            "https://yourdomain.com/images/BlueCycleProductDetailsBackBlur.jpg"
          ],
          "description": "Cali Cruiser E-Bike by Beyond Bikes. Rent or buy this all-terrain electric bike with 8-10 hours battery, safety features, and mid-drive power.",
          "sku": "CC-EBIKE-001",
          "brand": {
            "@type": "Brand",
            "name": "Beyond Bikes"
          },
          "offers": {
            "@type": "Offer",
            "url": "https://yourdomain.com/product/cali-cruiser",
            "priceCurrency": "AUD",
            "price": "65",
            "availability": "https://schema.org/InStock"
          }
        })}} />
      </Head>

      <Header />
      
      <main>
        <div className="container py-5">
          <div className="row align-items-start">
            {/* Left Image */}
            <div className="col-xl-7 mb-4 only-mobile-center">
              <Image src={images[selectedColor]} alt="E-bike 8-10h E-Bike image" width={600} height={600} className='set-image-bikes'/>
              <div className="d-sm-flex thumbnail-gallery mt-3 gap-3">
                {Object.keys(images).map(color => (
                  <Image
                    key={color}
                    src={images[color]}
                    alt={`Cali Cruiser - ${color} view`}
                    width={138}
                    height={120}
                    className={`thumb ${selectedColor === color ? 'active' : ''}`}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>

            {/* Right Info */}
            <div className="col-xl-5">
              <h1 className="text-orange fw-bold">E-Bike 8-10h</h1>
              <p className="mt-3">
                Take to the streets or trails with this powerful all-terrain mid-drive electric bicycle. The Cali Cruiser delivers unmatched performance and reliability.
              </p>
              <div className="fs-4 fw-bold">PRICE : $65 AUD <del className="text-muted fs-4 ms-2">$70 AUD</del></div>

              {/* Specifications */}
              <div className="mt-3">
                <h2 className="fw-bold text-orange mb-3">Specifications</h2>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <strong>Speed Modes:</strong>
                    <ul className="ps-3 mt-1">
                      <li>Gear 1: 25 km/h</li>
                      <li>Gear 2: 35 km/h</li>
                      <li>Gear 3: 45 km/h</li>
                    </ul>
                  </li>
                  <li className="mb-3"><strong>Display:</strong> Multifunctional LED display, visible under sunlight.</li>
                  <li className="mb-3">
                    <strong>Lighting:</strong>
                    <ul className="ps-3 mt-1">
                      <li>Front high-brightness headlight</li>
                      <li>Rear laser-projected tail light</li>
                    </ul>
                  </li>
                  <li className="mb-3"><strong>Phone Holder:</strong> USB port (2.1A output).</li>
                  <li className="mb-3">
                    <strong>Safety System:</strong>
                    <ul className="ps-3 mt-1">
                      <li>Smart anti-theft remote</li>
                      <li>NFC smart unlock</li>
                    </ul>
                  </li>
                  <li className="mb-3"><strong>Braking System:</strong> Hydraulic disc brakes.</li>
                  <li className="mb-3"><strong>Battery Hours:</strong> 8-10 hrs.</li>
                  <li className="mb-3"><strong>Battery Life:</strong> 48V 70A.</li>
                </ul>
              </div>

              {/* Rental Button */}
              <div className="mt-4 d-flex align-items-center gap-3">
                <button className="btn" style={{ background: '#f7931e' }} onClick={handleClick}>
                  <span className="text-light">Rental</span>
                </button>
              </div>

              {/* Modal */}
              {showModal && (
                <div className="modal fade show" style={{display: 'block', opacity: 1}}>
                  <div className="modal-backdrop fade show" style={{backdropFilter: 'blur(5px)', position: 'fixed', top:0,left:0,right:0,bottom:0,zIndex:-1,backgroundColor:'rgba(0,0,0,0.8)'}}></div>
                  <div className="modal-dialog" style={{display:'flex',justifyContent:'center',alignItems:'center',minHeight:'100vh'}}>
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" style={{color:'rgb(247,147,30)'}}>Social Media Links</h5>
                        <button type="button" className="btn-close" onClick={handleClose}></button>
                      </div>
                      <div className="modal-body">
                        <div className="d-flex justify-content-around">
                          <a target='_blank' href="https://www.instagram.com/beyondbikes_vic/" className="text-decoration-none text-center">
                            <Image src={Instagram} height={30} width={30}/><br/><span style={{color:'rgb(247,147,30)',fontSize:'17px'}}>Instagram</span>
                          </a>
                          <a target='_blank' href="https://g.co/kgs/66Atysa" className="text-decoration-none text-center">
                            <Image src={Google} height={30} width={30}/><br/><span style={{color:'rgb(247,147,30)',fontSize:'17px'}}>Google</span>
                          </a>
                          <a target='_blank' href="tel:+61422032961" className="text-decoration-none text-center">
                            <Image src={Call} height={30} width={30}/><br/><span style={{color:'rgb(247,147,30)',fontSize:'17px'}}>Call</span>
                          </a>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn" style={{background:'#f7931e',color:'white'}} onClick={handleClose}>Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Description Section */}
        <section className="container text-center py-4" aria-labelledby="description-title">
                  <h2 id="description-title" className="fw-bold mb-4" style={{ color: 'rgb(247,147,30)' }}>Description</h2>
        
                  <article className='insurance-box fs-5'>
                    <p>Insurance Offered</p>
                    <p>✔ Insurance only covers theft of battery.</p>
                    <p>✘ No accident compensation.</p>
                    <p>✘ No third-party costs insured.</p>
                  </article>
        
                  <article>
                    <h3 style={{ color: 'rgb(247,147,30)' }} className='mb-5'>Rental Information</h3>
                    <div className="info-cards">
                      <div className="info-card">
                        <h4 className="info-header">Documents for Rent</h4>
                        <ul className="info-list">
                          <li style={{listStyle:'none'}}>Name</li>
                          <li style={{listStyle:'none'}}>Phone Number</li>
                          <li style={{listStyle:'none'}}>Address & Unit Number</li>
                          <li style={{listStyle:'none'}}>Email</li>
                          <li style={{listStyle:'none'}}>Valid Visa Grant</li>
                          <li style={{listStyle:'none'}}>Passport</li>
                        </ul>
                      </div>
                      <div className="info-card">
                        <h4 className="info-header">Our Rental Fee Includes</h4>
                        <ul className="info-list">
                          <li style={{listStyle:'none'}}>Delivery bag</li>
                          <li style={{listStyle:'none'}}>Locks (2)</li>
                          <li style={{listStyle:'none'}}>Helmet</li>
                          <li style={{listStyle:'none'}}>Charger</li>
                          <li style={{listStyle:'none'}}>Basic maintenance</li>
                        </ul>
                      </div>
                    </div>
                  </article>
        
                  <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                    <div className="col-md-4">
                      <div className="border rounded py-4 px-2 h-100">
                        <Image src="/images/speed.svg" alt="Top Speed Icon" width={40} height={40} />
                        <p className="text-muted mb-1 mt-3 small">Top Speed</p>
                        <h5 className="text-orange fw-bold">45 MPH</h5>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="border rounded py-4 px-2 h-100">
                        <Image src="/images/running.svg" alt="Battery Hours Icon" width={40} height={40} />
                        <p className="text-muted mb-1 mt-3 small">Battery Hours</p>
                        <h5 className="text-orange fw-bold">8-10 hours</h5>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="border rounded py-4 px-2 h-100">
                        <Image src="/images/battery.svg" alt="Battery Life Icon" width={40} height={40} />
                        <p className="text-muted mb-1 mt-3 small">Battery Life</p>
                        <h5 className="text-orange fw-bold">48V 70A</h5>
                      </div>
                    </div>
                  </div>
                </section>
      </main>

      <Footer />
    </>
  );
}
