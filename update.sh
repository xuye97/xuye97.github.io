#!/bin/bash
echo "更新原因: "
read up
rm -rf docs
rm -rf public
hugo
mv public docs
cp CNAME docs/
git add .
git commit -m $up
git push
echo "success"