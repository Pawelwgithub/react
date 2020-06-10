// selectors
export const getSearchString = ({searchString}) => searchString;
export const countAllCards = ({cards}) => cards.length;
export const countVisibleCards = ({cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;

// action name creator
const reducerName = 'searchString';
const createActionName = (name) => `app/${reducerName}/${name}`;

// actions types
export const FILTER_CARDS = createActionName('FILTER_CARDS');

// action creators
export const createAction_changeSearchString = payload => ({ payload, type: FILTER_CARDS });

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case FILTER_CARDS:
      return [action.payload];
    default:
      return statePart;
  }
}

