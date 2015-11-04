# SSW Angular Music Store
### Set up your visual studio 2015
1. Get Visual Studio 2015
2. Install nodejs
3. run the following commands
	- npm install typescript gulp -g
4. Install these 2 packages http://docs.asp.net/en/latest/getting-started/installing-on-windows.html
5. Install the following visx for Visual Studio (optional) to see karma test runner results in the test explorer
- https://visualstudiogallery.msdn.microsoft.com/4cd59e4a-82e8-4b4e-8302-d102fc81b090

### Getting and running the code
1. Clone the project
2. Run the command `dnu restore` for each project
3. Build the solution
3. Run `npm install` from the command line for the SSW.MusicStore.Web project
3. Run `npm start` from the command line for the SSW.MusicStore.Web project


### Testing
Set up your machine
1. Run `npm test` from the command line from the command for the SSW.MusicStore.Web project
2. Run `npm run build.test.watch`from the command for the SSW.MusicStore.Web project
3. Run `npm run karma.start` from the command for the SSW.MusicStore.Web project
