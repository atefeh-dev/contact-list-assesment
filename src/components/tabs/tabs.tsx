import React, { useState } from "react";

import Tab from "./tab";
import ContactList from "../contact-list/contact-list";
import { IContactsList, Keys } from "../../redux/types";

import "./tabs.scss";

export interface Props {
  contacts: IContactsList;
}

function Tabs({ contacts }: Props) {
  const [selectedTab, setSelectedTab] = useState<Keys>("a");

  const alphabet = Object.keys(contacts);

  return (
    <div className="tabs__wrapper">
      <ul className="tabs__list">
        {alphabet.map((char) => (
          <Tab
            key={char}
            title={char as Keys}
            count={contacts[char as Keys].length}
            setSelectedTab={setSelectedTab}
            selectedTab={selectedTab}
          />
        ))}
      </ul>
      <ContactList selectedTab={selectedTab} contacts={contacts} />
    </div>
  );
}

export default Tabs;
