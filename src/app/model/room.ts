import {Student} from "./student";

export interface Room {
  id: number,
  name: string,
  capacity: number,
  residents: Student[],
}
