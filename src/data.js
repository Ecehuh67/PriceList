import {createBlocksChainId, createMapIdProducts} from './utils/utils';

// ============================================================= PRODUCTS ======================================================
export const BaseChassis = {
  id: 0,
  name: 'based chassis',
  types: [
    {
      name: 'Kamaz 6520',
      value: null
    },
    {
      name: 'Kamaz 65115 tipper',
      value: null
    },
    {
      name:  'Kamaz 65115 chassis',
      value: null
    }
  ]
}

const UnderFrame = {
  id: 100,
  name: 'underframe',
  types: [
    {
      name: 'underframe 6520',
      value: 50000
    },
    {
      name: 'underframe 65115 tipper',
      value: 55000
    },
    {
      name: 'underframe 65115 chassis',
      value: 10000
    }
  ]
};

const Grille = {
  id: 200,
  name: 'grille',
  types: [
    {
      name: 'grille without a tent',
      value: 20000
    },
    {
      name: 'grille with a tent',
      value: 50000
    }
  ]
};

const Ladder = {
  id: 300,
  name: 'ladder',
  types: [
    {
      name: 'ladder universal',
      value: 5000
    }
  ]
};

const HydraulicSystem = {
  id: 400,
  name: 'hydraulic system',
  types: [
    {
      name: 'hydraulic 6520',
      value: 30000
    },
    {
      name: 'hydraulic 65115 tipper',
      value: 30000
    },
    {
      name: 'hydraulic 65115 chassis',
      value: 30000
    },
  ]
};

const HydraulicPart = {
  id: 500,
  name: 'hydraulic parts',
  types: [
    {
      name: 'precise pipeline for reduction gear',
      value: 1000
    },
    {
      name: 'precise pipeline for spread disc',
      value: 1200
    },
    {
      name: 'output precise pipeline',
      value: 2000
    },
    {
      name: 'precise pipeline for asymmetrical system',
      value: 1000
    },
    {
      name: 'float section of hydracontroller',
      value: 5000
    },
    {
      name: 'kit for setting 3 sections hydracontroller',
      value: 3000
    },
    {
      name: 'kit for setting 4 sections hydracontroller',
      value: 4000
    },
    {
      name: 'kit for setting 5 sections hydracontroller',
      value: 5000
    },
    {
      name: 'kit for setting 6 sections hydracontroller',
      value: 6000
    },
    {
      name: 'kit for setting Danfos hydracontroller',
      value: 10000
    },
    {
      name: 'Hydracontroller Nizhny Novgorod',
      value: 30000
    },
    {
      name: 'Hydracontroller Nizhny Danfos',
      value: 100000
    },
    {
      name: 'setting a refrigerant',
      value: 12000
    },
    {
      name: 'kit for setting gear into chassis',
      value: 60000
    },
  ]
};

const WetSystem = {
  id: 1900,
  name: 'wet system',
  types: [
    {
      name: 'LS-10 3000 litres',
      value: 200000
    },
    {
      name: 'LS-5 1600 litres',
      value: 120000
    },
    {
      name: 'LS-5 800 litres',
      value: 80000
    }
  ]
};

const WetSystemKit = {
  id: 600,
  name: 'wet system kit',
  types: [
    {
      nname: 'setting kit for ls10 3000 litres',
      value: 20000
    },
    {
      nname: 'setting kit for ls5 1500 litres',
      value: 15000
    },
    {
      nname: 'setting kit for ls5 800 litres',
      value: 8000
    }
  ]
};


const ElecticSystem = {
  id: 700,
  name: 'electric system',
  types: [
    {
      name: 'electric system for 6520',
      value: 30000
    },
    {
      name: 'electric system for 65115 tipper',
      value: 32000
    },
    {
      name: 'electric system for 65115 chassis',
      value: 31000
    },
  ]
};

const FrontPlate = {
  id: 800,
  name: 'front plate',
  types: [
    {
      name: 'front plate for 6520',
      value: 3000
    },
    {
      name: 'front plate for 65115',
      value: 5000
    }
  ]
};

const SaltSpreadSystem = {
  id: 1000,
  name: 'salt spread system',
  types: [
    {
      name: 'SaltDog 518',
      value: 300000
    },
    {
      name: 'SaltDog 223',
      value: 302000
    },
    {
      name: 'SaltDog 704',
      value: 310000
    },
    {
      name: 'Smolmash 10,5 cubic metres',
      value: 310000
    },
    {
      name: 'Smolmash 8,5 cubic metres',
      value: 310000
    },
    {
      name: 'Berma 16 cubic metres',
      value: 310000
    },
    {
      name: 'Berma 14 cubic metres',
      value: 310000
    }
  ]
};

