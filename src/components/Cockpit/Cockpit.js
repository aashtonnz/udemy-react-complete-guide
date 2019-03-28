import React, { useEffect, useRef, useContext } from 'react';
import AuthContext from '../../context/auth-context';
import classes from './Cockpit.css'

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request...
    // setTimeout(() => alert('Data loaded from cloud!'), 1000);
    // const timer = setTimeout(() => alert('Data loaded from cloud!'), 1000);
    toggleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js] Cleanup work in useEffect');
      // clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => console.log('[Cockpit.js] Cleanup work in 2nd useEffect');
  });

  const assignedClasses = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        ref={toggleBtnRef}
        className={btnClass}
        onClick={props.clicked}>
        Toggle Persons
      </button>
      <button onClick={authContext.login}>Login</button>
    </div>
  );
};

export default React.memo(cockpit);