import { readable } from 'svelte/store';
//                               This line is for production url, if this is not defined, it will fallback to the local development url.
export const BASE_URL = readable(import.meta.env.VITE_BASE_URL || "http://localhost:8080");
//                                                                This is the dev url.
