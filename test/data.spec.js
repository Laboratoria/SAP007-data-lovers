import { describe } from 'eslint/lib/rule-tester/rule-tester';
import { AZsort, filterAth, filterMedal, filterSport, sortCountry } from '../src/data.js';

const dataCards = [
  {
    name: "Chantal Achterberg",
    gender: "F",
    height: "172",
    weight: "72",
    sport: "Rowing",
    team: "Netherlands",
    noc: "NED",
    age: 31,
    event: "Rowing Women's Quadruple Sculls",
    medal: "Silver"
  },
  {
    name: "Nicola Virginia Adams",
    gender: "F",
    height: "164",
    weight: "51",
    sport: "Boxing",
    team: "Great Britain",
    noc: "GBR",
    age: 33,
    event: "Boxing Women's Flyweight",
    medal: "Gold"
  },
  {
    name: "Cecil Sebastian Afrika",
    gender: "M",
    height: "175",
    weight: "75",
    sport: "Rugby Sevens",
    team: "South Africa",
    noc: "RSA",
    age: 28,
    event: "Rugby Sevens Men's Rugby Sevens",
    medal: "Bronze"
  },
];

const nameAthlete = [
  {name: "Yuri Alvear Orjuela"},
  {name: "Giselle Anne Ansley"},
  {name: "Viktor Axelsen"},
];

const chooseSport = [
  {sport: "Shooting"},
  {sport: "Canoeing"},
  {sport: "Swimming"},
]
const cardsCountry = [
  {team: "Italy"},
  {team: "Azerbaijan"},
  {team: "France"},
]
const ChooseMedal = [
  {medal: "Gold"},
  {medal: "Silver"},
  {medal: "Bronze"},
]

/*describe("AZsort", () => {
  it("should return athlete sort A-Z", () => {
    const sortData = AZsort(dataCards, "A-Z");
    expect(sortData).toEqual([dataCards[2], dataCards[0], dataCards[1]]);
  });

  it("should return athlete sort Z-A", () => {
    const sortData = AZsort(dataCards, "Z-A");
    expect(sortData).toEqual([dataCards[1], dataCards[0], dataCards[2]]);
  });
  });*/
  describe("AZsort", () => {
    it("should return athlete sort A-Z", () => {
      expect(AZsort(dataCards, "A-Z")).toEqual([dataCards[2], dataCards[0], dataCards[1]]);
    });
  
    it("should return athlete sort Z-A", () => {
      expect(AZsort(dataCards, "Z-A")).toEqual([dataCards[1], dataCards[0], dataCards[2]]);
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
    const whichSport = filterSport(chooseSport, "shooting");
    expect(whichSport).toEqual([{"sport": "Shooting"}]);
  });
  it('search by medal', () => {
    const Medal = filterMedal(ChooseMedal, "Silver")
    expect(Medal).toEqual([{"medal": "Silver"}]);
  });
});

describe('sortCountry', () => {
  it("should return country asc and dsc order and number of athletes A-Z", () => {
    const CountryAZ = sortCountry(cardsCountry, "A-Z");
    expect(CountryAZ).toEqual([cardsCountry[2], cardsCountry[1], cardsCountry[0]]);
  });

  it("should return country asc and dsc order and number of athletes Z-A", () => {
    const CountryAZ = sortCountry(cardsCountry, "Z-A");
    expect(CountryAZ).toEqual([cardsCountry[0], cardsCountry[2], cardsCountry[1]]);
  });
});


/*describe('filterMedal', () => {
  it('search by medal', () => {
    const Medal = filterMedal(ChooseMedal, "Silver")
    expect(Medal).toEqual([{"medal": "Silver"}]);
  });
});*/