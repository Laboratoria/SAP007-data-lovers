import {
  filterMovies,
  strtoNumber,
  sortMovies,
  filterCharacters,
  getCharacters,
  alphabeticalSort,
  filterByGender,
} from "../src/js/data.js";

// describe("anotherExample", () => {
//   it("is a function", () => {
//     expect(typeof anotherExample).toBe("function");
//   });

//   it("returns `anotherExample`", () => {
//     expect(anotherExample()).toBe("OMG");
//   });
// });

const arrayFilms = [
  {
    id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    title: "Castle in the Sky",
    director: "Hayao Miyazaki",
    producer: "Isao Takahata",
    poster:
      "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
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
    poster:
      "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg",
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
    expect(filterFilms).toEqual([arrayFilms[0], arrayFilms[1]]);
    expect(filterFilms.length).toEqual(2);
  });
  it("should filter films by director", () => {
    const filterFilms = filterMovies("Isao", arrayFilms);
    expect(filterFilms).toEqual([arrayFilms[0]]);
    expect(filterFilms.length).toEqual(1);
  });
});

describe("sortMovies", () => {
  it("is a function", () => {
    expect(typeof sortMovies).toBe("function");
  });

  it("returns `anotherExample`", () => {
    expect(sortMovies()).toBe("OMG");
  });
});

describe("filterCharacters", () => {
  it("is a function", () => {
    expect(typeof filterCharacters).toBe("function");
  });

  it("returns `anotherExample`", () => {
    // const filterPeople = filterCharacters(arrayFilms);
    // expect(filterPeople).toEqual
    expect(filterCharacters(arrayFilms)).toBe([{ title: "Castle in the Sky" }]);
  });
});

describe("getCharacters", () => {
  it("is a function", () => {
    expect(typeof getCharacters).toBe("function");
  });

  it("returns `anotherExample`", () => {
    const characters = getCharacters(arrayFilms);
    expect(characters).toEqual([
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
    ]);
  });
});

describe("alphabeticalSort", () => {
  it("is a function", () => {
    expect(typeof alphabeticalSort).toBe("function");
  });

  it("should return in alfabetical sort: Mei Kusakabe, Mrs. Yokokawa and Pazu", () => {
    const sortCharactersAZ = alphabeticalSort(arrayCharacters, "A-Z");
    expect(sortCharactersAZ).toEqual([
      {
        name: "Mei Kusakabe",
        gender: "Female",
      },
      {
        name: "Mrs. Yokokawa",
        gender: "Female",
      },
      {
        name: "Pazu",
        gender: "Male",
      },
    ]);
    const sortCharactersZA = alphabeticalSort(arrayCharacters, "Z-A");
    expect(sortCharactersZA).toEqual([
      {
        name: "Pazu",
        gender: "Male",
      },
      {
        name: "Mrs. Yokokawa",
        gender: "Female",
      },
      {
        name: "Mei Kusakabe",
        gender: "Female",
      },
    ]);
  });
});

describe("filterByGender", () => {
  it("is a function", () => {
    expect(typeof filterByGender).toBe("function");
  });

  it("should return only famale characters", () => {
    const gender = filterByGender(arrayCharacters, "Female");
    expect(gender).toEqual([arrayCharacters[1], arrayCharacters[2]]);
  });
});
