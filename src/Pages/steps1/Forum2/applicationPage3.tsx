import FaqPage3 from './FAQPage3/faqPage3'
import ApplicationForm3 from './applicationForm3/applicationForm3'
import style from './applicationPage3.module.scss'


const ApplicationPage3 = () => {
    return (
        <section className={style.applicationPage3}>

            <div className={style.applicationPage3__mainImg}></div>

            <div className={style.applicationPage3__TitlePage3}>
                <h1 className={style.TitlePage3__h1}>Спортивные сборы по футболу</h1>
                <h3 className={style.TitlePage3__h3}>с 10 по 13 Сентября </h3>
            </div>

            <ApplicationForm3 />

            <div className={style.applicationPage3__butBotton}>
                <button className={style.butBotton__buB}>Оплатить <br/> 15.000 рублей</button>
            </div>
            <FaqPage3/>
        </section>
    )
}
export default ApplicationPage3