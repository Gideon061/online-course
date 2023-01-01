
export const useLoginData = () =>{
  const data = JSON.parse(localStorage.getItem('userData'));
  return data
}