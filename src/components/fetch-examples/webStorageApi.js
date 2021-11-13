// сохранение данных локально
//
// window.sessionStorage
// сохраняет данные только для сеанса пользователя
// при закрытии вкладок или перезапуске браузера эти данные удалятся
//
// window.localStorage
// будет хранить данные до тех пор, пока вы их не удалите
//
// Данные JSON хранятся в хранилище браузера в виде строки.
//
//
export const loadJSON_sessionStorage = (key) =>
  key && JSON.parse(sessionStorage.getItem(key));
//
export const saveJSON_sessionStorage = (key, data) =>
  sessionStorage.setItem(key, JSON.stringify(data));
//
export const loadJSON_localStorage = (key) =>
  key && JSON.parse(localStorage.getItem(key));
// если елемента по ключу нет возвращает null
//
export const saveJSON_localStorage = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));
//
//
//
//   Загрузка данных из веб-хранилища, сохранение данных в веб-хранилище,
// преобразование данных в строки и анализ строк JSON — все это синхронные задачи.
// Функции loadJSON и saveJSON тоже синхронные.
// Будьте осторожны — слишком частый вызов этих функций со слишком большим объемом данных может привести к проблемам с производительностью.
// Поэтому рекомендуется ограничивать или блокировать эти функции.
