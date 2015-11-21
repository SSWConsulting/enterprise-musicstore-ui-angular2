export class Album {
    albumId: number;
    title: string;
    price: number;
    albumArtUrl: string;
    genres: Genre[];
    artist: Artist[];
    orderDetails: OrderDetails[];
    created: Date;
}

export class User {
   email: string;
   picture: string;
   nickname: string;
}


export class Genre {
    id: number;
    name: string;
    descritpion: string;
    albums: string;
}

export class Artist {
    artistId: number;
    name: string;
}

export class CartItem {
    ablum: Album;
    count: number;
    cartId: number;
    dateCreated: Date;
    albumId: number;
}

export class CartItems {
    cartItem: CartItem[];
    cartTotal: number;
}

export class Order {
    orderId: string;
    orderDate: Date;
    userName: string;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    postCode: string;
    country: string;
    phone: string;
    email: string;
    total: number;
    OrderDetals: OrderDetails[];
}

export class OrderDetails {
    id: number;
    orderId: number;
    albumId: number;
    quantity: number;
    unitPrice: number;
    album: Album;
    order: Order;
}


