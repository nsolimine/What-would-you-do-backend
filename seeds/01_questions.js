exports.seed = function(knex, Promise) {
  return knex('questions')
    .del()
    .then(function() {
      return knex('questions').insert([
        {
          id: 1,
          title: 'The Dress Code',
          question:
            'You work in an office, performing a job that you find satisfying (and which compensates you adequately).  The company that employs you is suddenly purchased by an eccentric millionaire who plans to immediately raise each persons salary by 5 percent and extend an extra week of vacation to full time employees.  However, this new owner intends to enforce a somewhat radical dress code: Every day, men will have to wear tuxedos, tails, and top hats (during the summer months, male employees will be allowed to wear gray three-piece suits on "casual" Fridays). Women must exclusively work in formal wear, preferably ball gowns or prom dresses.  Each employee will be given an annual $1,500 stipend to purchase necessary garments, but that money an only be spend on work-related clothing.  The new regime starts in three months.  Do you seek new employment elsewhere?',
          answer1: 'Sounds good to me!',
          answer2: 'No way!',
          response1: '0',
          response2: '0'
        },
        {
          id: 2,
          title: 'Earth VS the Moon',
          question:
            'You have won a prize.  The prize has two options, and you can choose either (but not both).  The first option is a year in Europe with a monthly stipend of $2,000.  The second option is ten minutes on the moon.  Which option do you select?',
          answer1: 'Europe!',
          answer2: 'The Moon!',
          response1: '0',
          response2: '0'
        },
        {
          id: 3,
          title: 'The Cannibals Quandary',
          question:
            'You are in a plane crash over the Andes Mountains.  As such, you will be forced to consume the flesh of the people who died on impact. This will be a terrible experience, but it is the only way for you to survive.  Fortunately, you did not know any of the victims personally.  Would you rather eat a baby, or would you rather eat an elderly person?  Would gender play a role in the selection process? And how much would it bother you if this meat turned out to be delicous?',
          answer1: 'Baby',
          answer2: 'Elderly Person',
          response1: '0',
          response2: '0'
        },
        {
          id: 4,
          title: 'Body VS Mind',
          question:
            'You are given a choice between two rewards.  The first reward is to be twice as intelligent as you are right now.  You will be able to read twice as fast and remember twice as much, the size of your vocabulary will double, and you will be able to solve intellectual problems with twice your current aptitude.  The second reward is that you will never again feel sick (even when you are).  And you can always be whatever weight you want, regardless of what you eat or how little you exercise.  You can simply imagine the body you would like to have and that is the weight you will magically become.  Which reward do you choose?',
          answer1: 'Mind!',
          answer2: 'Body!',
          response1: '0',
          response2: '0'
        },
        {
          id: 5,
          title: 'The Countdown',
          question:
            'You are presented with a strange challenge: Someone dares you to count backward from 300 to 0.  If you succeed at this simple request, you will be given $25,000 in cash.  However, if you misspeak, get any digit incorrect, or make any mistake whatsoever, you will immediately be doused with gasoline and burned alive.  Do you attempt this challenge?',
          answer1: 'Absolutely!',
          answer2: 'No Way!',
          response1: '0',
          response2: '0'
        },
        {
          id: 6,
          title: 'The Price of Sex Appeal',
          question:
            'You meet a wizard in downtown Chicago. The wizard tells you he can make you more attractive if you pay him money. When you ask how this process works, the wizard points to a random person on the street. You look at this random stranger. The wizard says, "I will now make him one dollar more attractive." He waves his magic wand. Ostensibly, this person does not change at all; as far as you can tell, nothing is different. But somehow this person is suddenly a little more appealing. The tangible difference is invisible to the naked eye, but you can not deny that this person is vaguely sexier. This wizard has a weird rule though, you can only pay him once. You can not keep giving him money until you are satisfied. You can only pay him one lump sum up front. How much cash do you give the wizard?',
          answer1: 'More than $1,000',
          answer2: 'Less than $1,000',
          response1: '0',
          response2: '0'
        },
        {
          id: 7,
          title: 'Prison Culture',
          question:
            'A totally innocent man is sent to prison for 25 years, all for a crime he did not commit (the DNA evidence that indisputably proves his innocence does not emerge until he has completed his full sentence). During those 25 years in prison, he kills three other inmates, sells drugs, and steals food from other inmates on a regular basis. However, he was never caught doing any of these illegal acts. Upon his release from prison, he openly admits to doing all of these things in fact, he brags about these activities to the media. Prison is a different culture, he explains. I did what I had to do to survive. You are head of the penal system. You have just learned of this mans wrongful imprisonment and about all of the terrible things he did while in jail. Do you release him back into society, or do you attempt to charge him with the new crimes he claims to have committed during his prison stay?',
          answer1: 'Charge Him!',
          answer2: 'We made the mistake!',
          response1: '0',
          response2: '0'
        },
        {
          id: 8,
          title: 'Forever 75',
          question:
            'You celebrate your 75th birthday in good health. As far as you can tell, you are a spry, relatively normal 75-year-old. And this condition does not seem to change over time: When you celebrate your 80th birthday, you look and feel exactly as you did on your 75th. When you hit 90, you still look and feel 75. On your 100th birthday, you realize that most of your friends are now dead or dying -- but physically, you are the same independent person you were 25 years ago. You hit age 110 with the same results. Every year, you are celebrating a new birthday without physically evolving beyond the age of 75. Doctors have no explanation for this inexplicable stasis. How old would you have to be before you would start to seriously believe that you are immortal?',
          answer1: 'Over 110',
          answer2: 'Over 150',
          response1: '0',
          response2: '0'
        },
        {
          id: 9,
          title: 'Vampire Weekend',
          question:
            'It is the evening before your wedding. Everything is going as planned. You are spending the afternoon with a few old friends, chatting casually about old times. Suddenly, your spouse-to-be bursts into the room, totally hysterical. Your spouse-to-be insists that s/he has just seen a vampire. When you ask what this means, s/he says: "I was looking out of the window of my hotel room, and I could see into the apartment building across the street. That is when I saw the vampire. I saw a man in a black cape bite a womans neck and drink her blood. I know this sounds crazy, but I am that certain what I saw is real." Your prospective spouse is in a state of panic and pleads with you to believe his/her story. You can tell that this is really, important to them. Knowing the fragility of the situation and the intensity of the timing, do you tell your potential spouse that you believe that s/he saw a vampire across the street? All of your old friends are watching this conversation.',
          answer1: 'I Believe!',
          answer2: 'Thats Crazy!',
          response1: '0',
          response2: '0'
        },
        {
          id: 10,
          title: 'The Dream VCR',
          question:
            'At long last, someone invents "the dream VCR." This machine allows you to tape an entire evenings worth of your own dreams, which you can then watch at your leisure. However, the inventor of the dream VCR will only allow you to use this device if you agree to a strange caveat: When you watch your dreams, you must do so with your family and closest friends in the same room. They get to watch your dreams along with you. And if you do not agree to this, you can not use the dream VCR. Would you still do it?',
          answer1: 'Absolutely!',
          answer2: 'There is no way!',
          response1: '0',
          response2: '0'
        },
        {
          id: 11,
          title: 'A Life In Film',
          question:
            'For whatever the reason, two unauthorized movies are made about your life. The first is an independently released documentary, primarily comprised of interviews with people who know you and bootleg footage from your actual life. Critics are describing the documentary as "brutally honest and relentlessly fair." Meanwhile, Columbia TriStar has produced a big-budget biopic of your life, casting major Hollywood stars as you and all of your acquaintances; though the movie is based on actual events, screenwriters have taken some liberties with the facts. Critics are split on the artistic merits of this fictionalized account, but audiences love it. Which film would you be more interested in seeing?',
          answer1: 'The Documentary!',
          answer2: 'The Feature Film!',
          response1: '1',
          response2: '1'
        },
        {
          id: 12,
          title: 'Shaquille in the Shower',
          question:
            'You come home from an afternoon of shopping, expecting your residence to be empty. However, upon entering your front door, you immediately sense that something is strange: The entire place smells like marijuana and roses. There is a briefcase sitting in the middle of your living room floor, filled with diamonds and Christmas cookies. You can hear the shower running, and -- when you open the door to the bathroom -- you realize that the man using the shower is basketball legend Shaquille ONeal. A naked Shaq peers at you from behind the shower curtain and smiles enthusiastically, but says nothing. He then returns to washing himself. When you ask ONeal what he is doing in your home, he simply says, "I do not remember." Do you call the police?',
          answer1: 'He can stay!',
          answer2: 'Call the police!',
          response1: '0',
          response2: '0'
        },
        {
          id: 13,
          title: 'Lost Virginity Redux',
          question:
            'Imagine you could go back to the age of five and relive the rest of your life, knowing everything that you know now. You will re-experience your entire adolescence with both the cognitive ability of an adult and the memories of everything you have learned from having lived your life previously. Would you lose your virginity earlier or later than you did the first time around?',
          answer1: 'Earlier',
          answer2: 'Later',
          response1: '0',
          response2: '0'
        },
        {
          id: 14,
          title: 'Rudimentary Magician',
          question:
            'Let us assume you met a rudimentary magician. Let us also assume that he can do five simple tricks: He can pull a rabbit out of his hat, he can make a coin disappear, he can turn the Ace of Spades into the Joker card, and he can do two others in a similar vein. These are his only tricks and he can not learn any more; he can only do these five. However, it turns out that he is doing these five tricks with real magic. It is not an illusion; he can actually conjure the bunny out of the ether and he can move the coin through space. He is legitimately magical, but extremely limited in scope and influence. Would this person be more impressive to you than Albert Einstein?',
          answer1: 'Of Course!',
          answer2: 'Nope!',
          response1: '0',
          response2: '0'
        },
        {
          id: 15,
          title: 'The Nude Acquaintance',
          question:
            'Think of a specific friend of yours -- not your best friend, but someone who is (a) more than an acquaintance and (b) physically attractive. One day, while trolling the Internet, you accidentally come across three nude photographs of this person, reclined on a sofa bed. The pictures were clearly taken several years ago, and it is unclear if they photos were casually posed or taken without the subjects knowledge (your friend looks comfortable, but he/she is never looking directly into the lens of the camera). The pictures are not labeled, and your friends name is not listed anywhere on the site -- but you are certain that this is the same person you know. What do you do with this information? Do you tell anyone?',
          answer1: 'Yes!',
          answer2: 'No!',
          response1: '0',
          response2: '0'
        },
        {
          id: 16,
          title: 'The Moon Fight',
          question:
            'A total stranger picks a fight with you in a bar. This stranger is exactly your size and weight. You have done nothing to this individual to warrant such animosity, but the stranger really wants to fight you. And to make matters weirder, this stranger wants to fight you on the moon (and this is somehow possible). You and this stranger will be transported to the surface of the moon, outfitted in ultra-thin (and very comfortable) space suits, and rigged with lightweight oxygen tanks. You will then be expected to fight for 10 three-minute rounds. You can not use weapons, there are no rules, and you cannot quit (unless you or your opponent are knocked unconscious). Do you accept this challenge?',
          answer1: 'Bring it on!',
          answer2: 'Absolutely not!',
          response1: '0',
          response2: '0'
        },
        {
          id: 17,
          title: 'Artistic Telekinesis',
          question:
            'Let us assume that you have the ability to telekinetically change culture while you actively experience it. Your mind can now dictate what you see and hear. For example, if you were listening to Pearl Jam and you wanted the music to be heavier, it would immediately sound as though the guitars had been tuned differently in the studio. If you were watching The Office on NBC and decided that Jim should marry Pam (or Karen, or both), you could make it happen all you would need to do is think about that specific desire. You could stare at an oil painting and unconsciously change the color contrasts. You could (essentially) write books as you read them, eliminating certain characters and redirecting plot points as they occurred in the text. However, such changes would only apply to your experience; you could kill off Han Solo at the end of Return of the Jedi, but that would not change the movie for anyone else. If this became reality would art retain any meaning whatsoever?',
          answer1: 'It would retain meaning!',
          answer2: 'No it would not!',
          response1: '0',
          response2: '0'
        },
        {
          id: 18,
          title: 'The Industry Standard',
          question:
            'You are inside a very peculiar rock club: the manager of this club demands that all his musical acts must take an extensive IQ test before he will allow them to perform. Tonight there are two acts on the bill, and they coincidentally share the same band name, The Industry Standard. Both bands are alleged to be awesome. Sadly, you only have one hour to spend at the club, and the intermission between the two acts is very long (so you cannot watch both). You ask the manager which version of The Industry Standard you should watch. "I have no idea," he says. "But I will tell you this: The first band had the highest test scores I have ever seen, anywhere. Each member is technically a genius. Conversely, the band playing second had some of the worst scores ever recorded. One member might actually be illiterate. However, I halfway suspect they were all drunk and mocking the entire process. I could not tell for sure." Which version of The Industry Standard do you decide to see?',
          answer1: 'The Geniuses!',
          answer2: 'The Possibly Illiterate!',
          response1: '0',
          response2: '0'
        },
        {
          id: 19,
          title: 'Collarbones n Chains',
          question:
            'You meet your soul mate. However, there is a catch: Every three years, someone will break both of your soul mates collarbones with a Crescent wrench, and there is only one way you can stop this from happening: You must swallow a pill that will make every song you hear -- for the rest of your life -- sound as if it is being performed by the band Alice in Chains. When you hear Creedence Clearwater Revival on the radio, it will sound (to your ears) like it is being played by Alice in Chains. If you see Radiohead live, every one of their tunes will sound like it is being covered by Alice in Chains. When you hear a commercial jingle on TV, it will sound like Alice in Chains; if you sing to yourself in the shower, your voice will sound like deceased Alice in Chains vocalist Layne Staley performing a cappella (but it will only sound this way to you). Would you swallow the pill?',
          answer1: 'Sounds good to me!',
          answer2: 'Dealbreaker!',
          response1: '0',
          response2: '0'
        },
        {
          id: 20,
          title: 'Super Gorilla',
          question:
            'Genetic engineers at Johns Hopkins University announce that they have developed a so-called super gorilla. Though the animal cannot speak, it has a sign-language lexicon of more than 12,000 words, an IQ of nearly 85, and -- most notable -- a vague sense of self-awareness. Oddly, the creature (who weights 700 pounds) becomes fascinated by football. The gorilla aspires to play the game at its highest level and quickly develops the rudimentary skills of a defensive end. ESPN analyst Tom Jackson speculates that this gorilla would be "borderline unblockable" and would likely average six sacks per game (although Jackson concedes that the beast might be susceptible to counters and misdirection plays). Meanwhile, the gorilla has made it clear that he would never intentionally injure any opponent. You are commissioner of the NFL: Would you allow this gorilla to sign with the Seattle Seahawks?',
          answer1: 'Let him play!',
          answer2: 'No, its insane!',
          response1: '0',
          response2: '0'
        },
        {
          id: 21,
          title: 'The ParaBox',
          question:
            'Let us assume there are two boxes on a table. In one box, there is a relatively normal turtle; in the other, Adolf Hitlers skull. You have to select one of these items for your home. If you select the turtle, you cannot give it away and you have to keep it alive for two years; if either of these parameters are not met, you will be fined $999 by the state. If you select Hitlers skull, you are required to display it in a semi-prominent location in your living room for the same amount of time, although you will be paid a stipend of $120 per month for doing so. Display of the skull must be apolitical. Which option do you select?',
          answer1: 'Hitlers Skull!',
          answer2: 'The Turtle!',
          response1: '0',
          response2: '0'
        },
        {
          id: 22,
          title: 'Kick in the Ribs',
          question:
            'Your best friend is taking a nap on the floor of your living room. Suddenly, you are faced with a bizarre existential problem: This friend is going to die unless you kick them (as hard as you can) in the rib cage. If you don’t kick them while they slumber, they will never wake up. However, you can never explain this to your friend; if you later inform them that you did this to save their life, they will also die from that. So you have to kick a sleeping friend in the ribs, and you can’t tell them why. Since you cannot tell your friend the truth, what kind of excuse will you fabricate to explain this (seemingly inexplicable) attack?',
          answer1: 'I saw something on you!',
          answer2: 'I wanted to!',
          response1: '0',
          response2: '0'
        },
        {
          id: 23,
          title: 'Office Politics',
          question:
            'You work in an office. Generally, you are popular with your coworkers. However, you discover that there are currently two rumors circulating the office gossip mill, and both involve you. The first rumor is that you got drunk at the office holiday party and had sex with one of your married coworkers. This rumor is completely true, but most people don’t believe it. The second rumor is that you have been stealing hundreds of dollars of office supplies (and then selling them to cover a gambling debt). This rumor is completely false, but virtually everyone assumes it is factual. Which of these two rumors is most troubling to you?',
          answer1: 'The Philandering',
          answer2: 'The Stealing',
          response1: '0',
          response2: '0'
        },
        {
          id: 24,
          title: 'The Joker',
          question:
            'You are sitting in an empty bar (in a town you’ve never before visited), drinking Bacardi with a soft-spoken acquaintance you barely know. After an hour, a third individual walks into the tavern and sits by himself, and you ask your acquaintance who the new man is. “Be careful of that guy,” you are told. “He is a man with a past.” A few minutes later, a fourth person enters the bar; he also sits alone. You ask your acquaintance who this new individual is. “Be careful of that guy, too,” he says. “He is a man with no past.” Which of these two people do you trust less?',
          answer1: 'The man with a past',
          answer2: 'The man with no past',
          response1: '0',
          response2: '0'
        },
        {
          id: 25,
          title: 'Front Page News',
          question:
            'Defying all expectation, a group of Scottish marine biologists capture a live Loch Ness Monster. In an almost unbelievable coincidence, a bear hunter in the Pacific Northwest shoots a Sasquatch in the thigh, thereby allowing zoologists to take the furry monster into captivity. These events happen on the same afternoon. That evening, the president announces he may have thyroid cancer and will undergo a biopsy later that week. You are the front page editor of The New York Times: What do you play as the biggest story?',
          answer1: 'Mythical Beasts',
          answer2: 'The President',
          response1: '0',
          response2: '0'
        }
      ])
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE questions_id_seq RESTART WITH 26;')
    })
}
