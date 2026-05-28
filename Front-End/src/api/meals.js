const API_URL = import.meta.env.VITE_API_URL;

export async function searchMeal(keyword) {
    const response = await fetch(`${API_URL}/meals?mealName:contains=${keyword}`);
    if (!response.ok) {
        throw new Error("Fragen konnten nicht geladen werden");
    }
    return response.json();
}

export async function searchMealByID(id){
    const response = await fetch(`${API_URL}/meals/${id}`);
    if (!response.ok) {
        throw new Error("Fragen konnten nicht geladen werden");
    }
    return response.json();
}