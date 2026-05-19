
# New projects using the Markdown method.

1. Create `src/content/projects/create-new-project.mdx`
2. Follow existing convention:
```
---
title: Warnings in Waiting
subtitle: a multiscreen film and sound installation
date: '2025-08-06' 
thumbnail: automamusic.jpg 
category: ['films']
---
```

3. Add Page Content...
```
---
title: Warnings in Waiting
subtitle: a multiscreen film and sound installation
date: '2025-08-06' 
thumbnail: automamusic.jpg
category: ['films']
---

Aura Satz, 'Warnings in Waiting' (2023), 3 screen installation at Kunstnernes Hus, Oslo, Photo by Credit Tor S. Ulstein, KUNSTDOK

How to listen ahead, how to hold the future in mind when listening? The siren is the prism through which to refract a complex web of entangled relationships to threat, alert, alarm, a doorway, an exit route, survival. (Aura Satz, Preemptive Listening, 2022)

How do we hear and understand emergency signals at a time of intersecting environmental and sociopolitical crisis? Does an alarm have to be alarming? And can we imagine sirens beyond the human? Composed of footage shot at sites where sirens are deployed, Aura Satz works collaboratively with a roster of musicians to speculatively reimagine what a siren is.
```

4. Add an Image
```
...
category: ['films']
---
import { Image } from 'astro:assets';
import warnings from '$assets/warnings-in-waiting/image-name.jpg';

Aura Satz, 'Warnings in Waiting' (2023), 3 screen installation at Kunstnernes Hus, Oslo, Photo by Credit Tor S. Ulstein, KUNSTDOK

<Image src={warnings} alt="Warnings in Waiting main" width={1000} />

```
* The imports are required
* `$assets` points to the `src/assets/` directory 
* `width={1000}` is necessary to shrink your 2mb files! to a standard page width

5. Add Headings - Markdown
```
# h1 I am a page title
## h2 I am a main category title
### h3 I am red and bold

I am **simply bold** text
```
# h1 I am a page title
## h2 I am a main category title
### h3 I am red and bold

I am **simply bold** text

6. Page links
```
This works:
Listen here https://podcasts.apple.com/us/podcast/preemptive-listening/id1690173915

However - this is better:
[Listen here](https://podcasts.apple.com/us/podcast/preemptive-listening/id1690173915)
```
*The becomes the following:*

This works:
Listen here https://soundcloud.com/preemptive-listening/speaking-sirens

However - this is better:
[Listen here](https://soundcloud.com/preemptive-listening/speaking-sirens)

### Finally - dont forget project thumbnail

```
---
thumbnail: the-project-thumbnail.jpg
---
```
Will look for it here:
```
public/projects/_thumbnails/the-project-thumbnail.jpg
```

7. Commit and publish!
