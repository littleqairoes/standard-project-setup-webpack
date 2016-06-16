cd ./src/js/modules/comp-lib/$1/components/


#crawl component folder

cd ./$2/docs
find ./ -name '*.md' ! -name 'README.md' -exec cat {} + >> ./../README.MD