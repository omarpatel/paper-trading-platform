import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Settings — Papertrade',
  description: 'Manage your Papertrade account settings and preferences.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
