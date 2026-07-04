"use client";

import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { notFound } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { products } from "@/app/datasale/product";

export default function ProductPage({ params }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) notFound();

  const images = [product.image, ...(product.gallery || [])];
  const [activeImg, setActiveImg] = useState(images[0]);

  const specEntries = Object.entries(product.specifications || {});

  return (
    <>
      <Head>
        <title>{product.name} | Beyond Bikes Melbourne</title>
        <meta name="description" content={product.shortDescription} />
        {/* Bootstrap 5 CSS via CDN */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600;700&display=swap");

        :root {
          --bg-dark: #050b08;
          --panel-bg: rgba(13, 26, 20, 0.8);
          --accent-green: #4ade80;
          --accent-hover: #22c55e;
          --border-glow: rgba(74, 222, 128, 0.15);
          --text-muted: #9db5a8;
          --text-light: #e2f0e7;
        }

        body {
          background-color: var(--bg-dark);
          color: var(--text-light);
          font-family: "Inter", sans-serif;
          overflow-x: hidden;
        }

        /* Ambient Glow Vectors */
        .ambient-glow-1 {
          position: absolute;
          top: 0;
          left: 0;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        /* Typography fixes */
        .font-display {
          font-family: "Space Grotesk", sans-serif;
        }

        .gradient-text {
          background: linear-gradient(90deg, #ffffff 0%, #c7f9d6 60%, var(--accent-green) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Layout Panels */
        .sticky-panel {
          position: sticky;
          top: 100px;
        }

        .custom-card {
          background: var(--panel-bg);
          border: 1px solid var(--border-glow);
          backdrop-filter: blur(12px);
          border-radius: 20px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        }

        /* Interactive Showcase Image Box */
        .img-display-box {
          position: relative;
          background: linear-gradient(145deg, #0e221a, #07130e);
          border-radius: 16px;
          min-height: 440px;
          overflow: hidden;
        }

        .img-display-box img {
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .img-display-box:hover img {
          transform: scale(1.05) rotate(-0.5deg);
        }

        /* Dynamic Micro-Sliders / Thumbnails */
        .thumb-scroll-row {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          white-space: nowrap;
          padding-bottom: 8px;
        }

        .thumb-scroll-row::-webkit-scrollbar {
          height: 5px;
        }

        .thumb-scroll-row::-webkit-scrollbar-thumb {
          background: rgba(74, 222, 128, 0.2);
          border-radius: 10px;
        }

        .thumb-wrapper-btn {
          flex: 0 0 90px;
          height: 90px;
          background: #0d1a14;
          border: 2px solid transparent;
          border-radius: 12px;
          padding: 4px;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .thumb-wrapper-btn:hover {
          transform: translateY(-3px);
          border-color: rgba(74, 222, 128, 0.5);
        }

        .thumb-wrapper-btn.active {
          border-color: var(--accent-green);
          box-shadow: 0 0 15px rgba(74, 222, 128, 0.25);
          background: #14291f;
        }

        /* Interactive Specifications Layout Row */
        .spec-item-row {
          border-bottom: 1px solid rgba(74, 222, 128, 0.08);
          transition: all 0.2s ease;
        }

        .spec-item-row:last-child {
          border-bottom: none;
        }

        .spec-item-row:hover {
          background: rgba(74, 222, 128, 0.03);
          padding-left: 6px;
          padding-right: 6px;
          border-radius: 8px;
        }

        /* Premium Buttons */
        .btn-gradient-primary {
          background: linear-gradient(135deg, var(--accent-hover), var(--accent-green));
          color: #050b08;
          font-weight: 700;
          border: none;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
        }

        .btn-gradient-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(74, 222, 128, 0.25);
          color: #050b08;
        }

        .btn-outline-glass {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(74, 222, 128, 0.2);
          color: #c2d3c8;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .btn-outline-glass:hover {
          background: rgba(74, 222, 128, 0.05);
          border-color: var(--accent-green);
          color: var(--accent-green);
          transform: translateY(-2px);
        }

        /* Responsive Fixes */
        @media (max-width: 991.98px) {
          .sticky-panel {
            position: static;
          }
          .img-display-box {
            min-height: 320px;
          }
        }
      `}</style>

      <div className="position-relative min-vh-screen">
        <div className="ambient-glow-1" />

        <Header />

        <main className="container position-relative z-1 py-4 py-md-5">
          
          {/* Breadcrumb Navigation Component */}
          <nav className="d-flex align-items-center gap-2 mb-4 mb-md-5 text-nowrap overflow-x-auto pb-2" style={{ fontSize: "14px" }}>
            <a href="/" className="text-decoration-none" style={{ color: "var(--text-muted)" }}>Home</a>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>/</span>
            <a href="/products" className="text-decoration-none" style={{ color: "var(--text-muted)" }}>E-Bikes</a>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>/</span>
            <span className="text-white font-medium">{product.name}</span>
          </nav>

          {/* Core Master Grid Framework Layout */}
          <div className="row g-4 g-lg-5">
            
            {/* LEFT SIDE: Adaptive Interactive Media Deck */}
            <div className="col-12 col-lg-7">
              <div className="sticky-panel d-flex flex-column gap-3">
                <div className="custom-card p-3 p-sm-4">
                  <div className="img-display-box d-flex align-items-center justify-content-center p-3">
                    <Image
                      src={activeImg}
                      alt={product.name}
                      width={700}
                      height={500}
                      priority
                      style={{
                        width: "100%",
                        height: "auto",
                        maxHeight: "380px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>

                {/* Micro Thumbnail Selection Row Slider */}
                <div className="thumb-scroll-row px-1">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      className={`thumb-wrapper-btn ${activeImg === img ? "active" : ""}`}
                      onClick={() => setActiveImg(img)}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} frame view ${index + 1}`}
                        width={90}
                        height={90}
                        style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Granular Meta Information details & Actions */}
            <div className="col-12 col-lg-5">
              <div className="d-flex flex-column gap-4">
                
                {/* Product Name Header Segment */}
                <div>
                  {product.tag && (
                    <span className="badge rounded-pill px-3 py-2 mb-3 text-uppercase tracking-wider font-monospace"
                          style={{ background: "rgba(34, 197, 94, 0.12)", border: "1px solid rgba(34, 197, 94, 0.25)", color: "var(--accent-green)", fontSize: "11px", letterSpacing: "1px" }}>
                      {product.tag}
                    </span>
                  )}
                  <h1 className="font-display gradient-text fw-bold mb-3 display-5">
                    {product.name}
                  </h1>
                  <p className="m-0 leading-relaxed" style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: "1.7" }}>
                    {product.shortDescription}
                  </p>
                </div>

                {/* Smart Pricing Action Deck */}
                <div className="custom-card p-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
                  <div>
                    <small className="text-uppercase tracking-wider d-block mb-1" style={{ color: "var(--text-muted)", fontSize: "11px" }}>Current Investment</small>
                    <div className="d-flex align-items-baseline gap-3">
                      <span className="font-display fs-2 fw-bold" style={{ color: "var(--accent-green)" }}>
                        A${product.price.toLocaleString()}
                      </span>
                      {product.oldPrice && (
                        <span className="text-decoration-line-through text-muted fs-6">
                          A${product.oldPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>

                  {product.oldPrice && (
                    <span className="badge rounded-pill px-3 py-2 btn-gradient-primary text-dark fw-bold" style={{ fontSize: "12px" }}>
                      Save A${(product.oldPrice - product.price).toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Technical Metric Specifications Module Data Block */}
                <div className="custom-card p-4 position-relative overflow-hidden">
                  <div className="position-absolute bg-success top-0 start-0 bottom-0" style={{ width: "3px", background: "linear-gradient(to bottom, var(--accent-green), transparent)" }} />
                  <h2 className="text-uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)", fontSize: "12px", fontWeight: "700" }}>
                    Technical Specifications
                  </h2>

                  <div className="d-flex flex-column">
                    {specEntries.map(([key, value]) => (
                      <div key={key} className="spec-item-row d-flex flex-column flex-sm-row justify-content-sm-between py-3 gap-1 gap-sm-3">
                        <span style={{ color: "var(--text-muted)", fontSize: "14px" }}>
                          {key
                            .replace(/([A-Z])/g, " $1")
                            .replace(/^./, (s) => s.toUpperCase())}
                        </span>
                        <span className="fw-semibold text-white text-sm-end" style={{ fontSize: "14px" }}>
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Primary Action Button Grid Panel Layout */}
                <div className="d-flex flex-column flex-sm-row gap-3 pt-2">
                  <button className="btn btn-gradient-primary flex-grow-1 py-3 rounded-3">
                    Buy Now
                  </button>
                  <button className="btn btn-outline-glass flex-grow-1 py-3 rounded-3">
                    Enquire Now
                  </button>
                </div>

              </div>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}