const API_URL = import.meta.env.VITE_API_URL;

export async function searchMeal(keyword) {
    const response = await fetch(`${API_URL}/meals?mealName:contains=${keyword}`);
    if (!response.ok) {
        throw new Error("Meals could not be loaded");
    }
    return response.json();
}

export async function searchMealByID(id){
    const response = await fetch(`${API_URL}/meals/${id}`);
    if (!response.ok) {
        throw new Error("Meals could not be loaded");
    }
    return response.json();
}

export async function updateMeal(id, meal) {
  const response = await fetch(`${API_URL}/meals/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(meal),
  });
  if (!response.ok) {
    throw new Error("Meal could not be updated");
  }
  return response.json();
}

export async function createMeal(meal) {
  const response = await fetch(`${API_URL}/meals`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(meal),
  });
  if (!response.ok) {
    throw new Error("Meal could not be saved");
  }
  return response.json();
}

export async function deleteMeal(id) {
  const response = await fetch(`${API_URL}/meals/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Meal could not be deleted");
  }
}

