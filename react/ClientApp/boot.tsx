import "./css/site.css";
import "bootstrap";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Counter } from "../ClientApp/components/Counter";
import { FetchData } from "../ClientApp/components/FetchData";

function renderApp(): void {
    renderElement(<Counter />, document.getElementById("counter-app"));
    renderElement(<FetchData />, document.getElementById("fetch-app"));
}

function renderElement(element: React.ReactElement<any>, app: HTMLElement | null): void {
    if (app) {
        ReactDOM.render(element, app);
    }
}

renderApp();