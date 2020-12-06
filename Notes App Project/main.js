
const title = document.querySelector('.title h1');
const subTitle = document.querySelector('.title h3');

title.textContent = 'Here is new TItle';
subTitle.textContent = 'New subtitle';
subTitle.classList.add('subtitle');

//  search 
const searchNotes = document.getElementById('search-notes');
const searchBtn = document.getElementById('searchBtn');

//  note
const notesArr = [];
const notes = document.querySelector('.notes');
const note = document.querySelector('.note');
const newNote = document.getElementById('new-note');
const createNoteBtn = document.querySelector('.createNote');
const removeAllNotesBtn = document.querySelector('.removeNotes');

//  create new note 
createNoteBtn.addEventListener('click', function () {
  const noteEl = document.createElement('p');
  const newNoteValue = newNote.value;
  newNoteValue == '' ? subTitle.textContent = 'Please insert value' : false;
  noteEl.textContent = newNoteValue;

  notesArr.push(newNoteValue);
  notes.append(noteEl);
  newNote.value = '';
  console.log(notesArr);
})


const showAllNotes = function (notes) {
  notes.forEach(function (note) {

  })
}