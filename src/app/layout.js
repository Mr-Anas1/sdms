// src/app/layout.js
export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Sabeena Digital Media Services</title>
        <meta name="description" content="Sabeena Digital Media Services" />
        <link rel="icon" href="./images/logo.jpeg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
