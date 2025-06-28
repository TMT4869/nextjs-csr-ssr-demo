import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CSR Demo - Client Side Rendering | Next.js Demo",
  description:
    "Demo Client Side Rendering with Next.js. See how data is loaded after component mount.",
};

export default function CSRLayout({ children }: { children: React.ReactNode }) {
  return children;
}
