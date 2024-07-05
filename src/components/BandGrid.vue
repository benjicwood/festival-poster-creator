<template>
  <div class="band-grid">
    <!-- Main Stage Headliners -->
    <!-- <BandSection position="main-headliner" @click="openModal('thursdayHeadliner', 'Thursday Headliner')" :band="bandPosition.thursdayHeadliner" /> -->
    <BandSection position="main-headliner" @click="openModal('fridayHeadliner', 'Friday Headliner')" :band="bandPosition.fridayHeadliner" />
    <BandSection position="main-headliner" @click="openModal('saturdayHeadliner', 'Saturday Headliner')" :band="bandPosition.saturdayHeadliner" />
    <BandSection position="main-headliner" @click="openModal('sundayHeadliner', 'Sunday Headliner')" :band="bandPosition.sundayHeadliner" />
    <!-- Main Stage Subs -->
    <!-- <BandSection position="main-sub" @click="openModal('thursdaySub', 'Thursday Sub-Headliner')" :band="bandPosition.thursdaySub" /> -->
    <BandSection position="main-sub" @click="openModal('fridaySub', 'Friday Sub-Headliner')" :band="bandPosition.fridaySub" />
    <BandSection position="main-sub" @click="openModal('saturdaySub', 'Saturday Sub-Headliner')" :band="bandPosition.saturdaySub" />
    <BandSection position="main-sub" @click="openModal('sundaySub', 'Sunday Sub-Headliner')" :band="bandPosition.sundaySub" />
    <!-- Main Stage Third -->
    <!-- <BandSection position="main-third" @click="openModal('thursdayThird', 'Thursday Third Down')" :band="bandPosition.thursdayThird" /> -->
    <BandSection position="main-third" @click="openModal('fridayThird', 'Friday Third Down')" :band="bandPosition.fridayThird" />
    <BandSection position="main-third" @click="openModal('saturdayThird', 'Saturday Third Down')" :band="bandPosition.saturdayThird" />
    <BandSection position="main-third" @click="openModal('sundayThird', 'Sunday Third Down')" :band="bandPosition.sundayThird" />
    <!-- Main Stage Text -->
    <BandInput size="large" />
    <BandInput size="large" />
    <BandInput size="large" />
    <BandInput size="large" />
    <BandInput size="large" />
    <BandInput size="large" />
    <BandInput size="large" />
    <BandInput size="large" />
    <BandInput size="large" />
    <BandInput size="large" />
    <BandInput size="large" />
    <BandInput size="large" />
    <div class="main-stage-divider"></div>
    <div class="main-stage-divider"></div>
    <div class="main-stage-divider"></div>
    <!-- Second Stage -->
    <!-- <BandSection position="main-third" @click="openModal('thursdaySecondHeadliner', 'Thursday Second Stage Headliner')" :band="bandPosition.thursdaySecondHeadliner" /> -->
    <BandSection position="main-third" @click="openModal('fridaySecondHeadliner', 'Friday Second Stage Headliner')" :band="bandPosition.fridaySecondHeadliner" />
    <BandSection position="main-third" @click="openModal('saturdaySecondHeadliner', 'Saturday Second Stage Headliner')" :band="bandPosition.saturdaySecondHeadliner" />
    <BandSection position="main-third" @click="openModal('sundaySecondHeadliner', 'Sunday Second Stage Headliner')" :band="bandPosition.sundaySecondHeadliner" />
    <!-- <BandSection position="second-sub" @click="openModal('thursdaySecondSub', 'Thursday Second Stage Sub')" :band="bandPosition.thursdaySecondSub" /> -->
    <BandSection position="second-sub" @click="openModal('fridaySecondSub', 'Friday Second Stage Sub')" :band="bandPosition.fridaySecondSub" />
    <BandSection position="second-sub" @click="openModal('saturdaySecondSub', 'Saturday Second Stage Sub')" :band="bandPosition.saturdaySecondSub" />
    <BandSection position="second-sub" @click="openModal('sundaySecondSub', 'Sunday Second Stage Sub')" :band="bandPosition.sundaySecondSub" />
    <BandInput size="large" />
    <BandInput size="large" />
    <BandInput size="large" />
    <BandInput size="medium" />
    <BandInput size="medium" />
    <BandInput size="medium" />
    <BandInput size="medium" />
    <BandInput size="medium" />
    <BandInput size="medium" />
    <div class="second-stage-divider"></div>
    <div class="second-stage-divider"></div>
    <div class="second-stage-divider"></div>
    <!-- <BandInput /> -->
    <!-- Third Stage -->
    <!-- <BandSection position="second-sub" @click="openModal('thursdayThirdStage', 'Thursday Third Stage Headliner')" :band="bandPosition.thursdayThirdStage" /> -->
    <BandSection position="main-third" @click="openModal('fridayThirdStage', 'Friday Third Stage Headliner')" :band="bandPosition.fridayThirdStage" />
    <BandSection position="main-third" @click="openModal('saturdayThirdStage', 'Saturday Third Stage Headliner')" :band="bandPosition.saturdayThirdStage" />
    <BandSection position="main-third" @click="openModal('sundayThirdStage', 'Sunday Third Stage Headliner')" :band="bandPosition.sundayThirdStage" />
    <BandInput size="small" />
    <BandInput size="small" />
    <BandInput size="small" />
    <BandInput size="small" />
    <BandInput size="small" />
    <BandInput size="small" />
    <div class="third-stage-divider"></div>
    <div class="third-stage-divider"></div>
    <div class="third-stage-divider"></div>
    <!-- Fourth Stage -->
    <!-- <BandSection position="second-sub" @click="openModal('thursdayFourthStage', 'Thursday Fourth Stage Headliner')" :band="bandPosition.thursdayFourthStage" /> -->
    <BandSection position="fourth-headliner" @click="openModal('fridayFourthStage', 'Friday Fourth Stage Headliner')" :band="bandPosition.fridayFourthStage" />
    <BandSection position="fourth-headliner" @click="openModal('saturdayFourthStage', 'Saturday Fourth Stage Headliner')" :band="bandPosition.saturdayFourthStage" />
    <BandSection position="fourth-headliner" @click="openModal('sundayFourthStage', 'Sunday Fourth Stage Headliner')" :band="bandPosition.sundayFourthStage" />
    <BandInput size="small" />
    <BandInput size="small" />
    <BandInput size="small" />
    <BandInput size="small" />
    <BandInput size="small" />
    <BandInput size="small" />
    <!-- <BandInput size="small" />
    <BandInput size="small" />
    <BandInput size="small" /> -->

    <!-- Modal -->
    <Modal
      v-show="isModalVisible"
      @selected="onSelect"
      @close="closeModal"
      :title="modalTitle"
      :key="key"
    />
  </div>
