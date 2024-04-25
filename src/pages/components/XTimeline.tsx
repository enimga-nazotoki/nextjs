import React, { useEffect } from 'react';

const XTimeline = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
   <a 
     className="twitter-timeline" 
     data-height="700px"
     href="https://twitter.com/omunazotoki?ref_src=twsrc%5Etfw" 
     target="_blank" rel="noopener noreferrer" 
    > 
    Tweets by PHARMA_W0RKS 
   </a>
  );
};

export default XTimeline;