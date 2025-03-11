"use client";
import React, { useEffect } from "react";
import Script from "next/script";

const InstagramGrid = () => {
  const posts = [
    "https://www.instagram.com/p/DGSQN_XBI5Z/?img_index=1",
    "https://www.instagram.com/p/DFy9RRmh_wO/?utm_source=ig_embed&utm_campaign=loading",
    "https://www.instagram.com/p/DGVE8bGBZl1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    "https://www.instagram.com/p/DGUVbYSB2Yy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    "https://www.instagram.com/p/DGUdDpbBm_2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    "https://www.instagram.com/reel/DF145ApBphd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  ];

  // Process Instagram embeds when the component mounts.
  useEffect(() => {
    if (
      window.instgrm &&
      window.instgrm.Embeds &&
      typeof window.instgrm.Embeds.process === "function"
    ) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <div className="container max-w-screen-2xl mx-auto px-4 py-8">
      {/* Load Instagram Embed Script */}
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (window.instgrm && window.instgrm.Embeds) {
            window.instgrm.Embeds.process();
          }
        }}
      />
      {/* Masonry-like Responsive Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
        {posts.map((post, index) => (
          <div key={index} className="mb-4 break-inside-avoid">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={post}
              data-instgrm-version="14"
              style={{ width: "100%" }}
            >
              <a href={post} target="_blank" rel="noopener noreferrer">
                View
              </a>
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramGrid;
