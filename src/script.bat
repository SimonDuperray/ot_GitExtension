@echo off

REM set /p git_command="Type your command: "

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
   echo git commit -m "%1"
   git commit -m "%1"
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