// @ts-ignore
import {getStudentById} from "$lib/hooks/student";

// @ts-ignore
export async function load({params}) {
  const {id} = params;

  return await getStudentById(id);
}