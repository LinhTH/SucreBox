import { PasswordInfo } from './password-info.model';
import * as _ from 'lodash';

export class PasswordInfoBuilder {
  private title: string;
  private emailOrUsername: string;
  private password: string;
  private website: string;
  private createdAt: Date;
  private modifiedAt: Date;

  withTitle(title: string): PasswordInfoBuilder {
    this.title = title;
    return this;
  }

  withEmailOrUsername(emailOrUsername: string): PasswordInfoBuilder {
    this.emailOrUsername = emailOrUsername;
    return this;
  }

  withPassword(password: string): PasswordInfoBuilder {
    this.password = password;
    return this;
  }

  withWebsite(website: string): PasswordInfoBuilder {
    this.website = website;
    return this;
  }

  withCreatedAt(createdAt: Date): PasswordInfoBuilder {
    this.createdAt = createdAt;
    return this;
  }

  withModifiedAt(modifiedAt: Date): PasswordInfoBuilder {
    this.modifiedAt = modifiedAt;
    return this;
  }

  build(): PasswordInfo {
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

    return new PasswordInfo(
      this.title,
      this.emailOrUsername,
      this.password,
      this.website,
      this.createdAt,
      this.modifiedAt
    );
  }
}
