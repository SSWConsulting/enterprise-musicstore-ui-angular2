# SSW Angular Music Store
### Set up your visual studio 2015
1. Install Visual Studio 2015
2. Install nodejs 
      source: https://nodejs.org/en/. use version 4
	  reason: adds node globally. you can now work with npm and tools like bower and gulp outside of Visual Studio

3. Install npm globally
		- npm install npm -g

3. Install typescript and gulp globally so we can use them anywhere
		Run the following commands 
		- npm install typescript gulp -g

4. Install ASP.Net 5 
	follow the instructions on http://docs.asp.net/en/latest/getting-started/installing-on-windows.html
	(includes installing ASP.Net beta, dnvm setup & dnvm upgrade)

5. Install the following visx for Visual Studio (optional) to see karma test runner results in the test explorer
    looks up where the karma .spec files exists and then shows them in the test output in visual studio
- https://visualstudiogallery.msdn.microsoft.com/4cd59e4a-82e8-4b4e-8302-d102fc81b090


### Getting and running the code
1. Clone the project
2. Run the command `dnu restore` for each project to restore the .Net dependencies TODO: check what folder it is best to run this from
3. Build the solution
3. Run `npm install` from the command line for the SSW.MusicStore.Web project
3. Run `npm start` from the command line for the SSW.MusicStore.Web project


### Testing
Set up your machine
1. Run `npm test` from the command line from the command for the SSW.MusicStore.Web project
2. Run `npm run build.test.watch`from the command for the SSW.MusicStore.Web project
3. Run `npm run karma.start` from the command for the SSW.MusicStore.Web project
