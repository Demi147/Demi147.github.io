import "../styles/globals.css";
import "../styles/main.scss";
import "../shared/lib/extentions";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
