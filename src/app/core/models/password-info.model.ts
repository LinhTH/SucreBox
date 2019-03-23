export class PasswordInfo {
  constructor(
    public title: string,
    public emailOrUsername: string,
    public password: string,
    public website: string,
    public createdAt: Date, // Use it as primary key
    public modifiedAt: Date
  ) {}
}
