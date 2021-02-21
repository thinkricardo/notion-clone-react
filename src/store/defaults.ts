import { Block } from '../models';
import { generateId } from '../utils';

export function defaultBlock(): Block {
  return <Block>{
    id: generateId(),
    content: 'Type / for commands',
  };
}
