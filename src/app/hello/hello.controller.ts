/// <reference path="../_all.ts" />

module app.hello {
  export class HelloController {
    public electronVersion: string;
    public ioJsVersion: string;
    public user: IUser;

    constructor() {
      this.electronVersion = process.versions['electron'];
      this.ioJsVersion = process.version;
    }
  }
}
