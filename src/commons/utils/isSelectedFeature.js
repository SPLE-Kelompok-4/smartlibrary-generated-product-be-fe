const isSelectedFeature = (item) => selectedFeatures.some(x => x.includes(item))

export default isSelectedFeature

var selectedFeatures = Array.from(new Set ([

"EBookDisplay",


"EBookDisplay",
"DisplayWithPrice",


"EBookDisplay",
"DisplayWithImage",


"WishlistManagement",


"ReviewManagement",


"Home",
]))
