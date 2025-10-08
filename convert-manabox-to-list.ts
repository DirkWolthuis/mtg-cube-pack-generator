import * as fs from 'fs';

const inputFile = './data/cube.csv';
const outputFile = './output/cube_list.txt';

const csv = fs.readFileSync(inputFile, 'utf8');
const lines = csv.split('\n');
const [header, ...rows] = lines;
const headers = header.split(',');

function getIndex(name: string) {
  return headers.indexOf(name);
}

const nameIdx = getIndex('Name');
const qtyIdx = getIndex('Quantity');
const setIdx = getIndex('Set code');

const output: string[] = [];

rows.forEach((row) => {
  if (!row.trim()) return;
  const cols = row.split(',');
  let name = cols[nameIdx]?.split('//')[0].trim();
  let qty = cols[qtyIdx];
  let set = cols[setIdx];
  if (name && qty && set) {
    output.push(`${qty}x ${name} (${set})`);
  }
});

fs.writeFileSync(outputFile, output.join('\n'));
console.log(`Output written to ${outputFile}`);
