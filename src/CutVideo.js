import Axios from 'axios'
import FileDownload from 'js-file-download'

const CutVideo = () =>
{

    const handleDownload = (e) =>
    {
        e.preventDefault()
        Axios({
            url: "http://172.28.197.201:4000",
            method: "GET",
            responseType: "blob"
        }).then((res) =>
        {
            FileDownload(res.data, 'downloaded.mp4')
        })
    }

    return (
        <div className="cutVideo">
            <button onClick={(e) => handleDownload(e)}> Download </button>
        </div>
    );
}

export default CutVideo;