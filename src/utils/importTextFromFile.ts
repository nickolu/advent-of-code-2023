import * as fs from 'fs';
import * as path from 'path';

export default function importTextFromFile(
  dir: string = __dirname,
  filePath: string,
): string {
  return fs.readFileSync(path.resolve(dir, filePath), 'utf8');
}
