import React, { useEffect, useState } from 'react';
import { Message } from '@nx-bidule/api-interfaces';
import { environment } from '../environments/environment';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    console.log('apiUrl:', environment.apiUrl);
    fetch(environment.apiUrl + '/api')
      .then(r => r.json())
      .then(setMessage);
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to bidule!</h1>
        <img
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png"
        />
      </div>
      <div>{m.message}</div>
    </>
  );
};

export default App;
