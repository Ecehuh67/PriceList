import {BaseChassises, WaterSystem, SaltSpreadSystem, SaltSpreadSystems} from './data'; 


export const BasedSteps = [
  {
    preview: 0,
    title: `Let's start, you have to choose from following points`,
    headers: [
      'Second hand road machine',
      'New combined road machine',
      'Parts'
    ],
    keys: [
      'second hand',
      'new',
      'parts'
    ]
  },
  {
    preview: 1,
    title: 'Please, choose basic chassis:',
    headers: BaseChassises.map(it => it.name),
    keys: BaseChassises.map(it => it.id)
  },
  {
    preview: 2,
    title: 'Good, now you have to choose the type of systems:',
    headers: [
      'Salt Sprad System',
      'Watering System',
      // 'Salt and Watering System'
    ],
    keys: [SaltSpreadSystem.id, WaterSystem.id, 'combine']
  }
];

export const SaltSystem = [
  {
    preview: 0,
    title: `We have chosen the platform so let's `,
  }
];