import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TestConnection: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    axios.get('5.35.82.78:8080/swagger-ui/index.html#/User/loginUser')
      .then(() => {
        setIsConnected(true);
      })
      .catch(() => {
        setIsConnected(false);
      });
  }, []);

  return (
    <div>
      {isConnected ? (
        <p>Подключение к Swagger API установлено</p>
      ) : (
        <p>Не удалось установить подключение к Swagger API</p>
      )}
    </div>
  );
};

export default TestConnection;