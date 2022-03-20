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

const categoryFilter = (categoryData,fastDelivery, arriving) => {
    return categoryData
    .filter((prod) => fastDelivery ? prod.fastDelivery : true)
    .filter((prod) => arriving ? prod.arrivingSoon : true)

}

export {filterForRating, priceRangeFilter, categoryFilter}