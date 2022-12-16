import React from 'react';
import { Player, Hls } from '@vime/react';

export default function Example() {
  /**
   * @see https://hls-js.netlify.app/api-docs/file/src/config.ts.html.
   */
  const hlsConfig = {
    // ...
  };

  return (
    <Player controls>
      <Hls version="latest" config={hlsConfig}>
        <source data-src="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.mp4/.m3u8" type="application/x-mpegURL" />
      </Hls>
      {/* ... */}
    </Player>
  );
}