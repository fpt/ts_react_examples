import * as React from 'react';
import { withStateHandlers } from 'recompose';

export class Hello extends React.Component {
  render() {
    return (
      <div>Hello React World!</div>
    );
  }
}

export class Counter extends React.Component<{}, { count: number }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0
    }
  }

  onClick(e: React.MouseEvent<HTMLButtonElement>) {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.onClick.bind(this)}>Count Up!!</button>
      </div>
    )
  }
}



const NewCounterBase: React.StatelessComponent<{counter: number} & {incrementOn: any, decrementOn: any}> = 
  ({ counter, incrementOn, decrementOn }: any) => (
    <div>
      <h3>{counter}</h3>
      <button onClick={() => incrementOn(2)}>Inc</button>
      <button onClick={() => decrementOn(3)}>Dec</button>
    </div>
  );

export const NewCounter =
  withStateHandlers<{counter: number}, {incrementOn: any, decrementOn: any}>(
  {
    counter: 0,
  },
  {
    incrementOn: ({ counter }) => (value) => ({
      counter: counter + value,
    }),
    decrementOn: ({ counter }) => (value) => ({
      counter: counter - value,
    }),
  }
)(NewCounterBase);
