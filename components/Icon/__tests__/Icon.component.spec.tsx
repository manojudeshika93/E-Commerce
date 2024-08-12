import { render } from '@testing-library/react-native';
import React from 'react';
import { DetailedLogo } from '../Icon.component';

import { Color } from '@/config';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/constants';

describe('DetailedLogo', () => {
  it('should render the DetailedLogoSvg with default props', () => {
    const { getByTestId } = render(<DetailedLogo />);
    const logo = getByTestId('detailed-logo');

    expect(logo.props.fill).toBe(Color.secondary[100]);
    expect(logo.props.width).toBe(SCREEN_WIDTH);
    expect(logo.props.height).toBe(SCREEN_HEIGHT * 0.05);
  });

  it('should render the DetailedLogoSvg with custom props', () => {
    const { getByTestId } = render(
      <DetailedLogo color={Color.primary[100]} width={100} height={50} />
    );
    const logo = getByTestId('detailed-logo');

    expect(logo.props.fill).toBe(Color.primary[100]);
    expect(logo.props.width).toBe(100);
    expect(logo.props.height).toBe(50);
  });
});
