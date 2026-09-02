import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: "KV by Juan Carlos Gonzales | Trajes de Novio y Sastrería a Medida",
  description:
    "Diseñamos cómo quieres sentirte el día de tu boda. Experiencia privada y sastrería a medida exclusiva para novios.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${montserrat.variable} scroll-smooth`}
    >
      <body className="bg-[#0b0a09] text-[#f5f3ef] antialiased selection:bg-[#c5a880]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
