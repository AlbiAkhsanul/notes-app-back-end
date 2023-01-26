const { 
    addNoteHandler, 
    getAllNotesHandler, 
    getNoteByIdHandler, 
    editNoteByIdHandler,
    deleteNoteByIdHandler, 
} = require('./handler');

const routes = [
    {
      // Menambahkan note
      method: 'POST',
      path: '/notes',
      handler: addNoteHandler,
    },
    {
      // Mengisi note
      method: 'GET',
      path: '/notes',
      handler: getAllNotesHandler,
    },
    {
      // Melihat isi note
      method: 'GET',
      path: '/notes/{id}',
      handler: getNoteByIdHandler,
    },
    {
      // Mengedit note
      method: 'PUT',
      path: '/notes/{id}',
      handler: editNoteByIdHandler,
    },
    {
      // Menghapus note
      method: 'DELETE',
      path: '/notes/{id}',
      handler: deleteNoteByIdHandler,
    },
  ];
   
module.exports = routes;