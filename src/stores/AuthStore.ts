// AuthStore.ts
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as { id: number; email: string } | null,
    token: null as string | null,
  }),
  actions: {
    setUser(user: { id: number; email: string }, token: string) {
      this.user = user;
      this.token = token;
    },
    logout() {
      this.user = null;
      this.token = null;
    },
  },
});
