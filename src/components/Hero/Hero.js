import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Hero = props => (
  <header className={styles.component}>
    {/*<h2 className={styles.title}>{props.titleText}</h2>*/}
    {/*<h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>*/}
    <h2 className={styles.title}>{ReactHtmlParser(props.title)}</h2>
    <img className={styles.image} src={props.image} alt={props.altImage} title={props.titleImage} />
  </header>
);

Hero.propTypes = {
  //titleText: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
  altImage: PropTypes.string,
  titleImage: PropTypes.string,
};

export default Hero;