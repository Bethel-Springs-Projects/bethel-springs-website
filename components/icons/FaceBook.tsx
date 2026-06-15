const FaceBook = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={props.width ?? 24}
      height={props.height ?? 24}
      className={`${props.className}`}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 0C4.0293 0 0 4.0293 0 9C0 13.4919 3.2913 17.2152 7.5942 17.8911V11.601H5.3082V9H7.5942V7.0173C7.5942 4.7619 8.937 3.5163 10.9935 3.5163C11.9781 3.5163 13.0077 3.6918 13.0077 3.6918V5.9058H11.8737C10.755 5.9058 10.4067 6.5997 10.4067 7.3116V9H12.9024L12.5037 11.601H10.4067V17.8911C14.7087 17.2161 18 13.491 18 9C18 4.0293 13.9707 0 9 0Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FaceBook;
