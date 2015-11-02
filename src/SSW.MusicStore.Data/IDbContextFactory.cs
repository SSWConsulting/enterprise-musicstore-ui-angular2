using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.Entity;

namespace SSW.MusicStore.Data
{
    public interface IDbContextFactory<T> where T : DbContext
    {
	    T Create();
    }
}
