module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/app/components/Header.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// "use client";
// import Link from 'next/link';
// import '../styles/header.css';
// import { useState } from 'react';
// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   return (
//     <header className="bg-transparent position-absolute top-0 start-0 w-100 z-3">
//       <div className="container py-3 d-flex justify-content-between align-items-center">
//         <h1 className="fw-bold mb-0" style={{ color: '#9b5402' }}>RIDE</h1>
//         <button className="btn btn-outline-light d-md-none" onClick={() => setMenuOpen(!menuOpen)}>
//           <i className="bi bi-list"></i>
//         </button>
//         <nav className={`d-md-flex flex-grow-1 justify-content-center ${menuOpen ? 'd-block' : 'd-none d-md-block'}`}>
//           <ul className="nav flex-column flex-md-row text-center">
//             <li className="nav-item"><Link className="nav-link text-white set-header-text" href="/">Home</Link></li>
//             <li className="nav-item"><Link className="nav-link text-white set-header-text" href="/products">Products</Link></li>
//             <li className="nav-item"><Link className="nav-link text-white set-header-text" href="/blog">Rental</Link></li>
//             <li className="nav-item"><Link className="nav-link text-white set-header-text" href="/pages">Repairs</Link></li>
//             <li className="nav-item"><Link className="nav-link text-white set-header-text" href="/">Contact</Link></li>
//             <li className="nav-item"><Link className="nav-link text-white set-header-text" href="/shops">About Us</Link></li>
//             <li className="nav-item"><Link className="nav-link text-white set-header-text" href="/products">Basic Knowledge</Link></li>
//             <li className="nav-item"><Link className="nav-link text-white set-header-text" href="/blog">Warranty Policy</Link></li>
//             <li className="nav-item"><Link className="nav-link text-white set-header-text" href="/blog">News</Link></li>
//           </ul>
//         </nav>
//         <div className="d-none d-md-flex align-items-center gap-3">
//           <i className="bi bi-search text-white" aria-label="Search"></i>
//           <i className="bi bi-person text-white" aria-label="Account"></i>
//           <i className="bi bi-heart text-white" aria-label="Favorites"></i>
//           <div className="position-relative">
//             <img
//               src="/images/Cart.svg"
//               alt="Shopping Cart Icon"
//               width={30}
//               height={30}
//               loading="lazy"
//             />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
// "use client";
// import Link from 'next/link';
// import '../styles/header.css';
// import { useState } from 'react';
// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   return (
//     <header className="main-header w-100 sticky-top bg-white text-dark">
//       <div className="container position-relative py-3 d-flex justify-content-between align-items-center">
//         <h1 className="fw-bold mb-0" style={{ color: '#ff6b00' }}>RIDE</h1>
//         <button className="btn d-md-none menu-position" onClick={() => setMenuOpen(!menuOpen)}>
//           <img src='/images/HemburgMenu.svg' height={'30px'} width={'30px'}/>
//         </button>
//         <nav className="d-md-flex flex-grow-1 justify-content-center">
//           <ul className={`nav flex-column flex-md-row text-center ${menuOpen ? 'd-block' : 'd-none d-md-flex'}`}>
//             {[
//               ['/', 'Home'],
//               ['/products', 'Products'],
//               ['/blog', 'Rental'],
//               ['/pages', 'Repairs'],
//               ['/', 'Contact'],
//               ['/shops', 'About Us'],
//               ['/products', 'Basic Knowledge'],
//               ['/blog', 'Warranty Policy'],
//               ['/blog', 'News'],
//             ].map(([href, label], i) => (
//               <li className="nav-item" key={i}>
//                 <Link className="nav-link text-dark set-header-text" href={href}>
//                   {label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>
//         <div className="d-none d-md-flex align-items-center gap-3 icon-wrapper">
//           <i className="bi bi-search text-dark" aria-label="Search"></i>
//           <i className="bi bi-person text-dark" aria-label="Account"></i>
//           <i className="bi bi-heart text-dark" aria-label="Favorites"></i>
//           <div className="position-relative">
//             <img
//               src="/images/Cart.svg"
//               alt="Shopping Cart Icon"
//               width={30}
//               height={30}
//               loading="lazy"
//             />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
// "use client";
// import Link from 'next/link';
// import '../styles/header.css';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { usePathname } from 'next/navigation';
// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const router = useRouter();
//   const pathname = usePathname();
//   const handleAddToCart = () => {
//     router.push('/cart'); // navigate to your cart page
//   };
//   return (
//     <header className="main-header w-100 sticky-top text-dark" style={{backgroundColor:'#f7931e',boxShadow: '0 4px 25px rgba(0, 0, 0, 0.8)', zIndex: 1000,}}>
//       <div className="container position-relative py-3 d-flex justify-content-between align-items-center">
//         {/* <h1 className="fw-bold mb-0" style={{ color: '#ff6b00' }}>RIDE</h1> */}
//         <img src='/images/Logo-for-ebike-beyond-bikes-removebg-preview.png' alt='logo' className='set-logo-height'/>
//         <button className="btn d-md-none menu-position" onClick={() => setMenuOpen(!menuOpen)}>
//           <img src='/images/HemburgMenu.svg' height={'35px'} width={'35px'} alt='menu-bar'/>
//         </button>
//         <nav className="d-md-flex flex-grow-1 justify-content-end">
// <ul
//   className={`nav flex-column flex-md-row text-center custom-nav set-bg-header ${menuOpen ? 'open' : ''}`}
// >
//   {[
//     ['/', 'Home'],
//     ['/products', 'Products'],
//     ['/rental', 'Rental'],
//     ['/contact', 'Contact'],
//     ['/about', 'About Us'],
//     ['/basicknowledge', 'Privacy Policy'],
//   ].map(([href, label], i) => (
//     <li className="nav-item" key={i}>
//       <Link
//         href={href}
//         className={`nav-link set-header-text ${
//           pathname === href ? 'text-dark fw-bold' : 'text-light'
//         }`}
//       >
//         {label}
//       </Link>
//     </li>
//   ))}
// </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }
// "use client";
// import Link from 'next/link';
// import '../styles/header.css';
// import { useState } from 'react';
// import { useRouter, usePathname } from 'next/navigation';
// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [loading, setLoading] = useState(false); // Loader state
//   const router = useRouter();
//   const pathname = usePathname();
//   const navLinks = [
//     ['/', 'Home'],
//     ['/products', 'Products'],
//     ['/rental', 'Rental'],
//     ['/contact', 'Contact'],
//     ['/about', 'About Us'],
//     ['/basicknowledge', 'Privacy Policy'],
//   ];
//   const handleNavClick = (href) => {
//     if (pathname !== href) {
//       setLoading(true);
//       setTimeout(() => {
//         router.push(href);
//       }, 1000); // 5 seconds
//     }
//   };
//   return (
//     <>
//       {/* Loader Overlay */}
//       {loading && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0, left: 0, right: 0, bottom: 0,
//             backgroundColor: "rgba(255, 255, 255, 0.8)",
//             zIndex: 9999,
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center"
//           }}
//         >
//           <div
//             className="spinner-border text-warning"
//             style={{ width: "4rem", height: "4rem" }}
//             role="status"
//           >
//             <span className="visually-hidden">Loading...</span>
//           </div>
//         </div>
//       )}
//       <header
//         className="main-header w-100 sticky-top text-dark"
//         style={{
//           backgroundColor: '#f7931e',
//           boxShadow: '0 4px 25px rgba(0, 0, 0, 0.8)',
//           zIndex: 1000,
//         }}
//       >
//         <div className="container position-relative py-sm-3 py-1 d-flex justify-content-between align-items-center">
//           <img
//             src="/images/Latest-beyond-logo-12-08.png"
//             alt="logo"
//             className="set-logo-height"
//             onClick={() => {
//     if (pathname !== '/') {
//       setLoading(true);
//       setTimeout(() => {
//         router.push('/');
//       }, 1000); 
//     }
//   }}
//           />
//           <button
//             className="btn d-md-none menu-position"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             <img
//               src="/images/HemburgMenu.svg"
//               height="35px"
//               width="35px"
//               alt="menu-bar"
//             />
//           </button>
//           <nav className="d-md-flex flex-grow-1 justify-content-end">
//             <ul
//               className={`nav flex-column flex-md-row text-center custom-nav set-bg-header ${menuOpen ? 'open' : ''
//                 }`}
//             >
//               {navLinks.map(([href, label], i) => (
//                 <li className="nav-item" key={i}>
//                   <a
//                     role="button"
//                     onClick={() => handleNavClick(href)}
//                     className={`nav-link set-header-text ${pathname === href
//                       ? 'text-success fw-bold'
//                       : 'text-light'
//                       }`}
//                   >
//                     {label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>
//       </header>
//     </>
//   );
// }
__turbopack_context__.s({
    "default": (()=>Header)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/noop-head.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Header() {
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // Loader state
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const navLinks = [
        [
            '/',
            'Home'
        ],
        [
            '/products',
            'Products'
        ],
        [
            '/rental',
            'Rental'
        ],
        [
            '/contact',
            'Contact'
        ],
        [
            '/about',
            'About Us'
        ],
        [
            '/basicknowledge',
            'Privacy Policy'
        ]
    ];
    const handleNavClick = (href)=>{
        if (pathname !== href) {
            setLoading(true);
            setTimeout(()=>{
                router.push(href);
            }, 1000);
        }
    };
    // JSON-LD for Navigation (SEO)
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SiteNavigationElement",
        "name": navLinks.map(([_, label])=>label),
        "url": navLinks.map(([href])=>`https://www.beyondbikes.com.au${href}`)
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: JSON.stringify(jsonLd)
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Header.js",
                    lineNumber: 332,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Header.js",
                lineNumber: 330,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "visually-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    children: "Beyond Bikes"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Header.js",
                    lineNumber: 339,
                    columnNumber: 39
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Header.js",
                lineNumber: 339,
                columnNumber: 7
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    zIndex: 9999,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "spinner-border text-warning",
                    style: {
                        width: "4rem",
                        height: "4rem"
                    },
                    role: "status",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "visually-hidden",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Header.js",
                        lineNumber: 359,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Header.js",
                    lineNumber: 354,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Header.js",
                lineNumber: 343,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "main-header w-100 sticky-top text-dark",
                style: {
                    backgroundColor: '#f7931e',
                    boxShadow: '0 4px 25px rgba(0, 0, 0, 0.8)',
                    zIndex: 1000
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container position-relative py-sm-3 py-1 d-flex justify-content-between align-items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/images/Latest-beyond-logo-12-08.png",
                            alt: "Beyond Bikes Logo",
                            className: "set-logo-height",
                            onClick: ()=>{
                                if (pathname !== '/') {
                                    setLoading(true);
                                    setTimeout(()=>{
                                        router.push('/');
                                    }, 1000);
                                }
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Header.js",
                            lineNumber: 373,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn d-md-none menu-position",
                            onClick: ()=>setMenuOpen(!menuOpen),
                            "aria-label": "Toggle navigation menu",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/images/HemburgMenu.svg",
                                height: "35px",
                                width: "35px",
                                alt: "menu-bar"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Header.js",
                                lineNumber: 392,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Header.js",
                            lineNumber: 387,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "d-md-flex flex-grow-1 justify-content-end",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: `nav flex-column flex-md-row text-center custom-nav set-bg-header ${menuOpen ? 'open' : ''}`,
                                children: navLinks.map(([href, label], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "nav-item",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            role: "button",
                                            onClick: ()=>handleNavClick(href),
                                            className: `nav-link set-header-text ${pathname === href ? 'text-success fw-bold' : 'text-light'}`,
                                            children: label
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Header.js",
                                            lineNumber: 407,
                                            columnNumber: 19
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/src/app/components/Header.js",
                                        lineNumber: 406,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Header.js",
                                lineNumber: 401,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Header.js",
                            lineNumber: 400,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Header.js",
                    lineNumber: 372,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Header.js",
                lineNumber: 364,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/src/app/components/Hero.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// "use client";
// import { useEffect, useState } from 'react';
// import Typewriter from 'typewriter-effect';
// import { useRouter } from 'next/navigation';
// export default function Hero() {
//   const router = useRouter();
//   const images = [
//     '/images/02-07-2025-Latest-Hero-1.jpg',
//     '/images/Set-Product-Data-Background-Hero-28-06-2025-latest.jpg',
//   ];
//   const titles = [
//     'Ride Green. Ride Smart. Ride Melbourne.',
//     'From City Streets to Coastal Rides — Go Electric'
//   ];
//   const subtitles = [
//     'Quiet Power. Big Freedom',
//     'Charge. Ride. Repeat.'
//   ];
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);
//   const handleRentalClick = () => {
//     setLoading(true);
//     setTimeout(() => {
//       router.push('/rental');
//     }, 1000); // 1 second delay
//   };
//   return (
//     <section
//       className="d-flex position-relative responsive-bg text-white text-center text-md-start"
//       style={{
//         backgroundImage: `url(${images[currentImageIndex]})`,
//       }}
//     >
//       {/* Loader Overlay */}
//       {loading && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundColor: "rgba(255, 255, 255, 0.8)",
//             zIndex: 9999,
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center"
//           }}
//         >
//           <div
//             className="spinner-border text-warning"
//             style={{ width: "4rem", height: "4rem" }}
//             role="status"
//           >
//             <span className="visually-hidden">Loading...</span>
//           </div>
//         </div>
//       )}
//       <div className="container position-relative z-2 mt-5 pt-5">
//         <div className="row">
//           <div className="col-12 col-md-6">
//             <h2 className="display-5 fw-bold mb-4" style={{ color: '#ff6b00' }}>
//               <Typewriter
//                 key={currentImageIndex + '-title'}
//                 options={{
//                   strings: [titles[currentImageIndex]],
//                   autoStart: true,
//                   loop: false,
//                   delay: 50,
//                   deleteSpeed: 20,
//                   pauseFor: 3500
//                 }}
//               />
//             </h2>
//             <h4 className="fw-600 mb-4" style={{ fontStyle: 'italic' }}>
//               {subtitles[currentImageIndex]}
//             </h4>
//             <a
//               onClick={handleRentalClick}
//               className="btn btn-light set-button-background rounded-1 px-4 py-2 mt-3"
//               aria-label="Shop Electric Bikes"
//               style={{
//                 backgroundColor: '#ff6b00',
//                 fontSize: '13px',
//                 color: '#fff',
//                 fontWeight: '600',
//                 border: 'none',
//                 cursor: 'pointer'
//               }}
//             >
//               RENT NOW
//             </a>
//             <noscript>
//               <h2>Electric Road Bikes</h2>
//               <p>More mileage means more fun</p>
//             </noscript>
//           </div>
//         </div>
//       </div>
//       <span className="visually-hidden">Background showcasing electric road bikes</span>
//     </section>
//   );
// }
__turbopack_context__.s({
    "default": (()=>Hero)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typewriter$2d$effect$2f$dist$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/typewriter-effect/dist/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/noop-head.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Hero() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const images = [
        "/images/02-07-2025-Latest-Hero-1.jpg",
        "/images/Set-Product-Data-Background-Hero-28-06-2025-latest.jpg"
    ];
    const titles = [
        "Beyond Bikes - Freedom <br /> to Explore, Power to <br /> Move.",
        "Beyond Bikes - Quiet Power Big Freedom."
    ];
    const subtitles = [
        "Flexible beyond e-bike rentals.",
        "Perfect for customers and delivery across the city."
    ];
    const [currentImageIndex, setCurrentImageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>setCurrentImageIndex((prev)=>(prev + 1) % images.length), 4000);
        return ()=>clearInterval(interval);
    }, []);
    const handleRentalClick = ()=>{
        setLoading(true);
        setTimeout(()=>router.push("/rental"), 1000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        children: "Beyond Bikes | Electric Bike Rentals in Melbourne | E-Bike Hire"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Hero.js",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Rent powerful, quiet, and flexible electric bikes in Melbourne with Beyond Bikes. Perfect for commuters, delivery riders, and city explorers."
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Hero.js",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "keywords",
                        content: "electric bike rental Melbourne, e-bike hire Melbourne, Beyond Bikes Australia, delivery e-bikes Melbourne, rent e-bikes"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Hero.js",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "canonical",
                        href: "https://www.beyondbikes.com.au/"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Hero.js",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:title",
                        content: "Beyond Bikes - Electric Bike Rentals Melbourne"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Hero.js",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:description",
                        content: "Flexible electric bike rentals in Melbourne. Freedom to explore, power to move with Beyond Bikes."
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Hero.js",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:image",
                        content: "https://www.beyondbikes.com.au/images/02-07-2025-Latest-Hero-1.jpg"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Hero.js",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:url",
                        content: "https://www.beyondbikes.com.au/"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Hero.js",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:type",
                        content: "website"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Hero.js",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Hero.js",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:title",
                        content: "Beyond Bikes - Electric Bike Rentals Melbourne"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Hero.js",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:description",
                        content: "Rent quiet, powerful electric bikes in Melbourne with Beyond Bikes. Book now."
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Hero.js",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:image",
                        content: "https://www.beyondbikes.com.au/images/02-07-2025-Latest-Hero-1.jpg"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Hero.js",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "LocalBusiness",
                                name: "Beyond Bikes",
                                image: "https://www.beyondbikes.com.au/images/02-07-2025-Latest-Hero-1.jpg",
                                "@id": "https://www.beyondbikes.com.au/",
                                url: "https://www.beyondbikes.com.au/",
                                telephone: "+61422032961",
                                address: {
                                    "@type": "PostalAddress",
                                    streetAddress: "576 North Rd, Ormond VIC 3204, Australia",
                                    addressLocality: "Melbourne",
                                    addressRegion: "VIC",
                                    postalCode: "3162",
                                    addressCountry: "Australia"
                                },
                                sameAs: [
                                    "https://www.facebook.com/",
                                    "https://www.instagram.com/",
                                    "https://wa.me/61422032961"
                                ]
                            })
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Hero.js",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Hero.js",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "d-flex position-relative responsive-bg text-white text-center text-md-start",
                style: {
                    backgroundImage: `url(${images[currentImageIndex]})`
                },
                role: "banner",
                "aria-label": "Electric bike rentals in Melbourne—quiet, powerful, and flexible hire",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "visually-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "Beyond Bikes"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Hero.js",
                            lineNumber: 229,
                            columnNumber: 39
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Hero.js",
                        lineNumber: 229,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: images[currentImageIndex],
                        alt: "Electric bike rentals in Melbourne - Beyond Bikes",
                        width: 1920,
                        height: 1080,
                        priority: true,
                        style: {
                            display: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Hero.js",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this),
                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(255, 255, 255, 0.8)",
                            zIndex: 9999,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "spinner-border text-warning",
                            style: {
                                width: "4rem",
                                height: "4rem"
                            },
                            role: "status",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "visually-hidden",
                                children: "Loading..."
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Hero.js",
                                lineNumber: 260,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Hero.js",
                            lineNumber: 255,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Hero.js",
                        lineNumber: 241,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container position-relative z-2 mt-5 pt-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "row mt-sm-0 mt-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-12 col-md-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "display-5 mb-4",
                                        style: {
                                            color: "#ff6b00"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: "fw-bold",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typewriter$2d$effect$2f$dist$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                options: {
                                                    strings: [
                                                        titles[currentImageIndex]
                                                    ],
                                                    autoStart: true,
                                                    loop: false,
                                                    delay: 50,
                                                    deleteSpeed: 20,
                                                    pauseFor: 3500
                                                }
                                            }, currentImageIndex + "-title", false, {
                                                fileName: "[project]/src/app/components/Hero.js",
                                                lineNumber: 273,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Hero.js",
                                            lineNumber: 272,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Hero.js",
                                        lineNumber: 268,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "fw-600 mb-4",
                                        style: {
                                            fontStyle: "italic"
                                        },
                                        children: subtitles[currentImageIndex]
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Hero.js",
                                        lineNumber: 286,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        onClick: handleRentalClick,
                                        className: "btn btn-light set-button-background rounded-1 px-4 py-2 mt-3",
                                        "aria-label": "Book your Beyond Bikes rental in Melbourne",
                                        title: "Beyond Bikes - Rent an e-bike in Melbourne",
                                        href: "/rental",
                                        style: {
                                            backgroundColor: "#ff6b00",
                                            fontSize: "13px",
                                            color: "#fff",
                                            fontWeight: "600",
                                            border: "none",
                                            cursor: "pointer"
                                        },
                                        children: "RENT NOW"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Hero.js",
                                        lineNumber: 289,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("noscript", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "Electric Bike Rentals in Melbourne"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Hero.js",
                                                lineNumber: 309,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Your go-to for flexible 6–12 h electric bike hire—perfect for commuters and food delivery riders."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Hero.js",
                                                lineNumber: 310,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Hero.js",
                                        lineNumber: 308,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Hero.js",
                                lineNumber: 267,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Hero.js",
                            lineNumber: 266,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Hero.js",
                        lineNumber: 265,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "visually-hidden",
                        children: "Beyond Bikes offers quiet, powerful electric bikes for rent across Melbourne. Rent flexible e-bikes for commuting, food delivery, and city exploring."
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Hero.js",
                        lineNumber: 320,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Hero.js",
                lineNumber: 223,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/src/app/components/Footer.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import '../styles/Footer.css';
// import Link from 'next/link';
// export default function Footer() {
//   return (
//     <>
//       <footer className="footer-dark text-light pt-5 pb-3">
//         <div className="container text-center">
//           {/* Social Icons */}
//           <div className="mb-4 d-flex justify-content-center gap-4">
//             <a target='_blank' href="https://www.instagram.com/beyondbikes_vic/?igsh=MTRzcnZ6OG1yc3YzMg%3D%3D" className="social-icon"><i className="bi bi-instagram fs-1 me-3"></i></a>
//             <a target='_blank' href="https://g.co/kgs/66Atysa" className="social-icon"><i className="bi bi-google fs-1 me-3"></i></a>
//             <a target='_blank' href="tel:+61422032961" className="social-icon" title="Call Us">
//   <i className="bi bi-telephone-fill fs-1"></i>
// </a>
//           </div>
//           <ul className="nav justify-content-center mb-2">
//   <li className="nav-item">
//     <Link className="nav-link link-light" href="/">HOME</Link>
//   </li>
//   <li className="nav-item">
//     <Link className="nav-link link-light" href="/products">PRODUCTS</Link>
//   </li>
//   <li className="nav-item">
//     <Link className="nav-link link-light" href="/rental">RENTAL</Link>
//   </li>
//   <li className="nav-item">
//     <Link className="nav-link link-light" href="/contact">CONTACT</Link>
//   </li>
//   <li className="nav-item">
//     <Link className="nav-link link-light" href="/about">ABOUT US</Link>
//   </li>
//   <li className="nav-item">
//     <Link className="nav-link link-light" href="/basicknowledge">PRIVACY POLICY</Link>
//   </li>
// </ul>
// {/* Sub Navigation */}
//         </div>
//       </footer>
//       {/* Green Branding Strip */}
//       <div className="footer-green text-center text-white py-3">
//         <div>
//           <strong>Freedom to Explore, Power to Move</strong>
//         </div>
//         <small className="text-uppercase">© BEYOND BIKES PRIVATE LIMITED | ALL RIGHTS RESERVED</small>
//       </div>
//     </>
//   );
// }
// 'use client';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import '../styles/Footer.css';
// import Link from 'next/link';
// import { useState } from 'react';
// import { useRouter,usePathname } from 'next/navigation';
// export default function Footer() {
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();
//   const pathname = usePathname();
//   const handleNavigation = (href) => {
//     setLoading(true);
//     setTimeout(() => {
//       router.push(href);
//     }, 1000); // 5 seconds
//   };
//   return (
//     <>
//       {/* Loader Overlay */}
//       {loading && (
//         <div
//           style={{
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             width: '100vw',
//             height: '100vh',
//             background: 'rgba(255, 255, 255, 0.9)',
//             zIndex: 9999,
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}
//         >
//           <div
//             className="spinner-border text-warning"
//             style={{ width: '4rem', height: '4rem' }}
//             role="status"
//           >
//             <span className="visually-hidden">Loading...</span>
//           </div>
//         </div>
//       )}
//       <footer className="footer-dark text-light pt-5 pb-3">
//         <div className="container text-center">
//           {/* Social Icons */}
//           <div className="mb-4 d-flex justify-content-center gap-4">
//             <a
//               target="_blank"
//               href="https://www.instagram.com/beyondbikes_vic/?igsh=MTRzcnZ6OG1yc3YzMg%3D%3D"
//               className="social-icon"
//             >
//               <i className="bi bi-instagram fs-1 me-3"></i>
//             </a>
//             <a
//               target="_blank"
//               href="https://g.co/kgs/66Atysa"
//               className="social-icon"
//             >
//               <i className="bi bi-google fs-1 me-3"></i>
//             </a>
//             <a
//               target="_blank"
//               href="tel:+61422032961"
//               className="social-icon"
//               title="Call Us"
//             >
//               <i className="bi bi-telephone-fill fs-1"></i>
//             </a>
//           </div>
//           {/* Navigation Links */}
//           <ul className="nav justify-content-center mb-2">
//             {[
//               ['/', 'HOME'],
//               ['/products', 'PRODUCTS'],
//               ['/rental', 'RENTAL'],
//               ['/contact', 'CONTACT'],
//               ['/about', 'ABOUT US'],
//               ['/basicknowledge', 'PRIVACY POLICY'],
//             ].map(([href, label]) => (
//               <li className="nav-item mb-2" key={href}>
//                 <button
//                   className={`nav-link link-light bg-transparent border-0 ${pathname === href
//                       ? 'text-success fw-bold'
//                       : 'text-light'
//                       }`}
//                   onClick={() => handleNavigation(href)}
//                   style={{ cursor: 'pointer' }}
//                 >
//                   {label}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </footer>
//       {/* Branding Strip */}
//       <div className="footer-green text-center text-white py-3">
//         <div>
//           <strong>Freedom to Explore, Power to Move</strong>
//         </div>
//         <small className="text-uppercase">
//           © BEYOND BIKES PRIVATE LIMITED | ALL RIGHTS RESERVED
//         </small>
//       </div>
//     </>
//   );
// }
__turbopack_context__.s({
    "default": (()=>Footer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/script.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function Footer() {
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const handleNavigation = (href)=>{
        setLoading(true);
        setTimeout(()=>{
            router.push(href);
        }, 1000); // loader delay
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "localbusiness-schema",
                type: "application/ld+json",
                strategy: "afterInteractive",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SportsActivityLocation",
                        name: "Beyond Bikes",
                        url: "https://www.beyondbikes.com.au/",
                        logo: "https://www.beyondbikes.com.au/logo.png",
                        image: "https://www.beyondbikes.com.au/hero-image.jpg",
                        description: "Beyond Bikes offers professional e-bike rentals and cycling gear in Victoria, Australia. Explore with freedom and power to move.",
                        telephone: "+61-422-032-961",
                        priceRange: "$$",
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "Victoria, Australia",
                            addressLocality: "Victoria",
                            addressRegion: "VIC",
                            postalCode: "3000",
                            addressCountry: "AU"
                        },
                        geo: {
                            "@type": "GeoCoordinates",
                            latitude: -37.8136,
                            longitude: 144.9631
                        },
                        openingHoursSpecification: [
                            {
                                "@type": "OpeningHoursSpecification",
                                dayOfWeek: [
                                    "Monday",
                                    "Tuesday",
                                    "Wednesday",
                                    "Thursday",
                                    "Friday",
                                    "Saturday",
                                    "Sunday"
                                ],
                                opens: "08:00",
                                closes: "20:00"
                            }
                        ],
                        sameAs: [
                            "https://www.instagram.com/beyondbikes_vic/?igsh=MTRzcnZ6OG1yc3YzMg%3D%3D",
                            "https://g.co/kgs/66Atysa"
                        ]
                    })
                }
            }, void 0, false, {
                fileName: "[project]/src/app/components/Footer.js",
                lineNumber: 195,
                columnNumber: 7
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    background: 'rgba(255, 255, 255, 0.9)',
                    zIndex: 9999,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "spinner-border text-warning",
                    style: {
                        width: '4rem',
                        height: '4rem'
                    },
                    role: "status",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "visually-hidden",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Footer.js",
                        lineNumber: 268,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Footer.js",
                    lineNumber: 263,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Footer.js",
                lineNumber: 249,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "footer-dark text-light pt-5 pb-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 d-flex justify-content-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    target: "_blank",
                                    href: "https://www.instagram.com/beyondbikes_vic/?igsh=MTRzcnZ6OG1yc3YzMg%3D%3D",
                                    className: "social-icon",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "bi bi-instagram fs-1 me-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Footer.js",
                                        lineNumber: 283,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Footer.js",
                                    lineNumber: 278,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    target: "_blank",
                                    href: "https://g.co/kgs/66Atysa",
                                    className: "social-icon",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "bi bi-google fs-1 me-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Footer.js",
                                        lineNumber: 290,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Footer.js",
                                    lineNumber: 285,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    target: "_blank",
                                    href: "tel:+61422032961",
                                    className: "social-icon",
                                    title: "Call Us",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "bi bi-telephone-fill fs-1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Footer.js",
                                        lineNumber: 298,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Footer.js",
                                    lineNumber: 292,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Footer.js",
                            lineNumber: 277,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "nav justify-content-center mb-2",
                            children: [
                                [
                                    '/',
                                    'HOME'
                                ],
                                [
                                    '/products',
                                    'PRODUCTS'
                                ],
                                [
                                    '/rental',
                                    'RENTAL'
                                ],
                                [
                                    '/contact',
                                    'CONTACT'
                                ],
                                [
                                    '/about',
                                    'ABOUT US'
                                ],
                                [
                                    '/basicknowledge',
                                    'PRIVACY POLICY'
                                ]
                            ].map(([href, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "nav-item mb-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `nav-link link-light bg-transparent border-0 ${pathname === href ? 'text-success fw-bold' : 'text-light'}`,
                                        onClick: ()=>handleNavigation(href),
                                        style: {
                                            cursor: 'pointer'
                                        },
                                        children: label
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Footer.js",
                                        lineNumber: 313,
                                        columnNumber: 17
                                    }, this)
                                }, href, false, {
                                    fileName: "[project]/src/app/components/Footer.js",
                                    lineNumber: 312,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Footer.js",
                            lineNumber: 303,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Footer.js",
                    lineNumber: 275,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Footer.js",
                lineNumber: 274,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "footer-green text-center text-white py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "Freedom to Explore, Power to Move"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Footer.js",
                            lineNumber: 333,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Footer.js",
                        lineNumber: 332,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        className: "text-uppercase",
                        children: "© BEYOND BIKES PRIVATE LIMITED | ALL RIGHTS RESERVED"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Footer.js",
                        lineNumber: 335,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Footer.js",
                lineNumber: 331,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/src/app/json/products.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"Lastest Products\":[{\"id\":1,\"name\":\"E-bike 6-8h\",\"image\":\"/images/Cartoon-Cycle-remove-text-latest.png\",\"price\":\"$60.00 AUD\",\"oldPrice\":\"$65.00 AUD\"},{\"id\":2,\"name\":\"E-bike 8-10h\",\"image\":\"/images/Product-images-beyond-bikes-product-one-crop (3).png\",\"price\":\"$65.00 AUD\",\"oldPrice\":\"$70.00 AUD\"},{\"id\":3,\"name\":\"E-bike 10-12h\",\"image\":\"/images/Latest-Change-Angle-Red-Cycle-latest.png\",\"price\":\"$70.00 AUD\",\"oldPrice\":\"$80.00 AUD\"}],\"Top Rating\":[{\"id\":3,\"name\":\"Mountain Bike Pro\",\"image\":\"/images/Product-images-beyond-bikes-product-one-crop (3).png\",\"price\":\"$80.00 AUD\",\"oldPrice\":\"$90.00 AUD\"}],\"Best Sellers\":[{\"id\":5,\"name\":\"Speedster Road Bike\",\"image\":\"/images/Product-images-beyond-bikes-product-one-crop (3).png\",\"price\":\"$100.00 AUD\",\"oldPrice\":\"$120.00 AUD\"}]}"));}}),
"[project]/src/app/products/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// "use client";
// import { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import '../styles/ProductSection.css';
// import '../styles/ProductSection.css';
// import productsData from '../json/products.json';
// import { motion } from 'framer-motion';
// import Accessories from '../components/Accessories';
// import Header from '../components/Header';
// const tabs = ["Lastest Products", "Top Rating", "Best Sellers"];
// export default function ProductTabs() {
//   const [activeTab, setActiveTab] = useState("Lastest Products");
//   const [isVisible, setIsVisible] = useState(false);
//   useEffect(() => {
//     const handleScroll = () => {
//       const section = document.getElementById("product-section");
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
//   const filteredProducts = productsData[activeTab] || [];
//   return (
//     <>
//     <Header />
//     <Accessories />
//     <motion.section
//       id="product-section"
//       className="container py-5"
//       aria-label="Product Categories"
//       initial={{ opacity: 0, y: 50 }}
//       animate={isVisible ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//     >
//       <header className="text-center mb-4">
//         <ul className="nav nav-tabs justify-content-center border-0 mb-5">
//           {tabs.map((tab) => (
//             <li className="nav-item" key={tab}>
//               <button
//                 className={`nav-link fw-bold ${activeTab === tab ? 'active border-bottom border-2 border-danger' : ''}`}
//                 style={{ color: activeTab === tab ? '#000' : '#555', background: 'none' }}
//                 onClick={() => setActiveTab(tab)}
//               >
//                 {tab.toUpperCase()}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </header>
//       <div className="row">
//         {filteredProducts.map((product) => (
//           <div className="col-6 col-md-3 mb-4 text-center shadow-hover" key={product.id}>
//             <article
//               className="product-card"
//               style={{
//                 boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1)",
//  borderRadius: "0.5rem",
// padding: "1rem",
// backgroundColor: "#fff",
// transition: "transform 0.2s ease, box-shadow 0.2s ease"
//               }}
//               itemScope
//               itemType="https://schema.org/Product"
//             >
//               <span
//                 className="sale-badge"
//                 aria-hidden="true"
//               >
//                 Sale
//               </span>
//               <img
//                 src={product.image}
//                 alt={`Image of ${product.name}`}
//                 className="img-fluid product-image"
//                 loading="lazy"
//                 width="200"
//                 height="200"
//                 itemProp="image"
//               />
//               <h3 className="product-title" itemProp="name">{product.name}</h3>
//               <p className="product-price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
//                 <span itemProp="price">{product.price}</span>
//                 <meta itemProp="priceCurrency" content="USD" />
//                 <span className="old-price">{product.oldPrice}</span>
//               </p>
//             </article>
//           </div>
//         ))}
//       </div>
//     </motion.section>
//     </>
//   );
// }
// "use client";
// import { useEffect, useState } from 'react';
// import { usePathname } from 'next/navigation';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/ProductSection.css';
// import { useRouter } from 'next/navigation';
// import productsData from '../json/products.json';
// import { motion } from 'framer-motion';
// import Accessories from '../components/Accessories';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// const tabs = ["Lastest Products", "Top Rating", "Best Sellers"];
// export default function ProductTabs() {
//   const pathname = usePathname();
//   const [activeTab, setActiveTab] = useState("Lastest Products");
//   const [isVisible, setIsVisible] = useState(false);
//   const router = useRouter();
//   useEffect(() => {
//     const handleScroll = () => {
//       const section = document.getElementById("product-section");
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
//   const filteredProducts = productsData[activeTab] || [];
//   return (
//     <>
//       {/* Show Header if not on the home page */}
//       {pathname !== '/' && <Header />}
//       {/* <Accessories /> */}
//       <motion.section
//         id="product-section"
//         className="container py-4 px-3 px-sm-0"
//         aria-label="Product Categories"
//         initial={{ opacity: 0, y: 50 }}
//         animate={isVisible ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         {/* <header className="text-center mb-4">
//           <ul className="nav nav-tabs justify-content-center border-0 mb-5" style={{gap:'40px'}}>
//             {tabs.map((tab) => (
//               <li className="nav-item" key={tab}>
//                 <button
//                   className={`nav-link fw-bold ${activeTab === tab ? 'active border-bottom border-2 border-warning' : ''}`}
//                   style={{ color: activeTab === tab ? '#000' : '#555', background: 'none' }}
//                   onClick={() => setActiveTab(tab)}
//                 >
//                   {tab.toUpperCase()}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </header> */}
// <h1 className='mt-3 mb-5 text-center' style={{color:'#f7931e'}}>Our Products</h1>
//         <div className="row">
//           {filteredProducts.map((product) => (
//             <div className="col-12 col-md-4 mb-4 text-center shadow-hover" key={product.id}>
//               {/* <article
//                 className="product-card"
//                 style={{
//                   boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1)",
//                   borderRadius: "0.5rem",
//                   padding: "1rem",
//                   backgroundColor: "#fff",
//                   transition: "transform 0.2s ease, box-shadow 0.2s ease"
//                 }}
//                 itemScope
//                 itemType="https://schema.org/Product"
//               >
//                 <span className="sale-badge" aria-hidden="true">Sale</span>
//                 <img
//                   src={product.image}
//                   alt={`Image of ${product.name}`}
//                   className="img-fluid product-image"
//                   loading="lazy"
//                   width="200"
//                   height="200"
//                   itemProp="image"
//                 />
//                 <h3 className="product-title" itemProp="name">{product.name}</h3>
//                 <p className="product-price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
//                   <span itemProp="price">{product.price}</span>
//                   <meta itemProp="priceCurrency" content="USD" />
//                   <span className="old-price">{product.oldPrice}</span>
//                 </p>
//               </article> */}
//               <article
//   className="product-card position-relative overflow-hidden"
//   style={{
//     boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1)",
//     borderRadius: "0.5rem",
//     padding: "1rem",
//     backgroundColor: "#fff",
//     transition: "transform 0.2s ease, box-shadow 0.2s ease"
//   }}
//   itemScope
//   itemType="https://schema.org/Product"
// >
//   <span className="sale-badge" aria-hidden="true">Sale</span>
//   <img
//     src={product.image}
//     alt={`Image of ${product.name}`}
//     className="img-fluid product-image mt-3 mb-3"
//     loading="lazy"
//     style={{cursor: 'pointer'}}
//     itemProp="image"
//     onClick={() =>
//     product.name === 'E-bike 6-8h'
//   ? router.push('/cartoonproductdetails')
//   : product.name === 'E-bike 10-12h'
//   ? router.push('/latestredproductdetails')
//   : router.push('/productdetails')
//   }
//   />
//   {/* <div className="product-actions d-flex justify-content-center gap-3">
//     <button className="btn btn-sm btn-warning rounded-circle" aria-label="Add to Cart">
//       <i className="bi bi-cart"></i>
//     </button>
//     <button
//   className="btn btn-sm btn-outline-warning rounded-circle"
//   aria-label="Quick View"
// >
// </button>
//     <button className="btn btn-sm btn-outline-warning rounded-circle" aria-label="WishList">
//       <i className="bi bi-heart"></i>
//     </button>
//   </div> */}
//   <h1 className="product-title mt-3 fs-4" itemProp="name">{product.name}</h1>
//   <p className="product-price fs-5" itemProp="offers" itemScope itemType="https://schema.org/Offer">
//     <span itemProp="price">{product.price}</span>
//     <meta itemProp="priceCurrency" content="USD" />
//     <span className="old-price fs-5">{product.oldPrice}</span>
//   </p>
// </article>
//             </div>
//           ))}
//         </div>
//       </motion.section>
//       {pathname === '/products' && <Footer />}
//     </>
//   );
// }
// "use client";
// import { useEffect, useState } from 'react';
// import { usePathname, useRouter } from 'next/navigation';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/ProductSection.css';
// import productsData from '../json/products.json';
// import { motion } from 'framer-motion';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// const tabs = ["Lastest Products", "Top Rating", "Best Sellers"];
// export default function ProductTabs() {
//   const pathname = usePathname();
//   const [activeTab, setActiveTab] = useState("Lastest Products");
//   const [isVisible, setIsVisible] = useState(false);
//   const [loading, setLoading] = useState(false); // Loader state
//   const router = useRouter();
//   useEffect(() => {
//     const handleScroll = () => {
//       const section = document.getElementById("product-section");
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
//   const handleProductClick = (productName) => {
//     setLoading(true); // Show loader
//     setTimeout(() => {
//       if (productName === 'E-bike 6-8h') {
//         router.push('/E-bike-6-8h');
//       } else if (productName === 'E-bike 10-12h') {
//         router.push('/E-bike-10-12h');
//       } else {
//         router.push('/E-bike-8-10h');
//       }
//     }, 1000); 
//   };
//   const filteredProducts = productsData[activeTab] || [];
//   return (
//     <>
//       {pathname !== '/' && <Header />}
//       {/* Loader Overlay */}
//       {loading && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0, left: 0, right: 0, bottom: 0,
//             backgroundColor: "rgba(8, 8, 8, 0.9)",
//             zIndex: 9999,
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center"
//           }}
//         >
//           <div className="spinner-border text-warning" style={{ width: "4rem", height: "4rem" }} role="status">
//             <span className="visually-hidden">Loading...</span>
//           </div>
//         </div>
//       )}
//       <motion.section
//         id="product-section"
//         className="container py-4 px-3 px-sm-0"
//         aria-label="Product Categories"
//         initial={{ opacity: 0, y: 50 }}
//         animate={isVisible ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         <h1 className='mt-3 mb-5 text-center' style={{ color: '#f7931e' }}>Our Products</h1>
//         <div className="row">
//           {filteredProducts.map((product) => (
//             <div className="col-12 col-md-4 mb-4 text-center shadow-hover" key={product.id}>
//               <article
//                 className="product-card position-relative overflow-hidden"
// style={{
//   boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1)",
//   borderRadius: "0.5rem",
//   padding: "1rem",
//   backgroundColor: "#fff",
//   transition: "transform 0.2s ease, box-shadow 0.2s ease"
// }}
//                 itemScope
//                 itemType="https://schema.org/Product"
//               >
//                 <span className="sale-badge" aria-hidden="true">Sale</span>
//                 <img
//                   src={product.image}
//                   alt={`Image of ${product.name}`}
//                   className="img-fluid product-image mt-3 mb-3"
//                   loading="lazy"
//                   style={{ cursor: 'pointer' }}
//                   itemProp="image"
//                   onClick={() => handleProductClick(product.name)}
//                 />
//                 <h1 className="product-title mt-3 fs-4" itemProp="name">{product.name}</h1>
//                 <p className="product-price fs-5" itemProp="offers" itemScope itemType="https://schema.org/Offer">
//                   <span itemProp="price">{product.price}</span>
//                   <meta itemProp="priceCurrency" content="AUD" />
//                   <span className="old-price fs-5">{product.oldPrice}</span>
//                 </p>
//               </article>
//             </div>
//           ))}
//         </div>
//       </motion.section>
//       {pathname === '/products' && <Footer />}
//     </>
//   );
// }
__turbopack_context__.s({
    "default": (()=>ProductTabs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/noop-head.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Header.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Footer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Footer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$json$2f$products$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/app/json/products.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function ProductTabs() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Lastest Products");
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            const section = document.getElementById("product-section");
            if (section && section.getBoundingClientRect().top <= window.innerHeight * 0.75) {
                setIsVisible(true);
            }
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    const handleProductClick = (productName)=>{
        setLoading(true);
        setTimeout(()=>{
            const slug = productName.replace(/\s+/g, "-");
            router.push(`/${slug}`);
        }, 1000);
    };
    const filteredProducts = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$json$2f$products$2e$json__$28$json$29$__["default"][activeTab] || [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        children: "Beyond Bikes | E-Bike Rentals Melbourne – Products"
                    }, void 0, false, {
                        fileName: "[project]/src/app/products/page.js",
                        lineNumber: 445,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Discover Melbourne’s premium electric bike rentals. Explore best-selling and top-rated e-bikes with Beyond Bikes."
                    }, void 0, false, {
                        fileName: "[project]/src/app/products/page.js",
                        lineNumber: 446,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "robots",
                        content: "index, follow"
                    }, void 0, false, {
                        fileName: "[project]/src/app/products/page.js",
                        lineNumber: 450,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "canonical",
                        href: "https://www.beyondbikes.com.au/products"
                    }, void 0, false, {
                        fileName: "[project]/src/app/products/page.js",
                        lineNumber: 451,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:title",
                        content: "Beyond Bikes | E-Bike Rentals Melbourne – Products"
                    }, void 0, false, {
                        fileName: "[project]/src/app/products/page.js",
                        lineNumber: 454,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:description",
                        content: "Explore our range of Melbourne e-bikes—best sellers and top-rated electric bikes."
                    }, void 0, false, {
                        fileName: "[project]/src/app/products/page.js",
                        lineNumber: 455,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:url",
                        content: "https://www.beyondbikes.com.au/products"
                    }, void 0, false, {
                        fileName: "[project]/src/app/products/page.js",
                        lineNumber: 456,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:image",
                        content: "https://www.beyondbikes.com.au/images/og-image.jpg"
                    }, void 0, false, {
                        fileName: "[project]/src/app/products/page.js",
                        lineNumber: 457,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }, void 0, false, {
                        fileName: "[project]/src/app/products/page.js",
                        lineNumber: 460,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:title",
                        content: "Beyond Bikes | E-Bike Rentals Melbourne – Products"
                    }, void 0, false, {
                        fileName: "[project]/src/app/products/page.js",
                        lineNumber: 461,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:description",
                        content: "Explore our range of Melbourne e-bikes—best sellers and top-rated electric bikes."
                    }, void 0, false, {
                        fileName: "[project]/src/app/products/page.js",
                        lineNumber: 462,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:image",
                        content: "https://www.beyondbikes.com.au/images/og-image.jpg"
                    }, void 0, false, {
                        fileName: "[project]/src/app/products/page.js",
                        lineNumber: 463,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/products/page.js",
                lineNumber: 444,
                columnNumber: 7
            }, this),
            pathname !== "/" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/products/page.js",
                lineNumber: 466,
                columnNumber: 28
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "loading-overlay",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "spinner-border text-warning",
                    role: "status",
                    style: {
                        width: "4rem",
                        height: "4rem"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "visually-hidden",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/products/page.js",
                        lineNumber: 472,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/products/page.js",
                    lineNumber: 471,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/products/page.js",
                lineNumber: 470,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].section, {
                id: "product-section",
                className: "container py-4 px-3 px-sm-0",
                "aria-label": "Electric Bike Products",
                initial: {
                    opacity: 0,
                    y: 50
                },
                animate: isVisible ? {
                    opacity: 1,
                    y: 0
                } : {},
                transition: {
                    duration: 0.6,
                    ease: "easeOut"
                },
                children: [
                    pathname === "/" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mt-3 mb-5 text-center",
                        style: {
                            color: "#f7931e"
                        },
                        children: "Bikes for Rent"
                    }, void 0, false, {
                        fileName: "[project]/src/app/products/page.js",
                        lineNumber: 487,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "mt-3 mb-5 text-center",
                        style: {
                            color: "#f7931e"
                        },
                        children: "Our E-Bikes for Rent"
                    }, void 0, false, {
                        fileName: "[project]/src/app/products/page.js",
                        lineNumber: 489,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row",
                        children: filteredProducts.map((product, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-12 col-md-4 mb-4 text-center shadow-hover",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "product-card position-relative overflow-hidden",
                                    itemScope: true,
                                    style: {
                                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1)",
                                        borderRadius: "0.5rem",
                                        padding: "1rem",
                                        backgroundColor: "#fff",
                                        transition: "transform 0.2s ease, box-shadow 0.2s ease"
                                    },
                                    // style="box-shadow:0 4px 12px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1);border-radius:0.5rem;padding:1rem;background-color:#fff;transition:transform 0.2s ease, box-shadow 0.2s ease"
                                    itemType: "https://schema.org/Product",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sale-badge",
                                            "aria-hidden": "true",
                                            children: "Sale"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/products/page.js",
                                            lineNumber: 509,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: product.image,
                                            alt: `${product.name} - electric bike`,
                                            className: "img-fluid mb-3 product-image",
                                            loading: "lazy",
                                            itemProp: "image",
                                            title: product.name,
                                            onClick: ()=>handleProductClick(product.name),
                                            style: {
                                                cursor: "pointer",
                                                maxHeight: "220px",
                                                objectFit: "contain"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/products/page.js",
                                            lineNumber: 517,
                                            columnNumber: 9
                                        }, this),
                                        pathname === "/" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "fs-5 fw-semibold",
                                            itemProp: "name",
                                            children: product.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/products/page.js",
                                            lineNumber: 530,
                                            columnNumber: 11
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "fs-5 fw-semibold",
                                            itemProp: "name",
                                            children: product.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/products/page.js",
                                            lineNumber: 534,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "product-price mt-2 fs-5",
                                            itemProp: "offers",
                                            itemScope: true,
                                            itemType: "https://schema.org/Offer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    itemProp: "price",
                                                    children: product.price
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/products/page.js",
                                                    lineNumber: 546,
                                                    columnNumber: 11
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                                                    itemProp: "priceCurrency",
                                                    content: "AUD"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/products/page.js",
                                                    lineNumber: 547,
                                                    columnNumber: 11
                                                }, this),
                                                product.oldPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-decoration-line-through ms-2 fw-600",
                                                    style: {
                                                        color: '#ccc'
                                                    },
                                                    children: product.oldPrice
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/products/page.js",
                                                    lineNumber: 549,
                                                    columnNumber: 13
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/products/page.js",
                                            lineNumber: 540,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/products/page.js",
                                    lineNumber: 495,
                                    columnNumber: 7
                                }, this)
                            }, product.id, false, {
                                fileName: "[project]/src/app/products/page.js",
                                lineNumber: 494,
                                columnNumber: 5
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/products/page.js",
                        lineNumber: 492,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/products/page.js",
                lineNumber: 477,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "itemListElement": filteredProducts.map((p, idx)=>({
                                "@type": "Product",
                                position: idx + 1,
                                name: p.name,
                                image: `https://www.beyondbikes.com.au${p.image}`,
                                url: `https://www.beyondbikes.com.au/${p.slug || p.name.replace(/\s+/g, "-")}`,
                                brand: {
                                    "@type": "Brand",
                                    name: "Beyond Bikes"
                                },
                                offers: {
                                    "@type": "Offer",
                                    price: p.price,
                                    priceCurrency: "AUD",
                                    availability: "https://schema.org/InStock"
                                }
                            }))
                    })
                }
            }, void 0, false, {
                fileName: "[project]/src/app/products/page.js",
                lineNumber: 562,
                columnNumber: 7
            }, this),
            pathname === "/products" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Footer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/products/page.js",
                lineNumber: 578,
                columnNumber: 36
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/src/app/json/categories.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"id\":1,\"name\":\"Gearhead\",\"image\":\"/images/main-cycle.jpeg\",\"products\":35},{\"id\":2,\"name\":\"Freeroll\",\"image\":\"/images/e-scooter.jpeg\",\"products\":20},{\"id\":3,\"name\":\"Helmets\",\"image\":\"/images/main-cycle.jpeg\",\"products\":15},{\"id\":4,\"name\":\"Cycle-1\",\"image\":\"/images/e-scooter.jpeg\",\"products\":12},{\"id\":5,\"name\":\"Bike-1\",\"image\":\"/images/main-cycle.jpeg\",\"products\":10},{\"id\":5,\"name\":\"E-bike-2\",\"image\":\"/images/e-scooter.jpeg\",\"products\":10},{\"id\":5,\"name\":\"E-bike-3\",\"image\":\"/images/main-cycle.jpeg\",\"products\":10},{\"id\":5,\"name\":\"E-bike-4\",\"image\":\"/images/e-scooter.jpeg\",\"products\":10},{\"id\":5,\"name\":\"E-bike-5\",\"image\":\"/images/main-cycle.jpeg\",\"products\":10}]"));}}),
"[project]/src/app/components/Accessories.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// // // components/CategorySection.js
// // "use client";
// // import React from "react";
// // import Image from "next/image";
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import categoryData from '../json/categories.json';
// // import '../styles/CategorySection.css';
// // export default function Accessories() {
// //   return (
// //     <section
// //       className="container py-5"
// //       aria-label="Shop by Category"
// //       itemScope
// //       itemType="https://schema.org/ItemList"
// //     >
// //       <meta itemProp="name" content="Shop Categories" />
// //       <h1 className="text-center mb-5">Accessories</h1>
// //       <div className="category-scroll d-flex flex-nowrap overflow-auto gap-4 mt-5 px-2 px-md-0">
// //         {categoryData.map((category, index) => (
// //           <article
// //             key={category.id}
// //             itemScope
// //             itemType="https://schema.org/Thing"
// //             className={`category-circle-wrapper flex-shrink-0 text-center ${index === 0 ? 'active' : ''}`}
// //             style={{ width: '140px' }}
// //           >
// //             <div className="circle mt-3 position-relative mx-auto">
// //               <Image
// //                 src={category.image}
// //                 alt={category.name}
// //                 width={100}
// //                 height={100}
// //                 className="img-fluid rounded-circle"
// //                 itemProp="image"
// //               />
// //             </div>
// //             <h5 className="mt-3 mb-1 fw-medium" itemProp="name">{category.name}</h5>
// //             {category.products && (
// //               <small className="text-muted" itemProp="description">
// //                 {category.products} products
// //               </small>
// //             )}
// //           </article>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }
// // components/CategorySection.js
// "use client";
// import React, { useRef } from "react";
// import Image from "next/image";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import categoryData from '../json/categories.json';
// import '../styles/CategorySection.css';
// export default function Accessories() {
//   const scrollRef = useRef();
//   const scroll = (direction) => {
//     const { current } = scrollRef;
//     if (current) {
//       const scrollAmount = 200;
//       current.scrollBy({
//         left: direction === "next" ? scrollAmount : -scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };
//   return (
//     <section
//       className="container py-5"
//       aria-label="Shop by Category"
//       itemScope
//       itemType="https://schema.org/ItemList"
//     >
//       <meta itemProp="name" content="Shop Categories" />
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h1 className="text-center m-0 set-accesories-color">Accessories</h1>
//         <div className="d-flex gap-2">
//           <button className="btn btn-outline-dark btn-sm" onClick={() => scroll("prev")}>Previous</button>
//           <button className="btn btn-outline-dark btn-sm" onClick={() => scroll("next")}>Next</button>
//         </div>
//       </div>
//       <div
//         className="category-scroll d-flex flex-nowrap overflow-hidden gap-4"
//         ref={scrollRef}
//       >
//         {categoryData.map((category, index) => (
//           <article
//             key={category.id}
//             itemScope
//             itemType="https://schema.org/Thing"
//             className={`category-circle-wrapper flex-shrink-0 text-center ${index === 0 ? 'active' : ''}`}
//             style={{ width: '200px' }}
//           >
//             <div className="circle mt-3 position-relative mx-auto">
//               <Image
//                 src={category.image}
//                 alt={category.name}
//                 width={300}
//                 height={300}
//                 className="img-fluid rounded-circle"
//                 itemProp="image"
//               />
//             </div>
//             <h5 className="mt-3 mb-1 fw-medium" itemProp="name">{category.name}</h5>
//             {category.products && (
//               <small className="text-muted" itemProp="description">
//                 {category.products} products
//               </small>
//             )}
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }
// "use client";
// import React, { useRef, useEffect, useState } from "react";
// import Image from "next/image";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import categoryData from '../json/categories.json';
// import '../styles/CategorySection.css';
// import { motion } from "framer-motion";
// export default function Accessories() {
//   const scrollRef = useRef();
//   const sectionRef = useRef();
//   const [isVisible, setIsVisible] = useState(false);
//   const scroll = (direction) => {
//     const { current } = scrollRef;
//     if (current) {
//       const scrollAmount = 200;
//       current.scrollBy({
//         left: direction === "next" ? scrollAmount : -scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };
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
//     handleScroll(); // run on mount
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   return (
//     <motion.section
//       ref={sectionRef}
//       className="container py-5"
//       aria-label="Shop by Category"
//       itemScope
//       itemType="https://schema.org/ItemList"
//       initial={{ opacity: 0, y: 50 }}
//       animate={isVisible ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//     >
//       <meta itemProp="name" content="Shop Categories" />
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h1 className="text-center m-0 set-accesories-color">Accessories</h1>
//         <div className="d-flex gap-2">
//           <button className="btn btn-outline-dark btn-sm" onClick={() => scroll("prev")}>Previous</button>
//           <button className="btn btn-outline-dark btn-sm" onClick={() => scroll("next")}>Next</button>
//         </div>
//       </div>
//       <div
//         className="category-scroll d-flex flex-nowrap overflow-hidden gap-4"
//         ref={scrollRef}
//       >
//         {categoryData.map((category, index) => (
//           <article
//             key={category.id}
//             itemScope
//             itemType="https://schema.org/Thing"
//             className={`category-circle-wrapper flex-shrink-0 text-center ${index === 0 ? 'active' : ''}`}
//             style={{ width: '200px' }}
//           >
//             <div className="circle mt-3 position-relative mx-auto">
//               <Image
//                 src={category.image}
//                 alt={category.name}
//                 width={300}
//                 height={300}
//                 className="img-fluid rounded-circle"
//                 itemProp="image"
//               />
//             </div>
//             <h5 className="mt-3 mb-1 fw-medium" itemProp="name">{category.name}</h5>
//             {category.products && (
//               <small className="text-muted" itemProp="description">
//                 {category.products} products
//               </small>
//             )}
//           </article>
//         ))}
//       </div>
//     </motion.section>
//   );
// }
__turbopack_context__.s({
    "default": (()=>Accessories)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$json$2f$categories$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/app/json/categories.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function Accessories() {
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const itemsPerPage = 4; // Customize based on screen size if needed
    const totalPages = Math.ceil(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$json$2f$categories$2e$json__$28$json$29$__["default"].length / itemsPerPage);
    const scroll = (direction)=>{
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = current.offsetWidth; // scroll by container width
            current.scrollBy({
                left: direction === "next" ? scrollAmount : -scrollAmount,
                behavior: "smooth"
            });
            setCurrentSlide((prev)=>direction === "next" ? Math.min(prev + 1, totalPages - 1) : Math.max(prev - 1, 0));
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            const section = sectionRef.current;
            if (!section) return;
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.75) {
                setIsVisible(true);
            }
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].section, {
        ref: sectionRef,
        className: "container py-5 accessories-section",
        "aria-label": "Shop by Category",
        itemScope: true,
        itemType: "https://schema.org/ItemList",
        initial: {
            opacity: 0,
            y: 50
        },
        animate: isVisible ? {
            opacity: 1,
            y: 0
        } : {},
        transition: {
            duration: 0.6,
            ease: "easeOut"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                itemProp: "name",
                content: "Shop Categories"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Accessories.js",
                lineNumber: 278,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-center mb-4 set-accesories-color",
                children: "Accessories"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Accessories.js",
                lineNumber: 279,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "category-scroll d-flex flex-nowrap overflow-hidden gap-4 mb-4",
                ref: scrollRef,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$json$2f$categories$2e$json__$28$json$29$__["default"].map((category, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        itemScope: true,
                        itemType: "https://schema.org/Thing",
                        className: "category-circle-wrapper flex-shrink-0 text-center",
                        style: {
                            width: '200px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "circle mt-3 position-relative mx-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: category.image,
                                    alt: category.name,
                                    width: 300,
                                    height: 300,
                                    className: "img-fluid rounded-circle",
                                    itemProp: "image"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Accessories.js",
                                    lineNumber: 291,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Accessories.js",
                                lineNumber: 290,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                className: "mt-3 mb-1 fw-medium",
                                itemProp: "name",
                                children: category.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Accessories.js",
                                lineNumber: 300,
                                columnNumber: 13
                            }, this),
                            category.products && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                className: "text-muted",
                                itemProp: "description",
                                children: [
                                    category.products,
                                    " products"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Accessories.js",
                                lineNumber: 302,
                                columnNumber: 15
                            }, this)
                        ]
                    }, category.id, true, {
                        fileName: "[project]/src/app/components/Accessories.js",
                        lineNumber: 283,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/components/Accessories.js",
                lineNumber: 281,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "d-flex flex-column align-items-center mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "d-flex gap-3 mb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn btn-outline-dark btn-sm",
                            style: {
                                borderRadius: '50%'
                            },
                            onClick: ()=>scroll("prev"),
                            disabled: currentSlide === 0,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "bi bi-chevron-left"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Accessories.js",
                                lineNumber: 314,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Accessories.js",
                            lineNumber: 313,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn btn-outline-dark btn-sm",
                            style: {
                                borderRadius: '50%'
                            },
                            onClick: ()=>scroll("next"),
                            disabled: currentSlide === totalPages - 1,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "bi bi-chevron-right"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Accessories.js",
                                lineNumber: 317,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Accessories.js",
                            lineNumber: 316,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Accessories.js",
                    lineNumber: 312,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Accessories.js",
                lineNumber: 311,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Accessories.js",
        lineNumber: 268,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/components/Promotion.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
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
__turbopack_context__.s({
    "default": (()=>Promotion)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/noop-head.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Promotion() {
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            const section = sectionRef.current;
            if (!section) return;
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.75) {
                setIsVisible(true);
            }
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return ()=>window.removeEventListener("scroll", handleScroll);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: JSON.stringify(structuredData)
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Promotion.js",
                    lineNumber: 122,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Promotion.js",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].section, {
                ref: sectionRef,
                className: "promotion-section text-white position-relative",
                "aria-labelledby": "opening-hours-heading",
                role: "region",
                initial: {
                    opacity: 0,
                    y: 60
                },
                animate: isVisible ? {
                    opacity: 1,
                    y: 0
                } : {},
                transition: {
                    duration: 0.7,
                    ease: "easeOut"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "position-absolute w-100 mt-sm-5 mt-0 h-100 d-flex align-items-center justify-content-center justify-content-md-end pe-md-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center bg-white text-dark px-sm-5 px-3 py-4 rounded shadow-lg opening-box animate-opening",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "opening-hours-heading",
                                className: "fw-bold mb-3",
                                children: "OPENING HOURS"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Promotion.js",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mb-3 fs-5",
                                children: "Monday - Saturday : 9am - 7pm"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Promotion.js",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mb-3 fs-5",
                                children: "Sunday : 11am - 4pm"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Promotion.js",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-0 text-muted",
                                children: "Visit our Melbourne location anytime during our opening hours."
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Promotion.js",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Promotion.js",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Promotion.js",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Promotion.js",
                lineNumber: 128,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/src/app/components/ContactPage.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
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
__turbopack_context__.s({
    "default": (()=>ContactPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/noop-head.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function ContactPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        children: "Contact Beyond Bikes | E-Bike Store in Caulfield South"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ContactPage.js",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Get in touch with Beyond Bikes at our Caulfield South store. Visit us for premium e-bikes, helmets, and accessories. Call +61 422 032 961 or email info.beyondbikes@gmail.com."
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ContactPage.js",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "keywords",
                        content: "Beyond Bikes contact, ebike store Melbourne, electric bike shop Caulfield, Beyond Bikes Australia location"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ContactPage.js",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ContactPage.js",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:title",
                        content: "Contact Beyond Bikes | Melbourne E-Bike Store"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ContactPage.js",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:description",
                        content: "Find Beyond Bikes at 667 Glen Huntly Rd, Caulfield South VIC 3162, Australia. Call +61 422 032 961 for premium electric bikes."
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ContactPage.js",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:type",
                        content: "business.business"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ContactPage.js",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:url",
                        content: "https://www.beyondbikes.com.au/contact"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ContactPage.js",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:image",
                        content: "https://www.beyondbikes.com.au/images/storefront.jpg"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ContactPage.js",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "business:contact_data:street_address",
                        content: "667 Glen Huntly Rd"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ContactPage.js",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "business:contact_data:locality",
                        content: "Caulfield South"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ContactPage.js",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "business:contact_data:region",
                        content: "VIC"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ContactPage.js",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "business:contact_data:postal_code",
                        content: "3162"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ContactPage.js",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "business:contact_data:country_name",
                        content: "Australia"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ContactPage.js",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ContactPage.js",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:title",
                        content: "Contact Beyond Bikes | Melbourne E-Bike Store"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ContactPage.js",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:description",
                        content: "Visit Beyond Bikes in Caulfield South for premium electric bikes and accessories."
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ContactPage.js",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:image",
                        content: "https://www.beyondbikes.com.au/images/storefront.jpg"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ContactPage.js",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
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
                                    "streetAddress": "576 North Rd",
                                    "addressLocality": "Ormond",
                                    "addressRegion": "VIC",
                                    "postalCode": "3204",
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
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ContactPage.js",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/ContactPage.js",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mt-5",
                style: {
                    background: '#f8f8f8'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container py-5 px-3 text-white",
                    "aria-label": "Store Locations",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "row justify-content-center mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-center",
                                style: {
                                    color: '#ff6b00'
                                },
                                children: "Contact Beyond Bikes in Melbourne"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/ContactPage.js",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/ContactPage.js",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "row align-items-start position-relative mb-5",
                            itemScope: true,
                            itemType: "https://schema.org/LocalBusiness",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-md-6 set-location-padding",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            itemProp: "address",
                                            style: {
                                                color: '#ff6b00'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Address:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/ContactPage.js",
                                                    lineNumber: 151,
                                                    columnNumber: 17
                                                }, this),
                                                " 576 North Rd, Ormond VIC 3204, Australia"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/ContactPage.js",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            itemProp: "email",
                                            style: {
                                                color: '#ff6b00'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Email:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/ContactPage.js",
                                                    lineNumber: 154,
                                                    columnNumber: 17
                                                }, this),
                                                " info.beyondbikes@gmail.com"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/ContactPage.js",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            itemProp: "telephone",
                                            style: {
                                                color: '#ff6b00'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Phone:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/ContactPage.js",
                                                    lineNumber: 157,
                                                    columnNumber: 17
                                                }, this),
                                                " +61 422 032 961"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/ContactPage.js",
                                            lineNumber: 156,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/ContactPage.js",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-md-6 d-flex justify-content-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.120442377545!2d145.0406816!3d-37.904247399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad669652d799b25%3A0xab28d496d1fa88c7!2s576%20North%20Rd%2C%20Ormond%20VIC%203204%2C%20Australia!5e0!3m2!1sen!2sin!4v1756139787406!5m2!1sen!2sin",
                                            allowFullScreen: true,
                                            loading: "lazy",
                                            title: "Beyond Bikes Location Map",
                                            "aria-label": "Beyond Bikes Store Location on Google Maps",
                                            referrerPolicy: "no-referrer-when-downgrade",
                                            className: "responsive-map"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/ContactPage.js",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("noscript", {
                                            children: [
                                                "View our location on",
                                                ' ',
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://goo.gl/maps/7hK3uDNWv5LJbGf86",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    children: "Google Maps"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/ContactPage.js",
                                                    lineNumber: 173,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/ContactPage.js",
                                            lineNumber: 171,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/ContactPage.js",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/ContactPage.js",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/ContactPage.js",
                    lineNumber: 133,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/ContactPage.js",
                lineNumber: 132,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/public/images/Latest-admin-image.jpg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/Latest-admin-image.ea755d3a.jpg");}}),
"[project]/public/images/Latest-admin-image.jpg.mjs { IMAGE => \"[project]/public/images/Latest-admin-image.jpg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Latest$2d$admin$2d$image$2e$jpg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/Latest-admin-image.jpg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Latest$2d$admin$2d$image$2e$jpg__$28$static__in__ecmascript$29$__["default"],
    width: 3840,
    height: 5120,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAYDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCvB4atw+2fSpZ2Zd27BUDnGP61jGLS1HaNrI//2Q==",
    blurWidth: 6,
    blurHeight: 8
};
}}),
"[project]/public/images/Latest-repairer-admin.jpg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/Latest-repairer-admin.bedb4408.jpg");}}),
"[project]/public/images/Latest-repairer-admin.jpg.mjs { IMAGE => \"[project]/public/images/Latest-repairer-admin.jpg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Latest$2d$repairer$2d$admin$2e$jpg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/Latest-repairer-admin.jpg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Latest$2d$repairer$2d$admin$2e$jpg__$28$static__in__ecmascript$29$__["default"],
    width: 3024,
    height: 4032,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAYDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDfsbR01u4sXt3lto0JR3OGGCABnGDnk+tNtNXuQm1Kx//Z",
    blurWidth: 6,
    blurHeight: 8
};
}}),
"[project]/src/app/about/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
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
__turbopack_context__.s({
    "default": (()=>About)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/noop-head.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Latest$2d$admin$2d$image$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$Latest$2d$admin$2d$image$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/Latest-admin-image.jpg.mjs { IMAGE => "[project]/public/images/Latest-admin-image.jpg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Latest$2d$repairer$2d$admin$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$Latest$2d$repairer$2d$admin$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/Latest-repairer-admin.jpg.mjs { IMAGE => "[project]/public/images/Latest-repairer-admin.jpg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Header.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Footer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Footer.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function About() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const siteUrl = "https://www.beyondbikes.com.au";
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Beyond Bikes",
        url: siteUrl,
        logo: `${siteUrl}/images/logo.png`,
        sameAs: [
            "https://www.instagram.com/beyondbikes_vic",
            "https://www.facebook.com/beyondbikes"
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        children: "About Us | Beyond Bikes – Melbourne e-Bike Rentals"
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.js",
                        lineNumber: 265,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Meet the team behind Beyond Bikes — Melbourne's trusted electric bike rental provider offering flexible, affordable e-bike hire for commuters and delivery riders."
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.js",
                        lineNumber: 266,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "keywords",
                        content: "Beyond Bikes, e-bike rentals Melbourne, sustainable transport Melbourne, About Beyond Bikes"
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.js",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "robots",
                        content: "index, follow"
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.js",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "canonical",
                        href: `${siteUrl}/about`
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.js",
                        lineNumber: 275,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:title",
                        content: "About Beyond Bikes — Melbourne e-Bike Rental Business"
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.js",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:description",
                        content: "Learn more about Beyond Bikes, our mission and dedication to affordable, reliable e-bike rentals in Melbourne."
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.js",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:image",
                        content: `${siteUrl}/images/about-og.jpg`
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.js",
                        lineNumber: 280,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:url",
                        content: `${siteUrl}/about`
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.js",
                        lineNumber: 281,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:type",
                        content: "website"
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.js",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.js",
                        lineNumber: 285,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:title",
                        content: "About Beyond Bikes – Melbourne e-Bike Experts"
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.js",
                        lineNumber: 286,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:description",
                        content: "Discover Beyond Bikes’ story and mission: to provide sustainable, flexible e-bike rentals across Melbourne."
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.js",
                        lineNumber: 287,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:image",
                        content: `${siteUrl}/images/about-og.jpg`
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.js",
                        lineNumber: 288,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify(schemaData)
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.js",
                        lineNumber: 291,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/about/page.js",
                lineNumber: 264,
                columnNumber: 7
            }, this),
            pathname !== "/" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/about/page.js",
                lineNumber: 297,
                columnNumber: 28
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "aboutSection mb-5",
                itemScope: true,
                itemType: "https://schema.org/AboutPage",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MainHeadingTag, {
                        className: "text-center",
                        style: {
                            marginBottom: "40px",
                            color: "#f7931e",
                            marginTop: "40px"
                        },
                        children: "About Us"
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.js",
                        lineNumber: 300,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container px-3 px-sm-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "row align-items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-md-6 mb-4 mb-md-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Latest$2d$admin$2d$image$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$Latest$2d$admin$2d$image$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                            alt: "Beyond Bikes team in Melbourne store",
                                            className: "ovalImage",
                                            width: 500,
                                            height: 500,
                                            itemProp: "image"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/page.js",
                                            lineNumber: 311,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/about/page.js",
                                        lineNumber: 310,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-md-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SubHeadingTag, {
                                                className: "orangeHeading",
                                                itemProp: "headline",
                                                children: "MISSION"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/about/page.js",
                                                lineNumber: 321,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                itemProp: "text",
                                                children: "Beyond Bikes offers reliable and affordable electric bike rentals designed for both everyday riders and food delivery professionals in Melbourne. Whether you are exploring the city or delivering with Uber Eats or DoorDash, our e-bikes provide the perfect blend of power, comfort, and efficiency. We understand the needs of urban commuters - that’s why our bikes are built for performance, long battery life, and convenience. “Freedom to Explore, Power to Move” - that’s the promise we ride on. With flexible rental options, quick support, and service across Melbourne, Beyond Bikes is your go-to for hassle-free electric mobility."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/about/page.js",
                                                lineNumber: 324,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/about/page.js",
                                        lineNumber: 320,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/about/page.js",
                                lineNumber: 309,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "row mt-sm-5 mt-2 align-items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-md-6 order-sm-1 order-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SubHeadingTag, {
                                                className: "orangeHeading",
                                                children: "STORE BACKGROUND"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/about/page.js",
                                                lineNumber: 333,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                itemProp: "text",
                                                children: "At Beyond Bikes Pty Ltd, we believe that exceptional service starts with passionate people. We offer a carefully curated range of electric bikes and accessories. We are proud of our roots and even more excited about where we are going. We also offer delivery freedom to any location, with no battery issues."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/about/page.js",
                                                lineNumber: 334,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/about/page.js",
                                        lineNumber: 332,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-md-6 order-sm-2 order-1 text-end mb-4 mb-md-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$Latest$2d$repairer$2d$admin$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$Latest$2d$repairer$2d$admin$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                            alt: "Beyond Bikes team and workshop in Melbourne",
                                            className: "ovalImage",
                                            width: 500,
                                            height: 500,
                                            itemProp: "image"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/page.js",
                                            lineNumber: 339,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/about/page.js",
                                        lineNumber: 338,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/about/page.js",
                                lineNumber: 331,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/about/page.js",
                        lineNumber: 307,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/about/page.js",
                lineNumber: 299,
                columnNumber: 7
            }, this),
            pathname === "/about" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Footer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/about/page.js",
                lineNumber: 352,
                columnNumber: 33
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/public/images/instagram-latest.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/instagram-latest.ddbe124c.svg");}}),
"[project]/public/images/instagram-latest.svg.mjs { IMAGE => \"[project]/public/images/instagram-latest.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$instagram$2d$latest$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/instagram-latest.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$instagram$2d$latest$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 800,
    height: 800,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/images/google-latest.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/google-latest.cef582c0.svg");}}),
"[project]/public/images/google-latest.svg.mjs { IMAGE => \"[project]/public/images/google-latest.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$google$2d$latest$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/google-latest.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$google$2d$latest$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 800,
    height: 800,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/images/phone-latest.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/phone-latest.074faa8b.svg");}}),
"[project]/public/images/phone-latest.svg.mjs { IMAGE => \"[project]/public/images/phone-latest.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$phone$2d$latest$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/phone-latest.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$phone$2d$latest$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 800,
    height: 800,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/src/app/E-bike-8-10h/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
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
__turbopack_context__.s({
    "default": (()=>ProductPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/noop-head.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Header.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Footer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Footer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$instagram$2d$latest$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$instagram$2d$latest$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/instagram-latest.svg.mjs { IMAGE => "[project]/public/images/instagram-latest.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$google$2d$latest$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$google$2d$latest$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/google-latest.svg.mjs { IMAGE => "[project]/public/images/google-latest.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$phone$2d$latest$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$phone$2d$latest$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/phone-latest.svg.mjs { IMAGE => "[project]/public/images/phone-latest.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
const images = {
    front: '/images/BlueCycleProductDetailsFront.jpg',
    back: '/images/BlueCycleProductDetailsAngleBlur.jpg',
    middle: '/images/BlueCycleProductDetailsFrontLatest.jpg',
    battery: '/images/BlueCycleProductDetailsBackBlur.jpg'
};
function ProductPage() {
    const [selectedColor, setSelectedColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('middle');
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleClick = ()=>setShowModal(true);
    const handleClose = ()=>setShowModal(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        __turbopack_context__.r("[project]/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js [app-ssr] (ecmascript, async loader)")(__turbopack_context__.i);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        children: "E-bike 8-10h E-Bike | Beyond Bikes Electric Bicycle"
                    }, void 0, false, {
                        fileName: "[project]/src/app/E-bike-8-10h/page.js",
                        lineNumber: 351,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Explore E-bike 8-10h E-Bike by Beyond Bikes. Rent or buy this all-terrain electric bike with 8-10 hours battery, safety features, and mid-drive power."
                    }, void 0, false, {
                        fileName: "[project]/src/app/E-bike-8-10h/page.js",
                        lineNumber: 352,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "keywords",
                        content: "E-bike 8-10h, Beyond Bikes, electric bike, e-bike, all-terrain, rental, battery life, mid-drive, eco transport"
                    }, void 0, false, {
                        fileName: "[project]/src/app/E-bike-8-10h/page.js",
                        lineNumber: 353,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "robots",
                        content: "index, follow"
                    }, void 0, false, {
                        fileName: "[project]/src/app/E-bike-8-10h/page.js",
                        lineNumber: 354,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "canonical",
                        href: "https://yourdomain.com/product/cali-cruiser"
                    }, void 0, false, {
                        fileName: "[project]/src/app/E-bike-8-10h/page.js",
                        lineNumber: 355,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:type",
                        content: "product"
                    }, void 0, false, {
                        fileName: "[project]/src/app/E-bike-8-10h/page.js",
                        lineNumber: 358,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:title",
                        content: "Cali Cruiser E-Bike | Beyond Bikes Electric Bicycle"
                    }, void 0, false, {
                        fileName: "[project]/src/app/E-bike-8-10h/page.js",
                        lineNumber: 359,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:description",
                        content: "Explore Cali Cruiser E-Bike by Beyond Bikes. Rent or buy this all-terrain electric bike with 8-10 hours battery, safety features, and mid-drive power."
                    }, void 0, false, {
                        fileName: "[project]/src/app/E-bike-8-10h/page.js",
                        lineNumber: 360,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:image",
                        content: "https://yourdomain.com/images/BlueCycleProductDetailsFront.jpg"
                    }, void 0, false, {
                        fileName: "[project]/src/app/E-bike-8-10h/page.js",
                        lineNumber: 361,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:url",
                        content: "https://yourdomain.com/product/cali-cruiser"
                    }, void 0, false, {
                        fileName: "[project]/src/app/E-bike-8-10h/page.js",
                        lineNumber: 362,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }, void 0, false, {
                        fileName: "[project]/src/app/E-bike-8-10h/page.js",
                        lineNumber: 365,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:title",
                        content: "Cali Cruiser E-Bike | Beyond Bikes Electric Bicycle"
                    }, void 0, false, {
                        fileName: "[project]/src/app/E-bike-8-10h/page.js",
                        lineNumber: 366,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:description",
                        content: "Explore Cali Cruiser E-Bike by Beyond Bikes. Rent or buy this all-terrain electric bike with 8-10 hours battery, safety features, and mid-drive power."
                    }, void 0, false, {
                        fileName: "[project]/src/app/E-bike-8-10h/page.js",
                        lineNumber: 367,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:image",
                        content: "https://yourdomain.com/images/BlueCycleProductDetailsFront.jpg"
                    }, void 0, false, {
                        fileName: "[project]/src/app/E-bike-8-10h/page.js",
                        lineNumber: 368,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify({
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
                            })
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/E-bike-8-10h/page.js",
                        lineNumber: 371,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/E-bike-8-10h/page.js",
                lineNumber: 349,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/E-bike-8-10h/page.js",
                lineNumber: 397,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container py-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "row align-items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-xl-7 mb-4 only-mobile-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: images[selectedColor],
                                            alt: "E-bike 8-10h E-Bike image",
                                            width: 600,
                                            height: 600,
                                            className: "set-image-bikes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                            lineNumber: 404,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "d-sm-flex thumbnail-gallery mt-3 gap-3",
                                            children: Object.keys(images).map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: images[color],
                                                    alt: `Cali Cruiser - ${color} view`,
                                                    width: 138,
                                                    height: 120,
                                                    className: `thumb ${selectedColor === color ? 'active' : ''}`,
                                                    onClick: ()=>setSelectedColor(color)
                                                }, color, false, {
                                                    fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                    lineNumber: 407,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                            lineNumber: 405,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                    lineNumber: 403,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-xl-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-orange fw-bold",
                                            children: "E-Bike 8-10h"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                            lineNumber: 422,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3",
                                            children: "Take to the streets or trails with this powerful all-terrain mid-drive electric bicycle. The Cali Cruiser delivers unmatched performance and reliability."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                            lineNumber: 423,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "fs-4 fw-bold",
                                            children: [
                                                "PRICE : $65 AUD ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("del", {
                                                    className: "text-muted fs-4 ms-2",
                                                    children: "$70 AUD"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                    lineNumber: 426,
                                                    columnNumber: 61
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                            lineNumber: 426,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "fw-bold text-orange mb-3",
                                                    children: "Specifications"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                    lineNumber: 430,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "list-unstyled",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Speed Modes:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                    lineNumber: 433,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "ps-3 mt-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: "Gear 1: 25 km/h"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                            lineNumber: 435,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: "Gear 2: 35 km/h"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                            lineNumber: 436,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: "Gear 3: 45 km/h"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                            lineNumber: 437,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                    lineNumber: 434,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                            lineNumber: 432,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Display:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                    lineNumber: 440,
                                                                    columnNumber: 40
                                                                }, this),
                                                                " Multifunctional LED display, visible under sunlight."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                            lineNumber: 440,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Lighting:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                    lineNumber: 442,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "ps-3 mt-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: "Front high-brightness headlight"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                            lineNumber: 444,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: "Rear laser-projected tail light"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                            lineNumber: 445,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                    lineNumber: 443,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                            lineNumber: 441,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Phone Holder:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                    lineNumber: 448,
                                                                    columnNumber: 40
                                                                }, this),
                                                                " USB port (2.1A output)."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                            lineNumber: 448,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Safety System:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                    lineNumber: 450,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "ps-3 mt-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: "Smart anti-theft remote"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                            lineNumber: 452,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: "NFC smart unlock"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                            lineNumber: 453,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                    lineNumber: 451,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                            lineNumber: 449,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Braking System:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                    lineNumber: 456,
                                                                    columnNumber: 40
                                                                }, this),
                                                                " Hydraulic disc brakes."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                            lineNumber: 456,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Battery Hours:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                    lineNumber: 457,
                                                                    columnNumber: 40
                                                                }, this),
                                                                " 8-10 hrs."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                            lineNumber: 457,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Battery Life:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                    lineNumber: 458,
                                                                    columnNumber: 40
                                                                }, this),
                                                                " 48V 70A."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                            lineNumber: 458,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                    lineNumber: 431,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                            lineNumber: 429,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 d-flex align-items-center gap-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn",
                                                style: {
                                                    background: '#f7931e'
                                                },
                                                onClick: handleClick,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-light",
                                                    children: "Rental"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                    lineNumber: 465,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                lineNumber: 464,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                            lineNumber: 463,
                                            columnNumber: 15
                                        }, this),
                                        showModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "modal fade show",
                                            style: {
                                                display: 'block',
                                                opacity: 1
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "modal-backdrop fade show",
                                                    style: {
                                                        backdropFilter: 'blur(5px)',
                                                        position: 'fixed',
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        zIndex: -1,
                                                        backgroundColor: 'rgba(0,0,0,0.8)'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                    lineNumber: 472,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "modal-dialog",
                                                    style: {
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        minHeight: '100vh'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "modal-content",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "modal-header",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                        className: "modal-title",
                                                                        style: {
                                                                            color: 'rgb(247,147,30)'
                                                                        },
                                                                        children: "Social Media Links"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                        lineNumber: 476,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        className: "btn-close",
                                                                        onClick: handleClose
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                        lineNumber: 477,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                lineNumber: 475,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "modal-body",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "d-flex justify-content-around",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                            target: "_blank",
                                                                            href: "https://www.instagram.com/beyondbikes_vic/",
                                                                            className: "text-decoration-none text-center",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$instagram$2d$latest$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$instagram$2d$latest$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                                                                    height: 30,
                                                                                    width: 30
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                                    lineNumber: 482,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                    fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                                    lineNumber: 482,
                                                                                    columnNumber: 76
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        color: 'rgb(247,147,30)',
                                                                                        fontSize: '17px'
                                                                                    },
                                                                                    children: "Instagram"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                                    lineNumber: 482,
                                                                                    columnNumber: 81
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                            lineNumber: 481,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                            target: "_blank",
                                                                            href: "https://g.co/kgs/66Atysa",
                                                                            className: "text-decoration-none text-center",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$google$2d$latest$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$google$2d$latest$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                                                                    height: 30,
                                                                                    width: 30
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                                    lineNumber: 485,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                    fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                                    lineNumber: 485,
                                                                                    columnNumber: 73
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        color: 'rgb(247,147,30)',
                                                                                        fontSize: '17px'
                                                                                    },
                                                                                    children: "Google"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                                    lineNumber: 485,
                                                                                    columnNumber: 78
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                            lineNumber: 484,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                            target: "_blank",
                                                                            href: "tel:+61422032961",
                                                                            className: "text-decoration-none text-center",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$phone$2d$latest$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$phone$2d$latest$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                                                                    height: 30,
                                                                                    width: 30
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                                    lineNumber: 488,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                    fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                                    lineNumber: 488,
                                                                                    columnNumber: 71
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        color: 'rgb(247,147,30)',
                                                                                        fontSize: '17px'
                                                                                    },
                                                                                    children: "Call"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                                    lineNumber: 488,
                                                                                    columnNumber: 76
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                            lineNumber: 487,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                    lineNumber: 480,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                lineNumber: 479,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "modal-footer",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    className: "btn",
                                                                    style: {
                                                                        background: '#f7931e',
                                                                        color: 'white'
                                                                    },
                                                                    onClick: handleClose,
                                                                    children: "Close"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                    lineNumber: 493,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                lineNumber: 492,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                        lineNumber: 474,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                    lineNumber: 473,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                            lineNumber: 471,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                    lineNumber: 421,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/E-bike-8-10h/page.js",
                            lineNumber: 401,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/E-bike-8-10h/page.js",
                        lineNumber: 400,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "container text-center py-4",
                        "aria-labelledby": "description-title",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "description-title",
                                className: "fw-bold mb-4",
                                style: {
                                    color: 'rgb(247,147,30)'
                                },
                                children: "Description"
                            }, void 0, false, {
                                fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                lineNumber: 505,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "insurance-box fs-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Insurance Offered"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                        lineNumber: 508,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "✔ Insurance only covers theft of battery."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                        lineNumber: 509,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "✘ No accident compensation."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                        lineNumber: 510,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "✘ No third-party costs insured."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                        lineNumber: 511,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                lineNumber: 507,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            color: 'rgb(247,147,30)'
                                        },
                                        className: "mb-5",
                                        children: "Rental Information"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                        lineNumber: 515,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "info-cards",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "info-card",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "info-header",
                                                        children: "Documents for Rent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                        lineNumber: 518,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "info-list",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                style: {
                                                                    listStyle: 'none'
                                                                },
                                                                children: "Name"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                lineNumber: 520,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                style: {
                                                                    listStyle: 'none'
                                                                },
                                                                children: "Phone Number"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                lineNumber: 521,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                style: {
                                                                    listStyle: 'none'
                                                                },
                                                                children: "Address & Unit Number"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                lineNumber: 522,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                style: {
                                                                    listStyle: 'none'
                                                                },
                                                                children: "Email"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                lineNumber: 523,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                style: {
                                                                    listStyle: 'none'
                                                                },
                                                                children: "Valid Visa Grant"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                lineNumber: 524,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                style: {
                                                                    listStyle: 'none'
                                                                },
                                                                children: "Passport"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                lineNumber: 525,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                        lineNumber: 519,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                lineNumber: 517,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "info-card",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "info-header",
                                                        children: "Our Rental Fee Includes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                        lineNumber: 529,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "info-list",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                style: {
                                                                    listStyle: 'none'
                                                                },
                                                                children: "Delivery bag"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                lineNumber: 531,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                style: {
                                                                    listStyle: 'none'
                                                                },
                                                                children: "Locks (2)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                lineNumber: 532,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                style: {
                                                                    listStyle: 'none'
                                                                },
                                                                children: "Helmet"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                lineNumber: 533,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                style: {
                                                                    listStyle: 'none'
                                                                },
                                                                children: "Charger"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                lineNumber: 534,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                style: {
                                                                    listStyle: 'none'
                                                                },
                                                                children: "Basic maintenance"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                                lineNumber: 535,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                        lineNumber: 530,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                lineNumber: 528,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                        lineNumber: 516,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                lineNumber: 514,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "row row-cols-1 row-cols-md-3 g-4 mt-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-md-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border rounded py-4 px-2 h-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/images/speed.svg",
                                                    alt: "Top Speed Icon",
                                                    width: 40,
                                                    height: 40
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                    lineNumber: 544,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted mb-1 mt-3 small",
                                                    children: "Top Speed"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                    lineNumber: 545,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                    className: "text-orange fw-bold",
                                                    children: "45 MPH"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                    lineNumber: 546,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                            lineNumber: 543,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                        lineNumber: 542,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-md-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border rounded py-4 px-2 h-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/images/running.svg",
                                                    alt: "Battery Hours Icon",
                                                    width: 40,
                                                    height: 40
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                    lineNumber: 551,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted mb-1 mt-3 small",
                                                    children: "Battery Hours"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                    lineNumber: 552,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                    className: "text-orange fw-bold",
                                                    children: "8-10 hours"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                    lineNumber: 553,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                            lineNumber: 550,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                        lineNumber: 549,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-md-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border rounded py-4 px-2 h-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/images/battery.svg",
                                                    alt: "Battery Life Icon",
                                                    width: 40,
                                                    height: 40
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                    lineNumber: 558,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted mb-1 mt-3 small",
                                                    children: "Battery Life"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                    lineNumber: 559,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                    className: "text-orange fw-bold",
                                                    children: "48V 70A"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                                    lineNumber: 560,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                            lineNumber: 557,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                        lineNumber: 556,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/E-bike-8-10h/page.js",
                                lineNumber: 541,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/E-bike-8-10h/page.js",
                        lineNumber: 504,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/E-bike-8-10h/page.js",
                lineNumber: 399,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Footer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/E-bike-8-10h/page.js",
                lineNumber: 567,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/src/app/contact/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// "use client";
