export default function orderByProps(object, filter) {
  const filteredList = [];
  const alphabetList = [];
  for (const prop in object) {
    if (filter.includes(prop)) {
      filteredList.push(prop);
    } else {
      alphabetList.push(prop);
    }
  }
  const mergedList = [...filteredList, ...alphabetList.sort()].map((prop) => ({
    key: prop, value: object[prop],
  }));
  return mergedList;
}
