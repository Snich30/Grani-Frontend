import style from './jumpButtonStep1.module.scss'
const JumpBottonStepOne = () => {
    return (
        <section className={style.JumpBottonStepOne}>
            <div className={style.JumpBottonStepOne__buttonStyleDiv}>
                <button className={style.buttonStyleDiv__b}><img className={style.buttonStyleDiv__img} src='icons/icons-application/Arrow.svg'/>Шаг 1 - Заполнение основной информации</button>
            </div>
        </section>
    )
}
export default JumpBottonStepOne