export const getHeaderHeight = (length: number) => {
  const cellHeight = 48;
  const footerHeaderHeight = 75;
  return length > 200
    ? 50 * cellHeight + footerHeaderHeight
    : length * cellHeight + footerHeaderHeight;
};
