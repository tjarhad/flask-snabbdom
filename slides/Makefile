install-revealjs:
	wget https://github.com/hakimel/reveal.js/archive/master.tar.gz 
	tar -xzvf master.tar.gz
	mv reveal.js-master reveal.js
	rm master.tar.gz

mac-install-pandoc:
	brew install pandoc

linux-install-pandoc:
	sudo apt install pandoc -y

build-pdf:
	docker run -ti --rm -v $(PWD):/data -w /data  pandoc/latex -t beamer $(in) -o $(out)

build-html:
	pandoc -s -t revealjs -V theme:simple -V revealjs-url=https://revealjs.com $(in) -o $(out)
