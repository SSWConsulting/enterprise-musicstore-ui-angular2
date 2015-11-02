using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SSW.MusicStore.Data.Entities
{
    public class Album
    {
        [ScaffoldColumn(false)]
        public int AlbumId { get; set; }

        public int GenreId { get; set; }

        public int ArtistId { get; set; }

        [Required]
        [StringLength(160, MinimumLength = 2)]
        public string Title { get; set; }

        [Required]
        [Range(0.01, 100.00)]
        [DataType(DataType.Currency)]
        public decimal Price { get; set; }

		[StringLength(1024)]
        public string AlbumArtUrl { get; set; }

        public virtual Genre Genre { get; set; }
        public virtual Artist Artist { get; set; }
	    public virtual List<OrderDetail> OrderDetails { get; set; } = new List<OrderDetail>();

		[Required]
	    public DateTime Created { get; set; } = DateTime.UtcNow;

		/// <summary>
		/// TODO: Temporary hack to populate the orderdetails until EF does this automatically. 
		/// </summary>
		public Album()
        {
        }
    }
}