import { Item } from "../../../src/components/menu/types";

export const mockTabsGenerator = (length: number): Item[] => {
  return Array(length)
    .fill({ visible: 1, menuId: 1, type: "updatePage", width: 100, })
    .map((item, index) => ({
      ...item,
      id: index + 1,
      title: "Tab №" + index,
      order: index,
      params: {
        url: "",
        entity: "",
      },
    }));
};
