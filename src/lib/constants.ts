import {fileURLToPath} from 'url'
import path from 'path'


const filename = fileURLToPath(import.meta.url);
const myDirname = path.dirname(filename)

export const SRC_ROOT_PATH = path.resolve(myDirname, '../')
//export const LANG_COOKIE = '_lang'
export const DEFAULT_LANG = 'en'
export const SUPPORTED_LANGS = ['en', 'ru', 'eo', 'es', 'uk']
//  see https://www.sitepoint.com/iso-2-letter-language-codes/
// 'fr', BE - belorus. Greek 	EL, Italian 	IT, Japanese 	JA, Kazakh 	KK, Kirghiz 	KY
// Korean 	KO, Mongolian 	MN, Portuguese 	PT, Serbian 	SR, Tajik 	TG
// Turkish 	TR, Turkmen 	TK, Uzbek 	UZ
