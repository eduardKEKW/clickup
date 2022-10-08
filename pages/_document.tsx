import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <div id="modal"></div>
        <div id="tooltip"></div>
        <div id="popup"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
