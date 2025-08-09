import * as fs from 'fs';
import * as path from 'path';

const parseArgs = () => {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.error(
      'Usage: ts-node pick-packs.ts <generated_packs_file> <packNumber1> <packNumber2> ...'
    );
    process.exit(1);
  }
  const [packsFile, ...packNumbersRaw] = args;
  const packNumbers = packNumbersRaw.map(Number).filter((n) => !isNaN(n));
  if (packNumbers.length === 0) {
    console.error('No valid pack numbers provided.');
    process.exit(1);
  }
  return { packsFile, packNumbers };
};

const readPacksFile = (packsFile: string) => {
  try {
    const filePath = path.resolve(packsFile);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (err) {
    console.error('Error reading or parsing packs file:', err);
    process.exit(1);
  }
};

const printPackCards = (packs: any[], packNumbers: number[]) => {
  packNumbers.forEach((packNumber) => {
    const pack = packs.find((p: any) => p.packNumber === packNumber);
    if (!pack) {
      console.error(`Pack number ${packNumber} not found.`);
      return;
    }
    pack.cards.forEach((card: string) => {
      console.log(`${card}`);
    });
  });
};

const main = () => {
  const { packsFile, packNumbers } = parseArgs();
  const packs = readPacksFile(packsFile);
  printPackCards(packs, packNumbers);
};

main();
