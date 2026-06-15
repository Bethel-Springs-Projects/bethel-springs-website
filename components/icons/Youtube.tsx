const Youtube = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={props.width ?? 24}
      height={props.height ?? 24}
      className={`${props.className}`}
      viewBox="0 0 18 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.5887 2.2482C18 3.852 18 7.2 18 7.2C18 7.2 18 10.548 17.5887 12.1518C17.3601 13.0383 16.6914 13.7358 15.8445 13.9716C14.3064 14.4 9 14.4 9 14.4C9 14.4 3.6963 14.4 2.1555 13.9716C1.305 13.7322 0.6372 13.0356 0.4113 12.1518C2.68221e-08 10.548 0 7.2 0 7.2C0 7.2 2.68221e-08 3.852 0.4113 2.2482C0.6399 1.3617 1.3086 0.6642 2.1555 0.4284C3.6963 -1.60933e-07 9 0 9 0C9 0 14.3064 -1.60933e-07 15.8445 0.4284C16.695 0.6678 17.3628 1.3644 17.5887 2.2482ZM7.2 10.35L12.6 7.2L7.2 4.05V10.35Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Youtube;
