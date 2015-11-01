using SSW.MusicStore.API.Models;
using SSW.MusicStore.API.Services.Query;
using System.Collections.Generic;
using System.Linq;
using TestStack.BDDfy;
using FluentAssertions;
using SSW.MusicStore.Test.Setup;

namespace SSW.MusicStore.Test.Tests.GenreQueryService
{
    public class GettingAllGenresSuccessfully
    {
		private IGenreQueryService genreQueryService;
		private IEnumerable<Genre> genres;

		[Given]
		public void GivenValidGenreService()
		{
			this.genreQueryService = new API.Services.Query.GenreQueryService(DbContextHelper.CreateDbContextFactory());
		}

		[AndGiven]
		public void AndSixEntriesInTheDatabase()
		{
			var dbContextFactory = DbContextHelper.CreateDbContextFactory();
			using (var dbContext = dbContextFactory.Create())
			{
				dbContext.Genres.Add(new Genre() { Name = "Test 1", Description = "Test 1" });
				dbContext.Genres.Add(new Genre() { Name = "Test 2", Description = "Test 2" });
				dbContext.Genres.Add(new Genre() { Name = "Test 3", Description = "Test 3" });
				dbContext.Genres.Add(new Genre() { Name = "Test 4", Description = "Test 4" });
				dbContext.Genres.Add(new Genre() { Name = "Test 5", Description = "Test 5" });
				dbContext.Genres.Add(new Genre() { Name = "Test 6", Description = "Test 6" });
				dbContext.SaveChanges();
			}
		}

		[When]
		public void WhenITryToGetAllGenres()
		{
			this.genres = this.genreQueryService.GetAllGenres().Result;
		}

		[Then]
		public void ThenSixGenresAreReturned()
		{
			genres.Should().NotBeNull();
			genres.Count().Should().Be(6);
		}
	}
}
