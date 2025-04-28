import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Basic Meta */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Thu Hiền" />
        <meta name="theme-color" content="#0f172a" />
        <meta httpEquiv="Content-Language" content="vi" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

        <title>Thu Hiền - Music</title>
        <link rel="canonical" href="https://music-iot-iot.vercel.app" />

        <meta name="keywords" content="Thu Hiền Music is a premier music service specializing in professional performances" />
        <meta name="description" content="Thu Hiền Music is a premier music service specializing in professional performances, event music organization, and music education. With a passion for heartfelt melodies and a commitment to excellence, Thu Hiền Music brings unforgettable musical experiences to audiences everywhere." />
        <meta name="subject" content="Thu Hiền Full Stack Developer Portfolio" />
        <meta name="copyright" content="Thu Hiền" />
        <meta name="language" content="vi" />
        <meta name="robots" content="index, follow" />
        <meta name="revised" content="2025-04-24" />
        <meta name="abstract" content="Thu Hiền Music is a premier music service specializing in professional performances" />
        <meta name="topic" content="Thu Hiền - music" />
        <meta name="summary" content="Thu Hiền Music is a premier music service specializing in professional performances" />
        <meta name="classification" content="Music" />
        <meta name="author" content="Thu Hiền, thuhien@gmail.com" />
        <meta name="designer" content="Thu Hiền" />
        <meta name="reply-to" content="thuhienthuhien@gmail.com" />
        <meta name="owner" content="Thu Hiền" />
        <meta name="url" content="https://music-iot-iot.vercel.app" />
        <meta name="identifier-URL" content="https://music-iot-iot.vercel.app" />
        <meta name="directory" content="submission" />
        <meta name="pagename" content="Thu Hiền - Music" />
        <meta name="category" content="Portfolio, Web Development" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta name="subtitle" content="Explore my Full Stack Development journey and projects." />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="date" content="2025-04-24" />
        <meta name="search_date" content="2025-04-24" />
        <meta name="DC.title" content="Thu Hiền - Music" />
        <meta name="medium" content="website" />
        <meta name="syndication-source" content="https://music-iot-iot.vercel.app" />
        <meta name="original-source" content="https://music-iot-iot.vercel.app" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Thu Hiền - Music" />
        <meta property="og:description" content="Thu Hiền Music is a premier music service specializing in professional performances" />
        <meta property="og:image" content="https://music-iot.vercel.app/assets/images/logo.png" />
        <meta property="og:url" content="https://music-iot.vercel.app" />
        <meta property="og:site_name" content="Thu Hiền Portfolio" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Thu Hiền - Music" />
        <meta name="twitter:description" content="Thu Hiền Music is a premier music service specializing in professional performances." />
        <meta name="twitter:image" content="https://music-iot.vercel.app/assets/images/logo.png" />
        <meta name="twitter:url" content="https://music-iot.vercel.app" />

        {/* Apple Mobile Web App */}
        <meta name="apple-mobile-web-app-title" content="Thu Hiền Portfolio" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/touch-icon-ipad.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/touch-icon-iphone4.png" />
        <link rel="apple-touch-startup-image" href="/startup.png" />

        {/* Favicon */}
        <link rel="shortcut icon" href="/assets/images/logo.ico" type="image/x-icon" />

        {/* Preconnect fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Thu Hiền",
            "url": "https://music-iot.vercel.app",
            "image": "https://music-iot.vercel.app/assets/images/logo.png",
            "sameAs": [
              "https://www.linkedin.com/in/coffee-dev-a4220a2ba/",
              "https://github.com/phuongdongiot",
              "https://www.facebook.com/catmusic435"
            ],
            "jobTitle": "Full Stack Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Freelancer / NAMTECH TECHNOLOGY"
            },
            "alumniOf": "Your University",
            "knowsAbout": ["NestJS", "React", "TypeScript", "APIs", "ERP", "CRM"],
            "description": "Thu Hiền Music is a premier music service specializing in professional performances, event music organization, and music education. With a passion for heartfelt melodies and a commitment to excellence, Thu Hiền Music brings unforgettable musical experiences to audiences everywhere."
          })
        }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
