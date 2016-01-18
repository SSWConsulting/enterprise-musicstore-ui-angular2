using Microsoft.AspNet.Http;
using Microsoft.AspNet.StaticFiles;

namespace SSW.MusicStore.Web.helpers
{
    public class AngularServerOptions
    {
        public FileServerOptions FileServerOptions { get; set; }

        public PathString EntryPath { get; set; }

        public bool Html5Mode => this.EntryPath.HasValue;

        public AngularServerOptions()
        {
            this.FileServerOptions = new FileServerOptions();
            this.EntryPath = PathString.Empty;
        }
    }
}
