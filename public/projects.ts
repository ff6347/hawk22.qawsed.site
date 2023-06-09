interface Author {
	name: string;
	github: string;
}
interface Project {
	title: string;
	description: string;
	authors: Author[];
	source: string;
	url: string;
}
export const projects: Project[] = [
	{
		title: "typetodelete",
		description:
			"typetodelete is a useless text editor who fills the page with his own text. To use it you first have to clear the page by typing the editor's text faster than him adding new words.",
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
		title: "YOU WASTE YOUR TIME",
		description:
			"This is a useless website full of time eating stuff to explore",
		authors: [
			{
				name: "Mia Vogl",
				github: "https://github.com/miamogl",
			},
			{
				name: "Cherise Barthel",
				github: "https://github.com/Cherise",
			},
		],
		source: "https://github.com/hawk-de/nutzloses-netz-cherise-mia",
		url: "https://youwasteyourti.me/",
	},
	{
		title: "Frogchestra",
		description:
			"Frogchestra is an online desktop application where all the keys in your piano are frogs, and you can play them with your keyboard. Play your favourite songs, compose thoughtful moonlight sonatas, or just hit random keys to create a unique atmosphere.",
		authors: [
			{
				name: "Simon Keller",
				github: "https://github.com/simonster12",
			},
		],
		source: "https://github.com/hawk-de/nutzloses-netz-simonster12",
		url: "https://frogchestra.site/",
	},
	{
		authors: [{ github: "Liarikai", name: "Natallia" }],
		url: "https://www.beamenace.lol/",
		source: "https://github.com/hawk-de/nutzloses-netz-Liarikai",
		title: "Be a Menace",
		description: `A mildly entertaining website that you'll visit once, maybe twice, and then never return to it again, because why would you. It's a useless website after all, and you probably have some more important stuff to do than annoying a blue hand-animated troll.`,
	},
	{
		title: "Tricky Target",
		description: "Shoot the target.",
		authors: [
			{
				name: "Joshua Niemann",
				github: "https://github.com/JoshuaNiemann",
			},
		],
		url: "https://trickytarget.art/",
		source: "https://github.com/hawk-de/nutzloses-netz-JoshuaNiemann",
	},
	{
		authors: [
			{
				name: "Hauke Rosendahl",
				github: "https://github.com/HaukeRosendahl",
			},
		],
		description:
			"Trash-Collector is a game where you control a spaceship. Your mission is to get rid of all the trash in space. You do that by shooting the trash with a laser.",
		url: "https://trash-collector.art/",
		source: "https://github.com/hawk-de/nutzloses-netz-HaukeRosendahl",
		title: "Trash Collector",
	},
];
