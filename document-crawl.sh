cd ./src/js/modules/comp-lib/$1/components/


#crawl component folder

cd ./molecules/docs
find ./ -name '*.MD' ! -name 'README.MD' -exec cat {} + >> ./../README.MD