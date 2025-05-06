import {Dish} from "../../../../entity/index.entity";

export const eventsFood: Dish[] = [
    {
        id: 1,
        title: 'САКСАФОННЫЕ \n СЛАЙДЕРЫ',
        subTitle: 'Мини-бургеры с говядиной и \n сыром, с запеченными овощами',
        price: 400,
        weight: 250,
        src: '/menuFood/menuFood1.svg',
        hiddenFor: ['vegetarian', 'vegan']
    },
    {
        id: 2,
        title: 'ЛУИ АРМСТРОНГ \n ДЖАМБАЛАЙЯ',
        subTitle: 'Острый рис с колбасой, \n курицей, приготовленный по \n кулинарным традициям \n Луизианы',
        price: 400,
        weight: 250,
        src: '/menuFood/menuFood2.svg',
        hiddenFor: ['vegetarian', 'vegan', 'spicy']
    },
    {
        id: 3,
        title: 'ДЮК ЭЛЛИНГТОН \n ЧИЗКЕЙК',
        subTitle: 'Кремовый чизкейк с лимонным \n вкусом и свежими ягодами',
        price: 400,
        weight: 250,
        src: '/menuFood/menuFood3.svg',
        hiddenFor: ['vegetarian', 'vegan']
    },
    {
        id: 4,
        title: 'ДЖАЗОВЫЙ МУЛ',
        subTitle: 'Коктейль на основе джина с \n имбирным пивом и лаймом',
        price: 400,
        weight: 250,
        src: '/menuFood/menuFood4.svg'
    },
    {
        id: 5,
        title: 'СИНКОПИРОВАННЫЙ \n САУЭР',
        subTitle: 'Кислый виски-коктейль с \n цитрусовым вкусом',
        price: 400,
        weight: 250,
        src: '/menuFood/menuFood5.svg'
    },
    {
        id: 6,
        title: 'ГРИБНЫЕ КАПЕЛЬКИ',
        subTitle: 'Хрустящие грибные крокеты с \n чесночным майонезом.',
        price: 400,
        weight: 250,
        src: '/menuFood/menuFood6.svg'
    },
    {
        id: 7,
        title: 'КАРРИ САКАМОТО ',
        subTitle: 'Курица в соусе карри, подаётся с \n гарниром из риса басмати',
        price: 400,
        weight: 250,
        src: '/menuFood/menuFood7.svg',
        hiddenFor: ['vegetarian', 'vegan']
    }
];

export const mainFood: Dish[] = [
    {
        id: 1,
        title: 'ЧЕВАПЧИМИЧИ',
        subTitle: 'Маленькие колбаски из \n говядины, обжаренные на гриле ',
        price: 400,
        weight: 250,
        src: '/mainFood/mainFood1.svg',
        hiddenFor: ['vegetarian', 'vegan']
    },
    {
        id: 2,
        title: 'ЧИЛИ ЧИКЕН',
        subTitle: 'Обжаренная курица в остром \n чили соусе, с овощами гриль',
        price: 400,
        weight: 250,
        src: '/mainFood/mainFood2.svg',
        hiddenFor: ['vegetarian', 'vegan', 'spicy']
    },
    {
        id: 3,
        title: 'ВЕСТЕРН БОУНС',
        subTitle: 'Запечёная баранина на кости, с зеленью и кавказскими травами',
        price: 400,
        weight: 250,
        src: '/mainFood/mainFood3.svg',
        hiddenFor: ['vegetarian', 'vegan']
    },
    {
        id: 4,
        title: 'ПАТАТА ОЛИВ',
        subTitle: 'Веганские оладьи из картофеля \n с соусом на растительной основе',
        price: 400,
        weight: 250,
        src: '/mainFood/mainFood4.svg'
    },
    {
        id: 5,
        title: 'ГРИБНОЙ КЕБАБ',
        subTitle: 'Шампиньоны, маринованные в  \n смеси восточных пряностей и \n трав, обжаренные на гриле',
        price: 400,
        weight: 250,
        src: '/mainFood/mainFood5.svg'
    },
    {
        id: 6,
        title: 'ФАЛАФЕЛЬ С ТАХИНИ СОУСОМ',
        subTitle: 'Хрустящий фалафель с нутом, овощами и кремовым соусом',
        price: 400,
        weight: 250,
        src: '/mainFood/mainFood6.svg',
        hiddenFor: ['nuts', 'tomatoes']
    },
    {
        id: 7,
        title: 'МЕКСИКАНСКАЯ ФИЕСТА',
        subTitle: 'Тако-клэм, тако сиера, тако луэс, чили чикен, \n соус тайхо, и напиток на выбор',
        price: 400,
        weight: 250,
        src: '/mainFood/mainFood7.svg',
        hiddenFor: ['vegetarian', 'vegan', 'spicy']
    }
];

