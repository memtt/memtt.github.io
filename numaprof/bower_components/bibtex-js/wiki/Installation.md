# Installing ![BibTeX-js](logo.png)

Load javascript, add this to your html code (the source bibtex file may not be the most recent):

```html
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
<script type="text/javascript" src="https://cdn.rawgit.com/pcooksey/bibtex-js/b81606e85986fa8ad0eb66954493bc1c0b3d7ab1/src/bibtex_js.js"></script>
```

Place BibTeX link into `<bibtex>` tag or insert bibtex text into a (hidden) textarea with `bibtex_input` in the class:

```html
<bibtex src="test.bib"></bibtex>

<textarea id="bibtex_input" style="display:none;">
@book{book1,
  author = "Donald Knuth",
  title = "Concrete Mathematics"
}
</textarea>
```

Output will be displayed in the element with id "bibtex_display", add this to HTML:

```html
<div id="bibtex_display"></div>
```

That's it! 

### Unless you want to get fancy 

Customize how publications are displayed using [styles](styles.md).

Search entries, hide certain bibtex entries, additional bibtex variables, and more with [extra functionality](extra.md).
