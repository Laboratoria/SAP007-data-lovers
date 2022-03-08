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
  it("is a function", () => {
    expect(typeof filterMovies).toBe("function");
  });

  it("returns `example`", () => {
    expect(filterMovies()).toBe("example");
  });
});

describe("strtoNumber", () => {
  it("is a function", () => {
    expect(typeof strtoNumber).toBe("function");
  });

  it("returns `anotherExample`", () => {
    expect(strtoNumber()).toBe("OMG");
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

  it("should return Mei Kusakabe and Mrs. Yokokawa, famale characters", () => {
    const gender = filterByGender(arrayCharacters, "Female");
    expect(gender).toEqual([
      {
        name: "Mei Kusakabe",
        gender: "Female",
      },
      {
        name: "Mrs. Yokokawa",
        gender: "Female",
      },
    ]);
  });
});
