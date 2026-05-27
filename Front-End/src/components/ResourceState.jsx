function ResourceState({ loading = false, error = null, message = null }) {
    if (loading)
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    if (error)
        return (
            <div className="alert alert-danger alert-dismissible fade show w-50 mx-auto">
                <h4 className="alert-heading">
                    <i className="bi bi-exclamation-octagon-fill"></i> Oops! Something went wrong.
                </h4>
                <hr />
                <p className="mb-0">{error}</p>
                <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
            </div>
        )
    if (message)
        return (
            <div className="alert alert-secondary alert-dismissible fade show w-50 mx-auto">
                <h2 className="alert-heading d-flex justify-content-center align-items-center">
                    <i class="bi bi-question-octagon-fill"></i> <span className="ms-2 fs-6">{message}</span>
                </h2>
                <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
            </div>
        )
    
}

export default ResourceState;