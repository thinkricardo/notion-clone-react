import { Block, BlockType } from '../models';
import { quark } from '../state';

import { blockTypes, defaultBlock } from './defaults';

class Store {
  private blockIds = quark<string[]>('blockIds', []);

  private getBlockIndex(blockId: string): number {
    return this.blockIds
      .get()
      .findIndex((innerBlockId) => innerBlockId === blockId);
  }

  initStore() {
    const initialBlock = defaultBlock();

    this.blockIds.set([initialBlock.id]);
    quark<Block>(initialBlock.id, initialBlock);
  }

  addBlock(anchorBlock: Block) {
    const newBlock = defaultBlock();

    const anchorBlockIndex = this.getBlockIndex(anchorBlock.id);
    const currentBlockIds = this.blockIds.get();

    const newBlockIds = [
      ...currentBlockIds.slice(0, anchorBlockIndex + 1),
      newBlock.id,
      ...currentBlockIds.slice(anchorBlockIndex + 1),
    ];

    this.blockIds.set(newBlockIds);
    quark<Block>(newBlock.id, newBlock);
  }

  getBlockTypes(): BlockType[] {
    return blockTypes;
  }
}

export const store = new Store();
