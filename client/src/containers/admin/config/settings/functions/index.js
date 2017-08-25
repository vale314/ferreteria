export const routes=(routes,location,get)=>{
   switch (routes) {
       case 'EMAIL':
            location(`${get}/email`)
           break;
       case 'BACK':
            location('/adm/settings')
            break; 
       default:
           break;
   } 
}