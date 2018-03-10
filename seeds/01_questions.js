exports.seed = function(knex, Promise) {
  return knex('questions')
    .del()
    .then(function() {
      return knex('questions').insert([
        {
          id: 1,
          title: 'Cannibal Islands are awesome',
          question:
            'You are in an unfortunate situation in which you are forced to consider cannibalism in order to stay alive. Would you rather eat babies or elderly people?',
          answer1: 'Babies',
          answer2: 'Elderly',
          response1: '6',
          response2: '2'
        },
        {
          id: 2,
          title: 'Brain Pill',
          question:
            'You are offered a Brain Pill that will make you feel 10 percent more intelligent, but you will seem 20 percent less intelligent to everyone else.',
          answer1: 'Take the pill',
          answer2: 'Do not take pill',
          response1: '1',
          response2: '4'
        },
        {
          id: 3,
          title: 'The Rock Star',
          question:
            'You wake up in Bruce Springstines body! Your voice sounds just like him but you have your same musical talent. You are scheduled to perform in a huge concert that night. What would you do?',
          answer1: 'Play the concert',
          answer2: 'Dont Play concert',
          response1: '4',
          response2: '4'
        }
      ])
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE questions_id_seq RESTART WITH 25;')
    })
}
