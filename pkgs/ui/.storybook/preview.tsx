import React from "react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

export const decorators = [
  (Story) => (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={2400}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        style={{ fontSize: "14px" }}
      />
      {Story()}
    </>
  ),
];
