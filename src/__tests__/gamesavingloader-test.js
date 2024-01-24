import GameSavingLoader from "../js/gamesavingloader";
jest.setTimeout(10000); 


test('объект GameSaving', () => {
  const dataGame = {
       id: 9,
     created: 1546300800,
       userInfo: {
           id: 1,
          name: 'Hitman',
          level: 10,
           points: 2000,
       },
   };

   return GameSavingLoader.load().then((saving) => {
   expect(saving).toEqual(dataGame);
   });
});


test('the loader with an error', () => {
  return GameSavingLoader.load().catch(error => expect(error).toThrow('error'));
});
