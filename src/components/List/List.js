import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
//import Column from '../Column/Column.js';
import Column from '../Column/ColumnContainer.js';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
//import Creator from '../Creator/Creator.js';


class List extends React.Component {
  /*state = { // tylko i wyłącznie przy ustawianiu początkowego stanu można przypisać wartość do this.state za pomocą znaku równości =. Poza tym przypadkiem zawsze będziemy zmieniać stan za pomocą metody this.setState, odziedziczonej z klasy React.Component
    columns: this.props.columns || [], // operatora lub (||), jeśli this.props.columns nie zostało zdefiniowane, czyli komponent nie otrzymał propsa columns, to w this.state.columns znajdzie się pusta tablica []
  }*/
  
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string.isRequired,
    altImage: PropTypes.string,
    titleImage: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  /*addColumn(title){ // dodaj do this.state.columns nowy obiekt
    this.setState(state => (
      {
        columns: [
          ...state.columns,
          {
            key: state.columns.length ? state.columns[state.columns.length-1].key+1 : 0,
            title,
            icon: 'list-alt',
            cards: [],
          },
        ],
      }
    ));
  }*/

  render() {
    const {title, image, altImage, titleImage, description, columns} = this.props;
    return (
      <section className={styles.component}>
        <Hero 
          titleText={title} 
          image={image} 
          altImage={altImage} 
          titleImage={titleImage}
        />
        <div className={styles.description}>
          {/*{this.props.description}*/}
          {ReactHtmlParser(description)}
        </div>
        <div className={styles.columns}>
          {/*
          <Column title="Animals" />
          <Column title="Plants" />
          <Column title="Minerals" />
          */}
          {/*
          {this.state.columns.map(({key, ...columnProps}) => ( // Metoda .map jest dostępna dla każdej tablicy (array). Służy ona do modyfikacji każdego jej elementu – ale zamiast zmieniać tablicę, na której została wykonana, zwraca nową tablicę ze zmienionymi wartościami
            <Column key={key} {...columnProps} /> // jeśli w pętlu lub metodzie .map generujemy komponent dla każdego elementu z tablicy, musimy jawnie przypisać klucz tego komponentu
          */}
          {columns.map(columnData => (
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>
        {/*
        <div className={styles.creator}>
          <Creator 
            text={settings.columnCreatorText} 
            action={title => this.addColumn(title)}
          />
        </div>
        */}
      </section>
    );
  }
}

export default List;
