import { FILTER, FILTER_MODE } from './filters';

export type SlotConfig = {
  filter: FILTER;
  filterMode: FILTER_MODE;
  filterValues: string[];
};

const generateSlotConfig = (
  filter: FILTER,
  filterMode: FILTER_MODE,
  filterValues: string[]
): SlotConfig => {
  return { filter, filterMode, filterValues };
};

export const SLOT_CONFIG = new Map<string, SlotConfig[]>([
  [
    'slot_1_uncommon',
    [
      generateSlotConfig(FILTER.RARITY, FILTER_MODE.INCLUDE, ['uncommon']),
      generateSlotConfig(FILTER.TYPE, FILTER_MODE.EXCLUDE, ['land']),
    ],
  ],
  [
    'slot_2_uncommon',
    [
      generateSlotConfig(FILTER.RARITY, FILTER_MODE.INCLUDE, ['uncommon']),
      generateSlotConfig(FILTER.TYPE, FILTER_MODE.EXCLUDE, ['land']),
    ],
  ],
  [
    'slot_3_uncommon',
    [
      generateSlotConfig(FILTER.RARITY, FILTER_MODE.INCLUDE, ['uncommon']),
      generateSlotConfig(FILTER.TYPE, FILTER_MODE.EXCLUDE, ['land']),
    ],
  ],
  [
    'slot_4_uncommon',
    [
      generateSlotConfig(FILTER.RARITY, FILTER_MODE.INCLUDE, ['uncommon']),
      generateSlotConfig(FILTER.TYPE, FILTER_MODE.EXCLUDE, ['land']),
    ],
  ],
  [
    'slot_10_common',
    [
      generateSlotConfig(FILTER.RARITY, FILTER_MODE.INCLUDE, ['common']),
      generateSlotConfig(FILTER.TYPE, FILTER_MODE.EXCLUDE, ['land']),
    ],
  ],
  [
    'slot_11_common',
    [
      generateSlotConfig(FILTER.RARITY, FILTER_MODE.INCLUDE, ['common']),
      generateSlotConfig(FILTER.TYPE, FILTER_MODE.EXCLUDE, ['land']),
    ],
  ],
  [
    'slot_12_common',
    [
      generateSlotConfig(FILTER.RARITY, FILTER_MODE.INCLUDE, ['common']),
      generateSlotConfig(FILTER.TYPE, FILTER_MODE.EXCLUDE, ['land']),
    ],
  ],
  [
    'slot_5_common',
    [
      generateSlotConfig(FILTER.RARITY, FILTER_MODE.INCLUDE, ['common']),
      generateSlotConfig(FILTER.TYPE, FILTER_MODE.EXCLUDE, ['land']),
    ],
  ],
  [
    'slot_6_common',
    [
      generateSlotConfig(FILTER.RARITY, FILTER_MODE.INCLUDE, ['common']),
      generateSlotConfig(FILTER.TYPE, FILTER_MODE.EXCLUDE, ['land']),
    ],
  ],
  [
    'slot_7_common',
    [
      generateSlotConfig(FILTER.RARITY, FILTER_MODE.INCLUDE, ['common']),
      generateSlotConfig(FILTER.TYPE, FILTER_MODE.EXCLUDE, ['land']),
    ],
  ],
  [
    'slot_8_common',
    [
      generateSlotConfig(FILTER.RARITY, FILTER_MODE.INCLUDE, ['common']),
      generateSlotConfig(FILTER.TYPE, FILTER_MODE.EXCLUDE, ['land']),
    ],
  ],
  [
    'slot_9_common',
    [
      generateSlotConfig(FILTER.RARITY, FILTER_MODE.INCLUDE, ['common']),
      generateSlotConfig(FILTER.TYPE, FILTER_MODE.EXCLUDE, ['land']),
    ],
  ],

  [
    'slot_13_land',
    [generateSlotConfig(FILTER.TYPE, FILTER_MODE.INCLUDE, ['land'])],
  ],
  ['slot_14_wildcard', []],
  ['slot_15_wildcard', []],
]);

