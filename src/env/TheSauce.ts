// const theSauce = {
//   SELECT: { expression: /(?:SELECT)/gim, replace: 'YOINK' },
// };

const theSauce = new Map([
  ['yoink', { expression: /(?:yoink)/gim, replace: 'SELECT' }],
  ['posted', { expression: /(?:posted)/gim, replace: 'INSERT INTO' }],
  ['cancel', { expression: /(?:cancel)/gim, replace: 'DELETE' }],
  ['glow up', { expression: /(?:glow up)/gim, replace: 'UPDATE' }],
  ['addy', { expression: /(?:Addy)/gim, replace: 'FROM' }],
  ['fit check', { expression: /(?:FIT CHECK)/gim, replace: 'WHERE' }],
  ['squad up', { expression: /(?:SQUAD UP)/gim, replace: 'GROUP BY' }],
  ['otp', { expression: /(?:OTP)/gim, replace: 'ORDER BY' }],
  ['extra', { expression: /(?:EXTRA)/gim, replace: 'AND' }],
  ['sus', { expression: /(?:SUS)/gim, replace: 'OR' }],
  ['drip', { expression: /(?:DRIP)/gim, replace: 'ASC' }],
  ['drag', { expression: /(?:DRAG)/gim, replace: 'DESC' }],
  ['iykyk', { expression: /(?:IYKYK)/gim, replace: 'ILIKE' }],
  ['iyk', { expression: /(?:IYK)/gim, replace: 'LIKE' }],
  ['vibes', { expression: /(?:VIBES)/gim, replace: 'VALUES' }],
  ['finesse', { expression: /(?:FINESSE)/gim, replace: 'RETURNING' }],
  ['bet', { expression: /(?:BET)/gim, replace: 'SET' }],
]);

export default theSauce;
