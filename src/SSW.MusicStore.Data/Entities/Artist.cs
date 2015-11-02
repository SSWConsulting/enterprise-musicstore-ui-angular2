using System.ComponentModel.DataAnnotations;

namespace SSW.MusicStore.Data.Entities
{
    public class Artist
    {
        public int ArtistId { get; set; }

        [Required]
        public string Name { get; set; }
    }
}