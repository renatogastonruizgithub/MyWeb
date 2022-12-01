import "../styles/global.scss";
import { ProviderComponent } from "../contextApi/context";

function MyApp({ Component, pageProps }) {
  return (
    <ProviderComponent>
      <Component {...pageProps} />;
    </ProviderComponent>
  );
}

export default MyApp;
