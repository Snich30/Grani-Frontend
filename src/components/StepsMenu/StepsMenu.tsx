import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./StepsMenu.module.scss";
import StepsFooter from "./footer/StepsFooter";

interface Step {
  id: number;
  title: string;
  path: string;
}

const StepsMenu = () => {
  const navigate = useNavigate();

  const steps: Step[] = [
    { id: 1, title: "1 шаг-анкета", path: "/" },
    { id: 2, title: "2 шаг-бронь площадки", path: "/Cards-area" },
    { id: 3, title: "3 шаг-логистика", path: "/Booking-checklist" },
    { id: 4, title: "4 шаг-расписание", path: "/testConnection" },
    { id: 5, title: "5 шаг-документация", path: "/Checklist-documents"},
    { id: 6, title: "6 шаг-оплата", path: "/Settlement" },
    { id: 7, title: "7 шаг-инвентарь", path: "/Checklist-Inventory" },
    { id: 8, title: "8 шаг-турнирная сетка", path: "/Settlement" },
    { id: 9, title: "9 шаг-исполнители", path: "/Settlement" },
    { id: 10, title: "10 шаг-проведение выезда", path: "/Settlement" },
    { id: 11, title: "11 шаг-награждение", path: "/Awarding" },
    { id: 12, title: "12 шаг-отчёт о проведении", path: "/Completion-check-out" },
  ];

  const activeStepId = steps.find(
    (step) => location.pathname === step.path
  )?.id;
  const [activeStep, setActiveStep] = useState<number | null>(
    activeStepId || null
  );

  const handleStepClick = (stepPath: string, stepId: number) => {
    setActiveStep(stepId);
    navigate(stepPath, { replace: true });
  };

  const handleStepMouseEnter = (stepId: number) => {
    setActiveStep(stepId);
  };

  const handleStepMouseLeave = () => {
    setActiveStep(activeStepId || null);
  };

  return (
    <section>
      <div className={styles.mainMenu}>
        <div className={styles.mainMenu__mainIcon}>
          <img src="icons/icons-steps-menu/main-icon2_StepsMenu.svg" alt="" />
          <h1 className={styles.mainMenu__mainTitle}>
            МОИ <br />
            ГРАНИ
          </h1>
        </div>
        <h2 className={styles.mainMenu__title}>
          Конструктор спортивных <br />
          поездок
        </h2>
        <div className={styles.mainMenu__menuSteps}>
          {steps.map((step) => (
            <div
              key={step.id}
              className={`${styles.menuSteps__steps} ${
                activeStep === step.id ? styles.activeStep : ""
              } ${activeStep === step.id ? styles.whiteBackground : ""}`}
              onMouseEnter={() => handleStepMouseEnter(step.id)}
              onMouseLeave={handleStepMouseLeave}
            >
              <img
                className={styles.menuSteps__iconStep}
                src={`icons/icons-steps-menu/icons-steps/Icon-step${step.id}.svg`}
                alt=""
              />
              <a
                className={styles.menuSteps__text}
                href="#"
                onClick={() => handleStepClick(step.path, step.id)}
              >
                <span className={styles.text__underline}>{step.title}</span>
              </a>
            </div>
          ))}
          <button className={styles.menuSteps__btnExit}>
            выйти
            <hr className={styles.btnExit__hr} />
          </button>
        </div>

        <StepsFooter />
      </div>
    </section>
  );
};

export default StepsMenu;

// import styles from "./StepsMenu.module.scss";
// import StepsFooter from "./footer/StepsFooter";

