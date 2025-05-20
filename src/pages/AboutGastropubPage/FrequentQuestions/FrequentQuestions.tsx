import React, {useRef, useState} from 'react';
import FrequentQuestionsStyles from './FrequentQuestions.module.scss';
import {motion, useInView} from "framer-motion";

const questionsList = [
    {
        title: 'ЧЕМ ГАСТРОБАР ОТЛИЧАЕТСЯ ОТ БАРА ИЛИ РЕСТОРАНА?',
        description: 'Гастробар сочетает кулинарный креатив бара и ресторанное качество: авторские блюда с неожиданными сочетаниями (например, веганские тако или десерты салат с удоном), коктейли-эксперименты, крафт. Здесь можно пробовать, а не просто есть'
    },
    {
        title: 'ЧТО МОЖНО ЗАКАЗАТЬ ЕСЛИ Я ВЕГЕТАРИАНЕЦ?',
        description: 'В меню есть озиции с особым значком: грибной кебаб из маринованных шампиньонов, фалафель с соусом тахини, крейл с авокадо. Вы можете использовать фильтрацию в меню, чтобы посмотреть блюда для веганов и вегитарианцев'
    },
    {
        title: 'ГДЕ ВЫ НАХОДИТЕСЬ?',
        description: 'Наше заведение располагается в уютном дворике, в 10 минутах ходьбы от станции метро Чистые пруды, по адресу: Москва, Покровский бульвар, 14к2'
    },
    {
        title: 'У ВАС ЕЖЕДНЕВНО ПРОХОДЯТ МЕРОПРИЯТИЯ?',
        description: 'Да! Будни - шахматные турниры и лекции о вине, выходные - джазовые джемы и мастер-классы шеф-повара. На главной странице есть афиша событий на ближайший месяц, а так же дополнительная информация в наших социальных сетях!'
    },
    {
        title: 'МОЖНО ЛИ ПРОВЕСТИ У ВАС СВОЁ МЕРОПРИЯТИЕ?',
        description: 'Да: дни рождения, концерты, мастер-классы. Для связи с нами можете написать нам на почту culterblastmoscow@yandex.ru, или в любом удобном месенджере - @culterblastmocsow'
    },
    {
        title: 'ПОЧЕМУ У ВАС НЕТ ДОСТАВКИ?',
        description: 'Наше меню создано для особого гастрономического опыта, под атмосферу и события нашего заведения. Доставка не сможет передать этой магии. Приходите, покажем всё «вживую»!'
    },
    {
        title: 'МОЖНО ЛИ ПРИЙТИ К ВАМ БЕЗ БРОНИ СТОЛИКА?',
        description: 'Да! Если мест нет - встаньте в лист ожидания, предложим коктейль или закуску у барной стойки. Живая очередь - это тоже часть атмосферы, можно найти интересного собеседника или нового друга :)'
    },
];

const FrequentQuestions = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "0px 0px -30% 0px"
    });

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={FrequentQuestionsStyles.wrapper}>
            <div className={FrequentQuestionsStyles.leftStar}>
                <img src="/filterLeftStar.svg" alt="filterLeftStar" className={FrequentQuestionsStyles.leftStarItem} />
            </div>
            <motion.div
                className={FrequentQuestionsStyles.title}
                ref={ref}
                initial={{y: 100, opacity: 0}}
                animate={isInView ? {
                    y: 0,
                    opacity: 1,
                    top: '10%',
                    transition: {
                        type: "spring",
                        stiffness: 80,
                        damping: 10
                    }
                } : {}}
                style={{position: 'relative'}}
            >
                ЧАСТЫЕ ВОПРОСЫ
            </motion.div>
            <div className={FrequentQuestionsStyles.list}>
                {questionsList.map((el, index) => (
                    <div
                        key={index}
                        className={`${FrequentQuestionsStyles.item} ${openIndex === index ? FrequentQuestionsStyles.open : ''}`}
                    >
                        <button
                            className={FrequentQuestionsStyles.listTitle}
                            onClick={() => handleToggle(index)}
                            aria-expanded={openIndex === index}
                            type="button"
                        >
                            <span style={{color: 'black'}}>{el.title}</span>
                            <span className={FrequentQuestionsStyles.icon}>
                                {openIndex === index ? (
                                    <img
                                        src={'/frequentQuestionsCross.svg'}
                                        alt={'frequentQuestionsCross'}
                                        className={FrequentQuestionsStyles.iconCross}
                                    />

                                ) : (
                                    <img
                                        src={'/frequentQuestionsPlus.svg'}
                                        alt={'frequentQuestionsPlus'}
                                        className={FrequentQuestionsStyles.iconPlus}
                                    />
                                )}
                            </span>
                        </button>
                        <div className={FrequentQuestionsStyles.listDescription}>
                            {el.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FrequentQuestions;
