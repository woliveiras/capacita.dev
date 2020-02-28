if [ -d "./website/node_modules" ]
then
    cd website
    yarn start
else
    cd website
    yarn install
    yarn start
fi