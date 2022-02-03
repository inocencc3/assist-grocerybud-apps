const { localStorage } = window;
const groceryArr = [
  { name: 'egg', class: 'diary' },
  { name: 'carrot', class: 'vegetable' },
];
class GroceryBud {
  constructor(array, storage) {
    this.groceries = array;
    this.storage = storage;
  }

  // Initiate Function
  initWebapps() {
    window.addEventListener('DOMContentLoaded', (e) => {
      e.preventDefault();
      this.addGrocery();
      this.printBasket();
      this.clearBasket();
    });
  }

  sendLocalAPI = (index,value) => {
    const toString = JSON.stringify(value);
    this.storage.setItem(index, toString);
  };

  retrieveLocalAPI = (index) => {
    const getItem = this.storage.getItem(index);
    const toObject = JSON.parse(getItem);
    return toObject;
  };

  addGrocery = () => {
    const addButton = document.querySelector('.submitItem');

    // addButton Function
    addButton.addEventListener('click', () => {
      const dateConstructor = new Date();
      const id = dateConstructor.getTime();
      const inputText = document.getElementById('grocery-input').value;

      // If doesnt have value do nothing
      // if have execute Input data id and input text to localstorage
      if(inputText){
        this.storage.setItem(id,inputText);
      }else{
        console.log('No Item in input text');
      }

      // After add item, back textinput value to none
      this.defaultWindow();
      console.log(inputText);
    });
  };

  static defaultWindow = () => {
    document.getElementById('grocery-input').value = '';
  }

  clearBasket = () => {
    const clear = document.querySelector('.clear span');

    clear.addEventListener('click', () => {
      // Debug : Still Working
      this.storage.clear();
      this.printBasket();
    });
  };

  deleteItem = () => {
    const delIcons = document.querySelectorAll('.delete');

    delIcons.forEach((val) => {
      val.addEventListener('click', () => {
        this.storage.removeItem('');
      });
    });
  };

  toggleVisibilityClear = () => {
    const clearClass = document.querySelector('.clear-wrapper').classList;

    clearClass.add('invisible');
    // Debug
    if (this.storage.length >= 1) {
      clearClass.remove('invisible');
    }
  };

  printBasket = () => {
    const listWrapper = document.querySelector('.listed-wrapper');

    // Debug
    const arrTemp2 = [];
    for (let i = 1; i <= this.storage.length; i += 1) {
      arrTemp2.push(this.storage.getItem(`item${i}`));
    }

    const arrHTML = [];
    arrTemp2.forEach((val) => {
      arrHTML.push(`
        <div class="listed">
          <p>${val}</p>
          <div class="cpanel">
            <span class="edit"><i class="far fa-edit"></i></span>
            <span class="delete"
              ><i class="fa fa-trash" aria-hidden="true"></i
            ></span>
          </div>
        </div>
        `);
    });
    const toHTML = arrHTML.join('');
    listWrapper.innerHTML = toHTML;

    this.deleteItem();
    this.toggleVisibilityClear();
  };
}

const groceryApps = new GroceryBud(groceryArr, localStorage);

// Check Localstorage
// console.log(localStorage.length);
groceryApps.initWebapps();
