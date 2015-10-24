using System.Collections.Generic;
using SSW.MusicStore.Models;

namespace SSW.MusicStore.ViewModels
{
    public class ShoppingCartViewModel
    {
        public List<CartItem> CartItems { get; set; }
        public decimal CartTotal { get; set; }
    }
}
