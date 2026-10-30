import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Position Calculator — Papertrade',
  description: 'Calculate position sizes, PnL targets, and risk-reward ratios.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
