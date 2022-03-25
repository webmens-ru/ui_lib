import React, { RefObject, useMemo } from "react";
import {
  BlackArrow,
  BlackTriangle,
  SquareBtn,
  WhiteTriangle,
  SimpleWhiteTriangle,
  ButtonProps,
} from "..";
import { useShowControl } from "../../../hooks";
import { defaultThemes } from "../style/defaultTheme";
import { svg, svgBeforeList } from "../style/svgConfig";

export const useButtonProps = (
  {
    color = "success",
    variant = "default",
    squareMode,
    palette,
    svgBefore = "without",
    buttonProps,
    items = [],
    itemsProps,
    dropdownDirection = "right",
    dropdownWidth = "150px",
  }: ButtonProps,
  propsRef: RefObject<HTMLDivElement>,
) => {
  const { ref, isShow, toggleShow } = useShowControl(propsRef);

  const completePalette = useMemo(
    () => ({ ...defaultThemes[color], ...palette }),
    [color, palette],
  );

  const afterSvgConfig = useMemo(
    () => ({
      palette: completePalette,
      onClick: toggleShow,
      variant,
    }),
    [completePalette, toggleShow, variant],
  );

  const defaultVariant = useMemo(() => {
    switch (color) {
      case "success":
      case "light":
        return <BlackTriangle {...afterSvgConfig} />;
      case "primary":
        return <WhiteTriangle {...afterSvgConfig} />;
      default:
        return null;
    }
  }, [afterSvgConfig, color]);

  const squareVariant = useMemo(() => {
    switch (squareMode) {
      case undefined:
        return <SquareBtn {...afterSvgConfig} svg={svg.settingBlack} />;
      case "mail":
        return <SquareBtn {...afterSvgConfig} svg={svg.mailBlack} />;
      case "phone":
        return <SquareBtn {...afterSvgConfig} svg={svg.phoneCallBlack} />;
      case "chat":
        return <SquareBtn {...afterSvgConfig} svg={svg.chatBlack} />;
      case "reload":
        return <SquareBtn {...afterSvgConfig} svg={svg.reloadBlue} />;
      default:
        return null;
    }
  }, [afterSvgConfig, squareMode]);

  const outsideAfterSvg = useMemo(() => {
    switch (variant) {
      case "square":
        return squareVariant;
      case "default":
        return defaultVariant;
      default:
        return null;
    }
  }, [defaultVariant, squareVariant, variant]);

  const insideAfter = useMemo(() => {
    switch (variant) {
      case "dropdown":
        return <BlackArrow />;
      case "circle":
        return <SimpleWhiteTriangle />;
      default:
        return null;
    }
  }, [variant]);

  const insideBefore = useMemo(
    () => (variant !== "square" ? svgBeforeList[svgBefore] : null),
    [svgBefore, variant],
  );

  const otherButtonProps = useMemo(
    () =>
      variant === "dropdown" || variant === "circle"
        ? { onClick: toggleShow }
        : {},
    [toggleShow, variant],
  );

  return {
    completePalette,
    items,
    itemsProps,
    buttonProps: {
      ...buttonProps,
      ...otherButtonProps,
    },
    containerProps: {
      ref,
      isShow,
      palette: completePalette,
      variant: variant,
    },
    dropdownProps: {
      variant,
      palette: completePalette,
      dropdownDirection,
      dropdownWidth,
    },
    insideBefore,
    insideAfter,
    outsideAfterSvg,
  };
};
