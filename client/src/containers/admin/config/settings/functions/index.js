export const routes=(routes,location,get)=>{
   switch (routes) {
       case 'EMAIL':
            location(`${get}/email`)
           break;
       case 'PROFILE':
            location(`${get}/profile`)
           break;       
       case 'BACK':
            location('/adm/settings')
           break; 
       default:
           break;
   } 
}