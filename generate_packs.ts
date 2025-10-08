import csv from 'csv-parser';
import * as fs from 'fs';
import { Card } from './card.model';
import { SLOT_CONFIG_EOE_CUBE } from './slots';
import { generateFilter } from './filters';

const PACK_AMOUNT = 12;

const main = () => {
  const results = [];

  fs.createReadStream('./data/eoeset.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      processCardData(results);
    });
};

const validateCardData = (data: Card[]): boolean => {
  if (!Array.isArray(data) || data.length === 0) {
    console.error('No card data found or data is not an array.');
    return false;
  }
  return true;
};

const createPacks = (amount: number) => {
  return Array.from({ length: amount }, (_, i) => ({
    packNumber: i + 1,
    cards: [],
  }));
};

const filterCardsForSlot = (currentSet: Card[], slotConfigs: any[]): Card[] => {
  return slotConfigs.reduce((pv, cv) => {
    return generateFilter(pv, cv.filter, cv.filterMode, cv.filterValues);
  }, currentSet);
};

const pickAndRemoveRandomCard = (
  filteredCards: Card[],
  currentSet: Card[],
  pack: any,
  slotName: string
) => {
  if (filteredCards.length === 0) {
    console.error(
      `No cards available for slot ${slotName} in pack ${pack.packNumber}`
    );
    throw new Error('No card data found or data is not an array, exiting...');
  }
  const randomIndex = Math.floor(Math.random() * filteredCards.length);
  const selectedCard = filteredCards[randomIndex];
  const selectedCardIndex = currentSet.findIndex(
    (card) => card.name === selectedCard.name
  );
  if (selectedCardIndex !== -1) {
    currentSet.splice(selectedCardIndex, 1);
  } else {
    console.warn(
      `Selected card ${selectedCard.name} not found in current set for removal.`
    );
  }
  console.log(
    `picked card ${selectedCard.name} (${selectedCard.Rarity}) for pack ${pack.packNumber} for ${slotName}`
  );
  pack.cards.push(selectedCard.name);
};

const writePacksToFile = (packs: any[], cardsLeft: number) => {
  try {
    fs.mkdirSync('./output', { recursive: true });
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const outputFileName = `./output/generated_packs_${timestamp}.json`;
    fs.writeFileSync(outputFileName, JSON.stringify(packs, null, 2), 'utf-8');
    console.log(
      `Generated packs written to ./output/generated_packs_${timestamp}.json`
    );
    console.log('Cards left:', cardsLeft);
  } catch (err) {
    console.error('Error writing packs to file:', err);
  }
};

const processCardData = (data: Card[]) => {
  if (!validateCardData(data)) return;
  const currentSet = data;
  const currentPacks = createPacks(PACK_AMOUNT);

  SLOT_CONFIG_EOE_CUBE.forEach((slotConfigs, slotName) => {
    currentPacks.forEach((pack) => {
      console.log(`picking card for pack ${pack.packNumber} for ${slotName}`);
      try {
        const filteredCards = filterCardsForSlot(currentSet, slotConfigs);
        pickAndRemoveRandomCard(filteredCards, currentSet, pack, slotName);
      } catch (err) {
        console.error(
          `Error picking card for pack ${pack.packNumber} for ${slotName}:`,
          err
        );
        throw err;
      }
    });
  });

  writePacksToFile(currentPacks, currentSet.length);
};

main();
