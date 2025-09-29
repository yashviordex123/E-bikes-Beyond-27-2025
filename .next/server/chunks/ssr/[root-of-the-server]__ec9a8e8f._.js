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
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // ✅ Scroll state
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
            '/bookrent',
            'Make a Payment'
        ]
    ];
    const handleNavClick = (href)=>{
        if (pathname !== href) {
            setLoading(true);
            setTimeout(()=>{
                router.push(href);
            }, 100);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
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
                    lineNumber: 349,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Header.js",
                lineNumber: 347,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "visually-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    children: "Beyond Bikes"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Header.js",
                    lineNumber: 356,
                    columnNumber: 39
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Header.js",
                lineNumber: 356,
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
                        lineNumber: 377,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Header.js",
                    lineNumber: 371,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Header.js",
                lineNumber: 360,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `main-header w-100 sticky-top text-dark ${scrolled ? "scrolled" : ""}`,
                style: {
                    backgroundColor: '#1A3B19',
                    boxShadow: '0 4px 25px rgba(0, 0, 0, 0.8)',
                    zIndex: 1000
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container position-relative py-sm-3 py-1 d-flex justify-content-between align-items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/images/15-09-Latest-Freedom-Logo-12-15.png",
                            alt: "Beyond Bikes Logo",
                            className: `logo ${scrolled ? "logo-small" : ""}`,
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
                            lineNumber: 391,
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
                                lineNumber: 410,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Header.js",
                            lineNumber: 405,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "d-md-flex flex-grow-1 justify-content-end",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: `nav flex-column flex-md-row text-center custom-nav set-bg-header ${menuOpen ? 'open' : ''}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "nav-item d-md-none text-end mb-0 pb-0 pe-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn text-light fs-3",
                                            onClick: ()=>setMenuOpen(false),
                                            "aria-label": "Close menu",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "bi bi-x-lg"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Header.js",
                                                lineNumber: 430,
                                                columnNumber: 5
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Header.js",
                                            lineNumber: 425,
                                            columnNumber: 3
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Header.js",
                                        lineNumber: 424,
                                        columnNumber: 15
                                    }, this),
                                    navLinks.map(([href, label], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "nav-item mt-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                role: "button",
                                                onClick: ()=>handleNavClick(href),
                                                className: `nav-link set-header-text ${pathname === href ? 'set-color-menu fw-bold' : 'text-light'}`,
                                                children: label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Header.js",
                                                lineNumber: 436,
                                                columnNumber: 19
                                            }, this)
                                        }, i, false, {
                                            fileName: "[project]/src/app/components/Header.js",
                                            lineNumber: 435,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Header.js",
                                lineNumber: 419,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Header.js",
                            lineNumber: 418,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Header.js",
                    lineNumber: 390,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Header.js",
                lineNumber: 382,
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
// 'use client';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import '../styles/Footer.css';
// import Link from 'next/link';
// import { useState } from 'react';
// import { useRouter, usePathname } from 'next/navigation';
// import Script from 'next/script';
// export default function Footer() {
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();
//   const pathname = usePathname();
//   const handleNavigation = (href) => {
//     setLoading(true);
//     setTimeout(() => {
//       router.push(href);
//     }, 1000); // loader delay
//   };
//   return (
//     <>
//       {/* ✅ LocalBusiness Schema for SEO */}
//       <Script
//         id="localbusiness-schema"
//         type="application/ld+json"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "SportsActivityLocation",  // better for bike rentals
//             name: "Beyond Bikes",
//             url: "https://www.beyondbikes.com.au/",
//             logo: "https://www.beyondbikes.com.au/logo.png", // ✅ replace with actual logo URL
//             image: "https://www.beyondbikes.com.au/hero-image.jpg", // ✅ replace with actual shop/bike image
//             description: "Beyond Bikes offers professional e-bike rentals and cycling gear in Victoria, Australia. Explore with freedom and power to move.",
//             telephone: "+61-422-032-961",
//             priceRange: "$$",
//             address: {
//               "@type": "PostalAddress",
//               streetAddress: "Victoria, Australia",  // ✅ replace with full street address if available
//               addressLocality: "Victoria",
//               addressRegion: "VIC",
//               postalCode: "3000", // ✅ update with actual postcode
//               addressCountry: "AU"
//             },
//             geo: {
//               "@type": "GeoCoordinates",
//               latitude: -37.8136,   // ✅ Melbourne example — update with your exact lat/lng
//               longitude: 144.9631
//             },
//             openingHoursSpecification: [
//               {
//                 "@type": "OpeningHoursSpecification",
//                 dayOfWeek: [
//                   "Monday",
//                   "Tuesday",
//                   "Wednesday",
//                   "Thursday",
//                   "Friday",
//                   "Saturday",
//                   "Sunday"
//                 ],
//                 opens: "08:00",
//                 closes: "20:00"
//               }
//             ],
//             sameAs: [
//               "https://www.instagram.com/beyondbikes_vic/?igsh=MTRzcnZ6OG1yc3YzMg%3D%3D",
//               "https://g.co/kgs/66Atysa"
//             ]
//           }),
//         }}
//       />
//       {/* Loader */}
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
//             className="loader"
//             color='#1A3B19'
//             style={{ width: '4rem', height: '4rem' }}
//             role="status"
//           >
//             <span className="visually-hidden">Loading...</span>
//           </div>
//         </div>
//       )}
//       {/* Footer */}
//       <footer className="footer-dark text-light pt-5 pb-3">
//         <div className="container text-center">
//           {/* Social Links */}
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
//           {/* Navigation */}
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
//                   className={`nav-link link-light bg-transparent border-0 ${
//                     pathname === href
//                       ? 'set-color-menu fw-bold'
//                       : 'text-light'
//                   }`}
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
//       {/* Branding */}
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
        }, 100); // loader delay
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
                lineNumber: 367,
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
                        lineNumber: 441,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Footer.js",
                    lineNumber: 436,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Footer.js",
                lineNumber: 422,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "footer-green text-white pt-5 pb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row gy-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-lg-3 col-md-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                        className: "fw-bold",
                                        children: [
                                            "BEYOND ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "fw-light",
                                                children: "BIKES"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Footer.js",
                                                lineNumber: 452,
                                                columnNumber: 46
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Footer.js",
                                        lineNumber: 452,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "At Beyond Bikes Pty Ltd, we believe that exceptional service starts with passionate people. We offer a carefully curated range of electric bikes and accessories. We are proud of our roots and even more excited about where we are going. We also offer delivery freedom to any location, with no battery issues."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Footer.js",
                                        lineNumber: 453,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "d-flex gap-3 mt-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://g.co/kgs/66Atysa",
                                                "aria-label": "Facebook",
                                                className: "text-white fs-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "bi bi-google"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Footer.js",
                                                    lineNumber: 458,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Footer.js",
                                                lineNumber: 457,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://www.instagram.com/beyondbikes_vic/",
                                                "aria-label": "Instagram",
                                                className: "text-white fs-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "bi bi-instagram"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Footer.js",
                                                    lineNumber: 461,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Footer.js",
                                                lineNumber: 460,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://maps.app.goo.gl/wYuVboHaKcQvRjXv8",
                                                "aria-label": "YouTube",
                                                className: "text-white fs-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "bi bi-geo-alt"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Footer.js",
                                                    lineNumber: 467,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Footer.js",
                                                lineNumber: 466,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Footer.js",
                                        lineNumber: 456,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Footer.js",
                                lineNumber: 451,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-lg-3 col-md-6 col-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                        className: "fw-bold",
                                        children: "Quick Links"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Footer.js",
                                        lineNumber: 474,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "list-unstyled  mt-3",
                                        children: [
                                            [
                                                '/',
                                                'Home'
                                            ],
                                            [
                                                '/about',
                                                'About Us'
                                            ],
                                            [
                                                '/products',
                                                'Product'
                                            ],
                                            [
                                                'https://maps.app.goo.gl/wYuVboHaKcQvRjXv8',
                                                'Locations'
                                            ]
                                        ].map(([href, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleNavigation(href),
                                                    className: `btn btn-link p-0 text-white text-decoration-none ${pathname === href ? 'fw-bold text-decoration-underline' : ''}`,
                                                    children: label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Footer.js",
                                                    lineNumber: 483,
                                                    columnNumber: 21
                                                }, this)
                                            }, href, false, {
                                                fileName: "[project]/src/app/components/Footer.js",
                                                lineNumber: 482,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Footer.js",
                                        lineNumber: 475,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Footer.js",
                                lineNumber: 473,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-lg-3 col-md-6 col-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                        className: "fw-bold",
                                        children: "Support"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Footer.js",
                                        lineNumber: 498,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "list-unstyled mt-3",
                                        children: [
                                            [
                                                '/rental',
                                                'Rental'
                                            ],
                                            [
                                                '/contact',
                                                'Contact'
                                            ],
                                            [
                                                '/termsandcondition',
                                                'Terms and Condition'
                                            ],
                                            [
                                                '/basicknowledge',
                                                'Privacy Policy'
                                            ]
                                        ].map(([href, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleNavigation(href),
                                                    className: `btn btn-link p-0 text-white text-decoration-none ${pathname === href ? 'fw-bold text-decoration-underline' : ''}`,
                                                    children: label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Footer.js",
                                                    lineNumber: 507,
                                                    columnNumber: 21
                                                }, this)
                                            }, href, false, {
                                                fileName: "[project]/src/app/components/Footer.js",
                                                lineNumber: 506,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Footer.js",
                                        lineNumber: 499,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Footer.js",
                                lineNumber: 497,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-lg-3 col-md-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                        className: "fw-bold",
                                        children: "Contact Us"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Footer.js",
                                        lineNumber: 522,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("address", {
                                        className: "mt-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "bi bi-geo-alt me-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Footer.js",
                                                        lineNumber: 524,
                                                        columnNumber: 20
                                                    }, this),
                                                    " 576 North Rd, Ormond VIC 3204, Australia"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/Footer.js",
                                                lineNumber: 524,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "bi bi-telephone me-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Footer.js",
                                                        lineNumber: 525,
                                                        columnNumber: 20
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "tel:+61 422 032 961",
                                                        className: "text-white text-decoration-none",
                                                        children: "+61 422 032 961"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Footer.js",
                                                        lineNumber: 526,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/Footer.js",
                                                lineNumber: 525,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "bi bi-envelope me-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Footer.js",
                                                        lineNumber: 530,
                                                        columnNumber: 20
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "mailto:info.beyondbikes@gmail.com",
                                                        className: "text-white text-decoration-none",
                                                        children: "info.beyondbikes@gmail.com"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Footer.js",
                                                        lineNumber: 531,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/Footer.js",
                                                lineNumber: 530,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "bi bi-clock me-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Footer.js",
                                                        lineNumber: 535,
                                                        columnNumber: 20
                                                    }, this),
                                                    " Mon-Sat: 9 am - 7 pm ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/src/app/components/Footer.js",
                                                        lineNumber: 535,
                                                        columnNumber: 78
                                                    }, this),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            marginLeft: '28px'
                                                        },
                                                        children: " Sun: 11 am - 4 pm "
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Footer.js",
                                                        lineNumber: 535,
                                                        columnNumber: 85
                                                    }, this),
                                                    " "
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/Footer.js",
                                                lineNumber: 535,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Footer.js",
                                        lineNumber: 523,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Footer.js",
                                lineNumber: 521,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Footer.js",
                        lineNumber: 449,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Footer.js",
                    lineNumber: 448,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Footer.js",
                lineNumber: 447,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "footer-dark text-center text-white py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Freedom to Explore, Power to Move"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Footer.js",
                        lineNumber: 544,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/app/components/Footer.js",
                        lineNumber: 545,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        className: "text-uppercase",
                        children: "© BEYOND BIKES PRIVATE LIMITED | ALL RIGHTS RESERVED"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Footer.js",
                        lineNumber: 546,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Footer.js",
                lineNumber: 543,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/noop-head.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Header.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Footer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Footer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
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
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleProductClick = (productName)=>{
        setLoading(true);
        setTimeout(()=>{
            const slug = productName.replace(/\s+/g, "-");
            router.push(`/${slug}`);
        }, 1000);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const elements = document.querySelectorAll(".scroll-animate");
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    observer.unobserve(entry.target); // animate once
                }
            });
        }, {
            threshold: 0.2
        });
        elements.forEach((el)=>observer.observe(el));
        return ()=>observer.disconnect();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const elements = document.querySelectorAll(".scroll-animate, .scroll-left, .scroll-right, .scroll-up, .scroll-down, .scroll-pop, .scroll-zoom");
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    observer.unobserve(entry.target); // only animate once
                }
            });
        }, {
            threshold: 0.2
        });
        elements.forEach((el)=>observer.observe(el));
        return ()=>observer.disconnect();
    }, []);
    const features = [
        {
            icon: "bi-tools",
            title: "Accessories"
        },
        {
            icon: "bi-geo-alt-fill",
            title: "GPS System"
        },
        {
            icon: "bi-tools",
            title: "Maintenance Included"
        },
        {
            icon: "bi-bicycle",
            title: "Free Test Ride"
        }
    ];
    const duplicatedFeatures = [
        ...features,
        ...features,
        ...features
    ];
    const bikes = [
        {
            name: "E-bike 4-6h",
            battery: "48V 50A",
            price: 60,
            hours: "4-6 hrs",
            img: "/images/Cartoon-Cycle-remove-text-latest.png",
            alt: "Ebike100 rental"
        },
        {
            name: "E-bike 6-8h",
            battery: "48V 70A",
            price: 65,
            hours: "6-8 hrs",
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
                        children: "Affordable Weekly E-Bike Rentals in Melbourne | Beyond Bikes"
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 259,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Rent affordable electric bikes in Melbourne with Beyond Bikes. Perfect for delivery riders and everyday commuters. Weekly plans, reliable e-bikes & free delivery."
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 260,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "keywords",
                        content: "electric bikes Melbourne, rent e-bikes Melbourne, Beyond Bikes Australia, e-bike hire Melbourne"
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 264,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "canonical",
                        href: "https://www.beyondbikes.com.au/"
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 267,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:title",
                        content: "Affordable Weekly E-Bike Rentals in Melbourne | Beyond Bikes"
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 270,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:description",
                        content: "Explore Melbourne or power through deliveries with our affordable electric bike rentals. Flexible weekly plans & reliable service."
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 271,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:url",
                        content: "https://www.beyondbikes.com.au/"
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 275,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:type",
                        content: "website"
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 276,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:image",
                        content: "https://www.beyondbikes.com.au/images/og-image.jpg"
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 277,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 280,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:title",
                        content: "Affordable Weekly E-Bike Rentals in Melbourne | Beyond Bikes"
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 281,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:description",
                        content: "Rent an e-bike in Melbourne today! Affordable, reliable, and perfect for riders & delivery professionals."
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 282,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:image",
                        content: "https://www.beyondbikes.com.au/images/og-image.jpg"
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 286,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                        type: "application/ld+json",
                        children: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Product",
                            "name": "E-Bike Rentals Melbourne",
                            "image": "https://www.beyondbikes.com.au/images/og-image.jpg",
                            "description": "Affordable electric bike rentals in Melbourne. Perfect for commuting and delivery riders.",
                            "brand": {
                                "@type": "Brand",
                                "name": "Beyond Bikes"
                            },
                            "offers": {
                                "@type": "AggregateOffer",
                                "url": "https://www.beyondbikes.com.au/",
                                "priceCurrency": "AUD",
                                "lowPrice": "99",
                                "highPrice": "149",
                                "offerCount": "3",
                                "availability": "https://schema.org/InStock"
                            }
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 289,
                        columnNumber: 3
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/rental/page.js",
                lineNumber: 257,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/rental/page.js",
                lineNumber: 314,
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
                    style: {
                        width: "4rem",
                        height: "4rem",
                        color: '#1A3B19'
                    },
                    role: "status",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "visually-hidden",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 337,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/rental/page.js",
                    lineNumber: 332,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/rental/page.js",
                lineNumber: 318,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-5 text-center scroll-animate",
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
                                lineNumber: 355,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/rental/page.js",
                            lineNumber: 354,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 342,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "w-100 py-4 position-relative overflow-hidden",
                        "aria-label": "Fleet Features",
                        itemScope: true,
                        itemType: "https://schema.org/Service",
                        style: {
                            backgroundColor: "rgb(26, 59, 25)",
                            position: "relative",
                            zIndex: 2
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "position-relative",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "d-flex animate-scroll text-nowrap",
                                children: duplicatedFeatures.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "d-inline-flex align-items-center mx-4 text-white flex-shrink-0",
                                        itemProp: "feature",
                                        itemScope: true,
                                        itemType: "https://schema.org/PropertyValue",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: `bi ${feature.icon} fs-1 me-3`,
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/rental/page.js",
                                                lineNumber: 384,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "fs-4 fw-semibold",
                                                itemProp: "name",
                                                children: feature.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/rental/page.js",
                                                lineNumber: 385,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/app/rental/page.js",
                                        lineNumber: 377,
                                        columnNumber: 13
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/rental/page.js",
                                lineNumber: 375,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/rental/page.js",
                            lineNumber: 374,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 363,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].section, {
                        id: "why-choose",
                        className: "container text-center py-5 scroll-animate",
                        "aria-labelledby": "why-choose-heading",
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true,
                            amount: 0.3
                        },
                        transition: {
                            duration: 0.6
                        },
                        itemScope: true,
                        itemType: "https://schema.org/Service",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "why-choose-heading",
                                className: "mb-5 fw-bold heading-underline",
                                style: {
                                    color: "#1A3B19",
                                    fontFamily: "system-ui"
                                },
                                itemProp: "name",
                                children: "Why Choose Beyond Bikes"
                            }, void 0, false, {
                                fileName: "[project]/src/app/rental/page.js",
                                lineNumber: 407,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "row g-sm-2 g-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-12 col-md-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 h-100 d-flex flex-column align-items-center",
                                            itemScope: true,
                                            itemType: "https://schema.org/Service",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "icon-circle mb-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "bi bi-fuel-pump"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/rental/page.js",
                                                        lineNumber: 426,
                                                        columnNumber: 3
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 425,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "fs-5 fw-semibold mb-2",
                                                    style: {
                                                        color: "#1A3B19",
                                                        fontStyle: 'Toronto Subway W01 Regular'
                                                    },
                                                    itemProp: "serviceType",
                                                    children: "Tired Of High Fuel Costs and Unreliable Rides?"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 428,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted small",
                                                    style: {
                                                        fontFamily: "system-ui"
                                                    },
                                                    itemProp: "description",
                                                    children: [
                                                        "Beyond Bikes is your smarter,greener, and more affordable way to mave through Victoria.",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/app/rental/page.js",
                                                            lineNumber: 433,
                                                            columnNumber: 17
                                                        }, this),
                                                        "Trusted by delivery riders,students,and city explorers."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 431,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/rental/page.js",
                                            lineNumber: 420,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/rental/page.js",
                                        lineNumber: 419,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-12 col-md-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 h-100 d-flex flex-column align-items-center",
                                            itemScope: true,
                                            itemType: "https://schema.org/Service",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "icon-circle mb-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "bi bi-lightning-charge fs-1",
                                                        style: {
                                                            color: "#1A3B19"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/rental/page.js",
                                                        lineNumber: 447,
                                                        columnNumber: 15
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 446,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "fs-5 fw-semibold mb-2",
                                                    style: {
                                                        color: "#1A3B19"
                                                    },
                                                    itemProp: "serviceType",
                                                    children: "SMOOTH ELECTRIC RIDE - NO GEARS, NO STRESS"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 448,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted small",
                                                    style: {
                                                        fontFamily: "system-ui"
                                                    },
                                                    itemProp: "description",
                                                    children: [
                                                        "Our e-bikes are designed for simplicity.Just hop on and go — no clutch, no fuel, no hassle.",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/app/rental/page.js",
                                                            lineNumber: 453,
                                                            columnNumber: 1
                                                        }, this),
                                                        "Glide through traffic with ease and comfort.              "
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 451,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/rental/page.js",
                                            lineNumber: 441,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/rental/page.js",
                                        lineNumber: 440,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-12 col-md-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 h-100 d-flex flex-column align-items-center",
                                            itemScope: true,
                                            itemType: "https://schema.org/Service",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "icon-circle mb-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "bi bi-cash-coin fs-1",
                                                        style: {
                                                            color: "#1A3B19"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/rental/page.js",
                                                        lineNumber: 466,
                                                        columnNumber: 15
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 465,
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
                                                    lineNumber: 467,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted small",
                                                    style: {
                                                        fontFamily: "system-ui"
                                                    },
                                                    itemProp: "description",
                                                    children: [
                                                        "WHY SPEND MORE?",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/app/rental/page.js",
                                                            lineNumber: 473,
                                                            columnNumber: 17
                                                        }, this),
                                                        "Get your ride at just $65/week — Includes everything you need.",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/app/rental/page.js",
                                                            lineNumber: 476,
                                                            columnNumber: 1
                                                        }, this),
                                                        "No fuel. No extra maintenance."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 470,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/rental/page.js",
                                            lineNumber: 460,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/rental/page.js",
                                        lineNumber: 459,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/rental/page.js",
                                lineNumber: 417,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "row g-sm-2 g-3 mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-12 col-md-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 h-100 d-flex flex-column align-items-center",
                                            itemScope: true,
                                            itemType: "https://schema.org/Service",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "icon-circle mb-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "bi bi-geo-alt fs-1",
                                                        style: {
                                                            color: "#1A3B19"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/rental/page.js",
                                                        lineNumber: 491,
                                                        columnNumber: 15
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 490,
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
                                                    lineNumber: 492,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted small",
                                                    style: {
                                                        fontFamily: "system-ui"
                                                    },
                                                    itemProp: "description",
                                                    children: [
                                                        "Whether you are:",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/app/rental/page.js",
                                                            lineNumber: 498,
                                                            columnNumber: 17
                                                        }, this),
                                                        "A food delivery rider, A student commuting to campus, Exploring the city on weekends.",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/app/rental/page.js",
                                                            lineNumber: 502,
                                                            columnNumber: 3
                                                        }, this),
                                                        "Beyond Bikes fits your lifestyle."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 496,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/rental/page.js",
                                            lineNumber: 485,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/rental/page.js",
                                        lineNumber: 484,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-12 col-md-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 h-100 d-flex flex-column align-items-center",
                                            itemScope: true,
                                            itemType: "https://schema.org/Service",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "icon-circle mb-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "bi bi-calendar-check fs-1",
                                                        style: {
                                                            color: "#1A3B19"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/rental/page.js",
                                                        lineNumber: 516,
                                                        columnNumber: 15
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 515,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "fs-5 fw-semibold mb-2",
                                                    style: {
                                                        color: "#1A3B19"
                                                    },
                                                    itemProp: "serviceType",
                                                    children: "FREE TEST RIDE + EASY BOOKING"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 517,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted small",
                                                    style: {
                                                        fontFamily: "system-ui"
                                                    },
                                                    itemProp: "description",
                                                    children: [
                                                        "Still unsure? Try it first! ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/app/rental/page.js",
                                                            lineNumber: 521,
                                                            columnNumber: 29
                                                        }, this),
                                                        "Free Test Ride Available ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/app/rental/page.js",
                                                            lineNumber: 522,
                                                            columnNumber: 26
                                                        }, this),
                                                        "Call/WhatsApp: +61 422 032 961 ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/app/rental/page.js",
                                                            lineNumber: 523,
                                                            columnNumber: 32
                                                        }, this),
                                                        "DM us now to book & start riding smarter!"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/rental/page.js",
                                                    lineNumber: 520,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/rental/page.js",
                                            lineNumber: 510,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/rental/page.js",
                                        lineNumber: 509,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/rental/page.js",
                                lineNumber: 482,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 396,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-white scroll-animate",
                        id: "bikes-for-rent",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container px-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "fw-bolder mb-4 heading-underline",
                                    style: {
                                        color: "#1a3b19",
                                        textAlign: 'center'
                                    },
                                    children: "Bikes For Rent"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/rental/page.js",
                                    lineNumber: 534,
                                    columnNumber: 5
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "row mt-4 mb-4 g-4",
                                    children: [
                                        {
                                            name: "E-bike 6-8h",
                                            img: "/images/Cartoon-Cycle-remove-text-latest.png",
                                            alt: "E-bike 6-8h",
                                            specs: {
                                                batteryhours: "6-8 hours",
                                                motor: 500,
                                                batterylife: "48V 50A",
                                                topspeed: "45 MPH"
                                            },
                                            price: "65.00 AUD"
                                        },
                                        {
                                            name: "E-bike 8-10h",
                                            img: "/images/Product-images-beyond-bikes-product-one-crop (3).png",
                                            alt: "E-bike 8-10h",
                                            specs: {
                                                batteryhours: "8-10 hours",
                                                motor: 500,
                                                batterylife: "48V 70A",
                                                topspeed: "45 MPH"
                                            },
                                            price: "70.00 AUD"
                                        },
                                        {
                                            name: "E-bike 10-12h",
                                            img: "/images/Latest-Change-Angle-Red-Cycle-latest.png",
                                            alt: "E-bike 10-12h",
                                            specs: {
                                                batteryhours: "10-12 hours",
                                                motor: 500,
                                                batterylife: "48V 80A",
                                                topspeed: "45 MPH"
                                            },
                                            price: "80.00 AUD"
                                        },
                                        {
                                            name: "White E-bike",
                                            img: "/images/White-E-bike-Product.png",
                                            alt: "E-bike 8-10h",
                                            specs: {
                                                batteryhours: "10-12 hours",
                                                motor: 500,
                                                batterylife: "48V 70A",
                                                topspeed: "45 MPH"
                                            },
                                            price: "70.00 AUD"
                                        },
                                        {
                                            name: "Black E-bike",
                                            img: "/images/Latest-Black-Cycle-Product-26-09.png",
                                            alt: "E-bike 8-10h",
                                            specs: {
                                                batteryhours: "12-15 hours",
                                                motor: 500,
                                                batterylife: "48V 70A",
                                                topspeed: "45 MPH"
                                            },
                                            price: "80.00 AUD"
                                        },
                                        {
                                            name: "Red E-bike",
                                            img: "/images/24-09-Red-Cycle-Product-Latest.png",
                                            alt: "E-bike 8-10h",
                                            specs: {
                                                batteryhours: "12-15 hours",
                                                motor: 500,
                                                batterylife: "48V 70A",
                                                topspeed: "45 MPH"
                                            },
                                            price: "70.00 AUD"
                                        }
                                    ].map((bike, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-12 col-md-6 col-lg-4",
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
                                                        lineNumber: 623,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "card-body text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "fw-bold mb-2",
                                                                style: {
                                                                    color: "#1A3B19"
                                                                },
                                                                itemProp: "name",
                                                                children: bike.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/rental/page.js",
                                                                lineNumber: 634,
                                                                columnNumber: 15
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "fw-bold mb-2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    itemProp: "offers",
                                                                    itemScope: true,
                                                                    itemType: "https://schema.org/Offer",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            itemProp: "priceCurrency",
                                                                            content: "USD"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/rental/page.js",
                                                                            lineNumber: 649,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        "$",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            itemProp: "price",
                                                                            children: bike.price
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/rental/page.js",
                                                                            lineNumber: 650,
                                                                            columnNumber: 19
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/rental/page.js",
                                                                    lineNumber: 644,
                                                                    columnNumber: 17
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/rental/page.js",
                                                                lineNumber: 642,
                                                                columnNumber: 15
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                                                className: "row text-muted small mb-3 text-start",
                                                                itemProp: "description",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                        className: "col-6",
                                                                        children: "Battery Hours"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/rental/page.js",
                                                                        lineNumber: 659,
                                                                        columnNumber: 17
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                        className: "col-6 text-end",
                                                                        children: bike.specs.batteryhours
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/rental/page.js",
                                                                        lineNumber: 660,
                                                                        columnNumber: 17
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                        className: "col-6",
                                                                        children: "Battery Life"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/rental/page.js",
                                                                        lineNumber: 662,
                                                                        columnNumber: 17
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                        className: "col-6 text-end",
                                                                        children: bike.specs.batterylife
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/rental/page.js",
                                                                        lineNumber: 663,
                                                                        columnNumber: 17
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                        className: "col-6",
                                                                        children: "Motor"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/rental/page.js",
                                                                        lineNumber: 665,
                                                                        columnNumber: 17
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                        className: "col-6 text-end",
                                                                        children: bike.specs.motor
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/rental/page.js",
                                                                        lineNumber: 666,
                                                                        columnNumber: 17
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                        className: "col-6",
                                                                        children: "Top Speed"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/rental/page.js",
                                                                        lineNumber: 668,
                                                                        columnNumber: 17
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                        className: "col-6 text-end",
                                                                        children: bike.specs.topspeed
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/rental/page.js",
                                                                        lineNumber: 669,
                                                                        columnNumber: 17
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/rental/page.js",
                                                                lineNumber: 655,
                                                                columnNumber: 15
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "rent-now-rental mt-2",
                                                                itemProp: "url",
                                                                onClick: ()=>handleProductClick(bike.name),
                                                                children: "Rent Bike"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/rental/page.js",
                                                                lineNumber: 678,
                                                                columnNumber: 15
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/rental/page.js",
                                                        lineNumber: 632,
                                                        columnNumber: 13
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/rental/page.js",
                                                lineNumber: 621,
                                                columnNumber: 11
                                            }, this)
                                        }, idx, false, {
                                            fileName: "[project]/src/app/rental/page.js",
                                            lineNumber: 615,
                                            columnNumber: 9
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/rental/page.js",
                                    lineNumber: 538,
                                    columnNumber: 5
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/rental/page.js",
                            lineNumber: 533,
                            columnNumber: 3
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 532,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-5 scroll-animate",
                        "aria-label": "Accessories Provided",
                        itemScope: true,
                        itemType: "https://schema.org/OfferCatalog",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "fw-bold mb-4 text-center heading-underline",
                                    style: {
                                        color: "#1a3b19 !important",
                                        fontFamily: "system-ui"
                                    },
                                    itemProp: "name",
                                    children: "Accessories Provided"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/rental/page.js",
                                    lineNumber: 713,
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
                                                        lineNumber: 721,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "fw-semibold",
                                                        itemProp: "name",
                                                        children: "Helmet"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/rental/page.js",
                                                        lineNumber: 722,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/rental/page.js",
                                                lineNumber: 720,
                                                columnNumber: 9
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/rental/page.js",
                                            lineNumber: 719,
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
                                                        lineNumber: 729,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "fw-semibold",
                                                        itemProp: "name",
                                                        children: "Delivery Bags"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/rental/page.js",
                                                        lineNumber: 730,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/rental/page.js",
                                                lineNumber: 728,
                                                columnNumber: 9
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/rental/page.js",
                                            lineNumber: 727,
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
                                                        lineNumber: 737,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "fw-semibold",
                                                        itemProp: "name",
                                                        children: "GPS Tracker"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/rental/page.js",
                                                        lineNumber: 738,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/rental/page.js",
                                                lineNumber: 736,
                                                columnNumber: 9
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/rental/page.js",
                                            lineNumber: 735,
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
                                                        lineNumber: 745,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "fw-semibold",
                                                        itemProp: "name",
                                                        children: "Bike Lock"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/rental/page.js",
                                                        lineNumber: 746,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/rental/page.js",
                                                lineNumber: 744,
                                                columnNumber: 9
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/rental/page.js",
                                            lineNumber: 743,
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
                                                        lineNumber: 753,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "fw-semibold",
                                                        itemProp: "name",
                                                        children: "Battery Lock"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/rental/page.js",
                                                        lineNumber: 754,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/rental/page.js",
                                                lineNumber: 752,
                                                columnNumber: 9
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/rental/page.js",
                                            lineNumber: 751,
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
                                                        lineNumber: 761,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "fw-semibold",
                                                        itemProp: "name",
                                                        children: "Charger"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/rental/page.js",
                                                        lineNumber: 762,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/rental/page.js",
                                                lineNumber: 760,
                                                columnNumber: 9
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/rental/page.js",
                                            lineNumber: 759,
                                            columnNumber: 7
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/rental/page.js",
                                    lineNumber: 716,
                                    columnNumber: 5
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/rental/page.js",
                            lineNumber: 712,
                            columnNumber: 3
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/rental/page.js",
                        lineNumber: 706,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/rental/page.js",
                lineNumber: 341,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Footer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/rental/page.js",
                lineNumber: 773,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__ec9a8e8f._.js.map