import { format, transports } from 'winston';

export const loggerFormat = format.printf(({ level, message, timestamp }) => {
  return `[LOGGER] ${timestamp} ${level}: ${message}`;
});

export const formatOption = format.combine(
  format.colorize(),
  format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
  loggerFormat,
);

export const transportsOption = [
  new transports.Console(),
  new transports.File({ filename: 'app.log' }),
];
