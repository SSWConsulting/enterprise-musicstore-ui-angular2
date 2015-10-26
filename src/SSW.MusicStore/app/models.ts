export class Album {

    albumId: number;
    titile: string;
    price: number;
    albumArtUrl: string;
    genres: Genre[];
    artist: Artist[];
    orderDetails: OrderDetail[];
    created: Date;


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


