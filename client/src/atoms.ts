import { atom } from "recoil";

export const pageTitleAtom = atom({
  key: "pageTitle",
  default: "", //뭘로 하지? daily home? 좋은 생각 나면 바꿔줘
});
