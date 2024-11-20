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

       <template v-if="bandSelected || hasBand">
            <div class="slider-container">
                <label for="slider">Size: {{ getSize(sliderValue) }}</label>
                <input
                    :onChange="onSelectSize(sliderValue)"
                    type="range"
                    id="slider"
                    v-model="sliderValue"
                    :min="minValue"
                    :max="maxValue"
                    :step="stepValue"
                />
            </div>
       </template >

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
        hasBand: Boolean,
    },
    components: {
      SearchDropdown,
    },
    data() {
      return {
        bandSelected: false,
        sliderValue: 4, // Initial value
        minValue: 1,
        maxValue: 7,
        stepValue: 1, // Step size for each movement
        logoSize: '',
      }
    },
    computed: {
        bands() {
            return [
                { name: '', id: '' },
                { name: 'A', id: 'a' },
                { name: 'A Day To Remember', id: 'adtr' },
                { name: 'A Perfect Circle', id: 'apc' },
                { name: 'AC/DC', id: 'acdc' },
                { name: 'The Acacia Strain', id: 'acaciastrain' },
                { name: 'Aerosmith', id: 'aerosmith' },
                { name: 'AFI', id: 'afi' },
                { name: 'Against Me!', id: 'againstme' },
                { name: 'Against The Current', id: 'againstthecurrent' },
                { name: 'Airbourne', id: 'airbourne' },
                { name: 'AJ Tracey', id: 'ajtracey' },
                { name: 'Alcest', id: 'alcest' },
                { name: 'Alesana', id: 'alesana' },
                { name: 'Alestorm', id: 'alestorm' },
                { name: 'Alexisonfire', id: 'alexisonfire' },
                { name: 'Alpha Male Tea Party', id: 'amtp' },
                { name: 'Alice Cooper', id: 'alicecooper' },
                { name: 'Alice In Chains', id: 'aliceinchains' },
                { name: 'Alien Ant Farm', id: 'aaf' },
                { name: 'Alien Weaponry', id: 'alienweaponry' },
                { name: 'The All-American Rejects', id: 'aar' },
                { name: 'Alkaline Trio', id: 'alkalinetrio' },
                { name: 'All That Remains', id: 'allthatremains' },
                { name: 'All Time Low', id: 'alltimelow' },
                { name: 'Alt Blk Era', id: 'altblkera' },
                { name: 'Alter Bridge', id: 'alterbridge' },
                { name: 'American Football', id: 'americanfootball' },
                { name: 'Amyl and the Sniffers', id: 'aats' },
                { name: 'Amon Amarth', id: 'amonamarth' },
                { name: 'Anaal Nathrakh', id: 'anaalnathrakh' },
                { name: 'And So I Watch You From Afar', id: 'asiwyfa' },
                { name: 'Andrew WK', id: 'andrewwk' },
                { name: 'Angel Dust', id: 'angeldust' },
                { name: 'Angels & Airwaves', id: 'ava' },
                { name: 'Annihilator', id: 'annihilator' },
                { name: 'Anthrax', id: 'anthrax' },
                { name: 'Apocalyptica', id: 'apocalyptica' },
                { name: 'Arctic Monkeys', id: 'arcticmonkeys' },
                { name: 'Arch Enemy', id: 'archenemy' },
                { name: 'Architects', id: 'architects' },
                { name: 'The Armed', id: 'thearmed' },
                { name: 'The Ataris', id: 'theataris' },
                { name: 'As I Lay Dying', id: 'aild' },
                { name: 'Ashnikko', id: 'ashnikko' },
                { name: 'Asking Alexandria', id: 'aa' },
                { name: 'Atreyu', id: 'atreyu' },
                { name: 'August Burns Red', id: 'augustburnsred' },
                { name: 'Avenged Sevenfold', id: 'a7x' },
                { name: 'Avril Lavigne', id: 'avril' },
                { name: 'BabyMetal', id: 'babymetal' },
                { name: 'Bad Brains', id: 'badbrains' },
                { name: 'Bad Omens', id: 'badomens' },
                { name: 'Bad Religion', id: 'badreligion' },
                { name: 'Bambie Thug', id: 'bambiethug' },
                { name: 'Band-Maid', id: 'bandmaid' },
                { name: 'Baroness', id: 'baroness' },
                { name: 'Basement', id: 'basement' },
                { name: 'Beans On Toast', id: 'beansontoast' },
                { name: 'Beartooth', id: 'beartooth' },
                { name: 'Behemoth', id: 'behemoth' },
                { name: 'Better Lovers', id: 'betterlovers' },
                { name: 'Biffy Clyro', id: 'biffyclyro' },
                { name: 'Bikini Kill', id: 'bikinikill' },
                { name: 'Billie Eilish', id: 'billieeilish' },
                { name: 'Billy Talent', id: 'billytalent' },
                { name: 'Bilmuri', id: 'bilmuri' },
                { name: 'Biohazard', id: 'biohazard' },
                { name: 'The Black Dahlia Murder', id: 'tbdm' },
                { name: 'Black Flag', id: 'blackflag' },
                { name: 'Black Midi', id: 'blackmidi' },
                { name: 'Black Peaks', id: 'blackpeaks' },
                { name: 'Black Label Society', id: 'blacklabelsociety' },
                { name: 'The Black Queen', id: 'theblackqueen' },
                { name: 'Black Stone Cherry', id: 'bsc' },
                { name: 'Black Veil Brides', id: 'bvb' },
                { name: 'Blackgold', id: 'blackgold' },
                { name: 'The Blackout', id: 'theblackout' },
                { name: 'Blink 182', id: 'blink182' },
                { name: 'Bloc Party', id: 'blocparty' },
                { name: 'Blood Command', id: 'bloodcommand' },
                { name: 'Blood Incantation', id: 'bloodincantation' },
                { name: 'Bloodywood', id: 'bloodywood' },
                { name: 'Blossoms', id: 'blossoms' },
                { name: 'Bob Vylan', id: 'bobvylan' },
                { name: 'Body Count', id: 'bodycount' },
                { name: 'Bokassa', id: 'bokassa' },
                { name: 'Bon Jovi', id: 'bonjovi' },
                { name: 'Boston Manor', id: 'bostonmanor' },
                { name: 'Bowling For Soup', id: 'bfs' },
                { name: 'Boygenius', id: 'boygenius' },
                { name: 'Breaking Benjamin', id: 'bb' },
                { name: 'Bright Eyes', id: 'brighteyes' },
                { name: 'Bring Me The Horizon', id: 'bmth' },
                { name: 'The Bronx', id: 'bronx' },
                { name: 'Bullet For My Valentine', id: 'bfmv' },
                { name: 'Bury Tomorrow', id: 'burytomorrow' },
                { name: 'Busted', id: 'busted' },
                { name: 'The Callous Daoboys', id: 'callousdaoboys' },
                { name: 'Cancer Bats', id: 'cancerbats' },
                { name: 'Cannibal Corpse', id: 'cannibalcorpse' },
                { name: 'Cant Swim', id: 'cantswim' },
                { name: 'Car Seat Headrest', id: 'csh' },
                { name: 'Carcass', id: 'carcass' },
                { name: 'Carpenter Brut', id: 'carpenterbrut' },
                { name: 'Cassyette', id: 'cassyette' },
                { name: 'Charlotte Sands', id: 'charlottesands' },
                { name: 'The Chats', id: 'thechats' },
                { name: 'Chimaira', id: 'chimaira' },
                { name: 'Chvrches', id: 'chvrches' },
                { name: 'Citizen', id: 'citizen' },
                { name: 'City and Colour', id: 'cityandcolour' },
                { name: 'Civic', id: 'civic' },
                { name: 'CKY', id: 'cky' },
                { name: 'Clown Core', id: 'clowncore' },
                { name: 'Clutch', id: 'clutch' },
                { name: 'Code Orange', id: 'codeorange' },
                { name: 'Coheed & Cambria', id: 'candc' },
                { name: 'Converge', id: 'converge' },
                { name: 'Corey Taylor', id: 'coreytaylor' },
                { name: 'Cradle Of Filth', id: 'cof' },
                { name: 'Crawlers', id: 'crawlers' },
                { name: 'Creed', id: 'creed' },
                { name: 'Creeper', id: 'creeper' },
                { name: 'Crosses', id: 'crosses' },
                { name: 'Crossfaith', id: 'crossfaith' },
                { name: 'Crystal Fighters', id: 'crystalfighters' },
                { name: 'Cult Of Luna', id: 'cultofluna' },
                { name: 'The Cure', id: 'thecure' },
                { name: 'Cypress Hill', id: 'cypresshill' },
                { name: 'Dadi  Freyr', id: 'dadifreyr' },
                { name: 'Darkest Hour', id: 'darkesthour' },
                { name: 'The Darkness', id: 'thedarkness' },
                { name: 'Dayseeker', id: 'dayseeker' },
                { name: 'Dead Pony', id: 'deadpony' },
                { name: 'Deafheaven', id: 'deafheaven' },
                { name: 'Death Cab For Cutie', id: 'dcfc' },
                { name: 'Death From Above 1979', id: 'deathfromabove' },
                { name: 'Death Grips', id: 'deathgrips' },
                { name: 'Deathbyromy', id: 'deathbyromy' },
                { name: 'Def Leppard', id: 'defleppard' },
                { name: 'Deftones', id: 'deftones' },
                { name: 'Deicide', id: 'deicide' },
                { name: 'Demob Happy', id: 'demobhappy' },
                { name: 'Denzel Curry', id: 'denzelcurry' },
                { name: 'Depeche Mode', id: 'depechemode' },
                { name: 'Destroy Boys', id: 'destroyboys' },
                { name: 'Devin Townsend', id: 'devintownsend' },
                { name: 'The Dillinger Escape Plan', id: 'tdep' },
                { name: 'Dimmu Borgir', id: 'dimmuborgir' },
                { name: 'Dinosaur Pile-Up', id: 'dinosaurpileup' },
                { name: 'Dirty Loops', id: 'dirtyloops' },
                { name: 'The Dirty Nil', id: 'dirtynil' },
                { name: 'The Distillers', id: 'thedistillers' },
                { name: 'Disturbed', id: 'disturbed' },
                { name: 'Don Broco', id: 'donbroco' },
                { name: 'Down', id: 'down' },
                { name: 'Dream State', id: 'dreamstate' },
                { name: 'Dream Theater', id: 'dreamtheater' },
                { name: 'Dream Wife', id: 'dreamwife' },
                { name: 'Dropkick Murphys', id: 'dropkickmurphys' },
                { name: 'Drug Church', id: 'drugchurch' },
                { name: 'Duran Duran', id: 'duranduran' },
                { name: 'Dvne', id: 'dvne' },
                { name: 'Dying Fetus', id: 'dyingfetus' },
                { name: 'DZ Deathrays', id: 'dzdeathrays' },
                { name: 'Eagles Of Death Metal', id: 'eodm' },
                { name: 'Electric Callboy', id: 'electriccallboy' },
                { name: 'Electric Wizard', id: 'electricwizard' },
                { name: 'Eminem', id: 'eminem' },
                { name: 'Empire State Bastard', id: 'esb' },
                { name: 'Employed to Serve', id: 'ets' },
                { name: 'English Teacher', id: 'englishteacher' },
                { name: 'Enter Shikari', id: 'entershikari' },
                { name: 'Epica', id: 'epica' },
                { name: 'Evanescence', id: 'evanescence' },
                { name: 'Every Time I Die', id: 'etid' },
                { name: 'Evil Scarecrow', id: 'evilscarecrow' },
                { name: 'Exodus', id: 'exodus' },
                { name: 'Faith No More', id: 'fnm' },
                { name: 'The Fall Of Troy', id: 'tfot' },
                { name: 'Fall Out Boy', id: 'fob' },
                { name: 'Falling in Reverse', id: 'fallinginreverse' },
                { name: 'Fear Factory', id: 'fearfactory' },
                { name: 'Feeder', id: 'feeder' },
                { name: 'Fever 333', id: 'fever' },
                { name: 'Fidlar', id: 'fidlar' },
                { name: 'Fightstar', id: 'fightstar' },
                { name: 'Finch', id: 'finch' },
                { name: 'Five Finger Death Punch', id: 'ffdp' },
                { name: 'Flogging Molly', id: 'floggingmolly' },
                { name: 'Foals', id: 'foals' },
                { name: 'Fontaines DC', id: 'fontainesdc' },
                { name: 'Foo Fighters', id: 'foofighters' },
                { name: 'Four Year Strong', id: 'fys' },
                { name: 'Frank Carter and Sex Pistols', id: 'sexpistols' },
                { name: 'Frank Carter & The Rattlesnakes', id: 'fcandtherattlesnakes' },
                { name: 'Frank Turner', id: 'frankturner' },
                { name: 'Free Throw', id: 'freethrow' },
                { name: 'From Ashes To New', id: 'fatn' },
                { name: 'From First To Last', id: 'fftl' },
                { name: 'The Front Bottoms', id: 'tfb' },
                { name: 'Frozemode', id: 'frozemode' },
                { name: 'Fucked Up', id: 'fuckedup' },
                { name: 'Fugazi', id: 'fugazi' },
                { name: 'Funeral For A Friend', id: 'ffaf' },
                { name: 'Gallows', id: 'gallows' },
                { name: 'Garbage', id: 'garbage' },
                { name: 'The Gaslight Anthem', id: 'thegaslightanthem' },
                { name: 'Gel', id: 'gel' },
                { name: 'Ghost', id: 'ghost' },
                { name: 'The Ghost Inside', id: 'theghostinside' },
                { name: 'Ghostemane', id: 'ghostemane' },
                { name: 'Ghostwriters', id: 'ghostwriters' },
                { name: 'Giant Fucking Moth', id: 'gfm' },
                { name: 'Girl in Red', id: 'girlinred' },
                { name: 'Glassjaw', id: 'glassjaw' },
                { name: 'Godeth', id: 'godeth' },
                { name: 'Godsmack', id: 'godsmack' },
                { name: 'Gogol Bordello', id: 'gogolbordello' },
                { name: 'Gojira', id: 'gojira' },
                { name: 'Good Charlotte', id: 'goodcharlotte' },
                { name: 'Gorillaz', id: 'gorillaz' },
                { name: 'Gouge Away', id: 'gougeaway' },
                { name: 'Grade 2', id: 'grade' },
                { name: 'Green Day', id: 'greenday' },
                { name: 'Green Lung', id: 'greenlung' },
                { name: 'Greta Van Fleet', id: 'gvf' },
                { name: 'Guilt Trip', id: 'guilttrip' },
                { name: 'Guns n Roses', id: 'gnr' },
                { name: 'Gwar', id: 'gwar' },
                { name: 'Hak Baker', id: 'hakbaker' },
                { name: 'Halestorm', id: 'halestorm' },
                { name: 'Halsey', id: 'halsey' },
                { name: 'The Hara', id: 'hara' },
                { name: 'Hatebreed', id: 'hatebreed' },
                { name: 'Have Heart', id: 'haveheart' },
                { name: 'Head Automatica', id: 'headautomatica' },
                { name: 'Heart Attack Man', id: 'heartattackman' },
                { name: 'Heart Of A Coward', id: 'hoac' },
                { name: 'Heaven Shall Burn', id: 'heavenshallburn' },
                { name: 'Heck', id: 'heck' },
                { name: 'Heilung', id: 'heilung' },
                { name: 'Hell is for Heroes', id: 'hifh' },
                { name: 'Helloween', id: 'helloween' },
                { name: 'Heriot', id: 'heriot' },
                { name: 'High on Fire', id: 'highonfire' },
                { name: 'High Vis', id: 'highvis' },
                { name: 'Higher Power', id: 'higherpower' },
                { name: 'Himalayas', id: 'himalayas' },
                { name: 'The Hives', id: 'thehives' },
                { name: 'Holding Absence', id: 'holdingabsence' },
                { name: 'Hollywood Undead', id: 'hollywoodundead' },
                { name: 'Hollywood Vampires', id: 'hollywoodvampires' },
                { name: 'Ho99o9', id: 'ho99o9' },
                { name: 'The Horrors', id: 'horrors' },
                { name: 'Hot Milk', id: 'hotmilk' },
                { name: 'Hot Mulligan', id: 'hotmulligan' },
                { name: 'Hot Water Music', id: 'hwm' },
                { name: 'The Hotelier', id: 'hotelier' },
                { name: 'House Of Protection', id: 'hop' },
                { name: 'Hundred Reasons', id: 'hundredreasons' },
                { name: 'The Hunna', id: 'thehunna' },
                { name: 'I Prevail', id: 'iprevail' },
                { name: 'Ice Nine Kills', id: 'ink' },
                { name: 'Idles', id: 'idles' },
                { name: 'Idlewild', id: 'idlewild' },
                { name: 'Imagine Dragons', id: 'imaginedragons' },
                { name: 'Imminence', id: 'imminence' },
                { name: 'Imperium', id: 'imperium' },
                { name: 'In Flames', id: 'inflames' },
                { name: 'In This Moment', id: 'inthismoment' },
                { name: 'Insane Clown Posse', id: 'icp' },
                { name: 'InMe', id: 'inme' },
                { name: 'Incubus', id: 'incubus' },
                { name: 'The Interrupters', id: 'interrupters' },
                { name: 'Iron Maiden', id: 'ironmaiden' },
                { name: 'Ithaca', id: 'ithaca' },
                { name: 'Jack White', id: 'jackwhite' },
                { name: 'Jamie T', id: 'jamiet' },
                { name: 'Janes Addiction', id: 'janesaddiction' },
                { name: 'Japandroids', id: 'japandroids' },
                { name: 'Jawbreaker', id: 'jawbreaker' },
                { name: 'Jimmy Eat World', id: 'jew' },
                { name: 'Jinjer', id: 'jinjer' },
                { name: 'Joey Valence and Brae', id: 'jvb' },
                { name: 'The Joy Formidable', id: 'joyformidable' },
                { name: 'Joyce Manor', id: 'joycemanor' },
                { name: 'Judas Priest', id: 'judaspriest' },
                { name: 'Kamelot', id: 'kamelot' },
                { name: 'Kendrick Lamar', id: 'kendrick' },
                { name: 'KennyHoopla', id: 'kennyhoopla' },
                { name: 'Kid Brunswick', id: 'kidbrunswick' },
                { name: 'Kid Kapichi', id: 'kidkapichi' },
                { name: 'Kids in Glass Houses', id: 'kigh' },
                { name: 'Killing Joke', id: 'killingjoke' },
                { name: 'Killswitch Engage', id: 'kse' },
                { name: 'King 810', id: 'king810' },
                { name: 'King Gizzard & The Lizard Wizard', id: 'kgatlw' },
                { name: 'Kiss', id: 'kiss' },
                { name: 'Kite Thief', id: 'kitethief' },
                { name: 'Kneecap', id: 'kneecap' },
                { name: 'Knocked Loose', id: 'knockedloose' },
                { name: 'Korn', id: 'korn' },
                { name: 'Kreator', id: 'kreator' },
                { name: 'Kvelertak', id: 'kvelertak' },
                { name: 'Kylesa', id: 'kylesa' },
                { name: 'Kyros', id: 'kyros' },
                { name: 'La Dispute', id: 'ladispute' },
                { name: 'Lacuna Coil', id: 'lacunacoil' },
                { name: 'Lake Malice', id: 'lakemalice' },
                { name: 'Lamb Of God', id: 'log' },
                { name: 'The Last Dinner Party', id: 'tldp' },
                { name: 'Laura Jane Grace', id: 'ljg' },
                { name: 'Le Tigre', id: 'letigre' },
                { name: 'Less Than Jake', id: 'ltj' },
                { name: 'Letlive', id: 'letlive' },
                { name: 'Limp Bizkit', id: 'limpbizkit' },
                { name: 'Lindemann', id: 'lindemann' },
                { name: 'Linkin Park', id: 'linkinpark' },
                { name: 'Loathe', id: 'loathe' },
                { name: 'Lonely the Brave', id: 'ltb' },
                { name: 'Lorna Shore', id: 'lornashore' },
                { name: 'Los Campesinos!', id: 'loscampesinos' },
                { name: 'Lowlives', id: 'lowlives' },
                { name: 'Machine Girl', id: 'machinegirl' },
                { name: 'Machine Gun Kelly', id: 'mgk' },
                { name: 'Machine Head', id: 'machinehead' },
                { name: 'Make Them Suffer', id: 'makethemsuffer' },
                { name: 'Malevolence', id: 'malevolence' },
                { name: 'Mallory Knox', id: 'malloryknox' },
                { name: 'Manchester Orchestra', id: 'manorchestra' },
                { name: 'Maneskin', id: 'maneskin' },
                { name: 'Manic Street Preachers', id: 'msp' },
                { name: 'Mannequin Pussy', id: 'mannequinpussy' },
                { name: 'Marilyn Manson', id: 'marilynmanson' },
                { name: 'Marina', id: 'marina' },
                { name: 'Marmozets', id: 'marmozets' },
                { name: 'The Mars Volta', id: 'themarsvolta' },
                { name: 'Mastodon', id: 'mastodon' },
                { name: 'Maybeshewill', id: 'maybeshewill' },
                { name: 'Mcfly', id: 'mcfly' },
                { name: 'Mclusky', id: 'mclusky' },
                { name: 'Me First & the Gimme Gimmes', id: 'gimmegimmes' },
                { name: 'Megadeth', id: 'megadeth' },
                { name: 'The Menzingers', id: 'menzingers' },
                { name: 'Mercyful Fate', id: 'mercyfulfate' },
                { name: 'Metallica', id: 'metallica' },
                { name: 'Meshuggah', id: 'meshuggah' },
                { name: 'Microwave', id: 'microwave' },
                { name: 'Militarie Gun', id: 'militariegun' },
                { name: 'Million Dead', id: 'milliondead' },
                { name: 'Ministry', id: 'ministry' },
                { name: 'Misfits', id: 'misfits' },
                { name: 'Modern Baseball', id: 'modernbaseball' },
                { name: 'Modest Mouse', id: 'modestmouse' },
                { name: 'Mogwai', id: 'mogwai' },
                { name: 'Monuments', id:  'monuments' },
                { name: 'Moon Tooth', id: 'moontooth' },
                { name: 'Mother Mother', id: 'mothermother' },
                { name: 'Mother Vulture', id: 'mothervulture' },
                { name: 'Motion City Soundtrack', id: 'mcsoundtrack' },
                { name: 'Motionless in White', id: 'miw' },
                { name: 'Motley Crue', id: 'motleycrue' },
                { name: 'Mr Bungle', id: 'mrbungle' },
                { name: 'Mudvayne', id: 'mudvayne' },
                { name: 'Municipal Waste', id: 'municipalwaste' },
                { name: 'Muse', id: 'muse' },
                { name: 'My Chemical Romance', id: 'mcr' },
                { name: 'My Dying Bride', id: 'mydyingbride' },
                { name: 'Mykur', id: 'mykur' },
                { name: 'Nails', id: 'nails' },
                { name: 'Napalm Death', id: 'napalmdeath' },
                { name: 'Neck Deep', id: 'neckdeep' },
                { name: 'Necrophagist', id: 'necrophagist' },
                { name: 'Neurosis', id: 'neurosis' },
                { name: 'New Found Glory', id: 'nfg' },
                { name: 'Nickelback', id: 'nickelback' },
                { name: 'Nightwish', id: 'nightwish' },
                { name: 'Nine Inch Nails', id: 'nineinchnails' },
                { name: 'No Doubt', id: 'nodoubt' },
                { name: 'NOFX', id: 'nofx' },
                { name: 'Northlane', id: 'northlane' },
                { name: 'Nothing But Thieves', id: 'nbt' },
                { name: 'Nothing, Nowhere', id: 'nothingnowhere' },
                { name: 'NothingMore', id: 'nothingmore' },
                { name: 'Nova Twins', id: 'novatwins' },
                { name: 'Oasis', id: 'oasis' },
                { name: 'Oathbreaker', id: 'oathbreaker' },
                { name: 'Ocean Grove', id: 'oceangrove' },
                { name: 'Of Mice & Men', id: 'omam' },
                { name: 'The Offspring', id: 'theoffspring' },
                { name: 'Opeth', id: 'opeth' },
                { name: 'Ozzy Osbourne', id: 'ozzy' },
                { name: 'Palaye Royale', id: 'palayeroyale' },
                { name: 'Pale Waves', id: 'palewaves' },
                { name: 'Pantera', id: 'pantera' },
                { name: 'Papa Roach', id: 'paparoach' },
                { name: 'Paramore', id: 'paramore' },
                { name: 'Paradise Lost', id: 'paradiselost' },
                { name: 'Parkway Drive', id: 'parkwaydrive' },
                { name: 'Party Cannon', id: 'partycannon' },
                { name: 'Pearl Jam', id: 'pearljam' },
                { name: 'Pendulum', id: 'pendulum' },
                { name: 'Periphery', id: 'periphery' },
                { name: 'Perturbator', id: 'perturbator' },
                { name: 'Pierce The Veil', id: 'piercetheveil' },
                { name: 'Pigs Pigs Pigs Pigs Pigs Pigs Pigs', id: 'pigs' },
                { name: 'Pinkshift', id: 'pinkshift' },
                { name: 'Pixies', id: 'pixies' },
                { name: 'Placebo', id: 'placebo' },
                { name: 'The Plot In You', id: 'tpiy' },
                { name: 'Poison', id: 'poison' },
                { name: 'Polyphia', id: 'polyphia' },
                { name: 'Poppy', id: 'poppy' },
                { name: 'Porcupine Tree', id: 'porcupinetree' },
                { name: 'The Postal Service', id: 'postalservice' },
                { name: 'Powerwolf', id: 'powerwolf' },
                { name: 'The Pretty Reckless', id: 'theprettyreckless' },
                { name: 'Primus', id: 'primus' },
                { name: 'The Prodigy', id: 'theprodigy' },
                { name: 'Prophets Of Rage', id: 'por' },
                { name: 'Protest The Hero', id: 'pth' },
                { name: 'Public Image Ltd', id: 'pil' },
                { name: 'Puddle Of Mudd', id: 'puddleofmudd' },
                { name: 'Pup', id: 'pup' },
                { name: 'Puppy', id: 'puppy' },
                { name: 'Pvris', id: 'pvris' },
                { name: 'Queens Of The Stone Age', id: 'qotsa' },
                { name: 'Quicksand', id: 'quicksand' },
                { name: 'Radiohead', id: 'radiohead' },
                { name: 'Rage Against The Machine', id: 'ratm' },
                { name: 'Raging Speedhorn', id: 'ragingspeedhorn' },
                { name: 'Rancid', id: 'rancid' },
                { name: 'Rammstein', id: 'rammstein' },
                { name: 'Red Hot Chili Peppers', id: 'rhcp' },
                { name: 'Refused', id: 'refused' },
                { name: 'Reuben', id: 'reuben' },
                { name: 'Rina Sawayama', id: 'rina' },
                { name: 'Rise Against', id: 'riseagainst' },
                { name: 'Rival Schools', id: 'rivalschools' },
                { name: 'Rival Sons', id: 'rivalsons' },
                { name: 'Rob Zombie', id: 'robzombie' },
                { name: 'Rolo Tomassi', id: 'rolotomassi' },
                { name: 'Rory', id: 'rory' },
                { name: 'Royal Blood', id: 'royalblood' },
                { name: 'Royal Republic', id: 'royalrepublic' },
                { name: 'Run The Jewels', id: 'runthejewels' },
                { name: 'Russian Circles', id: 'russiancircles' },
                { name: 'Sabaton', id: 'sabaton' },
                { name: 'Satyricon', id: 'satyricon' },
                { name: 'Save Face', id: 'saveface' },
                { name: 'Saxon', id: 'saxon' },
                { name: 'Scarlxrd', id: 'scarlxrd' },
                { name: 'Scene Queen', id: 'scenequeen' },
                { name: 'Scorpions', id: 'scorpions' },
                { name: 'Scowl', id: 'scowl' },
                { name: 'The Scratch', id: 'thescratch' },
                { name: 'Seething Akira', id: 'seethingakira' },
                { name: 'Sepultura', id: 'sepultura' },
                { name: 'Sevendust', id: 'sevendust' },
                { name: 'Shame', id: 'shame' },
                { name: 'Shinedown', id: 'shinedown' },
                { name: 'Shrapnel', id: 'shrapnel' },
                { name: 'Sick Of It All', id: 'soia' },
                { name: 'Sikth', id: 'sikth' },
                { name: 'Silverchair', id: 'silverchair' },
                { name: 'Skillet', id: 'skillet' },
                { name: 'Skindred', id: 'skindred' },
                { name: 'The Skints', id: 'skints' },
                { name: 'Skunk Anansie', id: 'skunkanansie' },
                { name: 'Skynd', id: 'skynd' },
                { name: 'Slash', id: 'slash' },
                { name: 'Slayer', id: 'slayer' },
                { name: 'Slaughter To Prevail', id: 'stp' },
                { name: 'Sleater-Kinney', id: 'sk' },
                { name: 'Sleep', id: 'sleep' },
                { name: 'Sleep Token', id: 'sleeptoken' },
                { name: 'Sleeping With Sirens', id: 'sws' },
                { name: 'Slipknot', id: 'slipknot' },
                { name: 'Slowdive', id: 'slowdive' },
                { name: 'The Smashing Pumpkins', id: 'tsp' },
                { name: 'Social Distortion', id: 'sociald' },
                { name: 'Soft Play', id: 'softplay' },
                { name: 'Soul Glo', id: 'soulglo' },
                { name: 'Spanish Love Songs', id: 'sls' },
                { name: 'Speed', id: 'speed' },
                { name: 'Spiritbox', id: 'spiritbox' },
                { name: 'Spiritualized', id: 'spiritualized' },
                { name: 'Staind', id: 'staind' },
                { name: 'Stand Atlantic', id: 'standatlantic' },
                { name: 'Starset', id: 'starset' },
                { name: 'Static Dress', id: 'staticdress' },
                { name: 'Steel Panther', id: 'steelpanther' },
                { name: 'Stick To Your Guns', id: 'styg' },
                { name: 'Stone Sour', id: 'stonesour' },
                { name: 'The Story So Far', id: 'tssf' },
                { name: 'Stray From The Path', id: 'sftp' },
                { name: 'Strayers', id: 'strayers' },
                { name: 'The Streets', id: 'thestreets' },
                { name: 'Sublime', id: 'sublime' },
                { name: 'The Subways', id: 'subways' },
                { name: 'Suicidal Tendencies', id: 'suicidaltendencies' },
                { name: 'Suicide Silence', id: 'suicidesilence' },
                { name: 'Suicide Boys', id: 'suicideboys' },
                { name: 'Superheaven', id: 'superheaven' },
                { name: 'Sum 41', id: 'sum41' },
                { name: 'Sylosis', id: 'sylosis' },
                { name: 'System Of A Down', id: 'soad' },
                { name: 'Taking Back Sunday', id: 'tbs' },
                { name: 'Tenacious D', id: 'tenaciousd' },
                { name: 'Tesseract', id: 'tesseract' },
                { name: 'Testament', id: 'testament' },
                { name: 'Therapy', id: 'therapy' },
                { name: 'Three Days Grace', id: 'tdg' },
                { name: 'Thrice', id: 'thrice' },
                { name: 'Thrown', id: 'thrown' },
                { name: 'Thunder', id: 'thunder' },
                { name: 'Thursday', id: 'thursday' },
                { name: 'Thy Art Is Murder', id: 'thyartismurder' },
                { name: 'Tiny Moving Parts', id: 'tmp' },
                { name: 'Tool', id: 'tool' },
                { name: 'Touche Amore', id: 'toucheamore' },
                { name: 'Trash Boat', id: 'trashboat' },
                { name: 'Trivium', id: 'trivium' },
                { name: 'Trophy Eyes', id: 'trophyeyes' },
                { name: 'Turnover', id: 'turnover' },
                { name: 'Turnstile', id: 'turnstile' },
                { name: 'The Twilight Sad', id: 'twilightsad' },
                { name: 'Twin Atlantic', id: 'twinatlantic' },
                { name: 'Twin Temple', id: 'twintemple' },
                { name: 'Twenty One Pilots', id: 'twentyonepilots' },
                { name: 'Uncle Acid and the Deadbeats', id: 'uncleacid' },
                { name: 'Underoath', id: 'underoath' },
                { name: 'Unpeople', id: 'unpeople' },
                { name: 'Unto Others', id: 'untoothers' },
                { name: 'The Used', id: 'theused' },
                { name: 'Veil Of Maya', id: 'veilofmaya' },
                { name: 'Venom Prison', id: 'venomprison' },
                { name: 'Viagra Boys', id: 'viagraboys' },
                { name: 'Volbeat', id: 'volbeat' },
                { name: 'Vower', id: 'vower' },
                { name: 'Vukovi', id: 'vukovi' },
                { name: 'Wage War', id: 'wagewar' },
                { name: 'Wargasm', id: 'wargasm' },
                { name: 'Warmduscher', id: 'warmduscher' },
                { name: 'The Warning', id: 'thewarning' },
                { name: 'Watain', id: 'watain' },
                { name: 'Waterparks', id: 'waterparks' },
                { name: 'Weezer', id: 'weezer' },
                { name: 'We Are The Ocean', id: 'wato' },
                { name: 'Wednesday 13', id: 'wednesday' },
                { name: 'Wet Leg', id: 'wetleg' },
                { name: 'While She Sleeps', id: 'wss' },
                { name: 'Whitechapel', id: 'whitechapel' },
                { name: 'Whitesnake', id: 'whitesnake' },
                { name: 'The Wildhearts', id: 'wildhearts' },
                { name: 'Within Temptation', id: 'withintemptation' },
                { name: 'Wolf Alice', id: 'wolfalice' },
                { name: 'Wolves In The Throne Room', id: 'wittr' },
                { name: 'The Wonder Years', id: 'twy' },
                { name: 'WSTR', id: 'wstr' },
                { name: 'Wunderhorse', id: 'wunderhorse' },
                { name: 'The Wytches', id: 'wytches' },
                { name: 'The Xcerts', id: 'xcerts' },
                { name: 'Yard Act', id: 'yardact' },
                { name: 'Yeah Yeah Yeahs', id: 'yyy' },
                { name: 'Yellowcard', id: 'yellowcard' },
                { name: 'Yonaka', id: 'yonaka' },
                { name: 'YouMeAtSix', id: 'yma6' },
                { name: 'Yungblud', id: 'yungblud' },
                { name: 'Zand', id: 'zand' },
                { name: 'Zeal & Ardor', id: 'zealandardor' },
                { name: 'Zebrahead', id: 'zebrahead' },
                { name: 'ZZ Top', id: 'zztop' },
                { name: '100 Gecs', id: 'gecs' },
                { name: 'The 1975', id: 'the1975' },
                { name: '3 Doors Down', id: 'threedd' },
                { name: '3Teeth', id: 'teeth' },
                { name: '30 Seconds To Mars', id: 'thirtystm' },
            ]
        },
    },
    methods: {
        onSelectedOption(selected) {
            this.bandSelected = selected.id ? true : false;
            this.$emit('selected', selected)
        },
        getSize(size) {
            const logoSizes = {
                1: 'smallest',
                2: 'smaller',
                3: 'small',
                4: 'normal',
                5: 'large',
                6: 'larger',
                7: 'largest',
            };
            return logoSizes[size] || 'normal';
        },
        onSelectSize(size) {
            this.logoSize = this.getSize(size);
            this.$emit('size',  this.logoSize);
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

.slider-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
}

input[type="range"] {
    width: 100%;
    max-width: 400px;
}
</style>