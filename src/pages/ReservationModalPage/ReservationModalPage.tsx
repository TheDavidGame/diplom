import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReservationModalPageStyles from './ReservationModalPage.module.scss';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users } from 'react-feather';

const ReservationModalPage = () => {

    const navigate = useNavigate();

    const [people, setPeople] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    const [errors, setErrors] = useState({
        people: false,
        date: false,
        time: false,
        email: false,
    });

    const handleSubmit = () => {
        const newErrors = {
            people: !people,
            date: !date,
            time: !time,
            email: !email || !/\S+@\S+\.\S+/.test(email),
        };
        setErrors(newErrors);

        const hasErrors = Object.values(newErrors).some(Boolean);
        if (!hasErrors) {
            navigate('/reservationDone');
        }
    };

    return (
        <div className={ReservationModalPageStyles.wrapper}>
            <div className={ReservationModalPageStyles.close} onClick={() => navigate('/')}>
                <img src="/frequentQuestionsCross.svg" alt="close" className={ReservationModalPageStyles.closeItem} />
            </div>
            <div className={ReservationModalPageStyles.leftStar}>
                <img src="/filterLeftStar.svg" alt="filterLeftStar" className={ReservationModalPageStyles.leftStarItem} />
            </div>
            <div className={ReservationModalPageStyles.rightStar}>
                <img src="/filterRightStar.svg" alt="filterRightStar" className={ReservationModalPageStyles.rightStarItem} />
            </div>

            <div className={ReservationModalPageStyles.top}>
                <div className={ReservationModalPageStyles.topTitle}>БРОНИРОВАНИЕ</div>
            </div>

            <motion.div
                className={ReservationModalPageStyles.selectorContainer}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className={`${ReservationModalPageStyles.selector} ${errors.people ? ReservationModalPageStyles.error : ''}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Users className={ReservationModalPageStyles.selectorIcon} />
                    <select value={people} onChange={(e) => setPeople(e.target.value)} className={ReservationModalPageStyles.select}>
                        <option value="">Выберите</option>
                        {[1,2,3,4,5,6].map(num => (
                            <option key={num} value={num}>{num} человек</option>
                        ))}
                    </select>
                </motion.div>

                <motion.div
                    className={`${ReservationModalPageStyles.selector} ${errors.date ? ReservationModalPageStyles.error : ''}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ delay: 0.1 }}
                >
                    <Calendar className={ReservationModalPageStyles.selectorIcon} />
                    <input
                        type="date"
                        className={ReservationModalPageStyles.dateInput}
                        min={new Date().toISOString().split('T')[0]}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </motion.div>

                <motion.div
                    className={`${ReservationModalPageStyles.selector} ${errors.time ? ReservationModalPageStyles.error : ''}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ delay: 0.2 }}
                >
                    <Clock className={ReservationModalPageStyles.selectorIcon} />
                    <select value={time} onChange={(e) => setTime(e.target.value)} className={ReservationModalPageStyles.select}>
                        <option value="">Выберите</option>
                        {['17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'].map(t => (
                            <option key={t} value={t}>{t}</option>
                        ))}
                    </select>
                </motion.div>
            </motion.div>

            <div className={`${ReservationModalPageStyles.emailField} ${errors.email ? ReservationModalPageStyles.error : ''}`}>
                <input
                    type="email"
                    placeholder="Введите email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className={ReservationModalPageStyles.commentField}>
                <textarea
                    placeholder="Комментарий (необязательно)"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
            </div>

            <div className={ReservationModalPageStyles.submit}>
                <div className={ReservationModalPageStyles.submitBtn} onClick={handleSubmit}>
                    <img
                        src="/filterSubmitBtn.svg"
                        alt="filterSubmitBtn"
                        className={ReservationModalPageStyles.submitBtnItem}
                    />
                </div>
            </div>
        </div>
    );
};

export default ReservationModalPage;
