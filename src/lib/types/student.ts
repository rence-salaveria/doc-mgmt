import type {Course, Gender, StudentStatus} from "$lib/types/enums";

export interface Student {
  id: string;
  fullName: string;
  course: Course;
  status: StudentStatus;
  image: string;
  gender: Gender;
  birthday: Date;
}