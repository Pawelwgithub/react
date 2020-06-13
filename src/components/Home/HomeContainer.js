import {connect} from 'react-redux';
import Home from './Home.js';

const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
});

export default connect(mapStateToProps)(Home);

{/* Plik AppContainer.js zajmuje się przekazaniem danych ze stanu aplikacji jako propsów komponentu App.
    Pozwoli nam to na oddzielenie warstwy współpracującej ze stanem od samego komponentu.
    Wszystko, co trzeba o nim wiedzieć, to:
    - importuje komponent, dla którego jest kontenerem – w tym wypadku App,
    - w stałej mapStateToProps zapisujemy funkcję, która definiuje powiązanie propsów z stanem,
    - wyrażenie, które eksportujemy na końcu pliku, jest odpowiedzialne za połączenie komponentu App z magazynem, 
    czyli sprawia, że wszystko działa, w ostatniej parze nawiasów musimy podać komponent, który jest wykorzystywany w tym kontenerze.*/}

{/* Funkcja connect, zaimportowana z react-redux, zwraca funkcję, która łączy komponent ze stanem, 
    zgodnie z przekazanymi argumentami, czyli mapStateToProps. Tę zwróconą funkcję od razu wykonujemy 
    z argumentem App. Wynik tego wykonania funkcji zwracanej przez wykonanie funkcji jest eksportowany 
    i może być wykorzystany w innych komponentach tak samo, jakby był to komponent App. */}
