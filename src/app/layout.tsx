import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

// Two local Persian fonts. Edit per-text font/size in wedding-data.ts (`texts`).
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

export const metadata: Metadata = {
  title: "دعوت به عروسی | Wedding Invitation",
  description:
    "دو قلب، یک سرنوشت — دعوتنامه عروسی با الهام از باغ‌های ایرانی و خاطرات قدیمی",
  keywords: ["عروسی", "دعوتنامه", "wedding", "invitation", "Persian"],
  authors: [{ name: "Wedding Invitation" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "دعوت به عروسی",
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
        className={`${nozha.variable} ${pinar.variable} antialiased bg-paper text-ink min-h-screen`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