</template>

<script>
import BandSection from "./BandSection.vue"
import BandInput from "./BandInput.vue"

import Modal from "./Modal"

export default {
  name: 'BandGrid',
  components: {
      BandSection,
      BandInput,
      Modal,
  },
  props: {
    msg: String
  },
  data() {
      return {
          isModalVisible: false,
          bandPosition: {
              thursdayHeadliner: '',
              thursdaySub: '',
              thursdayThird: '',
              thursdaySecondHeadliner: '',
              thursdaySecondSub: '',
              thursdayThirdStage: '',
              thursdayFourthStage: '',
              fridayHeadliner: '',
              fridaySub: '',
              fridayThird: '',
              fridaySecondHeadliner: '',
              fridaySecondSub: '',
              fridayThirdStage: '',
              fridayFourthStage: '',
              saturdayHeadliner: '',
              saturdaySub: '',
              saturdayThird: '',
              saturdaySecondHeadliner: '',
              saturdaySecondSub: '',
              saturdayThirdStage: '',
              saturdayFourthStage: '',
              sundayHeadliner: '',
              sundaySub: '',
              sundayThird: '',
              sundaySecondHeadliner: '',
              sundaySecondSub: '',
              sundayThirdStage: '',
              sundayFourthStage: '',
          },
          modalPosition: '',
          modalTitle: '',
          key: 0,
      }
  },
  methods: {
      openModal(position, title) {
          this.modalPosition = position
          this.modalTitle = title
          this.key += 1
          this.isModalVisible = true
      },
      onSelect(selected) {
        const selectedBand = selected.id
        this.bandPosition[this.modalPosition] = selectedBand
      },
      closeModal() {
          this.isModalVisible = false
      }
  }
}
</script>

<style scoped style="scss">
.band-grid {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 5px;
  padding: 180px 6px 0 6px;
  height: 100px;
  width: 695px;
}
.band-grid div:hover {
  border: solid pink 1px;
}

.main-stage-divider {
  height: 18px;
}
.second-stage-divider {
  height: 18px;
}
.third-stage-divider {
  height: 16px;
}
.main-stage-divider:hover, .second-stage-divider:hover, .third-stage-divider:hover {
  border: none !important;
}

/* bands */

