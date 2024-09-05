import video from "../assets/hello.mp4"

function Video() {
  return (
     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-200 to-pink-200 p-4">
      <h1 className="text-4xl font-bold text-pink-600 mb-6">
        Congratulations! 🎉 You’ve successfully submitted the form.
      </h1>

      {/* Responsive Video Wrapper */}
      <div className="relative w-full max-w-3xl h-0 pb-[56.25%]"> {/* Aspect ratio 16:9 */}
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={video} // Replace with your video link
          title="Success Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
   
  )
}

export default Video