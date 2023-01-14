import Axios from 'axios'
import FileDownload from 'js-file-download'

const CutVideo = () =>
{

    const handleDownload = (e) =>
    {
        e.preventDefault()
        Axios({
            url: "http://172.28.193.233:4000",
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