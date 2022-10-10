import { IData } from "../../../interfaces/data.interface";
import data from '../../../data/data.json'

export const getFilteredData = (category: string): IData[] => {
  if (category === "all") {
    return data;
  } else {
    return data.filter((item: IData) => item.category === category);
  }
};