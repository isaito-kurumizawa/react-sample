import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface CounterState {
    currentCount: number;
}

export class Counter extends React.Component<{},any> {
    constructor() {
        super();
        this.state = { currentCount: 0 };
    }
    public test: string = "test";
    render(): JSX.Element {
        return <div>
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
