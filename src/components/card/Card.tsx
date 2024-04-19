interface CardProps {
  title: string;
  content?: string;
  secondaryButtonText?: string;
  primaryButtonText?: string;
  onClickPrimaryButton?: () => void;
  onClickSecondaryButton?: () => void;
}
const Card = ({
  title = "Oiiiiii",
  onClickPrimaryButton,
  onClickSecondaryButton,

  content = "If a dog chews shoes whose shoes does he choose?",
}: CardProps) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl flex flex-col justify-between h-full">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
      </div>
      <div className="card-actions justify-center">
        {onClickPrimaryButton && (
          <button
            onClick={onClickPrimaryButton}
            className="btn btn-secondary flex-grow"
          >
            Delete
          </button>
        )}
        {onClickSecondaryButton && (
          <button
            onClick={onClickSecondaryButton}
            className="btn btn-primary flex-grow"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
