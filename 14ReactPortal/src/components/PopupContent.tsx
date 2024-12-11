import { createPortal } from "react-dom";

interface PopupContentProps {
  copied: boolean;
}

const PopupContent = ({ copied }: PopupContentProps) => {
  const popupContent = document.querySelector("#popup-content");

  if (!popupContent) return null;

  return createPortal(
    <section>
      {copied && (
        <div style={{ position: "absolute", bottom: "3rem" }}>
          Copied to clipboard
        </div>
      )}
    </section>,
    popupContent
  );
};

export default PopupContent;
