class Parent {
  constructor(public readonly name: string) {
    this.name = name;
  } 
}

export class Application extends Parent {
  constructor(public readonly name: string, private readonly app: string) {
    super(name);
  }
}