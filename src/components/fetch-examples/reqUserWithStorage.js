import { useEffect, useState } from "react";
import {
  loadJSON_sessionStorage,
  saveJSON_sessionStorage,
} from "./webStorageApi";

export const GitHubUser = ({ login }) => {
  // первый рендеринг если data в storage нет - null, return null
  // далее запуск useEffect по зависимости
  // вызов setData, что запускает второй рендер (useState)
  console.log("GitHubUser render");
  const [data, setData] = useState(loadJSON_sessionStorage(`user:${login}`));
  //loadJSON_sessionStorage синхронный код ждем выполнения
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  console.log(data);

  useEffect(() => {
    console.log("useEffect data");

    if (!data) return;
    if (data.login === login) return;
    const { name, avatar_url, location } = data;

    saveJSON_sessionStorage(`user:${login}`, {
      name,
      login,
      avatar_url,
      location,
    });
    console.log("useEffect data - saveJSON_localStorage");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    console.log("useEffect login");

    if (!login) return;
    if (data && data.login === login) return;
    // ! setLoading изменит useState что приведет к рендерингу компонента
    // ! вопос рендеринг прервет выполнение useEffect или будет выполнен позже
    setLoading(true);

    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      // ! тотже вопос рендеринга
      .catch(setError);
    console.log("useEffect login - loading success");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [login]);

  if (loading) return <h1>loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return null;

  if (data)
    return (
      <div className="githubUser">
        <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
        <div>
          <h1>{data.login}</h1>
          {data.name && <p>{data.name}</p>}
          {data.location && <p>{data.location}</p>}
        </div>
      </div>
    );
};

// Метод JSON.stringify принимает три аргумента:
// - данные JSON для преобразования в строку;
// - функцию-заменитель, которую можно использовать для замены свойств объекта JSON;
// - количество пробелов, используемых при форматировании данных.
// - Здесь заменитель — null, потому что мы не хотим ничего заменять.
// - Число 2 — количество пробелов, которые будут использоваться при форматировании кода.
// - То есть отступ строки JSON будет составлять два пробела.
// - Использование элемента pre учитывает пробелы, поэтому в конечном итоге отображается читаемый JSON.
