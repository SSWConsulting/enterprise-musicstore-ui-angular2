using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Microsoft.Framework.Caching.Memory;
using SSW.MusicStore.Models;
using Microsoft.Data.Entity;
using System.Linq;
using System.Net;
using Microsoft.AspNet.Authorization;
using Newtonsoft.Json;
using SSW.MusicStore.ViewModels;

namespace SSW.MusicStore.Controllers
{
	//[Authorize]
	[Route("api/")]
	public class StoreController : Controller
    {
        [FromServices]
        public MusicStoreContext DbContext { get; set; }

        [FromServices]
        public IMemoryCache Cache { get; set; }



		[HttpGet("genres")]
		public async Task<JsonResult> Get()
		{
			try
			{
				var results =  await DbContext.Genres.ToListAsync();


				if (results == null)
				{
					return Json(null);
				}

				return Json(results);
			}
			catch (Exception ex)
			{
				Response.StatusCode = (int)HttpStatusCode.BadRequest;
				return Json("Error occurred finding Genres");
			}
		}



		[HttpGet("genre/{genre}")]
		public JsonResult Get(string genre)
		{
			try
			{
				var results = DbContext.Albums
				.Where(g => g.Genre.Name == genre).ToList();

				if (results == null)
				{
					return Json(null);
				}

				return new JsonResult(results);

			}
			catch (Exception ex)
			{
				Response.StatusCode = (int)HttpStatusCode.BadRequest;
				return Json("Error occurred finding Genres");
			}
		}


		[HttpGet("album/{id}")]
		public async Task<JsonResult> Details(int id)
		{
			try
			{
				var album = await DbContext.Albums
							   .Where(a => a.AlbumId == id)
							   .Include(a => a.Artist)
							   //.Include(a => a.Genre)
							   .FirstOrDefaultAsync();

				if (album == null)
				{
					return Json(null);
				}

				return new JsonResult(album);
			}
			catch (Exception ex)
			{
				Response.StatusCode = (int)HttpStatusCode.BadRequest;
				return Json("Error occurred finding Album");
			}
		}


		[HttpGet("popular")]
		public async Task<JsonResult> Popular()
		{
			List<Album> albums;
			albums = await GetTopSellingAlbumsAsync(6);

			return Json(albums);
		}

		private async Task<List<Album>> GetTopSellingAlbumsAsync(int count)
		{
			// TODO [EF] We don't query related data as yet, so the OrderByDescending isn't doing anything
			return await DbContext.Albums
				.OrderByDescending(a => a.OrderDetails.Count())
				.Take(count)
				.ToListAsync();
		}
	}
}