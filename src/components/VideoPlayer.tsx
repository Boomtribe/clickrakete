import React from 'react';
import { Play } from 'lucide-react';

interface VideoPlayerProps {
  thumbnailUrl: string;
  videoUrl: string;
}

export default function VideoPlayer({ thumbnailUrl, videoUrl }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <div className="relative rounded-lg overflow-hidden">
      {!isPlaying ? (
        <div className="relative">
          <img
            src={thumbnailUrl}
            alt="Video thumbnail"
            className="w-full h-auto rounded-lg"
          />
          <button
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-50 transition-opacity"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-500">
              <Play className="h-8 w-8 text-white" />
            </div>
          </button>
        </div>
      ) : (
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={videoUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg"
          />
        </div>
      )}
    </div>
  );
}