import React from 'react';
import Container from '../Container/Container.js';
import styles from './FAQ.scss';
import Hero from '../Hero/Hero.js';
import { faqData } from '../../data/dataStore.js';

const FAQ = () => (
  <Container>
    <section className={styles.component}>
      <Hero
        title={faqData.title}
        image={faqData.image}
        altImage={faqData.altImage}
        titleImage={faqData.titleImage}
      />
      <div className={styles.description}>{faqData.description}</div>
      <div>
        <p>{faqData.context}</p>
      </div>
    </section>
  </Container>
);
  
export default FAQ;
