import { useState } from "react"
import PropTypes from 'prop-types'
const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState("")
    const onSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim().length <= 1) return
        //setCategories(cat => [inputValue, ...cat])
        onNewCategory(inputValue.trim())
        setInputValue('')
    }
    return (
        <form onSubmit={(event) => onSubmit(event)} aria-label="form">
            <input
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                type="text"
                placeholder="Buscar Gifs"
            />
        </form>

    )

}
AddCategory.PropTypes = {
    onNewCategory: PropTypes.func.isRequired
}
export default AddCategory
