export const selectCafe = state => state.cafeDetails;

export const selectRating = state => state.cafeDetails.user_caves.map(i=> i.rating)