import * as React from "react";
import { render } from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
render(<App />, rootElement);

// if (module.hot) {
//      module.hot.accept('./print.js', function() {
//            console.log('Accepting the updated printMe module!');
//            printMe();
//          })
//     }