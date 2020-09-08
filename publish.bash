echo "Initiating PUBLISH script"
echo "Building website"
cd website && bundle exec jekyll build && cd ..
echo "Website built"
echo "Initiating transfer to gh_pages repo"
mv website/_site .
git checkout gh_pages
cp -r _site/* .
rm -rf _site
echo "Transfer complete"
