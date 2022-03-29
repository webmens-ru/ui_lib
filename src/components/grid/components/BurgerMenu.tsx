import React from 'react';
import { useCustomContext } from '../store';
import { BurgerMenuContainer } from '../styles';
import { TRowItem } from '../types';
import { useShowControl } from '../../../hooks/useShowControl';
import { useWindowBound } from '../../../hooks';

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
  const { ref } = useWindowBound();

  if (state.burgerItems.length === 0) {
    return null;
  }

  return (
    <div ref={ref}>
      {state.burgerItems.map((ddItem) => (
        <button
          key={ddItem.label}
          onClick={() => state.onBurgerItemClick(ddItem, id)}
        >
          {ddItem.label}
        </button>
      ))}
    </div>
  );
}
