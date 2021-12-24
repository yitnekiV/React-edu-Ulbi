export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit);
}

// export const getPagesArray = (totalPages) => {
//     let result = [];

//     console.log('Calculate pagination');

//     for (let i = 0; i < totalPages; i++) {
//         result.push(i + 1)
//     }

//     return result;
// } 