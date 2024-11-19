import fs from 'fs';
import path from 'path';

export function getFiles(directory: string): { name: string; path: string }[] {
    const files = fs.readdirSync(directory)
        .filter(file => {
            const fullPath = path.join(directory, file);
            return fs.statSync(fullPath).isFile();
        });
    
    return files.map((file) => ({ 
        name: file, 
        path: path.join('/mods', file) 
    }));
}
