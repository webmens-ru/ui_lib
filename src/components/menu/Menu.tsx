import React, { StrictMode } from "react";
import { IMenuProps } from "./types";
import PseudoRender from "./components/PseudoRender";
import CountTabs from "./components/CountTabs";
import MainRender from "./components/MainRender";
import { ContextProvider } from "./store";

/**
 * @param items - items array
 * @param setItem - onTabClick;
 * @param itemsMutation - callback to save changes;
 * @param isEditable - default false;
 * @param initialMenuId - id of current tab;
 */

export function Menu(props: IMenuProps) {
  return (
    <StrictMode>
      <ContextProvider {...props}>
        <PseudoRender />
        <CountTabs />
        <MainRender />
      </ContextProvider>
    </StrictMode>
  );
}
