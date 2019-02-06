export class LoginInfo {
    constructor(public title: string,
                public emailOrUsername: string,
                public password: string,
                public website: string,
                public createdAt: Date,
                public modifiedAt: Date) {}
}
