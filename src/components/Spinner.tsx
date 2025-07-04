import { SVGProps } from 'react';
import { FunctionComponent } from 'react';

export const Spinner: FunctionComponent<SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
    <path d="M43.52 25.91a18.68 18.68 0 0 0-18-19.34l-.15 4.07a14.62 14.62 0 0 1 14.08 15.13l4.07.14z"></path>
  </svg>
);
