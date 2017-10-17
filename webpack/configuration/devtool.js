const isProduction = process.env.NODE_ENV == `production `;


export default () => {
    if(!isProduction){

     return('eval-source-map')
 }

 return('eval')

};
