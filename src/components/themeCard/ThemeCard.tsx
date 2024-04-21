import { useState } from "react";

interface ThemeCardProps {
  title: string;
  content?: string;
  secondaryButtonText?: string;
  primaryButtonText?: string;
  onClickPrimaryButton?: () => void;
  onClickSecondaryButton?: () => void;
}

const ThemeCard = ({
  title = "Title",
  onClickPrimaryButton,
  onClickSecondaryButton,
  primaryButtonText = "Edit",
  secondaryButtonText = "Delete",
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate eu leo ac laoreet. Donec egestas tellus id vehicula fringilla. Phasellus varius et ante sed luctus.",
}: ThemeCardProps) => {
  const [inFocus, setInFocus] = useState(false);

  const handleEditClick = () => {
    setInFocus(true);
  };

  const handleSaveEditClick = () => {
    if (onClickPrimaryButton) {
      onClickPrimaryButton();
      setInFocus(false);
    }
  };
  const handleCancelEditClick = () => {
    setInFocus(false);
  };

  return (
    <div
      className={`card card-compact w-96 bg-base-100 shadow-xl flex flex-col justify-between h-full ${
        inFocus ? "z-50" : "z-0"
      }`}
    >
      <div className="card-body">
        {title && <h2 className="card-title">{title}</h2>}
        {content && (
          <textarea
            defaultValue={content}
            disabled={!inFocus}
            className="textarea textarea-primary"
          />
        )}
      </div>
      <div className="card-actions justify-center">
        {onClickPrimaryButton && (
          <button
            onClick={inFocus ? handleCancelEditClick : onClickPrimaryButton}
            className="btn btn-secondary flex-grow"
          >
            {inFocus ? "Cancel" : secondaryButtonText}
          </button>
        )}
        {onClickSecondaryButton && (
          <button
            onClick={inFocus ? handleSaveEditClick : handleEditClick}
            className="btn btn-primary flex-grow"
          >
            {inFocus ? "Save" : primaryButtonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default ThemeCard;
