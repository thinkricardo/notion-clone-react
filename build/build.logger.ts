/* eslint no-console: 0 */

import chalk from 'chalk';

let startTime = 0;

const startTrace = (): void => {
  startTime = Date.now();
};

const endTrace = (): string => {
  return `${Date.now() - startTime} ms`;
};

const logWithTrace = (message: string, includeTrace: boolean): string => {
  let finalMessage = message;

  if (includeTrace) {
    finalMessage = `${finalMessage} ${endTrace()}`;
  }

  return finalMessage;
};

const clear = (): void => {
  console.clear();
};

const newLine = (): void => {
  console.log('');
};

const error = (message: string): void => {
  console.log(chalk.red(message));
};

const information = (message: string, includeTrace = false): void => {
  console.log(chalk.cyan(logWithTrace(message, includeTrace)));
};

const warning = (message: string): void => {
  console.log(chalk.yellow(message));
};

export const logger = {
  clear,
  newLine,
  startTrace,

  error,
  information,
  warning,
};
