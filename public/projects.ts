interface Author {
	name: string;
	github: string;
}
interface Project {
	title: string;
	description: string;
	authors: Author[];
	source: string;
}
export const projects = [
	{
		title: "",
		description: "",
		authors: [
			{
				name: "",
				github: "",
			},
		],
		sorurce: "",
	},
];
