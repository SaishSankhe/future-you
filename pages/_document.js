import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-slate-50 text-gray-900 dark:bg-gray-900 dark:text-slate-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
