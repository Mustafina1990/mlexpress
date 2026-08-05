const GoldenDivider = () => {
  return (
    <div className="w-full my-16 flex items-center justify-center gap-4 px-8">
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, #F59E0B, #FCD34D)' }} />
      <div className="flex items-center gap-2 shrink-0">
        <div className="w-2 h-2 rounded-full" style={{ background: '#F59E0B' }} />
        <div className="w-3 h-3 rounded-full" style={{ background: 'linear-gradient(135deg, #F59E0B, #FCD34D)' }} />
        <div className="w-2 h-2 rounded-full" style={{ background: '#F59E0B' }} />
      </div>
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, #F59E0B, #FCD34D)' }} />
    </div>
  );
};

export default GoldenDivider;
