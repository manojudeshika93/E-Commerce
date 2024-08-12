export interface ButtonProps {
  onPress?: () => void;
  title: string;
  disabled?: boolean;
  fullWidth?: boolean;
  isLink?: boolean;
}
