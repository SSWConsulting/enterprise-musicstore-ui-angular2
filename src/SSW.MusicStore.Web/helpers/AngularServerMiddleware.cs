using System;
using System.Threading.Tasks;

using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Http;
using Microsoft.AspNet.StaticFiles;
using Microsoft.Extensions.Logging;

namespace SSW.MusicStore.Web.helpers
{
    public class AngularServerMiddleware
   {
       private readonly AngularServerOptions options;
       private readonly RequestDelegate next;
       private readonly StaticFileMiddleware innerMiddleware;

        public AngularServerMiddleware(
            RequestDelegate next,
            AngularServerOptions options,
            IHostingEnvironment env,
            ILoggerFactory logger)
        {
            this.next = next;
            this.options = options;

            this.innerMiddleware = new StaticFileMiddleware(
                next,
                env,
                options.FileServerOptions.StaticFileOptions,
                logger);
        }

        public async Task Invoke(HttpContext context)
       {
           // try to resolve the request with default static file middleware
           await this.innerMiddleware.Invoke(context);
           Console.WriteLine(context.Request.Path + ": " + context.Response.StatusCode);
           // route to root path if the status code is 404
           // and need support angular html5mode
           if (context.Response.StatusCode == 404 && this.options.Html5Mode)
           {
               context.Request.Path = this.options.EntryPath;
               await this.innerMiddleware.Invoke(context);
               Console.WriteLine(">> " + context.Request.Path + ": " + context.Response.StatusCode);
           }
       }
   }
}
