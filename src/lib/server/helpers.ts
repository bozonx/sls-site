import path from 'node:path';
import fs from 'node:fs/promises';
import {FILE_ENCODE} from '../constants';


export async function readDirRecursively(rootDir: string, subDir = ''): Promise<string[]> {
  const fullDirPath = path.join(rootDir, subDir)
  const files = await fs.readdir(fullDirPath, FILE_ENCODE)
  let res: string[] = []

  for (const file of files) {
    const stat = await fs.lstat(path.join(fullDirPath, file))

    if (stat.isDirectory()) {
      res = [
        ...res,
        ...await readDirRecursively(rootDir, path.join(subDir, file))
      ]
    }
    else {
      res.push(path.join(subDir, file))
    }
  }

  return res
}
