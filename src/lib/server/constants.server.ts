import {fileURLToPath} from 'url';
import path from 'path';


const filename = fileURLToPath(import.meta.url);
const myDirname = path.dirname(filename)

//export const ROOT_DIR = path.resolve(myDirname, '../../')

// @ts-ignore
export const ROOT_DIR = __CONF__.rootDir
