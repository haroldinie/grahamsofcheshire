import { FormData } from '../../../components/Contactform';


export async function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email';

      const res = await fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(data),
      })
      const result = await res.json();
      console.log(result)
      return result;
       
}