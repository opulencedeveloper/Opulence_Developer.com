import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins', 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

import "@/styles/globals.css";
import Layout from '@/components/layouts/Layout';

export default function App({ Component, pageProps }) {
  return (
    <main className={`${poppins.variable} font-poppins`}>
      <Layout>
      <Component {...pageProps} />
    </Layout>
    </main>
  );
}
