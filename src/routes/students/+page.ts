import {getAllStudents} from "$lib/hooks/student";
export async function load({}) {
	const data = await getAllStudents();

	console.log(data);
	const imageBaseURL: string = "https://docu-tracker.pockethost.io/api/files/students/"

	data.items.forEach((student: { image: string; id: any; avatar: any; }) => {
		student.image = `${imageBaseURL}/${student.id}/${student.avatar}`
	})

	console.log(data)
	return data
}
