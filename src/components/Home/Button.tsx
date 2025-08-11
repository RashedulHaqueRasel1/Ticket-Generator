import React from 'react'

const Button = () => {
    return (
        <div>
            <button
                type="submit"
                className="mt-4 w-full py-3 rounded-lg font-semibold text-lg"
                style={{
                    background: "linear-gradient(90deg,#ff9a80,#ff7a66)",
                    color: "#1B1230",
                }}
            >
                Generate My Ticket
            </button>
        </div>
    )
}

export default Button
