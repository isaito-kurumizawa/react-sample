import * as React from "react";
import { RouteComponentProps } from "react-router";

interface ICounterState {
    currentCount: number;
}
// eeact.Component<{},any>の<{},any>が重要。boot.tsxで苦労する
export class Counter extends React.Component<{},any> {
    constructor() {
        // super キーワードは、オブジェクトの親の関数を呼び出すために使用できます。
        super();
        this.state = { currentCount: 0 };
    }
    render(): JSX.Element {
        return 　<div>
                    <h1>Counter</h1>

                    <p>This is a simple example of a React component.</p>
                    <p>Current count: <strong>{ this.state.currentCount }</strong></p>

                    <button onClick={ () => { this.incrementCounter(); } }>Increment</button>
                </div>;
    }

    incrementCounter(): void {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }
}
