import React from 'react';
import { shallow } from 'enzyme';
import Fighter from './Fighter'

const fighters = [
  {
    name: 'Wanderlei Silva',
    country: 'Brazil',
    flag:"http://res.cloudinary.com/di7m4tijz/image/upload/c_scale,w_30/v1518016755/Brazil-Flag-icon_pqlyjq.ico",
    bio: 'Wanderlei César da Silva, born July 3, 1976, nicknamed "The Axe Murderer" and "Cachorro Louco"\
      (Portuguese for "mad dog"), is a Brazilian mixed martial artist who has competed in\
      Pride Fighting Championships and the American-based Ultimate Fighting Championship (UFC). He holds the\
      record for the most wins, knockouts, title defenses, and longest winning streak in PRIDE history. He is\
      the former PRIDE Middleweight Champion, and the 2003 PRIDE Middleweight Grand Prix Tournament Champion.\
      He is currently signed with Rizin Fighting Federation and Bellator MMA.',
    pride: true,
    strikeforce: false,
    ufc: true,
    wec: false,
    bellator: true,
    pancrase: false
  },
  {
    name: 'Royce Gracie',
    country: 'Brazil',
    flag:"http://res.cloudinary.com/di7m4tijz/image/upload/c_scale,w_30/v1518016755/Brazil-Flag-icon_pqlyjq.ico",
    bio: 'Royce Gracie,born December 12, 1966, is a Brazilian professional mixed martial artist for Bellator MMA,\
     a UFC Hall of Famer, and a Brazilian Jiu-Jitsu practitioner. He is considered by UFC fans to be the most\
     influential figure in the history of modern MMA. He is a member of the Gracie family. Gracie gained fame\
     for his success in the Ultimate Fighting Championship. Between 1993 and 1994, he was the tournament winner\
     of UFC 1, UFC 2, UFC 4, and fought to a draw with Ken Shamrock in the championship match in the Superfight\
     at UFC 5. Gracie popularized Brazilian Jiu-Jitsu and revolutionized mixed martial arts with his results\
     contributing to the movement towards grappling and ground fighting in the sport. ',
    pride: true,
    strikeforce: false,
    ufc: true,
    wec: false,
    bellator: true,
    pancrase: false,
  },
  {
    name: 'Kazushi Sakuraba',
    country:'Japan',
    flag: "http://res.cloudinary.com/di7m4tijz/image/upload/c_scale,w_30/v1518016833/Japan-Flag-icon_mslgki.ico",
    bio:'Kazushi Sakuraba, born July 14, 1969, is a Japanese mixed martial artist and professional wrestler,\
     currently signed to Rizin Fighting Federation. He has competed in traditional puroresu for New Japan Pro\
     Wrestling and shoot-style competition for UWFi and Kingdom Pro Wrestling. He has fought in MMA competition\
     in the Ultimate Fighting Championship, Pride Fighting Championships, Hero' + "'" + 's and Dream. He is known as the\
     "Gracie Hunter" or the "Gracie Killer" due to his wins over four members of the famed Gracie family: Royler\
     Gracie, Renzo Gracie, Ryan Gracie, and Royce Gracie. In particular, Sakuraba is famous for his initial fight\
     with Royce, which lasted ninety minutes and ended after Royce was unable to continue due to damage received\
     from Sakuraba.',
    pride: true,
    strikeforce: false,
    ufc: true,
    wec: false,
    bellator: false,
    pancrase: false
  },
  {
    name:'Evan Tanner',
    country:'United States',
    flag:"http://res.cloudinary.com/di7m4tijz/image/upload/c_scale,w_30/v1518016864/United-States-Flag-icon_dhjm52.ico",
    bio:'Evan Loyd Tanner (February 11, 1971 - September 8, 2008), was an American professional mixed martial arts\
     fighter. He was a former UFC Middleweight Champion and was also the first American to win the Pancrase\
     Neo-Blood tournament in Tokyo, Japan. Tanner won his first championship when he defeated Heath Herring at\
     USWF 7, and went on to successfully defend that title seven times. Tanner then won the UFC Middleweight\
     Championship at UFC 51, stopping David Terrell with strikes in the first round.',
    pride: false,
    strikeforce: false,
    ufc: true,
    wec: false,
    bellator: false,
    pancrase: true
  },
  {
    name: 'Matt Hughes',
    country:'United States',
    flag:"http://res.cloudinary.com/di7m4tijz/image/upload/c_scale,w_30/v1518016864/United-States-Flag-icon_dhjm52.ico",
    bio:'Matthew Allen Hughes (born October 13, 1973), is a retired American mixed martial artist with a\
     background in wrestling. He is a two-time UFC Welterweight Champion, UFC Hall of Fame inductee, and NJCAA\
     Hall of Fame inductee.[5] During his tenures in the Ultimate Fighting Championship, Hughes put together two\
     separate six-fight winning streaks, defeated all the available opposition in the welterweight division, and\
     defended the belt a then-record seven times. Hughes was inducted into the UFC Hall of Fame in May 2010 during\
     the UFC Fan Expo in conjunction with UFC 114. During his reign, Hughes was widely considered the #1\
     pound-for-pound mixed martial artist in the world.[9] Hughes was also regarded by many analysts and several\
     media outlets as one of the greatest welterweight fighters of all time, as well as one of the greatest pound\
     -for-pound fighters in the sport'+ "'" +'s history.',
    pride: false,
    strikeforce: false,
    ufc: true,
    wec: false,
    bellator: false,
    pancrase: false,
  },
  {
    name: 'Anderson Silva',
    country:'Brazil',
    flag:"http://res.cloudinary.com/di7m4tijz/image/upload/c_scale,w_30/v1518016755/Brazil-Flag-icon_pqlyjq.ico",
    bio:'Anderson Silva is the Greatest Martial Artist of all times. Born April 14, 1975, he is a Brazilian mixed martial artist and former UFC Middleweight\
     Champion. Silva held the longest title streak in UFC history, which ended in 2013 after 2,457 days, with 16\
     consecutive wins and 10 title defenses. He has 13 post-fight bonuses, the second most in UFC history. UFC president\
     Dana White and several mixed-martial-arts publications have called Silva the greatest mixed martial artist of all time.',
    pride: true,
    strikeforce: false,
    ufc: true,
    wec: false,
    bellator: false,
    pancrase:false
  },
  {
    name: 'Bas Rutten',
    country:'Netherlands',
    flag:"http://res.cloudinary.com/di7m4tijz/image/upload/c_scale,w_30/v1518016902/Netherlands-Flag_jrsdow.ico",
    bio:'Sebastiaan "Bas" Rutten, born 24 February 1965, is a Dutch former mixed martial artist, kickboxer, professional\
     wrestler, and current actor. He was a UFC Heavyweight Champion, a three-time King of Pancrase world champion,\
     and finished his career on a 22 fight unbeaten streak (21 wins, 1 draw). FightMetric wrote this when Rutten got\
     inducted into the UFC Hall Of Fame: "FightMetric, the official statistics provider for the UFC, ran the numbers\
     on Rutten’s career. They back up the Dutchman’s inclusion into the UFC Hall of Fame and then some. In the 4-hours,\
     27-minutes and 8-seconds he spent as a pro fighter, Rutten scored 13 knockdowns without getting dropped himself,\
     his significant strike accuracy was 70.6%, the highest FightMetric has ever recorded, attempted a record 53\
     submissions and successfully swept his opponents a record 46 times".',
    pride: true,
    strikeforce: false,
    ufc: true,
    wec: false,
    bellator: false,
    pancrase: true
  },
  {
    name: 'Marco Ruas',
    country:'Brazil',
    flag:"http://res.cloudinary.com/di7m4tijz/image/upload/c_scale,w_30/v1518016755/Brazil-Flag-icon_pqlyjq.ico",
    bio:'Marco Antônio de Lima Ruas, born January 23, 1961, is a retired mixed martial arts fighter and instructor.\
     Ruas was the UFC 7 Tournament Champion, and also competed for PRIDE Fighting Championships and the IFL.Ruas debuted\
     in Ultimate Fighting Championship at the UFC 7 event. He firstly faced Larry Cureton, who outweighed him by\
     40 lbs, but Ruas submitted him with a heel hook after a methodical grapple. His next opponent was the judoka\
     Remco Pardoel, who early tried a guillotine choke, but Ruas blocked it and grinded him with foot stomps.\
     After a failed heel hook attempt, Ruas controlled Pardoel and attacked him with knees and punches on the\
     ground, making him tap out. Ruas' + "'" + 'final fight was against 6' + "'" + '8", 330 lb Paul Varelans,\
     and he showed his muay thai skills by overwhelming Varlans with punch combos and repeated leg kicks.',
    pride: true,
    strikeforce: false,
    ufc: true,
    wec: false,
    bellator: false,
    pancrase: false
  },
  {
    name: 'Cris Cyborg',
    country:'Brazil',
    flag:"http://res.cloudinary.com/di7m4tijz/image/upload/c_scale,w_30/v1518016755/Brazil-Flag-icon_pqlyjq.ico",
    bio:'Cristiane Justino Venâncio (formerly Cristiane Santos; born July 9, 1985), commonly referred to by her\
     ring name Cris Cyborg, is a Brazilian and American mixed martial artist currently signed with the UFC.\
     Undefeated for more than ten years, she is considered to be the greatest female mixed martial artist\
     of all times. She is the current UFC Women' + "'" +'s Feath erweight Champion, as well as the former Strikeforce Women' + "'"+'s\
     Featherweight Champion and former Invicta FC World Featherweight Champion. Cyborg first rose to prominence\
     when she won the Strikeforce title on August 15, 2009, by defeating Gina Carano via first-round TKO.',
    pride: false,
    strikeforce: true,
    ufc: true,
    wec: false,
    bellator: false,
    pancrase: false
  },
  {
    name: 'Georges St-Pierre',
    country:'Canada',
    flag:"http://res.cloudinary.com/di7m4tijz/image/upload/c_scale,w_30/v1518020796/Canada-Flag_vfhciy.ico",
    bio:'Georges St-Pierre, born May 19, 1981, often referred to as GSP, is a French-Canadian mixed martial artist.\
     He came out of retirement and signed with the Ultimate Fighting Championship (UFC), where he now competes in\
     their middleweight division. He is the current champion. St-Pierre is also a three-time former UFC Welterweight\
     Champion, having won the title twice and the interim title once between Nov of 2006 and Apr of 2008. Frequently\
     cited as one of the greatest MMA fighters of all time, St-Pierre was ranked as the #1 welterweight in the world\
     for several years by Sherdog and numerous other publications. In 2008, 2009, and 2010 he was named the Canadian\
     Athlete of the Year by Rogers Sportsnet. Fight Matrix lists him as the top MMA Welterweight of all time and most\
     accomplished fighter in MMA history. He retired on December 13, 2013 as the reigning Welterweight Champion, having\
     held the record for most wins in title bouts and the second longest combined title streak in UFC history (2,204 days)\
     while defending his title 12 consecutive times. He returned to the Octagon in Nov of 2017 at UFC 217, where he defeated\
     Michael Bisping by submission to win the middleweight title, thus becoming the fourth fighter in the history of the UFC\
     to be a multi-division champion.',
    pride: false,
    strikeforce: false,
    ufc: true,
    wec: false,
    bellator: false,
    pancrase: false
  },
  {
    name: 'Antonio Rodrigo Nogueira',
    country:'Brazil',
    flag:"http://res.cloudinary.com/di7m4tijz/image/upload/c_scale,w_30/v1518016755/Brazil-Flag-icon_pqlyjq.ico",
    bio:'Antônio Rodrigo Nogueira, born June 2, 1976, better known as Minotauro, is a retired Brazilian mixed martial\
     artist. He competed in the heavyweight division of the Ultimate Fighting Championship (UFC), where he is a former\
     Interim UFC Heavyweight Champion. He is the twin brother of UFC fighter Antônio Rogério Nogueira. Nogueria rose\
     to prominence in the Japanese promotion Pride Fighting Championships, where he was the first Pride Heavyweight Champion\
     from November 2001 to March 2003, as well as a 2004 PRIDE FC Heavyweight Grand Prix Finalist. He is one of only three men\
     to have held championship titles in both Pride Fighting Championships and the Ultimate Fighting Championship (the others\
     being Mauricio Rua and Mark Coleman).',
    pride: true,
    strikeforce: false,
    ufc: true,
    wec: false,
    bellator: false,
    pancrase: false
  },
  {
    name: 'Fedor Emelianenko',
    country:'Russia',
    flag:"http://res.cloudinary.com/di7m4tijz/image/upload/c_scale,w_30/v1518016962/Russia-Flag-icon_gjnu0c.ico",
    bio:'Fedor Vladimirovich Emelianenko, born 28 September 1976, is a Ukrainian-born Russian heavyweight mixed martial artist (MMA),\
     sambist, and judoka, currently competing for Rizin Fighting Federation and Bellator MMA. He has won championships\
     and accolades in multiple sports, most notably in MMA Pride Fighting Championships (heavyweight champion 2003-2007),\
     FIAS World Combat Sambo Championship (Heavyweight Champion 2002, 2005, 2007), and Russian Judo Federation National Championship\
     (Bronze medal 1998, 1999).',
    pride: true,
    strikeforce: true,
    ufc: false,
    wec: false,
    bellator: true,
    pancrase: false
  },
  {
    name: 'Fabricio Werdum',
    country:'Brazil',
    flag:"http://res.cloudinary.com/di7m4tijz/image/upload/c_scale,w_30/v1518016755/Brazil-Flag-icon_pqlyjq.ico",
    bio:'Fabrício Werdum, born August 24, 1977, is a Brazilian mixed martial artist and former UFC Heavyweight Champion.\
     He is also a two-time Brazilian jiu-jitsu world champion, a two-time Abu Dhabi Combat Club World Heavyweight Champion\
     and European jiu-jitsu champion. He holds black belts in Brazilian jiu-jitsu, Judo and Muay Thai. Werdum has competed\
     in PRIDE, the UFC, Strikeforce, and Jungle Fight. Often regarded as one of the best heavyweight fighters of all time,\
     he was the first fighter to decisively defeat Fedor Emelianenko in mixed martial arts. He also holds notable victories\
     over Cain Velasquez, Alistair Overeem, Minotauro Nogueira, Mark Hunt, Travis Browne, Alexander Emelianenko, Gabriel Gonzaga,\
     Antônio Silva, and Roy Nelson.',
    pride: true,
    strikeforce: true,
    ufc: true,
    wec: false,
    bellator: false,
    pancrase: false
  },
  {
    name: 'Jose Aldo Junior',
    country:'Brazil',
    flag:"http://res.cloudinary.com/di7m4tijz/image/upload/c_scale,w_30/v1518016755/Brazil-Flag-icon_pqlyjq.ico",
    bio:'José Aldo da Silva Oliveira Junior, born September 9, 1986, is a Brazilian mixed martial artist in the Ultimate Fighting\
     Championship. He was the fourth and final WEC Featherweight Champion and thus, became the first UFC Featherweight\
     Champion during the UFC/WEC merger. He is a former two-time UFC Featherweight Champion.\
     In the decade from November 2005 through December 2015, Aldo was undefeated in 18 fights. Aldo is still called the greatest\
     featherweight in mixed martial arts history.',
    pride: false,
    strikeforce: false,
    ufc: true,
    wec: true,
    bellator: false,
    pancrase: false
  },
  {
    name: 'Kazuyuki Fujita',
    country:'Japan',
    flag:"http://res.cloudinary.com/di7m4tijz/image/upload/c_scale,w_30/v1518016833/Japan-Flag-icon_mslgki.ico",
    bio:'Kazuyuki Fujita, born October 16, 1970, is a Japanese professional wrestler, mixed martial artist and a\
     former amateur wrestler. He has fought in mixed martial arts promotions including Pride Fighting Championships,\
     K-1 and World Victory Road. He competes in mixed martial arts, shoot style wrestling and puroresu, and holds\
     notable victories over Ken Shamrock, Gilbert Yvel, Mark Kerr, Bob Sapp, Karam Gaber, Peter Graham, and James Thompson.',
    pride: true,
    strikeforce: false,
    ufc: false,
    wec: false,
    bellator: false,
    pancrase: false
  },
  {
    name: 'Chuck Liddell',
    country:'United States',
    flag:"http://res.cloudinary.com/di7m4tijz/image/upload/c_scale,w_30/v1518016864/United-States-Flag-icon_dhjm52.ico",
    bio:'Charles David Liddell (born December 17, 1969) is an American retired mixed martial artist and former UFC\
     Light Heavyweight Champion. He has an extensive striking background in Kempo, Karate, and Kickboxing, as well\
     as a grappling background in collegiate wrestling and Brazilian jiu-jitsu.[1] Liddell had 23 fights in the UFC;\
     along with Randy Couture, he is widely credited for bringing MMA into the mainstream of American sports and entertainment.\
     On July 10, 2009, he was inducted into the UFC Hall of Fame.',
    pride: true,
    strikeforce: false,
    ufc: true,
    wec: false,
    bellator: false,
    pancrase: false
  },
  {
    name: 'Randy Couture',
    country:'United States',
    flag:"http://res.cloudinary.com/di7m4tijz/image/upload/c_scale,w_30/v1518016864/United-States-Flag-icon_dhjm52.ico",
    bio:'Randall Duane Couture, born June 22, 1963, is an American actor, former United States Army Sergeant,\
     retired mixed martial artist and former collegiate and Greco-Roman wrestler. During his tenures in the Ultimate\
     Fighting Championship (UFC), Couture became a three-time UFC Heavyweight Champion, two-time UFC Light Heavyweight\
     Champion, an interim UFC Light Heavyweight Champion and the UFC 13 Heavyweight Tournament Winner. Couture is the\
     first of only four fighters to hold two UFC championship titles in two different divisions.\
     Couture has competed in a record 16 title fights. He holds the record for the most wins in UFC Heavyweight\
     Championship bouts.',
    pride: false,
    strikeforce: false,
    ufc: true,
    wec: false,
    bellator: false,
    pancrase: false
  },
  {
    name: 'Dan Henderson',
    country:'United States',
    flag:"http://res.cloudinary.com/di7m4tijz/image/upload/c_scale,w_30/v1518016864/United-States-Flag-icon_dhjm52.ico",
    bio:'Daniel Jeffery Henderson (born August 24, 1970) is an American former mixed martial artist and Olympic\
     wrestler, who last competed as a middleweight in the Ultimate Fighting Championship. He was the last Strikeforce\
     Light Heavyweight Champion and was the last Welterweight (80 kg (176.4 lb)) and Middleweight (95 kg (209.4 lb))\
     champion of Pride Fighting Championships. Additionally, Henderson was the Brazil Open 1997 Tournament Champion,\
     the UFC 17 Middleweight Tournament Champion, the Rings: King of Kings 1999 Tournament Champion and the Pride\
     Weltwerweight Grand Prix Tournament Champion. During his career, Henderson also challenged for the UFC Middleweight\
     Championship (2x), the UFC Light Heavyweight Championship and the Strikeforce Middleweight Championship. He was the\
     first mixed martial artist to concurrently hold two titles in two different weight classes in a major MMA promotion.',
    pride: true,
    strikeforce: true,
    ufc: true,
    wec: false,
    bellator: false,
    pancrase: false
  },
  {
    name: 'Mark Hunt',
    country: 'New Zealand',
    flag:"http://res.cloudinary.com/di7m4tijz/image/upload/c_scale,w_30/v1518017142/New-Zealand-Flag-icon_vpbzcn.ico",
    bio:'Mark Richard Hunt (born 23 March 1974) is a New Zealand mixed martial artist and former kickboxer of\
     Samoan descent, currently living in Sydney, Australia. Hunt competes in the Ultimate Fighting Championship\
     (UFC) and was the winner of the 2001 K-1 World Grand Prix. As of August 4th 2017, he is #6 in official UFC\
     heavyweight rankings. He is known as "King of Walk-Offs" by walking away and stopping attacks before the\
     referee officially ends the match.',
    pride: true,
    strikeforce: false,
    ufc: true,
    wec: false,
    bellator: false,
    pancrase: false
  },
  {
    name: 'Mirko Cro Cop',
    country:'Croatia',
    flag:"http://res.cloudinary.com/di7m4tijz/image/upload/c_scale,w_30/v1518016930/Croatian-Flag_rucpmp.ico",
    bio:'Mirko Filipović, born 10 September 1974), known by the nickname Mirko Cro Cop, is a Croatian mixed martial\
     artist, former kickboxer and amateur boxer. Cro Cop is the 2006 Pride Open-Weight Grand Prix Champion, the 2012\
     K-1 World Grand Prix Champion and the 2016 Rizin Openweight Grand Prix Champion becoming the second fighter in\
     the world to win mixed martial arts and kickboxing championships and tournaments. He is also a former IGF Champion.\
     His nickname, Cro Cop, short for "Croatian Cop", comes from his membership in the Lučko Anti-Terrorist Unit,\
     Croatia'+ "'" + 's elite Police Special Forces tactical unit.',
    pride: true,
    strikeforce: false,
    ufc: true,
    wec: false,
    bellator: false,
    pancrase: true
  },
]

describe('<Fighters />', () =>{
  const container = shallow(<Fighter { ...fighters } />)

  it('is wrapped in a article tag with class name "fighter"', () => {
    expect(container).toHaveTagName('article')
    expect(container).toHaveClassName('fighter')
  });

  it('shows the correspondent icon for Pride organization', () => {
    expect(container === '<img src="http://res.cloudinary.com/di7m4tijz/image/upload/c_scale,w_50/a_38/v1518021555/1393300992_014_ek7ifr.ico" />')
  })
})
