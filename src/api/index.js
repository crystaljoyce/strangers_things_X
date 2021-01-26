export const BASE_URL = 'https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/users/login'

export async function users(name, id) {
    try {
      const response = await fetch(`${ BASE_URL }/object?${ KEY }&${ term }=${ encodeURI(value.split('-').join('|')) }`);
      const data = await response.json();
  
      return data;
    } catch (error) {
      throw error;
    }
  }
  