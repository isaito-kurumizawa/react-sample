import './css/site.css';
import 'bootstrap';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
// import * as RoutesModule from './routes';
// let routes = RoutesModule.routes;
import { Counter } from "../ClientApp/components/Counter";
import { FetchData } from "../ClientApp/components/FetchData";
function renderApp(): void {
    // This code starts up the React app when it runs in a browser. It sets up the routing
    // configuration and injects the app into a DOM element.
    ReactDOM.render(<Counter />,document.getElementById("counter-app"));
    ReactDOM.render(<FetchData />,document.getElementById("fetch-app"));
}
renderApp();
// function renderApp() {
//     // This code starts up the React app when it runs in a browser. It sets up the routing
//     // configuration and injects the app into a DOM element.
//     const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')!;
//     ReactDOM.render(
//         <AppContainer>
//             <BrowserRouter children={ routes } basename={ baseUrl } />
//         </AppContainer>,
//         document.getElementById('react-app')
//     );
// }

// renderApp();

// // Allow Hot Module Replacement
// if (module.hot) {
//     module.hot.accept('./routes', () => {
//         routes = require<typeof RoutesModule>('./routes').routes;
//         renderApp();
//     });
// }