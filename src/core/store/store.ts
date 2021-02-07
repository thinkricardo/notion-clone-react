import { BehaviorSubject } from 'rxjs';

import { defaultBlock } from './defaults';

import { Block } from '../../components/editable-block';

class Store {
  state = new BehaviorSubject<Block[]>([]);

  constructor() {
    this.initStore();
  }

  private initStore() {
    this.state.next([defaultBlock()]);
  }

  private getBlockIndex(block: Block) {
    return this.state
      .getValue()
      .findIndex((innerBlock) => innerBlock.id === block.id);
  }

  public getState() {
    return this.state;
  }

  public addBlock(anchorBlock: Block) {
    const newBlock = defaultBlock();
    const anchorBlockIndex = this.getBlockIndex(anchorBlock);

    const newState = [
      ...this.state.getValue().slice(0, anchorBlockIndex + 1),
      newBlock,
      ...this.state.getValue().slice(anchorBlockIndex + 1),
    ];

    this.state.next(newState);
  }
}

export const store = new Store();