.a { background-image: url(../../assets/bands/a.png); filter: brightness(2); }
.apc { background-image: url(../assets/bands/apc.png); }
.acdc { background-image: url(../assets/bands/acdc.png); }
.adtr { background-image: url(../../assets/bands/adtr.png); filter: brightness(1.2); }
.aerosmith { background-image: url(../assets/bands/aerosmith.png); }
.afi { background-image: url(../../assets/bands/afi.png); }
.againstme { background-image: url(../../assets/bands/againstme.png); }
.againstthecurrent { background-image: url(../assets/bands/againstthecurrent.png); }
.alexisonfire { background-image: url(../../assets/bands/alexisonfire.png); }
.airbourne { background-image: url(../assets/bands/airbourne.png); }
.ajtracey { background-image: url(../assets/bands/ajtracey.png); }
.alcest { background-image: url(../assets/bands/alcest.png); }
.alicecooper { background-image: url(../assets/bands/alicecooper.png); }
.aliceinchains { background-image: url(../assets/bands/aliceinchains.png); }
.alesana { background-image: url(../assets/bands/alesana.png); }
.aaf { background-image: url(../../assets/bands/aaf.png); }
.alienweaponry { background-image: url(../../assets/bands/alienweaponry.png); }
.alkalinetrio { background-image: url(../../assets/bands/alkalinetrio.png); }
.aar { background-image: url(../../assets/bands/aar.png); }
.allthatremains { background-image: url(../assets/bands/allthatremains.png); }
.alltimelow { background-image: url(../../assets/bands/alltimelow.png); }
.altblkera { background-image: url(../../assets/bands/altblkera.png); }
.alterbridge { background-image: url(../assets/bands/alterbridge.png); }
.americanfootball { background-image: url(../../assets/bands/americanfootball.png); }
.amonamarth { background-image: url(../assets/bands/amonamarth.png); }
.aats { background-image: url(../../assets/bands/aats.png); }
.anaalnathrakh { background-image: url(../assets/bands/anaalnathrakh.png); }
.andrewwk { background-image: url(../../assets/bands/andrewwk.png); }
.ava { background-image: url(../../assets/bands/ava.png); filter: brightness(2); }
.anthrax { background-image: url(../assets/bands/anthrax.png); }
.annihilator { background-image: url(../assets/bands/annihilator.png); }
.archenemy { background-image: url(../assets/bands/archenemy.png); }
.architects { background-image: url(../../assets/bands/architects.png); filter: brightness(2); }
.arcticmonkeys { background-image: url(../assets/bands/arcticmonkeys.png); }
.aild { background-image: url(../assets/bands/aild.png); }
.ashnikko { background-image: url(../assets/bands/ashnikko.png); }
.aa { background-image: url(../assets/bands/aa.png); }
.augustburnsred { background-image: url(../assets/bands/augustburnsred.png); }
.a7x { background-image: url(../assets/bands/a7x.png); }
.avril { background-image: url(../../assets/bands/avril.png); }
.asiwyfa { background-image: url(../../assets/bands/asiwyfa.png); }

.badomens { background-image: url(../../assets/bands/badomens.png); }
.badreligion { background-image: url(../../assets/bands/badreligion.png); }
.baroness { background-image: url(../assets/bands/baroness.png); }
.basement { background-image: url(../../assets/bands/basement.png); }
.beartooth { background-image: url(../../assets/bands/beartooth.png); }
.betterlovers { background-image: url(../../assets/bands/betterlovers.png); }
.biffyclyro { background-image: url(../../assets/bands/biffyclyro.png); }
.billytalent { background-image: url(../../assets/bands/billytalent.png); }
.theblackout { background-image: url(../../assets/bands/theblackout.png); }
.blink182 { background-image: url(../../assets/bands/blink182.png); }
.blocparty { background-image: url(../../assets/bands/blocparty.png); }
.bloodcommand { background-image: url(../../assets/bands/bloodcommand.png); }
.blossoms { background-image: url(../../assets/bands/blossoms.png); }
.bokassa { background-image: url(../../assets/bands/bokassa.png); }
.bonjovi { background-image: url(../assets/bands/bonjovi.png); }
.bostonmanor { background-image: url(../../assets/bands/bostonmanor.png);  }
.bmth { background-image: url(../assets/bands/bmth.png); transform: scale(1.25); }
.bfs { background-image: url(../../assets/bands/bfs.png); }
.bfmv { background-image: url(../../assets/bands/bfmv.png); }
.bronx { background-image: url(../../assets/bands/bronx.png); }
.burytomorrow { background-image: url(../../assets/bands/burytomorrow.png); }
.busted { background-image: url(../../assets/bands/busted.png); }
.babymetal { background-image: url(../assets/bands/babymetal.png); }
.billieeilish { background-image: url(../assets/bands/billieeilish.png); }
.bsc { background-image: url(../assets/bands/bsc.png); }
.behemoth { background-image: url(../assets/bands/behemoth.png); }
.blackflag { background-image: url(../assets/bands/blackflag.png); }
.blacklabelsociety { background-image: url(../assets/bands/blacklabelsociety.png); }
.bvb { background-image: url(../assets/bands/bvb.png); }
.tbdm { background-image: url(../assets/bands/tbdm.png); }
.theblackqueen { background-image: url(../assets/bands/theblackqueen.png); }
.biohazard { background-image: url(../assets/bands/biohazard.png); }
.blossoms { background-image: url(../assets/bands/blossoms.png); }
.busted { background-image: url(../assets/bands/busted.png); }
.bodycount { background-image: url(../assets/bands/bodycount.png); }
.bandmaid { background-image: url(../assets/bands/bandmaid.png); }

