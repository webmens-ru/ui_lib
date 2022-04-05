export const fieldGenerator = (len: number) => {
  let array = Array(len)
    .fill([])
    .map((item, index) => ({
      id: index + 1,
      filterId: 1,
      order: index,
      value: ['', '', ''],
      type: 'date',
      title: 'date',
      queryKey: 'string',
      code: 'string',
      visible: 1,
    }));
    return array
};
