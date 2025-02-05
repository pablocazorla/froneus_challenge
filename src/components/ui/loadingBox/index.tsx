const LoadingBox = ({ loading = false }) => {
  return loading ? (
    <div className="absolute z-50 top-0 left-0 w-full h-full bg-white/40 backdrop-blur-[2px] text-center pointer-events-none rounded-lg">
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 loading-box-spinner">
        <span className="pi pi-spinner text-6xl text-sky-600 icon-loading"></span>
      </div>
    </div>
  ) : null;
};
export default LoadingBox;
