import { useState } from 'react'
// import "./Sidebar.css"


function Sidebar() {
    const colorArray = ["blue", "red", "orange"]
    const [colors, setColors] = useState(colorArray)
    const [name, setName] = useState("Ginny")
    //const [state, setState] = useState(inital State)
   

    return (
        <div className='sidebar'>
            <h1>{name}</h1>
            <button onClick={() => setName("Greyson")}>Change name</button>
            {colors.map(color => {
                return <p style={{ color: color}}>{color}</p>
            })}
        </div>
    )
}

export default Sidebar