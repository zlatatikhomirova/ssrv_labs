import React from 'react';

const labs = [
    {
      id: 1,
      title: 'Лабораторная работа 1',
      subtitle: "Задание:",
      content: {
        1: "Реализовать скрипт, который уведомит о полной загрузке страницы",
        2: 'Реализовать кнопку счетчик, которая будет увеличивать счетчик на'
          + ' "1" и вывести его значение на страницу (button onclick)',
        3: 'Реализовать кнопку счетчик, которая будет уменьшать счетчик '
          + 'на "1" реализовать с помощью listener click',
        4: "Реализовать форму аутентификации пользователя (<form>)",
        5: {
          1: "Реализовать скрипт очистки данных формы",
          2: "Реализовать скрипт отправки данных формы с помощью listener submit.",
          3: 'Без отправки на сервер провести валидацию введенных данных, '
            + 'если login=="admin" & pass=="admin" вывести сообщение об успехе, '
            + 'иначе сообщение о неуспехе',
          4: "Реализовать скрипт сохранения учетных данных и автоподстановку"
            + "оных с помощью localStorage."
        }
      }
    },
    {
      id: 2,
      title: 'Лабораторная работа 2',
      content: {
        1: 'Создать "Hello World" приложение на основе React.',
        2: "Для создания можно использовать create-react-app или vite",
        3: "Реализовать компонент кнопку, контейнер и использовать их на странице",
        4: "Реализовать шаблон страницы и разместить на нем компоненты навигации",
        5: "Разместить проект в репозиторий в github",
        6: "Прикрепить текстовый файл с сcылкой на проект"
      }
    },
    {
      id: 3,
      title: 'Лабораторная работа 3',
      content: {
        1: 'Продолжаем задание "Реализовать шаблон страницы и разместить на нем'
          + 'компоненты навигации" (Можно использовать готовые библиотеки Mui/Bootstrap и тд)',
        2: {
          1: 'Реализуем компоненты Header, Footer, Menu и Content',
          2: 'В меню выводим список лабораторных работ',
          3: 'В Content  выводим содержимое лабораторной работы'
        },
        3: "Разместить проект в репозиторий в github",
        4: "Прикрепить текстовый файл с сcылкой на проект",
      }
    },
    {
  
      id: 4,
      title: 'Лабораторная работа 4',
      content: {
        1: 'Реализовать изменение темы (день/ночь) используя Context',
        2: 'useState и useEffect - простые примеры',
        3: 'Внедрить в проект react-router',
        4: {
          1: 'В меню проекта реализовать ссылки переходы',
          2: 'В Content реализовать обработчик роутов'
        },
        5: "Внедрить в проект redux",
        6: {
          1: 'Реализовать несколько action и reducer, например increment/ decrement счетчика'
        }
      }
    },
    {
      id: 5,
      title: 'Лабораторная работа 5',
      content: {
        1: 'Реализовать форму регистрации или форму обратной связи с помощью React-hook-forms или Formik',
        2: 'Обработать submit через useCallback функции по примеру Лабораторной работы 1',
        3: 'Разместить лабораторную работу в репозиторий в github отдельным коммитом',
        4: 'Прикрепить текстовый файл с ссылкой на проект'
      }
    },
    {
      id: 6,
      title: 'Лабораторная работа 6',
      content: {
        1: 'Реализовать или использовать простой REST сервер',
        2: 'Реализовать несколько (GET, POST, PUT, DELETE) запросов на сервер используя промисы JS (fetch, axios). Можно использовать форму отправки из лабораторной работы №5.',
        3: 'Вывести результаты GET запроса от сервера на экран, например, все отзывы обратной связи. Для оптимизации использовать redux',
        4: 'Разместить лабораторную работу в репозиторий в github отдельным коммитом',
        5: 'Прикрепить текстовый файл с ссылкой на проект'
      }
    },
    {
      id: 7,
      title: 'Лабораторная работа 7',
      content: {
        1: 'Внедрить в проект UI Kit Mui/Bootstrap или им подобное, для возможности адаптива.',
        2: 'Реализовать Header (Главная, О себе) - отдельные страницы. Изменение темы на темную перенести в Header.',
        3: 'Реализовать Menu (Drawer/Slider) - Меню по прежнему должно открывать список лабораторных, но должно быть скрываемым и вызываться из Header по кнопке-иконке.',
        4: 'В нижнем меню организовать вызов быстрых действий (обратная связь и пр)',
        5: 'Проконтролировать, что приложение стало адаптивным под разные устройства.',
        6: 'Разместить лабораторную работу в репозиторий в github отдельным коммитом',
        7: 'Прикрепить текстовый файл с ссылкой на проект'
      }
    },
    {
      id: 8,
      title: 'Лабораторная работа 8',
      content: {
        1: 'Внедрить в проект  таблицы react-table. Для просмотра на мобильных устройствах зафиксировать первую колонку, остальные скроллировать.',
        2: 'Добавить возможность сортировки и перетаскивания колонок.',
        3: 'Реализовать динамическую подгрузку данных (виртуализация) при скроллировании',
        4: 'Разместить лабораторную работу в репозиторий в github отдельным коммитом',
        5: 'Прикрепить текстовый файл с ссылкой на проект'
      }
    },
    {
      id: 9,
      title: 'Лабораторная работа 9',
      content: {
        1: 'Написать тест для компонента кнопки',
        2: 'Провести рефакторинг страницы со списком данных с сервера. Переписать запрос к backend через rtk-query(useGetPostsQuery).',
        3: 'Используя isError, isLoading, isFetching отрисовать спиннер загрузки, сообщение об ошибке и результат успешного запроса',
        4: '"Ленивые" импорты. Разбить приложение на Chunks (не обязательно)',
        5: 'Результат работы разместить на github отдельным коммитом.',
        6: 'Ссылку на репозиторий приложить к заданию'
      }
    }
  ];
  
  export  default labs;