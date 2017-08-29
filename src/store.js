import { action, observable, computed } from 'mobx';

class Store {
  @observable lightboxIsOpen = false;
  @observable imageIndex = 0;
}

export var storeData = new Store;
