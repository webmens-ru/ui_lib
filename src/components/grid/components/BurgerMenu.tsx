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
      {isShow && <Menu row={item} />}
    </BurgerMenuContainer>
  );
}

function Menu({ row }: { row?: TRowItem }) {
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
          onClick={() => state.onBurgerItemClick(ddItem, row)}
        >
          {ddItem.label}
        </button>
      ))}
    </div>
  );
}
