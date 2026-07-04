"use client";

import Head from "next/head";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/SaleProduct.css";
import Link from "next/link";
import { products } from "@/app/datasale/product";

const saleProducts = [
  {
    id: 1,
    name: "Urban Rider E-Bike",
    image: "/images/Sale-E-bike-6.png",
    text: "A smooth city-ready e-bike with strong battery support for daily rides.",
    price: "$55.00 AUD",
    oldPrice: "$70.00 AUD",
    tag: "Save $15",
  },
  {
    id: 2,
    name: "Weekend Explorer",
    image: "/images/Sale-E-bike-3.png",
    text: "Built for longer routes, delivery work, and comfortable weekend trips.",
    price: "$60.00 AUD",
    oldPrice: "$80.00 AUD",
    tag: "Hot Deal",
  },
  {
    id: 3,
    name: "Premium Black E-Bike",
    image: "/images/Sale-E-bike-4.png",
    text: "A bold, powerful e-bike option with dependable range and speed.",
    price: "$65.00 AUD",
    oldPrice: "$85.00 AUD",
    tag: "Limited",
  },
  {
    id: 4,
    name: "Premium Black E-Bike",
    image: "/images/Sale-E-bike-2-Latest-04-06.png",
    text: "A bold, powerful e-bike option with dependable range and speed.",
    price: "$65.00 AUD",
    oldPrice: "$85.00 AUD",
    tag: "Limited",
  },
  {
    id: 5,
    name: "Premium Black E-Bike",
    image: "/images/Sale-E-bike-5.png",
    text: "A bold, powerful e-bike option with dependable range and speed.",
    price: "$65.00 AUD",
    oldPrice: "$85.00 AUD",
    tag: "Limited",
  },
  {
    id: 6,
    name: "Premium Black E-Bike",
    image: "/images/Sale-E-bike-1.png",
    text: "A bold, powerful e-bike option with dependable range and speed.",
    price: "$65.00 AUD",
    oldPrice: "$85.00 AUD",
    tag: "Limited",
  },
];

export default function SaleProduct() {
  const pathname = usePathname();

  return (
    <>
      <Head>
        <title>Sale Products | Beyond Bikes Melbourne</title>
        <meta
          name="description"
          content="Explore attractive sale products and limited e-bike rental offers from Beyond Bikes Melbourne."
        />
      </Head>

      {pathname !== "/" && <Header />}

      <section className="sale-product-section" aria-label="Sale products">
        <div className="container">
          <div className="sale-product-heading text-center">
            {pathname === "/" ? (
              <h2>Sale Products</h2>
            ) : (
              <h1>Sale Products</h1>
            )}
            <p>Fresh dummy deals with standout bikes, simple details, and easy pricing.</p>
          </div>

          <div className="sale-product-grid">
            {products.map((product) => (
  <article key={product.id} className="sale-product-card">
    <div className="sale-corner-ribbon">
      <span>{product.tag}</span>
    </div>

    <Link href={`/sale-product-details/${product.slug}`}>
      <div className="sale-product-image cursor-pointer">
        <Image
          src={product.image}
          alt={product.name}
          width={360}
          height={260}
          loading="lazy"
        />
      </div>
    </Link>

    <div className="sale-product-content">
      <h3>{product.name}</h3>
      <p>{product.shortDescription}</p>

      <div className="sale-product-price">
        <span>${product.price}.00 AUD</span>
        <del>${product.oldPrice}.00 AUD</del>
      </div>
    </div>
  </article>
))}
          </div>
        </div>
      </section>

      {pathname === "/sale-product" && <Footer />}
    </>
  );
}
