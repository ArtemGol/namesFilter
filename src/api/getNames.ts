import axios from "axios";

export const getNames = (): Promise<string[]> => {
    return axios.get(`/names.json`).then(response => {return response.data;});
}