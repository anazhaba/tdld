import fs from 'fs';
import path from 'path';
export function getFiles2(directory: string): { name: string; path: string }[] {
  const files = fs.readdirSync(directory);


  return files.map((file) => ({
    name: file,
    path: path.join('/mods/lastUpdate', file)
    
  }));
}