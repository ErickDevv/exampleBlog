import { CircularProgress } from "@nextui-org/react";

const Loading = () => {
  return (
    <div className="absolute inset-0 flex justify-center items-center bg-black/90 bg-opacity-90 !z-50">
      <CircularProgress
        color="warning"
        aria-label="Loading..."
        classNames={{
          svg: "w-36 h-36",
        }}
      />
    </div>
  );
};

export default Loading;
