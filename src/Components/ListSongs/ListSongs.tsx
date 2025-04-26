import { SongData } from '../Home/Container';

interface ListProps {
  song: SongData[];
}

const ListSongs = ({ song }: ListProps) => {
  return (
    <div className="w-full max-w-250 mx-auto h-138 mt-[-128px] overflow-y-scroll border-2 bg-gray-100 rounded-lg shadow-lg">
      {song.map((items, index) => (
        <div
          key={index}
          className="bg-white shadow-xl rounded-lg overflow-hidden mb-4 transition-transform transform hover:scale-98 hover:shadow-2xl"
        >
          <div className="p-6">
            <h1 className="text-xl font-semibold text-gray-800 mb-3">{items.songTitle}</h1>
            <a
              href={items.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-600 hover:text-blue-800 font-medium text-lg"
            >
              Listen Now
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListSongs;
