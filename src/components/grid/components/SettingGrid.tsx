import React from 'react';
import { CheckboxBlueContainer, GearBtn, ModalContainer } from '../styles';
import { TColumnItem } from '../types';
import { useSetting } from '../hooks/setting/useSetting';
import { Button } from '../../button';

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
              <Button color="success" buttonProps={{ onClick: submit }}>
                Применить
              </Button>
              <Button color="light" buttonProps={{ onClick: cancel }}>
                Отменить
              </Button>
            </div>
            <div>
              <Button color="dashed" buttonProps={{ onClick: checkAll }}>
                Выбрать все
              </Button>
              <Button color="dashed" buttonProps={{ onClick: clearAll }}>
                Отменить все
              </Button>
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
    <CheckboxBlueContainer checked={!!item.visible}>
      <input
        type="checkbox"
        id={item.code + item.id}
        checked={!!item.visible}
        onChange={() => setVisibleId(item.id)}
      />
      <label htmlFor={item.code + item.id}>{item.title}</label>
    </CheckboxBlueContainer>
  );
}
