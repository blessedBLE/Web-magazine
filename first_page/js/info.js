let products = [
    {
        id: 1,
        name: "Телевизор Horizont 50LE7053D",
        images: "https://img.5element.by/import/images/ut/goods/good_64f087cc-cc51-11ec-bb95-0050560120e8/55le7053d-televizor-horizont-1_600.jpg",
        Brand: "Horizont",
        size: "50'",
        description: "4K UHD, Smart TV, HDR10, Wi-Fi, смарт пульт",
        price: "<b>1400</b>",
        currency: "BYN"
    },
    {
        id: 2,
        name: "iPhone 15 Pro Max, 256 ГБ, Black Titanium, (MU773)",
        images: "https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/240927134125773690/250327150141819515.png@webp",
        description: "55' 3840x2160 (4K UHD), частота матрицы 60 Гц, Smart TV (Android TV), HDR10, HLG, DTS:HD, DTS:X, Wi-Fi, смарт пульт",
        price: "<b>5000</b>",
        currency: "BYN"
    },
    {
        id: 3,
        name: "ASUS FX707VV-HX122 (90NR0CH5-M00690)",
        images: "https://img.sila.by/img2.php?image=https://img.sila.by/catalog/img15/tovar152314_2.jpg",
        description: "17.3' 1920x1080px, частота матрицы 144 Гц, Intel Core i7-13620H, 16GB RAM, RTX 4060",
        price: "<b>5400</b>",
        currency: "BYN"
    },
    {
        id: 4,
        name: "Ноутбук Apple MacBook Air 13 M2 (MLXW3)",
        images: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRAaed55W1VLbd3a8HmdOlhBcgU3XiPZslAP75pVCf8G3LpPYThsN-C75AIAI8AM0EI-DIMUhsn3G0oG8i32AmJ2QawY1uRmEIU0riwRIE2QBZ95rIEnMm1l0kZkZOoHW22&usqp=CAc",
        description: "13.6' 2560x1664 (Retina), Apple M2, 8GB RAM, 256GB SSD, macOS",
        price: "<b>4000</b>",
        currency: "BYN"
    },
    {
        id: 5,
        name: "Смартфон Samsung Galaxy S23 Ultra, 256 ГБ, Черный",
        images: "https://ir-3.ozone.ru/s3/multimedia-v/c1000/6678652891.jpg",
        description: "6.8' Dynamic AMOLED 2X, 120 Гц, Snapdragon 8 Gen 2, 12GB RAM, 256GB",
        price: "<b>4800</b>",
        currency: "BYN"
    },
    {
        id: 6,
        name: "Игровая приставка Sony PlayStation 5",
        images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1amcgoiH0g-yLCszfy-wElS7yAI_6Xecc3g&s",
        description: "Процессор AMD Ryzen Zen 2, видеоядро RDNA 2, 16GB GDDR6, SSD 825GB",
        price: "<b>2800</b>",
        currency: "BYN"
    },
    {
        id: 7,
        name: "Монитор LG UltraGear 27GN950-B",
        images: "data:image/jpeg;base64,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",
        description: "27' 3840x2160 (4K UHD), Nano IPS, 144 Гц, 1 мс, G-Sync, HDR600",
        price: "<b>3200</b>",
        currency: "BYN"
    },
    {
        id: 8,
        name: "Пылесос робот Xiaomi Mi Robot Vacuum-Mop 2 Pro",
        images: "data:image/jpeg;base64,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",
        description: "Лазерная навигация, влажная уборка, аккумулятор 5200 мАч, мощность 3000 Па",
        price: "<b>1600</b>",
        currency: "BYN"
    },
    {
        id: 9,
        name: "Смарт-часы Apple Watch Series 9, 41mm, GPS",
        images: "data:image/jpeg;base64,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",
        description: "Retina дисплей, чип S9, датчик кислорода в крови, водонепроницаемость WR50",
        price: "<b>2200</b>",
        currency: "BYN"
    },
    {
        id: 10,
        name: "Наушники Sony WH-1000XM5",
        images: "https://www.sony.co.uk/image/6145c1d32e6ac8e63a46c912dc33c5bb?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320",
        description: "Беспроводные, активное шумоподавление, Bluetooth 5.2, до 30 часов работы",
        price: "<b>1200</b>",
        currency: "BYN"
    },
    {
        id: 11,
        name: "Дрон DJI Air 2S Fly More Combo",
        images: "https://new-store.by/image/cache/catalog/kvadrokopter_dji_air_2s_fly_more_combo_261-620x580.jpg",
        description: "4K видео, 31 мин полета, датчик препятствий, 12.1 МП камера",
        price: "4500",
        currency: "BYN"
    },
    {
        id: 12,
        name: "Электросамокат Xiaomi Mi Electric Scooter 3",
        images: "https://world-devices.ru/image/cache/catalog/elektrosamokat-Xiaomi-Electric-Scooter-3-Lite-MJDDHBC03ZM-Black-CN-3-356x356-4-500x400.jpg",
        description: "Скорость до 25 км/ч, дальность 30 км, 8.5' шины, складной",
        price: "1200",
        currency: "BYN"
    }
];

