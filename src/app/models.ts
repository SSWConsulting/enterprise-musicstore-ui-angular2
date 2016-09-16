export class Album {
    albumId: number;
    title: string;
    price: number;
    albumArtUrl: string;
    created: Date;
}

export class Genre {
    id: number;
    name: string;
    descritpion: string;
    albums: string;
}

export class CartItem {
    album: Album;
    count: number;
    cartId: number;
    dateCreated: Date;
    albumId: number;
}

export class Cart {
    cartItems: CartItem[];
    cartTotal: number;
}
