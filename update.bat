@echo off
set /p a=����ԭ��:
echo %a%
hugo
ren publoc docs
git add .
git commit -m %a%
git push
pause>nul