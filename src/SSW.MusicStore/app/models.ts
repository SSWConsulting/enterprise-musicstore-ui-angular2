export class Album {
    albumId: number;
    title: string;
    price: number;
    albumArtUrl: string;
    genres: Genre[];
    artist: Artist[];
    orderDetails: OrderDetail[];
    created: Date;
}

export class User {
   email: string = '';
   picture: string = ''
   nickname: string = '';
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


