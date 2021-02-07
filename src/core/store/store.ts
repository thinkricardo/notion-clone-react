import { BehaviorSubject } from 'rxjs';

import { Block } from '../../components/editable-block';

class Store {
  state = new BehaviorSubject<Block[]>([]);

  public getState() {
    return this.state;
  }
}

export const store = new Store();
