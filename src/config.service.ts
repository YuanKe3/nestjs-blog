import { developmentConfig } from './config/development.config'
import { productionConfig } from './config/production.config'

export const ConfigService = {
  provide: 'ConfigService',
  useValue: process.env.NODE_ENV === 'development' ? developmentConfig : productionConfig,
}
