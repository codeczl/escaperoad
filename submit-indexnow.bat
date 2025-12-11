@echo off
echo Submitting URLs to IndexNow...
echo.

curl -X POST "https://api.indexnow.org/indexnow" ^
  -H "Content-Type: application/json; charset=utf-8" ^
  -d @indexnow-submit.json

echo.
echo.
echo Done! Check the response above.
echo If you see "202 Accepted" or "200 OK", submission was successful.
pause
