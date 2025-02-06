export const getCountry = async () => {
  try {
    const req = await fetch("http://ip-api.com/json/");
    if (req.status !== 200) {
      throw new Error("Failed to fetch country");
    }
    const data = await req.json();
    console.log(data);
    return data.country;
  } catch (error) {
    console.log(error);
  }
};
