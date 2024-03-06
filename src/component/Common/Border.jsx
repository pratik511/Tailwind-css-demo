/* eslint-disable react/prop-types */

const Border = ({ children }) => {
    return (
        <div className="p-3 border rounded-md">
            {children}
        </div>
    )
}

export default Border