import dotenv from 'dotenv';

export const DotEnv = {
  setup(DotEnvModule = dotenv) {
    const result = DotEnvModule.config();
    if (result.error) {
      throw new Error('Could not initialize local environment');
    }
  }
};
