
const Container = () => {
  return (

    //---------------------Submit Song---------------------//
    <div className="flex justify-start p-10 mt-33">
    <form className="border border-black p-5 max-w-100 w-full bg-white rounded-lg shadow-lg">
      <div className="mb-4">
        <label htmlFor="songName" className="block text-left mb-2">Song Name</label>
        <input type="text" id="songName" placeholder="Enter Song Name" className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4"> 
        <label htmlFor="url" className="block text-left mb-2">URL</label>
        <input type="text" id="url" placeholder="Enter URL" className="w-full p-2 border rounded" />
      </div>
      <div className="flex justify-center w-full mt-4">
      <button type="submit" className="flex justify-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" >Submit</button>
      </div>
    </form>
  </div>
  )
}

export default Container