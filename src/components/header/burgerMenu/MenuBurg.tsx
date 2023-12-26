import React, { useState } from 'react';
import styles from './MenuBurg.module.scss';

const HiddenMenu: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className={styles.hiddenMenu}>
      <div className={`${styles.menuIcon} ${menuVisible ? styles.active : ''}`} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <div className={`${styles.menuContent} ${menuVisible ? styles.visible : ''}`}>
        <ul>
          <li>Пункт 1</li>
          <li>Пункт 2</li>
          <li>Пункт 3</li>
        </ul>
      </div>
    </div>
  );
};

export default HiddenMenu;
