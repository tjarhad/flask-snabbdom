- Install Pandoc

```bash
make mac-install-pandoc
```


or 

```bash
make linux-install-pandoc
```

- Install revealjs

```bash
make install-revealjs
```


- Build slides using 
```bash
make build-html in=sample.md out=sample.html
```
Open HTML file in browser

- Export RevealJS Slides to pdf

Open HTML file in browser and reload file with appending `?print-pdf`.
Use export as pdf using printing option in browser

- Latex Slides

You can export to pdf using latex beamer

```bash
make build-pdf in=sample.md out=sample.pdf
```

See Also:

- [Pandoc User’s Guide](https://pandoc.org/MANUAL.html)
- [Reveal JS](https://github.com/hakimel/reveal.js/)
- [Reveal JS plugins](https://github.com/hakimel/reveal.js/wiki/Plugins,-Tools-and-Hardware)