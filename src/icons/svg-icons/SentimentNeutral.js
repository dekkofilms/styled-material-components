import React from 'react';
import { Icon } from '../icons';

const SentimentNeutralPath = () => [
  <path d="M9 14h6v1.5H9z" key='path0' />,
  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" key='path1' />,
];

const SentimentNeutralIcon = Icon.extend.attrs({
  children: SentimentNeutralPath,
})``;

export default SentimentNeutralPath;
export { SentimentNeutralIcon };
