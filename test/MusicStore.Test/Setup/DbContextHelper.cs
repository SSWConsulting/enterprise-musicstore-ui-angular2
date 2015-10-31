using SSW.MusicStore.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SSW.MusicStore.Test.Setup
{
    public static class DbContextHelper
    {
		public static DbContextFactory CreateDbContextFactory()
		{
			var dbContextFactory = new DbContextFactory(ServiceProviderFactory.Create());
			return dbContextFactory;
        }
    }
}
