// src/app/layout.tsx
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Spencer Scherger | Personal Website',
  description: 'Math + CS student portfolio and goals',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-100 min-h-screen">
        <nav className="bg-gray-800 border-b border-gray-700 p-4 flex justify-center space-x-6 text-sm font-medium">
          <Link className="text-gray-100 hover:text-white transition" href="/">Home</Link>
          <Link className="text-gray-100 hover:text-white transition" href="/courses">Courses</Link>
          <Link className="text-gray-100 hover:text-white transition" href="/projects">Projects</Link>
          <Link className="text-gray-100 hover:text-white transition" href="/contact">Contact</Link>
        </nav>
        <main className="max-w-3xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
