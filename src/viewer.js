import React from 'react';
import { withStyles } from '@wix/native-components-infra/dist/es/src/HOC/withStyles/withStyles';
import styles from './styles.scss';

function App(props) {
  console.log(props);
  return (
    <div
      style={{ height: `${props.height}px`, backgroundColor: 'tomato' }}
      className={styles.hello}
    >
      Hello world
      <input onChange={ev => props.setHeight({ height: ev.target.value })} />
      <button onClick={() => props.hello(1)}>sup</button>
    </div>
  );
}

export default {
  component: withStyles(App, { cssPath: 'viewer.css' }),
};
