import { ReactNode } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { ThemeProvider } from 'next-themes';
import { usePathname } from 'next/navigation';

const AppProviders = ({ children }: { children: ReactNode }) => {

  const pathname = usePathname();
  const isAuthRoute = pathname.startsWith('/auth');

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        {!isAuthRoute && <Footer />}
      </div>
    </ThemeProvider>
  );
};

export default AppProviders;
