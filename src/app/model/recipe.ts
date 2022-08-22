import {Student} from "./student";
import {Ingredient} from "./ingredient";

export interface Recipe {
  id: number,
  name: string,
  student: Student,
  ingredients: Ingredient[],
}
