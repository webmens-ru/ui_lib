export const fieldGenerator = (len: number) => {
  const arr = ['number', 'string', 'select', 'date'];
  return arr.map((item, index) => ({
    id: index + 1,
    filterId: 1,
    order: index,
    value: ['', '', ''],
    type: item,
    title: item + ' title ' + index,
    queryKey: item,
    code: item,
    visible: 1,
    params: {
    },
  }));
};
