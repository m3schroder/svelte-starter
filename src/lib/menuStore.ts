import { writable } from "svelte/store";

export const currentNav = writable<undefined | string>(undefined)

