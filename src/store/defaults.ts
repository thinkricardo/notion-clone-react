import { Block } from '../models';
import { generateId } from '../utils';

export const defaultBlock = (): Block => {
  return <Block>{
    id: generateId(),
  };
};
