import { get } from "./rest";

const { REACT_APP_API_URL: basepath } = process.env;

export default class API {
  // getEvents
  static getEvents(key, organization_id, params) {
    const url = `${basepath}/organizations/${organization_id}/events`;
    return get({ url, params: JSON.parse(params) });
  }
}
