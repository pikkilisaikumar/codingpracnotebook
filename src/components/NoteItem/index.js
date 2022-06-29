import {ListSubject, TitleParagraph, NoteParagraph} from './styledComponents'

const NoteItem = props => {
  const {sub} = props
  const {title, notes} = sub
  return (
    <ListSubject>
      <TitleParagraph>{title}</TitleParagraph>
      <NoteParagraph>{notes}</NoteParagraph>
    </ListSubject>
  )
}

export default NoteItem
