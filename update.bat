@echo off
set /p a=更新原因:
echo %a%
hugo
ren publoc docs
git add .
git commit -m %a%
git push
pause>nul