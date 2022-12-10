export enum Evidence {
  EMF5 = 'emf5',
  SpiritBox = 'spiritBox',
  FingerPrints = 'fingerPrints',
  GhostOrb = 'ghostOrb',
  GhostWriting = 'ghostWriting',
  FreezingTemp = 'freezingTemp',
  DOTS = 'DOTS',
}

export type EvidenceRecord = Record<Evidence, boolean>

export type Ghost = {
  name: string
  evidence: Evidence[]
  fakeEvidence?: Evidence[]
  strengths: string[]
  weaknesses: string[]
}

export const evidenceList = Object.values(Evidence)
console.log('ASD', evidenceList)

export const ghostData: Ghost[] = [
  {
    name: 'Banshee',
    evidence: [Evidence.FingerPrints, Evidence.GhostOrb, Evidence.DOTS],
    // evidence: {
    //   emf5: false,
    //   spiritBox: false,
    //   fingerPrints: true,
    //   ghostOrb: true,
    //   ghostWriting: false,
    //   freezingTemp: false,
    //   DOTS: true,
    // },
    strengths: ['Will target only one player at a time.'],
    weaknesses: ['Has a distinctive wail on the Parabolic Microphone.'],
  },
  {
    name: 'Demon',
    evidence: [
      Evidence.FingerPrints,
      Evidence.GhostWriting,
      Evidence.FreezingTemp,
    ],
    // evidence: {
    //   emf5: false,
    //   spiritBox: false,
    //   fingerPrints: true,
    //   ghostOrb: false,
    //   ghostWriting: true,
    //   freezingTemp: true,
    //   DOTS: false,
    // },
    strengths: ['Can initiate hunts more often.'],
    weaknesses: ['Crucifix effectiveness is increased to 5m against one.'],
  },
  {
    name: 'Deogen',
    evidence: [Evidence.SpiritBox, Evidence.GhostWriting, Evidence.DOTS],
    // evidence: {
    //   emf5: false,
    //   spiritBox: true,
    //   fingerPrints: false,
    //   ghostOrb: false,
    //   ghostWriting: true,
    //   freezingTemp: false,
    //   DOTS: true,
    // },
    strengths: [
      'Always knows where the player is during a hunt and moves very fast when going to their location.',
    ],
    weaknesses: ['Moves very slowly when it sees its victim.'],
  },
  {
    name: 'Goryo',
    evidence: [Evidence.EMF5, Evidence.FingerPrints, Evidence.DOTS],
    // evidence: {
    //   emf5: true,
    //   spiritBox: false,
    //   fingerPrints: true,
    //   ghostOrb: false,
    //   ghostWriting: false,
    //   freezingTemp: false,
    //   DOTS: true,
    // },
    strengths: [
      'Can only be seen interacting with D.O.T.S. through a camera when nobody is nearby.',
    ],
    weaknesses: ['Tends to wander away less from its ghost room.'],
  },
  {
    name: 'Hantu',
    evidence: [Evidence.FingerPrints, Evidence.GhostOrb, Evidence.FreezingTemp],
    // evidence: {
    //   emf5: false,
    //   spiritBox: false,
    //   fingerPrints: true,
    //   ghostOrb: true,
    //   ghostWriting: false,
    //   freezingTemp: true,
    //   DOTS: false,
    // },
    strengths: ['Lower temperatures allow the Hantu to move faster.	'],
    weaknesses: ["Warmer areas slow the Hantu's movement."],
  },
  // {
  //   name: 'Jinn',
  //   evidence: {
  //     emf5: true,
  //     spiritBox: false,
  //     fingerPrints: true,
  //     ghostOrb: false,
  //     ghostWriting: false,
  //     freezingTemp: true,
  //     DOTS: false,
  //   },
  //   strengths: ['Travels at faster speeds if its victim is far away.'],
  //   weaknesses: ["Cannot use its ability if the site's fuse box is off."],
  // },
  // {
  //   name: 'Mare',
  //   evidence: {
  //     emf5: false,
  //     spiritBox: true,
  //     fingerPrints: false,
  //     ghostOrb: true,
  //     ghostWriting: true,
  //     freezingTemp: false,
  //     DOTS: false,
  //   },
  //   strengths: ['Has an increased chance to attack in the dark.	'],
  //   weaknesses: ['Turning the lights on will reduce the chance of an attack.'],
  // },
  // {
  //   name: 'Moroi',
  //   evidence: {
  //     emf5: false,
  //     spiritBox: true,
  //     fingerPrints: false,
  //     ghostOrb: false,
  //     ghostWriting: true,
  //     freezingTemp: true,
  //     DOTS: false,
  //   },
  //   strengths: [
  //     'Moves noticeably faster at low player sanity and can make players lose sanity quicker than usual while investigating.',
  //   ],
  //   weaknesses: ['Smudge sticks blind the ghost for longer during hunts.'],
  // },
  // {
  //   name: 'The Mimic',
  //   evidence: {
  //     emf5: false,
  //     spiritBox: true,
  //     fingerPrints: true,
  //     ghostOrb: true,
  //     ghostWriting: false,
  //     freezingTemp: true,
  //     DOTS: false,
  //   },
  //   fakeEvidence: [Evidence.GhostOrb],
  //   strengths: ['Can mimic the abilities and traits of other ghosts.'],
  //   weaknesses: ['Will present Ghost Orbs as a secondary evidence.'],
  // },
  // {
  //   name: 'Myling',
  //   evidence: {
  //     emf5: true,
  //     spiritBox: false,
  //     fingerPrints: true,
  //     ghostOrb: false,
  //     ghostWriting: true,
  //     freezingTemp: false,
  //     DOTS: false,
  //   },
  //   strengths: ['Has quieter footsteps during a hunt.'],
  //   weaknesses: ['Produces paranormal sounds more frequently.'],
  // },
  // {
  //   name: 'Obake',
  //   evidence: {
  //     emf5: true,
  //     spiritBox: false,
  //     fingerPrints: true,
  //     ghostOrb: true,
  //     ghostWriting: false,
  //     freezingTemp: false,
  //     DOTS: false,
  //   },
  //   strengths: ['May leave fingerprints that disappear quicker.'],
  //   weaknesses: ['Has a small chance of leaving six-fingered handprints.'],
  // },
  // {
  //   name: 'Oni',
  //   evidence: {
  //     emf5: true,
  //     spiritBox: false,
  //     fingerPrints: false,
  //     ghostOrb: false,
  //     ghostWriting: false,
  //     freezingTemp: true,
  //     DOTS: true,
  //   },
  //   strengths: ['Increased activity and ghost events.'],
  //   weaknesses: ["An Oni's increased activity makes them easier to find."],
  // },
  // {
  //   name: 'Onryo',
  //   evidence: {
  //     emf5: false,
  //     spiritBox: true,
  //     fingerPrints: false,
  //     ghostOrb: true,
  //     ghostWriting: false,
  //     freezingTemp: true,
  //     DOTS: false,
  //   },
  //   strengths: ['A flame extinguishing can cause an Onryo to attack.'],
  //   weaknesses: [
  //     "The presence of flames reduces the Onryo's ability to attack.",
  //   ],
  // },
  // {
  //   name: 'Phantom',
  //   evidence: {
  //     emf5: false,
  //     spiritBox: true,
  //     fingerPrints: true,
  //     ghostOrb: false,
  //     ghostWriting: false,
  //     freezingTemp: false,
  //     DOTS: true,
  //   },
  //   strengths: [
  //     "Looking at a Phantom will lower the player's sanity considerably.",
  //   ],
  //   weaknesses: [
  //     'Taking a photo of the Phantom will cause it to briefly disappear.',
  //   ],
  // },
  // {
  //   name: 'Poltergeist',
  //   evidence: {
  //     emf5: false,
  //     spiritBox: true,
  //     fingerPrints: true,
  //     ghostOrb: false,
  //     ghostWriting: true,
  //     freezingTemp: false,
  //     DOTS: false,
  //   },
  //   strengths: ['Capable of throwing multiple objects at once.'],
  //   weaknesses: ['Becomes powerless with no throwables nearby.'],
  // },
  // {
  //   name: 'Raiju',
  //   evidence: {
  //     emf5: true,
  //     spiritBox: false,
  //     fingerPrints: false,
  //     ghostOrb: true,
  //     ghostWriting: false,
  //     freezingTemp: false,
  //     DOTS: true,
  //   },
  //   strengths: ['Moves faster near electrical devices.'],
  //   weaknesses: [
  //     'Disrupts electronic equipment from further away when it hunts.',
  //   ],
  // },
  // {
  //   name: 'Revenant',
  //   evidence: {
  //     emf5: false,
  //     spiritBox: false,
  //     fingerPrints: false,
  //     ghostOrb: true,
  //     ghostWriting: true,
  //     freezingTemp: true,
  //     DOTS: false,
  //   },
  //   strengths: [
  //     'Can travel significantly faster if a player is spotted during a hunt.',
  //   ],
  //   weaknesses: ['Moves very slowly when not chasing a player.'],
  // },
  // {
  //   name: 'Shade',
  //   evidence: {
  //     emf5: true,
  //     spiritBox: false,
  //     fingerPrints: false,
  //     ghostOrb: false,
  //     ghostWriting: true,
  //     freezingTemp: true,
  //     DOTS: false,
  //   },
  //   strengths: [
  //     'Being shy makes it more difficult to locate and obtain evidence.',
  //   ],
  //   weaknesses: ['Less likely to hunt if multiple people are nearby.'],
  // },
  // {
  //   name: 'Spirit',
  //   evidence: {
  //     emf5: true,
  //     spiritBox: true,
  //     fingerPrints: false,
  //     ghostOrb: false,
  //     ghostWriting: true,
  //     freezingTemp: false,
  //     DOTS: false,
  //   },
  //   strengths: ['None.'],
  //   weaknesses: [
  //     'Smudge sticks are more effective, preventing a hunt for longer.',
  //   ],
  // },
  // {
  //   name: 'The Twins',
  //   evidence: {
  //     emf5: true,
  //     spiritBox: true,
  //     fingerPrints: false,
  //     ghostOrb: false,
  //     ghostWriting: false,
  //     freezingTemp: true,
  //     DOTS: false,
  //   },
  //   strengths: ['Either Twin may start a hunt, though not at the same time.'],
  //   weaknesses: ['Will often interact with the environment at the same time.'],
  // },
  // {
  //   name: 'Wraith',
  //   evidence: {
  //     emf5: true,
  //     spiritBox: true,
  //     fingerPrints: false,
  //     ghostOrb: false,
  //     ghostWriting: false,
  //     freezingTemp: false,
  //     DOTS: true,
  //   },
  //   strengths: ['Does not leave UV footprints after stepping in salt.'],
  //   weaknesses: ['Will become more active if it steps in salt.'],
  // },
  // {
  //   name: 'Yokai',
  //   evidence: {
  //     emf5: false,
  //     spiritBox: true,
  //     fingerPrints: false,
  //     ghostOrb: true,
  //     ghostWriting: false,
  //     freezingTemp: false,
  //     DOTS: true,
  //   },
  //   strengths: [
  //     'Talking near the Yokai will anger it, increasing the chance to attack.',
  //   ],
  //   weaknesses: ['Can only hear voices close to it during a hunt.'],
  // },
  // {
  //   name: 'Yurei',
  //   evidence: {
  //     emf5: false,
  //     spiritBox: false,
  //     fingerPrints: false,
  //     ghostOrb: true,
  //     ghostWriting: false,
  //     freezingTemp: true,
  //     DOTS: true,
  //   },
  //   strengths: ['Has a stronger effect on sanity.'],
  //   weaknesses: [
  //     "Smudging the Yurei's ghost room will reduce how often it wanders.",
  //   ],
  // },

  // {
  //   name: 'Thaye',
  //   evidence: {
  //     emf5: false,
  //     spiritBox: false,
  //     fingerPrints: false,
  //     ghostOrb: true,
  //     ghostWriting: true,
  //     freezingTemp: false,
  //     DOTS: true,
  //   },
  //   strengths: ['Entering the location makes it active, defensive and agile.'],
  //   weaknesses: ['Becomes slower and less active over time.'],
  // },
]
