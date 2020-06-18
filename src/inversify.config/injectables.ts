export default {
  /**
   * Interfaces
   */
  Application: Symbol.for('Application'),
  Runnable: Symbol.for('Runnable'),
  HttpApplication: Symbol.for('HttpApplication'),
  HttpV1Router: Symbol.for('HttpV1Router'),

  GetPlaysetsHandler: Symbol.for('GetPlaysetsHandler'),
  GetPlaysetHandler: Symbol.for('GetPlaysetHandler'),
  CreatePlaysetHandler: Symbol.for('CreatePlaysetHandler'),

  LoginHandler: Symbol.for('LoginHandler'),

  /**
   * Services
   */
  GetPlaysetsService: Symbol.for('GetPlaysetsService'),
  GetPlaysetService: Symbol.for('GetPlaysetService'),
  GetUserPlaysetService: Symbol.for('GetUserPlaysetService'),
  CreatePlaysetService: Symbol.for('CreatePlaysetService'),
  UpdatePlaysetService: Symbol.for('UpdatePlaysetService'),
  DeletePlaysetService: Symbol.for('DeletePlaysetService'),

  LoginService: Symbol.for('LoginService'),

  /**
   * Repositories
   */
  PlaysetRepository: Symbol.for('PlaysetRepository'),
  UserRepository: Symbol.for('UserRepository'),
};
