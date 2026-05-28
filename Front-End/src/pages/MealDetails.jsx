import { useParams } from "react-router-dom";
import { searchMealByID } from "../api/meals";
import { useState, useEffect } from "react";
import ResourceState from "../components/ResourceState";

function MealDetails() {
    const { idMeal } = useParams();

    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadQuestions() {
            try {
                const data = await searchMealByID(idMeal);
                setMeals(data);
                console.log(data)
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }
        loadQuestions();
    }, []);

    // Split the strInstruction by newlines in a array
    const instructionsLines = instructions => instructions.split(/(?:\r\n|\r|\n)/);

    return (
        <>
            <ResourceState error={error} loading={isLoading} />
            {!isLoading && (!error &&
                <>
                    <section className='pb-5 bg-body-secondary'>
                        <div className='container'>
                            <div className="col-xxl-8 px-4 pt-3 w-100">
                                <div className='pb-2'>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-2">
                                            {meals.mealName}
                                        </h1>
                                        <div>
                                            <div className="btn-group me-2">
                                                <button className="btn btn-sm btn-outline-secondary "><i className="bi bi-pencil-fill"></i></button>
                                                <button className="btn btn-sm btn-outline-secondary "><i className="bi bi-x-lg"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <small className='ms-4'>
                                        {meals.category}, {meals.country}
                                    </small>
                                </div>

                                <div
                                    className="row flex-lg-row-reverse align-items-center g-5 pb-3"
                                >
                                    <div className="col-10 col-sm-8 col-lg-6">
                                        <img
                                            src={meals.mealThumb}
                                            className="d-block mx-lg-auto" alt={meals.mealName}
                                            loading="lazy"
                                            style={{ maxHeight: "400px" }}
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <h2>Ingredients</h2>
                                        <ul>{meals.ingredients.map((el) =>
                                            <li key={el.name}>{el.measure_metric} - {el.name}</li>
                                        )}
                                        </ul>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>
                    <section>
                        <div className="container">
                            <div className='py-4'>
                                <h2 className='pb-3'>Directions</h2>
                                {instructionsLines(meals.instructions).map((line) => <p key={line}>{line}</p>)}
                                {meals.source &&
                                    <small className='text-end mt-1 d-block'>
                                        <a
                                            className='link-offset-1'
                                            target="_blank"
                                            href={meals.source}
                                        >
                                            Source
                                        </a>
                                    </small>
                                }
                            </div>
                        </div>
                    </section>
                </>)}
        </>
    )
}
export default MealDetails;