import { addColors, createLogger, format, transports } from 'winston'

const { combine, timestamp, label, printf, colorize } = format

addColors({
  error: 'cyan yellowBG bold',
  warn: 'yellow',
  info: 'blue',
  debug: 'green',
})

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `[LOG] - ${timestamp} [${label}] ${level} -> ${message}`
})

const logger = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'main' }),
    colorize({ all: true }),
    timestamp({ format: 'YYYY/MM/DD HH:mm:ss' }),
    myFormat,
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.Console({ debugStdout: true }),
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/combined.log' }),
  ],
})

export default logger
