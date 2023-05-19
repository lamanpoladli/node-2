import { BASE_URL } from "./base_url";
import axios from "axios";

//get all Artists
export const getAllPersons = async (name) => {
  let globalData;
  let URL;
  if (!name) {
    URL = BASE_URL+'/persons';
  }
  else{
    URL = BASE_URL+`/persons?name=${name}`;
  }
  await axios.get(URL).then((res) => {
    globalData = res.data.data;
  });
  return globalData;
};
//get Artist by ID
export const getPersonByID = async (ID) => {
  let globalData;
  await axios.get(`${BASE_URL}/persons/${ID}`).then((res) => {
    globalData = res.data.data;
  });
  return globalData;
};

//delete Artist by  ID

//post artist
export const postPerson = (payload) => {
  axios.post(`${BASE_URL}/persons`, payload);
};
//edit artist



//get All songs
