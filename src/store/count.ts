import { atom } from "recoil";

export const fontSizeState = atom<number | null>({
  key: "font_size_state",
  default: 0,
});
