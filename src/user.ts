export class User {
  private name_: string;

  constructor(name: string) {
    this.name_ = name;
  }

  get Name(): string {
    return this.name_;
  }

  set Name(name: string) {
    this.name_ = name;
  }
}
