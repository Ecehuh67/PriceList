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
    title: 'Please, choose basic chassis:',
    headers: BaseChassis.types.map(it => it.name)
  },
  {
    preview: 2,
    title: 'Good, now you have to choose the type of systems:',
    headers: [
      'Salt Sprad System',
      'Watering System',
      'Salt and Watering System'
    ]
  }
];