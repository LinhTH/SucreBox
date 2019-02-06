import { LoginInfo } from './login-info.model';
import * as _ from 'lodash';

export class LoginInfoBuilder {

    private title: string;
    private emailOrUsername: string;
    private password: string;
    private website: string;
    private createdAt: Date;
    private modifiedAt: Date;

    withTitle(title: string): LoginInfoBuilder {
        this.title = title;
        return this;
    }

    withEmailOrUsername(emailOrUsername: string): LoginInfoBuilder {
        this.emailOrUsername = emailOrUsername;
        return this;
    }

    withPassword(password: string): LoginInfoBuilder {
        this.password = password;
        return this;
    }

    withWebsite(website: string): LoginInfoBuilder {
        this.website = website;
        return this;
    }

    withCreatedAt(createdAt: Date): LoginInfoBuilder {
        this.createdAt = createdAt;
        return this;
    }

    withModifiedAt(modifiedAt: Date): LoginInfoBuilder {
        this.modifiedAt = modifiedAt;
        return this;
    }

    build(): LoginInfo {
        if (_.isEmpty(this.title)) {
            throw new Error('The title is mush-have');
        }

        if (_.isEmpty(this.emailOrUsername)) {
            throw new Error('The emailOrUsername is mush-have');
        }

        if (_.isEmpty(this.password)) {
            throw new Error('The password is mush-have');
        }

        if (_.isNull(this.createdAt)) {
            this.createdAt = new Date();
        }

        if (_.isNull(this.modifiedAt)) {
            this.modifiedAt = new Date();
        }

        return new LoginInfo(
            this.title,
            this.emailOrUsername,
            this.password,
            this.website,
            this.createdAt,
            this.modifiedAt
        );
    }
}
