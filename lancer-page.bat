@echo off
setlocal

cd /d "%~dp0"

echo.
echo [TECFA] Build en cours...
call npm run build
if errorlevel 1 (
  echo.
  echo [TECFA] Le build a echoue. Corrige l'erreur puis relance ce fichier.
  pause
  exit /b 1
)

echo.
echo [TECFA] Demarrage sur http://localhost:3010 ...
call npx next start -p 3010

endlocal
