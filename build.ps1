<#  
.SYNOPSIS  
    The easiest 'F5' experience for the Angular Music Store... without using Visual Studio
.DESCRIPTION  
    This script builds the project
.NOTES  
    File Name       : run-music-store.ps1  
    Author          : Adam Stephensen <mail@adamstephensen.com>
    Version         : 0.0.1    
    Return Codes    : As per the Standard Windows Error Codes. see: https://msdn.microsoft.com/en-us/library/windows/desktop/ms681382%28v=vs.85%29.aspx 
#>


Write-Host
Write-Host "#################################################################" -foregroundColor green
Write-Host "#####                                                       #####" -foregroundColor green
Write-Host "#####               SSW Angular 2 Music Store  - BUILD      #####" -foregroundColor green
Write-Host "#####                                                       #####" -foregroundColor green
Write-Host "#################################################################" -foregroundColor green
Write-Host


#Restore the node packages for the project
cd .\src\SSW.MusicStore.Web\

npm install

#Hacky hack hack to get around an issue with node_modules
#   copies all javascript from node_modules into wwwroot
#    even worse.. needs to be run twice
gulp node_modules

#Execute the default gulp task to compile typescript etc
gulp

#Hacky hack hack to get around an issue with node_modules
#   copies all javascript from node_modules into wwwroot
#    even worse.. needs to be run twice
gulp node_modules

#Select the right version of dot net
dnvm use 1.0.0-rc1-final

#Restore the required NuGet packages
dnu restore

Write-Host "#####     BUILD  Complete      #####" -foregroundColor green

exit 0