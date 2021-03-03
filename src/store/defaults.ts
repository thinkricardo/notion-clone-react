import { Block, BlockType } from '../models';
import { generateId } from '../utils';

export const defaultBlock = (): Block => {
  return <Block>{
    id: generateId(),
  };
};

export const blockTypes: BlockType[] = [
  {
    id: '1',
    name: 'Text',
  },
  {
    id: '2',
    name: 'Heading 1',
  },
  {
    id: '3',
    name: 'Heading 2',
  },
  {
    id: '4',
    name: 'Heading 3',
  },
];
