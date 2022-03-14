export const filterCharacter = (data, condition, type) => {
  const filterResult = data.filter(
    (item) => item[type].toLowerCase() === condition.toLowerCase()
  );
  return filterResult;
};

export const sortNamesFilter = (data, order) => {
  const copy = [...data];
  if (order === "alphabetic") {
    copy.sort((a, z) => a.name > z.name ? 1 : -1);
  } else {
    copy.sort((a, z) => a.name > z.name ? -1 : 1);
  }
  return copy;
};

export const searchName = (data, condition) => {
  const searchResult = data.filter(
    (item) => item.name.toLowerCase().includes(condition.toLowerCase()));
  return searchResult;
}

export const stats = {
  gender: (data, genderParameter) => {
    const totalByGender = data.reduce(function (total, character) {
      if (character.gender === genderParameter) {
        return total + 1;
      }
      return total;
    }, 0)
    const averageGender = Number(((totalByGender / data.length) * 100).toFixed(2));
    return averageGender;
  },
  status: (data, statusParameter) => {
    const totalByStatus = data.reduce(function (total, character) {
      if (character.status === statusParameter) {
        return total + 1;
      }
      return total;
    }, 0)
    const averageStatus = Number(((totalByStatus / data.length) * 100).toFixed(2));
    return averageStatus;
  }
};
