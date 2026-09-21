export const getFilteredDestinations = (data, queryObj = {}) => {
    //Convert all incoming query keys to lowercase
    const normalizedQuery = {};
    for (const key in queryObj) {
        normalizedQuery[key.toLowerCase()] = queryObj[key];
    }

    //Destructure using lowercased keys
    const { name, category, maxprice, minrating } = normalizedQuery;

    if (name) {
        data = data.filter((dest) =>
            dest.name.toLowerCase().includes(name.toLowerCase())
        );
    }

    if (category) {
        data = data.filter((dest) =>
            dest.category.toLowerCase() === category.toLowerCase()
        );
    }

    if (maxprice !== undefined) {
        data = data.filter((dest) =>
            dest.pricePerNight <= Number(maxprice)
        );
    }

    if (minrating !== undefined) {
        data = data.filter((dest) =>
            dest.rating >= Number(minrating)
        );
    }

    return data;
};