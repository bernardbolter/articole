import { action, observable, computed } from 'mobx';

class Store {
  @observable lightboxIsOpen = false;
  @observable imageIndex = 0;

  @observable first_name = '';
  @observable last_name = '';
  @observable email = '';
  @observable attending = 'yes';
  @observable number_attending = '2';
}

export var storeData = new Store;
