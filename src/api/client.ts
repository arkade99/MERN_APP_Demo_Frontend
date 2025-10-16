import axios, { AxiosError } from "axios";
interface propsType {
  path: string;
  reqType: string;
  payloadData: object | null;
}
const backendUrl = import.meta.env.VITE_API_URL;
const client = async (props: propsType) => {
  const { path, reqType, payloadData } = props;
  const baseUrl = backendUrl + path;
  const token = localStorage.getItem("token");
  // const response = await axios({
  //   url: baseUrl,
  //   method: reqType,
  //   data: payloadData,
  // });
  // return response;
  try {
    const response = await axios({
      headers: { Authorization: `Bearer token ${token}` },
      url: baseUrl,
      method: reqType,
      data: payloadData,
    });
    return response;
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

export default client;
