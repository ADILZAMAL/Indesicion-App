import React from 'react'
const Action = (props) => {
    return (
        <button 
        className="big-button"
        onClick={props.handelPick}
        disabled={!props.hasProperty}
            >What should I do?
        </button>
    )
}
export default Action