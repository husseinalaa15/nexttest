import "@/styles/globals.css";
import { useEffect } from 'react';

function disableReactRefresh() {
  if (typeof window !== 'undefined') {
    // Detect Internet Explorer using user-agent
    const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
    if (isIE) {
      // Disable React Refresh for Internet Explorer
      window.$RefreshReg$ = () => {};
      window.$RefreshSig$ = () => () => {};
    }
  }
}
export default function App({ Component, pageProps }) {
  useEffect(() => {
    disableReactRefresh();
  }, []);
  return <Component {...pageProps} />;
}
