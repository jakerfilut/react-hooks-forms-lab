import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

const [name, setName] = useState("")
const [category, setCategory] = useState("Produce");

function handleName(event){
  setName(event.target.value)
  console.log({name})
}
function handleCategory(event){
  setCategory(event.target.value)
  console.log({category})
}

function handleSubmit(event) {
  event.preventDefault();
  onItemFormSubmit({
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name,
    category,
  })
  console.log(onItemFormSubmit)
}


  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
        onChange={handleName} value={name}
        type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={handleCategory} value={category}
        name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
