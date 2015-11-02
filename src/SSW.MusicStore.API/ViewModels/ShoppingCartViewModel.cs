using System.Collections.Generic;
using SSW.MusicStore.API.Models;

namespace SSW.MusicStore.API.ViewModels
{
    public class ShoppingCartViewModel
    {
        public List<CartItem> CartItems { get; set; }
        public decimal CartTotal { get; set; }
    }
}
