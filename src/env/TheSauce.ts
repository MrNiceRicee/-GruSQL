// const theSauce = {
//   SELECT: { expression: /(?:SELECT)/gim, replace: 'YOINK' },
// };

const theSauce = new Map([
  ['yoink', { expression: /(?:SELECT)/gim, replace: 'YOINK' }],
]);

export default theSauce;