let clothes = [
    
        {
            id: 1,
            name: "Футболка Nike",
            description: "Качественная футболка с логотипом Nike. Удобная и стильная.",
            image: "https://img.brandshop.ru/cache/products/d/dz2833-010-0_1104x1104.jpg",
            price: "259",  // Цена в BYN
            currency: "BYN",  // Валюта
            category: "Одежда",
            brand: "Nike"
        },
        {
            id: 2,
            name: "Джинсы Levi's",
            description: "Модные джинсы Levi's с прямым кроем, идеальные для повседневной носки.",
            image: "https://www.oldschooljeans.ru/images/Levi-jeans/005054886-head.jpg",
            price: "399",  // Цена в BYN
            currency: "BYN",  // Валюта
            category: "Одежда",
            brand: "Levi's"
        },
        {
            id: 3,
            name: "Куртка The North Face",
            description: "Зимняя куртка с утеплением от The North Face, предназначенная для холодной погоды.",
            image: "https://assets.thenorthface.eu/images/t_img/f_auto,h_462,w_462,e_sharpen:60/dpr_2.0/v1720740527/NF0A4R35JK3-ALT14/Womens-Himalayan-Insulated-Jacket.png",
            price: "8999",  // Цена в BYN
            currency: "BYN",  // Валюта
            category: "Одежда",
            brand: "The North Face"
        },
        {
            id: 4,
            name: "Кеды Adidas",
            description: "Удобные и стильные кеды от Adidas для активного отдыха.",
            image: "https://bunt.by/wp-content/uploads/2021/07/FX5812.jpg",
            price: "450",  // Цена в BYN
            currency: "BYN",  // Валюта
            category: "Одежда",
            brand: "Adidas"
        },
        {
            id: 5,
            name: "Футболка Puma",
            description: "Легкая футболка Puma с технологией отвода влаги, идеальная для спорта.",
            image: "https://metarun.by/assets/images/products/46625/52585801.jpg",
            price: "499",  // Цена в BYN
            currency: "BYN",  // Валюта
            category: "Одежда",
            brand: "Puma"
        },
        {
            id: 6,
            name: "Пальто Hugo Boss",
            description: "Элегантное пальто от Hugo Boss, выполненное из высококачественного материала.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBvehjLglN-jhpC2BkqMfH2oU1uqOgoDWf6Dd45lDlvD0XcVddBwS9b0&usqp=CAE&s",
            price: "599",  // Цена в BYN
            currency: "BYN",  // Валюта
            category: "Одежда",
            brand: "Hugo Boss"
        },
        {
            id: 7,
            name: "Термобелье Under Armour",
            description: "Термобелье для активных людей, обеспечивающее тепло и комфорт в холодную погоду.",
            image: "https://sport-tgt.by/uploads/Products/294/thumb-4158505896817e00281758e93713c0bf.jpg",
            price: "299",  // Цена в BYN
            currency: "BYN",  // Валюта
            category: "Одежда",
            brand: "Under Armour"
        },
        {
            id: 8,
            name: "Шорты Reebok",
            description: "Удобные спортивные шорты от Reebok для тренировок и активного отдыха.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6fognHpMRis-OtGVeur1ZdE1bs-cS0dXu5w&s",
            price: "399",  // Цена в BYN
            currency: "BYN",  // Валюта
            category: "Одежда",
            brand: "Reebok"
        },
        {
            id: 9,
            name: "Рюкзак Eastpak",
            description: "Практичный и стильный рюкзак от Eastpak, подходящий для города и путешествий.",
            image: "https://cdn1.ozone.ru/s3/multimedia-1-s/7354358704.jpg",
            price: "299",  // Цена в BYN
            currency: "BYN",  // Валюта
            category: "Одежда",
            brand: "Eastpak"
        },
        {
            id: 10,
            name: "Сумка Michael Kors",
            description: "Стильная кожаная сумка от Michael Kors для повседневного использования.",
            image: "data:image/jpeg;base64,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",
            price: "550",  // Цена в BYN
            currency: "BYN",  // Валюта
            category: "Одежда",
            brand: "Michael Kors"
        },
        {
            id: 11,
            name: "Ботинки Timberland",
            description: "Классические ботинки Timberland для активного отдыха и города.",
            image: "https://i.otzovik.com/objects/b/100000/95054.png",
            price: "999",  // Цена в BYN
            currency: "BYN",  // Валюта
            category: "Одежда",
            brand: "Timberland"
        },
        {
            id: 12,
            name: "Перчатки The North Face",
            description: "Теплые и удобные перчатки от The North Face для зимних прогулок.",
            image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEBUQEhIVEBUXGBUQFRAVEBUVFRcYFxUWFhUWFhUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDg0NDisZFRkrKysrKysrNysrNysrKysrKysrKys3KysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABwgFBgECBAP/xABPEAABAwICBgQHCA8HBQAAAAABAAIDBBEFEgYHEyExQVFhgZEiMnGSobHBCCNScnSis8IUJCU1QlRiZHOTo7LD0fAVFzRTY4KDQ5Sk0tP/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJxREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARFoWm2tCnw+f7GETqmUAGRrXhjWXF2guIPhEEGwHAjpQb6i1rQjTODE4nPiDo3xkNkhfbM298rgRuc02Nj1FbKgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgLH4njlLTENqKmCnLhdolnjjJA4kBxFwsgqm6W176ivqZ3m5dLIBfkxji2No6g0AILYRyBwDmkOBAIcDcEHgQRxCqpp3UGTFKx35xMz9W8xj0MClL3P+MudDPQvJIiLZogeTJLhzR1Bzb/8iibSd96+r66mpPfPIg3PULORij2XNnU0lxyJbJCQfKLu7yvpru0plkrTQxyObDC1udjXEB8rgHkut4wDSwAcjm7PLqMP3WHyeb9+JappvOX4nWuPH7Jnb2MkcwehoQSrqJ0olm21DNI6XI0Twue4ucG3yyMud5aCWEdGYjha0uquuoqS2LgdNPMPnRH2Kws9Qxgu97WAkAFzg0XPAXPNB9UREBERAREQEREBEXDjYX7UGma1NKpsPpGSU4YZJJBHd7S4NaGuc4hoIubho7VEz9beKn/qxN8lO323Xv1pacU+IwwshjmiLCJjtWxgFkkd22yPdv3jjZRsUG5u1qYv+NAeSng9rF1/vSxf8b/8en/+a01EG7xa18WBuahr+p1PFb5rQV64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",
            price: "799",  // Цена в BYN
            currency: "BYN",  // Валюта
            category: "Одежда",
            brand: "The North Face"
        },
        // Добавим более дешевые товары
        {
            id: 13,
            name: "Футболка H&M",
            description: "Простая и удобная футболка для повседневной носки от H&M.",
            image: "https://m.buro247.ru/images/2021/02/1613739429061329.jpg",
            price: "299",  // Цена в BYN
            currency: "BYN",  // Валюта
            category: "Одежда",
            brand: "H&M"
        },
        {
            id: 14,
            name: "Шорты OVS",
            description: "Легкие шорты для отдыха от OVS, идеальные для жаркой погоды.",
            image: "data:image/jpeg;base64,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",
            price: "499",  // Цена в BYN
            currency: "BYN",  // Валюта
            category: "Одежда",
            brand: "OVS"
        },
        {
            id: 15,
            name: "Кроссовки Decathlon",
            description: "Удобные спортивные кроссовки для прогулок и тренировок от Decathlon.",
            image: "data:image/jpeg;base64,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",
            price: "699",  // Цена в BYN
            currency: "BYN",  // Валюта
            category: "Одежда",
            brand: "Decathlon"
        },
        {
            id: 16,
            name: "Термобелье Decathlon",
            description: "Недорогое термобелье для активных людей от Decathlon.",
            image: "data:image/jpeg;base64,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",
            price: "399",  // Цена в BYN
            currency: "BYN",  // Валюта
            category: "Одежда",
            brand: "Decathlon"
        },
        {
            id: 17,
            name: "Рюкзак IKEA",
            description: "Простой и удобный рюкзак от IKEA, идеальный для города и путешествий.",
            image: "https://irecommend.ru/sites/default/files/product-images/459573/r57J2VfoWy8AXfWZ27GA.jpg",
            price: "999",  // Цена в BYN
            currency: "BYN",  // Валюта
            category: "Одежда",
            brand: "IKEA"
        },
        {
            id: 18,
            name: "Шарф Zara",
            description: "Теплый и стильный шарф от Zara для холодной погоды.",
            image: "https://static.zara.net/assets/public/dc96/3e40/8f4343168a4e/07581995cd4e/05875311430-e1/05875311430-e1.jpg?ts=1733408340812&w=744&f=auto",
            price: "299",  // Цена в BYN
            currency: "BYN",  // Валюта
            category: "Одежда",
            brand: "Zara"
        }
    ];
    
    let appliances = [
        {
            id: 1,
            name: "Микроволновая печь Samsung",
            description: "Компактная и мощная микроволновка с грилем и быстрым разогревом.",
            image: "https://images.samsung.com/is/image/samsung/p6pim/ru/me732k-xbw/gallery/ru-microwave-me732k-xbw-53184758?$720_576_PNG$",
            price: "349",
            currency: "BYN",
            category: "Бытовая техника",
            brand: "Samsung"
        },
        {
            id: 2,
            name: "Блендер Philips HR3652",
            description: "Мощный блендер с технологией ProBlend 6 3D, идеально подходит для смузи.",
            image: "https://images.philips.com/is/image/PhilipsConsumer/HR3652_00-IMS-ru_RU?$jpglarge$&wid=1250",
            price: "289",
            currency: "BYN",
            category: "Бытовая техника",
            brand: "Philips"
        },
        {
            id: 3,
            name: "Кофемашина DeLonghi Magnifica",
            description: "Автоматическая кофемашина для эспрессо с капучинатором.",
            image: "https://m.media-amazon.com/images/I/71os5qeX6dL._AC_SL1500_.jpg",
            price: "1020",
            currency: "BYN",
            category: "Бытовая техника",
            brand: "DeLonghi"
        },
        {
            id: 4,
            name: "Электрочайник Xiaomi Mi Smart Kettle",
            description: "Умный чайник с поддержкой Bluetooth и регулировкой температуры.",
            image: "https://cdn.thewirecutter.com/wp-content/media/2022/06/electrickettles-2048px-03488.jpg",
            price: "149",
            currency: "BYN",
            category: "Бытовая техника",
            brand: "Xiaomi"
        },
        {
            id: 5,
            name: "Мультиварка Redmond RMC-M4502",
            description: "45 автоматических программ приготовления. Легкость и удобство.",
            image: "https://images.redmond.company/products/1/3/7/1377/1377.970.jpg",
            price: "239",
            currency: "BYN",
            category: "Бытовая техника",
            brand: "Redmond"
        },
        {
            id: 6,
            name: "Тостер Bosch TAT3A014",
            description: "Компактный тостер с функцией центрирования и разморозки.",
            image: "https://media3.bosch-home.com/Product_Shots/1000x/149967_TAT3A014_def.jpg",
            price: "119",
            currency: "BYN",
            category: "Бытовая техника",
            brand: "Bosch"
        },
        {
            id: 7,
            name: "Кухонный комбайн Kenwood FDM302SS",
            description: "Многофункциональный прибор: измельчение, нарезка, взбивание и смешивание.",
            image: "https://kenwoodworld.ru/media/catalog/product/cache/6/image/700x700/9df78eab33525d08d6e5fb8d27136e95/f/d/fdm302ss_1.jpg",
            price: "459",
            currency: "BYN",
            category: "Бытовая техника",
            brand: "Kenwood"
        },
        {
            id: 8,
            name: "Мясорубка Moulinex ME106832",
            description: "Простая в использовании и мощная мясорубка с насадками.",
            image: "https://img.mvideo.ru/Pdb/20093728b.jpg",
            price: "279",
            currency: "BYN",
            category: "Бытовая техника",
            brand: "Moulinex"
        },
        {
            id: 9,
            name: "Хлебопечь Panasonic SD-ZB2512",
            description: "Готовит хлеб, тесто, варенье. Металлический корпус, 33 программы.",
            image: "https://cdn.leroymerlin.ru/lmru/image/upload/v1619092184/lmrucms/88236959.jpg",
            price: "699",
            currency: "BYN",
            category: "Бытовая техника",
            brand: "Panasonic"
        },
        {
            id: 10,
            name: "Соковыжималка Scarlett SC-JE50S01",
            description: "Широкая горловина, металлический корпус, высокая мощность.",
            image: "https://scarlett.ru/upload/resize_cache/iblock/7dd/600_600_1/7dd43f2d69e2047cbb57e8c4fda94b5d.jpg",
            price: "189",
            currency: "BYN",
            category: "Бытовая техника",
            brand: "Scarlett"
        },
        {
            id: 11,
            name: "Мини-печь Gorenje MO20A3B",
            description: "Компактная настольная духовка с грилем и конвекцией.",
            image: "https://gorenje.by/medias/1-gorenje-mini-pech.jpg?context=bWFzdGVyfHJvb3R8MjMxNzV8aW1hZ2UvanBlZ3xoN2UvaDk4LzEwODkwNzQyMTE0MzE4LmpwZ3wyMmYzZTc2NmFkN2M0MzEyYmE4YjE5YzQxY2Y1MjUwYzNlNzA0NDJiODg3ODQ2NmU1N2UwNjM3NmQzMmE1YzFi",
            price: "339",
            currency: "BYN",
            category: "Бытовая техника",
            brand: "Gorenje"
        },
        {
            id: 12,
            name: "Посудомоечная машина Beko DFS26024X",
            description: "Узкая, вместительная посудомойка с 6 программами и экономией воды.",
            image: "https://www.beko.com/content/dam/beko/ru/ru/products/dishwashers/DFS26024X/dfs26024x-dishwasher-1.png",
            price: "1199",
            currency: "BYN",
            category: "Бытовая техника",
            brand: "Beko"
        }
    ];
    