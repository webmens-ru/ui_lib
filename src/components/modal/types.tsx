export interface IModalProps {
  title?: string;
  children?: JSX.Element;
  withPopup?: boolean;
  buttons?: JSX.Element[];
  closeCb?: () => void
}