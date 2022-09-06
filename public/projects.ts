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
export const projects: Project[] = [
	{
		title: "typetodelete",
		description: "typetodelete is a useless text editor who fills the page with his own text. To use it you first have to clear the page by typing the editor's text faster than him adding new words.",
		authors: [
			{
				name: "marthaloh",
				github: "https://github.com/marthaloh",
			},
		],
		source: "https://github.com/hawk-de/nutzloses-netz-marthaloh",
		url: "https://typetodelete.com",
	},
];
