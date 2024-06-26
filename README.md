# Aura Satz

> WIP: Outline guide to maintaining this project. 

### How to build

Goto https://github.com/vonKristoff/iamanagram whereby you have access to make direct edits to the source, by committing the changes. Once done, the site's hosting service will go ahead and publish the changes, where you will be able to see the updates within ~30 secs.

## Images
*Upload your images to the following directories*
* home pages: `/public/projects/_thumbnails`
* project pages: `/public/projects`

Using the `<Image />` component on a `project-page.astro`
The image `src` root points to `/public/projects`
```
<Image src="my-file-1" />
```
Otherwise found in the directory as: `/public/projects/my-file-1`

---

However there is nothing stopping you from doing this:
```
<Image src="_thumbnails/my-file-2" />
```
Otherwise found in the directory as: `/public/projects/_thumbnails/my-file-2`

## Page Layout, Content and assets

* `/public/projects`

Directly upload your images for your projects here.

* `/src/content/project/[page-name].md`

This will hold the project's metadata (*.md) that will configure the following:

```
---
title: 
subtitle: 
date: 12/2/23 (currently any format tbc)
thumbnail: *.jpg // place in public/_thumbnails
related: ['page-name'] // use any existing <projectname>
category: ['films'] // add more tags if you like
---
```

* `/src/pages/projects/[page-name].astro`

Consider these files as your `*.html` pages, where you will semantically add all of your actual page content and layout.

Any static assets, like images, can be placed in the `public/` directory.



## Manage a project page

Projects will dynamically build themselves into their respective locations when the following steps are followed:

💡 Metadata `src/content/projects/same-project-name.md` filename **must** match its page layout counterpart: `src/pages/projects/same-project-name.astro` 
Otherwise they won't be enabled and embedded into the site's home pages.



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



*todo - add netlify URL here*



## 🧞 Developer Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

