import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import { Button } from '../Button.component';

describe('Button Component', () => {
  const onPressMock = jest.fn();

  const getRenderedComponent = (props = {}) =>
    render(<Button onPress={onPressMock} title="Test Button" {...props} />);

  it('should render the Button component correctly', () => {
    const { toJSON } = getRenderedComponent();
    expect(toJSON()).toMatchSnapshot();
  });

  it('should display the correct title', () => {
    const { getByText } = getRenderedComponent();
    expect(getByText('Test Button')).toBeTruthy();
  });

  it('should call onPress when button is pressed', () => {
    const { getByText } = getRenderedComponent();
    const buttonElement = getByText('Test Button');

    fireEvent.press(buttonElement);
    expect(onPressMock).toHaveBeenCalled();
  });
});
