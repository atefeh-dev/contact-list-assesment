import { Keys } from "../../redux/types";

export interface Props {
  title: Keys;
  selectedTab: Keys;
  setSelectedTab: (selectedTab: Keys) => void;
  count: number;
}

function Tab({ title, selectedTab, setSelectedTab, count }: Props) {
  return (
    <li>
      <button
        data-testid={`tab/${title}`}
        className={`${count > 0 ? "tabs__tab" : "tabs__tab tabs__tab--empty"} ${title === selectedTab ? "tabs__tab--active" : ""
          }`}
        onClick={() => {
          setSelectedTab(title);
        }}
      >
        <div className="tabs__tab--title">
          <span> {title}</span>
          <span data-testid={`tab/${title}/clients_count`} className="tabs__tab--count">{count}</span>
        </div>
      </button>
    </li>
  );
}

export default Tab;
