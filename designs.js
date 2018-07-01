
let col3;
let height;
let width;
//assign body background color to col4 for restoring cell to default color
const col4=$('body').css('background-color');

  // Select color input
let col=$("#colorPicker").val();// assign default color picker color
// on change listener for color picker to store new color chossen by the user
$("#colorPicker").on('change',function(){
      col=$("#colorPicker").val();
       col3 =" ";// clear the current value of col3
      } // end color picker function
      );// end color picker on change event listener

      // size of grid selector function
function selectSize(){
      width=$("#inputWidth").val(); // get width of grid inputed by user
      height=$("#inputHeight").val(); // get height inputed by user
    }// end function selectSize

/* makeGrid function
* Create grid according to the width and height selected by the user
* add listener for each of the cells created
*/
function makeGrid(event) {
    $('tr').remove(); // clears existing grid

    //create the rows using for loop
    for (let j = 1; j <= height; j++){
      $('#pixelCanvas').append('<tr></tr>')
      }

      // create columns using while loop
      while (width>0){
        $('tr').append('<td class="cell"> </td>');
        width--;
      }

    // create event for each cell
    $('.cell').on('click', function(){
    let col2=$(this).css('background-color'); // assigns background color to col2

    /*check to see if the cell background color is the same as the
    selected color. if color matches cell background is then replaced with
    the default color which is the background color.
    */
    if(col2===col3){
      $(this).css('background-color', col4);
      }
    /* if cell is yet to be colored or having a different color from the
    selected color, cell background color is changed to the selected color
    */
    else{
        $(this).css('background-color', col);
        col3=$(this).css('background-color');/* Assign  the background color to
         col3 which is then use to test whether a cell background color should be
         changed to the body background color or to the current color selected by
         the user
          */
      } // end else
    } //end onclick function for grid cell
  ); // end onclick event for grid cell
}// end function maheGrid

// call selectSize and makeGrid function as soon as user presses the submit
$('#sizePicker').on('submit', function(){
    selectSize();// call selectSize function
    makeGrid();// call makeGrid function
    event.preventDefault();// prevent browser from reloading upon pressing the submit button
});
