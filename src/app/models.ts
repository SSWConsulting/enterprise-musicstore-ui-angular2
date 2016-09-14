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