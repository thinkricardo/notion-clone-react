import { BehaviorSubject } from 'rxjs';

import { Block } from '../models';

import { defaultBlock } from './defaults';

class Store {
  state = new BehaviorSubject<Block[]>([]);
  stateIds = new BehaviorSubject<string[]>([]);

  constructor() {
    this.initStore();
  }

  private initStore() {
    const initialBlock = defaultBlock();

    this.state.next([initialBlock]);
    this.stateIds.next([initialBlock.id]);
  }

  private getBlockIndex(block: Block) {
    return this.state
      .getValue()
      .findIndex((innerBlock) => innerBlock.id === block.id);
  }

  public subscribe(subscriber: (value: Block[]) => void) {
    return this.state.subscribe(subscriber);
  }

  public subscribeIds(subscriber: (value: string[]) => void) {
    return this.stateIds.subscribe(subscriber);
  }

  public addBlock(anchorBlock: Block) {
    const newBlock = defaultBlock();
    const anchorBlockIndex = this.getBlockIndex(anchorBlock);

    const newState = [
      ...this.state.getValue().slice(0, anchorBlockIndex + 1),
      newBlock,
      ...this.state.getValue().slice(anchorBlockIndex + 1),
    ];

    const newStateIds = [
      ...this.stateIds.getValue().slice(0, anchorBlockIndex + 1),
      newBlock.id,
      ...this.stateIds.getValue().slice(anchorBlockIndex + 1),
    ];

    this.state.next(newState);
    this.stateIds.next(newStateIds);
  }

  public updateBlock(block: Block) {
    const blockIndex = this.getBlockIndex(block);

    const newState = [...this.state.getValue()];
    newState[blockIndex] = { ...block };

    this.state.next(newState);
  }
}

export const store = new Store();
