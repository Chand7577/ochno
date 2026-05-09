New-Item -ItemType Directory -Force -Path 'src\assets\docs\tmp_dbm'
Copy-Item -Path 'src\assets\docs\dbm.docx' -Destination 'src\assets\docs\dbm.zip' -Force
Expand-Archive -Path 'src\assets\docs\dbm.zip' -DestinationPath 'src\assets\docs\tmp_dbm' -Force
$raw = Get-Content 'src\assets\docs\tmp_dbm\word\document.xml' -Raw
$text = $raw -replace '<[^>]+>', "`n"
$text = $text -replace '\s+', ' '
$text = $text -replace '(?<!\w) ', "`n"
Set-Content -Path 'dbm_text.txt' -Value $text
Remove-Item -Recurse -Force 'src\assets\docs\tmp_dbm'
Remove-Item -Force 'src\assets\docs\dbm.zip'
