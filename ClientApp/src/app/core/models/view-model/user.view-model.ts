export class UserViewModel {
  public id!: number;
  public name!: string;
  public avatar?: string;

  constructor(data: Partial<UserViewModel>) {
    Object.assign(this, data);
  }
}
