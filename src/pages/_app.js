import { fonts } from '@/assets';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <div className={fonts.className}>
      <Component {...pageProps} />
    </div>
  );
}
