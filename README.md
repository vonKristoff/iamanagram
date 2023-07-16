# Aura Satz

> WIP: Outline guide to maintaining this project. 




## 🚀 Project Structure

Inside of your site, you'll see the following folders and files:

```
/
├── public/
│   └── projects/
│				*.jpg 				// place all images used here
│   		└── _thumbs/
│						*.jpg 		// place home page project thumbs here
├── src/
│   ├── components/
│   │   └── *.astro 	// used to create consistant HTML
│   └── content/
│   		└── projects/
│   			└── [projectname].md		// key meta data for project*
│   └── pages/
│       └── [pagename].astro 			// core site pages
│   		└── projects/
│       	└── [projectname].astro // project pages*
```

Any static assets, like images, can be placed in the `public/` directory.

## Manage a project page

Projects will dynamically build themselves into their respective locations when the following steps are followed:

`src/content/projects/projectname` filename must match its page layout counterpart: `src/pages/projects/projectname` for them to be enabled and embedded into the site.



Goto `templates/meta` and `templates/page` respectively and copy the blank contents to get started on a new project page, that you can create in the expected location.

Create a new file using the Github IDE.

```
---
title: The Future Waters of the storm surge..
subtitle: A film featuring sound by BJ Nilsen
date: 12/2/23
thumbnail: JoanArc.jpg // place in public/_thumbnails
related: [] // use any existing <projectname>
category: ['films'] // add more tags if you like
---
```







## Using Github (create | update)





## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

