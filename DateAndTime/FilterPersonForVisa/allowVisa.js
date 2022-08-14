const peopleWithVisa = [
    {
      firstName: 'Stasia',
      lastName: 'Ward',
      criminalRecord: true,
      passportExpiration: '19.06.2023',
    },
    {
      firstName: 'Elliot',
      lastName: 'Baker',
      criminalRecord: false,
      passportExpiration: '04.06.2024',
    },
    {
      firstName: 'Leighann',
      lastName: 'Scott',
      criminalRecord: true,
      passportExpiration: '31.07.2022',
    },
    {
      firstName: 'Nick',
      lastName: 'Pop',
      criminalRecord: false,
      passportExpiration: '31.12.2022',
    },
];

function allowVisa(arrayPersons, nowDate) {
    const nowDateMs = nowDate.getTime();
    const arrayValue = arrayPersons.filter(array => {    
        const [numDay, month, year] = array.passportExpiration.split('.');
        const dateExpiration = new Date(year, month -1, numDay );
        const dateExpirationMs = dateExpiration.getTime();
        
        if (!array.criminalRecord && dateExpirationMs >= nowDateMs) {
            return array;
        }
    }); 
return arrayValue;
}

const resultAllowVisa = allowVisa(peopleWithVisa, new Date());
console.log(resultAllowVisa);