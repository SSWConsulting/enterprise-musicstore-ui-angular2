<#  
.SYNOPSIS  
    The easiest 'F5' experience for the Angular Music Store... without using Visual Studio
.DESCRIPTION  
    This script blows away your current repo if it exists, reclones it from GitHub, and then runs the project using Kestrel
.NOTES  
    File Name       : run-music-store.ps1  
    Author          : Adam Stephensen <mail@adamstephensen.com>
    Version         : 0.0.1    
    Return Codes    : As per the Standard Windows Error Codes. see: https://msdn.microsoft.com/en-us/library/windows/desktop/ms681382%28v=vs.85%29.aspx 
#>


$codefolder = "\code"
$repoName = "musicstore-ui-angular2"
$repoLocation = "https://github.com/SSWConsulting/musicstore-ui-angular2.git"

Write-Host
Write-Host "#################################################################" -foregroundColor green
Write-Host "#####                                                       #####" -foregroundColor green
Write-Host "#####               SSW Angular 2 Music Store               #####" -foregroundColor green
Write-Host "#####                                                       #####" -foregroundColor green
Write-Host "#################################################################" -foregroundColor green
Write-Host
Write-Host "This script will delete your current code folder, clone the repo, and run it."
Write-Host 
Write-Host "THIS SCRIPT IS ABOUT TO DELETE YOUR CURRENT CODE FOLDER FOR THIS PROJECT." -foregroundColor "red"
Write-Host 



$prompt = Read-Host "You are about to DELETE and reclone the project. Would you like to continue? (Y | N)"
if ($prompt -ne "Y" -or $prompt -ne "y") 
{ 
    exit 0
}


cd $codefolder

# Blow away the Repo if it already exists
try
{
    Remove-Item -Path $repoName -Recurse -Force
}
catch
{
    Write-Host "Unable to nuke folder"
}

# Clone the repo from GitHub
$process = start-process git -ArgumentList "clone $repoLocation" -Wait -Passthru

if ($process.ExitCode -ne 0) 
{
    Write-Host "- Install attempt failed." -foregroundColor "red"
    exit 2
}

#Update the powershell script to ensure that node is installed globally and dotnet are correctly installed 
cd musicstore-ui-angular2
./setup.ps1 -yes


#Restore the node packages for the project
cd src\SSW.MusicStore.Web\

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

#Run the website
dnx web