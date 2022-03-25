import React from "react";
import {
  TabsContainer,
  MoreBtn,
  MenuContainer,
  SettingBtn,
} from "../styles/index";
import MenuTabs from "./MenuTabs";
import TopTabs from "./TopTabs";
import gearSvg from "../assets/grid-gear.svg";
import { useShowControl } from "../../../hooks/useShowControl";
import { useCustomContext } from "../store";
import { useDraggable } from "../hooks/useDraggble";
import { useSetTab } from "../hooks/useSetTab";

export default function MainRender() {
  const { state, dispatch } = useCustomContext();

  const {
    isDraggable,
    setIsDraggable,
    dragStart,
    dragEnter,
    dragToTop,
    dragToHide,
    dragEndThenUpdate,
    updateTabs,
  } = useDraggable(state, dispatch);
  
  const { setTab } = useSetTab(dispatch);

  const { ref, isShow, setShow } = useShowControl();

  return (
    <TabsContainer>
      <div onDragEnter={dragToTop}>
        <TopTabs
          arr={state.items
            .filter((item) => item.visible)
            .slice(0, state.countTopItems)}
          isDraggable={isDraggable}
          dragStart={dragStart}
          dragEnter={dragEnter}
          dragEndThenUpdate={dragEndThenUpdate}
          currentId={state.currentItem?.id || -1}
          setTab={setTab}
        />
        <MoreBtn onClick={() => setShow(!isShow)} current={isShow}>
          Ещё
        </MoreBtn>
      </div>
      {isShow && (
        <MenuContainer ref={ref}>
          <MenuTabs
            firstPart={state.items
              .filter((item) => item.visible)
              .slice(state.countTopItems)}
            secondPart={state.items.filter((item) => !item.visible)}
            isDraggable={isDraggable}
            dragStart={dragStart}
            dragEnter={dragEnter}
            dragEndThenUpdate={dragEndThenUpdate}
            dragToHide={dragToHide}
            setTab={setTab}
          />
          {!state.isEditable ? null : isDraggable ? (
            <SettingBtn onClick={() => updateTabs()}>
              Завершить настройку
            </SettingBtn>
          ) : (
            <SettingBtn onClick={() => setIsDraggable(true)}>
              Настроить меню
              <img src={gearSvg} alt="gear" />
            </SettingBtn>
          )}
          <SettingBtn>Вернуть меню по умолчанию</SettingBtn>
        </MenuContainer>
      )}
    </TabsContainer>
  );
}
