import { useState } from "react";

const ExtractVideoInfo = () =>
{
    const [url, setUrl] = useState('');
    const [isPending, setIsPending] = useState(false)

    const handleSubmit = (e) =>
    {
        e.preventDefault()
        setIsPending(true)
        fetch(`https://yt.lemnoslife.com/videos?part=mostReplayed&id=${url.split("=")[1]}`, {
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
            console.log(data)
            setIsPending(false)
        })
    }

    return (
        <div className="create">
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

export default ExtractVideoInfo;