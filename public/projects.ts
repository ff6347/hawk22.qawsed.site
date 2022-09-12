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
	{
    "title": "Frogchestra",
    "description": "Frogchestra is an online desktop application where all the keys in your piano are frogs, and you can play them with your keyboard. Play your favourite songs, compose thoughtful moonlight sonatas, or just hit random keys to create a unique atmosphere.",
    "authors": [
        {
            "name": "Simon Keller",
            "github": "https://github.com/simonster12"
        }
    ],
    "source": "https://github.com/hawk-de/nutzloses-netz-simonster12",
    "url": "https://frogchestra.site/"
}
];
