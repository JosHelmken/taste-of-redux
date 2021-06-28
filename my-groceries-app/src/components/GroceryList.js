import List from './List';

const GroceryList = (props) => {


  return (
    <div className='div3'>
      <List 
        items={props.items}
      />
    </div>
  )

}

export default GroceryList;