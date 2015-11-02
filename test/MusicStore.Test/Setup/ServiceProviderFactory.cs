using Microsoft.Data.Entity;
using Microsoft.Framework.DependencyInjection;
using SSW.MusicStore.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SSW.MusicStore.Test.Setup
{
    public static class ServiceProviderFactory
    {
		public static IServiceProvider Create()
		{
			var services = new ServiceCollection();

			services.AddEntityFramework()
					  .AddInMemoryDatabase()
					  .AddDbContext<MusicStoreContext>(options => options.UseInMemoryDatabase());

			var serviceProvider = services.BuildServiceProvider();
			return serviceProvider;
        }
    }
}
