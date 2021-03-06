export type TStringValue = {
  id: number;
  title: string;
  attr: string;
};

export const stringDropDownValues = [
  {
    id: 1,
    title: 'Не указан',
    attr: '',
  },
  {
    id: 2,
    title: 'Точно',
    attr: '=',
  },
  {
    id: 3,
    title: 'Не задан',
    attr: 'isNull',
  },
  {
    id: 4,
    title: 'Содержится',
    attr: '==%%',
  },
];

export type TIntegerValue = {
  id: number;
  title: string;
  attr: string;
};

export const integerDropDownValues = [
  {
    id: 1,
    title: 'Не заполнено',
    attr: 'isNull',
  },
  {
    id: 2,
    title: 'Точно',
    attr: '=',
  },
  {
    id: 3,
    title: 'Не равно',
    attr: '=<>',
  },
  {
    id: 4,
    title: 'Диапазон',
    attr: '=[>f,<s]',
  },
  {
    id: 5,
    title: 'Больше чем',
    attr: '=>',
  },
  {
    id: 6,
    title: 'Меньше чем',
    attr: '=<',
  },
  {
    id: 7,
    title: 'Больше или равно',
    attr: '=>=',
  },
  {
    id: 8,
    title: 'Меньше или равно',
    attr: '=<=',
  },
];

export type TDateDropDown = {
  id: number;
  title: string;
  attr: string;
};

export const dateDropDown = [
  {
    id: 0,
    title: 'Любая дата',
    attr: '=[>f,<s]',
  },
  {
    id: 1,
    title: 'Вчера',
    attr: '=[>f,<s]',
  },
  {
    id: 2,
    title: 'Сегодня',
    attr: '=[>f,<s]',
  },
  {
    id: 3,
    title: 'Завтра',
    attr: '=[>f,<s]',
  },
  {
    id: 4,
    title: 'Текущая неделя',
    attr: '=[>f,<s]',
  },
  {
    id: 5,
    title: 'Текущий месяц',
    attr: '=[>f,<s]',
  },
  {
    id: 6,
    title: 'Текущий квартал',
    attr: '=[>f,<s]',
  },
  {
    id: 7,
    title: 'Последние 7 дней',
    attr: '=[>f,<s]',
  },
  {
    id: 8,
    title: 'Последние 30 дней',
    attr: '=[>f,<s]',
  },
  {
    id: 9,
    title: 'Последние 60 дней',
    attr: '=[>f,<s]',
  },
  {
    id: 10,
    title: 'Последние 90 дней',
    attr: '=[>f,<s]',
  },
  {
    id: 11,
    title: 'Последние N дней',
    attr: '=[>f,<s]',
  },
  {
    id: 12,
    title: 'Следующие N дней',
    attr: '=[>f,<s]',
  },
  {
    id: 13,
    title: 'Месяц',
    attr: '=[>f,<s]',
  },
  {
    id: 14,
    title: 'Квартал',
    attr: '=[>f,<s]',
  },
  {
    id: 15,
    title: 'Год',
    attr: '=[>f,<s]',
  },
  {
    id: 16,
    title: 'Точная дата',
    attr: '=[>f,<s]',
  },
  {
    id: 17,
    title: 'Прошлая неделя',
    attr: '=[>f,<s]',
  },
  {
    id: 18,
    title: 'Прошлый месяц',
    attr: '=[>f,<s]',
  },
  {
    id: 19,
    title: 'Диапазон',
    attr: '=[>f,<s]',
  },
  {
    id: 20,
    title: 'Следующая неделя',
    attr: '=[>f,<s]',
  },
  {
    id: 21,
    title: 'Следующий месяц',
    attr: '=[>f,<s]',
  },
];

export type TMonth = { id: number; title: string };

export const monthsDropDown = [
  { id: 1, title: 'Январь' },
  { id: 2, title: 'Февраль' },
  { id: 3, title: 'Март' },
  { id: 4, title: 'Апрель' },
  { id: 5, title: 'Май' },
  { id: 6, title: 'Июнь' },
  { id: 7, title: 'Июль' },
  { id: 8, title: 'Август' },
  { id: 9, title: 'Сентябрь' },
  { id: 10, title: 'Октябрь' },
  { id: 11, title: 'Ноябрь' },
  { id: 12, title: 'Декабрь' },
];

export type TYear = { id: number; title: string };

export const yearsDropDown = () => {
  return Array.from({ length: 150 }, (_item, index) => ({
    id: index + 1,
    title: `${1950 + index}`,
  }));
};

export type TQuarter = { id: number; title: string };

export const quartersDropDown = [
  { id: 1, title: 'I' },
  { id: 2, title: 'II' },
  { id: 3, title: 'III' },
  { id: 4, title: 'IV' },
];

export const exampleCheckbox = [
  {
    title: 'filter 1',
  },
];

export const example = [
  {
    type: 'integer',
    title: 'integer',
  },
  {
    type: 'string',
    title: 'string',
  },
  {
    type: 'dropdown',
    title: 'dropdown',
    dropdownValues: [
      {
        id: 1,
        title: 'Не указан',
      },
      {
        id: 2,
        title: 'Информация',
      },
      {
        id: 3,
        title: 'Телефонный звонок',
      },
      {
        id: 4,
        title: 'Отправлен email',
      },
    ],
  },
  {
    type: 'date',
    title: 'date',
  },
  {
    type: 'multiple_select',
    title: 'multiple_select',
    dropdownValues: [
      {
        id: 1,
        title: 'Нет дел',
      },
      {
        id: 2,
        title: 'На сегодня',
      },
      {
        id: 3,
        title: 'Просрочены',
      },
    ],
  },
];
