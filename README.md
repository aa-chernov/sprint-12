# sprint-12
______________________
__version 0.0.2__

## Проектная работа №12: Серверная разработка на Node.js и введение в express.js

### Основные технологии используемые в этом проекте:

- JavaScript
- Node.js
- express.js

### Функционал проекта:

- команда npm run start запускает сервер на `https://localhost:3000`
- команда npm run dev запускает сервер на `https://localhost:3000` с хот релоудом
- адрес `https://localhost:3000` загружает фронтенд проекта Mesto
- в ответ на запрос GET `https://localhost:3000/users` сервер возвращает JSON-объект из файла users.json
- в ответ на запрос GET `https://localhost:3000/cards` сервер возвращает JSON-объект из файла cards.json
- если пользователь с запрошенным идентификатором есть, сервер возвращает JSON-объект пользователя с переданным после /users идентификатором, например, в ответ на запрос GET `https://localhost:3000/users/8340d0ec33270a25f2413b69`
- если пользователя с запрошенным идентификатором нет, сервер возвращает 404 статус ответа и JSON-объект: `{ "message": "Нет пользователя с таким id" }`
- при запросе на несуществующий адрес, например, в ответ на запрос GET `https://localhost:3000/donats` сервер возвращает 404 статус ответа и JSON-объект: `{ "message": "Запрашиваемый ресурс не найден" }`

### Версии:

v 0.0.1: Старт!

v 0.0.2: Внесенные изменения:
  - в cards.js и users.js больше нет парсинга JSON. Нет парсинга JSON-файлов, нет и ошибок при парсинге
  - в cards.js и users.js кардинально переработан роутинг
  - добавлен мидлвэр resource.js для обработки запроса на несуществующий адрес, app.js стал легче



