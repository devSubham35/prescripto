import { useEffect } from 'react';
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AppProviders from "@/components/providers/AppProviders";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap'
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (process.env.NEXT_APP_NODE_ENV === 'development' && typeof window !== "undefined") {
      import("@locator/runtime").then(({ default: setupLocatorUI }) => {
        setupLocatorUI();
      }).catch(console.error);
    }
  }, []);

  return (
    <main className={outfit.className}>
      <AppProviders>
        <Component {...pageProps} />
      </AppProviders>
    </main>
  );
}