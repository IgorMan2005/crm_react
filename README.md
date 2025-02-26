# CRM React.JS

<https://github.com/IgorMan2005/crm_react>

 GitHub Pages:
<https://github.com/IgorMan2005/crm_react_pages>

### JSON Server for CRM React.JS

GitHub:
<https://github.com/IgorMan2005/json-server-crm>

Glitch:
<https://amplified-rich-spice.glitch.me/>
<https://amplified-rich-spice.glitch.me/students>

### Публикация проекта с react-router-dom на GitHub Pages

Публикация проекта с react-router-dom на GitHub Pages

#### Шаг 1

Вместо импорта BrowserRouter необходимо импортировать HashRouter.

Было:

```
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
```

Стало:

```
import { HashRouter as Router, Routes, Route } from "react-router-dom";
```

#### Шаг 2

Собрать build проекта

```
npm run build
```

Открыть файл build/index.html и поправить пути к .js и .css файлам чтобы они начинались с точка слэш "./" По умолчанию там просто слеш "/"

#### Шаг 3

Создать репозиторий на GitHub

Загрузить в него build сборку проекта

Включить GitHub Pages и подождать пару минут пока он заработает
