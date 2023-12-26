import style from './travelChapter.module.scss'
import React,{useState} from 'react';
import InputAmount from '../InpuAmount/InputAmount';

const TravelChapter :React.FC = () => {
    const [amount, setAmount] = useState<string>('');
  
    return (
        <section className={style.travelChapter}>
            <div className={style.travelChapter__travelHeader}>
                <h1 className={style.travelHeader__titleTravel}>Поездка 1</h1>
                <div className={style.travelHeader__editTravel}>
                    <img className={style.editTravel__editIcoTravel} src="icons/icons-application/editIco.svg" />
                    <a className={style.editTravel__TextEditTravel} href='#'>Редактировать</a>
                </div>
            </div>

            <div className={style.travelChapter__tripDetails}>

                <div className={style.tripDetails__con1}>
                    <div className={style.con1__photoTrip}><p>Добавть фото</p></div>
                </div>

                <div className={style.tripDetails__con2}>

                    <div className={style.con2__details}>
                        <p className={style.details__par}>Вид спорта</p>
                        <select className={style.details__inp} />
                    </div>

                    <div className={style.con2__details}>
                        <p className={style.details__par}>Категория выезда</p>
                        <input className={style.details__inp} />
                    </div>

                    <div className={style.con2__details}>
                        <p className={style.details__par}>Дата поездки</p>
                        <input type='date' className={style.details__inp} />
                    </div>

                    <div className={style.con2__details}>
                        <p className={style.details__par}>Примерная стоимость</p>
                        {/*<input className={style.details__inp} />*/}
                        <InputAmount value={amount} onChange={setAmount} />
                    </div>

                    <div className={style.con2__details}>
                        <p className={style.details__par}>Примерное место положения</p>
                        <input className={style.details__inp} />
                    </div>

                    <div className={style.con2__details}>
                        <p className={style.details__par}>Нужен ли фотограф?</p>
                        <input className={style.details__inp} />
                    </div>

                    <div className={style.con2__details}>
                        <p className={style.details__par}>Примерное расписание поездки</p>
                        <input className={style.details__inp1} />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default TravelChapter