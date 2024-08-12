import { render } from '@testing-library/react-native';
import * as React from 'react';

import { Color } from '@/config';

import { LoadingIndicator, LoadingIndicatorProps } from '../LoadingIndicator';

describe('LoadingIndicator Component', () => {
  const propSet = [
    {
      color: Color.primary[500],
      size: 'small',
    },
    {
      color: Color.secondary[100],
      size: 'large',
    },
    {
      color: Color.custom.black,
      size: 'large',
    },
  ];

  const getRenderedComponent = (props?: Partial<LoadingIndicatorProps>) => render(<LoadingIndicator {...props} />);

  describe('should render correctly', () => {
    for (const prop of propSet) {
      it(`should render correctly with ${prop}`, () => {
        const rendered = getRenderedComponent({ ...prop } as any);
        const renderedTree = rendered.toJSON();
        expect(renderedTree).toMatchSnapshot();
      });
    }
  });
});
