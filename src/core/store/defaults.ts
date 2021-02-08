import { generateId } from '../utils';

import { Block } from '../../components/editable-block';

export function defaultBlock(): Block {
  return <Block>{
    id: generateId(),
    content: 'Type / for commands',
  };
}
