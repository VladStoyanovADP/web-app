const CutVideo = () => {

    const handleSubmit = (e) =>
    {
        e.preventDefault()
        console.log("?")
    }

    return ( 
        <div className="cutVideo">
            <form onSubmit={handleSubmit}> 
                <button> Cut Video </button>
                {/* <iframe src='https://www.youtube.com/watch?v=xNRJwmlRBNU'> </iframe> */}
            </form>
        </div>
    );
}
 
export default CutVideo;