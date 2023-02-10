import React, { useEffect, useRef } from "react";

import { IContact } from "../../redux/types";
import { ReactComponent as CloseLogo } from "../../assets/images/x.svg";

import "./modal.scss";

export interface Props {
  selectedContact: IContact | null;
  isOpen: boolean;
  onModalClose: () => void;
}

export function Modal({ isOpen, onModalClose, selectedContact }: Props) {
  const modalRef: React.RefObject<HTMLDivElement> = useRef(null);


  useEffect(() => {
    const handleClose =
      (event: MouseEvent) => {
        if (
          (event?.target as HTMLElement)?.className !== "contacts__infoData" &&
          modalRef.current &&
          !modalRef.current.contains(event.target as Node)
        ) {
          onModalClose();
        }
      }

    document.addEventListener("click", handleClose, { capture: true });
    return () => {
      document.removeEventListener("click", handleClose);
    };
  }, [onModalClose]);

  const modalStyle = (selectedContact: IContact | null) => {
    const style: { right?: number; left?: number } = {};
    if (window.innerWidth > 800) {
      if (selectedContact && selectedContact.isRight) {
        style.right = 16;
      } else {
        style.left = 24;
      }
    } else {
      style.left = 0;
    }
    return style;
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      style={modalStyle(selectedContact)}
      className={isOpen ? "modal modal__open" : "modal"}
      ref={modalRef}
    >
      <div className={"modal__box"}>
        <button data-testid='modal/close' className="modal__box--close" onClick={onModalClose}>
          <CloseLogo />
        </button>
        {selectedContact && (
          <>
            <div className="modal__box--robin">{`USERNAME ${selectedContact.login.username}`}</div>
            <div className="modal__content">
              <img
                src={selectedContact.picture.medium}
                alt={selectedContact.name.first}
              />
              <div className="modal__content--grow">
                <div className="modal__content--title">
                  <span>{`${selectedContact.name.last.toUpperCase()}, `}</span>
                  <span>{`${selectedContact.name.first.toLowerCase()}`}</span>
                </div>
                <div className="modal__content--top">
                  <div className="modal__content--row">
                    <strong>email</strong>
                    <span data-testid="email">{selectedContact.email}</span>
                  </div>
                  <div className="modal__content--row">
                    <strong>phone</strong>
                    <span data-testid="phone">{selectedContact.phone}</span>
                  </div>
                  <div className="modal__content--row">
                    <strong>street</strong>
                    <span data-testid="street">{selectedContact.location.street.name}</span>
                  </div>
                  <div className="modal__content--row">
                    <strong>city</strong>
                    <span data-testid="city">{selectedContact.location.city}</span>
                  </div>
                  <div className="modal__content--row">
                    <strong>state</strong>
                    <span data-testid="state">{selectedContact.location.state}</span>
                  </div>
                  <div className="modal__content--row">
                    <strong>postcode</strong>
                    <span data-testid="postcode">{selectedContact.location.postcode}</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
