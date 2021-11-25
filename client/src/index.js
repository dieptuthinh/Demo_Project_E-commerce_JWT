import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { store } from "./redux/store";
import { Provider } from "react-redux";

import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "flag-icon-css/css/flag-icon.min.css";


import "./sass/index.scss";

import Layout from "./components/Layout";

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    supportedLngs: ["en", "vn"],

    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    fallbackLng: "en",
    // Options for language detector
    detection: {
      order: [ "htmlTag", "cookie","path"],
      caches: ["cookie"],
    },
    // react: { useSuspense: false },

    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });
const loadingMarkup = (
  <div className="spinner-border text-secondary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
);
ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <Provider store={store}>
        <Layout />
      </Provider>
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
