export class Album {

    id: number;
    titile: string;
    price: number;
    albumArtUrl: string;
    Genres: Genre[];
    Artists: Artist[]
    OrderDetails: OrderDetail[]

}

export class Genre {
    id: number;
    name: string;
    descritpion: string;
    albums: string;
}

export class Artist {

}

export class OrderDetail {

}


