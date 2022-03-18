export const sortCountry = (athletes, selectCountry) => {
  if (selectCountry === "a-z"){
    return athletes.sort((a, z) => {
      const countryA = a.team.toUpperCase();
      const countryZ = z.team.toUpperCase();
      if (countryA < countryZ) {
        return -1;
      }
      if (countryA > countryZ) {
        return 1;
      }
      return 0;
    });
  } else {
    return athletes.sort((a, z) => {
      const countryA = a.team.toUpperCase();
      const countryZ = z.team.toUpperCase();
      if (countryA < countryZ) {
        return 1;
      }
      if (countryA > countryZ) {
        return -1;
      }
      return 0;
    });
  }
}
