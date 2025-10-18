'use client';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import '../styles/productdetails.css';
import Header from '../components/Header';
import { useRouter } from 'next/navigation';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from '../components/Footer';
import Instagram from '../../../public/images/instagram-latest.svg';
import Google from '../../../public/images/google-latest.svg';
import Call from '../../../public/images/phone-latest.svg';

const images = {
  front: '/images/CartoonCycleProductdetailsFrontBlur.jpg',
  back: '/images/CartoonCycleProductdetailsBackBlur.jpg',
  middle: '/images/CartoonCycleProductdetailsAngleBlur.jpg',
  battery:'/images/CartoonCycleProductdetailsWholeBlur.jpg'
};

export default function CartoonDetailsPage() {
  const [selectedColor, setSelectedColor] = useState('front');
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const [openItem, setOpenItem] = useState(null);
  const [activeTab, setActiveTab] = useState("features");


  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };


  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      <Head>
        <title>E-bikes-6-8h Bikes | Beyond Bikes Electric Bike</title>
        <meta name="description" content="Explore the Cartoon Bikes E-bike 6-8h by Beyond Bikes. Learn specifications, rental info, insurance, and battery details. Book your ride now!" />
        <meta name="keywords" content="Beyond Bikes, Cartoon Bikes, electric bike, e-bike, rental, battery life, mid-drive, all-terrain" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourdomain.com/product/cartoon" />

        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="Cartoon Bikes | Beyond Bikes Electric Bike" />
        <meta property="og:description" content="Explore the Cartoon Bikes E-bike 6-8h by Beyond Bikes. Learn specifications, rental info, insurance, and battery details. Book your ride now!" />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://yourdomain.com/product/cartoon" />
        <meta property="og:image" content="https://yourdomain.com/images/CartoonCycleProductdetailsFrontBlur.jpg" />
      </Head>

      <Header />

      <main className="container py-5" itemScope itemType="https://schema.org/Product">
        <div className="row align-items-start">
          {/* Left Image Section */}
          <div className="col-xl-7 mb-4 only-mobile-center">
            <Image 
              src={images[selectedColor]} 
              alt={`Cartoon Bikes E-bike view: ${selectedColor}`} 
              width={600} 
              height={600} 
              className='set-image-bikes'
              itemProp="image"
            />

            <div className="d-sm-flex thumbnail-gallery mt-3">
              {Object.keys(images).map(color => (
                <img
                  key={color}
                  src={images[color]}
                  alt={`Cartoon Bikes ${color} view`}
                  className={`thumb ${selectedColor === color ? 'active' : ''}`}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          {/* Right Info Section */}
          <div className="col-xl-5">
            <h1 className="text-center fw-bold" itemProp="name">E-bike blue 6-8h</h1>
            <p className="fs-4 text-center fw-bold" itemProp="offers" itemScope itemType="https://schema.org/Offer">
              PRICE : $70 AUD <del className="text-muted fs-4 ms-2">$80 AUD</del>
              <meta itemProp="price" content="60" />
              <meta itemProp="priceCurrency" content="AUD" />
              <link itemProp="availability" href="https://schema.org/InStock" />
            </p>
            
          <section className="container my-4">
        <div className="row g-3">
  <div className="col-6">
    <div className="spec-box">
      <i className="bi bi-battery-full"></i>
      <div>
        <strong>6-8 hours</strong>
        <p>Battery Hours</p>
      </div>
    </div>
  </div>

  <div className="col-6">
    <div className="spec-box">
      <i className="bi bi-lightning-charge"></i>
      <div>
        <strong>500W</strong>
        <p>Motor</p>
      </div>
    </div>
  </div>

  <div className="col-6">
    <div className="spec-box">
      <i className="bi bi-clock"></i>
      <div>
        <strong>48V 60A</strong>
        <p>Battery Life</p>
      </div>
    </div>
  </div>

  <div className="col-6">
    <div className="spec-box">
      <i className="bi bi-wrench"></i>
      <div>
        <strong>Included</strong>
        <p>Maintenance</p>
      </div>
    </div>
  </div>
</div>

      </section>

            {/* <section class="mt-3" itemProp="description">
  <h2 class="fw-bold text-orange mb-3">Specifications</h2>

  <div class="accordion" id="specAccordion">
  
    <div class="accordion-item">
      <h3 class="accordion-header" id="headingSpeed">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSpeed" aria-expanded="false" aria-controls="collapseSpeed">
          <strong>Speed Modes</strong>
        </button>
      </h3>
      <div id="collapseSpeed" class="accordion-collapse collapse" aria-labelledby="headingSpeed" data-bs-parent="#specAccordion">
        <div class="accordion-body">
          <ul>
            <li>Gear 1: 25 km/h</li>
            <li>Gear 2: 35 km/h</li>
            <li>Gear 3: 45 km/h</li>
          </ul>
        </div>
      </div>
    </div>

  
    <div class="accordion-item">
      <h3 class="accordion-header" id="headingDisplay">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDisplay" aria-expanded="false" aria-controls="collapseDisplay">
          <strong>Display</strong>
        </button>
      </h3>
      <div id="collapseDisplay" class="accordion-collapse collapse" aria-labelledby="headingDisplay" data-bs-parent="#specAccordion">
        <div class="accordion-body">
          Multifunctional LED display, clearly visible under sunlight.
        </div>
      </div>
    </div>

  
    <div class="accordion-item">
      <h3 class="accordion-header" id="headingLight">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseLight" aria-expanded="false" aria-controls="collapseLight">
          <strong>Lighting</strong>
        </button>
      </h3>
      <div id="collapseLight" class="accordion-collapse collapse" aria-labelledby="headingLight" data-bs-parent="#specAccordion">
        <div class="accordion-body">
          <ul>
            <li>Front high-brightness headlight with wide aperture</li>
            <li>Rear light with laser projection for night safety</li>
          </ul>
        </div>
      </div>
    </div>

   
    <div class="accordion-item">
      <h3 class="accordion-header" id="headingHolder">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseHolder" aria-expanded="false" aria-controls="collapseHolder">
          <strong>Phone Holder</strong>
        </button>
      </h3>
      <div id="collapseHolder" class="accordion-collapse collapse" aria-labelledby="headingHolder" data-bs-parent="#specAccordion">
        <div class="accordion-body">
          USB port (2.1A output)
        </div>
      </div>
    </div>

   
    <div class="accordion-item">
      <h3 class="accordion-header" id="headingSafety">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSafety" aria-expanded="false" aria-controls="collapseSafety">
          <strong>Safety System</strong>
        </button>
      </h3>
      <div id="collapseSafety" class="accordion-collapse collapse" aria-labelledby="headingSafety" data-bs-parent="#specAccordion">
        <div class="accordion-body">
          <ul>
            <li>Smart anti-theft remote (alarm + keyless start)</li>
            <li>NFC smart unlock</li>
          </ul>
        </div>
      </div>
    </div>

    
    <div class="accordion-item">
      <h3 class="accordion-header" id="headingBrake">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBrake" aria-expanded="false" aria-controls="collapseBrake">
          <strong>Braking System</strong>
        </button>
      </h3>
      <div id="collapseBrake" class="accordion-collapse collapse" aria-labelledby="headingBrake" data-bs-parent="#specAccordion">
        <div class="accordion-body">
          Hydraulic disc brakes
        </div>
      </div>
    </div>

   
    <div class="accordion-item">
      <h3 class="accordion-header" id="headingHours">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseHours" aria-expanded="false" aria-controls="collapseHours">
          <strong>Battery Hours</strong>
        </button>
      </h3>
      <div id="collapseHours" class="accordion-collapse collapse" aria-labelledby="headingHours" data-bs-parent="#specAccordion">
        <div class="accordion-body">
          6–8 hours
        </div>
      </div>
    </div>

    
    <div class="accordion-item">
      <h3 class="accordion-header" id="headingLife">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseLife" aria-expanded="false" aria-controls="collapseLife">
          <strong>Battery Life</strong>
        </button>
      </h3>
      <div id="collapseLife" class="accordion-collapse collapse" aria-labelledby="headingLife" data-bs-parent="#specAccordion">
        <div class="accordion-body">
          48V 50A
        </div>
      </div>
    </div>
  </div>
</section> */}

<section className="mt-3" itemScope itemType="https://schema.org/Product">
        <h2 className="fw-bold text-orange mb-3">Specifications</h2>

        {/* NAV TABS */}
        <ul className="nav nav-pills mb-3 bg-light p-1 rounded-pill d-inline-flex">
          <li className="nav-item">
            <button
              className={`nav-link rounded-pill ${activeTab === "performance" ? "active" : ""}`}
              onClick={() => setActiveTab("performance")}
            >
              Performance
            </button>
          </li>
          
          <li className="nav-item">
            <button
              className={`nav-link rounded-pill ${activeTab === "features" ? "active" : ""}`}
              onClick={() => setActiveTab("features")}
            >
              Features
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link rounded-pill ${activeTab === "safety" ? "active" : ""}`}
              onClick={() => setActiveTab("safety")}
            >
              Safety
            </button>
          </li>
        </ul>

        {/* TAB CONTENT */}
        <div>
          {/* Tab 1: Features */}
          {activeTab === "features" && (
            <>
              {/* Display */}
              <div className="spec-item">
                <button
                  className="spec-toggle"
                  onClick={() => toggleItem("display")}
                  aria-expanded={openItem === "display"}
                >
                  <strong>Display</strong>
                  <span className="toggle-icon">
                    {openItem === "display" ? "−" : "+"}
                  </span>
                </button>
                {openItem === "display" && (
                  <div className="spec-content">
                    Multifunctional LED display, clearly visible under sunlight.
                  </div>
                )}
              </div>

              {/* Lighting */}
              <div className="spec-item">
                <button
                  className="spec-toggle"
                  onClick={() => toggleItem("lighting")}
                  aria-expanded={openItem === "lighting"}
                >
                  <strong>Lighting</strong>
                  <span className="toggle-icon">
                    {openItem === "lighting" ? "−" : "+"}
                  </span>
                </button>
                {openItem === "lighting" && (
                  <div className="spec-content">
                    <ul>
                      <li>Front high-brightness headlight with wide aperture</li>
                      <li>Rear light with laser projection for night safety</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Phone Holder */}
              <div className="spec-item">
                <button
                  className="spec-toggle"
                  onClick={() => toggleItem("holder")}
                  aria-expanded={openItem === "holder"}
                >
                  <strong>Phone Holder</strong>
                  <span className="toggle-icon">
                    {openItem === "holder" ? "−" : "+"}
                  </span>
                </button>
                {openItem === "holder" && (
                  <div className="spec-content">USB port (2.1A output)</div>
                )}
              </div>
            </>
          )}

          {/* Tab 2: Safety */}
          {activeTab === "safety" && (
            <>
              {/* Safety System */}
              <div className="spec-item">
                <button
                  className="spec-toggle"
                  onClick={() => toggleItem("safety")}
                  aria-expanded={openItem === "safety"}
                >
                  <strong>Safety System</strong>
                  <span className="toggle-icon">
                    {openItem === "safety" ? "−" : "+"}
                  </span>
                </button>
                {openItem === "safety" && (
                  <div className="spec-content">
                    <ul>
                      <li>Smart anti-theft remote (alarm + keyless start)</li>
                      <li>NFC smart unlock</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Braking System */}
              <div className="spec-item">
                <button
                  className="spec-toggle"
                  onClick={() => toggleItem("brake")}
                  aria-expanded={openItem === "brake"}
                >
                  <strong>Braking System</strong>
                  <span className="toggle-icon">
                    {openItem === "brake" ? "−" : "+"}
                  </span>
                </button>
                {openItem === "brake" && (
                  <div className="spec-content">Hydraulic disc brakes</div>
                )}
              </div>

              {/* Battery Hours */}
              <div className="spec-item">
                <button
                  className="spec-toggle"
                  onClick={() => toggleItem("hours")}
                  aria-expanded={openItem === "hours"}
                >
                  <strong>Battery Hours</strong>
                  <span className="toggle-icon">
                    {openItem === "hours" ? "−" : "+"}
                  </span>
                </button>
                {openItem === "hours" && (
                  <div className="spec-content">6–8 hours</div>
                )}
              </div>
            </>
          )}

          {/* Tab 3: Performance */}
          {activeTab === "performance" && (
            <>
              {/* Speed Modes */}
              <div className="spec-item">
                <button
                  className="spec-toggle"
                  onClick={() => toggleItem("speed")}
                  aria-expanded={openItem === "speed"}
                >
                  <strong>Speed Modes</strong>
                  <span className="toggle-icon">
                    {openItem === "speed" ? "−" : "+"}
                  </span>
                </button>
                {openItem === "speed" && (
                  <div className="spec-content">
                    <ul>
                      <li>Gear 1: 25 km/h</li>
                      <li>Gear 2: 35 km/h</li>
                      <li>Gear 3: 45 km/h</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Battery Life */}
              <div className="spec-item">
                <button
                  className="spec-toggle"
                  onClick={() => toggleItem("life")}
                  aria-expanded={openItem === "life"}
                >
                  <strong>Battery Life</strong>
                  <span className="toggle-icon">
                    {openItem === "life" ? "−" : "+"}
                  </span>
                </button>
                {openItem === "life" && (
                  <div className="spec-content">48V 50A</div>
                )}
              </div>
            </>
          )}
        </div>
      </section>

            <button 
              className="mt-3 rent-now" 
              style={{ background: 'rgb(26, 59, 25)' }} 
              onClick={handleClick}
              aria-label="Open Rental Modal"
            >
              <span className="text-light">Rent Now</span>
            </button>

            {showModal && (
              <div className="modal fade show" style={{ display: 'block', opacity: 1, transition: 'opacity 0.3s ease' }} aria-labelledby="modalLabel" aria-hidden="false">
                <div className="modal-backdrop fade show" style={{ backdropFilter: 'blur(5px)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, backgroundColor: 'rgba(0,0,0,0.8)' }}></div>

                <div className="modal-dialog d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title text-orange" id="modalLabel">Social Media Links</h5>
                      <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <div className="d-flex justify-content-around">
                        <a target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/beyondbikes_vic/" className="text-decoration-none text-center">
                          <Image src={Instagram} height={30} width={30} alt="Instagram Logo"/>
                          <br /><span className="text-orange fs-6">Instagram</span>
                        </a>
                        <a target='_blank' rel="noopener noreferrer" href="https://g.co/kgs/66Atysa" className="text-decoration-none text-center">
                          <Image src={Google} height={30} width={30} alt="Google Logo"/>
                          <br /><span className="text-orange fs-6">Google</span>
                        </a>
                        <a target='_blank' rel="noopener noreferrer" href="tel:+61422032961" className="text-decoration-none text-center" title="Call Us">
                          <Image src={Call} height={30} width={30} alt="Phone Logo"/>
                          <br /><span className="text-orange fs-6">Call</span>
                        </a>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn" style={{ background:'#1A3B19', color:'white' }} onClick={handleClose}>Close</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        
        {/* <section className="container py-4" aria-labelledby="description-title">
                  <h2 id="description-title" className="fw-bold mb-4" style={{ color: 'rgb(26, 59, 25)' }}>Description</h2>
        
                  <article className='insurance-box fs-5'>
                    <p>Insurance Offered</p>
                    <p>✔ Insurance only covers theft of battery.</p>
                    <p>✘ No accident compensation.</p>
                    <p>✘ No third-party costs insured.</p>
                  </article>
        
                 
                  
                  <article>
                    <h3 style={{ color: 'rgb(26, 59, 25)' }} className='mt-3 mb-5'>Rental Information</h3>
                    <div className="info-cards">
    
    <div className="info-card">
      <h4 className="info-header">Documents for Rent</h4>
      <ul className="info-list">
        <li>Name</li>
        <li>Phone Number</li>
        <li>Address & Unit Number</li>
        <li>Email</li>
        <li>Valid Visa Grant</li>
        <li>Passport</li>
      </ul>
    </div>

   
    <div className="info-card">
      <h4 className="info-header">Our Rental Fee Includes</h4>
      <ul className="info-list">
        <li>Delivery bag</li>
        <li>Locks (2)</li>
        <li>Helmet</li>
        <li>Charger</li>
        <li>Basic maintenance</li>
      </ul>
    </div>
  </div>

                  </article>
        
                  
                </section> */}
      </main>
      <Footer />
    </>
  );
}
