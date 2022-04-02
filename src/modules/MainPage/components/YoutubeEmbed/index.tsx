type YoutubeEmbedInput = {
  embedId: string;
};

const YoutubeEmbed = ({ embedId }: YoutubeEmbedInput) => (
  <div className="video-responsive">
    <iframe
      width="90%"
      height="280"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;
