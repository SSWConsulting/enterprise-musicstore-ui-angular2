using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Microsoft.Framework.Caching.Memory;
using SSW.MusicStore.API.Models;
using Microsoft.Data.Entity;
using System.Linq;
using System.Net;
using Microsoft.AspNet.Authorization;
using Microsoft.Framework.Logging;
using Newtonsoft.Json;
using Serilog;
using SSW.MusicStore.API.Services.Query;
using SSW.MusicStore.API.ViewModels;
using ILogger = Microsoft.Framework.Logging.ILogger;

namespace SSW.MusicStore.API.Controllers
{
	//[Authorize]
	[Route("api/")]
	public class StoreController : Controller
	{
		private readonly IServiceProvider _serviceProvider;
		private readonly IGenreQueryService _genreQueryService;
		private readonly IAlbumQueryService _albumQueryService;
		private readonly ILogger _logger;

		public StoreController(
			ILoggerFactory loggerfactory, 
			IServiceProvider serviceProvider,
			IGenreQueryService genreQueryService,
			IAlbumQueryService albumQueryService)
		{
			_serviceProvider = serviceProvider;
			_genreQueryService = genreQueryService;
			_albumQueryService = albumQueryService;
			_logger = loggerfactory.CreateLogger(nameof(StoreController));
		}

		[HttpGet("genres")]
		public async Task<JsonResult> Get()
		{
			_logger.LogInformation("Get all genres");
			try
			{
				var results = await _genreQueryService.GetAllGenres();
				return Json(results ?? null);
			}
			catch (DbException ex)
			{
				Log.Logger.Error("Failed to get genres", ex);
				Response.StatusCode = (int)HttpStatusCode.BadRequest;
				return Json("Error occurred finding Genres" + ex.Message);
			}
		}



		[HttpGet("albums/{genre}")]
		public async Task<JsonResult> Get(string genre)
		{
			_logger.LogInformation("Get {genre}", genre);
			try
			{
				var results = await _albumQueryService.GetByGenre(genre);
				return new JsonResult(results);

			}
			catch (DbException ex)
			{
				Log.Logger.Error(ex, "Failed to get albums by genre {genre}", genre);
				Response.StatusCode = (int)HttpStatusCode.BadRequest;
				return Json("Error occurred finding Genres" + ex.Message);
			}
		}


		[HttpGet("albums/details/{id}")]
		public async Task<JsonResult> Details(int id)
		{
			_logger.LogInformation("Get album with id {id}", id);
			try
			{
				var album = await _albumQueryService.GetAlbumDetails(id);
				if (album != null) return new JsonResult(album);

				Log.Logger.Warning("User tried to retrieve album with {id} which doesn't exist", id);
				return Json(null);
			}
			catch (DbException ex)
			{
				Log.Logger.Error(ex, "Failed to get album with id {id}", id);
				Response.StatusCode = (int)HttpStatusCode.BadRequest;
				return Json("Error occurred finding Album" + ex.Message);
			}
		}

		[HttpGet("popular")]
		public async Task<JsonResult> Popular()
		{
			_logger.LogInformation("Get top 6 popular albums");
			var albums = await GetTopSellingAlbumsAsync(6);
			return Json(albums);
		}

		private async Task<IEnumerable<Album>> GetTopSellingAlbumsAsync(int count)
		{
			return await _albumQueryService.GetTopSellingAlbums(count);
		}
	}
}