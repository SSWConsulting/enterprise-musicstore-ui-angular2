# angularmusicstore

The MVC Music Store - but built on angular 2

**Note:** Angular 2.0 is not production ready yet! This seed project is perfect for playing around with the latest versions but do not start new projects with it since a lot of new changes are going to be introduced until the framework is officially released.

This project is based upon the awesome [Angular 2 seed project by Minko Gechev](https://github.com/mgechev/angular2-seed).
We have updated it to implement the functionality originally provided by the iconic [MVC Music Store] (http://www.asp.net/mvc/overview/older-versions/mvc-music-store/mvc-music-store-part-1).

# Quickstart

Open PowerShell and navigate to a suitable directory (e.g. `~\src`) and execute the following.

    git clone https://github.com/SSWConsulting/musicstore-ui-angular2-dotnet.git
    cd musicstore-ui-angular2-dotnet
    setup.ps1

# Detailed Building and deploying AngularMusicStore
Instructions for the developer

## Setting up the tools
Check that you have the required tools:

1.  Visual Studio 2015 Update 1
2.  ASP.Net 5
3.  Node
4.  NPM
5.  Gulp
6.  TypeScript
7.  WebEssentials - Visual Studio Extension

### Visual Studio 2015 Update 1
Download from here: [Download](http://go.microsoft.com/fwlink/?LinkId=691129) 

Ensure you install it with Python tools. 

### ASP.Net 5

Install [ASP.NET 5](https://go.microsoft.com/fwlink/?LinkId=627627)

Enable command line tools

    dnvm upgrade

See [more information](http://docs.asp.net/en/latest/getting-started/installing-on-windows.html) 

### Node
You need to upgrade nodejs to the latest version.
Download and install from [here](https://nodejs.org/en/download/)

### NPM
The npm preinstalled with VS 2015 is outdated, so it needs to be updated.
You can check the current version doing:

    npm -v

You should at least have version 3.5.0, if not, in the command prompt, run the following command to install it globally

    npm install -g  npm

The result should be something like this, but version should be at least 3.5.0:
![README](README_images\README.png)

### Bower
The run the following command to check for bower:

    bower --version
   
You should get a response like this

![README1](README_images\README1.png)


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
     
### Karma

Install the [Karma vsix adapter](https://visualstudiogallery.msdn.microsoft.com/4cd59e4a-82e8-4b4e-8302-d102fc81b090) for Visual Studio to see karma test runner results in the test explorer

### WebEssentials

Install this from the gallery, or from Visual Studio Extension dialog, link to it is [here](https://visualstudiogallery.msdn.microsoft.com/ee6e6d8c-c837-41fb-886a-6b50ae2d06a2)

### Other tools

To edit markdown files, you can use the built-in WebEssentials tool, but it doesnt really handle images (copy/pasting etc) nicely.  A much better tool is [MarkPad](http://code52.org/DownmarkerWPF/).




## Setting up the project

* git clone https://github.com/SSWConsulting/angularmusicstore  angularmusicstore
* cd angularmusicstore
* run the command `dnu restore` for each project
* build the solution
* npm install   # or `npm run reinstall` if you get an error from the command line for the SSW.MusicStore.Web project
* npm start     # start with --env dev from the command line for the SSW.MusicStore.Web project


## Running test


npm test

# Debug - In two different shell windows

npm run build.test.watch      # 1st window
npm run karma.start           # 2nd window
    
    