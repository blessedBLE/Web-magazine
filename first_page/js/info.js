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
            image: "path/to/tshirt-nike.jpg",
            price: "1299",  // Цена в BYN
            currency: "BYN",  // Валюта
            category: "Одежда",
            brand: "Nike"
        },
        {
            id: 2,
            name: "Джинсы Levi's",
            description: "Модные джинсы Levi's с прямым кроем, идеальные для повседневной носки.",
            image: "path/to/jeans-levis.jpg",
            price: "4999",  // Цена в BYN
            currency: "BYN",  // Валюта
            category: "Одежда",
            brand: "Levi's"
        },
        {
            id: 3,
            name: "Куртка The North Face",
            description: "Зимняя куртка с утеплением от The North Face, предназначенная для холодной погоды.",
            image: "path/to/jacket-northface.jpg",
            price: "8999",  // Цена в BYN
            currency: "BYN",  // Валюта
            category: "Одежда",
            brand: "The North Face"
        },
        {
            id: 4,
            name: "Кеды Adidas",
            description: "Удобные и стильные кеды от Adidas для активного отдыха.",
            image: "path/to/sneakers-adidas.jpg",
            price: "1599",  // Цена в BYN
            currency: "BYN",  // Валюта
            category: "Одежда",
            brand: "Adidas"
        },
        {
            id: 5,
            name: "Футболка Puma",
            description: "Легкая футболка Puma с технологией отвода влаги, идеальная для спорта.",
            image: "path/to/tshirt-puma.jpg",
            price: "799",  // Цена в BYN
            currency: "BYN",  // Валюта
            category: "Одежда",
            brand: "Puma"
        },
        {
            id: 6,
            name: "Пальто Hugo Boss",
            description: "Элегантное пальто от Hugo Boss, выполненное из высококачественного материала.",
            image: "path/to/coat-hugo-boss.jpg",
            price: "14999",  // Цена в BYN
            currency: "BYN",  // Валюта
            category: "Одежда",
            brand: "Hugo Boss"
        },
        {
            id: 7,
            name: "Термобелье Under Armour",
            description: "Термобелье для активных людей, обеспечивающее тепло и комфорт в холодную погоду.",
            image: "path/to/under-armour-thermal.jpg",
            price: "1699",  // Цена в BYN
            currency: "BYN",  // Валюта
            category: "Одежда",
            brand: "Under Armour"
        },
        {
            id: 8,
            name: "Шорты Reebok",
            description: "Удобные спортивные шорты от Reebok для тренировок и активного отдыха.",
            image: "path/to/reebok-shorts.jpg",
            price: "1199",  // Цена в BYN
            currency: "BYN",  // Валюта
            category: "Одежда",
            brand: "Reebok"
        },
        {
            id: 9,
            name: "Рюкзак Eastpak",
            description: "Практичный и стильный рюкзак от Eastpak, подходящий для города и путешествий.",
            image: "path/to/eastpak-backpack.jpg",
            price: "3499",  // Цена в BYN
            currency: "BYN",  // Валюта
            category: "Одежда",
            brand: "Eastpak"
        },
        {
            id: 10,
            name: "Сумка Michael Kors",
            description: "Стильная кожаная сумка от Michael Kors для повседневного использования.",
            image: "path/to/michael-kors-bag.jpg",
            price: "13999",  // Цена в BYN
            currency: "BYN",  // Валюта
            category: "Одежда",
            brand: "Michael Kors"
        },
        {
            id: 11,
            name: "Ботинки Timberland",
            description: "Классические ботинки Timberland для активного отдыха и города.",
            image: "path/to/timberland-boots.jpg",
            price: "8999",  // Цена в BYN
            currency: "BYN",  // Валюта
            category: "Одежда",
            brand: "Timberland"
        },
        {
            id: 12,
            name: "Перчатки The North Face",
            description: "Теплые и удобные перчатки от The North Face для зимних прогулок.",
            image: "path/to/gloves-northface.jpg",
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
            image: "path/to/tshirt-hm.jpg",
            price: "299",  // Цена в BYN
            currency: "BYN",  // Валюта
            category: "Одежда",
            brand: "H&M"
        },
        {
            id: 14,
            name: "Шорты OVS",
            description: "Легкие шорты для отдыха от OVS, идеальные для жаркой погоды.",
            image: "path/to/shorts-ovs.jpg",
            price: "499",  // Цена в BYN
            currency: "BYN",  // Валюта
            category: "Одежда",
            brand: "OVS"
        },
        {
            id: 15,
            name: "Кроссовки Decathlon",
            description: "Удобные спортивные кроссовки для прогулок и тренировок от Decathlon.",
            image: "path/to/sneakers-decathlon.jpg",
            price: "699",  // Цена в BYN
            currency: "BYN",  // Валюта
            category: "Одежда",
            brand: "Decathlon"
        },
        {
            id: 16,
            name: "Термобелье Decathlon",
            description: "Недорогое термобелье для активных людей от Decathlon.",
            image: "path/to/thermal-decathlon.jpg",
            price: "399",  // Цена в BYN
            currency: "BYN",  // Валюта
            category: "Одежда",
            brand: "Decathlon"
        },
        {
            id: 17,
            name: "Рюкзак IKEA",
            description: "Простой и удобный рюкзак от IKEA, идеальный для города и путешествий.",
            image: "path/to/ikea-backpack.jpg",
            price: "999",  // Цена в BYN
            currency: "BYN",  // Валюта
            category: "Одежда",
            brand: "IKEA"
        },
        {
            id: 18,
            name: "Шарф Zara",
            description: "Теплый и стильный шарф от Zara для холодной погоды.",
            image: "path/to/scarf-zara.jpg",
            price: "299",  // Цена в BYN
            currency: "BYN",  // Валюта
            category: "Одежда",
            brand: "Zara"
        }
    ];
    
