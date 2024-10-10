import { FormData } from '../../../components/Contactform';

export async function sendEmail(data: FormData & { recaptchaToken: string | null }) {
  const apiEndpoint = '/api/email';

  const res = await fetch(apiEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const result = await res.json();
  console.log(result);
  return result;
}

// import { FormData } from '../../../components/Contactform';


// export async function sendEmail(data: FormData) {
//   const apiEndpoint = '/api/email';

//       const res = await fetch(apiEndpoint, {
//         method: 'POST',
//         body: JSON.stringify(data),
//       })
//       const result = await res.json();
//       console.log(result)
//       return result;
       
// }