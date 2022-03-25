import React from "react";
import { useCustomContext } from "../store";
import { BurgerMenuContainer } from "../styles";
import { TRowItem } from "../types";
import { useShowControl } from "../../../hooks/useShowControl";

export function BurgerMenu({ item }: { item?: TRowItem }) {
  const { ref, isShow, setShow } = useShowControl();

  return (
    <BurgerMenuContainer ref={ref} onClick={() => setShow(!isShow)}>
      <span />
      <span />
      <span />
      {isShow && <Menu id={item?.id} />}
    </BurgerMenuContainer>
  );
}

function Menu({ id }: { id?: number }) {
  const { state } = useCustomContext();
  if (state.burgerItems.length === 0) {
    return <></>;
  }
  return (
    <div>
      {state.burgerItems.map((ddItem, index) => (
        <button key={index} onClick={() => state.onBurgerItemClick(ddItem, id)}>
          {ddItem.title}
        </button>
      ))}
    </div>
  );
}
