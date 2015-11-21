using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNet.StaticFiles;

namespace SSW.MusicStore.Web
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
        }

        public void Configure(IApplicationBuilder app)
        {
            app.UseIISPlatformHandler();

			app.UseStaticFiles();
			app.UseFileServer(new FileServerOptions()
			{
				EnableDefaultFiles = true,
				EnableDirectoryBrowsing = true
			});
		}
    }
}
