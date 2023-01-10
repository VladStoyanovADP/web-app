import { useState } from "react";
import { useHistory } from 'react-router-dom'

const Create = () =>
{
    const [url, setUrl] = useState('');
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()

    const handleSubmit = (e) =>
    {
        e.preventDefault()
        setIsPending(true)
        fetch('https://yt.lemnoslife.com/videos?part=mostReplayed&id=mEh8piCgoqU', {
        })
        .then((response) =>
        {
            if (!response.ok)
            {
                throw Error('could not fetch the data for that resource')
            }
            return response.json()
        })
        .then((data) =>
        {
            console.log('new video added', data)
            setIsPending(false)
            history.push('/')
        })
    }

    return (
        <div className="create">
            <h2> Add a New Video </h2>
            <form onSubmit={handleSubmit}>
                <label>Video URL:</label>
                <input
                    type="text"
                    required
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}>
                </input>
                {!isPending && <button> Submit </button>}
                {isPending && <button> Loading... </button>}
            </form>
        </div>
    );
}

export default Create;