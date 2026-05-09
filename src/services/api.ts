const BASE_HOST = "https://api.spacexdata.com";
const BASE_PATH = "/v5";
const BASE_URL = BASE_HOST + BASE_PATH;

export const getLaunchList = async () => {
  const url = BASE_URL + "/launches/latest";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
