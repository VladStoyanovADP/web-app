
import FileDownload from 'js-file-download'
import Axios from 'axios'

const CutVideo = () =>
{

    const handleDownload = (e) =>
    {
        e.preventDefault()
        Axios({
            url: "http://172.28.201.60:4000",
            method: "GET",
            responseType: "blob"
        })
        .then((res) =>
        {
            FileDownload(res.data, 'downloaded.mp4')
        })
        .catch((err) =>
        {
            console.log(err)
        })
    }

    return (
        <div className="cutVideo">
            <button onClick={(e) => handleDownload(e)}> Download </button>
        </div>
    );
}

export default CutVideo;