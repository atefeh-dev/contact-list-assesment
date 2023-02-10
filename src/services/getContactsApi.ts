export async function getContactsApi() {
  return await fetch(
    "https://randomuser.me/api/?results=200&inc=name,location,email,phone,picture,login&nat=us"
  ).then(res => res.json());
}
