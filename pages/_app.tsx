//
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "../styles/globals.css";
import "../styles/variable.scss";
import "../styles/hamburger/main.scss";
import "../styles/HomeStyle/home1.scss";
import "../styles/Global/middle.scss";
import "../styles/Global/home-title.scss";

import type { AppProps } from "next/app";
import Wrap from "../Component/LayoutWrap/wrap";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Wrap>
            <Component {...pageProps} />
        </Wrap>
    );
}

export default MyApp;
