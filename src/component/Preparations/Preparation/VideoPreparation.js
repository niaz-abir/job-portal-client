import React from "react";
import { ReactMediaRecorder } from "react-media-recorder";

const VideoPreparation = () => {
  return (
    <div className="flex justify-center h-[100vh] mt-14">
      <div>
        <ReactMediaRecorder
          video
          render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
            <div>
              {status === "idle" && (
                <p className="mb-4 text-3xl font-bold text-white">
                  No video recorded yet.
                </p>
              )}

              {(status === "recording" || status === "stopped") && (
                <>
                  <video
                    className="shadow-md shadow-pink-500 w-[540px]"
                    src={mediaBlobUrl}
                    controls
                    autoPlay
                    loop
                  />
                  <p className="mb-4 font-bold">
                    {status === "recording"
                      ? "Recording..."
                      : "Recording Finished"}
                  </p>
                </>
              )}

              <div className="mt-6">
                <button
                  className="px-6 py-4 mr-4 font-bold btn-all"
                  onClick={startRecording}
                >
                  Start Recording
                </button>
                <button
                  className="px-6 py-4 mr-4 font-bold btn-all"
                  onClick={stopRecording}
                >
                  Stop Recording
                </button>
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default VideoPreparation;
