const myLibrary=[];
const container=document.querySelector('.container');
const addBookBtn=document.querySelector('#add-book');
const dialogElem = document.getElementById("Book");
const confirmAddBookBtn=document.querySelector('#confirmBtn');
const dialogInputs=document.getElementsByTagName('input');

class Book {
    constructor(title, author, pages, read) {
      this.title=title;
      this.author=author;
      this.pages=pages;
      this.read=read;
    }
    
      info () {
        return `by ${this.author}, it has ${this.pages} pages`;
      }
}

Book.prototype.deleteCard = function(index) {
  myLibrary.splice(index,1);
  let cards=document.getElementsByClassName('card');
  for(index; index<myLibrary.length+1; index++){
    cards[index].value--;
  }
}

Book.prototype.toggleRead = function (){
  if(this.read){
    this.read=false;
  }
  else {
    this.read=true;
  }
}

Book.prototype.createCard = function(){
    /*Creating all the elements we need for the card */
    let card=document.createElement('div');
    let cardTitle=document.createElement('p');
    let cardText=document.createElement('p');
    let cardDeleteButton=document.createElement('button');
    let cardToggleButton=document.createElement('label');
    // I should either make everything as innerHTML or as created elements
    // but I did a little bit of both for practice.
    cardToggleButton.setAttribute('class','switch');
    cardToggleButton.innerHTML=`<input type="checkbox" checked>
    <span class="slider round"></span><p>Already read</p>`;
    if (!this.read){
        cardToggleButton.control.checked=false;
        cardToggleButton.lastChild.textContent=`Haven't read yet`;
    }
    /*Setting all the attributes/values needed*/
    cardDeleteButton.setAttribute('class','delete');
    cardDeleteButton.textContent=`Delete`;
    card.setAttribute('class','card');
    cardTitle.setAttribute('class','title');
    cardTitle.textContent=this.title;
    console.log(this.info());
    cardText.textContent=this.info();
    card.value=myLibrary.length;


    /*Adding the eventListeners to the buttons the moment they are created */

    //finds the object in the array associated with the card item to be deleted
    //and it removes it from both the array and the DOM
    cardDeleteButton.addEventListener('click',(e)=>
    {
      let index=e.target.parentElement.value;
      myLibrary[index].deleteCard(index);
      e.target.parentElement.remove();
    });
    //finds the object associated with the array and it toggles its' read status
    //on the object and it changes the text in the DOM element
    cardToggleButton.addEventListener('mouseup',()=>{
      let index=cardToggleButton.parentElement.value;
      myLibrary[index].toggleRead();
      if (myLibrary[index].read){
        cardToggleButton.lastElementChild.textContent=`Already read`;
      }
      else {
        cardToggleButton.lastElementChild.textContent=`Haven't read yet`;
      }
    });


    //appending the elements in the DOM
    card.appendChild(cardTitle);
    card.appendChild(cardText);
    card.appendChild(cardToggleButton);
    card.appendChild(cardDeleteButton)
    container.appendChild(card);
}

function addBookToLibrary(){
  correctDialogInputs=Object.values(dialogInputs).filter(function (input){return input.getAttribute('type')!='checkbox'});
  let book = new Book(correctDialogInputs[0].value,correctDialogInputs[1].value,correctDialogInputs[2].value,correctDialogInputs[3].checked);
  book.createCard();
  myLibrary.push(book);
}

addBookBtn.addEventListener('click',()=>{dialogElem.showModal();})

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  addBookToLibrary();
  dialogElem.close();
  });
