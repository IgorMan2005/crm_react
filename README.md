# CRM React.JS

<https://github.com/IgorMan2005/crm_react>

```
git remote add origin git@github.com:IgorMan2005/crm_react.git
git branch -M main
git push -u origin main
```

GitHub Pages:
<https://github.com/IgorMan2005/crm_react_pages>
CRM React.JS (GitHub Pages)

```
git remote add pages git@github.com:IgorMan2005/crm_react_pages.git
git branch -M main
git push -u pages main
```

Ready:
<https://igorman2005.github.io/crm_react_pages/>

### JSON Server for CRM React.JS

GitHub:
<https://github.com/IgorMan2005/json-server-crm>

Glitch:
<https://glitch.com/>
<https://glitch.com/dashboard>

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

<https://github.com/IgorMan2005/crm_react_pages>

---

##### Публикация проекта. Glitch.com и GitHub pages

<https://school.webcademy.ru/pl/teach/control/lesson/view?id=247304495&editMode=0>

** uploading an existing file **
<https://github.com/IgorMan2005/crm_react_pages/upload>

Публикация на GitHub и GitHub Pages
<https://github.com/IgorMan2005/crm_react_pages/settings/pages>

Branch > main > Save

<https://igorman2005.github.io/crm_react_pages/>

---

##### Минифицированный код - как с ним работать

1. Просто сохранить открытый файл Visual Studio Code

2. С помощью Prettier в Visual Studio Code
   <https://timeweb.cloud/tutorials/code-editor/formatirovanie-koda-s-pomoshchyu-prettier-v-visual-studio-code>

- Ctrl + Shift + P - открыть палитру команд
- Найти и выполнить команду Format Document With

Prettier в крупных проектах: тратим 20 минут на настройку, забываем о форматировании навсегда
<https://habr.com/ru/companies/skyeng/articles/484992/>

3. В PHPStorm можно минифицированный код привести в нормальный (Code > Reformat Code - Ctrl + Alt + L)

---

###### Язык разметки Markdown: шпаргалка по синтаксису с примерами

<https://skillbox.ru/media/code/yazyk-razmetki-markdown-shpargalka-po-sintaksisu-s-primerami/>
