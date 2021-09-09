import { get } from "./rest";

const { REACT_APP_API_URL: basepath, REACT_APP_GOOGLE_API_KEY: googleKey } =
  process.env;
export default class API {
  // getEvents
  static getEvents(key, organization_id, params) {
    const url = `${basepath}/organizations/${organization_id}/events`;
    return get({ url, params: JSON.parse(params) });
  }

  // getEventDetails
  static getEventDetails(key, organization_id, event_id) {
    const url = `${basepath}/organizations/${organization_id}/events/${event_id}`;
    return get({ url });
  }

  static getZipcode({ latitude, longitude }) {
    const params = { latlng: `${latitude},${longitude}`, key: googleKey };
    const url = `https://maps.googleapis.com/maps/api/geocode/json`;
    return get({ url, params });
  }
}
