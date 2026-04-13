// import "./globals.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import SmoothScroll from "./components/SmoothScroll";
// import localFont from "next/font/local";


// export const metadata = {
//   icons: {
//     icon: "/favicon.png",
//   },
// };



// const googleSans = localFont({
//   src: [
//     {
//       path: "./fonts/GoogleSans-Regular.ttf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "./fonts/GoogleSans-Medium.ttf",
//       weight: "500",
//       style: "normal",
//     },
//   ],
//   display: "swap",
// });

// export default function RootLayout({ children }) {
//   const organizationSchema = {
//     "@context": "https://schema.org",
//     "@type": "Organization",
//     name: "Bleap",
//     url: "https://www.bleap.in/",
//     logo: "https://www.bleap.in/logo.png",
//     sameAs: [
//       "https://www.facebook.com/bleap.in/",
//       "https://x.com/DigitalBleap",
//       "https://www.instagram.com/bleapdigital/",
//       "https://www.youtube.com/@bleapdigitalmarketing",
//       "https://www.linkedin.com/company/bleap/",
//     ],
//   };

//   const localBusinessSchema = {
//     "@context": "https://schema.org",
//     "@type": "LocalBusiness",
//     name: "Bleap",
//     image: "https://www.bleap.in/logo.png",
//     "@id": "https://www.bleap.in/",
//     url: "https://www.bleap.in/",
//     telephone: "+91-9382809420",
//     address: {
//       "@type": "PostalAddress",
//       streetAddress: "46/97, Poes Main Road, Teynampet",
//       addressLocality: "Chennai",
//       postalCode: "600018",
//       addressCountry: "IN",
//     },
//     sameAs: [
//       "https://www.facebook.com/bleap.in/",
//       "https://x.com/DigitalBleap",
//       "https://www.instagram.com/bleapdigital/",
//       "https://www.youtube.com/@bleapdigitalmarketing",
//       "https://www.linkedin.com/company/bleap/",
//     ],
//   };

//   return (
//     <html lang="en">
//       <body className={googleSans.className}>
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
//           }}
//         />
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
//           }}
//         />

//         <SmoothScroll>
//           <Navbar />
//           <main className="min-h-screen">{children}</main>
//           <Footer />
//         </SmoothScroll>
//       </body>
//     </html>
//   );
// }


import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import localFont from "next/font/local";
import Script from "next/script";

export const metadata = {
  icons: {
    icon: "/favicon.png",
  },
};

const googleSans = localFont({
  src: [
    {
      path: "./fonts/GoogleSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/GoogleSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
});

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bleap",
    url: "https://www.bleap.in/",
    logo: "https://www.bleap.in/logo.png",
    sameAs: [
      "https://www.facebook.com/bleap.in/",
      "https://x.com/DigitalBleap",
      "https://www.instagram.com/bleapdigital/",
      "https://www.youtube.com/@bleapdigitalmarketing",
      "https://www.linkedin.com/company/bleap/",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bleap",
    image: "https://www.bleap.in/logo.png",
    "@id": "https://www.bleap.in/",
    url: "https://www.bleap.in/",
    telephone: "+91-9382809420",
    address: {
      "@type": "PostalAddress",
      streetAddress: "46/97, Poes Main Road, Teynampet",
      addressLocality: "Chennai",
      postalCode: "600018",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.facebook.com/bleap.in/",
      "https://x.com/DigitalBleap",
      "https://www.instagram.com/bleapdigital/",
      "https://www.youtube.com/@bleapdigitalmarketing",
      "https://www.linkedin.com/company/bleap/",
    ],
  };

  return (
    <html lang="en">
      <head>
        <Script id="gtm-head" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MGJMWN8');
          `}
        </Script>
      </head>

      <body className={googleSans.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MGJMWN8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
          }}
        />

        <SmoothScroll>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}