cd website && bundle exec jekyll build
mv website/_site .
git checkout gh_pages
cp -r _site/* .
rm -rf _site

