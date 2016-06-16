cd ./src/js/modules/comp-lib/$1/components/


#crawl component folder

cd ./molecules/docs
find ./ -name '*.md' ! -name 'README.md' -exec cat {} + >> ./../README.MD