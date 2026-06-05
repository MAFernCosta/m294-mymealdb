import { useState, useEffect } from "react";
import ResourceState from "../components/ResourceState";
import MealCard from "../components/MealCard";
import { searchMeal, deleteMeal } from "../api/meals";
import Modal from "../components/Modal";


function Home() {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const [query, setQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState("");

    // Delay the actual query by 400ms after the user stops typing
    useEffect(() => {
        const timer = setTimeout(() => setDebouncedQuery(query), 400);
        return () => clearTimeout(timer); // cancel if user keeps typing
    }, [query]);

    useEffect(() => {
        if (!debouncedQuery) return;
        // fire your API call here
        handleSearchMeal();
    }, [debouncedQuery]);

    async function handleSearchMeal() {
        
        try {
            setIsLoading(true);
            const data = await searchMeal(debouncedQuery);
            setMeals(data);
        } catch (err) {
            setMeals([]);
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }

    async function handleDelete(id) {

        try {
            await deleteMeal(id);
            setMeals((prev) => prev.filter((q) => q.id !== id));
        } catch (err) {
            setError(err.message);
        }
        return <Modal />
    }

    return (
        <>
            <div className="container">
                <div className="mb-3 text-center w-50 mx-auto py-5 mb-3">
                    <h1 className="fs-2">Search your meal</h1>
                    <input type="text" className="form-control" value={query} onChange={e => setQuery(e.target.value)} />
                </div>
            </div>

            {debouncedQuery &&
                <div className="bg-body-tertiary py-5">
                    <div className="container">
                        <ResourceState error={error} loading={isLoading} />
                        {meals.length > 0 &&
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                {meals.map(meal =>
                                    <MealCard meal={meal} key={meal.id} handleDelete={handleDelete} />
                                )}
                            </div>
                        }
                    </div>

                </div>}
        </>
    )
}

export default Home;