1. npm install 
2. Для запуска создайте в корневой папке .env REACT_APP_API_KEY=<'your api token'>
3. npm start


Этот метод вернет список фильмов удовлетворяющих вашему запросу.
Получения списка фильмов с возможностью сортировать, выбор выд

Пример
https://api.kinopoisk.dev/v1.4/movie?page=1&year=2024&ageRating=18&countries.name=США

```
{
    "docs": [
        {
            "id": 4745604,
            "countries": [
                {
                    "name": "США"
                },
                {
                    "name": "Великобритания"
                }
            ],
            "genres": [
                {
                    "name": "триллер"
                },
                {
                    "name": "ужасы"
                }
            ],
            "names": [
                {
                    "name": "Из глубины"
                },
                {
                    "name": "No Way Up"
                },
                {
                    "name": "The Outlaws 3",
                    "language": "US",
                    "type": null
                },
                {
                    "name": "บู๊ระห่ำล่าล้างนรก: ทุบนรกแตก",
                    "language": "TH",
                    "type": null
                },
                {
                    "name": "犯罪都市3",
                    "language": "CN",
                    "type": "动作、犯罪"
                },
                {
                    "name": "Beom-Joe-do-si 3",
                    "language": "KR",
                    "type": null
                }
            ],
            "alternativeName": "No Way Up",
            "description": "Летящий из Лос-Анджелеса на мексиканский курорт самолет терпит крушение над Тихим океаном. Авиалайнер падает и застревает на дне, несколько выживших оказываются в хвосте в воздушном кармане, но кислород постепенно заканчивается, а рядом уже кружат кровожадные акулы.",
            "enName": null,
            "movieLength": 90,
            "name": "Из глубины",
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/4483445/e141c393-257c-445e-9f0c-1076b2cf67cc/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4483445/e141c393-257c-445e-9f0c-1076b2cf67cc/x1000"
            },
            "rating": {
                "kp": 6.01,
                "imdb": 4.6,
                "filmCritics": 4.8,
                "russianFilmCritics": 0,
                "await": null
            },
            "ratingMpaa": "r",
            "shortDescription": "Как выжить на борту затонувшего самолета, окруженного акулами? Фильм-катастрофа для ценителей острых ощущений",
            "status": null,
            "ticketsOnSale": false,
            "type": "movie",
            "typeNumber": 1,
            "votes": {
                "kp": 87806,
                "imdb": 3732,
                "filmCritics": 22,
                "russianFilmCritics": 0,
                "await": 966
            },
            "year": 2024,
            "ageRating": 18,
            "backdrop": {
                "url": "https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a0000018df3ee4bb967777bf6e93aafc144/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a0000018df3ee4bb967777bf6e93aafc144/x1000"
            },
            "logo": {
                "url": "https://imagetmdb.com/t/p/original/xT13FgBON4NXhBZHU4LVpnnudKA.png"
            },
            "top10": null,
            "top250": null,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "id": 4926291,
            "countries": [
                {
                    "name": "США"
                }
            ],
            "genres": [
                {
                    "name": "боевик"
                },
                {
                    "name": "триллер"
                }
            ],
            "names": [
                {
                    "name": "Red Right Hand"
                },
                {
                    "name": "Карающая длань",
                    "$set": {
                        "language": "RU",
                        "type": "Russian title on kinopoisk"
                    }
                }
            ],
            "ageRating": 18,
            "alternativeName": "Red Right Hand",
            "backdrop": {
                "url": "https://image.openmoviedb.com/kinopoisk-ott-images/212840/2a0000018dd0edeeda30e72c08c2ef9b0dfb/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-ott-images/212840/2a0000018dd0edeeda30e72c08c2ef9b0dfb/x1000"
            },
            "description": "Кэш живет скромной и мирной жизнью, помогает мужу покойной сестры воспитывать племянницу Саванну и управляться с фермой в небольшом городишке в Аппалачах. Но когда Кошка, глава местной банды и садистка, начинает угрожать его семье, Кэш понимает, что готов на все ради их защиты. И чем дольше длится противостояние, затягивая Кэша в водоворот насилия, тем сильнее стирается граница между добром и злом.",
            "enName": null,
            "logo": {
                "url": null
            },
            "movieLength": 111,
            "name": "Карающая длань",
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/10592371/ff7ffa5b-4bc5-455c-b66e-00ef3321c924/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10592371/ff7ffa5b-4bc5-455c-b66e-00ef3321c924/x1000"
            },
            "rating": {
                "kp": 6.553,
                "imdb": 5.4,
                "filmCritics": 5.2,
                "russianFilmCritics": 0,
                "await": null
            },
            "ratingMpaa": null,
            "shortDescription": "Бывший преступник берет в руки оружие, чтобы защитить семью. Брутальный экшен с Орландо Блумом",
            "status": null,
            "ticketsOnSale": false,
            "type": "movie",
            "typeNumber": 1,
            "votes": {
                "kp": 48827,
                "imdb": 2615,
                "filmCritics": 18,
                "russianFilmCritics": 0,
                "await": 187
            },
            "year": 2024,
            "top10": null,
            "top250": null,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "id": 4947994,
            "countries": [
                {
                    "name": "США"
                }
            ],
            "genres": [
                {
                    "name": "боевик"
                },
                {
                    "name": "триллер"
                }
            ],
            "names": [
                {
                    "name": "Land of Bad"
                },
                {
                    "name": "Территория зла",
                    "$set": {
                        "language": "RU",
                        "type": "Russian title on kinopoisk"
                    }
                }
            ],
            "alternativeName": "Land of Bad",
            "description": "Отряд американского спецназа тайно высаживается на территорию Филиппин для выполнения секретной миссии по спасению важного заложника. С базы поддержку с воздуха осуществляют оператор беспилотника Рипер и его напарница. Вскоре ситуация принимает неожиданный оборот, и бойцы вынуждены вступить в бой с превосходящими силами противника. После ожесточённого боя в живых остаётся лишь сержант Кинни — молодой морпех, отвечающий за связь с Рипером и координацию его действий. Для Кинни это лишь вторая боевая миссия, и теперь парню придётся в одиночку пробираться по вражеской территории к точке эвакуации, а Рипер становится его единственной надеждой на спасение.",
            "enName": null,
            "movieLength": 113,
            "name": "Территория зла",
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/10809116/f6d78cef-91b2-4e1c-9d82-960629ccaf01/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10809116/f6d78cef-91b2-4e1c-9d82-960629ccaf01/x1000"
            },
            "rating": {
                "kp": 7.121,
                "imdb": 6.5,
                "filmCritics": 6.1,
                "russianFilmCritics": 0,
                "await": null
            },
            "ratingMpaa": "r",
            "shortDescription": null,
            "status": null,
            "ticketsOnSale": false,
            "type": "movie",
            "typeNumber": 1,
            "votes": {
                "kp": 31651,
                "imdb": 14961,
                "filmCritics": 59,
                "russianFilmCritics": 0,
                "await": 436
            },
            "year": 2024,
            "ageRating": 18,
            "backdrop": {
                "url": "https://image.openmoviedb.com/kinopoisk-ott-images/1672343/2a0000018e80562aa6777233de8963f2b0d8/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-ott-images/1672343/2a0000018e80562aa6777233de8963f2b0d8/x1000"
            },
            "logo": {
                "url": null
            },
            "top10": null,
            "top250": null,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "id": 1245667,
            "type": "tv-series",
            "name": "Ходячие мертвецы: Выжившие",
            "rating": {
                "kp": 7.656,
                "imdb": 8.2,
                "filmCritics": 0,
                "russianFilmCritics": 0,
                "await": null
            },
            "description": "Мишонн узнает, что ее муж Рик Граймс, который пропал без вести, всё же жив и взят в плен бойцами Гражданской республики. Женщина вооружается катаной и отправляется на его поиски, по пути уничтожая толпы голодных зомби.",
            "votes": {
                "kp": 28539,
                "imdb": 22407,
                "filmCritics": 0,
                "russianFilmCritics": 0,
                "await": 6270
            },
            "year": 2024,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/10835644/d32d5924-2e65-4cf0-b0a2-7535c5f82194/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10835644/d32d5924-2e65-4cf0-b0a2-7535c5f82194/x1000"
            },
            "genres": [
                {
                    "name": "ужасы"
                },
                {
                    "name": "триллер"
                },
                {
                    "name": "драма"
                }
            ],
            "countries": [
                {
                    "name": "США"
                }
            ],
            "typeNumber": 2,
            "alternativeName": "The Walking Dead: The Ones Who Live",
            "enName": null,
            "movieLength": null,
            "names": [
                {
                    "name": "Untitled Rick & Michonne Spin-Off"
                },
                {
                    "name": "The Walking Dead: Summit"
                },
                {
                    "name": "The Walking Dead: The Ones Who Live",
                    "language": null,
                    "type": null
                },
                {
                    "name": "The Walking Dead: Rick & Michonne",
                    "language": "US",
                    "type": "working title"
                },
                {
                    "name": "TWD",
                    "language": "US",
                    "type": "abbreviation"
                },
                {
                    "name": "TWDTOWL",
                    "language": "US",
                    "type": "abbreviation"
                },
                {
                    "name": "Ходячие мертвецы: Выжившие",
                    "$set": {
                        "language": "RU",
                        "type": "Russian title on kinopoisk"
                    }
                }
            ],
            "ratingMpaa": null,
            "shortDescription": "Как найти друг друга в мире, охваченном легионами зомби? Эпическая и жестокая история любви с Эндрю Линкольном",
            "status": "completed",
            "ticketsOnSale": false,
            "ageRating": 18,
            "backdrop": {
                "url": "https://image.openmoviedb.com/kinopoisk-ott-images/212840/2a0000018dc61156311ca1a8c5b20933dd57/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-ott-images/212840/2a0000018dc61156311ca1a8c5b20933dd57/x1000"
            },
            "logo": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/9xCqIcl2c8UYn5dKvK2aB9y8cL2.png",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/9xCqIcl2c8UYn5dKvK2aB9y8cL2.png"
            },
            "releaseYears": [
                {
                    "start": 2024,
                    "end": 2024
                }
            ],
            "top10": null,
            "top250": null,
            "isSeries": true,
            "seriesLength": 60,
            "totalSeriesLength": null
        },
        {
            "id": 5417579,
            "name": "Тот, кто смотрит",
            "alternativeName": "Stranger in the Woods",
            "enName": null,
            "names": [
                {
                    "name": "Незнакомец в лесу",
                    "language": "RU",
                    "type": "Russian title on kinopoisk"
                },
                {
                    "name": "Stranger in the Woods",
                    "language": null,
                    "type": "Original title on kinopoisk"
                },
                {
                    "name": "Тот, кто смотрит",
                    "$set": {
                        "language": "RU",
                        "type": "Russian title on kinopoisk"
                    }
                }
            ],
            "type": "movie",
            "typeNumber": 1,
            "year": 2024,
            "description": "Оливия, пережившая гибель жениха и попытку самоубийства, отправляется со своими друзьями на природу. Ее близкие уверены, что свежий воздух и смена обстановки пойдут девушке на пользу. Но вместо этого Оливию начинает одолевать тревога. Она не может избавиться от ощущения, что леса вокруг их хижины таят опасность, а остановившийся по соседству сводный брат одного из ее друзей задумал что-то недоброе.",
            "shortDescription": "Попытка развеяться после гибели жениха оборачивается для Оливии кошмаром. Триллер с неожиданной развязкой",
            "status": null,
            "rating": {
                "kp": 5.245,
                "imdb": 3.5,
                "filmCritics": 0,
                "russianFilmCritics": 0,
                "await": null
            },
            "votes": {
                "kp": 24923,
                "imdb": 478,
                "filmCritics": 0,
                "russianFilmCritics": 0,
                "await": 18
            },
            "movieLength": 79,
            "totalSeriesLength": null,
            "seriesLength": null,
            "ratingMpaa": null,
            "ageRating": 18,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/10835644/4cb7c783-6e5a-4416-b3f6-a108fa866a4f/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10835644/4cb7c783-6e5a-4416-b3f6-a108fa866a4f/x1000"
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/kinopoisk-ott-images/236744/2a0000018da6bb4c194d56bc1061babde579/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-ott-images/236744/2a0000018da6bb4c194d56bc1061babde579/x1000"
            },
            "genres": [
                {
                    "name": "триллер"
                }
            ],
            "countries": [
                {
                    "name": "США"
                }
            ],
            "top10": null,
            "top250": null,
            "isSeries": false,
            "ticketsOnSale": false
        },
        {
            "id": 4498603,
            "names": [
                {
                    "name": "Monsieur Spade"
                },
                {
                    "name": "Месье Спейд",
                    "$set": {
                        "language": "RU",
                        "type": "Russian title on kinopoisk"
                    }
                }
            ],
            "genres": [
                {
                    "name": "детектив"
                },
                {
                    "name": "триллер"
                },
                {
                    "name": "криминал"
                },
                {
                    "name": "драма"
                }
            ],
            "countries": [
                {
                    "name": "США"
                }
            ],
            "releaseYears": [
                {
                    "start": 2024,
                    "end": 2024
                }
            ],
            "alternativeName": "Monsieur Spade",
            "backdrop": {
                "url": "https://image.openmoviedb.com/kinopoisk-ott-images/223007/2a0000018cef3ecb5f1cacbb8ef449d9d0af/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-ott-images/223007/2a0000018cef3ecb5f1cacbb8ef449d9d0af/x1000"
            },
            "description": "Франция, 1955 год. Выполняя очередное задание, частный детектив Сэм Спейд привозит из США в маленький городок Бозуль 7-летнюю Терезу, чтобы передать её отцу — шантажисту и специалисту по разного рода криминальным делам Филиппу Сен-Андре. Однако найти Филиппа в условленном месте встречи не удаётся, и Спейд вынужден отдать девочку в местный женский монастырь, а сам решает осесть в Бозуле. Спустя 8 лет Филипп объявляется в городке и пытается наладить контакт с дочерью, поскольку имеет к ней меркантильный интерес. Со Спейдом же у него свои счёты.",
            "movieLength": null,
            "name": "Месье Спейд",
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/10893610/bfc94b89-59b2-4634-8a7c-866513864a82/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10893610/bfc94b89-59b2-4634-8a7c-866513864a82/x1000"
            },
            "rating": {
                "kp": 7.16,
                "imdb": 6.9,
                "filmCritics": 0,
                "russianFilmCritics": 0,
                "await": null
            },
            "ratingMpaa": null,
            "shortDescription": "Опытный сыщик ищет убийцу монахинь в тихой французской провинции. Новый сериал создателя «Хода королевы»",
            "status": "completed",
            "top10": null,
            "top250": null,
            "type": "tv-series",
            "typeNumber": 2,
            "votes": {
                "kp": 19293,
                "imdb": 4813,
                "filmCritics": 0,
                "russianFilmCritics": 0,
                "await": 388
            },
            "year": 2024,
            "ageRating": 18,
            "ticketsOnSale": false,
            "isSeries": true,
            "seriesLength": null,
            "totalSeriesLength": 330,
            "enName": null,
            "logo": {
                "url": "https://image.openmoviedb.com/tmdb-images/original/qLJXM1kr9bGeFJFBxErTSCpx35t.png",
                "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/qLJXM1kr9bGeFJFBxErTSCpx35t.png"
            }
        },
        {
            "id": 5139869,
            "name": "Санктуарий: История ведьмы",
            "alternativeName": "Sanctuary: A Witch's Tale",
            "names": [
                {
                    "name": "Sanctuary"
                },
                {
                    "name": "Sanctuary: A Witch's Tale",
                    "$set": {
                        "language": null,
                        "type": "Original title on kinopoisk"
                    }
                },
                {
                    "name": "Санктуарий: История ведьмы",
                    "$set": {
                        "language": "RU",
                        "type": "Russian title on kinopoisk"
                    }
                }
            ],
            "type": "tv-series",
            "typeNumber": 2,
            "description": "Сотни лет ведьмы живут как признанные и священные члены сообщества в маленьком английском городке под названием Санктуарий. Но однажды местный подросток Дэн Уитхолл, капитан команды по регби и хулиган школы, погибает в результате несчастного случая на вечеринке. Его мать Эбигейл уверена, что в произошедшем виноваты ведьма Сара Фенн и ее дочь Харпер. Паранойя и подозрения раскалывают некогда тесное сообщество городка, приводя к ужасающим последствиям.",
            "shortDescription": "Обычная женщина обвиняет колдунью в смерти сына. Мистический сериал с атмосферой «Большой маленькой лжи»",
            "status": null,
            "rating": {
                "kp": 7.125,
                "imdb": 5.8,
                "filmCritics": 0,
                "russianFilmCritics": 0,
                "await": null
            },
            "votes": {
                "kp": 12602,
                "imdb": 1168,
                "filmCritics": 0,
                "russianFilmCritics": 0,
                "await": 8
            },
            "movieLength": null,
            "ratingMpaa": null,
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/4483445/aca9b1ac-559e-4655-b13f-da0ae792cdc8/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4483445/aca9b1ac-559e-4655-b13f-da0ae792cdc8/x1000"
            },
            "backdrop": {
                "url": "https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a0000018def7e506c7f29e08d34fb62d56e/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a0000018def7e506c7f29e08d34fb62d56e/x1000"
            },
            "genres": [
                {
                    "name": "фэнтези"
                },
                {
                    "name": "триллер"
                }
            ],
            "countries": [
                {
                    "name": "США"
                }
            ],
            "releaseYears": [
                {
                    "start": 2024,
                    "end": null
                }
            ],
            "top10": null,
            "top250": null,
            "year": 2024,
            "ageRating": 18,
            "ticketsOnSale": false,
            "isSeries": true,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "id": 4696486,
            "alternativeName": "Wanted Man",
            "countries": [
                {
                    "name": "США"
                }
            ],
            "description": "Офицер полиции получает задание найти и защитить девушку, ставшую свидетельницей перестрелки с наркокартелем, в которой погибли несколько агентов Управления по борьбе с наркотиками. И без того непростая ситуация осложняется, когда офицер выясняет, что за атакой на самом деле стояли спецслужбы.",
            "enName": null,
            "genres": [
                {
                    "name": "боевик"
                },
                {
                    "name": "триллер"
                }
            ],
            "movieLength": 85,
            "name": "Крайне опасен",
            "names": [
                {
                    "name": "Wanted Man"
                },
                {
                    "name": "В розыске",
                    "$set": {
                        "language": "RU",
                        "type": "Russian title on kinopoisk"
                    }
                },
                {
                    "name": "Крайне опасен",
                    "$set": {
                        "language": "RU",
                        "type": "Russian title on kinopoisk"
                    }
                }
            ],
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/10835644/b071a8f8-84f6-4241-9fcf-9976b6775d11/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10835644/b071a8f8-84f6-4241-9fcf-9976b6775d11/x1000"
            },
            "rating": {
                "kp": 5.868,
                "imdb": 4.9,
                "filmCritics": 0,
                "russianFilmCritics": 0,
                "await": null
            },
            "ratingMpaa": null,
            "shortDescription": "Полицейский должен спасти свидетельницу, выжившую при нападении на картель. Боевик Дольфа Лундгрена",
            "status": null,
            "ticketsOnSale": false,
            "type": "movie",
            "typeNumber": 1,
            "votes": {
                "kp": 9466,
                "imdb": 1110,
                "filmCritics": 0,
                "russianFilmCritics": 0,
                "await": 35
            },
            "year": 2024,
            "ageRating": 18,
            "backdrop": {
                "url": "https://image.openmoviedb.com/kinopoisk-ott-images/239697/2a0000018d44cb6c60434695ab1c1a8ab42d/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-ott-images/239697/2a0000018d44cb6c60434695ab1c1a8ab42d/x1000"
            },
            "logo": {
                "url": null
            },
            "top10": null,
            "top250": null,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "id": 4968703,
            "alternativeName": "Taken from Rio Bravo",
            "countries": [
                {
                    "name": "США"
                }
            ],
            "description": "1874 год, Восточный Техас. Двое друзей преследуют группу садистов-торговцев людьми, которые похитили пять женщин. Вместе с индейским разведчиком они должны как можно быстрее найти и освободить женщин, пока торговцы не продали их в качестве секс-рабынь на мексиканской границе.",
            "enName": null,
            "genres": [
                {
                    "name": "боевик"
                },
                {
                    "name": "вестерн"
                }
            ],
            "movieLength": 80,
            "name": "Затерянные в Рио Браво",
            "names": [
                {
                    "name": "Затерянные в Рио Браво"
                },
                {
                    "name": "Taken from Rio Bravo"
                }
            ],
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/10592371/29c09174-5831-4df1-b105-9f216d4c4aa3/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10592371/29c09174-5831-4df1-b105-9f216d4c4aa3/x1000"
            },
            "rating": {
                "kp": 5.894,
                "imdb": 5.2,
                "filmCritics": 0,
                "russianFilmCritics": 0,
                "await": null
            },
            "ratingMpaa": null,
            "shortDescription": "Русский стрелок защищает жителей Техаса от банды головорезов. Лихой вестерн с Александром Невским",
            "status": null,
            "ticketsOnSale": false,
            "type": "movie",
            "typeNumber": 1,
            "votes": {
                "kp": 5918,
                "imdb": 58,
                "filmCritics": 0,
                "russianFilmCritics": 0,
                "await": 1096
            },
            "year": 2024,
            "ageRating": 18,
            "backdrop": {
                "url": "https://image.openmoviedb.com/kinopoisk-ott-images/374297/2a0000018da2d7d16ae8d35033b0417f890b/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-ott-images/374297/2a0000018da2d7d16ae8d35033b0417f890b/x1000"
            },
            "logo": {
                "url": null
            },
            "top10": null,
            "top250": null,
            "isSeries": false,
            "seriesLength": null,
            "totalSeriesLength": null
        },
        {
            "id": 4746054,
            "countries": [
                {
                    "name": "США"
                }
            ],
            "genres": [
                {
                    "name": "биография"
                },
                {
                    "name": "криминал"
                },
                {
                    "name": "драма"
                }
            ],
            "names": [
                {
                    "name": "Грисельда"
                },
                {
                    "name": "Griselda"
                }
            ],
            "alternativeName": "Griselda",
            "description": "В 1978 году жена наркоторговца Грисельда Бланко вместе с тремя сыновьями бежит из Медельина в Майами. Чтобы раздобыть денег, женщина пытается продать привезённый из Колумбии килограмм кокаина, знакомится с местными дилерами и, преодолевая презрение с их стороны, решает наладить свою сеть поставок и продажи наркотиков на доселе неразработанном рынке — белым обеспеченным людям.",
            "enName": null,
            "movieLength": null,
            "name": "Грисельда",
            "poster": {
                "url": "https://image.openmoviedb.com/kinopoisk-images/9784475/e61ef445-9c84-482f-a7a6-3019af7b3ffa/orig",
                "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/9784475/e61ef445-9c84-482f-a7a6-3019af7b3ffa/x1000"
            },
            "rating": {
                "kp": 6.718,
                "imdb": 7.2,
                "filmCritics": 0,
                "russianFilmCritics": 0,
                "await": null
            },
            "ratingMpaa": null,
            "shortDescription": null,
            "status": "completed",
            "ticketsOnSale": false,
            "type": "tv-series",
            "typeNumber": 2,
            "votes": {
                "kp": 3629,
                "imdb": 36294,
                "filmCritics": 0,
                "russianFilmCritics": 1,
                "await": 2072
            },
            "year": 2024,
            "ageRating": 18,
            "backdrop": {
                "url": null,
                "previewUrl": null
            },
            "logo": {
                "url": null
            },
            "releaseYears": [
                {
                    "start": 2024,
                    "end": 2024
                }
            ],
            "top10": null,
            "top250": null,
            "isSeries": true,
            "seriesLength": 50,
            "totalSeriesLength": null
        }
    ],
    "total": 25,
    "limit": 10,
    "page": 1,
    "pages": 3
}
```
