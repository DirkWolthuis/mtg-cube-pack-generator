import csv from 'csv-parser';
import * as fs from 'fs';
import { Card } from './card.model';
import { SLOT_CONFIG } from './slots';
import { generateFilter } from './filters';

const results = [];

const PACK_AMOUNT = 12;

fs.createReadStream('./data/eoeset.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    processCardData(results);
  });

const processCardData = (data: Card[]) => {
  if (!Array.isArray(data) || data.length === 0) {
    console.error('No card data found or data is not an array.');
    return;
  }

  const currentSet = data;
  const currentPacks = Array.from({ length: PACK_AMOUNT }, (_, i) => ({
    packNumber: i + 1,
    cards: [],
  }));

  // for each card in the pack, loop over each pack and pick a random card from the filtered cards
  // Then delete that card from the array so it can't be picked again

  SLOT_CONFIG.forEach((slotConfigs, slotName) => {
    currentPacks.forEach((pack) => {
      const filteredCards = slotConfigs.reduce((pv, cv) => {
        return generateFilter(pv, cv.filter, cv.filterMode, cv.filterValues);
      }, currentSet);
      console.log(`picking card for pack ${pack.packNumber} for ${slotName}`);

      if (filteredCards.length === 0) {
        throw new Error(
          'No card data found or data is not an array, existing...'
        );
      }
      const randomIndex = Math.floor(Math.random() * filteredCards.length);
      const selectedCard = filteredCards[randomIndex];

      // delete selected card from current set
      const selectedCardIndex = currentSet.findIndex(
        (card) => card.name === selectedCard.name
      );
      if (selectedCardIndex !== -1) {
        currentSet.splice(selectedCardIndex, 1);
      }

      console.log(
        `picked card ${selectedCard.name} (${selectedCard.Rarity}) for pack ${pack.packNumber} for ${slotName}`
      );
      pack.cards.push(selectedCard.name);
    });
  });

  // write currentPacks to a json file in the output subdir
  fs.mkdirSync('./output', { recursive: true });
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const outputFileName = `./output/generated_packs_${timestamp}.json`;
  fs.writeFileSync(
    outputFileName,
    JSON.stringify(currentPacks, null, 2),
    'utf-8'
  );
  console.log('Generated packs written to ./output/generated_packs.json');
  console.log('Cards left:', currentSet.length);
};
