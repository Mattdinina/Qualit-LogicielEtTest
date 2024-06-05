import logo from './logo.svg';
import './App.css';
import React, { createContext, useContext, useReducer } from 'react';
import { legacy_createStore as createStore } from 'redux';
import { useState } from 'react';


export default function note() {

  const [note, SetNote] = useState(0)
  const [id, SetId] = useState(0)

  function NoteDelete(id) {
    note.filter(i => i.grade != id)
  }

  function AddNote() {
    return (
      <>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <input
            value={id}
            onChange={(event) => setId(id, ...event.currentTarget.value)}>
          </input>
          <input
            value={note}
            onChange={(event) => setNote(note, ...event.currentTarget.value)}
          />
          <button type="submit">Entrer une note :</button>
        </form>;
      </>)
  }

  function modifyNote(id) {

  }

  function Getnote(id) {

  }
}