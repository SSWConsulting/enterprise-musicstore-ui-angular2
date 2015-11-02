using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Framework.DependencyInjection;
using SSW.MusicStore.API.Models;

namespace SSW.MusicStore.API.Services
{
    public class DbContextFactory : IDbContextFactory<MusicStoreContext>
    {
	    private readonly IServiceProvider _serviceProvider;

	    public DbContextFactory(IServiceProvider serviceProvider)
	    {
		    _serviceProvider = serviceProvider;
	    }

	    public MusicStoreContext Create()
	    {
		    var serviceScope = _serviceProvider.GetRequiredService<IServiceScopeFactory>().CreateScope();
			{
				var db = serviceScope.ServiceProvider.GetService<MusicStoreContext>();
				return db;
			}
		}
    }
}
