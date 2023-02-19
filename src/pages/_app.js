import '@/styles/globals.css'
import { useRouter } from "next/router";
import { IntlProvider, ReactIntlErrorCode } from "react-intl";
import { ThemeProvider } from 'next-themes'
import en from "../lang/en.json";
import tc from "../lang/tc.json";
import sc from "../lang/sc.json";

const messages = {en,tc,sc};

export default function App({ Component, pageProps }) {
  const { locale } = useRouter();
  function onError(e) {
    if (e.code = ReactIntlErrorCode.MISSING_DATA) {
      return
    }
    console.error(e)
  }
  return (
    <ThemeProvider>
      <IntlProvider locale={locale} messages={messages[locale]} onError={onError}>
        <Component {...pageProps} />
      </IntlProvider>
    </ThemeProvider>
  );
}
