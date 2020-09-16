serve:
	cd website && bundle exec jekyll serve

build:
	# yarn
	# gulp
	cd website && bundle exec jekyll build && cd ..

publish:
	bash publish.bash
