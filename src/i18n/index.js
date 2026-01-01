import en from "./en.json";
import de from "./de.json";
import cn from "./cn.json";

const messages = { en, de, cn };

let currentLang = "cn";

export function t(key) {
  return messages[currentLang][key] ?? key;
}

export function setLang(lang) {
  if (messages[lang]) {
    currentLang = lang;
  }
}

export function getLang() {
  return currentLang;
}
