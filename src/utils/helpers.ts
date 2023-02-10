import { IContact, IContactsList } from "../redux/types";
import { Keys } from "../redux/types";

export function groupByFirstLetter(data: IContact[]) {
  const contacts: IContactsList = {
    a: [],
    b: [],
    c: [],
    d: [],
    e: [],
    f: [],
    g: [],
    h: [],
    i: [],
    j: [],
    k: [],
    l: [],
    m: [],
    n: [],
    o: [],
    p: [],
    q: [],
    r: [],
    s: [],
    t: [],
    u: [],
    v: [],
    w: [],
    x: [],
    y: [],
    z: [],
  };
  data.forEach((item) => {
    const key = item.name.last[0].toLowerCase() as Keys;
    contacts[key].push(item);
  });

  return contacts;
}