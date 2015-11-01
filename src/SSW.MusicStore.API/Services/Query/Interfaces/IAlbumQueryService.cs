using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SSW.MusicStore.API.Models;

namespace SSW.MusicStore.API.Services.Query
{
    public interface IAlbumQueryService
    {
		/// <summary>
		/// Gets list of albums by specified genre
		/// </summary>
		/// <param name="genre">Album genre, i.e. Pop, Rock etc.</param>
		/// <returns>List of albums</returns>
	    Task<IEnumerable<Album>> GetByGenre(string genre);

		/// <summary>
		/// Gets list of top selling albums by number of orders
		/// </summary>
		/// <param name="count">Number of records to retrieve</param>
		/// <returns>List of albums</returns>
		Task<IEnumerable<Album>> GetTopSellingAlbums(int count);

		/// <summary>
		/// Gets specific album by identifier
		/// </summary>
		/// <param name="id">Album unique id.</param>
		/// <returns>Album entity</returns>
		Task<Album> GetAlbumDetails(int id);
	}
}
