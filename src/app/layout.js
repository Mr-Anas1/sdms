// src/app/layout.js
import LenisProvider from "@/lenis-provider";
import "../styles/globals.css";
import FixedChatIcon from "./Components/FixedChatIcon/FixedChatIcon";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <title>Sabeena Digital Media Services</title>
        <meta name="description" content="Sabeena Digital Media Services" />
        <link rel="icon" href="./images/logo.jpeg" />
      </head>
      <body>
        {children}
        <FixedChatIcon />
        <LenisProvider/>
      </body>
    </html>
  );
}
