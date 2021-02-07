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

  public getState() {
    return this.state;
  }
}

export const store = new Store();
