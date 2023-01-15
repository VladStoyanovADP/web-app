import { useState } from "react";
import FileDownload from "js-file-download";
import Axios from "axios";

const ExtractVideoInfo = () => 
{
  const [url, setUrl] = useState("");
  const [mostReplayed, setMostReplayed] = useState(0);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) =>
  {
    e.preventDefault();
    setIsPending(true);
    Axios.get(`https://yt.lemnoslife.com/videos?part=mostReplayed&id=${url.split("=")[1]}`).then(data =>
    {
      let mostReplayedIndex = 0;
      let heatMarkers = data.data.items[0].mostReplayed.heatMarkers;
      for (let i = 0; i < heatMarkers.length; i++)
      {
        if (heatMarkers[i].heatMarkerRenderer.heatMarkerIntensityScoreNormalized >
        heatMarkers[mostReplayedIndex].heatMarkerRenderer.heatMarkerIntensityScoreNormalized) mostReplayedIndex = i
      }
      setMostReplayed(heatMarkers[mostReplayedIndex].heatMarkerRenderer.timeRangeStartMillis)
      return mostReplayed
    })
    .then(mostReplayed => Axios.post("http://localhost:8000/test", { mostReplayed }))
    .then(() => 
    {
      Axios.get("http://172.28.201.60:4000", { responseType: "blob" }).then(res => 
      {
        FileDownload(res.data, "downloaded.mp4")
        setIsPending(false);
      })
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
          onChange={(e) => setUrl(e.target.value)}
        />
        {!isPending && <button> Submit </button>}
        {isPending && <button> Loading... </button>}
      </form>
    </div>
  );
};

export default ExtractVideoInfo;
