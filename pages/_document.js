import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />

        <script src="https://unpkg.com/prop-types@15/prop-types.js"></script>
        <script src="https://unpkg.com/react-svg-pan-zoom@3"></script>
      </body>
    </Html>
  );
}
