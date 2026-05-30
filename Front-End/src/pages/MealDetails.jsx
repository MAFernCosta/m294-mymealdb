import { useParams } from "react-router-dom";
import { searchMealByID, updateMeal, createMeal, deleteMeal } from "../api/meals";
import { useState, useEffect } from "react";
import ResourceState from "../components/ResourceState";
import Input from "../components/Input";

function MealDetails() {
    const { idMeal, edit } = useParams();
    

    //URL for meal thumbnail placeholder 
    const thumbPlaceholder = "https://placehold.co/400x400?text=Meal+thumbnail";

    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isEditMode, setIsEditMode] = useState(edit ? true : false);
    const [message, setMessage] = useState(null);

    //Inputs
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [country, setCountry] = useState("");
    const [ingredients, setIngredients] = useState([{ name: "", measure_metric: "" },]);
    const [instructions, setInstructions] = useState("");
    const [source, setSource] = useState("");
    const [mealThumb, setMealThumb] = useState(thumbPlaceholder);

    useEffect(() => {
        async function loadQuestions() {
            try {
                const data = await searchMealByID(idMeal);

                setName(data.mealName);
                setCategory(data.category);
                setCountry(data.country);
                setIngredients(data.ingredients);
                setInstructions(data.instructions);
                setSource(data.source);
                setMealThumb(data.mealThumb);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }

        }
        if (idMeal !== "new")
            loadQuestions();
        else {
            setIsLoading(false);
            setIsEditMode(true);
            setMessage(null);
            setError(null);
            setName("");
            setCategory("");
            setCountry("");
            setIngredients([{ name: "", measure_metric: "" },]);
            setInstructions("");
            setSource("");
            setMealThumb(thumbPlaceholder);
        }
    }, [idMeal]);

    const handleIngredientsChange = (index, value) => {
        setIngredients((prev) => {
            // Kopie erstellen
            const next = [...prev];
            // Element ändern      
            next[index].name = value;
            // neues Array zurückgeben
            return next;
        });
    }
    const handleMesureChange = (index, value) => {
        setIngredients((prev) => {
            const next = [...prev];
            next[index].measure_metric = value;
            return next;
        });
    }

    const handleNewIngredient = () => {
        setIngredients((prev) => {
            // Make a copie and add a new object at the end.   
            const next = [...prev, { name: "", measure_metric: "" }];
            return next;
        });
    }
    const handleRemoveIngredient = index => {
        setIngredients((prev) => {
            const next = [...prev];
            next.splice(index, 1); // remove the index position.
            return next;
        });
    }

    const handleSaveEdit = async () => {
        event.preventDefault();
        if (isEditMode) {
            const mealData = {
                mealName: name,
                category,
                country,
                instructions,
                mealThumb,
                ingredients,
                source
            }
            try {
                if (idMeal !== "new") {
                    // UPDATE-Modus
                    const updated = await updateMeal(idMeal, mealData);
                } else {
                    // CREATE-Modus
                    const saved = await createMeal(mealData);
                }
                setMessage("Meal created sucessfully")
                toggleEditMode();
            } catch (err) {
                setError(err.message);
            }
        } else {
            toggleEditMode();
        }
    }

    const handleDeleteDiscard = async () => {
        event.preventDefault();
        if (isEditMode) {
            window.location.reload();
        } else {
            try {
                await deleteMeal(idMeal);
                setMessage("Meal deleted sucessfully");
            } catch (err) {
                setError(err.message);
            }
        }
    }

    const toggleEditMode = () => {
        setIsEditMode(!isEditMode);
    }

    return (
        <>
            <ResourceState error={error} loading={isLoading} message={message}/>
            {!isLoading && (!error &&( !message &&
                <form onSubmit={handleSaveEdit}>
                    <section className='pb-5 bg-body-secondary'>
                        <div className='container'>
                            <div className="col-xxl-8 px-4 pt-3 w-100">
                                <div className='pb-2'>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-2">
                                            <Input 
                                            isEdit={isEditMode} 
                                            type="text" 
                                            value={name} 
                                            onChange={e => setName(e.target.value)} 
                                            placeholder="Meal name" 
                                            required={true}
                                            className="border-0 p-0 m-0"
                                            />
                                        </h1>
                                        <div>
                                            <div className="btn-group me-2">
                                                <button
                                                type="submit"
                                                    className="btn btn-sm btn-outline-secondary"
                                                >
                                                    {!isEditMode ? <i className="bi bi-pencil-fill"></i> : <i className="bi bi-floppy-fill"></i>}
                                                </button>
                                                <button
                                                    className="btn btn-sm btn-outline-secondary "
                                                    onClick={handleDeleteDiscard}
                                                >
                                                    {!isEditMode ? <i className="bi bi-x-lg"></i> : <i className="bi bi-arrow-left-square"></i>}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <small className='ms-4'>
                                        <Input
                                            isEdit={isEditMode}
                                            value={category}
                                            onChange={e => setCategory(e.target.value)}
                                            type="text"
                                            placeholder="Category"
                                            required={true}
                                            className="border-0 p-0 m-0"
                                        />, <Input
                                            isEdit={isEditMode}
                                            value={country}
                                            onChange={e => setCountry(e.target.value)} type="text"
                                            placeholder="Origin country"
                                            required={true}
                                            className="border-0 p-0 m-0"
                                        />
                                    </small>
                                </div>

                                <div
                                    className="row flex-lg-row-reverse align-items-center g-5 pb-3"
                                >
                                    <div className="col-10 col-sm-8 col-lg-6">

                                        <img
                                            src={mealThumb}
                                            className="d-block mx-lg-auto object-fit-cover" alt={name}
                                            loading="lazy"
                                            style={{ maxHeight: "400px", maxWidth: "400px" }}
                                        />
                                        {isEditMode &&
                                            <Input
                                                type="url"
                                                isEdit={isEditMode}
                                                value={mealThumb}
                                                onChange={e => setMealThumb(e.target.value)}
                                                placeholder="Image URL"
                                                className="border-0 p-0 m-0 w-100"
                                            />
                                        }

                                    </div>
                                    <div className="col-lg-6">
                                        <h2>Ingredients</h2>
                                        <ul>{ingredients.map((el, index) =>
                                            <li key={index}>
                                                <Input
                                                    isEdit={isEditMode}
                                                    value={el.name}
                                                    onChange={e => handleIngredientsChange(index, e.target.value)}
                                                    type="text"
                                                    placeholder="Ingredient"
                                                    className="w-40"
                                                    required={true}
                                                    className="border-0 p-0 m-0"
                                                /> - <Input
                                                    isEdit={isEditMode}
                                                    value={el.measure_metric}
                                                    onChange={e => handleMesureChange(index, e.target.value)}
                                                    placeholder="Mesure"
                                                    type="text"
                                                    className="w-30"
                                                    className="border-0 p-0 m-0"
                                                />
                                                {isEditMode &&
                                                    <small>
                                                        <button className="btn-close" onClick={() => handleRemoveIngredient(index)} />
                                                    </small>}
                                            </li>
                                        )}
                                            {isEditMode &&
                                                <button className="btn">
                                                    <i className="bi bi-plus-square" onClick={handleNewIngredient}></i>
                                                </button>
                                            }
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
                                <p style={{ whiteSpace: 'pre-line', }}>
                                    <Input isEdit={isEditMode} value={instructions} onChange={e => setInstructions(e.target.value)} type="textarea" />
                                </p>
                                {meals.source && (
                                    !isEditMode &&
                                    <small className='text-end mt-1 d-block'>
                                        <a
                                            className='link-offset-1'
                                            target="_blank"
                                            href={source}
                                        >
                                            Source
                                        </a>
                                    </small>)
                                }
                                {isEditMode &&
                                    <div className="d-flex flex-row-reverse">
                                        <div>
                                            <label>Source:</label><br />
                                            <Input
                                                value={source}
                                                isEdit={isEditMode}
                                                onChange={e => setSource(e.target.value)}
                                                type="url"
                                                placeholder="https://www.exmaple.com/"
                                                className="border-0 p-0 m-0"
                                            />
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </section>
                </form>))}
        </>
    )
}
export default MealDetails;