import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import JobsList from "./components/jobslist";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

// intento determinar el idioma del browser
const userLanguage = navigator.language || navigator.userLanguage;
const isSpanish = userLanguage.startsWith("es");

// asignamos mensajes y configuracion segun el idioma
const messages = isSpanish ? localeEsMessages : localeEnMessages;
const locale = isSpanish ? "es-ES" : "en-US";

ReactDOM.render(
  <IntlProvider locale={locale} messages={messages}>
    <JobsList isSpanish={isSpanish} />
  </IntlProvider>,
  document.getElementById("root")
);
