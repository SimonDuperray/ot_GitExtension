@echo off

for /d %%i in (%cd%\*) do (
 
   echo *********************************************************

   echo "%%i"
   cd "%%i"

   cd ..
   cd ..

   echo --------------------------
   echo git add .
   git add *
   echo --------------------------
   echo git status
   git status
   echo --------------------------
   @REM echo git commit -m "%1"
   @REM git commit -m "%1"
   echo git commit -m "self-name"
   git commit -m "self-name"
   echo --------------------------
   echo git log --oneline
   git log --oneline
   echo --------------------------
   echo git push -u origin master
   git push -u origin master
   echo --------------------------

   echo *********************************************************
)

cd ..