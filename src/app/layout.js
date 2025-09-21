// src/app/layout.js
import FixedChatIcon from "./Components/FixedChatIcon/FixedChatIcon";
export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Sabeena Digital Media Services</title>
        <meta name="description" content="Sabeena Digital Media Services" />
        <link rel="icon" href="./images/logo.jpeg" />
      </head>
      <body>
        {children}
        <FixedChatIcon />
      </body>
    </html>
  );
}
