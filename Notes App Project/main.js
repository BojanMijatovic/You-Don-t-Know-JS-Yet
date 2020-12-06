
const title = document.querySelector('.title h1');
const subTitle = document.querySelector('.title h3');

title.textContent = 'Here is new Title';
subTitle.textContent = 'New subtitle';
subTitle.classList.add('subtitle');

//  search 
const searchForm = document.querySelector('.search');
const searchNotes = document.getElementById('search-notes');
const searchBtn = document.getElementById('searchBtn');

//  note
let notesArr = [];
const notes = document.querySelector('.notes');
const note = document.querySelector('.note');
const newNote = document.getElementById('new-note');
const createNoteBtn = document.querySelector('.createNote');
const removeAllNotesBtn = document.querySelector('.removeNotes');


removeAllNotesBtn.classList.add('displayNone');
searchForm.classList.add('displayNone');

//  create new note 
createNoteBtn.addEventListener('click', function () {
  const noteEl = document.createElement('p');
  const newNoteValue = newNote.value;

  if (newNoteValue == '') {
    subTitle.textContent = 'Please insert value';
  } else {
    subTitle.textContent = 'Back to subtitle';
    noteEl.textContent = newNoteValue;
    notesArr.push(newNoteValue);
    notes.append(noteEl);
    removeAllNotesBtn.classList.remove('displayNone');
    searchForm.classList.remove('displayNone');
  }
  newNote.value = '';
  console.log(notesArr);
});

//  clear notes
removeAllNotesBtn.addEventListener('click', function () {
  notes.textContent = '';
  notesArr = [];
  removeAllNotesBtn.classList.add('displayNone');
  searchForm.classList.add('displayNone');
})



//  search note
searchBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const text = searchNotes.value;
  const filterNotes = notesArr.filter(note => note.includes(text));
  notes.textContent = filterNotes;
  console.log(`Search note`, text);
})