.cancerbats { background-image: url(../../assets/bands/cancerbats.png); }
.carpenterbrut { background-image: url(../../assets/bands/carpenterbrut.png); }
.thechats { background-image: url(../../assets/bands/thechats.png); }
.chvrches { background-image: url(../../assets/bands/chvrches.png); }
.citizen { background-image: url(../../assets/bands/citizen.png); }
.cityandcolour { background-image: url(../../assets/bands/cityandcolour.png); }
.cky { background-image: url(../../assets/bands/cky.png); }
.codeorange { background-image: url(../../assets/bands/codeorange.png); }
.candc { background-image: url(../../assets/bands/candc.png); }
.creeper { background-image: url(../../assets/bands/creeper.png); }
.crosses { background-image: url(../../assets/bands/crosses.png); }
.thecure { background-image: url(../assets/bands/thecure.png); }
.clutch { background-image: url(../assets/bands/clutch.png); }
.converge { background-image: url(../assets/bands/converge.png); }
.cultofluna { background-image: url(../assets/bands/cultofluna.png); }
.cannibalcorpse { background-image: url(../assets/bands/cannibalcorpse.png); }
.carcass { background-image: url(../assets/bands/carcass.png); }
.coreytaylor { background-image: url(../assets/bands/coreytaylor.png); }
.cof { background-image: url(../assets/bands/cof.png); }
.creed { background-image: url(../assets/bands/creed.png); }
.cypresshill { background-image: url(../assets/bands/cypresshill.png); }
.callousdaoboys { background-image: url(../../assets/bands/callousdaoboys.png); }
.charlottesands { background-image: url(../assets/bands/charlottesands.png); }

.dadifreyr { background-image: url(../../assets/bands/dadifreyr.png); }
.thedarkness { background-image: url(../../assets/bands/thedarkness.png); }
.deathbyromy { background-image: url(../../assets/bands/deathbyromy.png); }
.defleppard { background-image: url(../assets/bands/defleppard.png); }
.deftones { background-image: url(../../assets/bands/deftones.png); }
.dinosaurpileup { background-image: url(../../assets/bands/dinosaurpileup.png); }
.dirtyloops { background-image: url(../../assets/bands/dirtyloops.png); }
.thedistillers { background-image: url(../../assets/bands/thedistillers.png); }
.donbroco { background-image: url(../../assets/bands/donbroco.png); }
.dropkickmurphys { background-image: url(../../assets/bands/dropkickmurphys.png); }
.drugchurch { background-image: url(../../assets/bands/drugchurch.png); }
.deftones { background-image: url(../assets/bands/deftones.png); }
.disturbed { background-image: url(../assets/bands/disturbed.png); }
.devintownsend { background-image: url(../assets/bands/devintownsend.png); }
.down { background-image: url(../assets/bands/down.png); }
.darkesthour { background-image: url(../assets/bands/darkesthour.png); }
.deicide { background-image: url(../assets/bands/deicide.png); }
.dimmuborgir { background-image: url(../assets/bands/dimmuborgir.png); }
.dyingfetus { background-image: url(../assets/bands/dyingfetus.png); }
.deathgrips { background-image: url(../assets/bands/deathgrips.png); }
.dreamtheater { background-image: url(../assets/bands/dreamtheater.png); }
.depechemode { background-image: url(../assets/bands/depechemode.png); }
.duranduran { background-image: url(../assets/bands/duranduran.png); }
.dcfc { background-image: url(../../assets/bands/dcfc.png); }
.destroyboys { background-image: url(../../assets/bands/blink182.png); }

.electriccallboy { background-image: url(../../assets/bands/electriccallboy.png); }
.esb { background-image: url(../../assets/bands/esb.png); }
.entershikari { background-image: url(../../assets/bands/entershikari.png); }
.etid { background-image: url(../../assets/bands/etid.png); }
.entershikari { background-image: url(../assets/bands/entershikari.png); }
.evanescence { background-image: url(../assets/bands/evanescence.png); }
.electricwizard { background-image: url(../assets/bands/electricwizard.png); }
.epica { background-image: url(../assets/bands/epica.png); }
.evilscarecrow { background-image: url(../assets/bands/evilscarecrow.png); }
.eminem { background-image: url(../assets/bands/eminem.png); }
.exodus { background-image: url(../assets/bands/exodus.png); }

.fnm { background-image: url(../../assets/bands/fnm.png); }
.fob { background-image: url(../../assets/bands/fob.png); }
.fearfactory { background-image: url(../../assets/bands/fearfactory.png); }
.fallinginreverse { background-image: url(../../assets/bands/fallinginreverse.png); }
.feeder { background-image: url(../../assets/bands/feeder.png); }
.fightstar { background-image: url(../../assets/bands/fightstar.png); }
.foals { background-image: url(../../assets/bands/foals.png); }
.fontainesdc { background-image: url(../../assets/bands/fontainesdc.png); }
.foofighters { background-image: url(../assets/bands/foofighters.png); }
.fcandtherattlesnakes { background-image: url(../../assets/bands/fc&therattlesnakes.png); }
.frankturner { background-image: url(../../assets/bands/frankturner.png); }
.fugazi { background-image: url(../../assets/bands/fugazi.png); }
.ffaf { background-image: url(../../assets/bands/ffaf.png); }
.ffdp { background-image: url(../assets/bands/5fdp.png); }
.fallinginreverse { background-image: url(../assets/bands/fallinginreverse.png); }

