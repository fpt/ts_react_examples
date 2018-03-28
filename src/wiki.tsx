import * as React from 'react';
import { mapPropsStream } from 'recompose';
import { Observable } from 'rx';


const enhance = mapPropsStream(props$ => {
  const fetch$ = Observable
    .from(fetch('https://en.wikipedia.org/w/api.php?action=query&titles=Albert_Einstein&prop=images'))
    .flatMap(url => fetch(url))
    .flatMap(response => response.json())
    .subscribe(
      value => console.log(`onNext: ${value}`),
      error => console.log(`onError: ${error}`),
      () => console.log('onCompleted')
    );

  return props$.combineLatest(fetch$, (props, value) => ({
    ...props,
    value
  }))
})

const WikiWidget = enhance(({ value }) =>
  <div>value is : {value}</div>
)
