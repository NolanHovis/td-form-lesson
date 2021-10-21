export class PersonModel {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public address: {
      street: string;
      city: string;
      state: string;
      zip: string;
    },
    public phone?: string
  ) {}
}
