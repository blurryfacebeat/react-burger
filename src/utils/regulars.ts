export const EMAIL_REGULAR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const isCorrectedEmail = (email: string) => {
  if (!EMAIL_REGULAR.test(email)) {
    alert('Введите корректный формат email');

    return false;
  }

  return true;
};
