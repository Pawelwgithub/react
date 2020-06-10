import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import {settings} from '../../data/dataStore';
//import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';

class Column extends React.Component {
  /*state = { // tylko i wyłącznie przy ustawianiu początkowego stanu można przypisać wartość do this.state za pomocą znaku równości =. Poza tym przypadkiem zawsze będziemy zmieniać stan za pomocą metody this.setState, odziedziczonej z klasy React.Component
    cards: this.props.cards || [], // operatora lub (||), jeśli this.props.columns nie zostało zdefiniowane, czyli komponent nie otrzymał propsa columns, to w this.state.columns znajdzie się pusta tablica []
  }*/

  static propTypes = {
    title: PropTypes.node.isRequired,
    cards: PropTypes.array,
    icon: PropTypes.node,
  }

  static defaultProps = { // definicja domyślnej wartości propsa icon
    icon: settings.defaultColumnIcon,
  }

  /*addCard(title){ // dodaj do this.state.cards nowy obiekt
    console.log(this);
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
            title,
          },
        ],
      }
    ));
  }*/
  
  render() {
    const { title, icon, cards } = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
          {title}
        </h3>
        <div>
          {/*
          {this.state.cards.map(({key, ...cardProps}) => ( // Metoda .map jest dostępna dla każdej tablicy (array). Służy ona do modyfikacji każdego jej elementu – ale zamiast zmieniać tablicę, na której została wykonana, zwraca nową tablicę ze zmienionymi wartościami
            <Card key={key} {...cardProps} /> // jeśli w pętlu lub metodzie .map generujemy komponent dla każdego elementu z tablicy, musimy jawnie przypisać klucz tego komponentu
          */}
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        {/*
        <div>
          <Creator
            text={settings.cardCreatorText}
            action={(title) => this.addCard(title)}
          />
        </div>
        */}
      </section>
    );
  }
}

export default Column;