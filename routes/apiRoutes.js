const Notebook = require('../db/Notebook.js')

// Routing
module.exports = (notes) => {

    // GET request
    notes.get("/api/note", (req, res) => {
        res.json(Notebook);
    });

    // POST request
    notes.post("/api/note", (req, res) => {
        Notebook.push(req.body);
        res.json("Note Saved!");
    });

    // DELETE request
    notes.delete("/api/note/:id", (req, res) => {
        let id = parseInt(req.params.id);
        let tempNote = [];
        for (let i = 0; i < Notebook.length; i++) {
            if (i !== id) {
                tempNote.push(Notebook[i]);
            }
        }
        Notebook = tempNote;

        res.json("Note Deleted!");
    });


}