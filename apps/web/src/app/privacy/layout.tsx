import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Papertrade',
  description: 'Papertrade privacy policy and data handling practices.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
