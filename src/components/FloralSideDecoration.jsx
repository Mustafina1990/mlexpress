const FloralSideDecoration = ({ bottomPosition = '10rem' }) => {
  return (
    <>
      {/* Left side decoration */}
      <div
        className="absolute left-0 floral-decoration-show"
        style={{ bottom: bottomPosition, pointerEvents: 'none' }}
        aria-hidden="true"
      >
        <img
          src="/decorations/floral-swirl.svg"
          alt=""
          className="floral-img"
          style={{ transform: 'scaleX(-1)', opacity: 0.65 }}
        />
      </div>

      {/* Right side decoration */}
      <div
        className="absolute right-0 floral-decoration-show"
        style={{ bottom: bottomPosition, pointerEvents: 'none' }}
        aria-hidden="true"
      >
        <img
          src="/decorations/floral-swirl.svg"
          alt=""
          className="floral-img"
          style={{ opacity: 0.65 }}
        />
      </div>
    </>
  );
};

export default FloralSideDecoration;
