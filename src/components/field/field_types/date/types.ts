export type DateFieldProps = {
  type: "date";
  variant: "with_border" | "dashed_underline" | "text_bold";
  dateISO: string;
  readOnly?: boolean;
  placeholder?: string;
  onSelect?: (date: string) => void;
  [key: string]: any
};
