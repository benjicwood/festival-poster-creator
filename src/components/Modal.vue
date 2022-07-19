<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          Select your {{ title }}
        </slot>
        <button
          type="button"
          class="btn-close"
          @click="close"
        >
          x
        </button>
      </header>

      <section class="modal-body">
        <slot name="body">
          Search for band...
          <SearchDropdown
            :options="bands"
            v-on:selected="onSelectedOption($event)"
            placeholder="Start typing band name"
          >
          </SearchDropdown>
        </slot>
       </section>

        <button
          type="button"
          class="btn-red"
          @click="close"
        >
          Close Modal
        </button>
    </div>
  </div>
</template>

<script>
  // import SearchDropdown from 'search-dropdown-vue'
  import SearchDropdown from './SearchDropdown.vue'


  export default {
    name: 'Modal',
    props: {
        title: String,
    },
    components: {
      SearchDropdown,
    },
    data() {
      return {
        // initialValue: '',
      }
    },
    computed: {
      bands() {
      return [ 
          { name: '', id: '' },
          { name: 'A Day To Remember', id: 'adtr' },
          { name: 'A Perfect Circle', id: 'apc' },
          { name: 'AC/DC', id: 'acdc' },
          { name: 'Aerosmith', id: 'aerosmith' },
          { name: 'AFI', id: 'afi' },
          { name: 'Against Me!', id: 'againstme' },
          { name: 'Airbourne', id: 'airbourne' },
          { name: 'Alcest', id: 'alcest' },
          { name: 'Alestorm', id: 'alestorm' },
          { name: 'Alexisonfire', id: 'alexisonfire' },
          { name: 'Alice Cooper', id: 'alicecooper' },
          { name: 'Alice In Chains', id: 'aliceinchains' },
          { name: 'Alien Weaponry', id: 'alienweaponry' },
          { name: 'Alkaline Trio', id: 'alkalinetrio' },
          { name: 'All That Remains', id: 'allthatremains' },
          { name: 'All Time Low', id: 'alltimelow' },
          { name: 'Alter Bridge', id: 'alterbridge' },
          { name: 'Amon Amarth', id: 'amonamarth' },
          { name: 'Anaal Nathrakh', id: 'anaalnathrakh' },
          { name: 'Andrew WK', id: 'andrewwk' },
          { name: 'Angels & Airwaves', id: 'ava' },
          { name: 'Annihilator', id: 'annihilator' },
          { name: 'Anthrax', id: 'anthrax' },
          { name: 'Arctic Monkeys', id: 'arcticmonkeys' },
          { name: 'Arch Enemy', id: 'archenemy' },
          { name: 'Architects', id: 'architects' },
          { name: 'As I Lay Dying', id: 'aild' },
          { name: 'Asking Alexandria', id: 'aa' },
          { name: 'August Burns Red', id: 'augustburnsred' },
          { name: 'Avenged Sevenfold', id: 'a7x' },
          { name: 'Avril Lavigne', id: 'avril' },
          { name: 'BabyMetal', id: 'babymetal' },
          { name: 'Bad Religion', id: 'badreligion' },
          { name: 'Beartooth', id: 'beartooth' },
          { name: 'Behemoth', id: 'behemoth' },
          { name: 'Biffy Clyro', id: 'biffyclyro' },
          { name: 'Billie Eilish', id: 'billieeilish' },
          { name: 'Billy Talent', id: 'billytalent' },
          { name: 'The Black Dahlia Murder', id: 'tbdm' },
          { name: 'Black Flag', id: 'blackflag' },
          { name: 'Black Label Society', id: 'blacklabelsociety' },
          { name: 'The Black Queen', id: 'theblackqueen' },
          { name: 'Black Stone Cherry', id: 'bsc' },
          { name: 'Black Veil Brides', id: 'bvb' },
          { name: 'Blink 182', id: 'blink182' },
          { name: 'Bon Jovi', id: 'bonjovi' },
          { name: 'Boston Manor', id: 'bostonmanor' },
          { name: 'Bowling For Soup', id: 'bfs' },
          { name: 'Bring Me The Horizon', id: 'bmth' },
          { name: 'Bullet For My Valentine', id: 'bfmv' },
          { name: 'Bury Tomorrow', id: 'burytomorrow' },
          { name: 'Cancer Bats', id: 'cancerbats' },
          { name: 'Carcass', id: 'carcass' },
          { name: 'Carpenter Brut', id: 'carpenterbrut' },
          { name: 'Chvrches', id: 'chvrches' },
          { name: 'Clutch', id: 'clutch' },
          { name: 'Code Orange', id: 'codeorange' },
          { name: 'Coheed & Cambria', id: 'candc' },
          { name: 'Converge', id: 'converge' },
          { name: 'Cradle Of Filth', id: 'cof' },
          { name: 'Creeper', id: 'creeper' },
          { name: 'Cult Of Luna', id: 'cultofluna' },
          { name: 'The Cure', id: 'thecure' },
          { name: 'Darkest Hour', id: 'darkesthour' },
          { name: 'The Darkness', id: 'thedarkness' },
          { name: 'Def Leppard', id: 'defleppard' },
          { name: 'Deftones', id: 'deftones' },
          { name: 'Deicide', id: 'deicide' },
          { name: 'Devin Townsend', id: 'devintownsend' },
          { name: 'Dimmu Borgir', id: 'dimmuborgir' },
          { name: 'The Distillers', id: 'thedistillers' },
          { name: 'Disturbed', id: 'disturbed' },
          { name: 'Don Broco', id: 'donbroco' },
          { name: 'Down', id: 'down' },
          { name: 'Dream Theater', id: 'dreamtheater' },
          { name: 'Dropkick Murphys', id: 'dropkickmurphys' },
          { name: 'Dying Fetus', id: 'dyingfetus' },
          { name: 'Electric Callboy', id: 'electriccallboy' },
          { name: 'Electric Wizard', id: 'electricwizard' },
          { name: 'Eminem', id: 'eminem' },
          { name: 'Enter Shikari', id: 'entershikari' },
          { name: 'Epica', id: 'epica' },
          { name: 'Evanescence', id: 'evanescence' },
          { name: 'Every Time I Die', id: 'etid' },
          { name: 'Evil Scarecrow', id: 'evilscarecrow' },
          { name: 'Faith No More', id: 'fnm' },
          { name: 'Fall Out Boy', id: 'fob' },
          { name: 'Feeder', id: 'feeder' },   
          { name: 'Five Finger Death Punch', id: 'ffdp' },
          { name: 'Foals', id: 'foals' },
          { name: 'Fontaines DC', id: 'fontainesdc' },
          { name: 'Foo Fighters', id: 'foofighters' },
          { name: 'Frank Carter & The Rattlesnakes', id: 'fcandtherattlesnakes' },
          { name: 'Frank Turner', id: 'frankturner' },
          { name: 'Fugazi', id: 'fugazi' },
          { name: 'Funeral For A Friend', id: 'ffaf' },
          { name: 'Ghost', id: 'ghost' },
          { name: 'The Ghost Inside', id: 'theghostinside' },
          { name: 'Ghostemane', id: 'ghostemane' },
          { name: 'Ghostwriters', id: 'ghostwriters' },
          { name: 'Gogol Bordello', id: 'gogolbordello' },
          { name: 'Gojira', id: 'gojira' },
          { name: 'Good Charlotte', id: 'goodcharlotte' },
          { name: 'Green Day', id: 'greenday' },
          { name: 'Greta Van Fleet', id: 'gvf' },
          { name: 'Guns n Roses', id: 'gnr' },
          { name: 'Halestorm', id: 'halestorm' },
          { name: 'Hatebreed', id: 'hatebreed' },
          { name: 'Helloween', id: 'helloween' },
          { name: 'Holding Absence', id: 'holdingabsence' },
          { name: 'Hollywood Undead', id: 'hollywoodundead' },
          { name: 'Hollywood Vampires', id: 'hollywoodvampires' },
          { name: 'Ho99o9', id: 'ho99o9' },
          { name: 'The Hunna', id: 'thehunna' },
          { name: 'Idles', id: 'idles' },
          { name: 'Imagine Dragons', id: 'imaginedragons' },
          { name: 'InMe', id: 'inme' },
          { name: 'Incubus', id: 'incubus' },
          { name: 'The Interrupters', id: 'interrupters' },
          { name: 'Iron Maiden', id: 'ironmaiden' },
          { name: 'Jack White', id: 'jackwhite' },
          { name: 'Janes Addiction', id: 'janesaddiction' },
          { name: 'Jawbreaker', id: 'jawbreaker' },
          { name: 'Jimmy Eat World', id: 'jew' },
          { name: 'Jinjer', id: 'jinjer' },
          { name: 'Judas Priest', id: 'judaspriest' },
          { name: 'Kamelot', id: 'kamelot' },
          { name: 'Kendrick Lamar', id: 'kendrick' },
          { name: 'Kid Kapichi', id: 'kidkapichi' },
          { name: 'Killing Joke', id: 'killingjoke' },
          { name: 'Killswitch Engage', id: 'kse' },
          { name: 'King Gizzard & The Lizard Wizard', id: 'kgatlw' },
          { name: 'Kiss', id: 'kiss' },
          { name: 'Korn', id: 'korn' },
          { name: 'Kreator', id: 'kreator' },
          { name: 'Lamb Of God', id: 'log' },
          { name: 'Less Than Jake', id: 'ltj' },
          { name: 'Limp Bizkit', id: 'limpbizkit' },
          { name: 'Lindemann', id: 'lindemann' },
          { name: 'Linkin Park', id: 'linkinpark' },
          { name: 'Machine Gun Kelly', id: 'mgk' },
          { name: 'Machine Head', id: 'machinehead' },
          { name: 'Malevolence', id: 'malevolence' },
          { name: 'Maneskin', id: 'maneskin' },
          { name: 'Manic Street Preachers', id: 'msp' },
          { name: 'Marilyn Manson', id: 'marilynmanson' },
          { name: 'Marmozets', id: 'marmozets' },
          { name: 'The Mars Volta', id: 'themarsvolta' },
          { name: 'Mastodon', id: 'mastodon' },
          { name: 'Megadeth', id: 'megadeth' },
          { name: 'The Menzingers', id: 'menzingers' },
          { name: 'Mercyful Fate', id: 'mercyfulfate' },
          { name: 'Metallica', id: 'metallica' },
          { name: 'Meshuggah', id: 'meshuggah' },
          { name: 'Ministry', id: 'ministry' },
          { name: 'Misfits', id: 'misfits' },
          { name: 'Mogwai', id: 'mogwai' },
          { name: 'Monuments', id:  'monuments' },
          { name: 'Motley Crue', id: 'motleycrue' },
          { name: 'Mr Bungle', id: 'mrbungle' },
          { name: 'Mudvayne', id: 'mudvayne' },
          { name: 'Municipal Waste', id: 'municipalwaste' },
          { name: 'Muse', id: 'muse' },
          { name: 'My Chemical Romance', id: 'mcr' },
          { name: 'Mykur', id: 'mykur' },
          { name: 'Napalm Death', id: 'napalmdeath' },
          { name: 'Neck Deep', id: 'neckdeep' },
          { name: 'Necrophagist', id: 'necrophagist' },
          { name: 'Neurosis', id: 'neurosis' },
          { name: 'New Found Glory', id: 'nfg' },
          { name: 'Nickelback', id: 'nickelback' },
          { name: 'Nightwish', id: 'nightwish' },
          { name: 'Nine Inch Nails', id: 'nineinchnails' },
          { name: 'NOFX', id: 'nofx' },
          { name: 'Oathbreaker', id: 'oathbreaker' },
          { name: 'Of Mice & Men', id: 'omam' },
          { name: 'The Offspring', id: 'theoffspring' },
          { name: 'Opeth', id: 'opeth' },
          { name: 'Ozzy Osbourne', id: 'ozzy' },
          { name: 'Pale Waves', id: 'palewaves' },
          { name: 'Papa Roach', id: 'paparoach' },
          { name: 'Paramore', id: 'paramore' },
          { name: 'Paradise Lost', id: 'paradiselost' },
          { name: 'Parkway Drive', id: 'parkwaydrive' },
          { name: 'Pearl Jam', id: 'pearljam' },
          { name: 'Pendulum', id: 'pendulum' },
          { name: 'Periphery', id: 'periphery' },
          { name: 'Pierce The Veil', id: 'piercetheveil' },
          { name: 'Pixies', id: 'pixies' },
          { name: 'Placebo', id: 'placebo' },
          { name: 'Poison', id: 'poison' },
          { name: 'Porcupine Tree', id: 'porcupinetree' },
          { name: 'Powerwolf', id: 'powerwolf' },
          { name: 'The Pretty Reckless', id: 'theprettyreckless' },
          { name: 'Primus', id: 'primus' },
          { name: 'The Prodigy', id: 'theprodigy' },
          { name: 'Prophets Of Rage', id: 'por' },
          { name: 'Public Image Ltd', id: 'pil' },
          { name: 'Puddle Of Mudd', id: 'puddleofmudd' },
          { name: 'Queens Of The Stone Age', id: 'qotsa' },
          { name: 'Radiohead', id: 'radiohead' },
          { name: 'Rage Against The Machine', id: 'ratm' },
          { name: 'Raging Speedhorn', id: 'ragingspeedhorn' },
          { name: 'Rancid', id: 'rancid' },
          { name: 'Rammstein', id: 'rammstein' },
          { name: 'Red Hot Chili Peppers', id: 'rhcp' },
          { name: 'Refused', id: 'refused' },
          { name: 'Rina Sawayama', id: 'rina' },
          { name: 'Rise Against', id: 'riseagainst' },
          { name: 'Rival Sons', id: 'rivalsons' },
          { name: 'Rob Zombie', id: 'robzombie' },
          { name: 'Royal Blood', id: 'royalblood' },
          { name: 'Run The Jewels', id: 'runthejewels' },
          { name: 'Russian Circles', id: 'russiancircles' },
          { name: 'Sabaton', id: 'sabaton' },
          { name: 'Satyricon', id: 'satyricon' },
          { name: 'Saxon', id: 'saxon' },
          { name: 'Scarlxrd', id: 'scarlxrd' },
          { name: 'Scorpions', id: 'scorpions' },
          { name: 'Sepultura', id: 'sepultura' },
          { name: 'Shinedown', id: 'shinedown' },
          { name: 'Sick Of It All', id: 'soia' },
          { name: 'Sikth', id: 'sikth' },
          { name: 'Skindred', id: 'skindred' },
          { name: 'Skunk Anansie', id: 'skunkanansie' },
          { name: 'Sleep Token', id: 'sleeptoken' },
          { name: 'Sleeping With Sirens', id: 'sws' },
          { name: 'Slipknot', id: 'slipknot' },
          { name: 'The Smashing Pumpkins', id: 'tsp' },
          { name: 'Spiritbox', id: 'spiritbox' },
          { name: 'Staind', id: 'staind' },
          { name: 'Static Dress', id: 'staticdress' },
          { name: 'Steel Panther', id: 'steelpanther' },
          { name: 'Stone Sour', id: 'stonesour' },
          { name: 'The Story So Far', id: 'tssf' },
          { name: 'Stray From The Path', id: 'sftp' },
          { name: 'Suicidal Tendencies', id: 'suicidaltendencies' },
          { name: 'Suicide Silence', id: 'suicidesilence' },
          { name: 'Sum 41', id: 'sum41' },
          { name: 'Sylosis', id: 'sylosis' },
          { name: 'System Of A Down', id: 'soad' },
          { name: 'Tenacious D', id: 'tenaciousd' },
          { name: 'Testament', id: 'testament' },
          { name: 'Therapy', id: 'therapy' },
          { name: 'Thrice', id: 'thrice' },
          { name: 'Thunder', id: 'thunder' },
          { name: 'Thy Art Is Murder', id: 'thyartismurder' },
          { name: 'Tool', id: 'tool' },
          { name: 'Trivium', id: 'trivium' },
          { name: 'Trophy Eyes', id: 'trophyeyes' },
          { name: 'Turnstile', id: 'turnstile' },
          { name: 'Twenty One Pilots', id: 'twentyonepilots' },
          { name: 'The Used', id: 'theused' },
          { name: 'Venom Prison', id: 'venomprison' },
          { name: 'Volbeat', id: 'volbeat' },
          { name: 'Wargasm', id: 'wargasm' },
          { name: 'Watain', id: 'watain' },
          { name: 'Weezer', id: 'weezer' },
          { name: 'Wet Leg', id: 'wetleg' },
          { name: 'While She Sleeps', id: 'wss' },
          { name: 'Whitesnake', id: 'whitesnake' },
          { name: 'The Wildhearts', id: 'wildhearts' },
          { name: 'Within Temptation', id: 'withintemptation' },
          { name: 'Wolf Alice', id: 'wolfalice' },
          { name: 'Wolves In The Throne Room', id: 'wittr' },
          { name: 'YouMeAtSix', id: 'yma6' },
          { name: 'Yungblud', id: 'yungblud' },
          { name: 'Zeal & Ardor', id: 'zealandardor' },
          { name: 'Zebrahead', id: 'zebrahead' },
          { name: 'ZZ Top', id: 'zztop' },   
          { name: '100 Gecs', id: 'gecs' },
        ]
      },
    },
    methods: {
        onSelectedOption(selected) {
          this.$emit('selected', selected)

    },
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    display: flex;
    flex-direction: column;
    width: 60%;
    max-width: 500px;
    font-family: 'PT Sans Narrow', sans-serif;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    background-color: #711214;
    color: white;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
  }

  .modal-body {
    padding: 10px;
    display: flex;
    flex-direction: column;
  }

  .modal-body .dropdown .dropdown-menu {
    width: 92%;
  }

  .modal-body .dropdown .dropdown-toggle {
    width: 95%;
  }

  .modal-body .dropdown .dropdown-toggle input {
    width: 100%;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-red {
    color: white;
    background: #711214;
    border: 1px solid #711214;
    padding: 10px;
    margin: 5px;
    border-radius: 6px;
    cursor: pointer;
  }
</style>