import React from "react";
import { TooltipProps } from ".";
import { TooltipBubble, TooltipMessage } from "./styles";

interface TooltipComponentProps extends Omit<TooltipProps, "id"> {
  targetElement: HTMLElement;
  mouseEvt: MouseEvent;
}

export default function TooltipComponent({ message, position, targetElement, mouseEvt }: TooltipComponentProps) {
  const getClosestRelativeElement = (element: HTMLElement): HTMLElement => {
    const isRelative = element.style.position === "relative"

    return isRelative ? element : element.parentElement ? getClosestRelativeElement(element.parentElement) : document.documentElement
  }

  const relativeElement = getClosestRelativeElement(targetElement) || document.body
  const targetRect = relativeElement.getBoundingClientRect()
  console.log(targetRect)
  console.log(targetElement.getBoundingClientRect())
  
  return (
    <TooltipBubble className={position} style={{ top: targetElement.offsetTop - 75, left: targetElement.offsetLeft }}>
      <TooltipMessage children={message} />
    </TooltipBubble>
  );
}
