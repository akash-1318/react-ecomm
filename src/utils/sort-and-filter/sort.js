const sortForPrice = (productData, sortByPrice) => {
    if(sortByPrice === "PRICE_LOW_TO_HIGH"){
        return [...productData].sort((a,b) => a.price - b.price)
    }
    if(sortByPrice === "PRICE_HIGH_TO_LOW"){
        return [...productData].sort((a,b) => b.price - a.price)
    }
    return productData
}

export {sortForPrice}