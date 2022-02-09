import { printItem2 as renderList } from './print.js';

export const addBasket = (array) => {
  // Give function add item into basket to basket button
  const submitButton = document.querySelector('.submitItem');
  // Initiate flag for edit
  let flagEdit = 0;
  // Edit button function
  // Select all edit button available on list
  const editButton = document.querySelectorAll('.edit');
  // Init data id var
  let dataId;
  // Loop and give function each edit button
  editButton.forEach((val) => {
    val.addEventListener('click',() => {
      flagEdit = 1;
      // Change basket button to edit button
      const button = document.querySelector('.submitItem');
      button.textContent = 'edit';
      // Select element p on selected entry
      const cPanel = val.parentElement;
      const pElement = cPanel.previousElementSibling;
      // Write editting value to input item
      const inputBox = document.getElementById('grocery-input');
      inputBox.value = pElement.textContent;
      // Get data-id from attribute
      dataId = val.parentElement.parentElement.dataset.id;
      console.log(flagEdit);
    });
  })

  // LAST DEBUG HERE
  // EVEN THOUGH FLAG EDIT === 1, IF STILL USING FLAG EDIT 0

  // If flag is 0 then add function else edit function
  if(flagEdit !== 1){
    submitButton.addEventListener('click',() => {
      console.log('Add mode');
      console.log(flagEdit);
      // Select element input 
      const inputElement = document.getElementById('grocery-input');
      // If value exist do if not then alert value not exist
      if(inputElement.value){
        // Generate id for item id using time when item inputted
        const id = new Date().getTime();
        // Preset value before input into array data
        const presetValue = {
          itemId: id,
          itemName: inputElement.value
        };
        // Get preset value and throw into array data
        array.push(presetValue);
        // Refresh list
        renderList(array);
        // Revert to default ready UI to do something
        inputElement.value = '';
      }
      else{
        // Must change to alert
        console.log('Input value not exist');
      }
    })
  }else{
    console.log('Edit mode');
    // Edit button funtion
    button.addEventListener('click',() => {
      // Get new value from input text box
      const newValue = document.getElementById('grocery-input').value;
      // Preset value
      const presetValue = {
        itemId: dataId,
        itemName: ''
      };
      console.log(newValue);
    })
    // Input new value to array
    // LAST DEV HERE
    console.log(dataId);
  }
}

export const editBasket = () => {
  
  
}