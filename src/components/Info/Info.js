import React from 'react';
import Container from '../Container/Container.js';
import styles from './Info.scss';
import Hero from '../Hero/Hero.js';
import { info } from '../../data/dataStore.js';

const Info = () => (
  <Container>
    <section className={styles.component}>
      <Hero 
        title={info.title} 
        image={info.image} 
        altImage={info.altImage} 
        titleImage={info.titleImage}
      />
      <div className={styles.description}>{info.description}</div>
      <div>
        {/*
        <h2>Info</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        */}
        <p>{info.context}</p>
      </div>
    </section>
  </Container>
);

export default Info;