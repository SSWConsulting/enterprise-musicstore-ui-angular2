# SSW Angular Music Store
### Introduction Video

https://www.youtube.com/watch?v=OzqnTM4xXPs&feature=youtu.be 


1. Install nodejs 
      source: https://nodejs.org/en/. use version 4 or higher
	  reason: adds node globally so you can work with npm or tools like bower and gulp outside of Visual Studio

2. Install typescript and gulp globally so we can use them anywhere
		Run the following commands 
		- npm install typescript gulp -g
        
3. Install webpack globally
		Run the following commands 
		- npm install webpack -g

3. Install wallabyjs for your ide
		Go to http://wallabyjs.com/ for instructions

4. Install ASP.Net 5 
	follow the instructions on http://docs.asp.net/en/latest/getting-started/installing-on-windows.html
	(includes installing ASP.Net beta, dnvm setup & dnvm upgrade)

### Getting and running the code
1. Clone the project
2. Run the command `dnu restore`
3. Run `npm install` from the command line for the SSW.MusicStore.Web project
4. Run `npm run build` will create a dist folder
5. Run `dnx web`
6. In your browser, navigate to localhost:5000/ to view the site


### Contributing 
We would love you to contribute to the solution. 

Please feel free to improve the project and issue a pull request.