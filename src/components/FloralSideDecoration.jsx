const FloralSideDecoration = ({ bottomPosition = '14rem' }) => {
  return (
    <>
      {/* Left side decoration */}
      <div className="absolute left-0 hidden lg:block" style={{ width: '30rem', bottom: bottomPosition }}>
        <img 
          src="/decorations/floral-swirl.svg" 
          alt="Decorative floral element" 
          className="w-full h-auto"
          style={{ transform: 'scaleX(-1)' }}
        />
      </div>

      {/* Right side decoration */}
      <div className="absolute right-0 hidden lg:block" style={{ width: '30rem', bottom: bottomPosition }}>
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
