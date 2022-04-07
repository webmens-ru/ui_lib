import React from "react";
import { useShowControl } from "../../../../../hooks";
import { TIntegerValue } from "../../right_column/filter_fields/const";
import {
  DropDownBody,
  DropDownContainer,
  DropDownHeader,
  DropDownItem,
} from "./DropDownStyle";

interface IDropDown {
  items: TIntegerValue[];
  currentItem: TIntegerValue;
  setCurrentItem: (props: TIntegerValue) => void;
  width: string;
  readOnly?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function DropDownWithAttr({
  items,
  currentItem,
  setCurrentItem,
  width,
  readOnly = false,
  ...props
}: IDropDown) {
  const { ref, isShow, setShow } = useShowControl();

  const clickShowHandle = () => {
    if (!readOnly) {
      setShow(!isShow);
    }
  };

  return (
    <DropDownContainer onClick={clickShowHandle} width={width} {...props}>
      <DropDownHeader readOnly={readOnly}>
        <p>{currentItem.title}</p>
      </DropDownHeader>
      <DropDownBody isShow={isShow} ref={ref}>
        {items.map((item: TIntegerValue, index: number) => (
          <DropDownItem key={index} onClick={() => setCurrentItem(item)}>
            <div>{item.title}</div>
          </DropDownItem>
        ))}
      </DropDownBody>
    </DropDownContainer>
  );
}
