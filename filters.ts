import { Card } from './card.model';

export enum FILTER {
  RARITY,
  TYPE,
}

export enum FILTER_MODE {
  INCLUDE,
  EXCLUDE,
}

export const generateFilter = (
  cards: Card[],
  filterType: FILTER,
  filterMode: FILTER_MODE,
  filterValue: string[]
): Card[] => {
  switch (filterType) {
    case FILTER.RARITY:
      return filterOnRarity(cards, filterMode, filterValue);
    case FILTER.TYPE:
      return filterOnType(cards, filterMode, filterValue);
    default:
      throw new Error(`Unknown filter type: ${filterType}`);
  }
};

const filterOnRarity = (
  cards: Card[],
  filterMode: FILTER_MODE,
  raritiesToMatch: string[]
): Card[] => {
  if (filterMode === FILTER_MODE.INCLUDE) {
    return cards.filter((card) =>
      raritiesToMatch
        .map((rarity) => rarity.toLowerCase())
        .includes(card.Rarity.toLowerCase())
    );
  }
  return cards.filter((card) => !raritiesToMatch.includes(card.Rarity));
};

const filterOnType = (
  cards: Card[],
  filterMode: FILTER_MODE,
  typesToMatch: string[]
): Card[] => {
  if (filterMode === FILTER_MODE.INCLUDE) {
    return cards.filter((card) =>
      typesToMatch.some((type) =>
        card.Type.toLowerCase().includes(type.toLowerCase())
      )
    );
  }
  return cards.filter(
    (card) =>
      !typesToMatch.some((type) =>
        card.Type.toLowerCase().includes(type.toLowerCase())
      )
  );
};
