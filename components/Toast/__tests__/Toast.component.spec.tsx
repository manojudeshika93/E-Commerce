import { render } from '@testing-library/react-native';
import * as React from 'react';

import { ToastHost } from '../Toast.component';

describe('ToastHost Component', () => {
  const getRenderedScreen = () => render(<ToastHost />);

  it(`should render ToastHost correctly`, () => {
    const renderer = getRenderedScreen();
    const renderTree = renderer.toJSON();
    expect(renderTree).toMatchSnapshot();
  });
});
