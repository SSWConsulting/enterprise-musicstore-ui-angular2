using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNet.StaticFiles;
using Microsoft.Extensions.Logging;

using SSW.MusicStore.Web.helpers;

namespace SSW.MusicStore.Web
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            app.UseIISPlatformHandler();

            app.UseStaticFiles();
            app.UseAngularServer("dist/app", "/index.html", env, loggerFactory);
        }
    }
}
