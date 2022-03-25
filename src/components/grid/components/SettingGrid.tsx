import React from "react";
import { CheckboxBlueContainer, GearBtn, ModalContainer } from "../styles";
import { TColumnItem } from "../types";
import { useSetting } from "../hooks/setting/useSetting";

export function SettingGrid() {
  const {
    ref,
    isShow,
    setShow,
    proxyColumn,
    setVisibleId,
    submit,
    cancel,
    checkAll,
    clearAll,
  } = useSetting();

  return (
    <>
      <GearBtn onClick={() => setShow(!isShow)}></GearBtn>
      {isShow && (
        <ModalContainer ref={ref}>
          <h2>Настройка списка</h2>
          <div>
            {proxyColumn.map((item, index) => (
              <Checkbox key={index} item={item} setVisibleId={setVisibleId} />
            ))}
          </div>
          <div>
            <div>
              <button onClick={submit}>Применить</button>
              <button onClick={cancel}>Отменить</button>
            </div>
            <div>
              <button onClick={checkAll}>Выбрать все</button>
              <button onClick={clearAll}>Отменить все</button>
            </div>
          </div>
        </ModalContainer>
      )}
    </>
  );
}

function Checkbox({
  item,
  setVisibleId,
}: {
  item: TColumnItem;
  setVisibleId: (id: number) => void;
}) {
  return (
    <CheckboxBlueContainer checked={item.visible === 1}>
      <input
        type="checkbox"
        id={item.code + item.id}
        checked={item.visible === 1}
        onChange={() => setVisibleId(item.id)}
      />
      <label htmlFor={item.code + item.id}>{item.title}</label>
    </CheckboxBlueContainer>
  );
}
