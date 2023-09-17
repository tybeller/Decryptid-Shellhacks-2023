import { writable, derived } from "svelte/store";

export const isAuthenticated = writable(false);
export const user = writable({});
export const popupOpen = writable(false);
export const error = writable();

export const badges = writable([]);

export const user_badges = derived([badges , user], ([$badges, $user]) => {
  let logged_in_user_badges = [];

  if ($user && $user.email) {
    logged_in_user_badges = $badges.filter((task) => task.user === $user.email);
  }

  return logged_in_user_badges;
});