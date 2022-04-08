export type TStringValue = {
  id: number;
  title: string;
  attr: string;
};

export const stringDropDownValues = [
  {
    title: 'Не указан',
    value: '',
  },
  {
    title: 'Точно',
    value: '=',
  },
  {
    title: 'Не задан',
    value: 'isNull',
  },
  {
    title: 'Содержится',
    value: '==%%',
  },
];

export type TIntegerValue = {
  id: number;
  title: string;
  attr: string;
};

export const integerDropDownValues = [
  {
    title: 'Не заполнено',
    value: 'isNull',
  },
  {
    title: 'Точно',
    value: '=',
  },
  {
    title: 'Не равно',
    value: '=<>',
  },
  {
    title: 'Диапазон',
    value: '=[>f,<s]',
  },
  {
    title: 'Больше чем',
    value: '=>',
  },
  {
    title: 'Меньше чем',
    value: '=<',
  },
  {
    title: 'Больше или равно',
    value: '=>=',
  },
  {
    title: 'Меньше или равно',
    value: '=<=',
  },
];

export type TDateDropDown = {
  id: number;
  title: string;
  attr: string;
};

export const dateDropDown = [
  {
    title: 'Любая дата',
    value: '=[>f,<s]',
  },
  {
    title: 'Вчера',
    value: '=[>f,<s]',
  },
  {
    title: 'Сегодня',
    value: '=[>f,<s]',
  },
  {
    title: 'Завтра',
    value: '=[>f,<s]',
  },
  {
    title: 'Текущая неделя',
    value: '=[>f,<s]',
  },
  {
    title: 'Текущий месяц',
    value: '=[>f,<s]',
  },
  {
    title: 'Текущий квартал',
    value: '=[>f,<s]',
  },
  {
    title: 'Последние 7 дней',
    value: '=[>f,<s]',
  },
  {
    title: 'Последние 30 дней',
    value: '=[>f,<s]',
  },
  {
    title: 'Последние 60 дней',
    value: '=[>f,<s]',
  },
  {
    title: 'Последние 90 дней',
    value: '=[>f,<s]',
  },
  {
    title: 'Последние N дней',
    value: '=[>f,<s]',
  },
  {
    title: 'Следующие N дней',
    value: '=[>f,<s]',
  },
  {
    title: 'Месяц',
    value: '=[>f,<s]',
  },
  {
    title: 'Квартал',
    value: '=[>f,<s]',
  },
  {
    title: 'Год',
    value: '=[>f,<s]',
  },
  {
    title: 'Точная дата',
    value: '=[>f,<s]',
  },
  {
    title: 'Прошлая неделя',
    value: '=[>f,<s]',
  },
  {
    title: 'Прошлый месяц',
    value: '=[>f,<s]',
  },
  {
    title: 'Диапазон',
    value: '=[>f,<s]',
  },
  {
    title: 'Следующая неделя',
    value: '=[>f,<s]',
  },
  {
    title: 'Следующий месяц',
    value: '=[>f,<s]',
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

export const yearsDropDown = [
  { id: 0, title: '2000' },
  { id: 1, title: '2001' },
  { id: 2, title: '2002' },
  { id: 3, title: '2003' },
  { id: 4, title: '2004' },
  { id: 5, title: '2005' },
  { id: 6, title: '2006' },
  { id: 7, title: '2007' },
  { id: 8, title: '2008' },
  { id: 9, title: '2009' },
  { id: 10, title: '2010' },
  { id: 11, title: '2011' },
  { id: 12, title: '2012' },
  { id: 13, title: '2013' },
  { id: 14, title: '2014' },
  { id: 15, title: '2015' },
  { id: 16, title: '2016' },
  { id: 17, title: '2017' },
  { id: 18, title: '2018' },
  { id: 19, title: '2019' },
  { id: 20, title: '2020' },
  { id: 21, title: '2021' },
];

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
