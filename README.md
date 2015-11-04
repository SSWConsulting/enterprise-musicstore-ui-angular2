# angularmusicstore

The MVC Music Store - but built on angular

**Note:** Angular 2.0 is not production ready yet! This seed project is perfect for playing around with the latest versions but do not start new projects with it since a lot of new changes are going to be introduced until the framework is officially released.

# How to start

**Note** that this seed project requires node v4.x.x or higher and npm 3.x.x.

# Set up Visual Studio 2015
```bash
1. Get Visual Studio 2015
2. Install nodejs
3. Run the following commands - npm install typescript gulp -g
4. Install these 2 packages http://docs.asp.net/en/latest/getting-started/installing-on-windows.html
5. Install the following visx for Visual Studio (optional) to see karma test runner results in the test explorer
- https://visualstudiogallery.msdn.microsoft.com/4cd59e4a-82e8-4b4e-8302-d102fc81b090

```

```bash
git clone https://github.com/SSWConsulting/angularmusicstore
cd angularmusicstore
run the command `dnu restore` for each project
build the solution
npm install   # or `npm run reinstall` if you get an error from the command line for the SSW.MusicStore.Web project
npm start     # start with --env dev from the command line for the SSW.MusicStore.Web project
```

# Running test

```bash
npm test

# Debug - In two different shell windows
npm run build.test.watch      # 1st window
npm run karma.start           # 2nd window
```