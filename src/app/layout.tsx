import "#/styles/globals.css";
import { AddressBar } from "#/ui/address-bar";
import Byline from "#/ui/byline";
import { GlobalNav } from "#/ui/global-nav";
import { Metadata } from "next";
import { React } from "react";

export const metadata: Metadata = {
  title: {
    default: "Next.js App Router",
    template: "%s | Next.js App Router",
  },
  description:
    "A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <body className="bg-gray-1100 overflow-y-scroll bg-[url('/grid.svg')] pb-36">
        <GlobalNav />
      </body>
    </html>
  );
}
