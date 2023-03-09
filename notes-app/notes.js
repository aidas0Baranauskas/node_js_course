import fs from 'fs'
import chalk from 'chalk';

const getNotes = () => { 'your notes...'}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find( (note) => note.title === title)

    debugger

    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('new note added'))
    } else{
        console.log(chalk.red.inverse('duplicate title: no note added'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const processedNotes = notes.filter((note) => note.title !== title)

    if(processedNotes.length < notes.length) {
        saveNotes(processedNotes)
        console.log(chalk.green.inverse('note removed'))
    } else{
        console.log(chalk.red.inverse('no such note found'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBUFFER = fs.readFileSync('notes.json')
        const dataJSON = dataBUFFER.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }

}

const listNotes = () => {
    
    console.log(chalk.green.inverse('Your notes:'))

    loadNotes().forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const note = loadNotes().find( (note) => note.title === title)
    if(note){
        console.log(chalk.green.inverse('reading note:') + ' ' + note.body)
    } else{
        console.log(chalk.red.inverse('no such note found'))
    }
}

export default {
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNote
}