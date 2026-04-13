/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [

      
    
      {
        source: '/services/ecommerce-solutions',
        destination: '/services/website-design-service-in-chennai',
        permanent: true,
      },


      {
        source: '/services/responsive-website-design-development',
        destination: '/services/website-design-service-in-chennai',
        permanent: true,
      },
      {
        source: '/services/responsive-website-design-development/:slug*',
        destination: '/services/website-design-service-in-chennai',
        permanent: true,
      },
      {
        source: '/services/search-engine-optimization',
        destination: '/services/seo-service-in-chennai',
        permanent: true,
      },
      {
        source: '/services/search-engine-optimization/:slug*',
        destination: '/services/seo-service-in-chennai',
        permanent: true,
      },
      {
        source: '/services/online-advertising',
        destination: '/services/ppc-service-in-chennai',
        permanent: true,
      },
      {
        source: '/services/online-advertising/:slug*',
        destination: '/services/ppc-service-in-chennai',
        permanent: true,
      },
      {
        source: '/services/strategic-marketing',
        destination: '/',
        permanent: true,
      },
      {
        source: '/contact-us/digital-marketing-agency-in-chennai',
        destination: '/',
        permanent: true,
      },
      {
        source: '/contact-us/digital-marketing-agency-in-mumbai',
        destination: '/',
        permanent: true,
      },
      {
        source: '/contact-us/digital-marketing-agency-in-pune',
        destination: '/',
        permanent: true,
      },
      {
        source: '/contact-us/digital-marketing-agency-in-bangalore',
        destination: '/',
        permanent: true,
      },
      {
        source: '/contact-us/digital-marketing-agency-in-usa',
        destination: '/',
        permanent: true,
      },
        {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/contact-us/digital-marketing-agency-in-noida',
        destination: '/',
        permanent: true,
      },
      {
        source: '/get-quote',
        destination: '/',
        permanent: true,
      },
      {
        source: '/leads',
        destination: '/',
        permanent: true,
      },
        {
        source: '/office/login',
        destination: '/',
        permanent: true,
      },
      {
        source: '/solutions',
        destination: '/',
        permanent: true,
      },
      {
        source: '/solutions/banking',
        destination: '/',
        permanent: true,
      },
      {
        source: '/solutions/education',
        destination: '/',
        permanent: true,
      },
      {
        source: '/solutions/healthcare',
        destination: '/',
        permanent: true,
      },
      {
        source: '/solutions/fmcg-retail',
        destination: '/',
        permanent: true,
      },
      {
        source: '/solutions/Digital-Marketing-Agency-for-Real-Estate-industry-and-agents',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;