.gallows { background-image: url(../../assets/bands/gallows.png); }
.thegaslightanthem { background-image: url(../../assets/bands/thegaslightanthem.png); }
.gecs { background-image: url(../../assets/bands/100gecs.png); }
.gel { background-image: url(../../assets/bands/gel.png); }
.theghostinside { background-image: url(../../assets/bands/theghostinside.png); }
.ghost { background-image: url(../assets/bands/ghost.png); }
.ghostwriters { background-image: url(../../assets/bands/ghostwriters.png); }
.gogolbordello { background-image: url(../../assets/bands/gogolbordello.png); }
.goodcharlotte { background-image: url(../../assets/bands/goodcharlotte.png); }
.gougeaway { background-image: url(../../assets/bands/gougeaway.png); }
.greenday { background-image: url(../assets/bands/greenday.png); }
.greenlung { background-image: url(../../assets/bands/greenlung.png); }
.gnr { background-image: url(../assets/bands/gnr.png); }
.gojira { background-image: url(../assets/bands/gojira.png); }
.ghostemane {  background-image: url(../assets/bands/ghostemane.png); }
.gvf { background-image: url(../assets/bands/gvf.png); }
.gorillaz { background-image: url(../assets/bands/gorillaz.png); }

.hatebreed { background-image: url(../../assets/bands/hatebreed.png); }
.headautomatica { background-image: url(../../assets/bands/headautomatica.png); }
.heck { background-image: url(../../assets/bands/heck.png); }
.hifh { background-image: url(../../assets/bands/hifh.png); }
.highvis { background-image: url(../../assets/bands/highvis.png); }
.thehives { background-image: url(../../assets/bands/thehives.png); }
.holdingabsence { background-image: url(../../assets/bands/holdingabsence.png); }
.hollywoodundead { background-image: url(../../assets/bands/hollywoodundead.png); }
.ho99o9 { background-image: url(../../assets/bands/ho99o9.png); }
.hotmulligan { background-image: url(../../assets/bands/hotmulligan.png); }
.hundredreasons { background-image: url(../../assets/bands/hundredreasons.png); }
.thehunna { background-image: url(../../assets/bands/thehunna.png); }
.halestorm { background-image: url(../assets/bands/halestorm.png); }
.hollywoodvampires { background-image: url(../assets/bands/hollywoodvampires.png); }
.helloween { background-image: url(../assets/bands/helloween.png); }
.highonfire { background-image: url(../assets/bands/highonfire.png); }
.hollywoodundead { background-image: url(../assets/bands/hollywoodundead.png); }
.heilung { background-image: url(../assets/bands/heilung.png); }
.halsey { background-image: url(../assets/bands/halsey.png); }
.hotmilk { background-image: url(../../assets/bands/hotmilk.png); }
.heavenshallburn { background-image: url(../assets/bands/heavenshallburn.png); }

.iprevail { background-image: url(../../assets/bands/iprevail.png); }
.icp { background-image: url(../../assets/bands/icp.png); }
.idles { background-image: url(../../assets/bands/idles.png); }
.idlewild { background-image: url(../../assets/bands/idlewild.png); }
.incubus { background-image: url(../../assets/bands/incubus.png); }
.inme { background-image: url(../../assets/bands/inme.png); }
.interrupters { background-image: url(../../assets/bands/interrupters.png); }
.ironmaiden { background-image: url(../assets/bands/ironmaiden.png); }
.ink { background-image: url(../assets/bands/ink.png); }
.inflames { background-image: url(../assets/bands/inflames.png); }
.imaginedragons { background-image: url(../assets/bands/imaginedragons.png); }
.inthismoment { background-image: url(../assets/bands/inthismoment.png); }
.ithaca { background-image: url(../../assets/bands/ithaca.png); }

.janesaddiction { background-image: url(../../assets/bands/janesaddiction.png); }
.jawbreaker { background-image: url(../../assets/bands/jawbreaker.png); }
.jew { background-image: url(../../assets/bands/jew.png); }
.jvb { background-image: url(../../assets/bands/jvb.png); }
.jackwhite { background-image: url(../assets/bands/jackwhite.png); }
.judaspriest { background-image: url(../assets/bands/judaspriest.png); }
.jinjer { background-image: url(../assets/bands/jinjer.png); }

.kidkapichi { background-image: url(../../assets/bands/kidkapichi.png); }
.kigh { background-image: url(../../assets/bands/kigh.png); }
.kiss { background-image: url(../assets/bands/kiss.png); }
.knockedloose { background-image: url(../../assets/bands/knockedloose.png); }
.kse { background-image: url(../assets/bands/kse.png); }
.korn { background-image: url(../assets/bands/korn.png); }
.kgatlw { background-image: url(../assets/bands/kgatlw.png); }
.kamelot { background-image: url(../assets/bands/kamelot.png); }
.killingjoke { background-image: url(../assets/bands/killingjoke.png); }
.kreator { background-image: url(../assets/bands/kreator.png); }
.kendrick { background-image: url(../assets/bands/kendrick.png); }
.king810 { background-image: url(../assets/bands/king810.png); }

