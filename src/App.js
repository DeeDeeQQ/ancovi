import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import ar from "react-intl/locale-data/ar";

import localeData from "./components/data.json";
import Menu from "./components/atoms/Menu";

addLocaleData([...en, ...ar]);

// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
const language =
  (navigator.languages && navigator.languages[0]) || navigator.language;

// Split locales with a region code
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

// Try full locale, try locale without region code, fallback to 'en'
const messages =
  localeData[languageWithoutRegionCode] ||
  localeData[language] ||
  localeData.en;

const App = props => (
  <IntlProvider locale={language} messages={messages}>
    <Router basename={props.path}>
      <div>
        <Menu />
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Footer />
      </div>
    </Router>
  </IntlProvider>
);

export default App;
