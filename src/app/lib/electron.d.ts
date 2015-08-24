declare var process: electron.IProcess;

declare module electron {
  interface IProcess {
    version: string,
    versions: { [key: string]: string; };
  }
}
