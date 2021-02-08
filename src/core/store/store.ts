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

  public subscribe(subscriber: (value: Block[]) => void) {
    return this.state.subscribe(subscriber);
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

  public updateBlock(block: Block) {
    const blockIndex = this.getBlockIndex(block);

    const newState = [...this.state.getValue()];
    newState[blockIndex] = { ...block };

    this.state.next(newState);
  }
}

export const store = new Store();
