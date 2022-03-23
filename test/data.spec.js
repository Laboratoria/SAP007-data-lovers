import { describe } from 'eslint/lib/rule-tester/rule-tester';
import { AZsort, filterAth, filterMedal, filterSport, sortCountry } from '../src/data.js';

const nameAthlete = [
  { name: "Yuri Alvear Orjuela" },
  { name: "Giselle Anne Ansley" },
  { name: "Viktor Axelsen" },
];

const chooseSport = [
  { "sport": "Shooting" },
  { "sport": "Canoeing" },
  { "sport": "Swimming" },
];

const cardsCountry = [
  { "team": "Italy" },
  { "team": "Azerbaijan" },
  { "team": "France" },
];

const ChooseMedal = [
  { "medal": "Gold" },
  { "medal": "Silver" },
  { "medal": "Bronze" },
];

describe("AZsort", () => {
  it("should return athlete sort A-Z", () => {
    const orderAthlete = AZsort(nameAthlete, "A-Z");
    expect(nameAthlete).toEqual([orderAthlete[1], orderAthlete[2], orderAthlete[0]]);
  });
  it("should return athlete sort Z-A", () => {

    const orderAthlete = AZsort(nameAthlete, "Z-A");
    expect(nameAthlete).toEqual([orderAthlete[0], orderAthlete[2], orderAthlete[1]]);
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
    expect(CountryAZ).toEqual([cardsCountry[1], cardsCountry[2], cardsCountry[0]]);
  });
  it("should return country asc and dsc order and number of athletes Z-A", () => {
    const CountryAZ = sortCountry(cardsCountry, "Z-A");
    expect(CountryAZ).toEqual([cardsCountry[0], cardsCountry[2], cardsCountry[1]]);
  });
});

describe("filterAth", () => {
  it("search by athlete name", () => {
    const search = filterAth(nameAthlete, "Jaqueline")
    expect(search).toEqual([])
  });
  it("search by athlete name", () => {
    const search = filterAth(nameAthlete, "Yuri")
    expect(search).toEqual([{ name: "Yuri Alvear Orjuela" }])
  });
});

describe("filterSport", () => {
  it("should return only the selected sport", () => {
    const whichSport = filterSport(chooseSport, "Shooting");
    expect(whichSport).toEqual([{ "sport": "Shooting" }]);
  });
});

describe('filterMedal', () => {
  it('search by medal', () => {
    const Medal = filterMedal(ChooseMedal, "Silver")
    expect(Medal).toEqual([{ "medal": "Silver" }]);
  });
});