.ltj { background-image: url(../../assets/bands/ltj.png); }
.letlive { background-image: url(../../assets/bands/letlive.png); }
.limpbizkit { background-image: url(../../assets/bands/limpbizkit.png); }
.loathe { background-image: url(../../assets/bands/loathe.png); }
.log { background-image: url(../assets/bands/log.png); }
.lindemann { background-image: url(../assets/bands/lindemann.png); }
.lornashore { background-image: url(../assets/bands/lornashore.png); }
.lacunacoil { background-image: url(../assets/bands/lacunacoil.png); }
.linkinpark { background-image: url(../assets/bands/linkinpark.png); }

.makethemsuffer { background-image: url(../../assets/bands/makethemsuffer.png); }
.malevolence { background-image: url(../../assets/bands/msp.png); }
.msp { background-image: url(../../assets/bands/msp.png); }
.manorchestra { background-image: url(../../assets/bands/manorchestra.png); }
.marmozets { background-image: url(../../assets/bands/marmozets.png); }
.themarsvolta { background-image: url(../../assets/bands/themarsvolta.png); }
.maybeshewill { background-image: url(../../assets/bands/maybeshewill.png); }
.menzingers { background-image: url(../../assets/bands/menzingers.png); }
.metallica { background-image: url(../assets/bands/metallica.png); }
.militariegun { background-image: url(../../assets/bands/militariegun.png); }
.modestmouse { background-image: url(../../assets/bands/modestmouse.png); }
.monuments { background-image: url(../../assets/bands/monuments.png); }
.moontooth { background-image: url(../../assets/bands/moontooth.png); }
.mothermother { background-image: url(../../assets/bands/mothermother.png); }
.mcsoundtrack { background-image: url(../../assets/bands/mcsoundtrack.png); }
.mrbungle { background-image: url(../../assets/bands/mrbungle.png); }
.muse { background-image: url(../assets/bands/muse.png); }
.municipalwaste { background-image: url(../../assets/bands/municipalwaste.png); }
.mcr { background-image: url(../assets/bands/mcr.png); }
.machinehead { background-image: url(../assets/bands/machinehead.png); }
.marilynmanson { background-image: url(../assets/bands/marilynmanson.png); }
.marmozets { background-image: url(../assets/bands/marmozets.png); }
.themarsvoltasub { background-image: url(../assets/bands/themarsvolta.png); }
.mastodon { background-image: url(../assets/bands/mastodon.png); }
.megadeth { background-image: url(../assets/bands/megadeth.png); }
.mercyfulfate { background-image: url(../assets/bands/mercyfulfate.png); }
.misfits { background-image: url(../assets/bands/misfits.png); }
.motleycrue { background-image: url(../assets/bands/motleycrue.png); }
.mgk { background-image: url(../assets/bands/mgk.png); }
.meshuggah { background-image: url(../assets/bands/meshuggah.png); }
.mudvayne { background-image: url(../assets/bands/mudvayne.png); }
.ministry { background-image: url(../assets/bands/ministry.png); }
.mykur { background-image: url(../assets/bands/mykur.png); }
.miw { background-image: url(../assets/bands/miw.png); }
.msp { background-image: url(../assets/bands/msp.png); }
.mogwai { background-image: url(../assets/bands/mogwai.png); }
.mydyingbride { background-image: url(../assets/bands/mydyingbride.png); }
.maneskin { background-image: url(../assets/bands/maneskin.png); }
.marina { background-image: url(../assets/bands/marina.png); }
.microwave { background-image: url(../../assets/bands/microwave.png); }
.modernbaseball { background-image: url(../../assets/bands/modernbaseball.png); }

.neckdeep { background-image: url(../../assets/bands/neckdeep.png); }
.nfg { background-image: url(../../assets/bands/nfg.png); }
.nineinchnails { background-image: url(../assets/bands/nineinchnails.png); }
.northlane { background-image: url(../../assets/bands/northlane.png); }
.nothingnowhere { background-image: url(../../assets/bands/nothingnowhere.png); }
.novatwins { background-image: url(../../assets/bands/novatwins.png); }
.nofx { background-image: url(../assets/bands/nofx.png); }
.napalmdeath { background-image: url(../assets/bands/napalmdeath.png); }
.necrophagist { background-image: url(../assets/bands/necrophagist.png); }
.neurosis { background-image: url(../assets/bands/neurosis.png); }
.nodoubt { background-image: url(../assets/bands/nodoubt.png); }
.nickelback { background-image: url(../assets/bands/nickelback.png); }
.novatwins { background-image: url(../assets/bands/novatwins.png); }
.nothingnowhere { background-image: url(../assets/bands/nothingnowhere.png); }
.the1975 { background-image: url(../assets/bands/the1975.png); }
.nightwish { background-image: url(../assets/bands/nightwish.png); }

.oasis { background-image: url(../assets/bands/oasis.png); }
.oathbreaker { background-image: url(../assets/bands/oathbreaker.png); }
.theoffspring { background-image: url(../../assets/bands/theoffspring.png); }
.omam { background-image: url(../assets/bands/omam.png); }
.opeth { background-image: url(../assets/bands/opeth.png); }
.ozzy { background-image: url(../assets/bands/ozzy.png); }

