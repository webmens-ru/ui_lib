// import React, { useCallback, useMemo, useState } from 'react';
// import {
//   DateFieldContainer,
//   DateInput,
//   FilterFieldTitle,
// } from '../../../styles';
// import {
//   dateDropDown,
//   monthsDropDown,
//   quartersDropDown,
//   TMonth,
//   TQuarter,
//   TYear,
//   yearsDropDown,
// } from './const';
// import { useCustomContext } from '../../../store/Context';
// import { IField, IOneField, IThreeField, ITwoField } from '../../../types';
// import { useFieldsDraggable } from '../../../utils/useFieldsDraggble';
// import { DatePicker } from '../../../../date_picker';
// import { Select } from '../../../../select';
// import { IDataItem } from '../../../../select/types';

// export default function DateField({ item, updateField, ...props }: IField) {
//   const [dropDownValue, setDropDownValue] = useState<IDataItem[]>([
//     dateDropDown.find((dateItem) => dateItem.title === item.value[0]) ||
//       dateDropDown[0],
//   ]);
//   const { dispatch } = useCustomContext();

//   const updateValue = useCallback((value: IDataItem[]) => {
//     console.log('🚀 ~ file: Date.tsx ~ line 33 ~ DateField ~ value', value);
//     // const field = {
//     //   ...item,
//     //   value,
//     // };
//     // dispatch({
//     //   type: 'SET_FILTER_FIELD_VALUE',
//     //   field,
//     // });
//     // updateField(field, 'value');
//   }, []);

//   const setDDV = useCallback((value: IDataItem[]) => {
//     setDropDownValue(value);
//     // updateValue([value.title]);
//   }, []);

//   const currentComponent = useMemo(() => {
//     switch (dropDownValue.title) {
//       case 'Последние N дней':
//       case 'Следующие N дней':
//       case 'Год':
//       case 'Точная дата':
//         return (
//           <TwoField
//             value={dropDownValue}
//             setValue={setDDV}
//             updateValue={updateValue}
//             item={item}
//           />
//         );
//       case 'Месяц':
//       case 'Квартал':
//       case 'Диапазон':
//         return (
//           <ThreeField
//             value={dropDownValue}
//             setValue={setDDV}
//             updateValue={updateValue}
//             item={item}
//           />
//         );
//       default:
//         return (
//           <Select
//             filterable={false}
//             value={dropDownValue}
//             data={item.params.data || dateDropDown}
//             closeOnSelect={true}
//             selectWidth="100%"
//             onChange={updateValue}
//           />
//         );
//     }
//   }, [dropDownValue, item, setDDV, updateValue]);

//   const { draggable, events } = useFieldsDraggable();

//   return (
//     <DateFieldContainer draggable={draggable} {...props}>
//       <FilterFieldTitle>{item.title}</FilterFieldTitle>
//       <div {...events}>{currentComponent}</div>
//       <span></span>
//       <span onClick={() => updateField(item, 'hide')}></span>
//     </DateFieldContainer>
//   );
// }

// function TwoField({ value, setValue, updateValue, item }: ITwoField) {
//   const setInputValueCheck = useCallback(
//     (e: React.ChangeEvent<HTMLInputElement>) => {
//       if (e.target.value.match(/^\d*$/)) {
//         // updateValue([value.title, e.target.value]);
//       }
//     },
//     []
//   );

//   const buttonChange = useCallback(
//     (num: number) => {
//       let secondValue = item.value[1];
//       if (secondValue) {
//         if (+secondValue + num < 0) {
//           secondValue = `0`;
//         } else {
//           secondValue = `${+secondValue + num}`;
//         }
//       } else {
//         secondValue = `0`;
//       }
//       // updateValue([value.title, secondValue]);
//     },
//     [item.value]
//   );

//   const [selectYear, setSelectYear] = useState<IDataItem[]>([
//     { title: `${new Date().getFullYear()}`, value: new Date().getFullYear() },
//   ]);

//   const setYear = useCallback((year: IDataItem[]) => {
//     setSelectYear(year);
//     // updateValue([value.title, year.title]);
//   }, []);

//   const setDate = useCallback((date: string) => {
//     // updateValue([value.title, date]);
//   }, []);

