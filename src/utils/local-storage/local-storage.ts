class BaseLocalStorage {
  private readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  set(value: string): void {
    localStorage.setItem(this.name, value);
  }

  get(): string | null {
    return localStorage.getItem(this.name);
  }

  remove(): void {
    localStorage.removeItem(this.name);
  }
}

export const accessTokenLocalStorage = new BaseLocalStorage('accessToken');
export const refreshTokenLocalStorage = new BaseLocalStorage('refreshToken');
export const recoverPasswordActiveLocalStorage = new BaseLocalStorage(
  'recoverPasswordActive',
);