.palayeroyale { background-image: url(../../assets/bands/palayeroyale.png); }
.palewaves { background-image: url(../../assets/bands/palewaves.png); }
.paparoach { background-image: url(../../assets/bands/paparoach.png); }
.paramore { background-image: url(../assets/bands/paramore.png); }
.pearljam { background-image: url(../assets/bands/pearljam.png); }
.pendulum { background-image: url(../assets/bands/pendulum.png); }
.piercetheveil { background-image: url(../../assets/bands/piercetheveil.png); }
.placebo { background-image: url(../../assets/bands/placebo.png); }
.polyphia { background-image: url(../../assets/bands/polyphia.png); }
.poppy { background-image: url(../../assets/bands/poppy.png); }
.primus { background-image: url(../../assets/bands/primus.png); }
.pup { background-image: url(../../assets/bands/pup.png); }
.parkwaydrive { background-image: url(../assets/bands/parkwaydrive.png); }
.pixies { background-image: url(../assets/bands/pixies.png); }
.poison { background-image: url(../assets/bands/poison.png); }
.por { background-image: url(../assets/bands/por.png); }
.periphery { background-image: url(../assets/bands/periphery.png); }
.piercetheveil { background-image: url(../assets/bands/piercetheveil.png); }
.powerwolf { background-image: url(../assets/bands/powerwolf.png); }
.theprettyreckless { background-image: url(../assets/bands/theprettyreckless.png); }
.pil { background-image: url(../assets/bands/pil.png); }
.paradiselost { background-image: url(../assets/bands/paradiselost.png); }
.puddleofmudd { background-image: url(../assets/bands/puddleofmudd.png); }
.pantera { background-image: url(../assets/bands/pantera.png); }
.perturbator { background-image: url(../assets/bands/perturbator.png); }
.theprodigy { background-image: url(../assets/bands/theprodigy.png); }
.porcupinetree { background-image: url(../assets/bands/porcupinetree.png); }
.postalservice { background-image: url(../../assets/bands/postalservice.png); }
.partycannon { background-image: url(../assets/bands/partycannon.png); }

.qotsa { background-image: url(../assets/bands/qotsa.png); }

.radiohead { background-image: url(../assets/bands/radiohead.png); }
.ratm { background-image: url(../assets/bands/ratm.png); }
.ragingspeedhorn { background-image: url(../../assets/bands/ragingspeedhorn.png); }
.rammstein { background-image: url(../assets/bands/rammstein.png); border-top: 1px solid transparent; }
.rancid { background-image: url(../../assets/bands/rancid.png); }
.rhcp { background-image: url(../assets/bands/rhcp.png); }
.refused { background-image: url(../../assets/bands/refused.png); }
.rivalschools { background-image: url(../../assets/bands/rivalschools.png); }
.riseagainst { background-image: url(../../assets/bands/riseagainst.png); }
.royalblood { background-image: url(../../assets/bands/royalblood.png); }
.rivalsons { background-image: url(../assets/bands/rivalsons.png); }
.robzombie { background-image: url(../assets/bands/robzombie.png); }
.runthejewels { background-image: url(../assets/bands/runthejewels.png); }
.ragingspeedhorn { background-image: url(../assets/bands/ragingspeedhorn.png); }
.russiancircles { background-image: url(../assets/bands/russiancircles.png); }
.rina { background-image: url(../assets/bands/rina.png); }

.scowl { background-image: url(../../assets/bands/scowl.png); }
.soia { background-image: url(../../assets/bands/soia.png); }
.sikth { background-image: url(../../assets/bands/sikth.png); }
.skindred { background-image: url(../../assets/bands/skindred.png); }
.stp { background-image: url(../../assets/bands/stp.png); }
.sleep { background-image: url(../../assets/bands/sleep.png); }
.sleeptoken { background-image: url(../../assets/bands/sleeptoken.png); }
.sws { background-image: url(../../assets/bands/sws.png); }
.slipknot { background-image: url(../assets/bands/slipknot.png); }
.softplay { background-image: url(../../assets/bands/softplay.png); }
.speed { background-image: url(../../assets/bands/speed.png); }
.spiritbox { background-image: url(../../assets/bands/spiritbox.png); }
.staticdress { background-image: url(../../assets/bands/staticdress.png); }
.tssf { background-image: url(../../assets/bands/tssf.png); }
.sftp { background-image: url(../../assets/bands/sftp.png); }
.thestreets { background-image: url(../../assets/bands/thestreets.png); }
.suicidaltendencies { background-image: url(../../assets/bands/suicidaltendencies.png); }
.suicideboys { background-image: url(../../assets/bands/suicideboys.png); }
.sylosis { background-image: url(../../assets/bands/sylosis.png); }
.soad { background-image: url(../assets/bands/soad.png); }
.sabaton { background-image: url(../assets/bands/sabaton.png); }
.shinedown { background-image: url(../assets/bands/shinedown.png); }
.tsp { background-image: url(../assets/bands/tsp.png); }
.staind { background-image: url(../assets/bands/staind.png); }
.steelpanther { background-image: url(../assets/bands/steelpanther.png); }
.stonesour { background-image: url(../assets/bands/stonesour.png); }
.sum41 { background-image: url(../assets/bands/sum41.png); }
.saxon { background-image: url(../assets/bands/saxon.png); }
.scarlxrd { background-image: url(../assets/bands/scarlxrd.png); }
.satyricon { background-image: url(../assets/bands/satyricon.png); }
.sepultura { background-image: url(../assets/bands/sepultura.png); }
.suicidesilence { background-image: url(../assets/bands/suicidesilence.png); }
.skynd { background-image: url(../assets/bands/skynd.png); }
.suicideboys { background-image: url(../assets/bands/suicideboys.png); }
.slash { background-image: url(../assets/bands/slash.png); }
.sevendust { background-image: url(../assets/bands/sevendust.png); }
.silverchair { background-image: url(../assets/bands/silverchair.png); }
.slayer { background-image: url(../assets/bands/slayer.png); }
.scorpions { background-image: url(../assets/bands/scorpions.png); }
.sleeptoken { background-image: url(../assets/bands/sleeptoken.png); }
.skunkanansie { background-image: url(../assets/bands/skunkanansie.png); }
.skints { background-image: url(../../assets/bands/skints.png); }

