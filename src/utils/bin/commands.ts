// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Ti dò il benvenuto! Ecco una lista di tutti i comandi:
\n${c}\n
[tab]: auto-completamento.
[ctrl+l]/clear: pulisce il terminale.\n
Scrivi 'sumfetch' per il sommario.
`;
};

// Redirects
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Aprendo repository Github...';
};

// Riguardo
export const about = async (args: string[]): Promise<string> => {
  return `Ciao, sono ${config.name}. 
Benvenuto nel mio sito!
Altre info su di me:
'sumfetch' - breve riassunto.
'resume' - curriculum più recente.
'readme' - readme su GitHub.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Apro curriculum...';
};

// Donazioni
export const donate = async (args: string[]): Promise<string> => {
  return `grazie per l'interesse!
Se vuoi, puoi supportarmi su:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
`;
};

// Contatti
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Apro mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Apro GitHub...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Apro LinkedIn...';
};

// Ricerca
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Cerco su Google ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Cerco su DuckDuckGo ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Ma davvero usi Bing? Vabbè, cerco ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Cerco su Reddit ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `un
po'
di
cartelle
a
caso`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `nahh, non ho così tanti soldi da permettermi tante cartelle
se vuoi sostenermi, esegui 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short',
  };

  const italianFormatter = new Intl.DateTimeFormat('it-IT', options);
  const formattedDate = italianFormatter.format(new Date());

  return formattedDate;
};

export const vi = async (args: string[]): Promise<string> => {
  return `davvero usi ancora 'vi'? usa 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' è un po' datato, perché non usare 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? troppo carino. Provare 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `guarda lascia perdere, usa vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  return `Permesso negato: da un grande potere derivano... ah, no, aspetta, sbagliato. `;
};

export const credits = async (args?: string[]): Promise<string> => {
  return `Crediti: Leonardo Pantani
Sito basato sul repository pubblico <u><a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/Cveinnt/LiveTerm/tree/main" target="_blank">LiveTerm</a></u> di Cveinnt.`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `


  ██████╗██╗ █████╗  ██████╗ ██╗
  ██╔════╝██║██╔══██╗██╔═══██╗██║
  ██║     ██║███████║██║   ██║██║
  ██║     ██║██╔══██║██║   ██║╚═╝
  ╚██████╗██║██║  ██║╚██████╔╝██╗
   ╚═════╝╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝

Scrivi 'help' per una lista di comandi.
Scrivi 'sumfetch' per il sommario.
Scrivi 'repo' o clicca <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">qui</a></u> per la repository.
`;
};
