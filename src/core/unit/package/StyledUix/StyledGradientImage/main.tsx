import { generateMain } from "../../../../../lib/miragex/unit/main";
import {
  StyledColorVariable,
  StyledMaterialVariable,
  StyledSpriteVariable,
} from "../../../../lib/styledUnit";

import { unitConfig } from "./detail";

const Unit = generateMain(unitConfig);

export const O = (
  props: Omit<
    Parameters<typeof Unit>[0],
    | "styledColorTopLeft"
    | "styledColorTopRight"
    | "styledColorBottomLeft"
    | "styledColorBottomRight"
    | "styledSprite"
    | "styledMaterial"
  > & {
    styledColorTopLeft?: StyledColorVariable;
    styledColorTopRight?: StyledColorVariable;
    styledColorBottomLeft?: StyledColorVariable;
    styledColorBottomRight?: StyledColorVariable;
    styledSprite?: StyledSpriteVariable;
    styledMaterial?: StyledMaterialVariable;
  },
) => {
  return Unit({
    ...props,
    styledColorTopLeft: props.styledColorTopLeft?.variableName,
    styledColorTopRight: props.styledColorTopRight?.variableName,
    styledColorBottomLeft: props.styledColorBottomLeft?.variableName,
    styledColorBottomRight: props.styledColorBottomRight?.variableName,
    styledSprite: props.styledSprite?.variableName,
    styledMaterial: props.styledMaterial?.variableName,
  });
};
