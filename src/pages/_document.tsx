import { RenderPageResult } from "next/dist/shared/lib/utils";
import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import { ReactElement } from "react";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = (): RenderPageResult | Promise<RenderPageResult> =>
        originalRenderPage({
          enhanceApp:
            (App) =>
            (props): ReactElement =>
              sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="theme-color" content="#000000" />
          <meta content="MonkeVentures" property="og:title" />

          <meta
            content="Metadescription Placeholder"
            property="og:description"
          />

          <meta content="MonkeVentures" property="og:site_name" />

          <meta content="/apple-touch-icon.png" property="og:image" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        </Head>
        <body className="font-sans">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
