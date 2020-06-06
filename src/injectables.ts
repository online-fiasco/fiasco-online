export default {
  /**
   * Interfaces
   */
  Application: Symbol.for('Application'),
  Runnable: Symbol.for('Runnable'),
  HttpApplication: Symbol.for('HttpApplication'),

  /**
   * Services
   */
  GetPlaysets: Symbol.for('GetPlaysetsService'),
  GetUserPlaysetService: Symbol.for('GetUserPlaysetService'),

  /**
   * Repositories
   */
  PlaysetRepository: Symbol.for('PlaysetRepository'),
};