export const SLOT_CONFIG_EOE_CUBE = new Map<string, SlotConfig[]>([
  [
    'slot_0_rare_or_mythic',
    [
      generateSlotConfig(FILTER.RARITY, FILTER_MODE.INCLUDE, [
        'rare',
        'mythic',
      ]),
      generateSlotConfig(FILTER.TYPE, FILTER_MODE.EXCLUDE, ['land']),
    ],
  ],
  [
    'slot_1_rare_or_mythic',
    [
      generateSlotConfig(FILTER.RARITY, FILTER_MODE.INCLUDE, [
        'rare',
        'mythic',
      ]),
      generateSlotConfig(FILTER.TYPE, FILTER_MODE.EXCLUDE, ['land']),
    ],
  ],
  [
    'slot_2_uncommon',
    [
      generateSlotConfig(FILTER.RARITY, FILTER_MODE.INCLUDE, ['uncommon']),
      generateSlotConfig(FILTER.TYPE, FILTER_MODE.EXCLUDE, ['land']),
    ],
  ],
  [
    'slot_3_uncommon',
    [
      generateSlotConfig(FILTER.RARITY, FILTER_MODE.INCLUDE, ['uncommon']),
      generateSlotConfig(FILTER.TYPE, FILTER_MODE.EXCLUDE, ['land']),
    ],
  ],
  [
    'slot_4_uncommon',
    [
      generateSlotConfig(FILTER.RARITY, FILTER_MODE.INCLUDE, ['uncommon']),
      generateSlotConfig(FILTER.TYPE, FILTER_MODE.EXCLUDE, ['land']),
    ],
  ],
  [
    'slot_10_common',
    [
      generateSlotConfig(FILTER.RARITY, FILTER_MODE.INCLUDE, ['common']),
      generateSlotConfig(FILTER.TYPE, FILTER_MODE.EXCLUDE, ['land']),
    ],
  ],
  [
    'slot_11_common',
    [
      generateSlotConfig(FILTER.RARITY, FILTER_MODE.INCLUDE, ['common']),
      generateSlotConfig(FILTER.TYPE, FILTER_MODE.EXCLUDE, ['land']),
    ],
  ],
  [
    'slot_12_common',
    [
      generateSlotConfig(FILTER.RARITY, FILTER_MODE.INCLUDE, ['common']),
      generateSlotConfig(FILTER.TYPE, FILTER_MODE.EXCLUDE, ['land']),
    ],
  ],
  [
    'slot_5_common_or_uncommon',
    [
      generateSlotConfig(FILTER.RARITY, FILTER_MODE.INCLUDE, [
        'common',
        'uncommon',
      ]),
      generateSlotConfig(FILTER.TYPE, FILTER_MODE.EXCLUDE, ['land']),
    ],
  ],
  [
    'slot_6_common_or_uncommon',
    [
      generateSlotConfig(FILTER.RARITY, FILTER_MODE.INCLUDE, [
        'common',
        'uncommon',
      ]),
      generateSlotConfig(FILTER.TYPE, FILTER_MODE.EXCLUDE, ['land']),
    ],
  ],
  [
    'slot_7_common_or_uncommon',
    [
      generateSlotConfig(FILTER.RARITY, FILTER_MODE.INCLUDE, [
        'common',
        'uncommon',
      ]),
      generateSlotConfig(FILTER.TYPE, FILTER_MODE.EXCLUDE, ['land']),
    ],
  ],
  [
    'slot_8_common_or_uncommon',
    [
      generateSlotConfig(FILTER.RARITY, FILTER_MODE.INCLUDE, [
        'common',
        'uncommon',
      ]),
      generateSlotConfig(FILTER.TYPE, FILTER_MODE.EXCLUDE, ['land']),
    ],
  ],
  [
    'slot_9_common_or_uncommon',
    [
      generateSlotConfig(FILTER.RARITY, FILTER_MODE.INCLUDE, [
        'common',
        'uncommon',
      ]),
      generateSlotConfig(FILTER.TYPE, FILTER_MODE.EXCLUDE, ['land']),
    ],
  ],

  ['slot_13_wildcard', []],
  ['slot_14_wildcard', []],
  ['slot_15_wildcard', []],
]);
