import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Junaid Anjum - Frontend Product Engineer",
  description:
    "Frontend Product Engineer based in Srinagar, Kashmir. I build meaningful products end-to-end, focused on clarity, structure, and systems that age well.",
  authors: [{ name: "Junaid Anjum" }],
  openGraph: {
    siteName: "Junaid Anjum",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="overflow-x-hidden overflow-y-scroll scroll-smooth"
    >
      <body>{children}</body>
    </html>
  );
}
