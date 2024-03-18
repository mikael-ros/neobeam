<p align="center" style="background-color: transparent; width: 60%">
    <img src="assets/neobeam.svg">
</p>

## ✨️A modern take on LaTeX beamer 
### A Marp theme

Find the classic beamer outdated? Are your students losing focus due to it? 💤

I'm not sure how to solve the last one, but this theme is my attempt to address the first issue: too many a new presentation look decades old due to the classic look of beamer.

> [!NOTE]
> _[Marp]() is a presentation framework that allows users to create presentations with Markdown and CSS. While this theme relies on Marp to be used, it is not directly affiliated with or sponsored by it._
>
> Inspired by, but not affiliated with or sourced from, the Marp [beam theme made by rnd195](https://github.com/rnd195/my-marp-themes). As mentioned, I have not used any of their code to create this theme.

#### Disclaimer

> [!IMPORTANT]
> This theme on purpose uses no copyright-protected works, and should be able to be used for any purpose, but do conduct your own research before doing such. Anything personal-use should be okay.
>
> Consider the [license](LICENSE) of this project as well.
>
> All fonts used in the theme by default are imported from Google Fonts. Consider the privacy aspects of this yourself and choose wheter you want local installs of them or not. This was a choice made to enable direct linking of the theme to work.

---
## 📺 Previews
### 🔴 [Live preview](https://mikael-ros.github.io/neobeam/neobeam) 🔴
> Live previews for the other color schemes further down!

### Static previews
N<sub>E</sub>Obeam            |  beamer
:-------------------------:|:-------------------------:
![Neobeam](previews/default/example-1.png)  |  ![Beamer](https://www.latextemplates.com/actions/action_fetch_template_image?image=1&template=beamer-presentation)

Image on the right courtesy of [latextemplates.com](https://www.latextemplates.com). Will eventually be replaced by my own.

#### Main title
![Main title preview](previews/default/example-1.png)
#### A slide with text
![Text title preview](previews/default/example-3.png)
#### Science slides
Math            |  Code
:-------------------------:|:-------------------------:
![Math](previews/default/example-5.png)  |  ![Code](previews/default/example-4.png)
### Special elements
Images            |  Tables
:-------------------------:|:-------------------------:
![Images](previews/default/example-7.png)  |  ![Tables](previews/default/example-6.png)
#### HTML styling
> [!NOTE]
> This is optionally enabled! See features & quirks.

![HTML styling](previews/default/example-8.png)

### 🖌️ Theme versions
> Click on the theme to see a live preview

Theme | Based on
:----:|:--------:
[neobeam](https://mikael-ros.github.io/neobeam/neobeam)|
[neobeam-beamer](https://mikael-ros.github.io/neobeam/neobeam-beamer) | beamer color scheme
[neobeam-dsek](https://mikael-ros.github.io/neobeam/neobeam-dsek) | [LTH D-sektionen design profile](https://www.dsek.se/en/documents/governing)
[neobeam-csek](https://mikael-ros.github.io/neobeam/neobeam-csek) | [LTH C-sektionen design profile](https://www.dsek.se/en/documents/governing)
[neobeam-lund](https://mikael-ros.github.io/neobeam/neobeam-lund) | [Lund University design profile](https://www.medarbetarwebben.lu.se/stod-och-verktyg/kommunikation-och-grafisk-profil/grafisk-profil-och-logotyp)

#### Some static previews
> More are available in the repo!

 Default | beamer theme | LTH D-sektionen | LTH C-sektionen | LTH/Lund University 
:-------------------------:|:-------------------------:|:-------------------------:|:-------------------------:|:-------------------------:
 ![Neobeam](previews/default/example-1.png) | ![Beamer](previews/beamer/beamer-1.png) | ![D-sek](previews/dsek/dsek-1.png) | ![D-sek](previews/csek/csek-1.png) | ![Lund](previews/lund/lund-1.png)

---

## ⌨️ Usage
> [!NOTE]
> Until a future timepoint, I won't provide a guide on how to use it with Marp CLI, as I expect CLI users to be technical enough to know how to do this.
### 🛠 Prerequisites
- Git or zip
- Visual Studio Code
- Marp Extension for Visual Studio Code

> [!TIP]
> This font by default uses the fonts Roboto, Roboto Mono (for code) and Noto Sans Math (for math). These are imported in the CSS file, but you can aquire them yourself too, or change them out.

#### 📥 In an existing presentation
1. Download or copy the neobeam.css file into your project OR use the direct link.
2. Add it to your VSCode settings by editing your ``.vscode/settings.json`` file and appending:
```json
  //...
  {
      "markdown.marp.themes": [
          //...
          "path/to/neobeam.css"
          //...
      ]
  }
  //...
```
where ``path/to/neobeam.css`` is either local, for example ``css/neobeam.css`` or the direct link to the repo's CSS file, ex: ``https://raw.githubusercontent.com/mikael-ros/neobeam/main/css/neobeam.css``. Keep in mind that using the direct link might cause your presentation to change over time and it's best you have a local copy instead.

3. Add it to your Marp presentation by adding:
```markdown
marp: true
theme: neobeam
paginate: true
math: katex
footer: '**Author**
         **Title**
         **Conference/course/e.t.c.**'
```

#### ✨️ As a template
Simply clone or fork this repo or download the release. If you wish, you can delete the previews folder.

---

## 🪄 Features & quirks
Most things work like you'd expect, but there are some quirks to keep the cogs turning.
### Title slide
I opted not to always treat the first slide as a title slide, so to declare a slide (any slide actually) a title slide, add the following before the content: ``<!-- _class: title -->``. 

Heres an example of a title slide. As long as you follow as similar format it should work. Theres also an optional logo slot for a University logo or similar.
```html,markdown
<!-- _class: title -->
# Title

## Author

> ### Faculty
> University

## Conference/course/e.t.c.

![logo Logo](path/to/logo)

```
### Headings
~~Instead of defininig a static header, one gets created by the first H1 (single #) in the slide.~~

> [!NOTE]
> This is currently deprecated, but will come back in some form soon.

### Footers
Every page has a footer. It's made from the footer content defined in the beginning of the presentation markdown, and the sections are split by using ** (to create children objects). The footer is a flex-box and I've made it split itself into three sections. You could likely with some modifications change this fairly easily.
### Math
I've opted to use KaTeX, and have not styled for other options yet.
### Definitions
To make LaTeX style bubble definitions I've had to do a slight work around to avoid using HTML in Marp. To define a definition, write the following:
```markdown
    > #### Definition title
    > Definition description
```
The first 3 of these will have unique colors, but after that all of them will have the same. If you wish to add more, change the CSS-file around the ``blockquote:nth-of-type`` part of the stylesheet.
### Image alignment
This stylesheet supports adding a tag in the alt text for ``left``, ``center`` and ``right`` alignment. To define this, you would write something like: ``![left (rest of the alt text)](path/to/image)``. Do note this might cause issues when using these words in your alt text in a normal sentence.
### HTML support
There is light HTML support, including the elements:
- ``<mark>`` (highlighting)
- ``<q>`` (inline quotes)
- ``<var>`` (variables)
- ``<samp>`` (code output)
- ``<audio>`` (audio)
- ``<abbr>`` (abbreviations).

To enable HTML support add or modify the line ``"markdown.marp.enableHtml": true`` in ``.vscode/settings.json``. 

> [!WARNING] 
> Considering the [security issues mentioned in Marps documentation](https://github.com/marp-team/marp-vscode#enable-html-in-marp-markdown-%EF%B8%8F), this is disabled by default, even in the template. You may need to restart Visual Studio Code after changing the setting. You will need to export in HTML for interactive elements to function.

---

**Feel free to contribute** 💙
