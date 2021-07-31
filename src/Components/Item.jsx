import React, {useState} from 'react'
import { FaArrowDown, FaArrowUp, FaTrash } from 'react-icons/fa';

const Item = (props) => {
    const [isDone, setIsDone] = useState(false)
    const handleMarkAsDone = () => setIsDone(!isDone)

    return (
        <div className="shopping-item">
            <h4 className={isDone && 'is-done'}>{props.item}</h4>   
            <button onClick={handleMarkAsDone}>Done</button> 
            <button onClick={()=>props.handleMoveUp(props.item, props.index)}><FaArrowUp/></button>  
            <button onClick={()=>props.handleMoveDown(props.item, props.index)}><FaArrowDown/></button> 
            <button onClick={()=>props.handleDelete(props.item)}><FaTrash/></button>  
        </div>
    )
}

export default Item