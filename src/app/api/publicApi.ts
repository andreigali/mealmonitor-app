import axios from 'axios';
import {Meal, NewUserDto, ProductDto} from './domain';
import {auth} from '../config/config';

const baseURL = 'http://192.168.100.12:8088';

export const parseDate = (date: Date) => {
  return (
    date.getFullYear() +
    '-' +
    (date.getMonth() + 1).toString().padStart(2, '0') +
    '-' +
    date.getDate().toString().padStart(2, '0')
  );
};

export async function getMeals(date) {
  try {
    const response = await axios.get(
      baseURL + '/meals/' + auth.currentUser.uid,
      {
        params: {
          day: parseDate(date),
        },
        headers: {
          Authorization: `Bearer ${await auth.currentUser.getIdToken()}`,
        },
      },
    );
    return response.data; // assuming the meals are in the data property
  } catch (error) {
    console.error(error);
    throw error; // re-throw the error so that it can be caught and handled in the component
  }
}

export async function deleteMeal(meal: Meal) {
  const config = {
    headers: {Authorization: `Bearer ${await auth.currentUser.getIdToken()}`},
  };
  try {
    const response = await axios.delete(
      baseURL + '/meals/' + auth.currentUser.uid + '/' + meal.id,
      config,
    );
  } catch (error) {
    console.error(error);
    throw error; // re-throw the error so that it can be caught and handled in the component
  }
}

export async function getProductByBarcode(barCode: string) {
  const config = {
    headers: {Authorization: `Bearer ${await auth.currentUser.getIdToken()}`},
  };
  try {
    const response = await axios.get(baseURL + '/products/' + barCode, config);
    console.log(response.data);
    return response.data as ProductDto;
  } catch (error) {
    console.error(error);
    throw error; // re-throw the error so that it can be caught and handled in the component
  }
}

export async function createMeal(meal: Meal) {
  const config = {
    headers: {Authorization: `Bearer ${await auth.currentUser.getIdToken()}`},
  };
  try {
    const response = await axios.post(
      baseURL + '/meals/' + auth.currentUser.uid,
      meal,
      config,
    );
  } catch (error) {
    console.error(error);
    throw error; // re-throw the error so that it can be caught and handled in the component
  }
}

export async function backendSignup(newUser: NewUserDto) {
  const config = {
    headers: {Authorization: `Bearer ${await auth.currentUser.getIdToken()}`},
  };
  try {
    const response = await axios.post(baseURL + '/users', newUser, config);
  } catch (error) {
    console.error(error);
    throw error; // re-throw the error so that it can be caught and handled in the component
  }
}

export async function searchProduct(query: string) {
  const config = {
    headers: {Authorization: `Bearer ${await auth.currentUser.getIdToken()}`},
  };
  try {
    const response = await axios.get(
      baseURL + '/products/search/' + query,
      config,
    );
    console.log(response.data);
    return response.data as ProductDto[];
  } catch (error) {
    console.error(error);
    throw error; // re-throw the error so that it can be caught and handled in the component
  }
}
