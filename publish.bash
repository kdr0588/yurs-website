# constants
DEFAULT_MSG = "New changes to website."

echo "Initiating PUBLISH script"
echo "Building website"
cd website && bundle exec jekyll build && cd ..
echo "Website built"
echo "Initiating transfer to gh_pages repo"
mv website/_site .
git checkout gh_pages
cp -r _site/* .
rm -rf _site website
echo "Transfer complete"
echo "Initiating publish"

read -p "Please enter your msg: " msg

if [[ -z "$msg" ]];
then
    echo "No message was input, resorting to default msg: $DEFAULT_MSG"
    $msg = $DEFAULT_MSG
else
    echo "msg is not empty, using '$msg'"
fi

echo "commit -m $msg"
