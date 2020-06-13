import React from 'react';
//import styles from './App.scss';
//import List from '../List/List.js';
//import List from '../List/ListContainer.js';
//import {pageContents, listData} from '../../data/dataStore';
//import PropTypes from 'prop-types';
//import Search from '../Search/SearchContainer.js';
import Home from '../Home/HomeContainer.js';
import Info from '../Info/Info.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout.js';

/*class App extends React.Component {
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
        */
{/*<h1 className={styles.title}>My first React app</h1>
<h2 className={styles.subtitle}>Hello world!</h2>
<List title={['Things to do', <sup key='1'>soon!</sup>]} 
image={"http://uploads.kodilla.com/bootcamp/fer/11.react/space.png"} altImage={'Space'} titleImage={'Space'}>
</List>*/}
/*
<h1 className={styles.title}>{title}</h1>
<h2 className={styles.subtitle}>{subtitle}</h2>
<Search />
*/
{/*<List {...listData} />*/} {/*Jest to spread operator, który pozwala na rozpakowanie obiektu lub tablicy. Oznacza to, że wszystkie właściwości z listData zostaną przypisane do komponentu List, jako jego właściwości*/}
/*
{lists.map(listData => (
  <List key={listData.id} {...listData} />
))}
      </main>
      //</div>
    );
  }
}*/

/* React Router */

const App = () => (
  /*<div>
    <Home />
  </div>*/
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/info' component={Info} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

/*React Router - plik App.js informuje aplikację, jakie komponenty powinna wyświetlić, gdy użytkownik znajduje 
się na określonej podstronie (lub, bardziej precyzyjnie, na określonej ścieżce, czyli path). Strona główna 
aplikacji będzie pokazywać komponent Home, a gdy na końcu adresu w przeglądarce dodamy /info, przeniesiemy się
na naszą nową stronę statyczną, atrybut exact, dzięki któremu dany widok pokaże się tylko wtedy, gdy będziemy 
na dokładnie takiej ścieżce, jak zdefiniowana w routingu (np. w drugim przypadku musi to być dokładnie /info, a
nie np. info/about-me)*/

export default App;
