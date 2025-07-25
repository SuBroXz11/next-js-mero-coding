import type { Metadata } from 'next';
import './globals.css'; 

export const metadata: Metadata = {
  title: 'Course Details | My Learning Platform',
  description: 'View comprehensive details about our "Mastering React Hooks" course.',
  keywords: ['React Hooks', 'Online Course', 'Web Development', 'Programming'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}