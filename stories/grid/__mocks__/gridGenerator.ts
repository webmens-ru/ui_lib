export const mockColumnGenerator = (length: number) => {
  return Array(length)
    .fill({ visible: 1, width: 200 })
    .map((item, index) => ({
      ...item,
      id: index + 1,
      code: "column" + index,
      title: "Column`s title №" + index,
      order: index + 1,
    }));
};

export const mockRowGenerator = (columnLength: number, rowLength: number) => {
  let arrayInRow = Array(columnLength)
    .fill([])
    .map((_item, index) => ["column" + index, "Column №" + index + " Row №"]);
  return Array(rowLength)
    .fill({})
    .map((_item, index) => ({
      id: index + 1,
      ...Object.fromEntries(
        arrayInRow.map((item) => [item[0], item[1] + index]),
      ),
    }));
};

export const mockFooterGenerator = (length: number) => {
  const footerArray = Array(length)
    .fill([])
    .map((_item, index) => ["column" + index, "Some footer`s text" + index]);
  return [{ ...Object.fromEntries(footerArray) }];
};

export const mockBurgerGenerator = (length: number) => {
  const burgerArray = Array(length)
  .fill([]).map((item, index) => ({label: "item #" + index}))
  return burgerArray
}