@echo off
set /p a=����ԭ��:
echo %a%
del /S /F /Q docs
RMDIR /S /Q  docs
del /S /F /Q public
RMDIR /S /Q  public
hugo
ren publoc docs
git add .
git commit -m %a%
git push
pause>nul