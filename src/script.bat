@echo off

@REM for /d %%i in (%cd%\*) do (
 
   echo *********************************************************

   @REM echo "%%i"
   @REM cd "%%i"

   cd "C:\Users\simon\OneDrive\Documents\PROGRAMMATION\LANGAGES\TypeScript\GitExtension\gitextension"

   echo --------------------------
   echo git add .
   git add *
   echo --------------------------
   echo git status
   git status
   echo --------------------------
   @REM echo git commit -m "%1"
   @REM git commit -m "%1"
   echo git commit -m "third-self-name"
   git commit -m "third-self-name"
   echo --------------------------
   echo git log --oneline
   git log --oneline
   echo --------------------------
   echo git push -u origin master
   git push -u origin master
   echo --------------------------

   echo *********************************************************
@REM )