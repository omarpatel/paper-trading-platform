import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Discover Tokens — Papertrade',
  description: 'Browse trending Solana memecoins, new pairs, and tokens approaching graduation.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
