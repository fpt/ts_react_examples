import * as React from 'react';
import { mapPropsStream } from 'recompose';
import { Observable } from 'rxjs';
import { combineLatest } from 'rxjs/observable/combineLatest'


interface OuterProps {
  query: string;
}

interface Album {
  artistName: string;
  collectionName: string;
  collectionViewUrl: string;
  artworkUrl100: string;
}

interface AlbumsResponse {
  resultCount: number;
  results: Album[];
}

const queryToUrl =
  (query: string) => `https://itunes.apple.com/search?term=${query}&entity=album&limit=3`;

const enhanceWithAlbumsSearchResult = mapPropsStream<AlbumsResponse, OuterProps>(props$ => {
  const fetch$ = Observable.from(props$)
    .flatMap(({ query }) => fetch(queryToUrl(query)))
    .flatMap(response => response.json());

  return fetch$;
});


const albumStyle: React.CSSProperties = {
  display: 'inline-block',
  textAlign: 'center',
  margin: '20px',
  font: 'normal smaller Arial',
};

const AlbumsBase: React.StatelessComponent<AlbumsResponse> = ({ resultCount, results }) => {
  const items = results.map((itm: Album) => (
    <li style={albumStyle}>
      <a href={itm.collectionViewUrl} target="_blank">
        <img src={itm.artworkUrl100} />
        <div>{itm.collectionName}</div>
        <div>{itm.artistName}</div>
      </a>
    </li>
  ));

  return (
    <ul>
      {items}
    </ul>
  );
};


export const Albums = enhanceWithAlbumsSearchResult(AlbumsBase);
