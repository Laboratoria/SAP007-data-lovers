import { describe } from 'eslint/lib/rule-tester/rule-tester';
import { AZsort, filterAth, filterMedal, filterSport, sortCountry } from '../src/data.js';

const dataCards = [
  {"name": "Davit Gochayevich Chakvetadze",},
  {"name": "Miles Cleveland Chamley-Watson",},
  {"name": "Andre De Grasse",},
  {"name": "David Sagitovich Belyavsky",},
  {"name": "David Edward Plummer",},
];

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
  it("should be a function", () => {
    expect(typeof AZsort).toBe("function");
  });
  it("should return athlete sort A-Z", () => {
    const orderAthleteAZ = [
    { "name": "Andre De Grasse", },
    { "name": "David Edward Plummer",},
    { "name": "David Sagitovich Belyavsky",},
    { "name": "Davit Gochayevich Chakvetadze" },
    { "name": "Miles Cleveland Chamley-Watson" },
    ];
    expect(AZsort(dataCards, "A-Z")).toEqual(orderAthleteAZ);
  });
  it("should return athlete sort Z-A", () => {
    const orderAthleteZA = [
      { "name": "Miles Cleveland Chamley-Watson" },
      { "name": "Davit Gochayevich Chakvetadze" },
      { "name": "David Sagitovich Belyavsky", },
      { "name": "David Edward Plummer", },
      { "name": "Andre De Grasse", },];
    expect(AZsort(dataCards, "Z-A")).toEqual(orderAthleteZA);
  });
});

describe("sortCountry", () => {
  it("should be a function", () => {
    expect(typeof sortCountry).toBe("function");
  });
  it("should return country asc and dsc order and number of athletes A-Z", () => {
    const CountryAZ = sortCountry(cardsCountry, "a-z");
    expect(CountryAZ).toEqual([
      { "team": "Azerbaijan" },
      { "team": "France" },
      { "team": "Italy" },]
    );
  });
  it("should return country asc and dsc order Z-A", () => {
    const CountryAZ = sortCountry(cardsCountry, "z-a");
    expect(CountryAZ).toEqual([
      { "team": "Italy" },
      { "team": "France" },
      { "team": "Azerbaijan" },
    ]
    );
  });
});

describe("filterSport", () => {
  it("should be a function", () => {
    expect(typeof filterSport).toBe("function");
  });
  it("should return only the selected sport", () => {
    const whichSport = [chooseSport[0]];
    expect(filterSport(chooseSport, "Shooting")).toEqual(whichSport);
  });
});


describe("filterMedal", () => {
  it("should be a function", () => {
    expect(typeof filterMedal).toBe("function");
  });
  it('search by medal', () => {
    const Medal = filterMedal(ChooseMedal, "Silver")
    expect(Medal).toEqual([{ "medal": "Silver" }]);
  });
});

describe("filterAth", () => {
  it("should be a function", () => {
    expect(typeof filterAth).toBe("function");
  });
  it("search by athlete name", () => {
    const search = filterAth(nameAthlete, "Jaqueline")
    expect(search).toEqual([])
  });
  it("search by athlete name", () => {
    const searchResult = [nameAthlete[2]]
    expect(filterAth(nameAthlete, "Viktor")).toEqual(searchResult)
  });
});
