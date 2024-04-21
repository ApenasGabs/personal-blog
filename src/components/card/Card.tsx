interface CardProps {
  title: string;
  content?: string;
  inFocus?: boolean;
  secondaryButtonText?: string;
  primaryButtonText?: string;
  onClickPrimaryButton?: () => void;
  onClickSecondaryButton?: () => void;
}

const Card = ({
  title = "Title",
  onClickPrimaryButton,
  onClickSecondaryButton,
  primaryButtonText = "Edit",
  secondaryButtonText = "Delete",
  inFocus,
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate eu leo ac laoreet. Donec egestas tellus id vehicula fringilla. Phasellus varius et ante sed luctus.",
}: CardProps) => {
  return (
    <div
      className={`card card-compact w-96 bg-base-100 shadow-xl flex flex-col justify-between h-full ${
        inFocus ? "z-50" : "z-0"
      }`}
    >
      <div className="card-body">
        {title && <h2 className="card-title">{title}</h2>}
        {content && <p>{content}</p>}
      </div>
      <div className="card-actions justify-center">
        {onClickPrimaryButton && (
          <button
            onClick={onClickPrimaryButton}
            className="btn btn-secondary flex-grow"
          >
            {secondaryButtonText}
          </button>
        )}
        {onClickSecondaryButton && (
          <button
            onClick={onClickSecondaryButton}
            className="btn btn-primary flex-grow"
          >
            {primaryButtonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
