/**
 * An array of routes that are accessible without authentication
 * @type {string[]}
 */

export const publicRoutes: string[] = [
    "/",
    "/article",
    "/verify-email",
    "/api/uploadthing",
    "/post/*",
];

/**
 * An array of routes that are used for authentication.
 * @type {string[]}
 */
export const authRoutes: string[] = ["/login", "/register"];

/**
 * Routes that are used for api authentication.
 * @type {string}
 */
export const apiAuthPrefix: string = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT: string = "/profile";
export const LOGOUT_URL: string = "/logout";
