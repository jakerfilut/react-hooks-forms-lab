import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit, name, setName, category, setCategory}) {
  

  // const [name, setName] = useState("")
  // const [category, setCategory] = useState("Produce")


  function nameOfFood(event){
    setName(event.target.value)
    console.log({name})
  }

  function selectedCategory(event){
    setCategory(event.target.value)
    console.log({category})
  }

  function submitNewFood(event){
    event.preventDefault()
    onItemFormSubmit({
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: name,
      category: category,
    })
  }



  return (
    <form onSubmit={submitNewFood}
    className="NewItem">
      <label>
        Name:
        <input onChange={nameOfFood}
        value={name}
        ontype="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={selectedCategory}
        value={category}
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









// import React from "react";
// import { v4 as uuid } from "uuid";

// function ItemForm(props) {
//   return (
//     <form className="NewItem">
//       <label>
//         Name:
//         <input type="text" name="name" />
//       </label>

//       <label>
//         Category:
//         <select name="category">
//           <option value="Produce">Produce</option>
//           <option value="Dairy">Dairy</option>
//           <option value="Dessert">Dessert</option>
//         </select>
//       </label>

//       <button type="submit">Add to List</button>
//     </form>
//   );
// }

// export default ItemForm;