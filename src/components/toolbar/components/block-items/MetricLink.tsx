import React from "react";
import Badge from "../../../badge";
import { MetricLinkContainer } from "../../styles";
import { IBlockItemMetricLink, IBlockItemPropsGeneric } from "../../types";

interface IMetricLinkProps extends IBlockItemPropsGeneric<IBlockItemMetricLink> {}

export function MetricLink({ blockItem, onClick }: IMetricLinkProps) {
  return (
    <MetricLinkContainer onClick={() => onClick(blockItem)} >
      {blockItem.value && <Badge count={blockItem.value} />}
      <span children={blockItem.title} />
    </MetricLinkContainer>
  )
}
