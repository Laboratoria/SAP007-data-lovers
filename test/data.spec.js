import { describe } from 'eslint/lib/rule-tester/rule-tester';
import { AZsort, filterAth, filterMedal, filterSport, sortCountry } from '../src/data.js';

const dataCards = [
  {
    "name": "Denis Mikhaylovich Ablyazin",
    "sport": "Gymnastics",
    "team": "Russia",
    "medal": "Silver",
  },
  {
    "name": "Nathan Ghar-Jun Adrian",
    "sport": "Swimming",
    "team": "United States",
    "medal": "Gold",
  },
  {
    "name": "Abdullah Al-Rashidi",
    "sport": "Shooting",
    "team": "Individual Olympic Athletes",
    "medal": "Bronze",
  },
];

const nameAthlete = [
  {"name": "Yuri Alvear Orjuela"},
  {"name": "Giselle Anne Ansley"},
  {"name": "Viktor Axelsen"},
];

const chooseSport = [
  {"sport": "Shooting"},
  {"sport": "Canoeing"},
  {"sport": "Swimming"},
]
const cardsCountry = [
  {"team": "Italy"},
  {"team": "Azerbaijan"},
  {"team": "France"},
]
const ChooseMedal = [
  {"medal": "Gold"},
  {"medal": "Silver"},
  {"medal": "Bronze"},
]

describe("AZsort", () => {
  it("should return athlete sort A-Z", () => {
    const sortData = AZsort(dataCards, "A-Z");
    expect(sortData).toEqual([dataCards[2], dataCards[0], dataCards[1]]);
  });

  it("should return athlete sort Z-A", () => {
    const sortData = AZsort(dataCards, "Z-A");
    expect(sortData).toEqual([dataCards[1], dataCards[0], dataCards[2]]);
  });
  });

describe("filterAth", () => {
it ("search by athlete name", () => {
  const search = filterAth(nameAthlete, "Jaqueline")
  expect(search).toEqual([])
});
it ("search by athlete name", () => {
  const search = filterAth(nameAthlete, "Yuri")
  expect(search).toEqual([{name: "Yuri Alvear Orjuela"}])
});
});

describe("filterSport", () => {
  it ("should return only the selected sport", () => {
    const whichSport = filterSport(chooseSport, "Shooting");
    expect(whichSport).toEqual([chooseSport[0], chooseSport[1], chooseSport[2]]);
  });
});

describe('sortCountry', () => {
  it("should return country asc and dsc order and number of athletes A-Z", () => {
    const CountryAZ = sortCountry(cardsCountry, "A-Z");
    expect(CountryAZ).toEqual([cardsCountry[0], cardsCountry[1], cardsCountry[2]]);
  });

  it("should return country asc and dsc order and number of athletes Z-A", () => {
    const CountryAZ = sortCountry(cardsCountry, "Z-A");
    expect(CountryAZ).toEqual([cardsCountry[2], cardsCountry[1], cardsCountry[0]]);
  });
});


describe('filterMedal', () => {
  it('search by medal', () => {
    const Medal = filterMedal(ChooseMedal, "Gold")
    expect(Medal).toEqual([]);
  });

  it('search by medal', () => {
    const Medal = filterMedal(ChooseMedal, "Silver")
    expect(Medal).toEqual([{"medal": "Silver"}]);
  });
});