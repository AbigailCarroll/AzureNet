import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Azurenet Guest Login",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
      children
  );
}

