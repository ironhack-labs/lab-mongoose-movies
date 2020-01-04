const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");

const dbCelebrities = "celebrities";
mongoose.connect(`mongodb://localhost/${dbCelebrities}`);

// const dbMovies = "movies";
// mongoose.connect(`mongodb://localhost/${dbMovies}`);

const celebrities = [
  {
    name: "Christian Bale",
    occupation: "Actor",
    catchPhrase: `I'm Batman`
  },
  {
    name: "Leonardo DiCaprio",
    occupation: "Actor",
    catchPhrase: "A real inspiration cannot be falsified"
  },
  {
    name: "Jack Sparrow",
    occupation: "Pirate",
    catchPhrase: "If you were waiting for the opportune moment, that was it"
  }
];

const movies = [
  {
    title: "Batman, The Dark Knight Returns",
    genre: "Comic-book",
    plot:
      "A gang of criminals rob a Gotham City mob bank, murdering each other for a higher share of the money until only the Joker remains, who escapes with the money. Batman, District Attorney Harvey Dent and Lieutenant James Gordon form an alliance to rid Gotham City of organized crime. Bruce Wayne believes that with Dent as Gotham's protector, he can retire from being Batman and lead a normal life with Rachel Dawes – even though she and Dent are dating. Mob bosses Sal Maroni, Gambol, and the Chechen hold a video conference with their corrupt accountant, Lau, who has taken their funds for safekeeping and fled to Hong Kong.The Joker interrupts the meeting to warn them that since Batman is unhindered by the law, he would find Lau, who would give up the mob's money for a plea bargain. Joker offers to kill Batman in exchange for half of their money. The mob bosses disagree, and Gambol places a bounty on the Joker. The Joker finds and kills Gambol, taking over his gang. The mob decides to take the Joker up on his offer. Batman finds Lau in Hong Kong and brings him back to Gotham to testify, allowing Dent to apprehend the entire mob.The Joker threatens to kill people unless Batman reveals his identity, and starts by murdering Police Commissioner Gillian B.Loeb and the judge presiding over the mob trial.The Joker also tries to kill Mayor Anthony Garcia, but Gordon sacrifices himself to stop the assassination.Dent kidnaps one of Joker's henchmen and threatens him with a seemingly deadly game of heads or tails until Batman intervenes, warning Dent that all the criminals he has convicted would be released if anyone found out. Dent learns that Rachel is Joker's next target. Bruce decides to reveal his secret identity to prevent more deaths.Before he can, however, Dent falsely announces that he is Batman to lure the Joker out.Dent is taken into protective custody, but the Joker appears and attacks the convoy.Batman comes to Dent's rescue and Gordon, who faked his death, apprehends the Joker, securing a promotion to Commissioner. Rachel and Dent are escorted away by detectives on Maroni's payroll; Gordon later learns that they never arrived home.Batman interrogates the Joker, who reveals that they have been trapped in separate locations rigged with explosives and that Batman must choose one to save.Batman races to save Rachel, while Gordon attempts to rescue Dent.Batman arrives at the building, but realizes that the Joker has sent him to Dent's location instead. Both buildings explode, killing Rachel and disfiguring Dent. The Joker escapes with Lau, who leads him to the Mob's funds.The Joker burns his share of the money and kills Lau and the Chechen. Coleman Reese, an accountant at Wayne Enterprises, deduces that Bruce is Batman and threatens to publicize the information.Not wanting Reese's revelation to interfere with his plans, the Joker threatens to destroy a hospital unless Reese is killed within an hour. All hospitals are evacuated and Gordon travels to secure Reese. The Joker, disguised as a hospital nurse, discovers Dent's ward and hands him a gun, convincing him to seek revenge for Rachel's death. The Joker destroys the hospital and escapes with a busload of hostages. Dent goes on a killing spree, deciding the fates of people he holds responsible for Rachel's death by flipping his lucky coin, one face of which was corroded in the explosion.Dent eventually apprehends Gordon's family, believing Gordon's love for his family parallels his love for Rachel. After announcing that Gotham City will be subject to his rule by nightfall, the Joker rigs two evacuating ferries with explosives; one carrying civilians and the other prisoners.The passengers have been supplied with a trigger to the other boat's explosives, and the Joker announces through an intercom that he will blow both ferries if one of them has not been destroyed by midnight. Batman finds the Joker by using a sonar device that spies on the entire city, with the reluctant help of Lucius Fox. The civilians and the prisoners refuse to kill each other, while Batman apprehends the Joker after a fight. Before the police arrive to take the Joker into custody, he gloats that Gotham's citizens will lose hope once Dent's rampage becomes public knowledge. Gordon and Batman arrive at the building where Rachel died and find Dent threatening to kill Gordon's family. Dent again flips his coin and shoots Batman, spares himself, and aims to kill Gordon's son, claiming that Gordon's negligence is responsible for Rachel's death.Batman, who was wearing body armor, tackles Dent off the building to his death.Batman persuades Gordon to let him take responsibility for the killing spree to preserve Dent's heroic image. As the police launch a manhunt for Batman, Gordon destroys the Bat-signal, Fox watches as the sonar device self-destructs, and Alfred burns a letter from Rachel saying she plans to marry Dent."
  },
  {
    title: "Inception",
    genre: "Science fiction",
    plot: `Dominick "Dom" Cobb and Arthur are "extractors": they perform corporate espionage using experimental military technology to infiltrate the subconscious of their targets and extract valuable information through a shared dream world. Their latest target, Japanese businessman Saito, reveals that he arranged their mission himself to test Cobb for a seemingly impossible job: implanting an idea in a person's subconscious, or "inception". To break up the energy conglomerate of ailing competitor Maurice Fischer, Saito wants Cobb to convince Fischer's son and heir, Robert, to dissolve his father's company. In return, Saito promises to use his influence once the job is done to clear Cobb's apparent criminal status, which prevents him from returning home to his children. Though Arthur is convinced that the task is impossible, Cobb insists that it can be done.Cobb accepts the offer and assembles his team: Eames, a conman and identity forger; Yusuf, a chemist who concocts a powerful sedative for a stable "dream within a dream" strategy; and Ariadne, an architecture student tasked with designing the labyrinth of the dream landscapes recruited with the help of Cobb's father-in-law, Professor Stephen Miles. While dream-sharing with Cobb, Ariadne learns his subconscious houses an invasive projection of his late wife Mal. After Maurice dies in Sydney, Robert Fischer accompanies the body on a ten- hour flight back to Los Angeles, which the team(including Saito, who wants to verify their success) uses as an opportunity to sedate and take Robert into a shared dream.At each dream level, the person generating the dream stays behind to set up a "kick" that will be used to awaken the other sleeping team members from the deeper dream level; to be successful, these kicks must occur simultaneously at each dream level, a fact complicated due to the nature of time which flows much faster in each successive level.They use Non, je ne regrette rien as an auditory cue to help coordinate the kicks.The first level is Yusuf's dream of a rainy Los Angeles. The team abducts Robert, but they are attacked by armed projections from his subconscious, which has been specifically trained to defend against such intruders. The team takes Robert and a wounded Saito to a warehouse, where Cobb reveals that while dying in the dream would normally wake Saito up, the powerful sedatives needed to stabilize the multi-level dream will instead send a dying dreamer into "limbo": a world of infinite subconscious from which escape is extremely difficult, if not impossible, and in which a dreamer risks forgetting they are in a dream. Despite these setbacks, the team continues with the mission. Eames impersonates Robert's godfather, Peter Browning, to suggest Robert reconsider his father's will.Yusuf drives them around in a van as the rest are sedated into the second level, a hotel dreamed by Arthur.Cobb persuades Robert that he has been kidnapped by Browning, and that Cobb is his subconscious protector.Cobb persuades Robert to go down another level to explore Browning's subconscious (in reality, it is a ruse to enter Robert's subconscious).The third level is a fortified hospital on a snowy mountain dreamed by Eames.The team has to infiltrate it and hold off the guards as Saito takes Robert into the equivalent of his subconscious.Yusuf, under pursuit by Robert's projections in the first level, deliberately drives off a bridge thus initiating his kick too soon. This causes an avalanche in Eames' level, and removes the gravity of Arthur's level, thus forcing Arthur to improvise a new kick synchronized with the van hitting the water. Mal's projection emerges in Eames' level and kills Robert; Cobb kills Mal, and Saito succumbs to his wounds. Cobb and Ariadne enter Limbo to rescue Robert and Saito, while Eames sets up a kick by rigging the hospital with explosives. Cobb reveals to Ariadne that he and Mal went to Limbo while experimenting with the dream - sharing technology.Sedated for a few hours of real - time, they spent fifty years in a dream constructing a world from their shared memories.When Mal refused to return to reality, Cobb used a rudimentary form of inception by reactivating her totem(an object that dreamers use to distinguish their dreams from reality), and reminding her subconscious that their world was not real.However, after waking up, the inception had taken root and Mal still believed that she was dreaming.In an attempt to "wake up" for real, Mal committed suicide and framed Cobb for her death to force him to do the same.Facing a murder charge, Cobb fled the U.S., leaving his children in the care of his father -in -law. Through his confession, Cobb makes peace with his guilt over Mal's death. Ariadne kills Mal's projection and wakes Robert up with a kick.Revived at the fortified hospital, he enters a safe room to discover and accept the planted idea: a projection of his dying father telling him to be his own man.While Cobb remains in Limbo to search for Saito, the other team members ride the synchronized kicks back to reality.Cobb eventually finds an aged Saito in Limbo and reminds him of their agreement.The dreamers all awake on the plane and Saito makes a phone call. Upon arrival at Los Angeles Airport, Cobb passes the U.S.immigration checkpoint and Professor Miles accompanies him to his home.Using Mal's old totem—a spinning top that spins indefinitely in a dream world but falls over in reality—Cobb conducts a test to prove that he is indeed in the real world, but he does not observe its result and instead joins his children in the garden. Behind them, the totem begins to wobble, but it is unclear whether or not it will fall.`
  },
  {
    title: "Pirates of the Caribbean",
    genre: "Pirates",
    plot:
      "Blacksmith Will Turner teams up with eccentric pirate Captain Jack Sparrow to save Turner's love, Elizabeth Swann, from cursed pirates led by Jack's mutinous former first mate, Hector Barbossa. Jack wants revenge against Barbossa, who left him stranded on an island before stealing his ship, the Black Pearl, along with 882 pieces of cursed Aztec Gold."
  }
];

Celebrity.create(celebrities, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close();
});

Movie.create(movies, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${movies.length} movies`);
  mongoose.connection.close();
});
