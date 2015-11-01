using FluentAssertions;
using SSW.MusicStore.API.Models;
using SSW.MusicStore.Test.Setup;
using SSW.MusicStore.Test.Tests.GenreQueryService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestStack.BDDfy;
using Xunit;

namespace SSW.MusicStore.Test.TestRunners
{
	[Story(
		AsA = "music store user",
		IWant = "to be able to get a list of all genres",
		SoThat = "list of all available genres is successfully returned")]
	public class GenreQueryServiceTestRunner
	{
		[Fact]
		public void Getting_All_Genres_Successfully()
		{
			var dbContextFactory = DbContextHelper.CreateDbContextFactory();

			var genreQueryService = new API.Services.Query.GenreQueryService(dbContextFactory);

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

			var genres = genreQueryService.GetAllGenres().Result;

			genres.Should().NotBeNull();
			genres.Count().Should().Be(6);
		}

		[Fact]
		public void Getting_All_Genres_When_There_Are_No_Genres()
		{
			var dbContextFactory = DbContextHelper.CreateDbContextFactory();

			var genreQueryService = new API.Services.Query.GenreQueryService(dbContextFactory);
			var genres = genreQueryService.GetAllGenres().Result;

			genres.Should().NotBeNull();
			genres.Count().Should().Be(0);
		}

		[Fact]
		public void Getting_All_Genres_When_DbContext_Is_Null_Genres()
		{
			var dbContextFactory = DbContextHelper.CreateDbContextFactory();

			var genreQueryService = new API.Services.Query.GenreQueryService(null);
			Assert.Throws<AggregateException>(() => genreQueryService.GetAllGenres().Result);
		}
	}
}
