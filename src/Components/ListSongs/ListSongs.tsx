import { SongData } from '../Home/Container';

interface ListProps {
  song: SongData[];
}

const ListSongs = ({ song }: ListProps) => {
  return (
    <div className="w-full mx-auto p-4 mt-8 h-96 overflow-y-scroll">
      {song.map((items, index) => (
        <div
          key={index}
          className="bg-white shadow-xl rounded-lg overflow-hidden mb-6 transition-transform transform hover:scale-105 hover:shadow-2xl"
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
