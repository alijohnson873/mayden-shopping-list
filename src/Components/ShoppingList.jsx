import React, {useState, useEffect} from 'react'
import Item from './Item'
import '../styles/shopping-list.css'

const ShoppingList = () => {
    const [inputValue, setInputValue] = useState('')
    const [shoppingListArray, updateShoppingListArray] = useState(['Apple', 'Kimchi', 'Pears'])

    useEffect(() => {
        window.localStorage.setItem('shoppingListArray', JSON.stringify(shoppingListArray));
    }, [shoppingListArray]);
    useEffect(() => {
        updateShoppingListArray(JSON.parse(window.localStorage.getItem('shoppingListArray')));
    }, []);
   
    
    const handleSubmit = (e) => {
        e.preventDefault() 
        updateShoppingListArray([...shoppingListArray, inputValue])
        setInputValue('')
    }
    const handleDelete = (itemToBeDeleted) => {
        let newArray = shoppingListArray.filter(item => item !== itemToBeDeleted)
        updateShoppingListArray([...newArray])
    }
    const handleMoveDown = (item, index) => {
        if (index === shoppingListArray.length -1){return}
        let newArray = shoppingListArray
        newArray.splice(index + 2 , 0, item)
        newArray.splice(index, 1)
        updateShoppingListArray([...newArray])
    }
    const handleMoveUp = (item, index) => {
        if (index === 0){return}
        let newArray = shoppingListArray
        newArray.splice(index - 1 , 0, item)
        newArray.splice(index + 1, 1)
        updateShoppingListArray([...newArray])
    }

    return (
        <div className='shopping-list-wrapper'> 
        <h1>Mayden Shopping List</h1>
            <form>
            <label>Add Item To Shopping List</label>
            <input
                type='text'
                value={inputValue}
                placeholder = 'Add Item'
                onChange={e => setInputValue(e.target.value)}
            />
            <input type='submit' value='Submit' onClick={handleSubmit} />
            </form> 
            <div className='shopping-items-wrapper'>
                {shoppingListArray.map((item, index) => (
                    <Item 
                        item={item}
                        index = {index}
                        handleDelete={handleDelete}
                        handleMoveUp={handleMoveUp}
                        handleMoveDown={handleMoveDown}
                    />
                ))}
            </div>
        </div>
    )
}

export default ShoppingList