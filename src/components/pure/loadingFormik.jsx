const LoadingFormik = () => {
  return (
    <div className="loading">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="124"
        height="124"
        viewBox="0 0 124 124"
      >
        <circle
          className="circle-loading"
          cx="62"
          cy="62"
          r="59"
          fill="none"
          stroke="hsl(246, 74%, 74%)"
          strokeWidth="6px"
        ></circle>
        <circle
          className="circle"
          cx="62"
          cy="62"
          r="59"
          fill="none"
          stroke="hsl(246, 74%, 63%)"
          strokeWidth="6px"
          strokeLinecap="round"
        ></circle>
        <polyline
          className="check"
          points="73.56 48.63 57.88 72.69 49.38 62"
          fill="none"
          stroke="hsl(246, 74%, 63%)"
          strokeWidth="6px"
          strokeLinecap="round"
        ></polyline>
      </svg>
    </div>
  );
};

export default LoadingFormik;
