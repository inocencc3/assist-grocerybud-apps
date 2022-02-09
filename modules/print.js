import { addBasket } from "./add.js";

export const printItem = (array) => {
  // Check if array has value ( yes execute )/( no nothing )
  if(array.length > 0){
    // Select wrapper to contain looped print code
    const wrapper = document.querySelector('.listed-wrapper');
    // Loop array
    const clearItem = document.querySelector('.clear-wrapper');
    let loopedHtmlScript = [];
    array.forEach((val) => {
      // Give html element each value
      const html = `
      <div class="listed" data-id="placeholder">
        <p>${val.itemName}</p>
        <div class="cpanel">
          <span class="edit"><i class="far fa-edit"></i></span>
          <span class="delete"
            ><i class="fa fa-trash" aria-hidden="true"></i
          ></span>
        </div>
      </div>
      `; // DATA ID WAITING FOR ADD MODULE
      loopedHtmlScript.push(html);
    })
    // Join html script become one value
    const joinHtml = loopedHtmlScript.join('');
    // Print joinHtml into wrapper and unhide wrapper
    wrapper.innerHTML = joinHtml;
    wrapper.classList.remove('invisible');
  }else{
    // Return nothing
    return null;
  }
}

export const printItem2 = (array) => {
  // Check if array has value ( yes execute )/( no nothing )
  if(array.length > 0){
    // Select necessary element
    const wrapper = document.querySelector('.listed-wrapper');
    const clearButton = document.querySelector('.clear-wrapper');
    // Clear wrapper incase theres any element inside
    wrapper.innerHTML = '';
    // Loop array
    const clearItem = document.querySelector('.clear-wrapper');
    let loopedHtmlScript = [];
    array.forEach((val) => {
      // Creating new element for each array value
      const dataIdValue = val.itemId;
      const newDiv = document.createElement('div');
      newDiv.setAttribute('class','listed');
      newDiv.setAttribute('data-id',dataIdValue);
      // Assign html into new element
      newDiv.innerHTML = `
        <p>${val.itemName}</p>
        <div class="cpanel">
          <span class="edit"><i class="far fa-edit"></i></span>
          <span class="delete"
            ><i class="fa fa-trash" aria-hidden="true"></i
          ></span>
        </div>
      `;
      wrapper.appendChild(newDiv);
    })
    // Init add/edit button function
    addBasket(array);
    // Unhide wrapper
    clearButton.classList.remove('invisible');
  }else{
    // Return nothing
    return null;
  }
}
