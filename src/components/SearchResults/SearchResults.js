import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';
import Container from '../Container/Container';
import { settings } from '../../data/dataStore';

class SearchResults extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    icon: PropTypes.node,
    cards: PropTypes.array,
    addCard: PropTypes.func,
  };

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };

  render() {
    //console.log(this);
    const { title, icon, cards } = this.props;
    return (
      <Container>
        <section className={styles.component}>
          <h3 className={styles.title}>
            <span className={styles.icon}>
              <Icon name={icon} />
            </span>
            {title}
          </h3>
          <div>
            {cards.map((cardsData) => (
              <Card key={cardsData.id} {...cardsData} />
            ))}
          </div>
        </section>
      </Container>
    );
  }
}

export default SearchResults;