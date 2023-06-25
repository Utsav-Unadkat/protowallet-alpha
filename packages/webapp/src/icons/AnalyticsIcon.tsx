import React from 'react';
import { IconProps } from './props';

const AnalyticsIcon = (props: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      width="52"
      height="52"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke={props.strokeColor || '#94a3b8'}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <rect x="10" y="9" width="4" height="12" rx="1.105" />
      <rect x="17" y="3" width="4" height="18" rx="1.105" />
      <circle cx="5" cy="19" r="2" />
    </svg>
  );
};
export default AnalyticsIcon;
