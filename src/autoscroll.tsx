import * as React from 'react';
import { withState, lifecycle, compose } from 'recompose';


interface OuterProps {
  items: Item[];
  selectedKey: string;
}

interface Item {
  key: string;
  name: string;
}

interface ActiveRefState {
  activeRef: React.RefObject<any>;
}

const enhance = compose<{}, OuterProps>(
  withState<{}, React.RefObject<any>, 'activeRef', 'setActiveRef'>(
    'activeRef',
    'setActiveRef',
    React.createRef(),
  ),
  lifecycle<ActiveRefState, {}>({
    componentDidMount() {
      const { activeRef } = this.props;

      if (activeRef.current) {
        activeRef.current.scrollIntoView();
      }
    },
  }),
);


const autoscrollStyle: React.CSSProperties = {
  height: '50px',
  overflow: 'auto',
  border: '1px solid silver',
};

const AutoscrollListBase: React.StatelessComponent<OuterProps & ActiveRefState> =
  ({ items, selectedKey, activeRef }) => (
    <div style={autoscrollStyle}>
      <ul>
        {
          items.map((itm: Item) => (
            <li key={itm.key} ref={ itm.key === selectedKey ? activeRef : undefined}>
              {itm.key !== selectedKey ? (
                <span>{itm.name}</span>
              ) : (
                <b>{itm.name}</b>
              )}
            </li>
          ))
        }
      </ul>
    </div>
  );


export const AutoscrollList = enhance(AutoscrollListBase);
