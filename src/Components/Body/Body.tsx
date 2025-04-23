
import { lisaSongs } from '../../Data/MusicData/MusicList'

const Body = () => {
  return (
    <div>
        {lisaSongs.map((song, index) => {
            return (
                <div key={index} className="song-container">
                    <div className="song-info">
                        <h2>{song.title}</h2>
                        <p>{song.link}</p>
                        {/* <audio controls src={song.audio}>
                            Your browser does not support the audio element.
                        </audio> */}
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Body