import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CSR Demo - Client Side Rendering | Next.js Demo',
  description: 'Demo trang Client Side Rendering với Next.js. Xem cách dữ liệu được tải sau khi component mount.',
};

export default function CSRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
