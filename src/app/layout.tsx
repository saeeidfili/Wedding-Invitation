import type { Metadata } from "next";
import { Vazirmatn, Lalezar } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const lalezar = Lalezar({
  subsets: ["arabic", "latin"],
  variable: "--font-lalezar",
  weight: "400",
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
        className={`${vazirmatn.variable} ${lalezar.variable} antialiased bg-paper text-ink min-h-screen`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