const SaltSpreadPart = {
  id: 900,
  name: 'salt spread parts',
  types: [
    {
      name: 'heating body walls',
      value: 40000
    },
    {
      name: 'kit for setting SaltDog body',
      value: 100000
    },
    {
      name: 'kit for increasing body to 12 cybic metres',
      value: 40000
    },
  ]
};

const ScatterSystem = {
  id: 1100,
  name: 'scatter system',
  types: [
    {
      name: 'scatter USA with asymmetric',
      value: 10000
    },
    {
      name: 'scatter Smolmash with asymmetric',
      value: 10000
    },
    {
      name: 'scatter USA without asymmetric',
      value: 10000
    },
    {
      name: 'scatter Smolmash without asymmetric',
      value: 10000
    },
    {
      name: 'alert output system',
      value: 1000
    },
    {
      name: 'spreading disc',
      value: 1000
    }
  ]
};

const RoadClener = {
  id: 1300,
  name: 'road clener',
  types: [
    {
      name: 'front road clener',
      value: 100000
    },
    {
      name: 'back road clener',
      value: 70000
    },
    {
      name: 'intermediate clener',
      value: 80000
    },
    {
      name: 'wash road clener',
      value: 12000
    },
    {
      name: 'kit for setting intermediate road clener',
      value: 1000
    },
    {
      name: 'kit for setting front and wash road clener',
      value: 10000
    },
    {
      name: 'kit for wetting front road clener',
      value: 10000
    },
  ]
};

const FrontBlade = {
  id: 1400,
  name: 'front blabe',
  types: [
    {
      name: 'Smolens front blade 3,5 metres',
      value: 200000
    },
    {
      name: 'USA front blade 10 foots',
      value: 200000
    },
    {
      name: 'USA front blade 11 foots',
      value: 200000
    },
    {
      name: 'USA front blade 12 foots',
      value: 200000
    },
    {
      name: 'Speed front blade Yroslavich',
      value: 200000
    }
  ]
};

const WaterSystem = {
  id: 1500,
  name: 'water system',
  types: [
    {
      name: 'metallic water system',
      value: 140000
    },
    {
      name: 'plastic water system',
      value: 150000
    },
    {
      name: 'front wash pipe',
      value: 40000
    },
    {
      name: 'Back spreading system',
      value: 10000
    },
    {
      name: 'setting kit NC-60',
      value: 140000
    },
    {
      name: 'setting kit YA-150',
      value: 140000
    },
    {
      name: 'setting kit NC(metallic)',
      value: 140000
    },
    {
      name: 'setting kit NC(stainless)',
      value: 140000
    },
    {
      name: 'setting kit BP-300',
      value: 10000
    },
    {
      name: 'back water system',
      value: 140000
    },
    {
      name: 'plastic tank',
      value: 50000
    },
    {
      name: 'metallic tank',
      value: 140000
    },
    {
      name: 'watering pistol system',
      value: 140000
    }
  ]
};

const PRODUCTS = [
  BaseChassis,
  UnderFrame,
  Grille,
  Ladder,
  HydraulicPart,
  HydraulicSystem,
  WetSystem,
  WetSystemKit,
  ElecticSystem,
  FrontPlate,
  SaltSpreadSystem,
  SaltSpreadPart,
  ScatterSystem,
  RoadClener,
  FrontBlade,
  WaterSystem
];

const mapIdProducts = createMapIdProducts(PRODUCTS);

export const BaseChassises = createBlocksChainId(BaseChassis); 
export const UnderFrames = createBlocksChainId(UnderFrame);
export const Grilles = createBlocksChainId(Grille, false);
export const Ladders = createBlocksChainId(Ladder, false);
export const HydraulicSystems = createBlocksChainId(HydraulicSystem);
export const HydraulicParts = createBlocksChainId(HydraulicPart, false);
export const WetSystems = createBlocksChainId(WetSystem, false);
export const WetSystemKits = createBlocksChainId(WetSystemKit, false);
export const ElecticSystems = createBlocksChainId(ElecticSystem);
export const FrontPlates = createBlocksChainId(FrontPlate);
export const SaltSpreadSystems = createBlocksChainId(SaltSpreadSystem, false);
export const SaltSpreadParts = createBlocksChainId(SaltSpreadPart, false);
export const ScatterSystems = createBlocksChainId(ScatterSystem, false);
export const RoadCleners = createBlocksChainId(RoadClener, false);
export const FrontBlades = createBlocksChainId(FrontBlade, false);
export const WaterSystems = createBlocksChainId(WaterSystem, false);

// console.log(BaseChassises)