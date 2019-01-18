import { join } from 'lodash-es';
import { identity } from './shared';

export const getSomeText = () => {
  return identity(join([
    'I',
    'don\'t',
    'like',
    'sand',
  ], ' '));
};

console.log('🛡 split1 loaded!')
