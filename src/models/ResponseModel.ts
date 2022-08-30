export default class ResponseModel {
  body: any;
  contentType: string = "application/json";
  type: string = "json";
  callBack: Function;

  public constructor(init?: Partial<ResponseModel>) {
    Object.assign(this, init);
  }
}
