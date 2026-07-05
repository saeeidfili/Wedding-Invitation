import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

// Local Persian fonts. Edit per-text font/size in wedding-data.ts (`texts`).
const nozha = localFont({
  src: "../../fonts/Digi Nozha Regular.ttf",
  variable: "--font-nozha",
  display: "swap",
});

const pinar = localFont({
  src: "../../fonts/Pinar.ttf",
  variable: "--font-pinar",
  display: "swap",
});

const nastaliq = localFont({
  src: "../../fonts/IranNastaliq.ttf",
  variable: "--font-nastaliq",
  display: "swap",
});

export const metadata: Metadata = {
  title: "دعوت به جشن عقد | Wedding Invitation",
  description:
    "دو قلب، یک سرنوشت — دعوتنامه جشن عقد",
  keywords: ["عروسی", "دعوتنامه", "wedding", "invitation", "Persian"],
  authors: [{ name: "Wedding Invitation" }],
  icons: {
    icon: "/icons/Vector.png",
  },
  openGraph: {
    title: "دعوت به جشن عقد",
    description: "دو قلب، یک سرنوشت",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={`${nozha.variable} ${pinar.variable} ${nastaliq.variable} antialiased bg-paper text-ink min-h-screen`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
