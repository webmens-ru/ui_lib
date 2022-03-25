import React from "react";
import { LoadingSelectContainer, LoadingSelectRing } from "./style";

export default function LoadingSelect() {
  return (
    <LoadingSelectContainer>
      <LoadingSelectRing>
        <div></div>
        <div></div>
        <div></div>
      </LoadingSelectRing>
    </LoadingSelectContainer>
  );
}
