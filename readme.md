<p align="center">
    <img style="background-color: transparent" src="assets/neobeam.svg">
</p>

[![Mentioned in Awesome Marp](https://awesome.re/mentioned-badge-flat.svg)](https://github.com/marp-team/awesome-marp)

## ✨️A modern take on LaTeX beamer 
### A Marp theme

Find the classic beamer outdated? Are your students losing focus due to it? 💤

I'm not sure how to solve the last one, but this theme is my attempt to address the first issue: too many a new presentation look decades old due to the classic look of beamer.

> [!NOTE]
> _[Marp](https://marp.app/) is a presentation framework that allows users to create presentations with Markdown and CSS._
>
> Inspired by, but not affiliated with or sourced from, the Marp [beam theme made by rnd195](https://github.com/rnd195/my-marp-themes). As mentioned, I have not used any of their code to create this theme.

<a href='https://ko-fi.com/Z8Z212GZR6' target='_blank'><img height='60' style='border:0px;height:60px;' src='https://storage.ko-fi.com/cdn/kofi1.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

#### Disclaimer

> [!IMPORTANT]
> **None of the following is legal advice. Consult a professional**.
> This theme uses free-to-use fonts, and should be okay for personal use, but do conduct your own research before hosting any large presentation with it.
>
> Consider the [license](LICENSE) of this project as well, and Marp's license itself.
>
> All fonts used in the theme by default are imported from Google Fonts. Consider the privacy aspects of this yourself and choose wheter you want local installs of them or not. This was a choice made to enable direct linking of the theme to work.

---
## 📺 Previews
### 🔴 [Live preview](https://mikael-ros.github.io/neobeam/neobeam) 🔴
> Live previews for the other color schemes further down!

### Static previews
N<sub>E</sub>Obeam            |  beamer
:-------------------------:|:-------------------------:
![Neobeam](previews/neobeam/neobeam-0.png)  |  ![Beamer](https://www.latextemplates.com/actions/action_fetch_template_image?image=1&template=beamer-presentation)

Image on the right courtesy of [latextemplates.com](https://www.latextemplates.com). Will eventually be replaced by my own.

#### Main title
![Main title preview](previews/neobeam/neobeam-0.png)
#### A slide with text
![Text title preview](previews/neobeam/neobeam-2.png)
#### Science slides
Math            |  Code
:-------------------------:|:-------------------------:
![Math](previews/neobeam/neobeam-4.png)  |  ![Code](previews/neobeam/neobeam-3.png)
### Special elements
Images            |  Tables
:-------------------------:|:-------------------------:
![Images](previews/neobeam/neobeam-6.png)  |  ![Tables](previews/neobeam/neobeam-5.png)
#### HTML styling
> [!NOTE]
> This is optionally enabled! See features & quirks.

![HTML styling](previews/neobeam/neobeam-7.png)

### 🖌️ Theme versions
> Click on the theme to see a live preview

Theme | Based on
:----:|:--------:
[neobeam](https://mikael-ros.github.io/neobeam/neobeam)|
[neobeam-beamer](https://mikael-ros.github.io/neobeam/beamer) | beamer color scheme
[neobeam-dsek](https://mikael-ros.github.io/neobeam/dsek) | [LTH D-sektionen design profile](https://www.dsek.se/en/documents/governing)
[neobeam-csek](https://mikael-ros.github.io/neobeam/csek) | [LTH C-sektionen design profile](https://www.dsek.se/en/documents/governing)
[neobeam-lund](https://mikael-ros.github.io/neobeam/lund) | [Lund University design profile](https://www.medarbetarwebben.lu.se/stod-och-verktyg/kommunikation-och-grafisk-profil/grafisk-profil-och-logotyp)
[neobeam-embracket](https://mikael-ros.github.io/neobeam/embracket) | [Embracket design language](https://www.embracket.com)
[neobeam-neonbeam](https://mikael-ros.github.io/neobeam/neonbeam) | Inspired by neon colors
[neobeam-oldenbeam](https://mikael-ros.github.io/neobeam/oldenbeam) | Inspired by coal?
[neobeam-ecobeam](https://mikael-ros.github.io/neobeam/ecobeam) | Inspired by nature?

#### Some static previews
> More are available in the repo!

| Default                                          | beamer                                           | LTH D-sektionen                                  | 
|:------------------------------------------------:|:------------------------------------------------:|:------------------------------------------------:|
|![Neobeam](previews/neobeam/neobeam-0.png)        |![Beamer](previews/beamer/beamer-0.png)           |![D-sek](previews/dsek/dsek-0.png)                |

| LTH C-sektionen                                  | LTH/Lund University                              | Embracket                                        | 
|:------------------------------------------------:|:------------------------------------------------:|:------------------------------------------------:|
|![C-sek](previews/csek/csek-0.png)                |![Lund](previews/lund/lund-0.png)                 |![Embracket](previews/embracket/embracket-0.png)  |

| Neonbeam                                         | Oldenbeam                                        | Ecobeam                                          |
|:------------------------------------------------:|:------------------------------------------------:|:------------------------------------------------:|
|![Neonbeam](previews/neonbeam/neonbeam-0.png)     |![Oldenbeam](previews/oldenbeam/oldenbeam-0.png)  |![Ecobeam](previews/ecobeam/ecobeam-0.png)        |                                                 |

---

## ⌨️ Usage
> [!NOTE]
> Until a future timepoint, I won't provide a guide on how to use it with Marp CLI, as I expect CLI users to be technical enough to know how to do this. You can read the [Marp CLI documentation here](https://github.com/marp-team/marp-cli), and inspect the [preview creation script](/example/create-previews.sh) for some examples.
### 🛠 Prerequisites
- Git or zip
- Visual Studio Code
- Marp Extension for Visual Studio Code

> [!TIP]
> This theme by default uses the fonts Roboto, Roboto Mono (for code) and Noto Sans Math (for math), as well as some others depending on the version of the theme. These are imported in the CSS file, but you can aquire them yourself too, or change them out. In the LTH C-sektionen and D-sektionen themes, Roboto is switched out for Helvetica.

> [!WARNING]
> For reasons beyond my comprehension, it is necessary to use different notation for ``hsl`` in CSS in the Marp VS code preview as compared to the build version sometimes. To mitigate this I have added a ``build-multiplier`` variable to the CSS files. Set this to ``1`` when necessary, otherwise ``100``.

#### 📥 In an existing presentation
1. Download or copy the neobeam.css file into your project OR use the direct link. If using specific themes, do remember they are dependent on the base theme.
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
where ``path/to/neobeam.css`` is either local, for example ``css/neobeam.css`` or the direct link to the repo's CSS file, ex: ``https://raw.githubusercontent.com/mikael-ros/neobeam/main/css/neobeam.css``. Keep in mind that using the direct link might cause your presentation to change over time and it's best you have a local copy instead. When you are using any derivative theme, you also need to import the base neobeam theme.

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
The theme names are written as presented in the table in the previews section.
4. Change ``build-multiplier`` to ``1``, if the preview looks wrong. Do not forget to change it back before you build.

> If you are, against all odds, using more than 1000 slides, and the pagination wraps, go into [``neobeam.css``](css/neobeam.css) and modify ``section::after``'s ``width``, and correspondingly the ``--pagination-space`` in ``footer > *:last-child``.

#### ✨️ As a template
Simply clone or fork this repo or download the release. If you wish, you can delete the previews folder. 

All themes are registered and ready in the template.

---

## 🪄 Features & quirks
Most things work like you'd expect, but there are some quirks to keep the cogs turning.
### Theming
This theme has some variables for easier tweaking, aiding inexperienced users and power-users alike. 

#### Explanation of variables
You can use any of these variables to easily change most things about the theme. The direct variables are meant for easy tweaking, whereas the dependent variables are not necessarily meant to be referenced. Deeper customization can be achieved by modifying the CSS itself.
##### Direct variables
These variables are meant to be set by the user, and have snowball effects.

| Variable name                  | Purpose                                                                                                                   | What does it affect?          |
|--------------------------------|---------------------------------------------------------------------------------------------------------------------------|-------------------------------|
|``build-multiplier``            | Changes the overall multiplication of all color values. Used when there are inconsistencies between the preview and build.| Changes all colored elements. |
|``saturation-multiplier``       | Multiplies all cases where saturation is added.                                                                           | Affects ``darker-primary`` and ``darkest-primary``. See the variables individual descriptions in the next section on "dependent variables". |
|``desaturation-multiplier``     | Multiplies all cases where saturation is removed.                                                                         | Affects ``lighter-primary``, ``text-color``, ``text-color-negative``, ``highlight-color-two``, ``highlight-color-three``, and the background color for the definition blocks. ee their individual descriptions in the next section.|
|``brightness-multiplier``       | Multiplies all cases where brightness is added.                                                                           | Affects ``lighter-primary``, ``text-color-lighter``, ``text-color-lightest``, ``text-color-negative``, ``text-color-negative-lighter``, ``text-color-negative-lightest``, ``highlight-color-two``, ``highlight-color-three``, and the highlight brightness of ``mark`` elements.  See the variables individual descriptions in the next section on "dependent variables". |
|``darkness-multiplier``         | Multiplies all cases where brightness is removed.                                                                         | Affects ``darker-primary``, ``darkest-primary``, ``text-color``, ``text-color-negative-darker``, and the background color of the definition blocks.  See the variables individual descriptions in the next section on "dependent variables". |
|``color-shift-degrees``         | Shifts the colors for sequenced definition blocks by the specified amount of degrees times some factor.                   | Affects ``highlight-color-two`` and ``highlight-color-three``. See the variables individual descriptions in the next section on "dependent variables".|
|``default-font``                | Sets the font for the majority of the text.                                                                               | Affects the root ``font-family``, e.g. the font for the document as a whole. |
|``monospace-font``              | Sets the monospace font, used in code blocks, e.t.c.                                                                      | Affects the font used for ``pre`` (code blocks), ``code`` (inline code snippets), and ``samp`` (sample code snippets). |                                                                  
|``math-font``                   | Sets the math font, used in math blocks.                                                                                  | ~~Affects the font used for ``.katex`` (math blocks).~~ **note; currently not working** |
|``font-size``                   | Sets the font size for the document. The variable is referenced in several locations.                                     | Used to set the root ``font-size``, and also affects where the pagination index is placed. |
|``primary``                     | Sets the primary color for the document.                                                                                  | Affects ``lighter-primary``, ``darker-primary``, ``darkest-primary``, ``text-color``, ``text-color-negative``, ``highlight-color-one``, ``highlight-color-two``, ``highlight-color-three``, the color of ``section header``, the color of ``footer``, the color of ``footer``s last child, and the title page header's color. See the variables individual descriptions in the next section on "dependent variables".| 
|``definition-height``           | Sets the height of definition blocks.                                                                                     | Affects definition block heights. | 
|``header-height``               | Sets the height of the headers.                                                                                           | Affects ``footer-height``, ``top-margin``, ``left-right-margin``, and header heights. See the variables individual descriptions in the next section on "dependent variables". |
|``text-padding``                | Sets the text padding within various elements.                                                                            | Affects the text padding around all elements that contain text, essentially (too many to list). |
|``border-radius-default``       | Sets the border radius of various elements.                                                                               | Affects ``border-radius-softer``, ``border-radius-harder``, and all rounded elements (too many to list). See the variables individual descriptions in the next section on "dependent variables". |

##### Dependent variables
These variables set themselves automatically through using the previously described direct variables, but you can also edit them manually.

| Variable name                  | Purpose                                                                                                                   | What does it change?          |
|--------------------------------|---------------------------------------------------------------------------------------------------------------------------|-------------------------------|
|``lighter-primary``             | Sets the lighter version of the primary color.                                                                            | The color of ``th`` (table headers). |
|``darker-primary``              | Sets the darker version of the primary color.                                                                             | The color of the middle portion of the footer. |
|``darkest-primary``             | Sets an even darker version of the primary color.                                                                         | The color of the first portion of the footer. |
|``text-color``                  | Sets the primary text color.                                                                                              | The root color of text. Also effects it's own derived variables, seen below. |
|``text-color-lighter``          | Sets the lighter version of the primary text color.                                                                       | Various text elements. |
|``text-color-lightest``         | Sets the lightest version of the primary text color.                                                                      | Various text elements. |
|``text-color-negative``         | Sets the opposite text color, mainly used for when text is set against a poorly contrasted background.                    | Various text elements. |
|``text-color-negative-lighter`` | Sets the lighter opposite text color.                                                                                     | Various text elements as well as ``background-color``. |
|``text-color-negative-lightest``| Sets the lightest opposite text color.                                                                                    | Various text elements. |
|``text-color-negative-darker``  | Sets the darker opposite text color.                                                                                      | Various text elements. |
|``highlight-color-one``         | Sets the first highlight color.                                                                                           | The first variety of definition block. |
|``highlight-color-two``         | Sets the second highlight color.                                                                                          | The second variety of definition block in addition to ``mark`` and ``samp``. |
|``highlight-color-three``       | Sets the third highlight color.                                                                                           | The third variety of definition block. |
|``footer-height``               | Sets the footer height.                                                                                                   | The height of the footer, the position of the pagination index, ``left-right-margin``, and ``bottom-margin``.
|``top-margin``                  | Sets the top margin of each slide.                                                                                        | Used in ``margin``. |
|``left-right-margin``           | Sets the margins on the left and right sides of the slides.                                                               | Used in ``margin``. |
|``bottom-margin``               | Sets the bottom margin of each slide.                                                                                     | Used in ``margin``. |
|``margin``                      | Uses the previous three variables to set an overall margin.                                                               | Sets the ``margin`` of ``section``, e.g. the margin of each slide. |
|``border-radius-softer``        | Sets the radius of "softer" elements.                                                                                     | Nothing, currently. |
|``border-radius-harder``        | Sets the radius of "harder" elements.                                                                                     | Nothing, currently. |
|``background-color``            | Sets the background color of all the slides.                                                                              | The ``background-color`` of ``section``, e.g. the color of each slide. |



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

Like other images, the logo can be assigned left side too.

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

To enable HTML support add or modify the line ``"markdown.marp.html": true`` in ``.vscode/settings.json`` (or globally). 

> [!WARNING] 
> Considering the [security issues mentioned in Marps documentation](https://github.com/marp-team/marp-vscode#enable-html-in-marp-markdown-%EF%B8%8F), this is disabled by default, even in the template. You may need to restart Visual Studio Code after changing the setting. You will need to export in HTML for interactive elements to function.

---

**Feel free to contribute** 💙
