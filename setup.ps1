<#  
.SYNOPSIS  
    Setup environment for development on the Angular 2 Music Store
.DESCRIPTION  
    This script will look for the required build dependencies on your machine.
    If they are not found it will attempt to install them.  
.NOTES  
    File Name       : setup.ps1  
    Author          : Jeremy Cade <me@jeremycade.com>
    Version         : 0.0.2
    Created         : 2015-12-14
    Last Modified   : 2015-12-15
    Return Codes    : As per the Standard Windows Error Codes. see: https://msdn.microsoft.com/en-us/library/windows/desktop/ms681382%28v=vs.85%29.aspx 
#>

param(
    [switch]$yes = $false
)

# Minimum versions of the toolsets. 
# Update these as needed. 
$node_version = [version]"4.0.0"
$npm_version = [version]"3.0.0"
$typescript_version = [version]"1.7.3"
$gulp_version = [version]"3.9.0"
#$bower_version = [version]"1.7.0"
$dnx_version = "1.0.0-rc1-final"

##### HELPER FUNCTIONS #####

# Get-Version
function Get-Version($command) {

    $regex = "(\d\.\d\.\d)"
    
    $v1 = (& $command "-v" | Out-String)
    
    if ($v1 -match $regex) {
        $v2 = [version]$matches[0]

        return $v2
    }

    return [version]"0.0.0.0"
}

# Check and Install NPM Dependencies. 
function Check-And-Install($command, $npmName, $friendlyName, $requiredVersion) {
    if ((Get-Command $command -ErrorAction SilentlyContinue) -eq $null)
    {
        Write-Host "- Unable to find $friendlyName in your PATH" -foregroundColor red 
        Write-Host "= Attempting to install $friendlyName" -foregroundColor yellow

        $process = start-process npm -ArgumentList "install $npmName -g" -Wait -Passthru

        if ($process.ExitCode -ne 0) 
        {
            Write-Host "- Install attempt failed." -foregroundColor "red"
            exit 2
        }

        Write-Host "+ Install of $friendlyName succeeded." -foregroundColor cyan
    }
    elseif ((Get-Version($command)) -lt $requiredVersion) 
    {

        Write-Host "- $friendlyName does not meet the build dependency requirements." -foregroundColor red 
        Write-Host "= Attempting to update $friendlyName to version $requiredVersion" -foregroundColor yellow

        $process = start-process npm -ArgumentList "upgrade $npmName -g" -Wait -Passthru

        if ($process.ExitCode -ne 0) 
        {
            Write-Host "- Upgrade attempt failed." -foregroundColor "red"
            exit 2
        }

        Write-Host "+ Upgrade of $friendlyName succeeded." -foregroundColor cyan   
    }
    else 
    {
        Write-Host "+ Found $friendlyName" -foregroundColor green
    }
}

##### FRONT-END BUILD #######

function Setup-FrontEndBuild() {
    # Check to see if Node is on the system. 
    # Exit if Node could not be found. 
    if ((Get-Command node -ErrorAction SilentlyContinue) -eq $null -or (Get-Command node).Version -lt $node_version)
    {
        Write-Host "- Unable to find Node in your PATH or your Node version is out of date." -foregroundColor "red"
        Write-Host "- Please install Node from: https://nodejs.org/en/" --foregroundColor "red"
        exit 2
    } 
    else 
    {
        Write-Host "+ Found Node" -foregroundColor green
    }

    # Check to see if NPM is on the system. 
    # Exit if NPM could not be found. 
    if ((Get-Command npm -ErrorAction SilentlyContinue) -eq $null) 
    { 
        Write-Host "- Unable to find NPM in your PATH." -foregroundColor "red"
        Write-Host "- Please see: https://github.com/npm/npm/wiki/Troubleshooting for details on how to setup NPM on Windows."  -foregroundColor "red"
        exit 2
    }
    elseif ((Get-Version("npm")) -le $npm_version) 
    {
        # Check to see if NPM is the correct version.
        # NPM does not have File or Product version attributes set.

        Write-Host "- Your Version of NPM does not meet the build dependency requirements." -foregroundColor "red"
        Write-Host "- Please see: https://github.com/npm/npm/wiki/Troubleshooting for details on how to update NPM on Windows." -foregroundColor "red"
        exit 2
    }
    else 
    {
        Write-Host "+ Found NPM" -foregroundColor green
    }

    # Check for TypeScript. Attempt to install if not present.
    Check-And-Install "tsc" "typescript" "TypeScript" $typescript_version

    # Check for Gulp. Attempt to install if not present.
    Check-And-Install "gulp" "gulp" "Gulp" $gulp_version

    # Check for Bower
    # Check-And-Install "bower" "bower" "Bower" $bower_version
 
    Write-Host "All front-end build dependencies satisfied." -foregroundColor "green"
}

##### Install NPM Dependencies & Run Front End Build #####

function Build-FrontEnd() {
    Write-Host "Install NPM Dependencies & Run Front End Build Tasks" -foregroundColor yellow
    Set-Location .\src\SSW.MusicStore.Web\ # Navigate into src
    npm install
    gulp
    Set-Location ..\..\ # Back to repo root
}

##### ASP.NET 5 SETUP #####

function Setup-ASPNET() {
    Write-Host "Setup ASPNET / DNVM / DNX" -foregroundColor yellow
    if ((Get-Command dnvm -ErrorAction SilentlyContinue) -eq $null)
    {
         Write-Host "- Unable to find DNVM in your PATH." -foregroundColor "red"
         Write-Host "= Attempting to install DNVM" -foregroundColor yellow

         iex ((new-object net.webclient).DownloadString('https://raw.githubusercontent.com/aspnet/Home/dev/dnvminstall.ps1'))
    }

    try 
    {
        dnvm use $dnx_version
    }
    catch 
    {
        dnvm install $dnx_version
        dnvm use $dnx_version
    }
    finally
    {
        dnu restore
    }
}

##### END FUNCTIONS #####


##### SCRIPT MAIN #####

Write-Host "##### SSW Angular 2 Music Store #####" -foregroundColor green
Write-Host 
Write-Host "This script will check for the appropriate dependencies and install them if required."
Write-Host "There may be some modifications to your file system."
Write-Host

$prompt = "N"
if ($yes)
{
    $prompt = "Y"
} 
else 
{
    $prompt = Read-Host "Would you like to continue? (Y | N)"
}

if ($prompt -eq "Y" -or $prompt -eq "y") 
{ 
    Setup-FrontEndBuild
    Setup-ASPNET
    # Build-FrontEnd
}

exit 0