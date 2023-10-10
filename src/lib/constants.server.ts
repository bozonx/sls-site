import {fileURLToPath} from 'url';
import path from 'path';


const filename = fileURLToPath(import.meta.url);
const myDirname = path.dirname(filename)

export const SRC_ROOT_PATH = path.resolve(myDirname, '../')
