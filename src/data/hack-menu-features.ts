export const AIMBOT_FEATURES = [
  'Tracking',
  'Trigger Bot',
  'Prediction',
  'Autoshoot',
  'FOV Adjustment',
  'Flick Speed',
  'Tracking Accel',
  'Target Closest Bone',
  'Aim Layers',
  'Dynamic FOV',
  'Separate FOVs',
  'Flickbot',
  'Hero Specific Options',
  'Gravity Prediction',
  'Keybinds',
  'Hitbox Scaling',
  'Tracking Speed',
  'Bone Targeting',
  'Target Allies',
  'Skill Keybinding in Aim 2',
  'Target Lock',
] as const

export const VISUAL_FEATURES = [
  'Player Info',
  'Ult Charge Overlay',
  'Glow HP Indicator Mode',
  'Enemy View Angle',
  '3D Box',
  'Lines',
  'Draw FOV 2',
  'Target Highlighting',
  'Skeleton',
  'Glow',
  'Glow Rainbow Mode',
  '2D Box',
  'Cornered Box',
  'Draw FOV',
  'Visual Options for Every ESP Setting',
] as const

export const HERO_SCRIPTS = [
  'Global Auto-Melee',
  'Tracer Recall + Ult Bomb',
  'Sojourn Railgun on Guarantee Kill',
  'Mei Cryofreeze',
  'Zarya Bubble',
  'Hanzo Flick/Bow Charge Prediction',
  'Genji Flick + Auto-dash & Auto-Blade',
  'Roadhog Hook + Self-Heal',
  'Reaper Wraith Form',
  'Widow Auto-Unscope',
  'Doomfist Power Block',
] as const

export const MISC_FEATURES = [
  'Change Ingame FOV',
  'Automatic Configs Saving + Swapping',
  'Streamproof',
] as const

export type VisualToggle = {
  id: string
  label: string
  defaultOn: boolean
}

export const VISUAL_TOGGLES: VisualToggle[] = [
  { id: 'player-esp', label: 'Player ESP', defaultOn: true },
  { id: 'box', label: 'Box', defaultOn: true },
  { id: 'skeleton', label: 'Skeleton', defaultOn: true },
  { id: 'glow', label: 'Glow', defaultOn: false },
  { id: 'health', label: 'Health', defaultOn: true },
  { id: 'armor', label: 'Armor', defaultOn: true },
  { id: 'distance', label: 'Distance', defaultOn: true },
  { id: 'team-check', label: 'Team Check', defaultOn: true },
]

export const AIMBOT_TOGGLES: VisualToggle[] = [
  { id: 'tracking', label: 'Tracking', defaultOn: true },
  { id: 'triggerbot', label: 'Trigger Bot', defaultOn: true },
  { id: 'prediction', label: 'Prediction', defaultOn: true },
  { id: 'autoshoot', label: 'Autoshoot', defaultOn: false },
  { id: 'fov-adj', label: 'FOV Adjustment', defaultOn: true },
  { id: 'flick-speed', label: 'Flick Speed', defaultOn: true },
  { id: 'dynamic-fov', label: 'Dynamic FOV', defaultOn: false },
  { id: 'bone-target', label: 'Bone Targeting', defaultOn: true },
  { id: 'target-lock', label: 'Target Lock', defaultOn: true },
  { id: 'flickbot', label: 'Flickbot', defaultOn: false },
]

export const MISC_TOGGLES: VisualToggle[] = [
  { id: 'streamproof', label: 'Streamproof', defaultOn: true },
  { id: 'auto-config', label: 'Auto Config Save', defaultOn: true },
  { id: 'fov-change', label: 'Change Ingame FOV', defaultOn: false },
]
