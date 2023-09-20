import axios from "$lib/utils/base";

export async function getAllStudents() {
  const response = await axios.get('/collections/students/records');

  return response.data
}

export async function getStudentById(id: string) {
  const response = await axios.get(`/collections/students/records/${id}`);

  return response.data
}
