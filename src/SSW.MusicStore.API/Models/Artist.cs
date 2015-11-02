using System.ComponentModel.DataAnnotations;

namespace SSW.MusicStore.API.Models
{
    public class Artist
    {
        public int ArtistId { get; set; }

        [Required]
        public string Name { get; set; }
    }
}