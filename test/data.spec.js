import {
  filterMovies,
  sortMovies,
  filterCharacters,
  alphabeticalSort,
  filterByGender,
} from "../src/js/data.js";

const arrayFilms = [
  {
    id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    title: "Castle in the Sky",
    director: "Hayao Miyazaki",
    producer: "Isao Takahata",
    release_date: "1986",
    rt_score: "95",
    people: [
      {
        name: "Pazu",
        gender: "Male",
      },
      {
        name: "Lusheeta Toel Ul Laputa",
        gender: "Female",
      },
      {
        name: "Dola",
        gender: "Female",
      },
    ],
  },

  {
    id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    title: "My Neighbor Totoro",
    director: "Hayao Miyazaki",
    producer: "Hayao Miyazaki",
    release_date: "1988",
    rt_score: "93",
    people: [
      {
        name: "Satsuki Kusakabe",
        gender: "Female",
      },
      {
        name: "Mei Kusakabe",
        gender: "Female",
      },
    ],
  },

  {
    id: "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
    title: "Kiki's Delivery Service",
    director: "Hayao Miyazaki",
    producer: "Hayao Miyazaki",
    release_date: "1960",
    rt_score: "96",
    people: [
      {
        name: "Kiki",
        gender: "Female",
      },
      {
        name: "Jiji",
        gender: "Male",
      },
    ],
  },
];

const arrayCharacters = [
  {
    name: "Pazu",
    gender: "Male",
  },
  {
    name: "Mei Kusakabe",
    gender: "Female",
  },
  {
    name: "Mrs. Yokokawa",
    gender: "Female",
  },
];

describe("filterMovies", () => {
  it("should filter films by title", () => {
    const filterFilms = filterMovies("Castle in the", arrayFilms);
    expect(filterFilms).toEqual([arrayFilms[0]]);
    expect(filterFilms.length).toEqual(1);
  });
  it("should filter films by producer", () => {
    const filterFilms = filterMovies("Miyazaki", arrayFilms);
    expect(filterFilms).toEqual([arrayFilms[0], arrayFilms[1], arrayFilms[2]]);
    expect(filterFilms.length).toEqual(3);
  });
  it("should filter films by director", () => {
    const filterFilms = filterMovies("Isao", arrayFilms);
    expect(filterFilms).toEqual([arrayFilms[0]]);
    expect(filterFilms.length).toEqual(1);
  });
});

describe("sortMovies", () => {
  it("should return films sort A-Z", () => {
    const sortFilms = sortMovies(arrayFilms, "A-Z");
    expect(sortFilms).toEqual([arrayFilms[0], arrayFilms[2], arrayFilms[1]]);
  });

  it("should return films sort Z-A", () => {
    const sortFilms = sortMovies(arrayFilms, "Z-A");
    expect(sortFilms).toEqual([arrayFilms[1], arrayFilms[2], arrayFilms[0]]);
  });

  it("should return films sort Highest-Score", () => {
    const sortFilms = sortMovies(arrayFilms, "Highest-Score");
    expect(sortFilms).toEqual([arrayFilms[2], arrayFilms[0], arrayFilms[1]]);
  });

  it("should return films sort Lowest-Score", () => {
    const sortFilms = sortMovies(arrayFilms, "Lowest-Score");
    expect(sortFilms).toEqual([arrayFilms[1], arrayFilms[0], arrayFilms[2]]);
  });

  it("should return films sort Oldest", () => {
    const sortFilms = sortMovies(arrayFilms, "Oldest");
    expect(sortFilms).toEqual([arrayFilms[2], arrayFilms[0], arrayFilms[1]]);
  });

  it("should return films sort Newest", () => {
    const sortFilms = sortMovies(arrayFilms, "Newest");
    expect(sortFilms).toEqual([arrayFilms[1], arrayFilms[0], arrayFilms[2]]);
  });
});

describe("filterCharacters", () => {
  it("should return the characters of the film searched", () => {
    const filterPeople = filterCharacters("Castle in the", arrayFilms);
    expect(filterPeople).toEqual(arrayFilms[0].people);
    expect(filterPeople.length).toEqual(3);
  });
  it("should return the characters of the film searched", () => {
    const filterPeople = filterCharacters("Totoro", arrayFilms);
    expect(filterPeople).toEqual(arrayFilms[1].people);
    expect(filterPeople.length).toEqual(2);
  });
});

describe("alphabeticalSort", () => {
  it("should return in alphabetical sort: A-Z", () => {
    const sortCharactersAZ = alphabeticalSort(arrayCharacters, "A-Z");
    expect(sortCharactersAZ).toEqual([
      arrayCharacters[1],
      arrayCharacters[2],
      arrayCharacters[0],
    ]);
  });
  it("should return in alphabetical sort: Z-A", () => {
    const sortCharactersZA = alphabeticalSort(arrayCharacters, "Z-A");
    expect(sortCharactersZA).toEqual([
      arrayCharacters[0],
      arrayCharacters[2],
      arrayCharacters[1],
    ]);
  });
});

describe("filterByGender", () => {
  it("should return only famale characters", () => {
    const gender = filterByGender(arrayCharacters, "Female");
    expect(gender).toEqual([arrayCharacters[1], arrayCharacters[2]]);
  });
});
