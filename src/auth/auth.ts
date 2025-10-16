import axios, { AxiosError } from "axios";
interface propsType {
  path: string;
  reqType: string;
  payloadData: object;
}
const backendUrl = import.meta.env.VITE_API_URL;
const auth = async (props: propsType) => {
  const { path, reqType, payloadData } = props;
  const baseUrl = backendUrl + path;
  try {
    const response = await axios({
      url: baseUrl,
      method: reqType,
      data: payloadData,
    });
    console.log("Auth response.data: ", response.data);
    if (response.data) {
      localStorage.setItem("token", response.data.token);
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if ((error.status = 401)) {
        localStorage.removeItem("token");
      }
      return error.response;
    }
  }
};

// client.propTypes = {}

export default auth;
