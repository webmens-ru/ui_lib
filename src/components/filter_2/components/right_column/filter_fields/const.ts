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
  value: number;
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

export const monthsDropDown = [
  { value: 1, title: 'Январь' },
  { value: 2, title: 'Февраль' },
  { value: 3, title: 'Март' },
  { value: 4, title: 'Апрель' },
  { value: 5, title: 'Май' },
  { value: 6, title: 'Июнь' },
  { value: 7, title: 'Июль' },
  { value: 8, title: 'Август' },
  { value: 9, title: 'Сентябрь' },
  { value: 10, title: 'Октябрь' },
  { value: 11, title: 'Ноябрь' },
  { value: 12, title: 'Декабрь' },
];

export const yearsDropDown = [
  { value: 0, title: '2000' },
  { value: 1, title: '2001' },
  { value: 2, title: '2002' },
  { value: 3, title: '2003' },
  { value: 4, title: '2004' },
  { value: 5, title: '2005' },
  { value: 6, title: '2006' },
  { value: 7, title: '2007' },
  { value: 8, title: '2008' },
  { value: 9, title: '2009' },
  { value: 10, title: '2010' },
  { value: 11, title: '2011' },
  { value: 12, title: '2012' },
  { value: 13, title: '2013' },
  { value: 14, title: '2014' },
  { value: 15, title: '2015' },
  { value: 16, title: '2016' },
  { value: 17, title: '2017' },
  { value: 18, title: '2018' },
  { value: 19, title: '2019' },
  { value: 20, title: '2020' },
  { value: 21, title: '2021' },
];

export const quartersDropDown = [
  { value: 1, title: 'I' },
  { value: 2, title: 'II' },
  { value: 3, title: 'III' },
  { value: 4, title: 'IV' },
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
        value: 1,
        title: 'Не указан',
      },
      {
        value: 2,
        title: 'Информация',
      },
      {
        value: 3,
        title: 'Телефонный звонок',
      },
      {
        value: 4,
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
        value: 1,
        title: 'Нет дел',
      },
      {
        value: 2,
        title: 'На сегодня',
      },
      {
        value: 3,
        title: 'Просрочены',
      },
    ],
  },
];
