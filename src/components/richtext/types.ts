export interface IRichTextProps {
  onChange?: (text: string) => void;
  value?: RichTextValue;
}

export type RichTextValue = string;