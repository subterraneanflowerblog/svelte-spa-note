const storageKey = 'sveltenote/notes';

export const loadNotes = () => {
  const rawNotes = sessionStorage.getItem(storageKey);
  return rawNotes ? JSON.parse(rawNotes) : [];
};

export const saveNotes = (notes) => {
  sessionStorage.setItem(storageKey, JSON.stringify(notes));
};

export const addNote = (note) => {
  const currentNotes = loadNotes();
  const newNotes = [...currentNotes, note];
  saveNotes(newNotes);
}

export const overwriteNote = (index, note) => {
  const currentNotes = loadNotes();
  const newNotes = [...currentNotes];
  newNotes[index] = note;
  saveNotes(newNotes);
};