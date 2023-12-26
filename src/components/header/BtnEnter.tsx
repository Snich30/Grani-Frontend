import React, { useState } from 'react';
import styles from './header.module.scss';

interface LoginModalProps {
  onClose: () => void;
  onLogin: (email: string, password: string) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      setErrorMessage('Пожалуйста, введите email и пароль');
    } else {
      setErrorMessage('');
      onLogin(email, password);
      onClose();
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>&times;</span>
        <h2 className={styles.titleModal}>Вход</h2>
        <input
          className={styles.inputField}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={styles.inputField}
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        <button className={styles.btnSaveReg} onClick={handleLogin}>Войти</button>
      </div>
    </div>
  );
};

const LoginButton: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleLogin = (email: string, password: string) => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div>
      <button className={styles.btnLogin} onClick={handleButtonClick}>
        <span>Вход</span>
        <img src="icons/icons-header/iconEnter.svg" alt="" />
      </button>
      {showModal && <LoginModal onClose={handleCloseModal} onLogin={handleLogin} />}
    </div>
  );
};

export default LoginButton;
