import { SelectColumn } from 'react-data-grid';
import SettingsCellHeader from './components/SettingsCellHeader';
import TextEditor from './editors/TextEditor';
import ActionFormatter from './formatters/ActionFormatter';
import { CommonFormatter } from './formatters/CommonFormatter';
import { DateFormatter } from './formatters/DateFormatter';
import { EmptyFormatter } from './formatters/EmptyFormatter';
import { ImageFormatter } from './formatters/ImageFormatter';
import { LinkFormatter } from './formatters/LinkFormatter';
import { MetricFormatter } from './formatters/MetricFormatter';
import { IFormattersCollection, TColumnItem, TRawColumnItem } from './types';
import { EditorsCollection } from './types/editors';

export const COLUMN_INSTANCE_PLUG: TRawColumnItem = {
  id: 0,
  code: '',
  type: "string",
  title: '',
  visible: true,
  order: 0,
  width: 0
}

export const ACTION_COLUMN: TColumnItem = {
  key: "action",
  name: "Действие",
  frozen: true,
  headerRenderer: () => SettingsCellHeader({ onClick: () => {} }),
  formatter: ActionFormatter,
  headerCellClass: "cell-action",
  width: 40,
  minWidth: 40,
  instance: COLUMN_INSTANCE_PLUG,
}

export const SELECT_COLUMN: TColumnItem = {
  ...SelectColumn,
  frozen: true,
  instance: COLUMN_INSTANCE_PLUG
}

export const IGNORED_COLUMN_KEYS = ['action', 'select-row']

export const FORMATTERS: IFormattersCollection = {
  string: CommonFormatter,
  number: CommonFormatter,
  image: ImageFormatter,
  link: LinkFormatter,
  date: DateFormatter,
  metric: MetricFormatter,
  empty: EmptyFormatter
}

export const EDITORS: EditorsCollection = {
  text: TextEditor,
  date: TextEditor,
  checkbox: TextEditor,
  dropdown: TextEditor
}
