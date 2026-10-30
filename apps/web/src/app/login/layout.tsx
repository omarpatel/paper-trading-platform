import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In — Papertrade',
  description: 'Sign in or create a free Papertrade account to start paper trading.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
