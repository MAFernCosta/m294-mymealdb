import { useState, useEffect } from "react";
import ResourceState from "../components/ResourceState";

const API_URL = import.meta.env.VITE_API_URL;

function Home() {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchKeyword, setSearchKeyword] = useState("");


    async function loadQuestions(e) {
        setSearchKeyword(e.target.value);
        try {
            setIsLoading(true);
            const response = await fetch(`${API_URL}/meals?Meal:contains=${searchKeyword}`);
            if (!response.ok) {
                throw new Error("Fragen konnten nicht geladen werden");
            }
            const data = await response.json();
            setMeals(data);
        } catch (err) {
            setMeals([]);
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <>
            <div className="container">
                <div className="mb-3 text-center w-50 mx-auto py-5 mb-3">
                    <h1 className="fs-2">Search your meal</h1>
                    <input type="text" className="form-control" value={searchKeyword} onChange={loadQuestions}/>
                </div>
            </div>
            <div className="container mt-5">
                <ResourceState error={error} loading={isLoading} />
                {meals.length > 0 && 
                meals.map(el => 
                    <p key={el.Meal}>{el.Meal}</p>
                )
                }
            </div>
        </>
    )
}

export default Home;