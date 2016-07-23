using Microsoft.AspNet.Builder;
using Microsoft.AspNet.FileProviders;
using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Http;
using Microsoft.AspNet.StaticFiles;
using Microsoft.Extensions.Logging;

namespace SSW.MusicStore.Web.helpers
{
    public static class AngularServerExtension
    {
        public static IApplicationBuilder UseAngularServer(
            this IApplicationBuilder builder,
            string rootPath,
            string entryPath,
            IHostingEnvironment env,
            ILoggerFactory loggerFactory)
        {
            var options = new AngularServerOptions
            {
                FileServerOptions =
                    new FileServerOptions
                    {
                        EnableDefaultFiles = true,
                        EnableDirectoryBrowsing = true,
                        FileProvider = new PhysicalFileProvider(System.IO.Path.Combine(env.WebRootPath, rootPath))
                    },
                EntryPath = new PathString(entryPath)
            };

            builder.UseDefaultFiles(options.FileServerOptions.DefaultFilesOptions);

            return builder.Use(next => new AngularServerMiddleware(next, options, env, loggerFactory).Invoke);
        }
    }
}
