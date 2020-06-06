export default {
  /**
   * Interfaces
   */
  Application: Symbol.for('Application'),
  Runnable: Symbol.for('Runnable'),
  HttpApplication: Symbol.for('HttpApplication'),
  HttpV1Router: Symbol.for('HttpV1Router'),
  GetPlaysetsHandler: Symbol.for('GetPlaysetsHandler'),

  /**
   * Services
   */
  GetPlaysetsService: Symbol.for('GetPlaysetsService'),
  GetUserPlaysetService: Symbol.for('GetUserPlaysetService'),

  /**
   * Repositories
   */
  PlaysetRepository: Symbol.for('PlaysetRepository'),
};
