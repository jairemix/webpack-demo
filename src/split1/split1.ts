import { join } from 'lodash-es';
import { identity } from '../shared';
import { addFullStop } from './split1-dependency';

export const getSomeText = () => {
  const joint = join([
    'I',
    'don\'t',
    'like',
    'sand',
  ], ' ');
  return identity(addFullStop((joint)));
};

console.log('🛡 split1 loaded!')
