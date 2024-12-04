---
marp: true
theme: neobeam
paginate: true
math: katex
footer: '**mikael-ros**
         **A modern take on the LaTeX beamer theme**
         **Version 0.7, 2024**'
---
<!-- _class: title -->
# A modern take on the LaTeX beamer theme

## mikael-ros

> ### Faculty of GitHub
> University of Marp

## Version 0.7, 2024

![logo GitHub Logo](../assets/github-mark.svg)

---
<!-- header: 'Table of contents' -->
1. Normal text
2. Code blocks
3. Mathematics
4. Tables
5. Images
6. HTML stuff
---
<!-- header: 'Normal text' -->
**This** is what a regular slide can look like in Neobeam.
- A cool fact
- Interesting tidbit

My favorite letters are:
1. A
2. B
3. C

A quote from my favorite author
> "Hello" - Author Cool 2024

---
<!-- header: 'Code blocks' -->
We can define ``variables`` inline, and code in blocks (with syntax highlighting!!!):
```java
    if (marp) {
        apply.neobeam();
    }
```
---
<!-- header: 'Mathematics corner' -->
## Formulas
> The length of a vector can be computed by the following formula
> $$
||\overline v|| = \sqrt{a^2 + b^2} \\
\text{where } \overline v = (a,b)
$$
## Definitions
Blockquotes with level 4 (####) headings inside get translated to definitions like:

> #### Vector
> A collection of numbers

---
<!-- header: 'Data' -->
Tables are also decorated in this theme!
| Left Row    | Center Row  | Right row     |
| :---        |    :----:   |          ---: |
| Some        |  Cool       | Data          |
| Some        |  Cool       | Data          |
| Some        |  Cool       | Data          |
| Some        |  Cool       | Data          |
---
<!-- header: 'Images' -->

![Photo by Joshua J. Cotten on Unsplash](https://images.unsplash.com/photo-1601247387326-f8bcb5a234d4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) 

Images can be left-aligned, centered, and right-aligned!

---
<!-- header: 'HTML wonderland' -->
<!-- This slide only works with HTML enabled -->

<h2>These are all the HTML elements I've styled!</h2>

Text can be <mark>marked</mark>, <abbr title="abbreviated">abbr</abbr> and you can quote things inline <q>like this</q>.

You can embed audio like:
<audio controls src="http://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3" type="audio/mp3">
</audio> 