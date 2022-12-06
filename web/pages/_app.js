import "../styles/global.scss";
import { ProviderComponent } from "../contextApi/context";
import "../styles/colors.scss";
function MyApp({ Component, pageProps }) {
  return (
    <ProviderComponent>
      <Component {...pageProps} />;
    </ProviderComponent>
  );
}

export default MyApp;
