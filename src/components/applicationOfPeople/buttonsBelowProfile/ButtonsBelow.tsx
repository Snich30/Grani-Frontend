import style from "./buttonsBellowProfile.module.scss"


const ButtonsBellow = () =>{

    return (
        <section className={style.sectionButtonBelowProfile}>
            <div className={style.sectionButtonBelowProfile__ourButtons}>
                <button className={style.ourButtons__But} type='submit'>ПЕРЕВЕСТИ В ЛЕНДИНГ</button>
                <button className={style.ourButtons__But1} type='submit'>СКОПИРОВАТЬ ССЫЛКУ НА ЛЕНДИНГ</button>
            </div>
        </section>
    )
}
export default ButtonsBellow