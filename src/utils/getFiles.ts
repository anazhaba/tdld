import fs from 'fs';
import path from 'path';

export function getFiles(directory: string): { name: string; path: string }[] {
  const files = fs.readdirSync(directory);

  return files.map((file) => ({
    name: file,
    path: path.join('/download', file) // Создание ссылки на скачивание файла
  }));
}