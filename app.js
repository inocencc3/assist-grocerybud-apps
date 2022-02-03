const { localStorage } = window;
const groceryArr = [];
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
    // Still not used
  };

  retrieveLocalAPI = (index) => {
    const getItem = this.storage.getItem(index);
    const toObject = JSON.parse(getItem);
    return toObject;
    // Still not used
  };

  addGrocery = () => {
    const addButton = document.querySelector('.submitItem');

    // addButton Function
    addButton.addEventListener('click', () => {
      const dateConstructor = new Date();
      const id = dateConstructor.getTime();
      const inputText = document.getElementById('grocery-input').value;

      // If doesnt have value do nothing
      // if have execute Input data id and input text to array
      if(inputText){
        this.groceries.push({id, value: inputText });
        // After add item, back textinput value to none
        this.defaultWindow();
        this.printBasket();
        console.log(this.groceries);
      }else{
        console.log('No Item in input text');
      }
    });
  };

  defaultWindow = () => {
    document.getElementById('grocery-input').value = '';
  }

  clearBasket = () => {
    const clearButton = document.querySelector('.clear-wrapper');

    clearButton.addEventListener('click',()=>{
      console.log('clear list');
    })
  };

  deleteItem = () => {
    const delIcons = document.querySelectorAll('.delete');

    delIcons.forEach((val) => {
      val.addEventListener('click', () => {
        this.storage.removeItem('');
      });
    });
  };

  printBasket = () => {
    const listWrapper = document.querySelector('.listed-wrapper');
    const clearWarpper = document.querySelector('.clear-wrapper');

    // Debug
    // If theres item inside array storage then execute print
    
    if(this.groceries.length > 0){
      // Print
      // Remove invisible wrapper
      listWrapper.classList.remove('invisible');

      const newElement = document.createElement('div');
      const newAttClass = document.createAttribute('class');
      const newAttData = document.createAttribute('data-id');
      
      // Print each item and make element inside listed wrapper
      this.groceries.forEach((val)=>{
        
        newAttClass.value = 'listed';
        newAttData.value = val.id;
        newElement.setAttributeNode(newAttClass);
        newElement.setAttributeNode(newAttData);

        listWrapper.insertBefore(newElement, clearWarpper);
        const htmlGenerate = `
          <p>${val.value}</p>
          <div class="cpanel">
            <span class="edit"><i class="far fa-edit"></i></span>
            <span class="delete"
              ><i class="fa fa-trash" aria-hidden="true"></i
            ></span>
          </div>`;
        newElement.innerHTML = htmlGenerate;
      })
    }

    console.log(listWrapper);

    this.deleteItem();
    // this.toggleVisibilityClear();
  };
}

const groceryApps = new GroceryBud(groceryArr, localStorage);

// Check Localstorage
// console.log(localStorage.length);
groceryApps.initWebapps();
