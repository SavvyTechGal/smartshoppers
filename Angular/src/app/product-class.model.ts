export class ProductClass {
    public title: string;
    public price: number;
    public thumbnail: string;
    public source: string;
    public rating: number;
    public link: string;
    public extensions: string[];

    constructor(title: string, price: number, thumbnail: string,
        source: string, rating: number, link: string, extensions: string[]) {
        this.title = title;
        this.price = price;
        this.thumbnail = thumbnail;
        this.source = source;
        this.rating = rating;
        this.link = link;
        this.extensions = extensions;
    }


}

