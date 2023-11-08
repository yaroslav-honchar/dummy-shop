import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "@/styles/index.css"
import React from "react"
import type { NextFont } from "next/dist/compiled/@next/font"

const roboto: NextFont = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
})

export const metadata: Metadata = {
  title: "Dummy shop",
  description: "The fake shop, created by peaty cool boys ;)",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
