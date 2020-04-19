const mongoose = require("mongoose")
const Celebrity = require("../models/celebrity")
const Movie = require("../models/movies")

mongoose
  .connect('mongodb://localhost/starter-code', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}". - Preparing Seed.`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

// const celebrities = [
//   {
//     name: "Matthew McConaughey",
//     occupation: "Actor",
//     catchPhrase: "Alright, alright, alright!’"
//   },
//   {
//     name: "Johnny Depp",
//     occupation: "Actor",
//     catchPhrase: "Life's pretty good, and why wouldn't it be? I'm a pirate, after all!"
//   },
//   {
//     name: "Rami Malek",
//     occupation: "Actor",
//     catchPhrase: "I just wanted to save the world"
//   },
// ]

// Celebrity.create(celebrities)
//   .then(allCelebrities => {
//     console.log(allCelebrities.length, " celebrities has been created")
//     mongoose.connection.close()
//   })
//   .catch(error => console.log("An error occured: ", error))


const movies = [
  {
    title: "Dallas Buyers Club",
    genre: "Drama",
    plot: `In July 1985, promiscuous Dallas electrician and rodeo cowboy Ron Woodroof (Matthew McConaughey) is diagnosed with AIDS and given 30 days to live. As a heterosexual, he initially refuses to accept the diagnosis but remembers having unprotected sex with a woman who was an intravenous drug user a couple years prior. He is soon ostracized by family and friends who mistakenly assume he contracted AIDS from homosexual relations. He gets fired from his job, and is eventually evicted from his home. At the hospital, he is tended to by Dr. Eve Saks (Jennifer Garner), who tells him that they are testing a drug called zidovudine (AZT), an antiretroviral drug which is thought to prolong the life of AIDS patients—and is the only drug approved by the Food and Drug Administration (FDA) for testing on humans. Saks informs him that in the clinical trials, half the patients receive the drug and the other half a placebo, as this is the only way they can determine if the drug is working.

Woodroof bribes a hospital worker to get him AZT. As soon as he begins taking it, he finds his health deteriorating (exacerbated by his cocaine use). When he returns to the hospital, he meets Rayon (Jared Leto), a drug addicted, HIV-positive trans woman, to whom he is initially hostile. As his health worsens, he drives to a makeshift Mexican hospital to get more AZT. The facility is run by a Dr. Vass, who has had his American medical license revoked because aspects of his work with AIDS patients had violated US regulations. Vass tells Woodroof that the AZT is "poisonous" and "kills every cell it comes into contact with". He instead prescribes a cocktail of drugs and nutritional supplements centered on ddC and the protein peptide T, which are not yet approved in the US. Three months later, Woodroof finds his health much improved. It occurs to him that he could make money by importing the drugs and selling them to other HIV-positive patients. Since the drugs alone are not illegal, he is able to get them over the border by masquerading as a priest and swearing that they are for personal use. Meanwhile, Saks also begins to notice the negative effects of AZT, but is told by her supervisor, Dr. Sevard, that it cannot be discontinued.

Over the next year, Woodroof begins selling the drugs on the street and at gay nightclubs. He comes back into contact with Rayon, with whom he reluctantly sets up business since she can bring in more customers. The pair establish the "Dallas Buyers Club", charging $400 per month for membership, and it becomes extremely popular. He gradually begins to respect Rayon as a friend. When Woodroof has a heart attack caused by a recently acquired dose of interferon, Sevard learns of the club and the alternative medication. He is angry that it is interrupting his trial, while the FDA confiscates the interferon and threatens to have Woodroof arrested. Saks agrees that there are benefits to AIDS medicine buyers clubs (of which there are several around the country) but feels powerless to change anything. The processes that the FDA uses to research, test and approve drugs are seen as flawed and a part of the problem for AIDS patients. Saks and Woodroof strike up a friendship.

The FDA gets a warrant to raid the Buyers Club, but can ultimately do nothing but fine Woodroof. In 1987, the FDA changes its regulations, making any unapproved drug illegal. As the Club runs out of funds, Rayon, who is addicted to cocaine, begs her father for money and tells Woodroof that she has sold her life insurance policy to raise money. Woodroof travels to Mexico and gets more of the peptide T. Upon return, Ron finds out that Rayon has died after being taken to the hospital. Saks is also upset by her death, and is asked to resign when the hospital discovers she has been linking patients with the Buyers Club, having learned that AZT trials previously conducted in France had proven the drug ineffective. She refuses, and insists that she will have to be fired instead.

As time passes, Woodroof shows more compassion towards gay, lesbian, and transgender members of the club and making money becomes less of a concern; his priority is provision of the drugs. Peptide T gets increasingly difficult to acquire, and in late 1987 he files a lawsuit against the FDA. He seeks the legal right to take the protein, which has been confirmed as non-toxic but is still not approved. The judge is sympathetic toward him and admonishes the FDA, but lacks the power to do anything. As the film ends, on-screen text reveals that the FDA later allowed Woodroof to take peptide T for personal use and that he died of the disease's effects in 1992, seven years later than his doctors initially predicted.`
  },
  {
    title: "Pirates of the Caribbean",
    genre: "Fantasy",
    plot: `In the early 1700s, while sailing to Port Royal, Jamaica, aboard HMS Dauntless, Governor Weatherby Swann, his daughter Elizabeth, Joshamee Gibbs, and Lieutenant James Norrington encounter a shipwreck and recover a boy, Will Turner. Elizabeth discovers a golden pirate medallion around his neck, and keeps it in order to protect him.

Eight years later, Norrington is promoted to commodore and proposes to Elizabeth. Her corset makes her faint and fall into the sea, which causes her medallion to emit a pulse. Captain Jack Sparrow, who had just arrived in Port Royal to commandeer a ship, rescues Elizabeth. Norrington identifies Jack as a pirate, and a chase ensues. Jack encounters Will, now a blacksmith and swordsman. They duel, and Jack is captured and imprisoned.

That night, the Black Pearl attacks Port Royal in search of the medallion. The crew of the Pearl capture Elizabeth, taking her to meet Captain Barbossa. Elizabeth claims her last name is Turner to conceal her identity as the governor's daughter. She learns that her medallion is one of 882 gold pieces that Barbossa's crew took from a treasure of Hernán Cortés on Isla de Muerta. An Aztec curse condemns them to become undead corpses under moonlight and with immortality but unable to enjoy anything, until they return all of the pieces and atone in blood, with the medallion being the final piece. Barbossa takes her prisoner, believing her to be the daughter of William "Bootstrap Bill" Turner, whose blood is needed to lift the curse.

Will frees Jack to rescue Elizabeth, whom Will loves. Jack—the original captain of the Black Pearl before Barbossa staged a mutiny—gets assistance from Will to reclaim his ship. The two commandeer HMS Interceptor, a small and very fast sloop-of-war, and head for Tortuga. There, Jack enlists Gibbs to help them put together a crew. At Isla de Muerta, Will and Jack witness Barbossa sacrificing Elizabeth's blood and the final gold piece. The curse is not lifted because Elizabeth does not carry the blood of Bootstrap Bill Turner. Bootstrap had been a crewmate of the Black Pearl before being thrown overboard by the crew for giving the medallion to Will. Will rescues Elizabeth and brings her to Interceptor, while Jack is captured by Barbossa and gets locked in the brig of the Pearl.

The Black Pearl pursues the Interceptor, taking Jack's crew hostage and destroying the ship. Will makes a deal with Barbossa to release Elizabeth in exchange for his blood, but Barbossa exploits a loophole in the agreement, marooning Jack and Elizabeth on a nearby island. Elizabeth makes a smoke signal, and Norrington brings HMS Dauntless, a ship of the line, to rescue Elizabeth and arrest Jack. Elizabeth asks Norrington to return for Will, convincing him by accepting Norrington's marriage proposal.

That night, the Dauntless arrives at Isla de Muerta. Jack plans to lure the pirates out to be ambushed by the crew of the Dauntless, but the plan goes awry when Barbossa's crew covertly walks underwater to surprise-attack the Dauntless from below. Elizabeth escapes the Dauntless and frees Jack's crew from the brig of the Black Pearl. They refuse to rescue Jack and Will, so Elizabeth sets out on her own while Jack's crew departs aboard the Pearl.

Jack frees Will and duels Barbossa, while Elizabeth and Will fight off Barbossa's crewmen Weatherby, Monk and Jacoby. Barbossa stabs Jack in the stomach, but the latter is revealed to be under the Aztec curse, having secretly taken a piece of gold from the chest of Cortés. Jack then shoots Barbossa, and Will drops both coins into the chest, with his and Jack's blood on them. The curse is lifted, causing Barbossa to die from Jack's gunshot; the rest of Barbossa's crew, realizing that they are no longer immortal, surrender and are arrested by the Royal Navy.

At Port Royal, Jack is led to the gallows to be hanged for piracy. Elizabeth diverts Norrington's attention and Will attempts a rescue, but Jack and Will are surrounded and held at gunpoint. Elizabeth intercedes and declares her love for Will, leaving Norrington crestfallen. Governor Swann pardons Will and gives his blessing for Elizabeth to marry him. Jack dives into the sea and escapes aboard the nearby Black Pearl, finally reclaiming the ship. Norrington permits Jack and the Pearl "one day's head start" before initiating pursuit.`
  },
  {
    title: "Bohemian Rhapsody",
    genre: "Biopic",
    plot: `In 1970, Farrokh Bulsara, a Parsi refugee from Zanzibar, works as a baggage handler at the Heathrow Airport and lives with his parents and sister. After seeing the band Smile perform "Doing All Right" at a pub, Farrokh encounters and is attracted to Mary Austin, and meets the band's drummer, Roger Taylor, and guitarist, Brian May, who inform him that their lead singer/bass guitarist, Tim Staffell, has quit. Farrokh, who has followed the band for some time, asks to join them. He impresses Taylor and May with his vocal ability, and they let him in the band. Farrokh and Mary begin dating. With Farrokh as lead singer and John Deacon on bass, the band sells out gigs across Britain. Farrokh urges his bandmates to think bigger and they sell their tour van to book Trident Studios[12] to record their debut album. An A&R rep from EMI Records, watching the band experiment, asks studio engineer Roy Thomas Baker for their demos. Farrokh changes the band's name to Queen, and legally changes his own name to Freddie Mercury.

The band signs with John Reid, Elton John's manager, and receives a contract with EMI. An appearance on Top of the Pops helps "Killer Queen" become a hit record. After touring to promote the album, Mary and Freddie become engaged. The album hits the charts in America and the band embarks on a sold-out U.S. tour, where Freddie begins to question his sexuality. In 1975, Queen records their fourth album, A Night at the Opera, with its centerpiece, "Bohemian Rhapsody". Despite the effort put into writing and recording it, EMI executive Ray Foster refuses to release the song as the album's lead single due to its six-minute length. After Foster further derides the song's lyrics and operatics, Freddie retaliates by throwing a rock through Foster's window and cursing at him, to which Foster responds in kind. Freddie conspires with DJ Kenny Everett to debut the song on the radio, forcing the record company to release it as a single. Despite mixed reviews, "Bohemian Rhapsody" becomes a smash hit. Freddie begins an affair with the band's day-to-day manager, Paul Prenter, during Queen's world tour. Confronted by Mary, Freddie comes out to her as bisexual, but she assures him that he is gay. They end their engagement but remain friends, and she moves next door after he purchases an extravagant house in 1980.

As Freddie sinks into debauchery with the manipulative Paul, tensions arise in the band. After throwing a lavish party, Freddie gropes a waiter, Jim Hutton, who is offended. Freddie apologises and the two connect and share a kiss. Jim tells Freddie to find him when Freddie learns to like himself. Following a successful show at Madison Square Garden, performing their latest hit "We Will Rock You", Paul suggests to Reid that Freddie is growing dissatisfied with the band, and could make better money by going solo, like Michael Jackson did. Reid proposes a solo career to Freddie, and Paul feigns ignorance, leading an enraged Freddie to fire Reid without consulting the band, furthering their strain. Freddie's (and Paul's) desire for Queen to branch out into disco and club music creates additional conflict with the band, although John Deacon writes a bass riff with a rock-disco beat that leads to their next hit, "Another One Bites the Dust".

At a press conference promoting Queen's 1982 album Hot Space, Freddie becomes hostile when he is bombarded with questions about his personal life. Freddie's relationship with his bandmates further sours after their music video for "I Want to Break Free", in which the band appears in drag, is banned from MTV and he announces his desire to temporarily separate. He reveals his $4 million solo deal with CBS Records, and the band feels betrayed. In 1984, Freddie moves to Munich to work on his first solo album, Mr. Bad Guy, but abuses drugs and alcohol and participates in orgies with Paul. Mary, now pregnant by her new partner and concerned about Freddie, arrives unannounced and urges him to return to the band and perform at Bob Geldof's benefit concert, Live Aid at Wembley Stadium. Realizing that Paul withheld news of the concert in order to control Freddie, Freddie fires him. Paul retaliates by going public about Freddie's sexual escapades.

Freddie returns to London to reconcile with his bandmates and agrees that hereafter their songs will be credited to Queen as a whole. He appeals to them to participate in Live Aid and they are given a last-minute slot. With HIV/AIDS spreading worldwide, Freddie discovers that he has contracted the virus. During a rehearsal he reveals this to the band, who are shocked and saddened, but Freddie says that pitying him is only a waste of time, and makes them promise not to say anything in order to keep the likely media frenzy from overshadowing their music. On the day of Live Aid, Freddie reconnects with Jim, introduces him to his family, and brings him to Live Aid. Mary, her husband, and Jim watch from the wings as Queen perform "Bohemian Rhapsody", "Radio Ga Ga", "Hammer to Fall", and "We Are the Champions." Donations to the charity increase and the event turns into a massive success. The film ends with a series of title cards stating that Freddie died on 24 November 1991 at aged 45 from AIDS-related pneumonia; he remained close with Jim for the rest of his life; "Bohemian Rhapsody" was re-released and hit number one again; and that the Mercury Phoenix Trust was founded in his honour to help those living with AIDS.`
  },
]

Movie.create(movies)
  .then(allMovies => {
    console.log(allMovies.length, " Movies has been created")
    mongoose.connection.close()
  })
  .catch(error => console.log("An error occured: ", error))


