import {Student} from "./student";
import {Recipe} from "./recipe";
import {Ingredient} from "./ingredient";

export interface Potion {
  id: number,
  name: string,
  student: Student,
  recipe: Recipe,
  ingredients: Ingredient[],
  brewingStatus: string,
}