// const StepsMenu = () => {
//   return (
//     <section>
//       <div className={styles.mainMenu}>
//         <div className={styles.mainMenu__mainIcon}>
//           <img src="icons/icons-steps-menu/main-icon2_StepsMenu.svg" alt="" />
//           <h1 className={styles.mainMenu__mainTitle}>
//             МОИ <br />
//             ГРАНИ
//           </h1>
//         </div>
//         <h2 className={styles.mainMenu__title}>
//           Конструктор спортивных <br />
//           поездок
//         </h2>
//         <div className={styles.mainMenu__menuSteps}>
//         <div className={styles.menuSteps__steps}>
//           <img className={styles.menuSteps__iconStep} src="icons/icons-steps-menu/icons-steps/Icon-step1.svg" alt="" />
//           <a className={styles.menuSteps__text} href="#">
//             <span className={styles.text__underline}>1 шаг-анкета</span>
//           </a>
//         </div>
//           <div className={styles.menuSteps__steps}>
//             <img className={styles.menuSteps__iconStep} src="icons/icons-steps-menu/icons-steps/Icon-step2.svg" alt="" />
//             <a className={styles.menuSteps__text} href="#">
//               <span className={styles.text__underline}onClick={() => window.location.href = '/Cards-area'}>2 шаг-бронь площадки</span>
//             </a>
//           </div>
//           <div className={styles.menuSteps__steps}>
//             <img className={styles.menuSteps__iconStep} src="icons/icons-steps-menu/icons-steps/Icon-step3.svg" alt="" />
//             <a className={styles.menuSteps__text} href="#">
//               <span className={styles.text__underline} onClick={() => window.location.href = '/Settlement'}>3 шаг-логистика</span>
//             </a>
//           </div>
//           <div className={styles.menuSteps__steps}>
//             <img className={styles.menuSteps__iconStep} src="icons/icons-steps-menu/icons-steps/Icon-step4.svg" alt="" />
//             <a className={styles.menuSteps__text} href="#">
//               <span className={styles.text__underline}>4 шаг-расписание</span>
//             </a>
//           </div>
//           <div className={styles.menuSteps__steps}>
//             <img className={styles.menuSteps__iconStep} src="icons/icons-steps-menu/icons-steps/Icon-step5.svg" alt="" />
//             <a className={styles.menuSteps__text} href="#">
//               <span className={styles.text__underline}>5 шаг-документация</span>
//             </a>
//           </div>
//           <div className={styles.menuSteps__steps}>
//             <img className={styles.menuSteps__iconStep} src="icons/icons-steps-menu/icons-steps/Icon-step10.svg" alt="" />
//             <a className={styles.menuSteps__text} href="#">
//               <span className={styles.text__underline}>6 шаг-оплата</span>
//             </a>
//           </div>
//           <div className={styles.menuSteps__steps}>
//             <img className={styles.menuSteps__iconStep} src="icons/icons-steps-menu/icons-steps/Icon-step7.svg" alt="" />
//             <a className={styles.menuSteps__text} href="#">
//               <span className={styles.text__underline}>7 шаг-инвентарь</span>
//             </a>
//           </div>
//           <div className={styles.menuSteps__steps}>
//             <img className={styles.menuSteps__iconStep} src="icons/icons-steps-menu/icons-steps/Icon-step8.svg" alt="" />
//             <a className={styles.menuSteps__text} href="#">
//               <span className={styles.text__underline}>8 шаг-турнирная сетка</span>
//             </a>
//           </div>
//           <div className={styles.menuSteps__steps}>
//             <img className={styles.menuSteps__iconStep} src="icons/icons-steps-menu/icons-steps/Icon-step9.svg" alt="" />
//             <a className={styles.menuSteps__text} href="#">
//               <span className={styles.text__underline}>9 шаг-исполнители</span>
//             </a>
//           </div>
//           <div className={styles.menuSteps__steps}>
//             <img className={styles.menuSteps__iconStep} src="icons/icons-steps-menu/icons-steps/Icon-step10.svg" alt="" />
//             <a className={styles.menuSteps__text} href="#">
//               <span className={styles.text__underline}>10 шаг-проведение выезда</span>
//             </a>
//           </div>
//           <div className={styles.menuSteps__steps}>
//             <img className={styles.menuSteps__iconStep} src="icons/icons-steps-menu/icons-steps/Icon-step10.svg" alt="" />
//             <a className={styles.menuSteps__text} href="#">
//               <span className={styles.text__underline}>11 шаг-награждение</span>
//             </a>
//           </div>
//           <div className={styles.menuSteps__steps}>
//             <img className={styles.menuSteps__iconStep} src="icons/icons-steps-menu/icons-steps/Icon-step10.svg" alt="" />
//             <a className={styles.menuSteps__text} href="#">
//               <span className={styles.text__underline}>12 шаг-отчёт о проведении</span>
//             </a>
//           </div>
//           <button className={styles.menuSteps__btnExit}>
//             выйти
//             <hr className={styles.btnExit__hr} />
//           </button>
//         </div>

//       <StepsFooter/>
//       </div>
//     </section>
//   );
// };
// export default StepsMenu;
