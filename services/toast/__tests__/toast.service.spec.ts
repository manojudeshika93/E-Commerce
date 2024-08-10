import { showMessage } from 'react-native-flash-message';

import { Color } from '@/config/tw';

import { ToastService } from '../toast.service';

// Mocking the showMessage function
jest.mock('react-native-flash-message', () => ({
  showMessage: jest.fn(),
}));

describe('ToastService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('generateCustomErrorDescription', () => {
    it('should return the string description if it is a string', () => {
      const description = 'A simple error';
      expect(ToastService.generateCustomErrorDescription(description)).toBe(description);
    });

    it('should return the single string description if the array length is 1', () => {
      const description = ['A single error'];
      expect(ToastService.generateCustomErrorDescription(description)).toBe(description[0]);
    });

    it('should return a bulleted list if the description is an array of multiple errors', () => {
      const description = ['First error', 'Second error'];
      const expectedDescription = '• First error\n• Second error';
      expect(ToastService.generateCustomErrorDescription(description)).toBe(expectedDescription);
    });
  });

  describe('success', () => {
    it('should call showMessage with the correct parameters for a success toast', () => {
      const message = 'Success message';
      ToastService.success({ message });
      expect(showMessage).toHaveBeenCalledWith({
        message: ToastService.generateCustomErrorDescription(message),
        backgroundColor: Color.status.success.DEFAULT,
      });
    });
  });

  describe('information', () => {
    it('should call showMessage with the correct parameters for an information toast', () => {
      const message = 'Information message';
      ToastService.information({ message });
      expect(showMessage).toHaveBeenCalledWith({
        message: ToastService.generateCustomErrorDescription(message),
        backgroundColor: Color.status.info.DEFAULT,
      });
    });
  });

  describe('error', () => {
    it('should call showMessage with the correct parameters for an error toast', () => {
      const message = 'Error message';
      ToastService.error({ message });
      expect(showMessage).toHaveBeenCalledWith({
        message: ToastService.generateCustomErrorDescription(message),
        backgroundColor: Color.status.error.DEFAULT,
      });
    });
  });

  describe('warning', () => {
    it('should call showMessage with the correct parameters for a warning toast', () => {
      const message = 'Warning message';
      ToastService.warning({ message });
      expect(showMessage).toHaveBeenCalledWith({
        message: ToastService.generateCustomErrorDescription(message),
        backgroundColor: Color.status.warning.DEFAULT,
      });
    });
  });
});
