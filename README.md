# Angular 2 - Enterprise Music Store

The MVC Music Store - but built on angular 2


# Quickstart


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




    
    
