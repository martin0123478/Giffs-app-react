import { useState } from "react"
import { AddCategory, GifGrid } from "./components"
const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['valorant'])
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return
        setCategories(cat => [newCategory, ...cat])
    }
    return (
        <>
            <h1>gift expert app</h1>
            <AddCategory
                onNewCategory={value => onAddCategory(value)}
            />


            {categories.map(categories => (
                (
                    <GifGrid key={categories} categories={categories} />

                )
            ))}


        </>
    )
}

export default GiftExpertApp