export const saladsFood: Dish[] = [
    {
        id: 1,
        title: 'МЕХИКО',
        subTitle: 'Курица, обжаренная с перцем и луком, авокадо, помидоры, сыр, и заправка из сальсы',
        price: 400,
        weight: 250,
        src: '/snacksFood/snacksFood1.svg',
        hiddenFor: ['spicy', 'onion', 'sesame', 'tomatoes']
    },
    {
        id: 2,
        title: 'ГРИБНОЙ САЛАТ',
        subTitle: 'Грибы, обжаренные с чесноком, помидоры, зелень, соевый соус',
        price: 400,
        weight: 250,
        src: '/snacksFood/snacksFood2.svg',
        hiddenFor: ['soy', 'tomatoes']
    },
    {
        id: 3,
        title: 'SEAGULL SALAD',
        subTitle: 'Жареные креветки, рисовая лапша, чука, стручковый горошек, имбирная заправка',
        price: 400,
        weight: 250,
        src: '/snacksFood/snacksFood3.svg',
        hiddenFor: ['seafood']
    },
    {
        id: 4,
        title: 'КРЕЙЛ',
        subTitle: 'Черная фасоль, кукуруза, помидоры и авокадо, смешанные с зеленью и заправленные сальсой',
        price: 400,
        weight: 250,
        src: '/snacksFood/snacksFood4.svg',
        hiddenFor: ['beans', 'tomatoes']
    }
];

export const snacksFood: Dish[] = [
    {
        id: 1,
        title: 'ТАКО-КЛЭМ',
        subTitle: 'Веганские тако с красной фасолью, томатным соусом и авокадо',
        price: 400,
        weight: 250,
        src: '/snacksFood/snacksFood1.svg',
        hiddenFor: ['beans']
    },
    {
        id: 2,
        title: 'ТАКО СИЕРА',
        subTitle: 'Острые куриные тако с чили соусом и свежими травами',
        price: 400,
        weight: 250,
        src: '/snacksFood/snacksFood2.svg',
        hiddenFor: ['spicy', 'vegetarian', 'vegan']
    },
    {
        id: 3,
        title: 'ТАКО ЛУЭС',
        subTitle: 'Сытные говяжьи тако с морковью, луком, и чили',
        price: 400,
        weight: 250,
        src: '/snacksFood/snacksFood3.svg',
        hiddenFor: ['spicy', 'vegetarian', 'vegan', 'onion']
    },
    {
        id: 4,
        title: 'КУРИНЫЕ ПАЛОЧКИ',
        subTitle: 'Хрустящие куриные палочки в остром чили соусе.',
        price: 400,
        weight: 250,
        src: '/snacksFood/snacksFood4.svg',
        hiddenFor: ['vegetarian', 'vegan',]
    },
    {
        id: 5,
        title: 'СЫРНЫЕ ПИРОЖКИ С КУРИЦЕЙ',
        subTitle: 'Пирожки с начинкой из курицы и сыра, обжаренные в остром кляре.',
        price: 400,
        weight: 250,
        src: '/snacksFood/snacksFood5.svg',
        hiddenFor: ['vegetarian', 'vegan',]
    },
    {
        id: 6,
        title: 'НАЧОС',
        subTitle: 'Кукурузные чипсы: Чили-Лайм / Паприка / Карри',
        price: 400,
        weight: 250,
        src: '/snacksFood/snacksFood6.svg'
    }
];