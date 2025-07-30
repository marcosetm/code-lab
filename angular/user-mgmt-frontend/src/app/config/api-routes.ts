import { environment } from "../../environments/environment";

const base = environment.apiBaseUrl;

export const API_ROUTES = {
    ACCOUNT: `${base}/api/account`,
    LOGIN: `${base}/api/account/login`
}