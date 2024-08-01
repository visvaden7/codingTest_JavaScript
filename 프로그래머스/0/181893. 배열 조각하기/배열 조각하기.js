function solution(arr, query) {
  query.forEach((query, idx) => {
    if (idx % 2) {
      arr.splice(0, query);
    } else {
      arr.splice(query + 1, arr.length - query);
    }
  });
  return arr;
}