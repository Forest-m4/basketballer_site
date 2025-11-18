interface Props {
  side: "left" | "right";
  onClick: () => void;
}

const SliderButton: React.FC<Props> = ({ side, onClick }) => {
  const icon = side === "left" ? "‹" : "›";

  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 bg-black/50 text-white 
                  px-3 py-1 rounded 
                  ${side === "left" ? "left-[100px]" : "right-[150px]"}`}
    >
      {icon}
    </button>
  );
};

export default SliderButton;