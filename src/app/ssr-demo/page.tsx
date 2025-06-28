// SSR - Server Side Rendering (default in Next.js App Router)

import { fetchPostsSSR } from "@/lib/utils";
import { Metadata } from "next";
import SSRDemoClient from "./SSRDemoClient";

export const metadata: Metadata = {
  title: "SSR Demo - Server Side Rendering | Next.js Demo",
  description:
    "Demo Server Side Rendering with Next.js. See how data is loaded on the server before sending HTML.",
};

export default async function SSRDemo() {
  const startTime = Date.now();

  // Fetch data on server before rendering - using default (no translation at server level)
  const posts = await fetchPostsSSR();

  const loadTime = Date.now() - startTime;

  return <SSRDemoClient posts={posts} loadTime={loadTime} />;
}
