import React from "react";
import { useShowControl } from "../../../../../hooks";
import {
  DropDownBody,
  DropDownContainer,
  DropDownHeader,
  DropDownItem,
} from "./DropDownStyle";

type TItem = { id: number; title: string };

interface IDropDown {
  items: TItem[];
  currentItem: TItem;
  setCurrentItem: (props: TItem) => void;
  width: string;
  readOnly?: boolean;
}

export default function DropDown({
  items,
  currentItem,
  setCurrentItem,
  width,
  readOnly = false,
}: IDropDown) {
  const { ref, isShow, setShow } = useShowControl();
  const clickShowHandle = () => {
    if (!readOnly) {
      setShow(!isShow);
    }
  };

  return (
    <DropDownContainer onClick={clickShowHandle} width={width} ref={ref}>
      <DropDownHeader readOnly={readOnly}>
        <p>{currentItem.title}</p>
      </DropDownHeader>
      <DropDownBody isShow={isShow}>
        {items.map((item: TItem, index: number) => (
          <DropDownItem key={index} onClick={() => setCurrentItem(item)}>
            <div>{item.title}</div>
          </DropDownItem>
        ))}
      </DropDownBody>
    </DropDownContainer>
  );
}
