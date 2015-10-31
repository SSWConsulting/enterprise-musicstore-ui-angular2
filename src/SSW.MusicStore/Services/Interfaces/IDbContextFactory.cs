using Microsoft.Data.Entity;
using SSW.MusicStore.Models;

namespace SSW.MusicStore.Services
{
	public interface IDbContextFactory<T> where T: DbContext
	{
		/// <summary>
		/// Creates new dbcontext
		/// </summary>
		/// <returns>New instance of db context</returns>
		T Create();
	}
}