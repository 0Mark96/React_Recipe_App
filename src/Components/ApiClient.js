import axios from "axios";

export const getSearched = async (query) => {
    const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&fillIngredients=true&number=80&diet=vegetarian&query=${query}&&apiKey=${process.env.REACT_APP_API_KEY}`);
    return res;
}
export const getInfo = async (singleRecipeid) => {
    const res = await axios.get(`https://api.spoonacular.com/recipes/${singleRecipeid}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    return res;
}
