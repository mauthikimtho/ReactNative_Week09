import React, {createContext, useState} from 'react';

export const BikeContext = createContext();
const BikeProvider = ({children}) => {
  const [bikes, setBikes] = useState([
    {
    id: 1,
    image: require('../img/xedap.png'),
    name: 'Pinarello',
    price: 1800,
    type: 'Roadbike',
    description: 'It is a very importent form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    discount: 0,
    like: false,
  },
   {
    id: 2,
    image: require('../img/xedapxanh.png'),
    name: 'Pina Mountai',
    price: 1700,
    type: 'Mountain',
    description: 'It is a very importent form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    discount: 449,
    like: false,
  },
   {
    id: 3,
    image: require('../img/xedaptim.png'),
    name: 'Pina Bike',
    price: 1500,
    type: 'Roadbike',
    description: 'It is a very importent form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    discount: 0,
    like: false,
  },
   {
    id: 4,
    image: require('../img/xedapdokhac.png'),
    name: 'Pinarello',
    price: 1900,
    type: 'Roadbike',
    description: 'It is a very importent form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    discount: 0,
    like: false,
  },
   {
    id: 5,
    image: require('../img/xedaptimkhac.png'),
    name: 'Pinarello',
    price: 2700,
    type: 'Roadbike',
    description: 'It is a very importent form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    discount: 0,
    like: false,
  },
   {
    id: 6,
    image: require('../img/xedapxanh.png'),
    name: 'Pinarello',
    price: 1350,
    type: 'Roadbike',
    description: 'It is a very importent form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    discount: 0,
    like: false,
  },
  ]);
  return (
    <BikeContext.Provider value={{bikes, setBikes}}>
     {children}
    </BikeContext.Provider>
  );
};
export default BikeProvider;