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
      <body className="bg-white text-gray-900">
        <nav className="bg-gray-100 border-b border-gray-300 p-4 flex justify-center space-x-6 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/goals">Goals</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <main className="max-w-3xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}