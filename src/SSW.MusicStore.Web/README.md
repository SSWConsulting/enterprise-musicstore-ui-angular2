# SSW Angular Music Store
### Introduction Video

https://www.youtube.com/watch?v=OzqnTM4xXPs&feature=youtu.be 

### Set up your visual studio 2015
1. Install Visual Studio 2015
2. Install nodejs 
      source: https://nodejs.org/en/. use version 4 or higher
	  reason: adds node globally so you can work with npm or tools like bower and gulp outside of Visual Studio

3. Install npm globally
        Run the following commands 
		- npm install npm -g (This is included with a generic install of node so can normally be skipped)

3. Install typescript and gulp globally so we can use them anywhere
		Run the following commands 
		- npm install typescript gulp -g

4. Install ASP.Net 5 
	follow the instructions on http://docs.asp.net/en/latest/getting-started/installing-on-windows.html
	(includes installing ASP.Net beta, dnvm setup & dnvm upgrade)

### Getting and running the code
1. Clone the project
2. Run the command `dnu restore`
3. Run `npm install` from the command line for the SSW.MusicStore.Web project
4. Run `gulp` will create a dist folder
5. From the "musicstore-ui-angular2" folder. Run:
	setup-environment.bat
	build.bat
	run.bat
In your browser, navigate to localhost:5000/dist/app to view the site


### Contributing 
We would love you to contribute to the solution. 

Please feel free to improve the project and issue a pull request.