import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import { Switch } from '../Switch.component';

describe('Switch Component', () => {
  const onValueChangeMock = jest.fn();

  const getRenderedComponent = (props = {}) =>
    render(<Switch value={false} onValueChange={onValueChangeMock} {...props} />);

  it('should render the Switch component correctly', () => {
    const { toJSON } = getRenderedComponent();
    expect(toJSON()).toMatchSnapshot();
  });

  it('should display EN and AR text labels', () => {
    const { getByText } = getRenderedComponent();
    expect(getByText('EN')).toBeTruthy();
    expect(getByText('AR')).toBeTruthy();
  });

  it('should call onValueChange when toggled', () => {
    const { getByTestId } = getRenderedComponent();
    const switchElement = getByTestId('switch');

    fireEvent(switchElement, 'valueChange', true);
    expect(onValueChangeMock).toHaveBeenCalledWith(true);

    fireEvent(switchElement, 'valueChange', false);
    expect(onValueChangeMock).toHaveBeenCalledWith(false);
  });
});
