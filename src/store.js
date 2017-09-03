import { action, observable, computed } from 'mobx';

import { IMAGES } from './components/story/image_data';

class Store {
  @observable lightboxIsOpen = false;
  @observable imageIndex = 0;
  @observable theIMAGES = IMAGES;

  @observable formSubmitting = false;
  @observable success = false;
  @observable error = false;
  @observable first_name = '';
  @observable last_name = '';
  @observable email = '';
  @observable attending = 'yes';
  @observable number_attending = '2';

  @action openLightbox = (e) => {
      switch(e.target.id) {
        case 'img_0':
          this.imageIndex = 0;
          break;
        case 'img_1':
          this.imageIndex = 1;
          break;
        case 'img_2':
          this.imageIndex = 2;
          break;
        case 'img_3':
          this.imageIndex = 3;
          break;
        case 'img_4':
          this.imageIndex = 4;
          break;
        case 'img_5':
          this.imageIndex = 5;
          break;
        case 'img_6':
          this.imageIndex = 6;
          break;
        case 'img_7':
          this.imageIndex = 7;
          break;
        case 'img_8':
          this.imageIndex = 8;
          break;
        case 'img_9':
          this.imageIndex = 9;
          break;
        case 'img_10':
          this.imageIndex = 10;
          break;
        case 'img_11':
          this.imageIndex = 11;
          break;
        case 'img_12':
          this.imageIndex = 12;
          break;
        case 'img_13':
          this.imageIndex = 13;
          break;
        case 'img_14':
          this.imageIndex = 14;
          break;
      }
      this.lightboxIsOpen = true
    }

  @action closeLightbox = () => {
      this.lightboxIsOpen =  false;
    }

  @action gotoNext = () => {
      this.imageIndex = this.imageIndex + 1;
    }

  @action gotoPrevious = () => {
      this.imageIndex = this.imageIndex - 1;
    }
}

export var storeData = new Store;
