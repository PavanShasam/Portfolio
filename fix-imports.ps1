Get-ChildItem -Path "client\src\components\ui\*.tsx" -File | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $updatedContent = $content -replace 'from "@/lib/utils"', 'from "../../lib/utils"'
    Set-Content $_.FullName -Value $updatedContent
}
