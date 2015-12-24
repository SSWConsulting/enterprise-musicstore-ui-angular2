<#  
.SYNOPSIS  
    The easiest 'F5' experience for the Angular Music Store... without using Visual Studio
.DESCRIPTION  
    This script runs the project using Kestrel
.NOTES  
    File Name       : run-music-store.ps1  
    Author          : Adam Stephensen <mail@adamstephensen.com>
    Version         : 0.0.1    
    Return Codes    : As per the Standard Windows Error Codes. see: https://msdn.microsoft.com/en-us/library/windows/desktop/ms681382%28v=vs.85%29.aspx 
#>


Write-Host
Write-Host "#################################################################" -foregroundColor green
Write-Host "#####                                                       #####" -foregroundColor green
Write-Host "#####               SSW Angular 2 Music Store   ** RUN **   #####" -foregroundColor green
Write-Host "#####                                                       #####" -foregroundColor green
Write-Host "#################################################################" -foregroundColor green
Write-Host

#Run the website
cd .\src\SSW.MusicStore.Web\

dnx web


Write-Host "#####     RUN  Complete      #####" -foregroundColor yellow
