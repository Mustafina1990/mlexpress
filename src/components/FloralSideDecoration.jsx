const FloralSideDecoration = ({ bottomPosition = '14rem' }) => {
  return (
    <>
      {/* Left side decoration - Hidden on screens smaller than 1800px */}
      <div 
        className="absolute left-0 floral-decoration-show" 
        style={{ width: '30rem', bottom: bottomPosition }}
      >
        <img 
          src="/decorations/floral-swirl.svg" 
          alt="Decorative floral element" 
          className="w-full h-auto"
          style={{ transform: 'scaleX(-1)' }}
        />
      </div>

      {/* Right side decoration - Hidden on screens smaller than 1800px */}
      <div 
        className="absolute right-0 floral-decoration-show" 
        style={{ width: '30rem', bottom: bottomPosition }}
      >
        <img 
          src="/decorations/floral-swirl.svg" 
          alt="Decorative floral element" 
          className="w-full h-auto"
        />
      </div>
    </>
  );
};

export default FloralSideDecoration;