.therapy { background-image: url(../../assets/bands/therapy.png); }
.thrice { background-image: url(../../assets/bands/thrice.png); }
.thrown { background-image: url(../../assets/bands/thrown.png); }
.toucheamore { background-image: url(../../assets/bands/toucheamore.png); }
.tool { background-image: url(../assets/bands/tool.png); }
.trashboat { background-image: url(../../assets/bands/trashboat.png); }
.trophyeyes { background-image: url(../../assets/bands/trophyeyes.png); }
.turnstile { background-image: url(../../assets/bands/turnstile.png); }
.twinatlantic { background-image: url(../../assets/bands/twinatlantic.png); }
.twintemple { background-image: url(../../assets/bands/twintemple.png); }
.tenaciousd { background-image: url(../assets/bands/tenaciousd.png); }
.trivium { background-image: url(../assets/bands/trivium.png); }
.thunder { background-image: url(../assets/bands/thunder.png); }
.testament { background-image: url(../assets/bands/testament.png); }
.thyartismurder { background-image: url(../assets/bands/thyartismurder.png); }
.tesseract { background-image: url(../assets/bands/tesseract.png); }
.twentyonepilots { background-image: url(../assets/bands/21pilots.png); }
.twintemple { background-image: url(../assets/bands/twintemple.png); }
.thirtystm { background-image: url(../assets/bands/30stm.png); }

.uncleacid { background-image: url(../../assets/bands/uncleacid.png); }
.underoath { background-image: url(../../assets/bands/underoath.png); }
.theused { background-image: url(../../assets/bands/theused.png); }

.veilofmaya { background-image: url(../assets/bands/veilofmaya.png); }
.volbeat { background-image: url(../assets/bands/volbeat.png); }
.venomprison { background-image: url(../assets/bands/venomprison.png); }

.watain { background-image: url(../assets/bands/watain.png); }
.wagewar { background-image: url(../../assets/bands/wagewar.png); }
.wargasm { background-image: url(../../assets/bands/wargasm.png); }
.thewarning { background-image: url(../assets/bands/thewarning.png); }
.waterparks { background-image: url(../../assets/bands/waterparks.png); }
.wednesday { background-image: url(../../assets/bands/wednesday.png); }
.weezer { background-image: url(../../assets/bands/weezer.png); }
.wildhearts { background-image: url(../../assets/bands/wildhearts.png); }
.wolfalice { background-image: url(../../assets/bands/wolfalice.png); }
.wss { background-image: url(../../assets/bands/wss.png); }
.withintemptation { background-image: url(../assets/bands/withintemptation.png); }
.wetleg { background-image: url(../assets/bands/wetleg.png); }
.whitesnake { background-image: url(../assets/bands/whitesnake.png); }
.whitechapel { background-image: url(../assets/bands/whitechapel.png); }
.wittr { background-image: url(../assets/bands/wittr.png); }
.twy { background-image: url(../../assets/bands/twy.png); }
.wstr { background-image: url(../../assets/bands/wstr.png); }
.wytches { background-image: url(../../assets/bands/wytches.png); }

.xcerts { background-image: url(../../assets/bands/xcerts.png); }

.yellowcard { background-image: url(../../assets/bands/yellowcard.png); }
.yma6 { background-image: url(../../assets/bands/yma6.png); }
.yungblud { background-image: url(../../assets/bands/yungblud.png); filter: brightness(1.2); }

.zealandardor { background-image: url(../assets/bands/zealandardor.png); }
.zebrahead { background-image: url(../../assets/bands/zebrahead.png); }
.zztop { background-image: url(../assets/bands/zztop.png); }

/* { background-image: url(../../assets/bands/***.png); } */

</style>