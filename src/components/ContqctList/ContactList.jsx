import ContactItem from "components/ContactItem"
import css from './ContactList.module.css'


const ContactList = ({contacts, onDelete}) => {
  return (
    <ul className={css.list}>
      <ContactItem contacts={contacts} onDelete={onDelete}/>
    </ul>
  )
}

export default ContactList

