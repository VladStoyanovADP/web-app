import Axios from 'axios'
import FileDownload from 'js-file-download'

const CutVideo = () =>
{

    const handleDownload = (e) =>
    {
        e.preventDefault()
        Axios({
            url: "http://172.24.144.5:4000",
            method: "GET",
            responseType: "blob"
        }).then((res) =>
        {
            FileDownload(res.data, 'downloaded.png')
        })
    }

    return (
        <div className="cutVideo">
            <button onClick={(e) => handleDownload(e)}> Download </button>
            {/* <iframe src='https://www.youtube.com/watch?v=xNRJwmlRBNU'> </iframe> */}
        </div>
    );
}

export default CutVideo;