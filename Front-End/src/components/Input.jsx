function Input({ isEdit = false, value, type = "text", onChange, placeholder = "", className, required=false}) {
    if (!isEdit)
        return (
            <>{value}</>)
    if (type === "textarea")
        return (
            <textarea
                rows="10"
                className="form-control"
                value={value}
                onChange={onChange}
            />
        )
    return (
        <input
            className=""
            value={value}
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            className={className}
            required={required}
        />
    )
}

export default Input;