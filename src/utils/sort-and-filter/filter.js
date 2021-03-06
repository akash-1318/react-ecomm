const filterForRating = (ratingData, filterByRating) => {
    if(filterByRating === "FOUR_AND_ABOVE"){
       return ratingData.filter((prod) => prod.rating >= 4)
    }
    if(filterByRating === "THREE_AND_ABOVE"){
        return ratingData.filter((prod) => prod.rating >= 3)
     }
     if(filterByRating === "TWO_AND_ABOVE"){
        return ratingData.filter((prod) => prod.rating >= 2)
     }
     if(filterByRating === "ONE_AND_ABOVE"){
        return ratingData.filter((prod) => prod.rating >= 1)
     }
     return ratingData
}

const priceRangeFilter = (dataForFilter, priceRange) => {
    return dataForFilter.filter((prod) => Number(prod.price) <= priceRange)
}

const categoryFilter = (categoryData,fastDelivery, arriving, clothingType) => {
    return categoryData
    .filter((prod) => fastDelivery ? prod.category.fastDelivery : true)
    .filter((prod) => arriving ? prod.category.arrivingSoon : true)
    .filter((prod) => clothingType !== "" ? clothingType === prod.category.productType : true)
}

export {filterForRating, priceRangeFilter, categoryFilter}