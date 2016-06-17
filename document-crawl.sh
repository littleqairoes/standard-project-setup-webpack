#This crawler is designed to accept two parameters: version number and component type
#It traverses to the component type entered, finds and extracts
#documentation from .jsx files using DocumentationJS, and appends
#them all to a README.md file created locally.

#Usage: ./document-crawl.sh v2 molecules

#Traverses to the path specified
cd ./src/js/modules/comp-lib/$1/components/$2

<<<<<<< 91a0b6301f691e03e76d1a1350e6a96747c96300
#Deletes any existing README.md or temp.txt file

if [ -f README.md ];
then
   rm README.md
fi

touch README.md

if [ -f temp.txt ];
then
  rm temp.txt
fi

#Goes through each .jsx file and pump out the markdown to temp.txt
while IFS=  read -r -d $'\0'; do
    echo -e $REPLY >> temp.txt
done < <(find ./ -name '*jsx' -print0)

sort temp.txt -o temp.txt

#Retrieves the sorted entries from temp.txt into an array.
ld_IFS=$IFS
IFS=$'\n'
line=($(cat temp.txt))
IFS=$old_IFS

#Documents each .jsx file found.
for file in "${line[@]}"
do
  echo $file
  documentation build $file -f md >> README.md
done

#Formats the README.md file to change all h1s to h3s.
sed -i 's/#/###/g' README.md

#Removes useless Extends keywords
sed -i 's/\*\*Extends \*\*//g' README.md

rm temp.txt
=======
cd ./molecules/docs
find ./ -name '*.md' ! -name 'README.md' -exec cat {} + >> ./../README.MD
>>>>>>> Change all capital extensions to lower case
