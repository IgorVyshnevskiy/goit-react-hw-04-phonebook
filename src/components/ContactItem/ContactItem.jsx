import css from './contactItem.module.css'


const ContactItem = ({contacts, onDelete}) => {
  return (
   contacts.map(({id, number, name}) => (
    <li key={id} className={css.item}>
      <div>
      {name}: {number}
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>Delete contact</button>
    </li>
   ))
  )
}

export default ContactItem