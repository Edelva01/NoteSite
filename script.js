document.addEventListener('DOMContentLoaded', () => {
    const noteInput = document.getElementById('noteInput');
    const addNoteButton = document.getElementById('addNoteButton');
    const noteList = document.getElementById('noteList');
  
    // Add a note to the list
    addNoteButton.addEventListener('click', () => {
      const noteText = noteInput.value.trim();
  
      if (noteText) {
        const li = document.createElement('li');
        li.textContent = noteText;
  
        // Append the new note to the list
        noteList.appendChild(li);
  
        // Clear the textarea
        noteInput.value = '';
      } else {
        alert('Please write a note before adding.');
      }
    });
  });
  