[xml]$xml = Get-Content 'c:\Users\2 - Grandeur Net\Desktop\clients\och\temp_act\word\document.xml'
$text = $xml.GetElementsByTagName('w:t') | ForEach-Object { $_.InnerText }
$text -join ' ' | Out-File 'c:\Users\2 - Grandeur Net\Desktop\clients\och\act_carbon_clean.txt'
