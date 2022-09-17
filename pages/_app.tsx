import React from "react";
import { AppProps } from "next/app";
import "../styles/index.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
