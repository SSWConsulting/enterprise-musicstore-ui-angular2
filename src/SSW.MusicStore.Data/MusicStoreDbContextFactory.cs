using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.Entity;
using SSW.MusicStore.Models;

namespace SSW.MusicStore.Data
{
    public class MusicStoreDbContextFactory : IDbContextFactory<MusicStoreContext>
    {
	    public MusicStoreContext Create()
	    {
		    return new MusicStoreContext();
	    }
    }
}
