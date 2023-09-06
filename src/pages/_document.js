import { Html, Head, Main, NextScript } from 'next/document';
import { fonts } from '@/assets';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={fonts.style}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
