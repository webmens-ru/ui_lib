import React, { useCallback, useEffect, useState } from "react";
import { IField, TField } from "../../../types";
import { useCustomContext } from "../../../store/Context";
import {
  FilterFieldTitle,
  MultipleSelectBodyItem,
  MultipleSelectHeader,
  SelectBody,
  SelectContainer,
} from "../../../styles";
import LoadingSelect from "../../mini_components/loading_select";
import { useShowControl } from "../../../../../hooks";

export default function MultipleSelect({
  item,
  updateField,
  ...props
}: IField) {
  const { ref, isShow, setShow } = useShowControl();
  const { dispatch } = useCustomContext();

  const deleteItem = (DDitem: string) => {
    const field = {
      ...item,
      value: item.value.filter((val) => val !== DDitem),
    };
    dispatch({ type: "UPDATE_FILTER_FIELD", field });
  };

  return (
    <SelectContainer {...props}>
      <FilterFieldTitle>{item.title}</FilterFieldTitle>
      <MultipleSelectHeader onClick={() => setShow(!isShow)} ref={ref}>
        {item.value
          .filter((item) => item !== "")
          .map((item, index) => (
            <div key={index}>
              {item}
              <button onClick={() => deleteItem(item)}></button>
            </div>
          ))}
      </MultipleSelectHeader>
      <Body item={item} updateField={updateField} isShow={isShow} />
      <span></span>
      <span
        onClick={() => updateField({ ...item, visible: false }, "hide")}
      ></span>
    </SelectContainer>
  );
}

function Body({
  item,
  isShow,
  updateField,
}: {
  item: TField;
  isShow: boolean;
  updateField: (field: TField, param: string) => void;
}) {
  const { state, dispatch } = useCustomContext();
  const [data, setData] = useState<string[]>([]);

  const start = useCallback(async () => {
    const response = await state.getSelectItems(item.type, item.queryKey);
    setData(response);
  }, [item.queryKey, item.type, state]);

  useEffect(() => {
    start();
  }, [start]);

  const setCurrentItem = (
    e: React.ChangeEvent<HTMLInputElement>,
    DDitem: string,
  ) => {
    let field = item;
    if (e.target.checked) {
      field.value.push(DDitem);
    } else {
      field.value = field.value.filter((val) => val !== DDitem);
    }
    dispatch({ type: "UPDATE_FILTER_FIELD", field });
    updateField(field, "value");
  };

  if (data.length > 0) {
    return (
      <SelectBody isShow={isShow}>
        {data.map((DDitem, index) => (
          <MultipleSelectBodyItem key={index}>
            <input
              type="checkbox"
              checked={item.value.indexOf(DDitem) !== -1}
              onChange={(e) => setCurrentItem(e, DDitem)}
            />
            {DDitem}
          </MultipleSelectBodyItem>
        ))}
      </SelectBody>
    );
  }
  return <LoadingSelect />;
}
