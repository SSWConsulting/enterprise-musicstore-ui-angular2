# SSW Enterprise Angular Music Store
### Introduction Video
https://youtu.be/HryBwVOJhDs

**Note:** that this seed project requires your computer has the following depenencies installed globally at this version or higher (read below for details on how to install these):
- node v4.x.x and npm v2.14.7
- dnvm  v1.0.0-rc2
- typescript 1.7x 
- gulp v3x

We recommend you use the latest version of Visual Studio 2015 update 2 or Visual Studio Code

### In order to run the Music Store:
#### 1. Clone the project
```bash
git clone  https://github.com/SSWConsulting/enterprise-musicstore-ui-angular2
cd enterprise-musicstore-ui-angular2\src\SSW.MusicStore.Web
```
#### 2. Install the project's dependencies
This can also be done in Visual Studio VS2015 by building the project or pressing "ctrl + shft + B"
```bash
npm install
dnu restore
tsc
```
#### 3. Run the project
This can also be done in Visual Studio VS2015 by running the application or pressing "ctrl + F5" to start with out debugging
```bash
dnx web
```
Navigate to http://localhost:5000/dist/app to view the site in the browser.

# Building to wwwroot for production

#### 1. Run gulp task to execute production build
```bash
gulp build
```

### How to install global dependencies on your computer
1. Install node v4 or higher from here https://nodejs.org/en/
Node installs npm at the same time so no need to install it seperately
2. With npm installed you can now install typescript and gulp globally with the following command

```bash
npm install typescipt gulp -g
```

### Contributing 
We would love you to contribute to the solution. Please feel free to improve the project and issue a pull request.

    




    
    
