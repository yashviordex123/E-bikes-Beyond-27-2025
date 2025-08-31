module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

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
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

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
//     <header className="main-header w-100 sticky-top text-dark" style={{backgroundColor:'#1a3b19',boxShadow: '0 4px 25px rgba(0, 0, 0, 0.8)', zIndex: 1000,}}>
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
//           backgroundColor: '#1a3b19',
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
        ],
        [
            '/termsandcondition',
            'Terms and Condition'
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
                    lineNumber: 333,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Header.js",
                lineNumber: 331,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "visually-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    children: "Beyond Bikes"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Header.js",
                    lineNumber: 340,
                    columnNumber: 39
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Header.js",
                lineNumber: 340,
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
                    className: "loader",
                    // color='#1A3B19'
                    // style={{ width: "4rem", height: "4rem" }}
                    role: "status",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "visually-hidden",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Header.js",
                        lineNumber: 361,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Header.js",
                    lineNumber: 355,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Header.js",
                lineNumber: 344,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "main-header w-100 sticky-top text-dark",
                style: {
                    backgroundColor: '#1A3B19',
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
                            lineNumber: 375,
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
                                lineNumber: 394,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Header.js",
                            lineNumber: 389,
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
                                            className: `nav-link set-header-text ${pathname === href ? 'set-color-menu fw-bold' : 'text-light'}`,
                                            children: label
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Header.js",
                                            lineNumber: 409,
                                            columnNumber: 19
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/src/app/components/Header.js",
                                        lineNumber: 408,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Header.js",
                                lineNumber: 403,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Header.js",
                            lineNumber: 402,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Header.js",
                    lineNumber: 374,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Header.js",
                lineNumber: 366,
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
                    className: "loader",
                    color: "#1A3B19",
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
                        lineNumber: 269,
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
                                        lineNumber: 284,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Footer.js",
                                    lineNumber: 279,
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
                                        lineNumber: 291,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Footer.js",
                                    lineNumber: 286,
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
                                        lineNumber: 299,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Footer.js",
                                    lineNumber: 293,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Footer.js",
                            lineNumber: 278,
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
                                        className: `nav-link link-light bg-transparent border-0 ${pathname === href ? 'set-color-menu fw-bold' : 'text-light'}`,
                                        onClick: ()=>handleNavigation(href),
                                        style: {
                                            cursor: 'pointer'
                                        },
                                        children: label
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Footer.js",
                                        lineNumber: 314,
                                        columnNumber: 17
                                    }, this)
                                }, href, false, {
                                    fileName: "[project]/src/app/components/Footer.js",
                                    lineNumber: 313,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Footer.js",
                            lineNumber: 304,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Footer.js",
                    lineNumber: 276,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Footer.js",
                lineNumber: 275,
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
                            lineNumber: 334,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Footer.js",
                        lineNumber: 333,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        className: "text-uppercase",
                        children: "© BEYOND BIKES PRIVATE LIMITED | ALL RIGHTS RESERVED"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Footer.js",
                        lineNumber: 336,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Footer.js",
                lineNumber: 332,
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
//           <h1 className="display-5 fw-bold mb-3" style={{color:'#1a3b19'}} itemProp="name">Affordable Weekly E-Bike Rentals</h1>
//           <p className="text-dark" itemProp="description" style={{fontSize:'18px',fontWeight:'600'}}>
//             Rent e-bikes with GPS — perfect for delivery riders. Includes helmet, charger, 2 locks, and maintenance.
//           </p>
//         </div>
//       </section>
//       {/* Terms Section */}
//       <section className="pb-2 pt-4" id="rental-terms">
//         <div className="container">
//           <h2 className="fw-bold mb-4" style={{color:'#1a3b19'}}>Rental Terms & Conditions</h2>
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
//           <h2 className="fw-bold mb-4" style={{color:'#1a3b19'}}>Accessories Provided</h2>
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
//           <h2 className="fw-bold mb-4" style={{color:'#1a3b19'}}>Bikes For Rent:-</h2>
//           {/* <p><FaBicycle className="me-2 fs-1" style={{color:'#1a3b19'}}/> Includes delivery bag, 2 locks, helmet, charger, and free maintenance.</p> */}
//           {/* <p><FaLock className="me-2 fs-2" style={{color:'#1a3b19'}}/> Bond: <strong>$300</strong> | Minimum Rental: <strong>2 weeks</strong></p> */}
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
//           <h2 className="fw-bold mb-4" style={{color:'#1a3b19'}}>Package Two: With GPS Tracking</h2>
//           <p><FaMapMarkedAlt className="me-2 fs-2" style={{color:'#1a3b19'}}/> GPS installed on both battery and frame for theft protection.</p>
//           <p><FaHardHat className="me-2 fs-2" style={{color:'#1a3b19'}}/> Comes with helmet, locks, delivery bag, charger, and maintenance.</p>
//           <p><FaLock className="me-2 fs-2" style={{color:'#1a3b19'}}/> Bond: <strong>$500</strong> | Minimum Rental: <strong>2 weeks</strong></p>
//           <div className="my-5" itemScope itemType="https://schema.org/Product">
//             <Image src="/images/Product-images-beyond-bikes-product-one-crop (3).png" alt="Ebike100 with GPS" width={400} height={400} className="img-fluid rounded" priority itemProp="image" />
//             <h5 className="fw-bold mt-4" style={{color:'rgb(255, 107, 0)'}} itemProp="name">EBIKE100 With GPS</h5>
//             <p className="h6">Battery 48V 80AH – <span className="fw-bold" style={{color:'rgb(255, 107, 0)'}}>$80 / $90</span> per week</p>
//             <small className="text-dark" itemProp="description">Battery backup 10 - 12 hours</small>
//           </div>
//         </div>
//       </section> */}
//       {/* Call to Action */}
//       {/* <section className="text-dark py-5 text-center" style={{background:'#1a3b19'}}>
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Header.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Footer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Footer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
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
function RentalEbikes() {
    const siteUrl = "https://www.beyondbikes.com.au";
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const filteredProducts = productsData[activeTab] || [];
    const bikes = [
        {
            name: "E-bike 6-8h",
            img: "/images/Cartoon-Cycle-remove-text-latest.png",
            alt: "E-bike 6-8h",
            specs: {
                seats: 2,
                horsepower: 500,
                fuel: "Petrol",
                engine: "3000cc",
                frontBrake: "Disc",
                stroke: "58.7 mm",
                gearBox: "6-Speed",
                mileage: "40 Km/L"
            },
            price: 56
        },
        {
            name: "Honda 140",
            img: "/images/Product-images-beyond-bikes-product-one-crop (3).png",
            alt: "Honda 140 Grey Bike",
            specs: {
                seats: 2,
                horsepower: 500,
                fuel: "Petrol",
                engine: "3000cc",
                frontBrake: "Disc",
                stroke: "58.7 mm",
                gearBox: "6-Speed",
                mileage: "40 Km/L"
            },
            price: 56
        },
        {
            name: "KPR 150",
            img: "/images/Latest-Change-Angle-Red-Cycle-latest.png",
            alt: "White KPR 150 Bike",
            specs: {
                seats: 2,
                horsepower: 500,
                fuel: "Petrol",
                engine: "3000cc",
                frontBrake: "Disc",
                stroke: "58.7 mm",
                gearBox: "6-Speed",
                mileage: "40 Km/L"
            },
            price: 56
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
                        lineNumber: 223,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Affordable weekly e-bike rental with or without GPS. Includes helmet, delivery bag, charger, 2 locks, and free maintenance. Ideal for delivery riders and urban commuting."
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "keywords",
                        content: "e-bike rental, electric bike hire, GPS ebike rental, delivery ebike, affordable ebike rental, weekly ebike rental, helmet and charger included"
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "robots",
                        content: "index, follow"
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "canonical",
                        href: `${siteUrl}/rentals`
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 227,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:type",
                        content: "website"
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:title",
                        content: "Rental E-Bikes | Weekly Affordable E-Bike Rentals with GPS"
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:description",
                        content: "Affordable weekly e-bike rental with or without GPS. Includes helmet, delivery bag, charger, 2 locks, and free maintenance."
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 232,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:url",
                        content: `${siteUrl}/rentals`
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:image",
                        content: `${siteUrl}/images/rentals-og-image.png`
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 234,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 237,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:title",
                        content: "Rental E-Bikes | Weekly Affordable E-Bike Rentals with GPS"
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 238,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:description",
                        content: "Affordable weekly e-bike rental with or without GPS. Includes helmet, delivery bag, charger, 2 locks, and free maintenance."
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 239,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:image",
                        content: `${siteUrl}/images/rentals-og-image.png`
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 240,
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
                        lineNumber: 243,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/rental/page.js",
                lineNumber: 221,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/rental/page.js",
                lineNumber: 270,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-5 text-center",
                        style: {
                            backgroundImage: "url('/images/RentalBackgroundImageLatest.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            height: '70vh',
                            display: 'flex',
                            alignItems: 'center',
                            opacity: '0.8',
                            position: "relative",
                            zIndex: 1
                        },
                        itemScope: true,
                        itemType: "https://schema.org/Product",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "display-5 fw-bold mb-3",
                                style: {
                                    color: '#1a3b19'
                                },
                                itemProp: "name",
                                children: "Affordable Weekly E-Bike Rentals"
                            }, void 0, false, {
                                fileName: "[project]/src/app/rental/page.js",
                                lineNumber: 287,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/rental/page.js",
                            lineNumber: 286,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 274,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "w-100 py-2",
                        "aria-label": "Fleet Features",
                        itemScope: true,
                        itemType: "https://schema.org/Service",
                        style: {
                            backgroundColor: "#1A3B19",
                            marginTop: "-50px",
                            position: "relative",
                            zIndex: 2
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "row g-3 text-center text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: "col-6 col-md-3",
                                        itemProp: "feature",
                                        itemScope: true,
                                        itemType: "https://schema.org/PropertyValue",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "py-4 px-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "bi bi-bicycle fs-1 mb-2",
                                                    "aria-hidden": "true"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 313,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "feature-title mb-1",
                                                    itemProp: "name",
                                                    children: "Delivers 35 Orders Per Day"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 314,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/rental/page.js",
                                            lineNumber: 312,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/rental/page.js",
                                        lineNumber: 311,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: "col-6 col-md-3",
                                        itemProp: "feature",
                                        itemScope: true,
                                        itemType: "https://schema.org/PropertyValue",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "py-4 px-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "bi bi-geo-alt-fill fs-1 mb-2",
                                                    "aria-hidden": "true"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 323,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "feature-title mb-1",
                                                    itemProp: "name",
                                                    children: "GPS System"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 324,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/rental/page.js",
                                            lineNumber: 322,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/rental/page.js",
                                        lineNumber: 321,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: "col-6 col-md-3",
                                        itemProp: "feature",
                                        itemScope: true,
                                        itemType: "https://schema.org/PropertyValue",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "py-4 px-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "bi bi-tools fs-1 mb-2",
                                                    "aria-hidden": "true"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 333,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "feature-title mb-0 fw-bold",
                                                    itemProp: "name",
                                                    children: "Maintenance Included – Save £400 a Year"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 334,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/rental/page.js",
                                            lineNumber: 332,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/rental/page.js",
                                        lineNumber: 331,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: "col-6 col-md-3",
                                        itemProp: "feature",
                                        itemScope: true,
                                        itemType: "https://schema.org/PropertyValue",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "py-4 px-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "bi bi-person-fill-lock fs-1 mb-2",
                                                    "aria-hidden": "true"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 343,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "feature-title mb-0 fw-bold",
                                                    itemProp: "name",
                                                    children: "Anti-Theft"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 344,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/rental/page.js",
                                            lineNumber: 342,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/rental/page.js",
                                        lineNumber: 341,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/rental/page.js",
                                lineNumber: 308,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/rental/page.js",
                            lineNumber: 307,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 295,
                        columnNumber: 8
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].section, {
                        id: "why-choose",
                        className: "container text-center py-5",
                        "aria-labelledby": "why-choose-heading",
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.6
                        },
                        itemScope: true,
                        itemType: "https://schema.org/Service",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "why-choose-heading",
                                className: "mb-3 fw-bold",
                                style: {
                                    color: "#1A3B19",
                                    fontFamily: "system-ui"
                                },
                                itemProp: "name",
                                children: "Why Choose Our Beyond Bikes"
                            }, void 0, false, {
                                fileName: "[project]/src/app/rental/page.js",
                                lineNumber: 543,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted mb-5",
                                style: {
                                    fontFamily: "system-ui"
                                },
                                itemProp: "description",
                                children: "Discover the benefits of renting with Beyond Bikes"
                            }, void 0, false, {
                                fileName: "[project]/src/app/rental/page.js",
                                lineNumber: 551,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "row g-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-12 col-md-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 h-100 d-flex flex-column align-items-center",
                                            itemScope: true,
                                            itemType: "https://schema.org/Service",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "bi bi-fuel-pump fs-1 mb-3",
                                                    style: {
                                                        color: "#1A3B19"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 563,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "fs-5 fw-semibold mb-2",
                                                    style: {
                                                        color: "#1A3B19"
                                                    },
                                                    itemProp: "serviceType",
                                                    children: "Tired Of High Fuel Costs and Unreliable Rides?"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 564,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted small",
                                                    style: {
                                                        fontFamily: "system-ui"
                                                    },
                                                    itemProp: "description",
                                                    children: "Beyond Bikes is your smarter,greener, and more affordable way to mave through Victoria. Trusted by delivery riders,students,and city explorers."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 567,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/rental/page.js",
                                            lineNumber: 558,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/rental/page.js",
                                        lineNumber: 557,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-12 col-md-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 h-100 d-flex flex-column align-items-center",
                                            itemScope: true,
                                            itemType: "https://schema.org/Service",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "bi bi-lightning-charge fs-1 mb-3",
                                                    style: {
                                                        color: "#1A3B19"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 581,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "fs-5 fw-semibold mb-2",
                                                    style: {
                                                        color: "#1A3B19"
                                                    },
                                                    itemProp: "serviceType",
                                                    children: "SMOOTH ELECTRIC RIDE -NO GEARS, NO STRESS"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 582,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted small",
                                                    style: {
                                                        fontFamily: "system-ui"
                                                    },
                                                    itemProp: "description",
                                                    children: "Our e-bikes are designed for simplicity.Just hop on and go — no clutch, no fuel, no hassle. Glide through traffic with ease and comfort.              "
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 585,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/rental/page.js",
                                            lineNumber: 576,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/rental/page.js",
                                        lineNumber: 575,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-12 col-md-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 h-100 d-flex flex-column align-items-center",
                                            itemScope: true,
                                            itemType: "https://schema.org/Service",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "bi bi-cash-coin fs-1 mb-3",
                                                    style: {
                                                        color: "#1A3B19"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 598,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "fs-5 fw-semibold mb-2",
                                                    style: {
                                                        color: "#1A3B19"
                                                    },
                                                    itemProp: "serviceType",
                                                    children: "SAVE FUEL. SAVE MONEY."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 599,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted small",
                                                    style: {
                                                        fontFamily: "system-ui"
                                                    },
                                                    itemProp: "description",
                                                    children: "WHY SPEND MORE? Get your ride at just $65/week — Includes everything you need. No fuel. No extra maintenance."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 602,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/rental/page.js",
                                            lineNumber: 593,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/rental/page.js",
                                        lineNumber: 592,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/rental/page.js",
                                lineNumber: 555,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "row g-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-12 col-md-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 h-100 d-flex flex-column align-items-center",
                                            itemScope: true,
                                            itemType: "https://schema.org/Service",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "bi bi-geo-alt fs-1 mb-3",
                                                    style: {
                                                        color: "#1A3B19"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 620,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "fs-5 fw-semibold mb-2",
                                                    style: {
                                                        color: "#1A3B19"
                                                    },
                                                    itemProp: "serviceType",
                                                    children: "BUILT FOR AUSTRALIAN LIFE"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 621,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted small",
                                                    style: {
                                                        fontFamily: "system-ui"
                                                    },
                                                    itemProp: "description",
                                                    children: "Whether you are: A food delivery rider Astudent commuting to campus Exploring the city on weekends Beyond Bikes fits your lifestyle."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 625,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/rental/page.js",
                                            lineNumber: 615,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/rental/page.js",
                                        lineNumber: 614,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-12 col-md-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 h-100 d-flex flex-column align-items-center",
                                            itemScope: true,
                                            itemType: "https://schema.org/Service",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "bi bi-calendar-check fs-1 mb-3",
                                                    style: {
                                                        color: "#1A3B19"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 642,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "fs-5 fw-semibold mb-2",
                                                    style: {
                                                        color: "#1A3B19"
                                                    },
                                                    itemProp: "serviceType",
                                                    children: "FREE TEST RIDE - EASY BOOKING"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 643,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted small",
                                                    style: {
                                                        fontFamily: "system-ui"
                                                    },
                                                    itemProp: "description",
                                                    children: "Still unsure? Try it first! Free Test Ride Available Call/WhatsApp: +61 422 032 961 DM us now to book & start riding smarter!             "
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 647,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/rental/page.js",
                                            lineNumber: 637,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/rental/page.js",
                                        lineNumber: 636,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/rental/page.js",
                                lineNumber: 612,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 533,
                        columnNumber: 1
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
                                    color: "#1A3B19",
                                    fontFamily: 'system-ui'
                                },
                                children: "Bikes for Rent"
                            }, void 0, false, {
                                fileName: "[project]/src/app/rental/page.js",
                                lineNumber: 669,
                                columnNumber: 11
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mt-3 mb-5 text-center",
                                style: {
                                    color: "#1A3B19",
                                    fontFamily: 'system-ui'
                                },
                                children: "Our E-Bikes for Rent"
                            }, void 0, false, {
                                fileName: "[project]/src/app/rental/page.js",
                                lineNumber: 671,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "row",
                                children: filteredProducts.map((product, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-12 col-md-4 mb-4 text-center shadow-hover",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "product-card card border-0 shadow-sm text-center h-100 position-relative",
                                            itemScope: true,
                                            style: {
                                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1)",
                                                borderRadius: "0.5rem",
                                                padding: "1rem",
                                                backgroundColor: "#f9f9f9",
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
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 691,
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
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 699,
                                                    columnNumber: 9
                                                }, this),
                                                pathname === "/" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "fs-5 fw-semibold",
                                                    style: {
                                                        color: '#1A3B19',
                                                        fontFamily: 'system-ui'
                                                    },
                                                    itemProp: "name",
                                                    children: product.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 712,
                                                    columnNumber: 11
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "fs-5 fw-semibold",
                                                    style: {
                                                        color: '#1A3B19',
                                                        fontFamily: 'system-ui'
                                                    },
                                                    itemProp: "name",
                                                    children: product.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 716,
                                                    columnNumber: 11
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "product-price mt-2 fs-5",
                                                    itemProp: "offers",
                                                    style: {
                                                        color: '#1A3B19'
                                                    },
                                                    itemScope: true,
                                                    itemType: "https://schema.org/Offer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            itemProp: "price",
                                                            style: {
                                                                color: '#1A3B19',
                                                                fontFamily: 'system-ui'
                                                            },
                                                            children: product.price
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/rental/page.js",
                                                            lineNumber: 729,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                                                            itemProp: "priceCurrency",
                                                            content: "AUD"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/rental/page.js",
                                                            lineNumber: 730,
                                                            columnNumber: 11
                                                        }, this),
                                                        product.oldPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-decoration-line-through ms-2 fw-600",
                                                            style: {
                                                                color: '#ccc'
                                                            },
                                                            children: product.oldPrice
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/rental/page.js",
                                                            lineNumber: 732,
                                                            columnNumber: 13
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 722,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "d-flex justify-content-center gap-4 my-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "bi bi-battery-charging fs-4",
                                                                    style: {
                                                                        color: '#1A3B19'
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/rental/page.js",
                                                                    lineNumber: 739,
                                                                    columnNumber: 5
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "small mb-0",
                                                                    style: {
                                                                        color: '#1A3B19'
                                                                    },
                                                                    children: product.battery || "Battery"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/rental/page.js",
                                                                    lineNumber: 741,
                                                                    columnNumber: 5
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/rental/page.js",
                                                            lineNumber: 738,
                                                            columnNumber: 3
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "bi bi-gear fs-4",
                                                                    style: {
                                                                        color: '#1A3B19'
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/rental/page.js",
                                                                    lineNumber: 744,
                                                                    columnNumber: 5
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "small mb-0",
                                                                    style: {
                                                                        color: '#1A3B19'
                                                                    },
                                                                    children: product.motor || "Motor"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/rental/page.js",
                                                                    lineNumber: 746,
                                                                    columnNumber: 5
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/rental/page.js",
                                                            lineNumber: 743,
                                                            columnNumber: 3
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "bi bi-speedometer2 fs-4",
                                                                    style: {
                                                                        color: '#1A3B19'
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/rental/page.js",
                                                                    lineNumber: 749,
                                                                    columnNumber: 5
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "small mb-0",
                                                                    style: {
                                                                        color: '#1A3B19'
                                                                    },
                                                                    children: product.range || "Range"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/rental/page.js",
                                                                    lineNumber: 751,
                                                                    columnNumber: 5
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/rental/page.js",
                                                            lineNumber: 748,
                                                            columnNumber: 3
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 737,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/rental/page.js",
                                            lineNumber: 677,
                                            columnNumber: 7
                                        }, this)
                                    }, product.id, false, {
                                        fileName: "[project]/src/app/rental/page.js",
                                        lineNumber: 676,
                                        columnNumber: 5
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/rental/page.js",
                                lineNumber: 674,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 659,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-5",
                        "aria-label": "Accessories Provided",
                        itemScope: true,
                        itemType: "https://schema.org/OfferCatalog",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "fw-bold mb-4 text-center",
                                    style: {
                                        color: "#1a3b19"
                                    },
                                    itemProp: "name",
                                    children: "Accessories Provided"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/rental/page.js",
                                    lineNumber: 785,
                                    columnNumber: 5
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "row g-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "col-6 col-md-4 col-lg-3",
                                            itemProp: "itemListElement",
                                            itemScope: true,
                                            itemType: "https://schema.org/Offer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "card h-100 text-center p-3 shadow-sm border-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "bi bi-shield-fill-check fs-1 mb-3 text-success",
                                                        "aria-hidden": "true"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/rental/page.js",
                                                        lineNumber: 793,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "fw-semibold",
                                                        itemProp: "name",
                                                        children: "Helmet"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/rental/page.js",
                                                        lineNumber: 794,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/rental/page.js",
                                                lineNumber: 792,
                                                columnNumber: 9
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/rental/page.js",
                                            lineNumber: 791,
                                            columnNumber: 7
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "col-6 col-md-4 col-lg-3",
                                            itemProp: "itemListElement",
                                            itemScope: true,
                                            itemType: "https://schema.org/Offer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "card h-100 text-center p-3 shadow-sm border-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "bi bi-bag-fill fs-1 mb-3 text-success",
                                                        "aria-hidden": "true"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/rental/page.js",
                                                        lineNumber: 801,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "fw-semibold",
                                                        itemProp: "name",
                                                        children: "Delivery Bags"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/rental/page.js",
                                                        lineNumber: 802,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/rental/page.js",
                                                lineNumber: 800,
                                                columnNumber: 9
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/rental/page.js",
                                            lineNumber: 799,
                                            columnNumber: 7
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "col-6 col-md-4 col-lg-3",
                                            itemProp: "itemListElement",
                                            itemScope: true,
                                            itemType: "https://schema.org/Offer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "card h-100 text-center p-3 shadow-sm border-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "bi bi-geo-alt-fill fs-1 mb-3 text-success",
                                                        "aria-hidden": "true"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/rental/page.js",
                                                        lineNumber: 809,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "fw-semibold",
                                                        itemProp: "name",
                                                        children: "GPS Tracker"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/rental/page.js",
                                                        lineNumber: 810,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/rental/page.js",
                                                lineNumber: 808,
                                                columnNumber: 9
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/rental/page.js",
                                            lineNumber: 807,
                                            columnNumber: 7
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "col-6 col-md-4 col-lg-3",
                                            itemProp: "itemListElement",
                                            itemScope: true,
                                            itemType: "https://schema.org/Offer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "card h-100 text-center p-3 shadow-sm border-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "bi bi-lock-fill fs-1 mb-3 text-success",
                                                        "aria-hidden": "true"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/rental/page.js",
                                                        lineNumber: 817,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "fw-semibold",
                                                        itemProp: "name",
                                                        children: "Bike Lock"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/rental/page.js",
                                                        lineNumber: 818,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/rental/page.js",
                                                lineNumber: 816,
                                                columnNumber: 9
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/rental/page.js",
                                            lineNumber: 815,
                                            columnNumber: 7
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "col-6 col-md-4 col-lg-3",
                                            itemProp: "itemListElement",
                                            itemScope: true,
                                            itemType: "https://schema.org/Offer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "card h-100 text-center p-3 shadow-sm border-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "bi bi-battery-full fs-1 mb-3 text-success",
                                                        "aria-hidden": "true"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/rental/page.js",
                                                        lineNumber: 825,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "fw-semibold",
                                                        itemProp: "name",
                                                        children: "Battery Lock"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/rental/page.js",
                                                        lineNumber: 826,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/rental/page.js",
                                                lineNumber: 824,
                                                columnNumber: 9
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/rental/page.js",
                                            lineNumber: 823,
                                            columnNumber: 7
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "col-6 col-md-4 col-lg-3",
                                            itemProp: "itemListElement",
                                            itemScope: true,
                                            itemType: "https://schema.org/Offer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "card h-100 text-center p-3 shadow-sm border-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "bi bi-lightning-charge-fill fs-1 mb-3 text-success",
                                                        "aria-hidden": "true"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/rental/page.js",
                                                        lineNumber: 833,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "fw-semibold",
                                                        itemProp: "name",
                                                        children: "Charger"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/rental/page.js",
                                                        lineNumber: 834,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/rental/page.js",
                                                lineNumber: 832,
                                                columnNumber: 9
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/rental/page.js",
                                            lineNumber: 831,
                                            columnNumber: 7
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/rental/page.js",
                                    lineNumber: 788,
                                    columnNumber: 5
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/rental/page.js",
                            lineNumber: 784,
                            columnNumber: 3
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 778,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/rental/page.js",
                lineNumber: 273,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Footer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/rental/page.js",
                lineNumber: 845,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__f72ae0e0._.js.map