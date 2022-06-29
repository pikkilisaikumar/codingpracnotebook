import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import {
  NotesContainer,
  NotesHeadingText,
  WhiteContainer,
  TitleInput,
  AddButton,
  NoNotesContainer,
  TakeNoteTextArea,
  NoteItemContainer,
  UnorderList,
  NoNoteImage,
  NoNotesYet,
} from './styledComponents'

import NoteItem from '../NoteItem'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const [subjectList, setSubjectList] = useState([])
  const handleTitleInput = e => {
    setTitle(e.target.value)
  }

  const handleTextArea = e => {
    setNotes(e.target.value)
  }

  const handleAddBtn = e => {
    e.preventDefault()
    if (title !== '' && notes !== '') {
      setSubjectList(prevState => [
        ...prevState,
        {
          id: uuidv4(),
          title,
          notes,
        },
      ])
      setTitle('')
      setNotes('')
    }
  }

  return (
    <NotesContainer>
      <NotesHeadingText>Notes</NotesHeadingText>
      <form onSubmit={handleAddBtn}>
        <WhiteContainer>
          <div>
            <div>
              <TitleInput
                placeholder="Title"
                value={title}
                onChange={handleTitleInput}
              />
            </div>
            <div>
              <TakeNoteTextArea
                placeholder="Take a Note..."
                value={notes}
                onChange={handleTextArea}
              />
            </div>
          </div>
          <AddButton type="submit">Add</AddButton>
        </WhiteContainer>
      </form>
      <NoteItemContainer>
        {subjectList.length !== 0 ? (
          <UnorderList>
            {subjectList.map(eachSub => (
              <NoteItem key={eachSub.id} sub={eachSub} />
            ))}
          </UnorderList>
        ) : (
          <NoNotesContainer>
            <NoNoteImage
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
            />
            <NoNotesYet>No Notes Yet</NoNotesYet>
            <p style={{color: '#334155'}}>Notes you add will appear here</p>
          </NoNotesContainer>
        )}
      </NoteItemContainer>
    </NotesContainer>
  )
}

export default Notes
