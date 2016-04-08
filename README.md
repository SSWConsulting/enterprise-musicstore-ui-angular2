# Angular 2 - Enterprise Music Store

The MVC Music Store - but built on angular 2

Watch introduction video on https://www.youtube.com/watch?v=OzqnTM4xXPs&feature=youtu.be

**Note:** Angular 2.0 is not production ready yet! This seed project is perfect for playing around with the latest versions but do not start new projects with it since a lot of new changes are going to be introduced until the framework is officially released.

This project is based upon the awesome [Angular 2 seed project by Minko Gechev](https://github.com/mgechev/angular2-seed).
We have updated it to implement the functionality originally provided by the iconic [MVC Music Store] (http://www.asp.net/mvc/overview/older-versions/mvc-music-store/mvc-music-store-part-1).

# Quickstart

Open `PowerShell` or `CMD` and navigate to a suitable directory (e.g. `~\src`) and execute the following.

    git clone https://github.com/SSWConsulting/enterprise-musicstore-ui-angular2.git
    
    cd enterprise-musicstore-ui-angular2
    
    .\setup-environment.bat
    
    .\build.bat
    
    .\run.bat

# Detailed Building and Deploying
The setup environment script ensures you have all of the neccessary programs installed and ready, 
however if the script doesn't work, or you'd just like to know what's going on, the following 
section describes everything you'll need. 

## Setting up the tools
Check that you have the required tools:

1.  Visual Studio 2015 Update 1
2.  ASP.Net 5
3.  Node
4.  NPM
5.  Bower
6.  Gulp
7.  TypeScript
8.  WebEssentials - Visual Studio Extension


### Visual Studio 2015 Update 1  
Download from here: [Visual Studio 2015 Update 1](http://go.microsoft.com/fwlink/?LinkId=691129) 

Ensure you install it with Python tools. 


### ASP.Net 5  
Install [ASP.NET 5](https://go.microsoft.com/fwlink/?LinkId=627627)

We're currently running on **1.0.0-rc1-final**. To ensure you have that version installed and active 
use:

    dnvm list
    
If it's not there, you can use the following to install and use it: 

    dnvm install 1.0.0-rc1-final
    
    dnvm use 1.0.0-rc1-final

See [more information](http://docs.asp.net/en/latest/getting-started/installing-on-windows.html) 


### Node  
You need to upgrade nodejs to the latest version.  
Download and install from [NodeJS](https://nodejs.org/en/download/)


### NPM    
The npm preinstalled with VS 2015 is outdated, so it needs to be updated.  
You can check the current version doing:

    npm -v

You should at least have version 3.5.0, if not, in the command prompt, run the following command to install it globally

    npm install -g  npm

The result should be something like this, but version should be at least 3.5.0:
![README](README_images/README.png)


### Bower  
If Bower is not present, install globally using npm:

    npm install -g bower


### Gulp
Then check for gulp the same way, just do:

     gulp
    
and if no such program, again use npm to install it globally  
    
    npm install -g gulp

    
### Typescript  
Typescript comes with VS2015 too, but we install it globally together with the typescript definition manager.
 
     npm install -g  typescript 
     npm install tsd -g

     
### WebEssentials  
Install this from the gallery, or from Visual Studio Extension dialog.   
[Get Web Essentials](https://visualstudiogallery.msdn.microsoft.com/ee6e6d8c-c837-41fb-886a-6b50ae2d06a2)


### Other tools  
To edit markdown files, you can use the built-in WebEssentials tool, but it doesnt really handle images (copy/pasting etc) nicely. 
A much better tool is [MarkPad](http://code52.org/DownmarkerWPF/).


## Building and Running the Project  
Navigate to the `src/SSW.MusicStore.Web` folder and run the following.

Restore .net packages 
    
    dnu restore

Restore npm packages
   
    npm install

Run gulp build tasks to create `dist` folder

    gulp

Run the project

    dnx web
    
Navigate to http://localhost:5000/dist/app to view the site in the browser.




    
    
