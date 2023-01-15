import { useState } from "react";

const ExtractVideoInfo = () =>
{
    const [url, setUrl] = useState('');
    const [mostReplayed, setMostReplayed] = useState(0);
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
            let mostReplayedIndex = 0
            let heatMarkers = data.items[0].mostReplayed.heatMarkers
            for (let i = 0; i < heatMarkers.length; i++)
            {
                if (heatMarkers[i].heatMarkerRenderer.heatMarkerIntensityScoreNormalized > 
                    heatMarkers[mostReplayedIndex].heatMarkerRenderer.heatMarkerIntensityScoreNormalized)
                {
                    mostReplayedIndex = i
                }
            }
            setMostReplayed(heatMarkers[mostReplayedIndex].heatMarkerRenderer.timeRangeStartMillis)
        })
        .then(() =>
        {
            const body = { mostReplayed }

            console.log(URL.createObjectURL(file))

            const fileInput = document.getElementById("myFileInput");
            const file = fileInput.files[0];
            console.log(file);
            const formData = new FormData();
            formData.append("file", file);

            fetch('http://localhost:8000/test', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })

            setIsPending(false)
        })
    }

    return (
        <div className="create">
            <form onSubmit={handleSubmit}>
                <input type="file" id="myFileInput" accept="video/mp4"></input>
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