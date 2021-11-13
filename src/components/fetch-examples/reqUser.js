// Функция fetch возвращает промис. Мы делаем асинхронный запрос к определенному URL
//   fetch(`https://api.github.com/users/moonhighway`)
//     .then((response) => response.json())
//     .then(console.log)
//     .catch(console.error);

//   Другой способ работы с промисами — использовать async и await.
//   Поскольку fetch возвращает промис, мы можем ожидать запрос на выборку внутри функции async:

export const requestGithubUser = async (githubLogin) => {
  try {
    const response = await fetch(`https://api.github.com/users/${githubLogin}`);
    const userData = await response.json();
    console.log(userData);
  } catch (error) {
    console.error(error);
  }
};
