import { ReactNode } from 'react';
import { Header } from './Header';

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export function PageLayout({ children, title, subtitle }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="relative">
        <div className="relative pt-32 pb-20 px-4 bg-indigo-600">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-4">{title}</h1>
            {subtitle && <p className="text-xl text-indigo-100">{subtitle}</p>}
          </div>
        </div>
      </div>
      <main className="flex-grow bg-gray-50">
        {children}
      </main>
    </div>
  );
}