//   switch (value.title) {
//     case 'Год':
//       return (
//         <>
//           <Select
//             filterable={false}
//             value={value}
//             data={item.params.data || dateDropDown}
//             closeOnSelect={true}
//             selectWidth="49%"
//             onChange={setValue}
//           />
//           <Select
//             filterable={false}
//             value={selectYear}
//             data={item.params.data || yearsDropDown}
//             closeOnSelect={true}
//             selectWidth="49%"
//             onChange={setYear}
//           />
//         </>
//       );
//     case 'Точная дата':
//       return (
//         <>
//           <Select
//             filterable={false}
//             value={value}
//             data={item.params.data || dateDropDown}
//             closeOnSelect={true}
//             selectWidth="49%"
//             onChange={setValue}
//           />
//           <DatePicker
//             fieldWidth="49%"
//             onSelect={setDate}
//             initialDateISO={item.value[1]}
//             withTime={false}
//             format="DD.MM.YYYY"
//             svg="left"
//           />
//         </>
//       );
//     default:
//       return (
//         <>
//           <Select
//             filterable={false}
//             value={value}
//             data={item.params.data || dateDropDown}
//             closeOnSelect={true}
//             selectWidth="49%"
//             onChange={setValue}
//           />
//           <DateInput width="49%">
//             <input
//               type="text"
//               value={item.value[1]}
//               onChange={setInputValueCheck}
//             />
//             <button onClick={() => buttonChange(1)}></button>
//             <button onClick={() => buttonChange(-1)}></button>
//           </DateInput>
//         </>
//       );
//   }
// }

// function ThreeField({ value, setValue, updateValue, item }: IThreeField) {
//   const firstDropDown = (
//     <Select
//       filterable={false}
//       value={value}
//       data={item.params.data || dateDropDown}
//       closeOnSelect={true}
//       selectWidth="32%"
//       onChange={setValue}
//     />
//   );

//   const [selectYear, setSelectYear] = useState<IDataItem[]>([
//     {
//       title: `${new Date().getFullYear()}`,
//       value: new Date().getFullYear(),
//     },
//   ]);

//   const setYear = useCallback((year: IDataItem[]) => {
//     setSelectYear(year);
//     // updateValue([item.value[0], item.value[1], year.title]);
//   }, []);

//   const yearDropDown = useMemo(
//     () => (
//       <Select
//         filterable={false}
//         value={selectYear}
//         data={item.params.data || yearsDropDown}
//         closeOnSelect={true}
//         selectWidth="32%"
//         onChange={setYear}
//       />
//     ),
//     [item.params.data, selectYear, setYear]
//   );

//   const [selectMonth, setSelectMonth] = useState<IDataItem[]>([
//     { title: `${new Date().getMonth()}`, value: new Date().getMonth() },
//   ]);

//   const setMonth = useCallback((month: IDataItem[]) => {
//     setSelectMonth(month);
//     // updateValue([item.value[0], `${month.id}`, item.value[2]]);
//   }, []);

//   const monthDropDown = useMemo(
//     () => (
//       <Select
//         filterable={false}
//         value={selectMonth}
//         data={item.params.data || monthsDropDown}
//         closeOnSelect={true}
//         selectWidth="32%"
//         onChange={setMonth}
//       />
//     ),
//     [item.params.data, selectMonth, setMonth]
//   );

//   const [selectQuarter, setSelectQuarter] = useState<IDataItem[]>([
//     { title: `${quartersDropDown[1]}`, value: quartersDropDown[1].title },
//   ]);

//   const setQuarter = useCallback((quarter: IDataItem[]) => {
//     setSelectQuarter(quarter);
//     // updateValue([item.value[0], `${quarter.id}`, item.value[2]]);
//   }, []);

//   const quarterDropDown = useMemo(
//     () => (
//       <Select
//         filterable={false}
//         value={selectQuarter}
//         data={item.params.data || quartersDropDown}
//         closeOnSelect={true}
//         selectWidth="32%"
//         onChange={setQuarter}
//       />
//     ),
//     [item.params.data, selectQuarter, setQuarter]
//   );

//   const setFirstDate = useCallback((date: string) => {
//     // updateValue([item.value[0], date, item.value[2]]);
//   }, []);

//   const setSecondDate = useCallback((date: string) => {
//     // updateValue([item.value[0], item.value[1], date]);
//   }, []);

//   switch (value.title) {
//     case 'Месяц':
//       return (
//         <>
//           {firstDropDown}
//           {monthDropDown}
//           {yearDropDown}
//         </>
//       );
//     case 'Квартал':
//       return (
//         <>
//           {firstDropDown}
//           {quarterDropDown}
//           {yearDropDown}
//         </>
//       );
//     default:
//       return (
//         <>
//           {firstDropDown}
//           <DatePicker
//             onSelect={setFirstDate}
//             initialDateISO={item.value[1]}
//             fieldWidth="32%"
//             withTime={false}
//             format="DD.MM.YYYY"
//             svg="left"
//           />
//           <DatePicker
//             onSelect={setSecondDate}
//             initialDateISO={item.value[2]}
//             fieldWidth="32%"
//             withTime={false}
//             format="DD.MM.YYYY"
//             svg="left"
//           />
//         </>
//       );
//   }
// }
