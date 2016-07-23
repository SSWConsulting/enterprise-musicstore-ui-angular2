using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace SSW.MusicStore.Web
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = new WebHostBuilder()
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseWebRoot("")
                .UseStartup<Startup>()
                .Build();

            host.Run();
        }
    }
}
