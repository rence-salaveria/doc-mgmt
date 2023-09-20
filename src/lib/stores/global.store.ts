import { writable } from "svelte/store";

export const authStore = writable({
  currentUser: null,
});