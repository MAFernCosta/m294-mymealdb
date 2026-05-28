import { Link } from "react-router-dom";

function MealCard({ meal }) {
    const { id, mealName, mealThumb } = meal;

    return (
        <div className="col">
            <div className="position-relative">
                <Link to={`/mealdetails/${id}`} className="link-dark link-underline link-underline-opacity-0 link-underline-opacity-100-hover link-offset-3-hover">
                    <div>
                        <img className="w-100 object-fit-cover" src={mealThumb} />
                    </div>
                    <div className="pt-3 pb-2 ">
                        <h6>{mealName}</h6>
                    </div>
                </Link>
                {true &&
                    <div className="z-3 position-absolute btn-group" style={{
                        bottom: "12px",
                        right: "0px"
                    }}>
                        <button className="btn btn-sm btn-outline-secondary "><i className="bi bi-pencil-fill"></i></button>
                        <button className="btn btn-sm btn-outline-secondary "><i className="bi bi-x-lg"></i></button>
                    </div>
                }
            </div>

        </div>
    )

}

export default MealCard;