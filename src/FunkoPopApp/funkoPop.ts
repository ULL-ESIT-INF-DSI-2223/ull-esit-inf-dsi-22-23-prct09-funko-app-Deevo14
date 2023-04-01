export enum FunkoPopType {
  "Pop!",
  "Pop! Rides",
  "Vynil Soda",
  "Vynil Gold",
  "Pop! Rocks",
}

export enum FunkoPopGenre {
  "Animación",
  "Películas y TV",
  "Videojuegos",
  "Deportes",
  "Música",
  "Ánime",
  "Comics",
}

export class FunkoPop {
  private id_: number;
  private name_: string;
  private description_: string;
  private type_: FunkoPopType;
  private genre_: FunkoPopGenre;
  private franchise_: string;
  private num_: number;
  private exclusive_: boolean;
  private specialFeatures_: string;
  private marketValue_: number;

  constructor(
    id: number,
    name: string,
    description: string,
    type: FunkoPopType,
    genre: FunkoPopGenre,
    franchise: string,
    num: number,
    exclusive: boolean,
    specialFeatures: string,
    marketValue: number
  ) {
    this.id_ = id;
    this.name_ = name;
    this.description_ = description;
    this.type_ = type;
    this.genre_ = genre;
    this.franchise_ = franchise;
    this.num_ = num;
    this.exclusive_ = exclusive;
    this.specialFeatures_ = specialFeatures;
    this.marketValue_ = marketValue;
  }

  get ID(): number {
    return this.id_;
  }

  set ID(id: number) {
    this.id_ = id;
  }

  get Name(): string {
    return this.name_;
  }

  set Name(name: string) {
    this.name_ = name;
  }

  get Description(): string {
    return this.description_;
  }

  set Description(description: string) {
    this.description_ = description;
  }

  get Type(): FunkoPopType {
    return this.type_;
  }

  set Type(type: FunkoPopType) {
    this.type_ = type;
  }

  get Genre(): FunkoPopGenre {
    return this.genre_;
  }

  set Genre(genre: FunkoPopGenre) {
    this.genre_ = genre;
  }

  get Franchise(): string {
    return this.franchise_;
  }

  set Franchise(franchise: string) {
    this.franchise_ = franchise;
  }

  get Num(): number {
    return this.num_;
  }

  set Num(num: number) {
    this.num_ = num;
  }

  get Exclusive(): boolean {
    return this.exclusive_;
  }

  set Exclusive(exclusive: boolean) {
    this.exclusive_ = exclusive;
  }

  get SpecialFeatures(): string {
    return this.specialFeatures_;
  }

  set SpecialFeatures(specialFeatures: string) {
    this.specialFeatures_ = specialFeatures;
  }

  get MarketValue(): number {
    return this.marketValue_;
  }

  set MarketValue(marketValue: number) {
    this.marketValue_ = marketValue;
  }
}
