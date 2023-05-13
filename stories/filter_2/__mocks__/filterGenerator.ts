export const filterGenerator = (len: number) => {
  let array = Array(len)
    .fill([])
    .map((item, index) => ({
      id: index + 1,
      title: 'filter ' + index,
      visible: 1,
      order: index,
    }));
  return array
};
