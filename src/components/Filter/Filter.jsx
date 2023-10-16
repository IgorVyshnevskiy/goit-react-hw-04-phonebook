import css from './Filter.module.css';

const Filter = ({filter, onFilterHandler}) => {
  return (
    <div className={css.container}>
    <label className={css.label}>
      Find contacts by name
      <input className={css.input} type="text" value={filter} onChange={onFilterHandler} />
      
    </label>

    </div>
  );
};


export default Filter