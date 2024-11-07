import type { Metadata } from "next";
import "./globals.css";
import { AnnouncementBar } from "@/components/ui/announcement-bar/announcement-bar";
import { montserrat } from "@/lib/shared/fonts/fonts";
import { NavigationMenu } from "@/components/ui/navigation-menu/navigation-menu";

export const metadata: Metadata = {
  title: "Freres",
  description: "Tu marca de ropa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <AnnouncementBar />
        <NavigationMenu />
        {/* <div className="mx-auto max-w-[90rem] px-2"> */}
        {children}
        {/* </div> */}
      </body>
    </html>
  );
}
