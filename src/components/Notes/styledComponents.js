// Style your elements here
import styled from 'styled-components'

export const NotesContainer = styled.div`
  min-height: 100vh;
  padding: 17px;
  background-color: lightblue;
`
export const NotesHeadingText = styled.h1`
  color: #4c63b6;
  font-family: 'Bree Serif';
`
export const WhiteContainer = styled.div`
  height: 200px;
  width: 100%;
  background-color: white;
  box-shadow: 0px 0px 4px white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-between;
`

export const TitleInput = styled.input`
  padding: 13px;
  width: 100%;
  outline: none;
  border: none;
`

export const TakeNoteTextArea = styled.textarea`
  padding: 10px;
  width: 100%;
  outline: none;
  border: none;
  margin-top: 12px;
`

export const AddButton = styled.button`
  background-color: #4c63b6;
  color: white;
  padding: 7px 16px;
  outline: none;
  border: none;
  border-radius: 7px;
  align-self: flex-end;
`

export const NoteItemContainer = styled.div`
  margin-top: 20px;
`
export const UnorderList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export const NoNotesContainer = styled.div`
  height: 200px;
  text-align: center;
  margin-top: 30px;
`

export const NoNoteImage = styled.img`
  height: 100px;
  width: 80px;
  object-fit: 'contain';
`
export const NoNotesYet = styled.h1`
  font-size: 20px;
  color: #334155;
`
