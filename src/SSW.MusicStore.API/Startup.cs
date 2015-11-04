using Microsoft.AspNet.Authentication.JwtBearer;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Diagnostics.Entity;
using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.StaticFiles;
using Microsoft.Data.Entity;
using Microsoft.Dnx.Runtime;
using Microsoft.Framework.Configuration;
using Microsoft.Framework.DependencyInjection;
using Microsoft.Framework.Logging;
using Newtonsoft.Json.Serialization;
using Serilog;
using Serilog.Core;
using SerilogWeb.Classic.Enrichers;
using SSW.MusicStore.API.Models;
using SSW.MusicStore.API.Services;
using SSW.MusicStore.API.Services.Query;
using System.Threading.Tasks;

namespace SSW.MusicStore.API
{
	public class Startup
	{
		public Startup(IHostingEnvironment env, IApplicationEnvironment appEnv)
		{
			var builder = new ConfigurationBuilder()
				.SetBasePath(appEnv.ApplicationBasePath)
				.AddJsonFile("appsettings.json")
				.AddJsonFile("privatesettings.json")
				.AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

			if (env.IsDevelopment())
			{
				builder.AddUserSecrets();
			}
			builder.AddEnvironmentVariables();
			Configuration = builder.Build();
		}

		public IConfigurationRoot Configuration { get; set; }

		public void ConfigureServices(IServiceCollection services)
		{
			services.AddEntityFramework()
				.AddSqlServer()
				.AddDbContext<MusicStoreContext>(options =>
					options.UseSqlServer(Configuration["Data:DefaultConnection:ConnectionString"]));

			// Add Identity services to the services container.
			//services.AddIdentity<ApplicationUser, IdentityRole>()
			//	.AddEntityFrameworkStores<MusicStoreContext>()
			//	.AddDefaultTokenProviders();

			services.AddCors();

			services.AddMvc()
		.AddJsonOptions(opt =>
	{
		opt.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
	});

			services.AddTransient<IEmailSender, AuthMessageSender>();
			services.AddTransient<IDbContextFactory<MusicStoreContext>, DbContextFactory>();
			services.AddTransient<IGenreQueryService, GenreQueryService>();
			services.AddTransient<IAlbumQueryService, AlbumQueryService>();
		}

		public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
		{
			var config =
				new LoggerConfiguration()
					.WriteTo.ColoredConsole()
					.WriteTo.RollingFile("C:\\Temp\\log-{Date}.txt")
					.WriteTo.Seq(serverUrl: Configuration["Seq:Url"], apiKey: Configuration["Seq:Key"])
					.Enrich.WithProperty("ApplicationName", "Music Store")
					.Enrich.With(new HttpRequestIdEnricher());
			Log.Logger = config.CreateLogger();

			loggerFactory.MinimumLevel = LogLevel.Information;
			loggerFactory.AddSerilog();
			loggerFactory.AddDebug();


			if (env.IsDevelopment())
			{
				//TODO allow certain ports so test pass on a build server
				app.UseCors(policy => policy
					.AllowAnyOrigin());
			}
			else
			{
				app.UseCors(policy => policy
							.WithOrigins(Configuration["Cors:Url"])
							.AllowAnyMethod()
							.AllowAnyHeader()
							.AllowCredentials());
			}

			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
				app.UseDatabaseErrorPage(DatabaseErrorPageOptions.ShowAll);
			}
			else
			{
				app.UseExceptionHandler("/Home/Error");
			}

			app.UseIISPlatformHandler();

			app.UseStaticFiles();

			// Add cookie-based authentication to the request pipeline.
			// app.UseIdentity();

			app.UseJwtBearerAuthentication(options =>
			{
				options.Audience = Configuration["Auth0:ClientId"];
				options.Authority = $"https://{Configuration["Auth0:Domain"]}";
				options.Events = new JwtBearerEvents
				{
					OnAuthenticationFailed = context =>
					{
						Log.Logger.Error("Authentication failed.", context.Exception);
						return Task.FromResult(0);
					},
					// OPTIONAL: you can read/modify the claims that are populated based on the JWT
					// Check issue status: https://github.com/aspnet/Security/issues/140
					/*OnValidatedToken = context =>
					{
						var claimsIdentity = context.AuthenticationTicket.Principal.Identity as ClaimsIdentity;
						// ensure name claim
						claimsIdentity.AddClaim(new Claim(ClaimTypes.Name, claimsIdentity.FindFirst("name").Value));
						return Task.FromResult(0);
					}*/
				};
			});

			app.UseStaticFiles();
			app.UseFileServer(new FileServerOptions()
			{
				EnableDefaultFiles = true,
				EnableDirectoryBrowsing = true
			});

			app.UseMvc(routes =>
			{
				routes.MapRoute(
					name: "default",
					template: "{controller=Home}/{action=Index}/{id?}");
			});

			SampleData.InitializeMusicStoreDatabaseAsync(app.ApplicationServices).Wait();

		}
	}
}
