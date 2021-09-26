import React, { useEffect, useState } from 'react'

const EditLogModal = ({ match }) => {

    const [data, setData] = useState({})

    

    useEffect(() => {
        fetch(`/nutrition/${match.params.id}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [match]);

    console.log(data.name)

    return (
        <div>

          <h1> {data.name} </h1>
        </div>
    )
}

export default EditLogModal
