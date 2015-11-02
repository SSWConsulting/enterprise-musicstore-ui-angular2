using FluentAssertions;
using SSW.MusicStore.API.Models;
using SSW.MusicStore.API.Services.Query;
using SSW.MusicStore.API.Services;
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
		IWant = "to be able to retrieve albums by genre, popularity and id")]
	public class AlbumQueryServiceTestRunner
	{
		[Fact]
		public void Getting_All_Albums_By_Valid_Genre()
		{
			var dbContextFactory = DbContextHelper.CreateDbContextFactory();

			var albumQueryService = new API.Services.Query.AlbumQueryService(dbContextFactory);

			this.PopulateAlbums(dbContextFactory);

			var albums = albumQueryService.GetByGenre("Pop").Result;

			albums.Should().NotBeNull();
			albums.Count().Should().Be(2);
		}

		[Fact]
		public void Getting_All_Albums_By_Invalid_Genre()
		{
			var dbContextFactory = DbContextHelper.CreateDbContextFactory();

			var albumQueryService = new API.Services.Query.AlbumQueryService(dbContextFactory);

			this.PopulateAlbums(dbContextFactory);
			var genres = albumQueryService.GetByGenre("Genre that doesn't exist").Result;

			genres.Should().NotBeNull();
			genres.Count().Should().Be(0);
		}

		[Fact]
		public void Getting_All_Albums_When_DbContext_Is_Null_Genres()
		{
			var dbContextFactory = DbContextHelper.CreateDbContextFactory();

			var albumQueryService = new API.Services.Query.AlbumQueryService(null);
			Assert.Throws<AggregateException>(() => albumQueryService.GetByGenre("Pop").Result);
		}

		private void PopulateAlbums(DbContextFactory dbContextFactory)
		{
			this.PopulateGenres(dbContextFactory);
            using (var dbContext = dbContextFactory.Create())
			{
				var pop = dbContext.Genres.FirstOrDefault(g => g.Name == "Pop");
				var rock = dbContext.Genres.FirstOrDefault(g => g.Name == "Rock");
				var rap = dbContext.Genres.FirstOrDefault(g => g.Name == "Rap");

				dbContext.Albums.Add(this.CreateTestAlbum(pop));
				dbContext.Albums.Add(this.CreateTestAlbum(pop));
				dbContext.Albums.Add(this.CreateTestAlbum(rock));
				dbContext.Albums.Add(this.CreateTestAlbum(rock));
				dbContext.Albums.Add(this.CreateTestAlbum(rock));
				dbContext.Albums.Add(this.CreateTestAlbum(rock));
				dbContext.Albums.Add(this.CreateTestAlbum(rock));
				dbContext.Albums.Add(this.CreateTestAlbum(rap));
				dbContext.Albums.Add(this.CreateTestAlbum(rap));
				dbContext.SaveChanges();
			}
		}

		private void PopulateGenres(DbContextFactory dbContextFactory)
		{
			using (var dbContext = dbContextFactory.Create())
			{
				dbContext.Genres.Add(new Genre() { Name = "Pop", Description = "Test 1" });
				dbContext.Genres.Add(new Genre() { Name = "Rock", Description = "Test 2" });
				dbContext.Genres.Add(new Genre() { Name = "Rap", Description = "Test 3" });
				dbContext.SaveChanges();
			}
		}

		private Album CreateTestAlbum(Genre genre, string name = null)
		{
			var autofixture = new Ploeh.AutoFixture.Fixture();
			var album = 
				new Album
				{
					Price = 12,
					Title = name ?? Guid.NewGuid().ToString(),
					Genre = genre,
					Artist = 
						new Artist
						{
							Name = Guid.NewGuid().ToString()
						},
					Created = DateTime.UtcNow
				};
			return album;
		}
	}
}
