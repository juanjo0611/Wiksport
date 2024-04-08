// This is a prototype
class Routine {
  constructor({dayNumber, description}) {
    this.dayNumber = dayNumber;
    this.description = description;
  }
}

const descriptions = [
  "fqwpoi", "fwpoi", "asdqwe", "qpou", "caasg", "Bellman",
  "Ford", "Krustal", "Kmp", "Dijkstra", "floyd", "bridge",
  "comp", "zfun", "Kada", "Frqe", "dppr", "kna", "qwfj0j",
  "109d1", "fiwf0", "LPS/", "DFSF", "COMB", "Str23"
];

const getData = n => {
  let dataList = [];
  let day = 1;
  for (let i = 0; i < n; i++) {
    const newRoutine = new Routine({
      dayNumber: day,
      description: descriptions[Math.trunc(Math.random() * 24)]
    });
    dataList.push(newRoutine);
    day += Math.round(Math.random());
  }
  return dataList;
}

export default getData;