// import Head from 'next/head';
// import '../styles/Contact.css';
// import Header from '../components/Header';
// import { usePathname } from 'next/navigation';
// import Footer from '../components/Footer';
// export default function Contact() {
//   const pathname = usePathname();
//   return (
//     <>
//       <Head>
//         <title>Contact Us | EBIKE100</title>
//         <meta name="description" content="Contact EBIKE100 support team. We're ready to assist you with product issues, inquiries, and services." />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href="https://yourdomain.com/contact" />
//       </Head>
//       {/* ✅ Header will only render if NOT on home page */}
//       {pathname !== '/' && <Header />}
//       <div className="container px-sm-0 px-3 py-5">
//       <h1 className='text-center pb-4' style={{color: '#f7931e'}}>Contact Us</h1>
//         <div className="row g-4 align-items-start">
//           {/* Form Section */}
//           <div className="col-lg-7">
//             <h1 className="fw-bold" style={{ fontSize: '30px', color: '#f7931e' }}>Send a Message</h1>
//             <h2 className="fw-bold mb-3 mt-3" style={{ color: '#f7931e' }}>Reach out Get in Touch</h2>
//             <p className="text-dark mb-4">
//               Please be prepared to provide details about your possible issue including your bike model.
//               The more information you can provide, the quicker our team can provide a solution.
//             </p>
//             {/* ✅ FORM: Using Formsubmit to send directly to Gmail */}
//             <form className="contact-form" action="https://formsubmit.co/info.beyondbikes@gmail.com" method="POST">
//               {/* Hidden fields */}
//               <input type="hidden" name="_captcha" value="false" />
//               <input type="hidden" name="_template" value="table" />
//               <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />
//               <input type="hidden" name="_subject" value="New Contact Submission from Beyond Bikes" />
//               <div className="row g-3 mb-3">
//                 <div className="col-md-6">
//                   <input
//                     type="text"
//                     className="form-control form-control-lg bg-light"
//                     placeholder="Your Name"
//                     name="Full Name"
//                     required
//                   />
//                 </div>
//                 <div className="col-md-6">
//                   <input
//                     type="email"
//                     className="form-control form-control-lg bg-light"
//                     placeholder="Your Email"
//                     name="Email Address"
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="row g-3 mb-3">
//                 <div className="col-md-6">
//                   <input
//                     type="text"
//                     className="form-control form-control-lg bg-light"
//                     placeholder="Your Subject"
//                     name="Subject"
//                   />
//                 </div>
//                 <div className="col-md-6">
//                   <input
//                     type="text"
//                     className="form-control form-control-lg bg-light"
//                     placeholder="Your Phone Number"
//                     name="Phone Number"
//                   />
//                 </div>
//               </div>
//               <div className="mb-3">
//                 <textarea
//                   className="form-control form-control-lg bg-light"
//                   rows="5"
//                   placeholder="Your Message"
//                   name="Message"
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="btn text-light fw-semibold px-4 py-2"
//                 style={{ background: '#f7931e' }}
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//           {/* Info Section */}
//           <div className="col-lg-5">
//             <div className="bg-light rounded p-4">
//               <div className="mb-4">
//                 <h6 className="text-uppercase fw-bold" style={{ color: '#f7931e' }}>Address</h6>
//                 <p className="mb-0">667 Glen Huntly Rd Caulfield South, Caulfield VIC 3162, Australia</p>
//               </div>
//               <hr />
//               <div className="mb-4">
//                 <h6 className="text-uppercase fw-bold" style={{ color: '#f7931e' }}>Phone</h6>
//                 <p className="mb-0">+61 422 032 961</p>
//               </div>
//               <hr />
//               <div className="mb-4">
//                 <h6 className="text-uppercase fw-bold" style={{ color: '#f7931e' }}>Email</h6>
//                 <p className="mb-0">info.beyondbikes@gmail.com</p>
//               </div>
//               <hr />
//               <div>
//                 <h6 className="text-uppercase fw-bold" style={{ color: '#f7931e' }}>Hours</h6>
//                 <div className="d-flex py-1">
//                   <span className='me-2'>Mon - Sun :</span> <span>9am - 7pm</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {pathname === '/contact' && <Footer />}
//     </>
//   );
// }
// SEO
// "use client";
// import Head from 'next/head';
// import '../styles/Contact.css';
// import Header from '../components/Header';
// import { usePathname } from 'next/navigation';
// import Footer from '../components/Footer';
// export default function Contact() {
//   const pathname = usePathname();
//   return (
//     <>
//       <Head>
//         {/* Primary Meta Tags */}
//         <title>Contact Us | Beyond Bikes</title>
//         <meta name="description" content="Contact EBIKE100 support team. Get help with e-bike rentals, product inquiries, and services. Fast responses guaranteed." />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href="https://ebike100.com/contact" />
//         {/* Open Graph / Facebook */}
//         <meta property="og:type" content="website" />
//         <meta property="og:title" content="Contact Us | EBIKE100" />
//         <meta property="og:description" content="Contact EBIKE100 support team. Get help with e-bike rentals, product inquiries, and services. Fast responses guaranteed." />
//         <meta property="og:url" content="https://ebike100.com/contact" />
//         <meta property="og:image" content="https://ebike100.com/images/contact-og.png" />
//         {/* Twitter */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Contact Us | EBIKE100" />
//         <meta name="twitter:description" content="Contact EBIKE100 support team. Get help with e-bike rentals, product inquiries, and services. Fast responses guaranteed." />
//         <meta name="twitter:image" content="https://ebike100.com/images/contact-og.png" />
//         {/* Structured Data: ContactPoint */}
//         <script type="application/ld+json">
//           {`
//             {
//               "@context": "https://schema.org",
//               "@type": "Organization",
//               "name": "EBIKE100",
//               "url": "https://ebike100.com",
//               "logo": "https://ebike100.com/images/logo.png",
//               "contactPoint": {
//                 "@type": "ContactPoint",
//                 "telephone": "+61 422 032 961",
//                 "contactType": "customer support",
//                 "areaServed": "AU",
//                 "availableLanguage": ["English"]
//               },
//               "sameAs": [
//                 "https://www.facebook.com/ebike100",
//                 "https://www.instagram.com/ebike100",
//                 "https://twitter.com/ebike100"
//               ]
//             }
//           `}
//         </script>
//       </Head>
//       {pathname !== '/' && <Header />}
//       <main>
//         <section className="container px-sm-0 px-3 py-5">
//           <h1 className='text-center fw-bold pb-4' style={{color: '#f7931e'}}>Contact Beyond Bikes</h1>
//           <div className="row g-4 align-items-start">
//             {/* Form Section */}
//             <div className="col-lg-7" itemScope itemType="https://schema.org/ContactPage">
//               <h2 className="fw-bold mb-3 mt-3" style={{ color: '#f7931e' }} itemProp="name">Reach Out & Get in Touch</h2>
//               <p className="text-dark mb-4" itemProp="description">
//                 Provide details about your inquiry or issue including your bike model. Our team at Beyond Bikes will respond promptly.
//               </p>
//               <form className="contact-form" action="https://formsubmit.co/info.beyondbikes@gmail.com" method="POST">
//                 <input type="hidden" name="_captcha" value="false" />
//                 <input type="hidden" name="_template" value="table" />
//                 <input type="hidden" name="_next" value="https://ebike100.com/thank-you" />
//                 <input type="hidden" name="_subject" value="New Contact Submission from EBIKE100" />
//                 <div className="row g-3 mb-3">
//                   <div className="col-md-6">
//                     <label htmlFor="name" className="visually-hidden">Full Name</label>
//                     <input
//                       type="text"
//                       id="name"
//                       className="form-control form-control-lg bg-light"
//                       placeholder="Your Name"
//                       name="Full Name"
//                       required
//                       aria-required="true"
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <label htmlFor="email" className="visually-hidden">Email Address</label>
//                     <input
//                       type="email"
//                       id="email"
//                       className="form-control form-control-lg bg-light"
//                       placeholder="Your Email"
//                       name="Email Address"
//                       required
//                       aria-required="true"
//                     />
//                   </div>
//                 </div>
//                 <div className="row g-3 mb-3">
//                   <div className="col-md-6">
//                     <label htmlFor="subject" className="visually-hidden">Subject</label>
//                     <input
//                       type="text"
//                       id="subject"
//                       className="form-control form-control-lg bg-light"
//                       placeholder="Your Subject"
//                       name="Subject"
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <label htmlFor="phone" className="visually-hidden">Phone Number</label>
//                     <input
//                       type="text"
//                       id="phone"
//                       className="form-control form-control-lg bg-light"
//                       placeholder="Your Phone Number"
//                       name="Phone Number"
//                     />
//                   </div>
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="message" className="visually-hidden">Message</label>
//                   <textarea
//                     id="message"
//                     className="form-control form-control-lg bg-light"
//                     rows="5"
//                     placeholder="Your Message"
//                     name="Message"
//                   ></textarea>
//                 </div>
//                 <button
//                   type="submit"
//                   className="btn text-light fw-semibold px-4 py-2"
//                   style={{ background: '#f7931e' }}
//                 >
//                   Send Message
//                 </button>
//               </form>
//             </div>
//             {/* Info Section */}
//             <div className="col-lg-5">
//               <address className="bg-light rounded p-4" itemScope itemType="https://schema.org/PostalAddress">
//                 <div className="mb-4">
//                   <h3 className="text-uppercase fs-5 fw-bold" style={{ color: '#f7931e' }}>Address</h3>
//                   <p className="mb-0" itemProp="streetAddress">667 Glen Huntly Rd Caulfield South</p>
//                   <p className="mb-0" itemProp="addressLocality">Caulfield VIC 3162</p>
//                   <p className="mb-0" itemProp="addressCountry">Australia</p>
//                 </div>
//                 <hr />
//                 <div className="mb-4">
//                   <h3 className="text-uppercase fs-5 fw-bold" style={{ color: '#f7931e' }}>Phone</h3>
//                   <p className="mb-0" itemProp="telephone">+61 422 032 961</p>
//                 </div>
//                 <hr />
//                 <div className="mb-4">
//                   <h3 className="text-uppercase fs-5 fw-bold" style={{ color: '#f7931e' }}>Email</h3>
//                   <p className="mb-0" itemProp="email">info.beyondbikes@gmail.com</p>
//                 </div>
//                 <hr />
//                 <div>
//                   <h3 className="text-uppercase fs-5 fw-bold" style={{ color: '#f7931e' }}>Hours</h3>
//                   <div className="d-flex py-1">
//                     <span className='me-2'>Mon - Sun :</span> <span>9am - 7pm</span>
//                   </div>
//                 </div>
//               </address>
//             </div>
//           </div>
//         </section>
//       </main>
//       {pathname === '/contact' && <Footer />}
//     </>
//   );
// }
__turbopack_context__.s({
    "default": (()=>Contact)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/noop-head.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Header.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Footer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Footer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function Contact() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const siteUrl = "https://www.beyondbikes.com.au";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        children: "Contact Us | Beyond Bikes"
                    }, void 0, false, {
                        fileName: "[project]/src/app/contact/page.js",
                        lineNumber: 342,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Contact Beyond Bikes support team. Get help with e-bike rentals, product inquiries, and services. Fast responses guaranteed."
                    }, void 0, false, {
                        fileName: "[project]/src/app/contact/page.js",
                        lineNumber: 343,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "robots",
                        content: "index, follow"
                    }, void 0, false, {
                        fileName: "[project]/src/app/contact/page.js",
                        lineNumber: 344,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "canonical",
                        href: `${siteUrl}/contact`
                    }, void 0, false, {
                        fileName: "[project]/src/app/contact/page.js",
                        lineNumber: 345,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:type",
                        content: "website"
                    }, void 0, false, {
                        fileName: "[project]/src/app/contact/page.js",
                        lineNumber: 348,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:title",
                        content: "Contact Us | Beyond Bikes"
                    }, void 0, false, {
                        fileName: "[project]/src/app/contact/page.js",
                        lineNumber: 349,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:description",
                        content: "Contact Beyond Bikes support team. Get help with e-bike rentals, product inquiries, and services. Fast responses guaranteed."
                    }, void 0, false, {
                        fileName: "[project]/src/app/contact/page.js",
                        lineNumber: 350,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:url",
                        content: `${siteUrl}/contact`
                    }, void 0, false, {
                        fileName: "[project]/src/app/contact/page.js",
                        lineNumber: 351,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:image",
                        content: `${siteUrl}/images/contact-og.png`
                    }, void 0, false, {
                        fileName: "[project]/src/app/contact/page.js",
                        lineNumber: 352,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }, void 0, false, {
                        fileName: "[project]/src/app/contact/page.js",
                        lineNumber: 355,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:title",
                        content: "Contact Us | Beyond Bikes"
                    }, void 0, false, {
                        fileName: "[project]/src/app/contact/page.js",
                        lineNumber: 356,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:description",
                        content: "Contact Beyond Bikes support team. Get help with e-bike rentals, product inquiries, and services. Fast responses guaranteed."
                    }, void 0, false, {
                        fileName: "[project]/src/app/contact/page.js",
                        lineNumber: 357,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:image",
                        content: `${siteUrl}/images/contact-og.png`
                    }, void 0, false, {
                        fileName: "[project]/src/app/contact/page.js",
                        lineNumber: 358,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "Organization",
                                "name": "Beyond Bikes",
                                "url": siteUrl,
                                "logo": `${siteUrl}/images/logo.png`,
                                "contactPoint": {
                                    "@type": "ContactPoint",
                                    "telephone": "+61 422 032 961",
                                    "contactType": "customer support",
                                    "areaServed": "AU",
                                    "availableLanguage": [
                                        "English"
                                    ]
                                },
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress": "576 North Rd, Ormond VIC 3204, Australia",
                                    "addressLocality": "Ormond VIC 3204",
                                    "addressCountry": "Australia"
                                },
                                "sameAs": [
                                    "https://www.facebook.com/ebike100",
                                    "https://www.instagram.com/ebike100",
                                    "https://twitter.com/ebike100"
                                ]
                            })
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/contact/page.js",
                        lineNumber: 361,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/contact/page.js",
                lineNumber: 340,
                columnNumber: 7
            }, this),
            pathname !== '/' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/contact/page.js",
                lineNumber: 388,
                columnNumber: 28
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "container px-sm-0 px-3 py-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-center fw-bold pb-4",
                            style: {
                                color: '#f7931e'
                            },
                            children: "Contact Beyond Bikes"
                        }, void 0, false, {
                            fileName: "[project]/src/app/contact/page.js",
                            lineNumber: 392,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "row g-4 align-items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-lg-7",
                                    itemScope: true,
                                    itemType: "https://schema.org/ContactPage",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "fw-bold mb-3 mt-3",
                                            style: {
                                                color: '#f7931e'
                                            },
                                            itemProp: "name",
                                            children: "Reach Out & Get in Touch"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/contact/page.js",
                                            lineNumber: 397,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-dark mb-4",
                                            itemProp: "description",
                                            children: "Provide details about your inquiry or issue including your bike model. Our team at Beyond Bikes will respond promptly."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/contact/page.js",
                                            lineNumber: 398,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            className: "contact-form",
                                            action: "https://formsubmit.co/info.beyondbikes@gmail.com",
                                            method: "POST",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "hidden",
                                                    name: "_captcha",
                                                    value: "false"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/contact/page.js",
                                                    lineNumber: 403,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "hidden",
                                                    name: "_template",
                                                    value: "table"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/contact/page.js",
                                                    lineNumber: 404,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "hidden",
                                                    name: "_next",
                                                    value: `${siteUrl}/thank-you`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/contact/page.js",
                                                    lineNumber: 405,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "hidden",
                                                    name: "_subject",
                                                    value: "New Contact Submission from Beyond Bikes"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/contact/page.js",
                                                    lineNumber: 406,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "row g-3 mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "col-md-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "name",
                                                                    className: "visually-hidden",
                                                                    children: "Full Name"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/contact/page.js",
                                                                    lineNumber: 410,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    id: "name",
                                                                    className: "form-control form-control-lg bg-light",
                                                                    placeholder: "Your Name",
                                                                    name: "Full Name",
                                                                    required: true,
                                                                    "aria-required": "true"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/contact/page.js",
                                                                    lineNumber: 411,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/contact/page.js",
                                                            lineNumber: 409,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "col-md-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "email",
                                                                    className: "visually-hidden",
                                                                    children: "Email Address"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/contact/page.js",
                                                                    lineNumber: 422,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "email",
                                                                    id: "email",
                                                                    className: "form-control form-control-lg bg-light",
                                                                    placeholder: "Your Email",
                                                                    name: "Email Address",
                                                                    required: true,
                                                                    "aria-required": "true"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/contact/page.js",
                                                                    lineNumber: 423,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/contact/page.js",
                                                            lineNumber: 421,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/contact/page.js",
                                                    lineNumber: 408,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "row g-3 mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "col-md-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "subject",
                                                                    className: "visually-hidden",
                                                                    children: "Subject"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/contact/page.js",
                                                                    lineNumber: 437,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    id: "subject",
                                                                    className: "form-control form-control-lg bg-light",
                                                                    placeholder: "Your Subject",
                                                                    name: "Subject"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/contact/page.js",
                                                                    lineNumber: 438,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/contact/page.js",
                                                            lineNumber: 436,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "col-md-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "phone",
                                                                    className: "visually-hidden",
                                                                    children: "Phone Number"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/contact/page.js",
                                                                    lineNumber: 447,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    id: "phone",
                                                                    className: "form-control form-control-lg bg-light",
                                                                    placeholder: "Your Phone Number",
                                                                    name: "Phone Number"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/contact/page.js",
                                                                    lineNumber: 448,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/contact/page.js",
                                                            lineNumber: 446,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/contact/page.js",
                                                    lineNumber: 435,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "message",
                                                            className: "visually-hidden",
                                                            children: "Message"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/contact/page.js",
                                                            lineNumber: 459,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            id: "message",
                                                            className: "form-control form-control-lg bg-light",
                                                            rows: "5",
                                                            placeholder: "Your Message",
                                                            name: "Message"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/contact/page.js",
                                                            lineNumber: 460,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/contact/page.js",
                                                    lineNumber: 458,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    className: "btn text-light fw-semibold px-4 py-2",
                                                    style: {
                                                        background: '#f7931e'
                                                    },
                                                    children: "Send Message"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/contact/page.js",
                                                    lineNumber: 469,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/contact/page.js",
                                            lineNumber: 402,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/contact/page.js",
                                    lineNumber: 396,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-lg-5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("address", {
                                        className: "bg-light rounded p-4",
                                        itemScope: true,
                                        itemType: "https://schema.org/PostalAddress",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-uppercase fs-5 fw-bold",
                                                        style: {
                                                            color: '#f7931e'
                                                        },
                                                        children: "Address"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/contact/page.js",
                                                        lineNumber: 483,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mb-0",
                                                        itemProp: "addressCountry",
                                                        children: "576 North Rd, Ormond VIC 3204, Australia"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/contact/page.js",
                                                        lineNumber: 484,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/contact/page.js",
                                                lineNumber: 482,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                                                fileName: "[project]/src/app/contact/page.js",
                                                lineNumber: 488,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-uppercase fs-5 fw-bold",
                                                        style: {
                                                            color: '#f7931e'
                                                        },
                                                        children: "Phone"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/contact/page.js",
                                                        lineNumber: 490,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mb-0",
                                                        itemProp: "telephone",
                                                        children: "+61 422 032 961"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/contact/page.js",
                                                        lineNumber: 491,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/contact/page.js",
                                                lineNumber: 489,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                                                fileName: "[project]/src/app/contact/page.js",
                                                lineNumber: 493,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-uppercase fs-5 fw-bold",
                                                        style: {
                                                            color: '#f7931e'
                                                        },
                                                        children: "Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/contact/page.js",
                                                        lineNumber: 495,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mb-0",
                                                        itemProp: "email",
                                                        children: "info.beyondbikes@gmail.com"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/contact/page.js",
                                                        lineNumber: 496,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/contact/page.js",
                                                lineNumber: 494,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                                                fileName: "[project]/src/app/contact/page.js",
                                                lineNumber: 498,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-uppercase fs-5 fw-bold",
                                                        style: {
                                                            color: '#f7931e'
                                                        },
                                                        children: "Hours"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/contact/page.js",
                                                        lineNumber: 500,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "d-flex py-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "me-2",
                                                                children: "Monday - Saturday :"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/contact/page.js",
                                                                lineNumber: 502,
                                                                columnNumber: 21
                                                            }, this),
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "9am - 7pm"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/contact/page.js",
                                                                lineNumber: 502,
                                                                columnNumber: 71
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/contact/page.js",
                                                        lineNumber: 501,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "me-2",
                                                        children: "Sunday :"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/contact/page.js",
                                                        lineNumber: 504,
                                                        columnNumber: 19
                                                    }, this),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "11am - 4pm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/contact/page.js",
                                                        lineNumber: 504,
                                                        columnNumber: 58
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/contact/page.js",
                                                lineNumber: 499,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/contact/page.js",
                                        lineNumber: 481,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/contact/page.js",
                                    lineNumber: 480,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/contact/page.js",
                            lineNumber: 393,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/contact/page.js",
                    lineNumber: 391,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/contact/page.js",
                lineNumber: 390,
                columnNumber: 7
            }, this),
            pathname === '/contact' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Footer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/contact/page.js",
                lineNumber: 513,
                columnNumber: 35
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/src/app/components/ChatWidget.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ChatWidget)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function ChatWidget() {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                "aria-label": "Open chat",
                onClick: ()=>setOpen(!open),
                className: "jsx-5203f7a25d9ac569" + " " + "chat-toggle-btn",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        "aria-label": "chat",
                        className: "jsx-5203f7a25d9ac569" + " " + "bi bi-chat text-light me-2"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ChatWidget.js",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    "Let’s Chat!"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/ChatWidget.js",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-5203f7a25d9ac569" + " " + "chat-box bg-white shadow rounded",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-5203f7a25d9ac569" + " " + "chat-header d-flex justify-content-between align-items-center px-3 py-2 border-bottom",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "jsx-5203f7a25d9ac569",
                                children: "Ebikes Support"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/ChatWidget.js",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setOpen(false),
                                className: "jsx-5203f7a25d9ac569" + " " + "btn btn-sm btn-outline-danger",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/ChatWidget.js",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/ChatWidget.js",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-5203f7a25d9ac569" + " " + "chat-body px-5 py-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "jsx-5203f7a25d9ac569" + " " + "text-muted small",
                            children: "Hi there 👋 How can we help you today?"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/ChatWidget.js",
                            lineNumber: 30,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ChatWidget.js",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-5203f7a25d9ac569" + " " + "chat-footer border-top p-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Write your message...",
                            disabled: true,
                            className: "jsx-5203f7a25d9ac569" + " " + "form-control"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/ChatWidget.js",
                            lineNumber: 33,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ChatWidget.js",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/ChatWidget.js",
                lineNumber: 22,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "5203f7a25d9ac569",
                children: ".chat-toggle-btn.jsx-5203f7a25d9ac569{color:#fff;z-index:1050;background-color:#e01b24;border:none;border-radius:50px;align-items:center;padding:10px 20px;font-weight:600;display:flex;position:fixed;bottom:20px;right:20px;box-shadow:0 4px 8px #00000026}.chat-box.jsx-5203f7a25d9ac569{z-index:1050;flex-direction:column;width:300px;max-height:400px;display:flex;position:fixed;bottom:80px;right:20px}@media (width<=576px){.chat-box.jsx-5203f7a25d9ac569{width:90%;bottom:80px;right:5%}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
}}),
"[project]/src/app/cart/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ShoppingCart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/noop-head.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Header.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Footer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Footer.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const cartItemsData = [
    {
        id: 1,
        title: 'Fifa 19',
        platform: 'PS4',
        price: 44.0,
        quantity: 2,
        image: '/images/e-bike-blue.jpg'
    },
    {
        id: 2,
        title: 'Glacier White 500GB',
        platform: 'PS4',
        price: 249.99,
        quantity: 1,
        image: '/images/e-bike-red.jpg'
    },
    {
        id: 3,
        title: 'Platinum Headset',
        platform: 'PS4',
        price: 119.99,
        quantity: 1,
        image: '/images/e-bike-green.jpg'
    }
];
function ShoppingCart() {
    const [cartItems, setCartItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(cartItemsData);
    const [promoCode, setPromoCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [shippingCost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(5);
    const handleQuantity = (id, amount)=>{
        setCartItems((prevItems)=>prevItems.map((item)=>item.id === id ? {
                    ...item,
                    quantity: Math.max(1, item.quantity + amount)
                } : item));
    };
    const handleRemove = (id)=>{
        setCartItems((prevItems)=>prevItems.filter((item)=>item.id !== id));
    };
    const itemsTotal = cartItems.reduce((acc, item)=>acc + item.price * item.quantity, 0);
    const total = itemsTotal + shippingCost;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        children: "Shopping Cart | YourStore"
                    }, void 0, false, {
                        fileName: "[project]/src/app/cart/page.js",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "View and manage your shopping cart items. Apply discounts and proceed to secure checkout."
                    }, void 0, false, {
                        fileName: "[project]/src/app/cart/page.js",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/cart/page.js",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/cart/page.js",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container py-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "fw-bold mb-4",
                        children: "Shopping Cart"
                    }, void 0, false, {
                        fileName: "[project]/src/app/cart/page.js",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row gy-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-lg-8",
                                children: [
                                    cartItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "d-flex align-items-center justify-content-between p-3 bg-white rounded shadow-sm mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "d-flex align-items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: item.image,
                                                            alt: item.title,
                                                            width: 80,
                                                            height: 80,
                                                            className: "rounded"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/cart/page.js",
                                                            lineNumber: 76,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                    className: "mb-1",
                                                                    children: item.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/cart/page.js",
                                                                    lineNumber: 78,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                    className: "text-muted",
                                                                    children: item.platform
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/cart/page.js",
                                                                    lineNumber: 79,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/src/app/cart/page.js",
                                                                    lineNumber: 80,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "btn btn-link p-0 text-danger",
                                                                    onClick: ()=>handleRemove(item.id),
                                                                    children: "Remove"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/cart/page.js",
                                                                    lineNumber: 81,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/cart/page.js",
                                                            lineNumber: 77,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/cart/page.js",
                                                    lineNumber: 75,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "d-flex align-items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "btn btn-outline-dark btn-sm",
                                                            onClick: ()=>handleQuantity(item.id, -1),
                                                            children: "-"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/cart/page.js",
                                                            lineNumber: 86,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            readOnly: true,
                                                            value: item.quantity,
                                                            className: "form-control text-center",
                                                            style: {
                                                                width: '50px'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/cart/page.js",
                                                            lineNumber: 90,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "btn btn-outline-dark btn-sm",
                                                            onClick: ()=>handleQuantity(item.id, 1),
                                                            children: "+"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/cart/page.js",
                                                            lineNumber: 91,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/cart/page.js",
                                                    lineNumber: 85,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-end",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mb-1 fw-bold",
                                                            children: [
                                                                "£",
                                                                (item.price * item.quantity).toFixed(2)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/cart/page.js",
                                                            lineNumber: 98,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                            className: "text-muted",
                                                            children: [
                                                                "£",
                                                                item.price.toFixed(2),
                                                                " each"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/cart/page.js",
                                                            lineNumber: 101,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/cart/page.js",
                                                    lineNumber: 97,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, item.id, true, {
                                            fileName: "[project]/src/app/cart/page.js",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/products",
                                        className: "text-decoration-none mt-4 d-inline-block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "bi bi-arrow-left"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/cart/page.js",
                                                lineNumber: 108,
                                                columnNumber: 15
                                            }, this),
                                            " Continue Shopping"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/cart/page.js",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/cart/page.js",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-lg-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 bg-light rounded shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            className: "fw-bold mb-3",
                                            children: "Order Summary"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/cart/page.js",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "d-flex justify-content-between mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Items (",
                                                        cartItems.length,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/cart/page.js",
                                                    lineNumber: 116,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "fw-semibold",
                                                    children: [
                                                        "£",
                                                        itemsTotal.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/cart/page.js",
                                                    lineNumber: 117,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/cart/page.js",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "d-flex justify-content-between mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Shipping"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/cart/page.js",
                                                    lineNumber: 120,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "£",
                                                        shippingCost.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/cart/page.js",
                                                    lineNumber: 121,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/cart/page.js",
                                            lineNumber: 119,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                                            fileName: "[project]/src/app/cart/page.js",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "promoCode",
                                                    className: "form-label",
                                                    children: "Promo Code"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/cart/page.js",
                                                    lineNumber: 125,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "input-group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            id: "promoCode",
                                                            type: "text",
                                                            className: "form-control",
                                                            placeholder: "Enter your code",
                                                            value: promoCode,
                                                            onChange: (e)=>setPromoCode(e.target.value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/cart/page.js",
                                                            lineNumber: 129,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "btn btn-danger",
                                                            children: "Apply"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/cart/page.js",
                                                            lineNumber: 137,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/cart/page.js",
                                                    lineNumber: 128,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/cart/page.js",
                                            lineNumber: 124,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                                            fileName: "[project]/src/app/cart/page.js",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "d-flex justify-content-between fw-bold mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Total"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/cart/page.js",
                                                    lineNumber: 142,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "£",
                                                        total.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/cart/page.js",
                                                    lineNumber: 143,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/cart/page.js",
                                            lineNumber: 141,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn btn-primary w-100 fw-semibold",
                                            children: "Proceed to Checkout"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/cart/page.js",
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/cart/page.js",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/cart/page.js",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/cart/page.js",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/cart/page.js",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Footer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/cart/page.js",
                lineNumber: 150,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/src/app/basicknowledge/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// "use client";
// import Head from 'next/head';
// import '../styles/warranty.css'; 
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import { usePathname } from 'next/navigation';
// export default function BasicKnowlegePage() {
//   const pathname = usePathname();
//   return (
//     <>
//       <Head>
//         <title>Warranty Policy | BEYOND BIKES</title>
//         <meta name="description" content="Learn about the EBIKE100 product warranty, coverage terms, and how we handle repairs and replacements." />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href="https://yourdomain.com/warranty" />
//       </Head>
// <Header />
//       <div className="container py-4 px-4 warranty-page">
//         <h2 className="text-center fw-bold mb-4 mt-4" style={{color:'#f7931e'}}>Privacy Policy</h2>
//         <hr />
//         <h5 className="mt-4 fw-bold" style={{color:'#f7931e'}}>Abstract</h5>
//         <p className='fs-6'>This section presents the privacy policy of Beyond Bikes Pty Ltd, outlining the companys approach to managing personal information. The policy is designed to ensure transparency and security in handling data collected from various stakeholders, including website visitors, mobile application users, members, job applicants, and service providers. The policy covers the types of data collected, the methods of data collection, purposes for data use, data sharing protocols, retention periods, data protection rights, security measures..</p>
//         <h5 className="mt-4 fw-bold" style={{color:'#f7931e'}}>Introduction</h5>
//         <p className='fs-6'>Beyond Bikes Pty Ltd is committed to protecting the privacy and personal information of its stakeholders. This privacy policy provides an in-depth overview of how personal data is collected, utilized, stored, shared, and protected when individuals engage with our company. The policy applies to all interactions, including visiting our website, using mobile applications, participating in promotions or contests, registering as a member, applying for a job, or offering services to us.
// The policy aims to ensure compliance with data protection regulations and to provide clarity on how personal information is managed. It also outlines the rights of individuals concerning their personal data and how they can exercise these rights.</p>
//         {/* <ul className='fw-bold fs-6'>
//             <li>Damage caused by accidents, misuse, neglect, stunt riding, or use in commercial or rental environments</li>
//             <li>Improper assembly, incorrect fitting, or insufficient maintenance</li>
//             <li>Labour charges associated with repair or replacement</li>
//             <li>Items that are beyond their warranty period</li>
//             <li>Pre-owned items (our warranty is non-transferable and only applies to the original purchaser)​​</li>
//         </ul> */}
//         <h5 className="mt-4 fw-bold" style={{color:'#f7931e'}}>Methods of Data Collection</h5>
//         <p className='fs-6'>Data collection methods vary depending on the type of interaction with Beyond Bikes:
// Website or App Visitors: Collection of Technical and Usage Information through cookies and similar tools, as well as Identity, Contact, and Marketing Information if provided voluntarily.
// Users: Data is collected through automated methods, direct interactions, and third-party sources to fulfill contractual obligations, comply with legal requirements, and support legitimate business interests.</p>
//         <p className='fs-6'>
//           {/* <span className="text-danger">My Company</span> will either repair the Product at no charge, using new or refurbished replacement parts. */}
//           Delivery Job Applicants: Data is collected when applying for employment through our platforms or third parties, based on consent and processing requirements for employment contracts.
// Service Providers: Data is obtained through direct interactions or automated processes, necessary for contract execution and legal obligations.
//         </p>
//         {/* <h5 className="mt-4 fw-bold" style={{color:'#f7931e'}}>Coverage Overview (excluding damage caused by misuse or external factors):</h5>
//         <ul className='fw-bold fs-6'>
//             <li>12 months for factory defects related to the main body frame, including structural elements <br />
//             <span className='text-danger'>Please note: The handlebar, headset, and fork are not included as part of the body frame in this section</span>
//             </li>
//             <li>12 months for manufacturing faults in the battery, charger, and motor hub</li>
//             <span className='text-danger'>Please be aware that natural battery performance deterioration over time is not covered.</span>
//         </ul> */}
//         <h5 className="mt-4 fw-bold" style={{color:'#f7931e'}}>Information Collected</h5>
//         <p className='fs-6'>Personal data refers to any information that can identify a specific individual. This policy does not include data that has been anonymized. Beyond Bikes collects, utilizes, stores, and shares various categories of personal data, as described below:</p>
//         {/* <ul>
//           <li className='fw-bold fs-6'>conditions, malfunctions or damage not resulting from defects in material or workmanship</li>
//         </ul> */}
//         <p className='fs-6'>Details such as names, ID numbers (e.g., drivers license, passport), and dates of birth uniquely identify a person.</p>
//         <p className='fs-6'>Mailing addresses, email addresses, and phone numbers used for communication and billing.
// Bank account details, BSB numbers, and credit/debit card information are used for processing payments.</p>
// <p className='fs-6'>Records of financial exchanges and transactions, including payments to and from Beyond Bikes.
// Data related to the devices and technology used to access our platforms—such as IP addresses, login details, browser specifics, time zones, locations, and, for members, GPS data tracking routes and trips with our bikes.</p>
// <p className='fs-6'>User-specific data, like usernames, passwords, contracts (e.g., rental or rent-to-own), preferences, and survey feedback.</p>
// <p className='fs-6'>Insights into how users interact with our services, including patterns and frequency of use.
// User preferences about receiving marketing messages and preferred communication channels.
// Generalized data derived from personal information, like statistics or demographic trends, does not directly identify individuals.</p>
// <h5 className="mt-4 fw-bold" style={{color:'#f7931e'}}>Information Collected</h5>
// <p className='fs-6'>Personal information is used strictly for the purposes for which it was collected, unless a new, related purpose arises. The primary purposes include:</p>
// <ul>
//   <li>Fulfilling contractual obligations.</li>
//   <li>Complying with legal and regulatory requirements.</li>
//   <li>Supporting legitimate business interests, such as improving services and engaging with customers.</li>
// </ul>
// <h5 className="mt-4 fw-bold" style={{color:'#f7931e'}}>Data Sharing Protocols</h5>
// <p>Beyond Bikes may share personal information with the following entities:</p>
// <ul>
//   <li>Within the organization and associated companies.</li>
//   <li>External Partners: Including customer service and engagement platforms, telematics service providers, payment processors, insurance companies, maintenance and repair partners, recruitment agencies, technology vendors, legal and financial advisors, delivery services, regulatory bodies, and potential partners in mergers or acquisitions.</li>
// </ul>
// <h5 className="mt-4 fw-bold" style={{color:'#f7931e'}}>Data Retention Policy</h5>
// <p className='fs-6'>Beyond Bikes retains personal data only for as long as necessary to achieve the purposes for which it was collected, including legal, regulatory, tax, accounting, or reporting obligations. Core customer information is typically kept for up to six years post-relationship, primarily for tax purposes. In some cases, data may be anonymized for research or statistical analysis.</p>
// <h5 className="mt-4 fw-bold" style={{color:'#f7931e'}}>Data Protection Rights</h5>    
// <p className='fs-6'>Data protection laws provide individuals with specific rights regarding their personal information, including:</p>
// <ul>
//   <li>Access to personal data.</li>
//   <li>Request for corrections.</li>
//   <li>Deletion of data.</li>
//   <li>Objection to processing.</li>
//   <li>Restriction of processing.</li>
//   <li>Data transfer requests.</li>
//   <li>Withdrawal of consent.</li>
//   <p>To exercise any of these rights, individuals can contact Beyond Bikes</p>
// </ul>   
// <h5 className="mt-4 fw-bold" style={{color:'#f7931e'}}>Security Measures</h5>
// <p className='fs-6'>Beyond Bikes has implemented robust security protocols to prevent unauthorized access, use, modification, or disclosure of personal data. Access is strictly limited to employees, contractors, and third parties with legitimate business needs.</p>
// <h5 className="mt-4 fw-bold" style={{color:'#f7931e'}}>Security Measures</h5>
// <p className='fs-6'>Beyond Bikes remains committed to protecting personal information and ensuring transparency in its data management practices. This policy serves as a comprehensive guide for stakeholders on how their data is handled and the rights they have concerning their information.</p>
// <p className='mt-4 fs-6'>This Privacy Statement is regularly reviewed and was last updated on <strong>September 13, 2024.</strong></p>
//         {/* <h5 className="mt-4 fw-bold" style={{color:'#f7931e'}}>What do you have to do?</h5>
//         <p className='fw-bold fs-6'>
//           To obtain warranty service, you must first contact us to determine the problem and the most appropriate solution for you.
//         </p> */}
//       </div>
//       {pathname === '/basicknowledge' && <Footer />}
//     </>
//   );
// }
// SEO
// "use client";
// import Head from 'next/head';
// import '../styles/warranty.css'; 
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import { usePathname } from 'next/navigation';
// export default function BasicKnowlegePage() {
//   const pathname = usePathname();
//   return (
//     <>
//       <Head>
//         <title>Privacy Policy | Beyond Bikes</title>
//         <meta name="description" content="Learn about Beyond Bikes privacy policy, warranty coverage, data collection, and how we protect your personal information." />
//         <meta name="keywords" content="Beyond Bikes, privacy policy, warranty, data protection, e-bike, rental bike, user data, security measures" />
//         <meta name="robots" content="index, follow" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="canonical" href="https://yourdomain.com/warranty" />
//         {/* Open Graph / Social Sharing */}
//         <meta property="og:title" content="Privacy & Warranty Policy | Beyond Bikes" />
//         <meta property="og:description" content="Learn about Beyond Bikes privacy policy, warranty coverage, data collection, and how we protect your personal information." />
//         <meta property="og:url" content="https://yourdomain.com/warranty" />
//         <meta property="og:type" content="website" />
//         <meta property="og:image" content="https://yourdomain.com/images/beyond-bikes-og.png" />
//       </Head>
//       <Header />
//       <main className="container py-4 px-4 warranty-page" itemScope itemType="https://schema.org/WebPage">
//         <h1 className="text-center fw-bold mb-4 mt-4" style={{color:'#f7931e'}} itemProp="name">Privacy Policy</h1>
//         <hr />
//         <section>
//           <h2 className="mt-4 fw-bold" style={{color:'#f7931e'}}>Abstract</h2>
//           <p className='fs-6' itemProp="description">
//             This section presents the privacy policy of Beyond Bikes Pty Ltd, outlining the companys approach to managing personal information. The policy is designed to ensure transparency and security in handling data collected from various stakeholders, including website visitors, mobile application users, members, job applicants, and service providers. The policy covers the types of data collected, the methods of data collection, purposes for data use, data sharing protocols, retention periods, data protection rights, security measures.
//           </p>
//         </section>
//         <section>
//           <h2 className="mt-4 fw-bold" style={{color:'#f7931e'}}>Introduction</h2>
//           <p className='fs-6'>
//             Beyond Bikes Pty Ltd is committed to protecting the privacy and personal information of its stakeholders. This privacy policy provides an in-depth overview of how personal data is collected, utilized, stored, shared, and protected when individuals engage with our company. The policy applies to all interactions, including visiting our website, using mobile applications, participating in promotions or contests, registering as a member, applying for a job, or offering services to us. The policy aims to ensure compliance with data protection regulations and to provide clarity on how personal information is managed. It also outlines the rights of individuals concerning their personal data and how they can exercise these rights.
//           </p>
//         </section>
//         <section>
//           <h2 className="mt-4 fw-bold" style={{color:'#f7931e'}}>Methods of Data Collection</h2>
//           <p className='fs-6'>
//             Data collection methods vary depending on the type of interaction with Beyond Bikes: Website or App Visitors: Collection of Technical and Usage Information through cookies and similar tools, as well as Identity, Contact, and Marketing Information if provided voluntarily. Users: Data is collected through automated methods, direct interactions, and third-party sources to fulfill contractual obligations, comply with legal requirements, and support legitimate business interests.
//           </p>
//           <p className='fs-6'>
//            Delivery Job Applicants: Data is collected when applying for employment through our platforms or third parties, based on consent and processing requirements for employment contracts. Service Providers: Data is obtained through direct interactions or automated processes, necessary for contract execution and legal obligations.
//           </p>
//         </section>
//         <section>
//           <h2 className="mt-4 fw-bold" style={{color:'#f7931e'}}>Information Collected</h2>
//           <p className='fs-6'>
//             {/* Beyond Bikes collects personal data including names, ID numbers, contact details, financial information, device and usage data, preferences, and user feedback. This information helps improve our services, ensure contractual compliance, and provide customer support. */}
//           Personal data refers to any information that can identify a specific individual. This policy does not include data that has been anonymized. Beyond Bikes collects, utilizes, stores, and shares various categories of personal data, as described below:
//           </p>
//           <p className='fs-6'>Details such as names, ID numbers (e.g., driver&apos;s license, passport), and dates of birth uniquely identify a person.</p>
//           <p className='fs-6'>Mailing addresses, email addresses, and phone numbers used for communication and billing.
// Bank account details, BSB numbers, and credit/debit card information are used for processing payments.</p>
// <p>Records of financial exchanges and transactions, including payments to and from Beyond Bikes.
// Data related to the devices and technology used to access our platforms—such as IP addresses, login details, browser specifics, time zones, locations, and, for members, GPS data tracking routes and trips with our bikes.</p>
// <p>User-specific data, like usernames, passwords, contracts (e.g., rental or rent-to-own), preferences, and survey feedback.</p>
// <p>Insights into how users interact with our services, including patterns and frequency of use.</p>
// <p>User preferences about receiving marketing messages and preferred communication channels.</p>
// <p>Generalized data derived from personal information, like statistics or demographic trends, does not directly identify individuals.</p>
//         </section>
//         <section>
//           <h2 className="mt-4 fw-bold" style={{color:'#f7931e'}}>Purposes for Data Use</h2>
//           <p className='fs-6'>
//             Personal information is used strictly for the purposes for which it was collected, unless a new, related purpose arises. The primary purposes include:
//           </p>
//           <ol>
//             <li>Fulfilling contractual obligations.</li>
//             <li>Complying with legal and regulatory requirements.</li>
//             <li>Supporting legitimate business interests, such as improving services and engaging with customers.</li>
//           </ol>
//         </section>
//         <section>
//           <h2 className="mt-4 fw-bold" style={{color:'#f7931e'}}>Data Sharing Protocols</h2>
//           <p className='fs-6'>
//             {/* Personal data is retained only as long as necessary to achieve the purposes of collection, comply with legal obligations, or perform analytics. Core customer info is typically kept for up to six years. */}
//           Beyond Bikes may share personal information with the following entities:
//           </p>
//           <ul>
//             <li>
//               Within the organization and associated companies.
//             </li>
//             <li>
//               External Partners: Including customer service and engagement platforms, telematics service providers, payment processors, insurance companies, maintenance and repair partners, recruitment agencies, technology vendors, legal and financial advisors, delivery services, regulatory bodies, and potential partners in mergers or acquisitions.
//             </li>
//           </ul>
//         </section>
//         <section>
//           <h2 className="mt-4 fw-bold" style={{color:'#f7931e'}}>Data Retention Policy</h2>
//           <p className='fs-6'>
//             {/* Personal data is retained only as long as necessary to achieve the purposes of collection, comply with legal obligations, or perform analytics. Core customer info is typically kept for up to six years. */}
//           Beyond Bikes retains personal data only for as long as necessary to achieve the purposes for which it was collected, including legal, regulatory, tax, accounting, or reporting obligations. Core customer information is typically kept for up to six years post-relationship, primarily for tax purposes. In some cases, data may be anonymized for research or statistical analysis.
//           </p>
//         </section>
//         <section>
//           <h2 className="mt-4 fw-bold" style={{color:'#f7931e'}}>Data Protection Rights</h2>
//           <p className='fs-6'>
//             {/* Individuals have rights including access, correction, deletion, objection, restriction, data portability, and withdrawal of consent. Contact Beyond Bikes to exercise these rights. */}
//           Data protection laws provide individuals with specific rights regarding their personal information, including:</p>
//           <ul>
//             <li>Access to personal data.</li>
//             <li>Request for corrections.</li>
//             <li>Deletion of data.</li>
//             <li>Objection to processing.</li>
//             <li>Restriction of processing.</li>
//             <li>Data transfer requests.</li>
//             <li>Withdrawal of consent.</li>
//           </ul>
//           <p>To exercise any of these rights, individuals can contact Lithium Bicycle at <a href='mailto:info.beyondbikes@gmail.com' style={{textDecoration:'none'}}>info.beyondbikes@gmail.com</a></p>        
//         </section>
//         <section>
//           <h2 className="mt-4 fw-bold" style={{color:'#f7931e'}}>Security Measures</h2>
//           <p className='fs-6'>
//             {/* Beyond Bikes implements robust security protocols, restricting access to employees, contractors, and authorized third parties only. We aim to protect your personal information and ensure transparency. */}
//           Beyond Bikes has implemented robust security protocols to prevent unauthorized access, use, modification, or disclosure of personal data. Access is strictly limited to employees, contractors, and third parties with legitimate business needs.
//           </p>
//         </section>
// <section>
//           <h2 className="mt-4 fw-bold" style={{color:'#f7931e'}}>Conclusion</h2>
//           <p className='fs-6'>
//             {/* Beyond Bikes implements robust security protocols, restricting access to employees, contractors, and authorized third parties only. We aim to protect your personal information and ensure transparency. */}
//           {/* Beyond Bikes has implemented robust security protocols to prevent unauthorized access, use, modification, or disclosure of personal data. Access is strictly limited to employees, contractors, and third parties with legitimate business needs. */}
//           Lithium Bicycle remains committed to protecting personal information and ensuring transparency in its data management practices. This policy serves as a comprehensive guide for stakeholders on how their data is handled and the rights they have concerning their information.
//           </p>
//           <p>This Privacy Statement is regularly reviewed and was last updated on <strong>September 13, 2024.</strong></p>
//         </section>
//       </main>
//       {pathname === '/basicknowledge' && <Footer />}
//     </>
//   );
// }
__turbopack_context__.s({
    "default": (()=>PrivacyPolicyPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/noop-head.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Header.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Footer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Footer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function PrivacyPolicyPage() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const siteUrl = "https://www.beyondbikes.com.au";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        children: "Privacy Policy | Beyond Bikes"
                    }, void 0, false, {
                        fileName: "[project]/src/app/basicknowledge/page.js",
                        lineNumber: 296,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Learn about Beyond Bikes privacy policy, warranty coverage, data collection, and how we protect your personal information."
                    }, void 0, false, {
                        fileName: "[project]/src/app/basicknowledge/page.js",
                        lineNumber: 297,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "keywords",
                        content: "Beyond Bikes, privacy policy, warranty, data protection, e-bike, rental bike, user data, security measures"
                    }, void 0, false, {
                        fileName: "[project]/src/app/basicknowledge/page.js",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "robots",
                        content: "index, follow"
                    }, void 0, false, {
                        fileName: "[project]/src/app/basicknowledge/page.js",
                        lineNumber: 299,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }, void 0, false, {
                        fileName: "[project]/src/app/basicknowledge/page.js",
                        lineNumber: 300,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "canonical",
                        href: `${siteUrl}/warranty`
                    }, void 0, false, {
                        fileName: "[project]/src/app/basicknowledge/page.js",
                        lineNumber: 301,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:title",
                        content: "Privacy & Warranty Policy | Beyond Bikes"
                    }, void 0, false, {
                        fileName: "[project]/src/app/basicknowledge/page.js",
                        lineNumber: 304,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:description",
                        content: "Learn about Beyond Bikes privacy policy, warranty coverage, data collection, and how we protect your personal information."
                    }, void 0, false, {
                        fileName: "[project]/src/app/basicknowledge/page.js",
                        lineNumber: 305,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:url",
                        content: `${siteUrl}/warranty`
                    }, void 0, false, {
                        fileName: "[project]/src/app/basicknowledge/page.js",
                        lineNumber: 306,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:type",
                        content: "website"
                    }, void 0, false, {
                        fileName: "[project]/src/app/basicknowledge/page.js",
                        lineNumber: 307,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:image",
                        content: `${siteUrl}/images/beyond-bikes-og.png`
                    }, void 0, false, {
                        fileName: "[project]/src/app/basicknowledge/page.js",
                        lineNumber: 308,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }, void 0, false, {
                        fileName: "[project]/src/app/basicknowledge/page.js",
                        lineNumber: 311,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:title",
                        content: "Privacy & Warranty Policy | Beyond Bikes"
                    }, void 0, false, {
                        fileName: "[project]/src/app/basicknowledge/page.js",
                        lineNumber: 312,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:description",
                        content: "Learn about Beyond Bikes privacy policy, warranty coverage, data collection, and how we protect your personal information."
                    }, void 0, false, {
                        fileName: "[project]/src/app/basicknowledge/page.js",
                        lineNumber: 313,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:image",
                        content: `${siteUrl}/images/beyond-bikes-og.png`
                    }, void 0, false, {
                        fileName: "[project]/src/app/basicknowledge/page.js",
                        lineNumber: 314,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "WebPage",
                                "name": "Privacy Policy | Beyond Bikes",
                                "url": `${siteUrl}/warranty`,
                                "description": "Learn about Beyond Bikes privacy policy, warranty coverage, data collection, and how we protect your personal information.",
                                "publisher": {
                                    "@type": "Organization",
                                    "name": "Beyond Bikes",
                                    "logo": {
                                        "@type": "ImageObject",
                                        "url": `${siteUrl}/images/beyond-bikes-og.png`
                                    }
                                }
                            })
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/basicknowledge/page.js",
                        lineNumber: 317,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/basicknowledge/page.js",
                lineNumber: 294,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/basicknowledge/page.js",
                lineNumber: 339,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "container py-4 px-4 warranty-page",
                itemScope: true,
                itemType: "https://schema.org/WebPage",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-center fw-bold mb-4 mt-4",
                        style: {
                            color: '#f7931e'
                        },
                        itemProp: "name",
                        children: "Privacy Policy"
                    }, void 0, false, {
                        fileName: "[project]/src/app/basicknowledge/page.js",
                        lineNumber: 342,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                        fileName: "[project]/src/app/basicknowledge/page.js",
                        lineNumber: 343,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-4 fw-bold",
                                style: {
                                    color: '#f7931e'
                                },
                                children: "Abstract"
                            }, void 0, false, {
                                fileName: "[project]/src/app/basicknowledge/page.js",
                                lineNumber: 346,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "fs-6",
                                itemProp: "description",
                                children: "This section presents the privacy policy of Beyond Bikes Pty Ltd, outlining the companys approach to managing personal information. The policy is designed to ensure transparency and security in handling data collected from various stakeholders, including website visitors, mobile application users, members, job applicants, and service providers. The policy covers the types of data collected, the methods of data collection, purposes for data use, data sharing protocols, retention periods, data protection rights, security measures."
                            }, void 0, false, {
                                fileName: "[project]/src/app/basicknowledge/page.js",
                                lineNumber: 347,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/basicknowledge/page.js",
                        lineNumber: 345,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-4 fw-bold",
                                style: {
                                    color: '#f7931e'
                                },
                                children: "Introduction"
                            }, void 0, false, {
                                fileName: "[project]/src/app/basicknowledge/page.js",
                                lineNumber: 353,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "fs-6",
                                children: "Beyond Bikes Pty Ltd is committed to protecting the privacy and personal information of its stakeholders. This privacy policy provides an in-depth overview of how personal data is collected, utilized, stored, shared, and protected when individuals engage with our company. The policy applies to all interactions, including visiting our website, using mobile applications, participating in promotions or contests, registering as a member, applying for a job, or offering services to us. The policy aims to ensure compliance with data protection regulations and to provide clarity on how personal information is managed. It also outlines the rights of individuals concerning their personal data and how they can exercise these rights."
                            }, void 0, false, {
                                fileName: "[project]/src/app/basicknowledge/page.js",
                                lineNumber: 354,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/basicknowledge/page.js",
                        lineNumber: 352,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-4 fw-bold",
                                style: {
                                    color: '#f7931e'
                                },
                                children: "Methods of Data Collection"
                            }, void 0, false, {
                                fileName: "[project]/src/app/basicknowledge/page.js",
                                lineNumber: 360,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "fs-6",
                                children: "Data collection methods vary depending on the type of interaction with Beyond Bikes: Website or App Visitors: Collection of Technical and Usage Information through cookies and similar tools, as well as Identity, Contact, and Marketing Information if provided voluntarily. Users: Data is collected through automated methods, direct interactions, and third-party sources to fulfill contractual obligations, comply with legal requirements, and support legitimate business interests."
                            }, void 0, false, {
                                fileName: "[project]/src/app/basicknowledge/page.js",
                                lineNumber: 361,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "fs-6",
                                children: "Delivery Job Applicants: Data is collected when applying for employment through our platforms or third parties, based on consent and processing requirements for employment contracts. Service Providers: Data is obtained through direct interactions or automated processes, necessary for contract execution and legal obligations."
                            }, void 0, false, {
                                fileName: "[project]/src/app/basicknowledge/page.js",
                                lineNumber: 364,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/basicknowledge/page.js",
                        lineNumber: 359,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-4 fw-bold",
                                style: {
                                    color: '#f7931e'
                                },
                                children: "Information Collected"
                            }, void 0, false, {
                                fileName: "[project]/src/app/basicknowledge/page.js",
                                lineNumber: 370,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "fs-6",
                                children: "Personal data refers to any information that can identify a specific individual. This policy does not include data that has been anonymized. Beyond Bikes collects, utilizes, stores, and shares various categories of personal data, as described below:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/basicknowledge/page.js",
                                lineNumber: 371,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "fs-6",
                                children: "Details such as names, ID numbers (e.g., driver's license, passport), and dates of birth uniquely identify a person."
                            }, void 0, false, {
                                fileName: "[project]/src/app/basicknowledge/page.js",
                                lineNumber: 372,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "fs-6",
                                children: "Mailing addresses, email addresses, and phone numbers used for communication and billing."
                            }, void 0, false, {
                                fileName: "[project]/src/app/basicknowledge/page.js",
                                lineNumber: 373,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "fs-6",
                                children: "Bank account details, BSB numbers, and credit/debit card information are used for processing payments."
                            }, void 0, false, {
                                fileName: "[project]/src/app/basicknowledge/page.js",
                                lineNumber: 374,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "fs-6",
                                children: "Records of financial exchanges and transactions, including payments to and from Beyond Bikes."
                            }, void 0, false, {
                                fileName: "[project]/src/app/basicknowledge/page.js",
                                lineNumber: 375,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "fs-6",
                                children: "Data related to the devices and technology used to access our platforms—such as IP addresses, login details, browser specifics, time zones, locations, and, for members, GPS data tracking routes and trips with our bikes."
                            }, void 0, false, {
                                fileName: "[project]/src/app/basicknowledge/page.js",
                                lineNumber: 376,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "fs-6",
                                children: "User-specific data, like usernames, passwords, contracts (e.g., rental or rent-to-own), preferences, and survey feedback."
                            }, void 0, false, {
                                fileName: "[project]/src/app/basicknowledge/page.js",
                                lineNumber: 377,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "fs-6",
                                children: "Insights into how users interact with our services, including patterns and frequency of use."
                            }, void 0, false, {
                                fileName: "[project]/src/app/basicknowledge/page.js",
                                lineNumber: 378,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "fs-6",
                                children: "User preferences about receiving marketing messages and preferred communication channels."
                            }, void 0, false, {
                                fileName: "[project]/src/app/basicknowledge/page.js",
                                lineNumber: 379,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "fs-6",
                                children: "Generalized data derived from personal information, like statistics or demographic trends, does not directly identify individuals."
                            }, void 0, false, {
                                fileName: "[project]/src/app/basicknowledge/page.js",
                                lineNumber: 380,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/basicknowledge/page.js",
                        lineNumber: 369,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-4 fw-bold",
                                style: {
                                    color: '#f7931e'
                                },
                                children: "Purposes for Data Use"
                            }, void 0, false, {
                                fileName: "[project]/src/app/basicknowledge/page.js",
                                lineNumber: 384,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "fs-6",
                                children: "Personal information is used strictly for the purposes for which it was collected, unless a new, related purpose arises. The primary purposes include:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/basicknowledge/page.js",
                                lineNumber: 385,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Fulfilling contractual obligations."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/basicknowledge/page.js",
                                        lineNumber: 389,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Complying with legal and regulatory requirements."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/basicknowledge/page.js",
                                        lineNumber: 390,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Supporting legitimate business interests, such as improving services and engaging with customers."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/basicknowledge/page.js",
                                        lineNumber: 391,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/basicknowledge/page.js",
                                lineNumber: 388,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/basicknowledge/page.js",
                        lineNumber: 383,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-4 fw-bold",
                                style: {
                                    color: '#f7931e'
                                },
                                children: "Data Sharing Protocols"
                            }, void 0, false, {
                                fileName: "[project]/src/app/basicknowledge/page.js",
                                lineNumber: 396,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "fs-6",
                                children: "Beyond Bikes may share personal information with the following entities:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/basicknowledge/page.js",
                                lineNumber: 397,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Within the organization and associated companies."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/basicknowledge/page.js",
                                        lineNumber: 401,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "External Partners: Including customer service and engagement platforms, telematics service providers, payment processors, insurance companies, maintenance and repair partners, recruitment agencies, technology vendors, legal and financial advisors, delivery services, regulatory bodies, and potential partners in mergers or acquisitions."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/basicknowledge/page.js",
                                        lineNumber: 404,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/basicknowledge/page.js",
                                lineNumber: 400,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/basicknowledge/page.js",
                        lineNumber: 395,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-4 fw-bold",
                                style: {
                                    color: '#f7931e'
                                },
                                children: "Data Retention Policy"
                            }, void 0, false, {
                                fileName: "[project]/src/app/basicknowledge/page.js",
                                lineNumber: 411,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "fs-6",
                                children: "Beyond Bikes retains personal data only for as long as necessary to achieve the purposes for which it was collected, including legal, regulatory, tax, accounting, or reporting obligations. Core customer information is typically kept for up to six years post-relationship, primarily for tax purposes. In some cases, data may be anonymized for research or statistical analysis."
                            }, void 0, false, {
                                fileName: "[project]/src/app/basicknowledge/page.js",
                                lineNumber: 412,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/basicknowledge/page.js",
                        lineNumber: 410,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-4 fw-bold",
                                style: {
                                    color: '#f7931e'
                                },
                                children: "Data Protection Rights"
                            }, void 0, false, {
                                fileName: "[project]/src/app/basicknowledge/page.js",
                                lineNumber: 418,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "fs-6",
                                children: "Data protection laws provide individuals with specific rights regarding their personal information, including:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/basicknowledge/page.js",
                                lineNumber: 419,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Access to personal data."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/basicknowledge/page.js",
                                        lineNumber: 422,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Request for corrections."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/basicknowledge/page.js",
                                        lineNumber: 423,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Deletion of data."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/basicknowledge/page.js",
                                        lineNumber: 424,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Objection to processing."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/basicknowledge/page.js",
                                        lineNumber: 425,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Restriction of processing."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/basicknowledge/page.js",
                                        lineNumber: 426,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Data transfer requests."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/basicknowledge/page.js",
                                        lineNumber: 427,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Withdrawal of consent."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/basicknowledge/page.js",
                                        lineNumber: 428,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/basicknowledge/page.js",
                                lineNumber: 421,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "To exercise any of these rights, individuals can contact Beyond Bikes at ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "mailto:info.beyondbikes@gmail.com",
                                        style: {
                                            textDecoration: 'none'
                                        },
                                        children: "info.beyondbikes@gmail.com"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/basicknowledge/page.js",
                                        lineNumber: 430,
                                        columnNumber: 87
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/basicknowledge/page.js",
                                lineNumber: 430,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/basicknowledge/page.js",
                        lineNumber: 417,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-4 fw-bold",
                                style: {
                                    color: '#f7931e'
                                },
                                children: "Security Measures"
                            }, void 0, false, {
                                fileName: "[project]/src/app/basicknowledge/page.js",
                                lineNumber: 434,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "fs-6",
                                children: "Beyond Bikes has implemented robust security protocols to prevent unauthorized access, use, modification, or disclosure of personal data. Access is strictly limited to employees, contractors, and third parties with legitimate business needs."
                            }, void 0, false, {
                                fileName: "[project]/src/app/basicknowledge/page.js",
                                lineNumber: 435,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/basicknowledge/page.js",
                        lineNumber: 433,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-4 fw-bold",
                                style: {
                                    color: '#f7931e'
                                },
                                children: "Conclusion"
                            }, void 0, false, {
                                fileName: "[project]/src/app/basicknowledge/page.js",
                                lineNumber: 441,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "fs-6",
                                children: "Beyond Bikes remains committed to protecting personal information and ensuring transparency in its data management practices. This policy serves as a comprehensive guide for stakeholders on how their data is handled and the rights they have concerning their information."
                            }, void 0, false, {
                                fileName: "[project]/src/app/basicknowledge/page.js",
                                lineNumber: 442,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "This Privacy Statement is regularly reviewed and was last updated on ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "September 13, 2024."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/basicknowledge/page.js",
                                        lineNumber: 445,
                                        columnNumber: 83
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/basicknowledge/page.js",
                                lineNumber: 445,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/basicknowledge/page.js",
                        lineNumber: 440,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/basicknowledge/page.js",
                lineNumber: 341,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Footer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/basicknowledge/page.js",
                lineNumber: 450,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/src/app/rental/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// 'use client';
// import Head from 'next/head';
// import Image from 'next/image';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import { FaBicycle, FaLock, FaTools, FaMapMarkedAlt, FaHardHat } from 'react-icons/fa';
// export default function RentalEbikes() {
//   return (
//     <>
//       <Head>
//         <title>Rental E-Bikes | Weekly Affordable E-Bike Rentals with GPS</title>
//         <meta name="description" content="Affordable weekly e-bike rental with or without GPS. Includes helmet, delivery bag, charger, 2 locks, and free maintenance. Ideal for delivery riders and urban commuting." />
//         <meta name="keywords" content="e-bike rental, electric bike hire, GPS ebike rental, delivery ebike, affordable ebike rental, weekly ebike rental, helmet and charger included" />
//         <meta name="robots" content="index, follow" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="canonical" href="https://yourdomain.com/rentals" />
//       </Head>
//       <Header />
//       {/* Hero Section */}
//       <section className="bg-light py-5 text-center" itemScope itemType="https://schema.org/Product">
//         <div className="container">
//           <h1 className="display-5 fw-bold mb-3" style={{color:'#f7931e'}} itemProp="name">Affordable Weekly E-Bike Rentals</h1>
//           <p className="text-dark" itemProp="description" style={{fontSize:'18px',fontWeight:'600'}}>
//             Rent e-bikes with GPS — perfect for delivery riders. Includes helmet, charger, 2 locks, and maintenance.
//           </p>
//         </div>
//       </section>
//       {/* Terms Section */}
//       <section className="pb-2 pt-4" id="rental-terms">
//         <div className="container">
//           <h2 className="fw-bold mb-4" style={{color:'#f7931e'}}>Rental Terms & Conditions</h2>
//           <ul className="list-group list-group-flush mb-4">
//             <li className="list-group-item"><strong>1.</strong> The renter agrees to waive all claims and/or causes of action against the Lessor (BEYOND
// BIKES PTY LTD) arising from the operation, use, or misuse of the rented bicycle.
// </li>
//             <li className="list-group-item"><strong>2.</strong> The renter is responsible for all charges, including rental fees and damages to the
// equipment, and agrees to return the bicycle in the same condition as received (normal
// wear and tear excluded).
// </li>
//             <li className="list-group-item"><strong>3.</strong> Theft or total loss of the rental bike is the sole responsibility of the renter.</li>
//             <li className="list-group-item"><strong>4.</strong> The customer agrees to pay a total of $1,500 in the event of a total loss of the bike or theft of
// the battery. This amount is payable over a period of two (2) weeks following the occurrence
// of the mishap.</li>
// <li className="list-group-item"><strong>5.</strong> A minimum of 7 days notice is required prior to the scheduled return of the bike.</li>
// <li className="list-group-item"><strong>6.</strong> The renter is responsible for any misplaced, lost, or unlocked equipment and accessories.</li>
//           </ul>
//         </div>
//       </section>
//       <section className="py-2">
//         <div className="container">
//           <h2 className="fw-bold mb-4" style={{color:'#f7931e'}}>Accessories Provided</h2>
//           <ul className="list-group list-group-flush mb-4">
//             <li className="list-group-item"><strong>1.</strong> Helmet
// </li>
//             <li className="list-group-item"><strong>2.</strong> Delivery Bags
// </li>
//             <li className="list-group-item"><strong>3.</strong> GPS Tracker</li>
//             <li className="list-group-item"><strong>4.</strong> Bike Lock</li>
// <li className="list-group-item"><strong>5.</strong> Battery Lock</li>
// <li className="list-group-item"><strong>6.</strong>Charger</li>
//           </ul>
//         </div>
//       </section>
//       {/* Rental Package One */}
//       <section className="bg-white" id="no-gps">
//         <div className="container px-3">
//           <h2 className="fw-bold mb-4" style={{color:'#f7931e'}}>Bikes For Rent:-</h2>
//           {/* <p><FaBicycle className="me-2 fs-1" style={{color:'#f7931e'}}/> Includes delivery bag, 2 locks, helmet, charger, and free maintenance.</p> */}
//           {/* <p><FaLock className="me-2 fs-2" style={{color:'#f7931e'}}/> Bond: <strong>$300</strong> | Minimum Rental: <strong>2 weeks</strong></p> */}
//           <div className="row mt-4 mb-4 g-4">
//             {/* Bike 1 */}
// <div className="col-md-4" itemScope itemType="https://schema.org/Product">
//               <div className="card border-0 shadow-sm h-100">
//                 <img src="/images/Cartoon-Cycle-remove-text-latest.png" alt="Ebike100 rental" className="card-img-top product-image" loading="lazy" itemProp="image" />
//                 <div className="card-body text-center">
//                   <h5 className="fw-bold" style={{color:'rgb(255, 107, 0)'}} itemProp="name">E-bike 6-8h</h5>
//                   <p>Battery 48V 50A – <span style={{color:'rgb(255, 107, 0)'}} className="fw-bold">$60 AUD</span> per week</p>
//                   <p className="text-muted">Battery hours 6-8 hrs.</p>
//                 </div>
//               </div>
//             </div>
//             {/* Bike 2 */}
//             <div className="col-md-4" itemScope itemType="https://schema.org/Product">
//               <div className="card border-0 shadow-sm h-100">
//                 <img src="/images/Product-images-beyond-bikes-product-one-crop (3).png" alt="Flyebike electric bike rental" className="card-img-top product-image" loading="lazy" itemProp="image" />
//                 <div className="card-body text-center">
//                   <h5 className="fw-bold" style={{color:'rgb(255, 107, 0)'}} itemProp="name">E-bike 8-10h</h5>
//                   <p>Battery 48V 70A – <span className="fw-bold" style={{color:'rgb(255, 107, 0)'}} itemProp="offers" itemScope itemType="https://schema.org/Offer">
//                     <span itemProp="priceCurrency" content="USD" />$<span itemProp="price">65 AUD</span> 
//                   </span> per week</p>
//                   <p className="text-muted" itemProp="description">Battery hours 8-10 hrs.</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4" itemScope itemType="https://schema.org/Product">
//               <div className="card border-0 shadow-sm h-100">
//                 <img src="/images/Latest-Change-Angle-Red-Cycle-latest.png" alt="Ebike100 rental" className="card-img-top product-image" loading="lazy" itemProp="image" />
//                 <div className="card-body text-center">
//                   <h5 className="fw-bold" style={{color:'rgb(255, 107, 0)'}} itemProp="name">E-bike 10-12h</h5>
//                   <p>Battery 48V 80A – <span style={{color:'rgb(255, 107, 0)'}} className="fw-bold">$70 AUD</span> per week</p>
//                   <p className="text-muted">Battery hours 10 - 12 hours</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Rental Package Two */}
//       {/* <section className="py-5 mt-4 bg-light" id="with-gps">
//         <div className="container">
//           <h2 className="fw-bold mb-4" style={{color:'#f7931e'}}>Package Two: With GPS Tracking</h2>
//           <p><FaMapMarkedAlt className="me-2 fs-2" style={{color:'#f7931e'}}/> GPS installed on both battery and frame for theft protection.</p>
//           <p><FaHardHat className="me-2 fs-2" style={{color:'#f7931e'}}/> Comes with helmet, locks, delivery bag, charger, and maintenance.</p>
//           <p><FaLock className="me-2 fs-2" style={{color:'#f7931e'}}/> Bond: <strong>$500</strong> | Minimum Rental: <strong>2 weeks</strong></p>
//           <div className="my-5" itemScope itemType="https://schema.org/Product">
//             <Image src="/images/Product-images-beyond-bikes-product-one-crop (3).png" alt="Ebike100 with GPS" width={400} height={400} className="img-fluid rounded" priority itemProp="image" />
//             <h5 className="fw-bold mt-4" style={{color:'rgb(255, 107, 0)'}} itemProp="name">EBIKE100 With GPS</h5>
//             <p className="h6">Battery 48V 80AH – <span className="fw-bold" style={{color:'rgb(255, 107, 0)'}}>$80 / $90</span> per week</p>
//             <small className="text-dark" itemProp="description">Battery backup 10 - 12 hours</small>
//           </div>
//         </div>
//       </section> */}
//       {/* Call to Action */}
//       {/* <section className="text-dark py-5 text-center" style={{background:'#f7931e'}}>
//         <div className="container">
//           <h2 className="fw-bold text-light">Book Your Rental Now</h2>
//           <p className="mb-4 text-light" style={{fontSize:'18px'}}>Get on the road with our fully equipped electric bikes. Limited stock available!</p>
//           <a href="/contact" className="btn btn-dark btn-lg px-4">Get Started</a>
//         </div>
//       </section> */}
//       <Footer />
//     </>
//   );
// }
__turbopack_context__.s({
    "default": (()=>RentalEbikes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/noop-head.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Header.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Footer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Footer.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function RentalEbikes() {
    const siteUrl = "https://www.beyondbikes.com.au";
    const bikes = [
        {
            name: "E-bike 6-8h",
            battery: "48V 50A",
            price: 60,
            hours: "6-8 hrs",
            img: "/images/Cartoon-Cycle-remove-text-latest.png",
            alt: "Ebike100 rental"
        },
        {
            name: "E-bike 8-10h",
            battery: "48V 70A",
            price: 65,
            hours: "8-10 hrs",
            img: "/images/Product-images-beyond-bikes-product-one-crop (3).png",
            alt: "Flyebike electric bike rental"
        },
        {
            name: "E-bike 10-12h",
            battery: "48V 80A",
            price: 70,
            hours: "10-12 hrs",
            img: "/images/Latest-Change-Angle-Red-Cycle-latest.png",
            alt: "Ebike100 rental"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        children: "Rental E-Bikes | Weekly Affordable E-Bike Rentals with GPS"
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Affordable weekly e-bike rental with or without GPS. Includes helmet, delivery bag, charger, 2 locks, and free maintenance. Ideal for delivery riders and urban commuting."
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "keywords",
                        content: "e-bike rental, electric bike hire, GPS ebike rental, delivery ebike, affordable ebike rental, weekly ebike rental, helmet and charger included"
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "robots",
                        content: "index, follow"
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "canonical",
                        href: `${siteUrl}/rentals`
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:type",
                        content: "website"
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:title",
                        content: "Rental E-Bikes | Weekly Affordable E-Bike Rentals with GPS"
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:description",
                        content: "Affordable weekly e-bike rental with or without GPS. Includes helmet, delivery bag, charger, 2 locks, and free maintenance."
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:url",
                        content: `${siteUrl}/rentals`
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:image",
                        content: `${siteUrl}/images/rentals-og-image.png`
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:title",
                        content: "Rental E-Bikes | Weekly Affordable E-Bike Rentals with GPS"
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:description",
                        content: "Affordable weekly e-bike rental with or without GPS. Includes helmet, delivery bag, charger, 2 locks, and free maintenance."
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 207,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:image",
                        content: `${siteUrl}/images/rentals-og-image.png`
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "Product",
                                "name": "Affordable Weekly E-Bike Rentals",
                                "image": bikes.map((b)=>`${siteUrl}${b.img}`),
                                "description": "Rent e-bikes with GPS — perfect for delivery riders. Includes helmet, charger, 2 locks, and maintenance.",
                                "offers": bikes.map((bike)=>({
                                        "@type": "Offer",
                                        "name": bike.name,
                                        "priceCurrency": "AUD",
                                        "price": bike.price,
                                        "itemOffered": {
                                            "@type": "Product",
                                            "name": bike.name,
                                            "image": `${siteUrl}${bike.img}`,
                                            "description": `Battery ${bike.battery} – ${bike.hours}`
                                        },
                                        "availability": "https://schema.org/InStock"
                                    }))
                            })
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/rental/page.js",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/rental/page.js",
                lineNumber: 238,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-light py-5 text-center",
                itemScope: true,
                itemType: "https://schema.org/Product",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "display-5 fw-bold mb-3",
                            style: {
                                color: '#f7931e'
                            },
                            itemProp: "name",
                            children: "Affordable Weekly E-Bike Rentals"
                        }, void 0, false, {
                            fileName: "[project]/src/app/rental/page.js",
                            lineNumber: 243,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-dark",
                            itemProp: "description",
                            style: {
                                fontSize: '18px',
                                fontWeight: '600'
                            },
                            children: "Rent e-bikes with GPS — perfect for delivery riders. Includes helmet, charger, 2 locks, and maintenance."
                        }, void 0, false, {
                            fileName: "[project]/src/app/rental/page.js",
                            lineNumber: 246,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/rental/page.js",
                    lineNumber: 242,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/rental/page.js",
                lineNumber: 241,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "pb-2 pt-4",
                id: "rental-terms",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "fw-bold mb-4",
                            style: {
                                color: '#f7931e'
                            },
                            children: "Rental Terms & Conditions"
                        }, void 0, false, {
                            fileName: "[project]/src/app/rental/page.js",
                            lineNumber: 255,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "list-group list-group-flush mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "list-group-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "1."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/rental/page.js",
                                            lineNumber: 257,
                                            columnNumber: 45
                                        }, this),
                                        " The renter agrees to waive all claims and/or causes of action against the Lessor (BEYOND BIKES PTY LTD) arising from the operation, use, or misuse of the rented bicycle."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/rental/page.js",
                                    lineNumber: 257,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "list-group-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "2."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/rental/page.js",
                                            lineNumber: 258,
                                            columnNumber: 45
                                        }, this),
                                        " The renter is responsible for all charges, including rental fees and damages to the equipment, and agrees to return the bicycle in the same condition as received (normal wear and tear excluded)."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/rental/page.js",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "list-group-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "3."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/rental/page.js",
                                            lineNumber: 259,
                                            columnNumber: 45
                                        }, this),
                                        " Theft or total loss of the rental bike is the sole responsibility of the renter."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/rental/page.js",
                                    lineNumber: 259,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "list-group-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "4."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/rental/page.js",
                                            lineNumber: 260,
                                            columnNumber: 45
                                        }, this),
                                        " The customer agrees to pay a total of $1,500 in the event of a total loss of the bike or theft of the battery. This amount is payable over a period of two (2) weeks following the occurrence of the mishap."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/rental/page.js",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "list-group-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "5."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/rental/page.js",
                                            lineNumber: 261,
                                            columnNumber: 45
                                        }, this),
                                        " A minimum of 7 days notice is required prior to the scheduled return of the bike."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/rental/page.js",
                                    lineNumber: 261,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "list-group-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "6."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/rental/page.js",
                                            lineNumber: 262,
                                            columnNumber: 45
                                        }, this),
                                        " The renter is responsible for any misplaced, lost, or unlocked equipment and accessories."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/rental/page.js",
                                    lineNumber: 262,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/rental/page.js",
                            lineNumber: 256,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/rental/page.js",
                    lineNumber: 254,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/rental/page.js",
                lineNumber: 253,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "fw-bold mb-4",
                            style: {
                                color: '#f7931e'
                            },
                            children: "Accessories Provided"
                        }, void 0, false, {
                            fileName: "[project]/src/app/rental/page.js",
                            lineNumber: 270,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "list-group list-group-flush mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "list-group-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "1."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/rental/page.js",
                                            lineNumber: 272,
                                            columnNumber: 45
                                        }, this),
                                        " Helmet"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/rental/page.js",
                                    lineNumber: 272,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "list-group-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "2."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/rental/page.js",
                                            lineNumber: 273,
                                            columnNumber: 45
                                        }, this),
                                        " Delivery Bags"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/rental/page.js",
                                    lineNumber: 273,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "list-group-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "3."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/rental/page.js",
                                            lineNumber: 274,
                                            columnNumber: 45
                                        }, this),
                                        " GPS Tracker"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/rental/page.js",
                                    lineNumber: 274,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "list-group-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "4."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/rental/page.js",
                                            lineNumber: 275,
                                            columnNumber: 45
                                        }, this),
                                        " Bike Lock"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/rental/page.js",
                                    lineNumber: 275,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "list-group-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "5."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/rental/page.js",
                                            lineNumber: 276,
                                            columnNumber: 45
                                        }, this),
                                        " Battery Lock"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/rental/page.js",
                                    lineNumber: 276,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "list-group-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "6."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/rental/page.js",
                                            lineNumber: 277,
                                            columnNumber: 45
                                        }, this),
                                        " Charger"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/rental/page.js",
                                    lineNumber: 277,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/rental/page.js",
                            lineNumber: 271,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/rental/page.js",
                    lineNumber: 269,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/rental/page.js",
                lineNumber: 268,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white",
                id: "no-gps",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container px-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "fw-bold mb-4",
                            style: {
                                color: '#f7931e'
                            },
                            children: "Bikes For Rent"
                        }, void 0, false, {
                            fileName: "[project]/src/app/rental/page.js",
                            lineNumber: 285,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "row mt-4 mb-4 g-4",
                            children: bikes.map((bike, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-md-4",
                                    itemScope: true,
                                    itemType: "https://schema.org/Product",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card border-0 shadow-sm h-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: bike.img,
                                                alt: bike.alt,
                                                className: "card-img-top product-image",
                                                loading: "lazy",
                                                itemProp: "image"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/rental/page.js",
                                                lineNumber: 290,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "card-body text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "fw-bold",
                                                        style: {
                                                            color: 'rgb(255, 107, 0)'
                                                        },
                                                        itemProp: "name",
                                                        children: bike.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/rental/page.js",
                                                        lineNumber: 292,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            "Battery ",
                                                            bike.battery,
                                                            " – ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "fw-bold",
                                                                style: {
                                                                    color: 'rgb(255, 107, 0)'
                                                                },
                                                                itemProp: "offers",
                                                                itemScope: true,
                                                                itemType: "https://schema.org/Offer",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        itemProp: "priceCurrency",
                                                                        content: "AUD"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/rental/page.js",
                                                                        lineNumber: 294,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    "$",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        itemProp: "price",
                                                                        children: bike.price
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/rental/page.js",
                                                                        lineNumber: 294,
                                                                        columnNumber: 71
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/rental/page.js",
                                                                lineNumber: 293,
                                                                columnNumber: 49
                                                            }, this),
                                                            " per week"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/rental/page.js",
                                                        lineNumber: 293,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-muted",
                                                        itemProp: "description",
                                                        children: [
                                                            "Battery hours ",
                                                            bike.hours
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/rental/page.js",
                                                        lineNumber: 296,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/rental/page.js",
                                                lineNumber: 291,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/rental/page.js",
                                        lineNumber: 289,
                                        columnNumber: 17
                                    }, this)
                                }, idx, false, {
                                    fileName: "[project]/src/app/rental/page.js",
                                    lineNumber: 288,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/rental/page.js",
                            lineNumber: 286,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/rental/page.js",
                    lineNumber: 284,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/rental/page.js",
                lineNumber: 283,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Footer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/rental/page.js",
                lineNumber: 305,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/src/app/review/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// import Head from 'next/head';
// import Image from 'next/image';
// export default function Review() {
//   const team = [
//     {
//       name: 'Zadid Kawser',
//       reviewtitle:'Perfect for city living.',
//       reviewdescription:'Had a fantastic experience with Beyond Bikes! Sahil is incredibly professional and made the whole e-bike rental process super smooth and easy. Their bikes are well-maintained, reliable, and perfect for getting around the city. What really sets them apart is the warm, welcoming vibe. You’re even greeted by the sweetest dog named Jamie at the front! It’s little touches like that that make all the difference. Highly recommend them if you’re looking for a stress-free, quality e-bike rental experience.',
//       img: '/images/Latest-fifith-review.png',
//       alt: 'Paul Smith profile picture',
//       rating: 5,
//       role: 'Student',
//     },
//     {
//       name: 'Mei lisa',
//       reviewtitle:'Great service & great bikes!',
//       reviewdescription:'I had an excellent experience at Beyond Bikes. The owner was genuinely helpful, welcoming, and clearly passionate about what they do. The e-bike I rented has been incredibly reliable and has exceeded my expectations in performance. Highly recommend this shop to anyone looking for quality and great service.',
//       img: '/images/latest-sixth-review.png',
//       alt: 'Paul Smith profile picture',
//       rating: 5,
//       role: 'Student',
//     },
//     {
//       name: 'Sankeerth Reddy',
//       role: 'Student',
//       reviewtitle:'Eco-friendly and fun!',
//       reviewdescription:'Highly recommend Beyond Bike very understanding owner .Great for renting the Ebike. Lots of varieties available 👍',
//       img: '/images/Sankeerth.png',
//       alt: 'Frank Kinney profile picture',
//       rating: 5,
//     },
//     {
//       name: 'Silvano Kevin',
//       role: 'Student',
//       reviewtitle:'Great service & great bikes!',
//       reviewdescription:'Efficient, friendly, and fair prices. Couldn’t ask for more! Best Ebikes in Melbourne 👍Highly Recommend',
//       img: '/images/Silvano.png',
//       alt: 'John Almeda profile picture',
//       rating: 5,
//     },
//     {
//       name: 'elmuz zaman',
//       role: 'Student',
//       reviewtitle:'Perfect for city living.',
//       reviewdescription:'I rented myself an Ebike from beyond bikes.Guy helped me from start to finish.Really powerful Ebike and foldable too.Highly recommend 👍',
//       img: '/images/elmuz-zaman.png',
//       alt: 'Stella Larson profile picture',
//       rating: 5,
//     },
//     {
//       name: 'Sunny Patel',
//       reviewtitle:'Reliable, fast, and convenient.',
//       reviewdescription:'Good e bike. And Its powerful, comfortable, and ready for just about anything. Thank you.',
//       img: '/images/sunny.png',
//       alt: 'Paul Smith profile picture',
//       rating: 5,
//       role: 'Student',
//     },
//   ];
//   const renderStars = (count, number) => {
//     return '★'.repeat(count) + '☆'.repeat(5 - count);
//   };
//   return (
//     <>
//       <Head>
//         <title>Our Team</title>
//         <meta
//           name="description"
//           content="Meet our professional and dedicated team members. Learn more about our leadership and support team."
//         />
//       </Head>
//       <main className="container px-3 py-3">
//       <h1 className='text-center py-3' style={{color:'rgb(247, 147, 30)'}}>Reviews</h1>
//         <section className="row g-4">
//           {team.map((member, index) => (
//             <article className="col-md-6 col-lg-6" key={index}>
//               <div
//                 className="p-4 text-white text-center h-100"
//                 style={{ backgroundColor: '#f8f8f8', borderRadius: '1rem' }}
//               >
//                 <div
//                   className="mx-auto mb-3"
//                   style={{
//                     width: '100px',
//                     height: '100px',
//                     border: '4px solid #f7931e',
//                     borderRadius: '50%',
//                     overflow: 'hidden',
//                     position: 'relative',
//                   }}
//                 >
//                   <Image
//                     src={member.img}
//                     alt={member.alt}
//                     fill
//                     style={{ objectFit: 'cover' }}
//                     sizes="(max-width: 768px) 100px, 100px"
//                   />
//                 </div>
//                 <p className="small mb-2 fw-600" style={{color:'#f7931e'}}>
//                   {member.reviewtitle}
//                 </p>
//                 <p className="small mb-2 fw-600" style={{color:'#f7931e',fontStyle:'italic'}}>
//                   {member.reviewdescription}
//                 </p>
//                 <div style={{ color: '#f7931e', fontSize: '1.2rem' }}>
//                   {renderStars(member.rating)}
//                 </div>
//                 <div className="fw-bold" style={{color:'#f7931e',fontStyle:'italic'}}>- {member.name}</div>
//                 {/* <div className="small" style={{color:'#f7931e'}}>{member.role}</div> */}
//               </div>
//             </article>
//           ))}
//         </section>
//       </main>
//     </>
//   );
// }
// SEO
// import Head from 'next/head';
// import Image from 'next/image';
// export default function Review() {
//   const team = [
//     {
//       name: 'Zadid Kawser',
//       reviewtitle:'Perfect for city living.',
//       reviewdescription:'Had a fantastic experience with Beyond Bikes! Sahil is incredibly professional and made the whole e-bike rental process super smooth and easy. Their bikes are well-maintained, reliable, and perfect for getting around the city. What really sets them apart is the warm, welcoming vibe. You’re even greeted by the sweetest dog named Jamie at the front! It’s little touches like that that make all the difference. Highly recommend them if you’re looking for a stress-free, quality e-bike rental experience.',
//       img: '/images/Latest-fifith-review.png',
//       alt: 'Zadid Kawser profile picture',
//       rating: 5,
//       role: 'Student',
//       date: '2025-08-15',
//     },
//     {
//       name: 'Mei Lisa',
//       reviewtitle:'Great service & great bikes!',
//       reviewdescription:'I had an excellent experience at Beyond Bikes. The owner was genuinely helpful, welcoming, and clearly passionate about what they do. The e-bike I rented has been incredibly reliable and has exceeded my expectations in performance. Highly recommend this shop to anyone looking for quality and great service.',
//       img: '/images/latest-sixth-review.png',
//       alt: 'Mei Lisa profile picture',
//       rating: 5,
//       role: 'Student',
//       date: '2025-08-15',
//     },
//     {
//       name: 'Sankeerth Reddy',
//       role: 'Student',
//       reviewtitle:'Eco-friendly and fun!',
//       reviewdescription:'Highly recommend Beyond Bike very understanding owner. Great for renting the Ebike. Lots of varieties available 👍',
//       img: '/images/Sankeerth.png',
//       alt: 'Sankeerth Reddy profile picture',
//       rating: 5,
//       date: '2025-08-15',
//     },
//     {
//       name: 'Silvano Kevin',
//       role: 'Student',
//       reviewtitle:'Great service & great bikes!',
//       reviewdescription:'Efficient, friendly, and fair prices. Couldn’t ask for more! Best Ebikes in Melbourne 👍 Highly Recommend',
//       img: '/images/Silvano.png',
//       alt: 'Silvano Kevin profile picture',
//       rating: 5,
//       date: '2025-08-15',
//     },
//     {
//       name: 'Elmuz Zaman',
//       role: 'Student',
//       reviewtitle:'Perfect for city living.',
//       reviewdescription:'I rented myself an Ebike from Beyond Bikes. Guy helped me from start to finish. Really powerful Ebike and foldable too. Highly recommend 👍',
//       img: '/images/elmuz-zaman.png',
//       alt: 'Elmuz Zaman profile picture',
//       rating: 5,
//       date: '2025-08-15',
//     },
//     {
//       name: 'Sunny Patel',
//       reviewtitle:'Reliable, fast, and convenient.',
//       reviewdescription:'Good e-bike. It’s powerful, comfortable, and ready for just about anything. Thank you.',
//       img: '/images/sunny.png',
//       alt: 'Sunny Patel profile picture',
//       rating: 5,
//       role: 'Student',
//       date: '2025-08-15',
//     },
//   ];
//   const renderStars = (count) => {
//     return '★'.repeat(count) + '☆'.repeat(5 - count);
//   };
//   return (
//     <>
//       <Head>
//         {/* Primary Meta Tags */}
//         <title>Customer Reviews - Beyond Bikes E-bike Rentals</title>
//         <meta name="description" content="Read authentic customer reviews about Beyond Bikes' e-bike rentals. See why students love our service in Melbourne." />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href="https://www.beyondbikes.com.au/reviews" />
//         {/* Open Graph / Facebook */}
//         <meta property="og:type" content="website" />
//         <meta property="og:title" content="Customer Reviews - Beyond Bikes E-bike Rentals" />
//         <meta property="og:description" content="Read authentic customer reviews about Beyond Bikes' e-bike rentals. See why students love our service in Melbourne." />
//         <meta property="og:url" content="https://www.beyondbikes.com.au/reviews" />
//         <meta property="og:image" content="https://www.beyondbikes.com.au/images/reviews-og-image.png" />
//         {/* Twitter */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Customer Reviews - Beyond Bikes E-bike Rentals" />
//         <meta name="twitter:description" content="Read authentic customer reviews about Beyond Bikes' e-bike rentals. See why students love our service in Melbourne." />
//         <meta name="twitter:image" content="https://www.beyondbikes.com.au/images/reviews-og-image.png" />
//       </Head>
//       <main className="container px-3 py-3">
//         <h1 className='text-center py-3' style={{color:'rgb(247, 147, 30)'}}>Customer Reviews</h1>
//         <section className="row g-4" aria-label="Customer Reviews">
//           {team.map((member, index) => (
//             <article className="col-md-6 col-lg-6" key={index} itemScope itemType="https://schema.org/Review">
//               <div
//                 className="p-4 text-center h-100"
//                 style={{ backgroundColor: '#f8f8f8', borderRadius: '1rem' }}
//               >
//                 <div
//                   className="mx-auto mb-3"
//                   style={{
//                     width: '100px',
//                     height: '100px',
//                     border: '4px solid #f7931e',
//                     borderRadius: '50%',
//                     overflow: 'hidden',
//                     position: 'relative',
//                   }}
//                 >
//                   <Image
//                     src={member.img}
//                     alt={member.alt}
//                     fill
//                     style={{ objectFit: 'cover' }}
//                     sizes="(max-width: 768px) 100px, 100px"
//                     priority
//                   />
//                 </div>
//                 <p className="small mb-2 fw-600" style={{color:'#f7931e'}} itemProp="name">
//                   {member.reviewtitle}
//                 </p>
//                 <p className="small mb-2 fw-600" style={{color:'#f7931e', fontStyle:'italic'}} itemProp="reviewBody">
//                   {member.reviewdescription}
//                 </p>
//                 <div style={{ color: '#f7931e', fontSize: '1.2rem' }} itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
//                   <meta itemProp="ratingValue" content={member.rating.toString()} />
//                   <meta itemProp="bestRating" content="5" />
//                   {renderStars(member.rating)}
//                 </div>
//                 <div className="fw-bold" style={{color:'#f7931e', fontStyle:'italic'}} itemProp="author" itemScope itemType="https://schema.org/Person">
//                   - <span itemProp="name">{member.name}</span>
//                 </div>
//               </div>
//               {/* Structured Data JSON-LD */}
//               <script
//                 type="application/ld+json"
//                 dangerouslySetInnerHTML={{
//                   __html: JSON.stringify({
//                     "@context": "https://schema.org",
//                     "@type": "Review",
//                     "author": { "@type": "Person", "name": member.name },
//                     "datePublished": member.date,
//                     "reviewBody": member.reviewdescription,
//                     "reviewRating": {
//                       "@type": "Rating",
//                       "ratingValue": member.rating,
//                       "bestRating": 5
//                     },
//                     "itemReviewed": {
//                       "@type": "Product",
//                       "name": "Beyond Bikes E-bike Rental"
//                     }
//                   })
//                 }}
//               />
//             </article>
//           ))}
//         </section>
//       </main>
//     </>
//   );
// }
__turbopack_context__.s({
    "default": (()=>Review)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/noop-head.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Review() {
    const team = [
        {
            name: 'Zadid Kawser',
            reviewtitle: 'Perfect for city living.',
            reviewdescription: 'Had a fantastic experience with Beyond Bikes! Sahil is incredibly professional and made the whole e-bike rental process super smooth and easy. Their bikes are well-maintained, reliable, and perfect for getting around the city. What really sets them apart is the warm, welcoming vibe. You’re even greeted by the sweetest dog named Jamie at the front! It’s little touches like that that make all the difference. Highly recommend them if you’re looking for a stress-free, quality e-bike rental experience.',
            img: '/images/Latest-fifith-review.png',
            alt: 'Zadid Kawser profile picture',
            rating: 5,
            role: 'Student',
            date: '2025-08-15'
        },
        {
            name: 'Mei Lisa',
            reviewtitle: 'Great service & great bikes!',
            reviewdescription: 'I had an excellent experience at Beyond Bikes. The owner was genuinely helpful, welcoming, and clearly passionate about what they do. The e-bike I rented has been incredibly reliable and has exceeded my expectations in performance. Highly recommend this shop to anyone looking for quality and great service.',
            img: '/images/latest-sixth-review.png',
            alt: 'Mei Lisa profile picture',
            rating: 5,
            role: 'Student',
            date: '2025-08-15'
        },
        {
            name: 'Sankeerth Reddy',
            role: 'Student',
            reviewtitle: 'Eco-friendly and fun!',
            reviewdescription: 'Highly recommend Beyond Bike very understanding owner. Great for renting the Ebike. Lots of varieties available 👍',
            img: '/images/Sankeerth.png',
            alt: 'Sankeerth Reddy profile picture',
            rating: 5,
            date: '2025-08-15'
        },
        {
            name: 'Silvano Kevin',
            role: 'Student',
            reviewtitle: 'Great service & great bikes!',
            reviewdescription: 'Efficient, friendly, and fair prices. Couldn’t ask for more! Best Ebikes in Melbourne 👍 Highly Recommend',
            img: '/images/Silvano.png',
            alt: 'Silvano Kevin profile picture',
            rating: 5,
            date: '2025-08-15'
        },
        {
            name: 'Elmuz Zaman',
            role: 'Student',
            reviewtitle: 'Perfect for city living.',
            reviewdescription: 'I rented myself an Ebike from Beyond Bikes. Guy helped me from start to finish. Really powerful Ebike and foldable too. Highly recommend 👍',
            img: '/images/elmuz-zaman.png',
            alt: 'Elmuz Zaman profile picture',
            rating: 5,
            date: '2025-08-15'
        },
        {
            name: 'Sunny Patel',
            reviewtitle: 'Reliable, fast, and convenient.',
            reviewdescription: 'Good e-bike. It’s powerful, comfortable, and ready for just about anything. Thank you.',
            img: '/images/sunny.png',
            alt: 'Sunny Patel profile picture',
            rating: 5,
            role: 'Student',
            date: '2025-08-15'
        }
    ];
    const renderStars = (count)=>'★'.repeat(count) + '☆'.repeat(5 - count);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        children: "Customer Reviews - Beyond Bikes E-bike Rentals"
                    }, void 0, false, {
                        fileName: "[project]/src/app/review/page.js",
                        lineNumber: 371,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Read authentic customer reviews about Beyond Bikes' e-bike rentals. See why students love our service in Melbourne."
                    }, void 0, false, {
                        fileName: "[project]/src/app/review/page.js",
                        lineNumber: 372,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "robots",
                        content: "index, follow"
                    }, void 0, false, {
                        fileName: "[project]/src/app/review/page.js",
                        lineNumber: 376,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "canonical",
                        href: "https://www.beyondbikes.com.au/reviews"
                    }, void 0, false, {
                        fileName: "[project]/src/app/review/page.js",
                        lineNumber: 377,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:type",
                        content: "website"
                    }, void 0, false, {
                        fileName: "[project]/src/app/review/page.js",
                        lineNumber: 380,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:title",
                        content: "Customer Reviews - Beyond Bikes E-bike Rentals"
                    }, void 0, false, {
                        fileName: "[project]/src/app/review/page.js",
                        lineNumber: 381,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:description",
                        content: "Read authentic customer reviews about Beyond Bikes' e-bike rentals. See why students love our service in Melbourne."
                    }, void 0, false, {
                        fileName: "[project]/src/app/review/page.js",
                        lineNumber: 382,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:url",
                        content: "https://www.beyondbikes.com.au/reviews"
                    }, void 0, false, {
                        fileName: "[project]/src/app/review/page.js",
                        lineNumber: 383,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:image",
                        content: "https://www.beyondbikes.com.au/images/reviews-og-image.png"
                    }, void 0, false, {
                        fileName: "[project]/src/app/review/page.js",
                        lineNumber: 384,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }, void 0, false, {
                        fileName: "[project]/src/app/review/page.js",
                        lineNumber: 387,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:title",
                        content: "Customer Reviews - Beyond Bikes E-bike Rentals"
                    }, void 0, false, {
                        fileName: "[project]/src/app/review/page.js",
                        lineNumber: 388,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:description",
                        content: "Read authentic customer reviews about Beyond Bikes' e-bike rentals. See why students love our service in Melbourne."
                    }, void 0, false, {
                        fileName: "[project]/src/app/review/page.js",
                        lineNumber: 389,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:image",
                        content: "https://www.beyondbikes.com.au/images/reviews-og-image.png"
                    }, void 0, false, {
                        fileName: "[project]/src/app/review/page.js",
                        lineNumber: 390,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "ReviewPage",
                                "mainEntityOfPage": "https://www.beyondbikes.com.au/reviews",
                                "headline": "Customer Reviews - Beyond Bikes E-bike Rentals",
                                "description": "Read authentic customer reviews about Beyond Bikes' e-bike rentals. See why students love our service in Melbourne.",
                                "publisher": {
                                    "@type": "Organization",
                                    "name": "Beyond Bikes",
                                    "logo": {
                                        "@type": "ImageObject",
                                        "url": "https://www.beyondbikes.com.au/images/logo.png"
                                    }
                                },
                                "review": team.map((member)=>({
                                        "@type": "Review",
                                        "author": {
                                            "@type": "Person",
                                            "name": member.name
                                        },
                                        "datePublished": member.date,
                                        "reviewBody": member.reviewdescription,
                                        "reviewRating": {
                                            "@type": "Rating",
                                            "ratingValue": member.rating,
                                            "bestRating": 5
                                        },
                                        "itemReviewed": {
                                            "@type": "Product",
                                            "name": "Beyond Bikes E-bike Rental"
                                        }
                                    }))
                            })
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/review/page.js",
                        lineNumber: 393,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/review/page.js",
                lineNumber: 370,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "container px-3 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-center py-3",
                        style: {
                            color: 'rgb(247, 147, 30)'
                        },
                        children: "Customer Reviews"
                    }, void 0, false, {
                        fileName: "[project]/src/app/review/page.js",
                        lineNumber: 431,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "row g-4",
                        "aria-label": "Customer Reviews",
                        children: team.map((member, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "col-md-6 col-lg-6",
                                itemScope: true,
                                itemType: "https://schema.org/Review",
                                "aria-labelledby": `review-title-${index}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 text-center h-100",
                                    style: {
                                        backgroundColor: '#f8f8f8',
                                        borderRadius: '1rem'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mx-auto mb-3",
                                            style: {
                                                width: '100px',
                                                height: '100px',
                                                border: '4px solid #f7931e',
                                                borderRadius: '50%',
                                                overflow: 'hidden',
                                                position: 'relative'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: member.img,
                                                alt: member.alt,
                                                fill: true,
                                                style: {
                                                    objectFit: 'cover'
                                                },
                                                sizes: "(max-width: 768px) 100px, 100px",
                                                priority: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/review/page.js",
                                                lineNumber: 459,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/review/page.js",
                                            lineNumber: 448,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            id: `review-title-${index}`,
                                            className: "small mb-2 fw-600",
                                            style: {
                                                color: '#f7931e'
                                            },
                                            itemProp: "name",
                                            children: member.reviewtitle
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/review/page.js",
                                            lineNumber: 469,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "small mb-2 fw-600",
                                            style: {
                                                color: '#f7931e',
                                                fontStyle: 'italic'
                                            },
                                            itemProp: "reviewBody",
                                            children: member.reviewdescription
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/review/page.js",
                                            lineNumber: 478,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: '#f7931e',
                                                fontSize: '1.2rem'
                                            },
                                            itemProp: "reviewRating",
                                            itemScope: true,
                                            itemType: "https://schema.org/Rating",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                                                    itemProp: "ratingValue",
                                                    content: member.rating.toString()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/review/page.js",
                                                    lineNumber: 492,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                                                    itemProp: "bestRating",
                                                    content: "5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/review/page.js",
                                                    lineNumber: 493,
                                                    columnNumber: 19
                                                }, this),
                                                renderStars(member.rating)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/review/page.js",
                                            lineNumber: 486,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "fw-bold",
                                            style: {
                                                color: '#f7931e',
                                                fontStyle: 'italic'
                                            },
                                            itemProp: "author",
                                            itemScope: true,
                                            itemType: "https://schema.org/Person",
                                            children: [
                                                "- ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    itemProp: "name",
                                                    children: member.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/review/page.js",
                                                    lineNumber: 504,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/review/page.js",
                                            lineNumber: 497,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/review/page.js",
                                    lineNumber: 444,
                                    columnNumber: 15
                                }, this)
                            }, index, false, {
                                fileName: "[project]/src/app/review/page.js",
                                lineNumber: 437,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/review/page.js",
                        lineNumber: 435,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/review/page.js",
                lineNumber: 430,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/src/app/amazingoffers/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// 'use client';
// import Image from 'next/image';
// import Head from 'next/head';
// import '../styles/amazingoffers.css';
// export default function AmazingOffers() {
//   return (
//     <>
//       <Head>
//         <title>Restaurant Food Menu</title>
//         <meta name="description" content="Delicious food items on our restaurant menu with special discounts!" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//       </Head>
//       <section className="hero-section">
//   <h1 className="hero-title">STUDENTS DEAL</h1>
//   <h2 className="hero-subtitle">Coming Soon....</h2>
//   <div className="food-container">
//     {foodData.map((item, idx) => (
//       <div className="food-item" key={idx}>
//         <div className="image-wrapper">
//           <Image
//             src={item.image}
//             alt={item.label}
//             width={200}
//             height={200}
//           />
//         </div>
//         <p className="food-label">{item.label}</p>
//       </div>
//     ))}
//   </div>
// </section>
//     </>
//   );
// }
// const foodData = [
//   {
//     label: 'BEYOND BIKES CAPS',
//     image: '/images/cap-ebike.jpeg',
//   },
//   {
//     label: 'BEYOND BIKES HELMET',
//     image: '/images/helmetebikes.jpeg',
//   },
//   {
//     label: 'BEYOND BIKES T-SHIRT',
//     image: '/images/tshirtebikes.jpeg',
//   },
// ];
// 'use client';
// import Image from 'next/image';
// import Head from 'next/head';
// import '../styles/amazingoffers.css';
// export default function AmazingOffers() {
//   const pageTitle = "Student Deals | Beyond Bikes Melbourne | Special Offers";
//   const pageDescription =
//     "Discover exclusive student deals at Beyond Bikes Melbourne. Special discounts on e-bike accessories including caps, helmets, and T-shirts. Limited time offers!";
//   const pageUrl = "https://yourdomain.com/amazing-offers";
//   const pageImage = "https://yourdomain.com/images/helmetebikes.jpeg";
//   return (
//     <>
//       <Head>
//         {/* Primary SEO Tags */}
//         <title>{pageTitle}</title>
//         <meta name="description" content={pageDescription} />
//         <meta name="keywords" content="student deals Melbourne, beyond bikes offers, e-bike accessories, helmet discount, cap discount, T-shirt discount" />
//         <meta name="robots" content="index, follow" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="canonical" href={pageUrl} />
//         {/* Open Graph / Facebook */}
//         <meta property="og:type" content="website" />
//         <meta property="og:title" content={pageTitle} />
//         <meta property="og:description" content={pageDescription} />
//         <meta property="og:url" content={pageUrl} />
//         <meta property="og:image" content={pageImage} />
//         {/* Twitter Card */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={pageTitle} />
//         <meta name="twitter:description" content={pageDescription} />
//         <meta name="twitter:image" content={pageImage} />
//         {/* Structured Data for SEO */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "ProductCollection",
//               "name": "Student Deals - Beyond Bikes",
//               "description": pageDescription,
//               "url": pageUrl,
//               "image": pageImage,
//               "brand": {
//                 "@type": "Brand",
//                 "name": "Beyond Bikes Melbourne"
//               },
//               "offers": foodData.map(item => ({
//                 "@type": "Offer",
//                 "itemOffered": {
//                   "@type": "Product",
//                   "name": item.label,
//                   "image": `https://yourdomain.com${item.image}`,
//                   "brand": "Beyond Bikes Melbourne"
//                 },
//                 "priceCurrency": "AUD",
//                 "availability": "https://schema.org/InStock"
//               }))
//             })
//           }}
//         />
//       </Head>
//       <section className="hero-section">
//         <header>
//           <h1 className="hero-title">Students Deal</h1>
//           <h2 className="hero-subtitle">Coming Soon...</h2>
//         </header>
//         <div className="food-container" role="list">
//           {foodData.map((item, idx) => (
//             <article className="food-item" key={idx} role="listitem">
//               <div className="image-wrapper">
//                 <Image
//                   src={item.image}
//                   alt={`${item.label} - Special Student Offer`}
//                   width={200}
//                   height={200}
//                   loading="lazy"
//                 />
//               </div>
//               <p className="food-label">{item.label}</p>
//             </article>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }
// const foodData = [
//   {
//     label: 'Beyond Bikes Cap',
//     image: '/images/cap-ebike.jpeg',
//   },
//   {
//     label: 'Beyond Bikes Helmet',
//     image: '/images/helmetebikes.jpeg',
//   },
//   {
//     label: 'Beyond Bikes T-Shirt',
//     image: '/images/tshirtebikes.jpeg',
//   },
// ];
__turbopack_context__.s({
    "default": (()=>AmazingOffers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/noop-head.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function AmazingOffers() {
    const pageTitle = "Student Deals | Beyond Bikes Melbourne | Special Offers";
    const pageDescription = "Discover exclusive student deals at Beyond Bikes Melbourne. Special discounts on e-bike accessories including caps, helmets, and T-shirts. Limited time offers!";
    const pageUrl = "https://www.beyondbikes.com.au/amazing-offers";
    const pageImage = "https://www.beyondbikes.com.au/images/helmetebikes.jpeg";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        children: pageTitle
                    }, void 0, false, {
                        fileName: "[project]/src/app/amazingoffers/page.js",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: pageDescription
                    }, void 0, false, {
                        fileName: "[project]/src/app/amazingoffers/page.js",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "keywords",
                        content: "student deals Melbourne, beyond bikes offers, e-bike accessories, helmet discount, cap discount, T-shirt discount"
                    }, void 0, false, {
                        fileName: "[project]/src/app/amazingoffers/page.js",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "robots",
                        content: "index, follow"
                    }, void 0, false, {
                        fileName: "[project]/src/app/amazingoffers/page.js",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }, void 0, false, {
                        fileName: "[project]/src/app/amazingoffers/page.js",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "canonical",
                        href: pageUrl
                    }, void 0, false, {
                        fileName: "[project]/src/app/amazingoffers/page.js",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:type",
                        content: "website"
                    }, void 0, false, {
                        fileName: "[project]/src/app/amazingoffers/page.js",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:title",
                        content: pageTitle
                    }, void 0, false, {
                        fileName: "[project]/src/app/amazingoffers/page.js",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:description",
                        content: pageDescription
                    }, void 0, false, {
                        fileName: "[project]/src/app/amazingoffers/page.js",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:url",
                        content: pageUrl
                    }, void 0, false, {
                        fileName: "[project]/src/app/amazingoffers/page.js",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:image",
                        content: pageImage
                    }, void 0, false, {
                        fileName: "[project]/src/app/amazingoffers/page.js",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }, void 0, false, {
                        fileName: "[project]/src/app/amazingoffers/page.js",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:title",
                        content: pageTitle
                    }, void 0, false, {
                        fileName: "[project]/src/app/amazingoffers/page.js",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:description",
                        content: pageDescription
                    }, void 0, false, {
                        fileName: "[project]/src/app/amazingoffers/page.js",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:image",
                        content: pageImage
                    }, void 0, false, {
                        fileName: "[project]/src/app/amazingoffers/page.js",
                        lineNumber: 207,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "ProductCollection",
                                "name": "Student Deals - Beyond Bikes",
                                "description": pageDescription,
                                "url": pageUrl,
                                "image": pageImage,
                                "brand": {
                                    "@type": "Brand",
                                    "name": "Beyond Bikes Melbourne"
                                },
                                "offers": foodData.map((item)=>({
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Product",
                                            "name": item.label,
                                            "image": `https://www.beyondbikes.com.au${item.image}`,
                                            "brand": "Beyond Bikes Melbourne"
                                        },
                                        "priceCurrency": "AUD",
                                        "availability": "https://schema.org/InStock"
                                    }))
                            })
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/amazingoffers/page.js",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/amazingoffers/page.js",
                lineNumber: 187,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "hero-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "hero-title",
                                children: "Students Deal"
                            }, void 0, false, {
                                fileName: "[project]/src/app/amazingoffers/page.js",
                                lineNumber: 242,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "hero-subtitle",
                                children: "Coming Soon..."
                            }, void 0, false, {
                                fileName: "[project]/src/app/amazingoffers/page.js",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/amazingoffers/page.js",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "food-container",
                        role: "list",
                        children: foodData.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "food-item",
                                role: "listitem",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "image-wrapper",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: item.image,
                                            alt: `${item.label} - Special Student Offer`,
                                            width: 200,
                                            height: 200,
                                            loading: "lazy"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/amazingoffers/page.js",
                                            lineNumber: 250,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/amazingoffers/page.js",
                                        lineNumber: 249,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "food-label",
                                        style: {
                                            textTransform: 'uppercase'
                                        },
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/amazingoffers/page.js",
                                        lineNumber: 258,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/src/app/amazingoffers/page.js",
                                lineNumber: 248,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/amazingoffers/page.js",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/amazingoffers/page.js",
                lineNumber: 240,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
const foodData = [
    {
        label: 'Beyond Bikes Caps',
        image: '/images/cap-ebike.jpeg'
    },
    {
        label: 'Beyond Bikes Helmet',
        image: '/images/helmetebikes.jpeg'
    },
    {
        label: 'Beyond Bikes T-Shirt',
        image: '/images/tshirtebikes.jpeg'
    }
];
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__45623387._.js.map