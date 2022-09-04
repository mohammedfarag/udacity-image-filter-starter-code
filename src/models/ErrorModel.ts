export default class ErrorModel {
  message: string;
  code: number;
  trace: string;

  public constructor(init?: Partial<ErrorModel>) {
    Object.assign(this, init);
  }
}
