import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

function Splash() {
  const [percent, SetPercent] = useState(0);
  const history = useHistory();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if (percent < 100) {
        setInterval(() => SetPercent(100), 3000);
      } else {
        setInterval(() => SetPercent(101), 3000);
        if (percent === 101) history.push('/signin');
      }
    }

    return () => { isMounted = false; };
  }, [percent, history]);

  return (
    <div className="flex m-auto min-h-screen splash">
      <img className="m-auto " src="../assets/logo.png" alt="Fix" />
    </div>
  );
}

export default Splash;
