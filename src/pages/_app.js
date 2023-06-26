import "@/styles/globals.css";

import Layout from "../components/Layout";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  let DefaultLayout = Layout;
  if (Component.layout === null) DefaultLayout = React.Fragment;
  else if (Component.layout) DefaultLayout = Component.layout;
  return (
    <>
      <ToastContainer />
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  );
}
