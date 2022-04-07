export const fieldGenerator = (len: number) => {
  let array = Array(len)
    .fill([])
    .map((item, index) => ({
      id: index + 1,
      filterId: 1,
      order: index,
      value: ['', '', ''],
      type: 'date',
      title: 'select title ' + index,
      queryKey: 'string',
      code: 'string',
      visible: 1,
      params: {
        data: [
          {
            value: 1,
            title: 'Один',
          },
          {
            value: 2,
            title: 'Два',
          },
        ],
      },
    }));
  return array;
};

// [
//   {
//     id: 1,
//     entityCode: 'b24-sp-test',
//     typeId: 5,
//     title: 'ID',
//     order: 1,
//     type: {
//       id: 5,
//       name: 'integer',
//     },
//     filterFieldOptions: [],
//     code: 'id',
//     params: null,
//     value: ['','','']
//   },
//   {
//     id: 2,
//     entityCode: 'b24-sp-test',
//     typeId: 4,
//     title: 'Test',
//     order: 2,
//     type: {
//       id: 4,
//       name: 'select',
//     },
//     filterFieldOptions: [],
//     code: 'test',
//     value: ['','',''],
//     params: {
//       data: [
//         {
//           value: 1,
//           title: 'Один',
//         },
//         {
//           value: 2,
//           title: 'Два',
//         },
//       ],
//     },
//   },
// ]
