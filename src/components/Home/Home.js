import React from 'react';
import styles from './Home.scss';
//import List from '../List/List.js';
//import List from '../List/ListContainer.js';
//import {pageContents, listData} from '../../data/dataStore';
import PropTypes from 'prop-types';
//import Search from '../Search/SearchContainer.js';
import ListLink from '../ListLink/ListLink.js';

class Home extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  };

  render() {
    const {title, subtitle, lists} = this.props;
    return (
      //<div>
      <main className={styles.component}>
        {/*<h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>Hello world!</h2>
        <List title={['Things to do', <sup key='1'>soon!</sup>]} 
        image={"http://uploads.kodilla.com/bootcamp/fer/11.react/space.png"} altImage={'Space'} titleImage={'Space'}>
        </List>*/}
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        {/*<Search />*/}
        {/*<List {...listData} />*/} {/*Jest to spread operator, który pozwala na rozpakowanie obiektu lub tablicy. Oznacza to, że wszystkie właściwości z listData zostaną przypisane do komponentu List, jako jego właściwości*/}
        {lists.map(listData => (
          //<List key={listData.id} {...listData} />
          <ListLink key={listData.id} {...listData} />
        ))}
      </main>
      //</div>
    );
  }
}

export default Home;
