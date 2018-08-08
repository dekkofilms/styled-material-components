import React from 'react';
import { Icon } from '../icons';

const TvPath = () => [
  <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z" key='path0' />,
];

const TvIcon = Icon.extend.attrs({
  children: TvPath,
})``;

export default TvPath;
export { TvIcon };
