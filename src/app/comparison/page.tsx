import { Metadata } from "next";
import ComparisonClient from "./ComparisonClient";

export const metadata: Metadata = {
  title: "Compare CSR vs SSR | Next.js Demo",
  description:
    "A detailed comparison between Client Side Rendering and Server Side Rendering in Next.js",
};

export default function ComparisonPage() {
  return <ComparisonClient />;
}
