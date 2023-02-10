import { useState } from "react";

import { IContact, IContactsList, Keys } from "../../redux/types";
import { Modal } from "../modal/modal";

import "./contact-list.scss";

export interface Props {
  selectedTab: Keys;
  contacts: IContactsList;
};

function ContactList({ selectedTab, contacts }: Props) {
  const [isModalOpen, setModalState] = useState(false);

  const [selectedContact, setSelectedContact] = useState<IContact | null>(null);

  if (contacts[selectedTab]?.length === 0) {
    return (
      <div className="contacts__noUserData">
        Currently, there is nothing on the list.
      </div>
    );
  }

  return (
    <div className="contacts__preview">
      <Modal
        isOpen={isModalOpen}
        onModalClose={() => setModalState(false)}
        selectedContact={selectedContact}
      />
      {contacts[selectedTab]?.map((item: IContact, index: number) => {
        return (
          <div
            data-testid={item.email}
            key={index}
            className="contacts__infoData"
            onClick={() => {
              setSelectedContact({
                ...item,
                isRight: index % 2 !== 0,
              });
              setModalState(true);
            }}
          >
            {`${item.name.first}, ${item.name.last.toUpperCase()}`}
          </div>
        );
      })}
    </div>
  );
}

export default ContactList;
