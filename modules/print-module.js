export const printItem = (array) => {
  // Check if array has value ( yes execute )/( no nothing )
  if(array.length > 0){
    // Select wrapper to contain looped print code
    const wrapper = document.querySelector('.listed-wrapper');
    // Loop array
    const loopedHtmlScript = [];
    array.forEach((val) => {
      // Give html element each value
      const html = `
      <div class="listed">
        <p>${val.itemName}</p>
        <div class="cpanel">
          <span class="edit"><i class="far fa-edit"></i></span>
          <span class="delete"
            ><i class="fa fa-trash" aria-hidden="true"></i
          ></span>
        </div>
      </div>
      `;
      loopedHtmlScript.push(html);
    })
    // Join html script become one value
    const joinHtml = loopedHtmlScript.join('');
    // Print joinHtml into wrapper
    wrapper.innerHTML = joinHtml;
    wrapper.classList.remove('invisible');
  }else{
    // Return nothing
    return null;
  }
}
