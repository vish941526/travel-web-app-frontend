import axios from "axios"
import React, { useEffect, useState } from "react"
import './Categories.css'
import { useCategory } from "../../Context"

export const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [noOfCategoriesToShow, setNoOfCategoriesToShow] = useState(0);


    const {hotelCategory,setHotelCategory} = useCategory();

    const handleleftToShowMore = () => {
        setNoOfCategoriesToShow((prev) => prev - 10);
    }
    const handleRightToShowMore = () => {
        setNoOfCategoriesToShow((prev) => prev + 10);
    }
    

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get("https://travel-backend-app.cyclic.app/api/categories")
                const categoriesToShow = data.slice(noOfCategoriesToShow, noOfCategoriesToShow + 10);
                setCategories(categoriesToShow);
            } catch (err) {
                console.log(err)
            }
        })()

    }, [noOfCategoriesToShow])

    const handleCategoryClick =(category)=>{
        setHotelCategory(category);
     }
     console.log({"Hotel Category":{hotelCategory}});

    return (
        <section className="d-flex align-center cursor-pointer gap-large categories">

            {
                noOfCategoriesToShow >= 10 && (
                    <button onClick={handleleftToShowMore} className="btn-category btn-left">
                        <span className="material-symbols-outlined">
                            chevron_left
                        </span>
                    </button>
                )
            }
            {
                categories && categories.map(({_id,category }) => {
                    return (

                        <span key={_id} className={category === hotelCategory ? "border-botton":""} onClick={()=>handleCategoryClick(category)}>{category}</span>
                    )
                })
            }
            {
                noOfCategoriesToShow -10 < categories.length && (
                    <button className="btn-category btn-left" onClick={handleRightToShowMore}>
                        <span className="material-symbols-outlined">
                            chevron_right
                        </span>
                    </button>
                )
            }
        </section>
    )
}