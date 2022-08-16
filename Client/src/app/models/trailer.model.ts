export class Trailer {
  constructor(
    _id = '',
    name = '',
    director = '',
    actors = '',
    year = '',
    link = '',
    image = '',
    description = '',
    category = ''
  ) {
    this._id = _id;
    this.name = name;
    this.director = director;
    this.actors = actors;
    this.year = year;
    this.link = link;
    this.image = image;
    this.description = description;
    this.category = category;
  }

  _id?: string;
  name: string;
  director: string;
  actors: string;
  year: string;
  link: string;
  image: string;
  description: string;
  category: string;
}

export interface Trailer {
  _id?: string;
  name: string;
  director: string;
  actors: string;
  year: string;
  link: string;
  image: string;
  description: string;
  category: string;
}
