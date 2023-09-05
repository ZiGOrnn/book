interface User {
  id: string;
  username: string;
  password: string;
}

class CacheManager {
  users: User[] = [
    {
      id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
      username: "example@gmail.com",
      password: "123456789",
    },
  ];
}

export const cacheManager = new CacheManager();
