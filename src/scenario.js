import {BaseChassis} from './data'; 

export const BasedSteps = [
  {
    preview: 0,
    title: `Let's start, you have to choose on of the following points`,
    headers: [
      'Second hand road machine',
      'New combined road machine',
      'Parts'
    ],
  },
  {
    preview: 1,
    title: 'Please, chosse basic chassis:',
    headers: BaseChassis.types.map(it => it.name)
  }
];