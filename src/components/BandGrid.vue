<template>
  <div class="band-grid">
    <!-- Main Stage Headliners -->
    <BandSection position="main-headliner" @click="openModal('thursdayHeadliner', 'Thursday Headliner')" :band="bandPosition.thursdayHeadliner" />
    <BandSection position="main-headliner" @click="openModal('fridayHeadliner', 'Friday Headliner')" :band="bandPosition.fridayHeadliner" />
    <BandSection position="main-headliner" @click="openModal('saturdayHeadliner', 'Saturday Headliner')" :band="bandPosition.saturdayHeadliner" />
    <BandSection position="main-headliner" @click="openModal('sundayHeadliner', 'Sunday Headliner')" :band="bandPosition.sundayHeadliner" />
    <!-- Main Stage Subs -->
    <BandSection position="main-sub" @click="openModal('thursdaySub', 'Thursday Sub-Headliner')" :band="bandPosition.thursdaySub" />
    <BandSection position="main-sub" @click="openModal('fridaySub', 'Friday Sub-Headliner')" :band="bandPosition.fridaySub" />
    <BandSection position="main-sub" @click="openModal('saturdaySub', 'Saturday Sub-Headliner')" :band="bandPosition.saturdaySub" />
    <BandSection position="main-sub" @click="openModal('sundaySub', 'Sunday Sub-Headliner')" :band="bandPosition.sundaySub" />
    <!-- Main Stage Third -->
    <BandSection position="main-third" @click="openModal('thursdayThird', 'Thursday Third Down')" :band="bandPosition.thursdayThird" />
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
    <div class="main-stage-divider"></div>
    <!-- Second Stage -->
    <BandSection position="main-third" @click="openModal('thursdaySecondHeadliner', 'Thursday Second Stage Headliner')" :band="bandPosition.thursdaySecondHeadliner" />
    <BandSection position="main-third" @click="openModal('fridaySecondHeadliner', 'Friday Second Stage Headliner')" :band="bandPosition.fridaySecondHeadliner" />
    <BandSection position="main-third" @click="openModal('saturdaySecondHeadliner', 'Saturday Second Stage Headliner')" :band="bandPosition.saturdaySecondHeadliner" />
    <BandSection position="main-third" @click="openModal('sundaySecondHeadliner', 'Sunday Second Stage Headliner')" :band="bandPosition.sundaySecondHeadliner" />
    <BandSection position="second-sub" @click="openModal('thursdaySecondSub', 'Thursday Second Stage Sub')" :band="bandPosition.thursdaySecondSub" />
    <BandSection position="second-sub" @click="openModal('fridaySecondSub', 'Friday Second Stage Sub')" :band="bandPosition.fridaySecondSub" />
    <BandSection position="second-sub" @click="openModal('saturdaySecondSub', 'Saturday Second Stage Sub')" :band="bandPosition.saturdaySecondSub" />
    <BandSection position="second-sub" @click="openModal('sundaySecondSub', 'Sunday Second Stage Sub')" :band="bandPosition.sundaySecondSub" />
    <BandInput size="large" />
    <BandInput size="large" />
    <BandInput size="large" />
    <BandInput size="large" />
    <BandInput size="medium" />
    <BandInput size="medium" />
    <BandInput size="medium" />
    <BandInput size="medium" />
    <BandInput size="medium" />
    <BandInput size="medium" />
    <BandInput size="medium" />
    <BandInput size="medium" />
    <div class="second-stage-divider"></div>
    <div class="second-stage-divider"></div>
    <div class="second-stage-divider"></div>
    <div class="second-stage-divider"></div>
    <!-- <BandInput /> -->
    <!-- Third Stage -->
    <BandSection position="second-sub" @click="openModal('thursdayThirdStage', 'Thursday Third Stage Headliner')" :band="bandPosition.thursdayThirdStage" />
    <BandSection position="second-sub" @click="openModal('fridayThirdStage', 'Friday Third Stage Headliner')" :band="bandPosition.fridayThirdStage" />
    <BandSection position="second-sub" @click="openModal('saturdayThirdStage', 'Saturday Third Stage Headliner')" :band="bandPosition.saturdayThirdStage" />
    <BandSection position="second-sub" @click="openModal('sundayThirdStage', 'Sunday Third Stage Headliner')" :band="bandPosition.sundayThirdStage" />
    <BandInput size="small" />
    <BandInput size="small" />
    <BandInput size="small" />
    <BandInput size="small" />
    <BandInput size="small" />
    <BandInput size="small" />
    <BandInput size="small" />
    <BandInput size="small" />
    <BandInput size="small" />
    <BandInput size="small" />
    <BandInput size="small" />
    <BandInput size="small" />
    <div class="third-stage-divider"></div>
    <div class="third-stage-divider"></div>
    <div class="third-stage-divider"></div>
    <div class="third-stage-divider"></div>
    <!-- Fourth Stage -->
    <BandSection position="second-sub" @click="openModal('thursdayFourthStage', 'Thursday Fourth Stage Headliner')" :band="bandPosition.thursdayFourthStage" />
    <BandSection position="second-sub" @click="openModal('fridayFourthStage', 'Friday Fourth Stage Headliner')" :band="bandPosition.fridayFourthStage" />
    <BandSection position="second-sub" @click="openModal('saturdayFourthStage', 'Saturday Fourth Stage Headliner')" :band="bandPosition.saturdayFourthStage" />
    <BandSection position="second-sub" @click="openModal('sundayFourthStage', 'Sunday Fourth Stage Headliner')" :band="bandPosition.sundayFourthStage" />
    <BandInput size="small" />
    <BandInput size="small" />
    <BandInput size="small" />
    <BandInput size="small" />
    <BandInput size="small" />
    <BandInput size="small" />
    <BandInput size="small" />
    <BandInput size="small" />
    <BandInput size="small" />
    <BandInput size="small" />
    <BandInput size="small" />
    <BandInput size="small" />

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
  grid-template-columns: auto auto auto auto;
  grid-gap: 5px;
  padding: 210px 12px 0 10px;
  height: 100px;
  width: 687px;
}
.band-grid div:hover {
  border: solid pink 1px;
}

.main-stage-divider {
  height: 10px;
}
.second-stage-divider {
  height: 8px;
}
.third-stage-divider {
  height: 4px;
}
.main-stage-divider:hover, .second-stage-divider:hover, .third-stage-divider:hover {
  border: none !important;
}

/* headliners */

.acdc { background-image: url(../assets/bands/acdc.png); }
.adtr { background-image: url(../assets/bands/adtr.png); }
.aerosmith { background-image: url(../assets/bands/aerosmith.png); }
.alterbridge { background-image: url(../assets/bands/alterbridge.png); }
.a7x { background-image: url(../assets/bands/a7x.png); }
.badreligion { background-image: url(../assets/bands/badreligion.png); }
.biffyclyro { background-image: url(../assets/bands/biffyclyro.png); }
.blink182 { background-image: url(../assets/bands/blink182.png); }
.bonjovi { background-image: url(../assets/bands/bonjovi.png); }
.bmth { background-image: url(../assets/bands/bmth.png); }
.thecure { background-image: url(../assets/bands/thecure.png); }
.defleppard { background-image: url(../assets/bands/defleppard.png); }
.foofighters { background-image: url(../assets/bands/foofighters.png); }
.ghost { background-image: url(../assets/bands/ghost.png); }
.greenday { background-image: url(../assets/bands/greenday.png); }
.gnr { background-image: url(../assets/bands/gnr.png); }
.ironmaiden { background-image: url(../assets/bands/ironmaiden.png); }
.kiss { background-image: url(../assets/bands/kiss.png); }
.metallica { background-image: url(../assets/bands/metallica.png); }
.muse { background-image: url(../assets/bands/muse.png); }
.mcr { background-image: url(../assets/bands/mcr.png); }
.nineinchnails { background-image: url(../assets/bands/nineinchnails.png); }
.paramore { background-image: url(../assets/bands/paramore.png); }
.pearljam { background-image: url(../assets/bands/pearljam.png); }
.qotsa { background-image: url(../assets/bands/qotsa.png); }
.radiohead { background-image: url(../assets/bands/radiohead.png); }
.ratm { background-image: url(../assets/bands/ratm.png); }
.rammstein { background-image: url(../assets/bands/rammstein.png); border-top: 1px solid transparent; }
.rhcp { background-image: url(../assets/bands/rhcp.png); }
.slipknot { background-image: url(../assets/bands/slipknot.png); }
.soad { background-image: url(../assets/bands/soad.png); }
.tool { background-image: url(../assets/bands/tool.png); }

/* subs */

.afi { background-image: url(../assets/bands/afi.png); }
.againstme { background-image: url(../assets/bands/againstme.png); }
.alicecooper { background-image: url(../assets/bands/alicecooper.png); }
.aliceinchains { background-image: url(../assets/bands/aliceinchains.png); }
.alltimelow { background-image: url(../assets/bands/alltimelow.png); }
.amonamarth { background-image: url(../assets/bands/amonamarth.png); }
.architects { background-image: url(../assets/bands/architects.png); }
.babymetal { background-image: url(../assets/bands/babymetal.png); }
.billieeilish { background-image: url(../assets/bands/billieeilish.png); }
.billytalent { background-image: url(../assets/bands/billytalent.png); }
.bsc { background-image: url(../assets/bands/bsc.png); }
.bfmv { background-image: url(../assets/bands/bfmv.png); }
.clutch { background-image: url(../assets/bands/clutch.png); }
.converge { background-image: url(../assets/bands/converge.png); }
.deftones { background-image: url(../assets/bands/deftones.png); }
.disturbed { background-image: url(../assets/bands/disturbed.png); }
.donbroco { background-image: url(../assets/bands/donbroco.png); }
.entershikari { background-image: url(../assets/bands/entershikari.png); }
.evanescence { background-image: url(../assets/bands/evanescence.png); }
.fob { background-image: url(../assets/bands/fob.png); }
.fnm { background-image: url(../assets/bands/fnm.png); }
.ffdp { background-image: url(../assets/bands/5fdp.png); }
.fcandtherattlesnakes { background-image: url(../assets/bands/fc&therattlesnakes.png); }
.gojira { background-image: url(../assets/bands/gojira.png); }
.halestorm { background-image: url(../assets/bands/halestorm.png); }
.hollywoodvampires { background-image: url(../assets/bands/hollywoodvampires.png); }
.idles { background-image: url(../assets/bands/idles.png); }
.jackwhite { background-image: url(../assets/bands/jackwhite.png); }
.janesaddiction { background-image: url(../assets/bands/janesaddiction.png); }
.judaspriest { background-image: url(../assets/bands/judaspriest.png); }
.kse { background-image: url(../assets/bands/kse.png); }
.korn { background-image: url(../assets/bands/korn.png); }
.limpbizkit { background-image: url(../assets/bands/limpbizkit.png); }
.log { background-image: url(../assets/bands/log.png); }
.machinehead { background-image: url(../assets/bands/machinehead.png); }
.marilynmanson { background-image: url(../assets/bands/marilynmanson.png); }
.marmozets { background-image: url(../assets/bands/marmozets.png); }
.themarsvoltasub { background-image: url(../assets/bands/themarsvolta.png); }
.mastodon { background-image: url(../assets/bands/mastodon.png); }
.megadeth { background-image: url(../assets/bands/megadeth.png); }
.mercyfulfate { background-image: url(../assets/bands/mercyfulfate.png); }
.misfits { background-image: url(../assets/bands/misfits.png); }
.motleycrue { background-image: url(../assets/bands/motleycrue.png); }
.nightwish { background-image: url(../assets/bands/nightwish.png); }
.theoffspring { background-image: url(../assets/bands/theoffspring.png); }
.paparoach { background-image: url(../assets/bands/paparoach.png); }
.parkwaydrive { background-image: url(../assets/bands/parkwaydrive.png); }
.pixies { background-image: url(../assets/bands/pixies.png); }
.placebo { background-image: url(../assets/bands/placebo.png); }
.poison { background-image: url(../assets/bands/poison.png); }
.primus { background-image: url(../assets/bands/primus.png); }
.por { background-image: url(../assets/bands/por.png); }
.rancid { background-image: url(../assets/bands/rancid.png); }
.rivalsons { background-image: url(../assets/bands/rivalsons.png); }
.robzombie { background-image: url(../assets/bands/robzombie.png); }
.royalblood { background-image: url(../assets/bands/royalblood.png); }
.runthejewels { background-image: url(../assets/bands/runthejewels.png); }
.sabaton { background-image: url(../assets/bands/sabaton.png); }
.shinedown { background-image: url(../assets/bands/shinedown.png); }
.tsp { background-image: url(../assets/bands/tsp.png); }
.staind { background-image: url(../assets/bands/staind.png); }
.steelpanther { background-image: url(../assets/bands/steelpanther.png); }
.stonesour { background-image: url(../assets/bands/stonesour.png); }
.sum41 { background-image: url(../assets/bands/sum41.png); }
.tenaciousd { background-image: url(../assets/bands/tenaciousd.png); }
.trivium { background-image: url(../assets/bands/trivium.png); }
.volbeat { background-image: url(../assets/bands/volbeat.png); }
.weezer { background-image: url(../assets/bands/weezer.png); }
.withintemptation { background-image: url(../assets/bands/withintemptation.png); }
.wolfalice { background-image: url(../assets/bands/wolfalice.png); }
.zztop { background-image: url(../assets/bands/zztop.png);border-top: }

/* midsize */

.apc { background-image: url(../assets/bands/apc.png); }
.airbourne { background-image: url(../assets/bands/airbourne.png); }
.alkalinetrio { background-image: url(../assets/bands/alkalinetrio.png); }
.alestorm { background-image: url(../assets/bands/alestorm.png); }
.alexisonfire { background-image: url(../assets/bands/alexisonfire.png); }
.allthatremains { background-image: url(../assets/bands/allthatremains.png); }
.ava { background-image: url(../assets/bands/ava.png); }
.archenemy { background-image: url(../assets/bands/archenemy.png); }
.annihilator { background-image: url(../assets/bands/annihilator.png); }
.aa { background-image: url(../assets/bands/aa.png); }
.augustburnsred { background-image: url(../assets/bands/augustburnsred.png); }
.avril { background-image: url(../assets/bands/avril.png); }
.beartooth { background-image: url(../assets/bands/beartooth.png); }
.behemoth { background-image: url(../assets/bands/behemoth.png); }
.blackflag { background-image: url(../assets/bands/blackflag.png); }
.blacklabelsociety { background-image: url(../assets/bands/blacklabelsociety.png); }
.bvb { background-image: url(../assets/bands/bvb.png); }
.bostonmanor { background-image: url(../assets/bands/bostonmanor.png);  }
.bfs { background-image: url(../assets/bands/bfs.png); }
.burytomorrow { background-image: url(../assets/bands/burytomorrow.png); }
.chvrches { background-image: url(../assets/bands/chvrches.png); }
.candc { background-image: url(../assets/bands/candc.png); }
.creeper { background-image: url(../assets/bands/creeper.png); }
.thedarkness { background-image: url(../assets/bands/thedarkness.png); }
.devintownsend { background-image: url(../assets/bands/devintownsend.png); }
.thedistillers { background-image: url(../assets/bands/thedistillers.png); }
.down { background-image: url(../assets/bands/down.png); }
.dropkickmurphys { background-image: url(../assets/bands/dropkickmurphys.png); }
.etid { background-image: url(../assets/bands/etid.png); }
.frankturner { background-image: url(../assets/bands/frankturner.png); }
.ffaf { background-image: url(../assets/bands/ffaf.png); }
.theghostinside { background-image: url(../assets/bands/theghostinside.png); }
.ghostemane {  background-image: url(../assets/bands/ghostemane.png); }
.gogolbordello { background-image: url(../assets/bands/gogolbordello.png); }
.goodcharlotte { background-image: url(../assets/bands/goodcharlotte.png); }
.gvf { background-image: url(../assets/bands/gvf.png); }
.hatebreed { background-image: url(../assets/bands/hatebreed.png); }
.thehunna { background-image: url(../assets/bands/thehunna.png); }
.incubus { background-image: url(../assets/bands/incubus.png); }
.jawbreaker { background-image: url(../assets/bands/jawbreaker.png); }
.jew { background-image: url(../assets/bands/jew.png); }
.kgatlw { background-image: url(../assets/bands/kgatlw.png); }
.mgk { background-image: url(../assets/bands/mgk.png); }
.themarsvolta { background-image: url(../assets/bands/themarsvolta.png); }
.menzingers { background-image: url(../assets/bands/menzingers.png); }
.meshuggah { background-image: url(../assets/bands/meshuggah.png); }
.mudvayne { background-image: url(../assets/bands/mudvayne.png); }
.neckdeep { background-image: url(../assets/bands/neckdeep.png); }
.nfg { background-image: url(../assets/bands/nfg.png); }
.nofx { background-image: url(../assets/bands/nofx.png); }
.omam { background-image: url(../assets/bands/omam.png); }
.opeth { background-image: url(../assets/bands/opeth.png); }
.palewaves { background-image: url(../assets/bands/palewaves.png); }
.pendulum { background-image: url(../assets/bands/pendulum.png); }
.periphery { background-image: url(../assets/bands/periphery.png); }
.piercetheveil { background-image: url(../assets/bands/piercetheveil.png); }
.powerwolf { background-image: url(../assets/bands/powerwolf.png); }
.theprettyreckless { background-image: url(../assets/bands/theprettyreckless.png); }
.pil { background-image: url(../assets/bands/pil.png); }
.refused { background-image: url(../assets/bands/refused.png); }
.riseagainst { background-image: url(../assets/bands/riseagainst.png); }
.saxon { background-image: url(../assets/bands/saxon.png); }
.scarlxrd { background-image: url(../assets/bands/scarlxrd.png); }
.skindred { background-image: url(../assets/bands/skindred.png); }
.sws { background-image: url(../assets/bands/sws.png); }
.tssf { background-image: url(../assets/bands/tssf.png); }
.thunder { background-image: url(../assets/bands/thunder.png); }
.trophyeyes { background-image: url(../assets/bands/trophyeyes.png); }
.wss { background-image: url(../assets/bands/wss.png); }
.wildhearts { background-image: url(../assets/bands/wildhearts.png); }
.yma6 { background-image: url(../assets/bands/yma6.png); }
.yungblud { background-image: url(../assets/bands/yungblud.png); }
.zebrahead { background-image: url(../assets/bands/zebrahead.png); }

/* smallsize */

.alcest { background-image: url(../assets/bands/alcest.png); }
.alienweaponry { background-image: url(../assets/bands/alienweaponry.png); }
.anaalnathrakh { background-image: url(../assets/bands/anaalnathrakh.png); }
.andrewwk { background-image: url(../assets/bands/andrewwk.png); }
.anthrax { background-image: url(../assets/bands/anthrax.png); }
.aild { background-image: url(../assets/bands/aild.png); }
.tbdm { background-image: url(../assets/bands/tbdm.png); }
.theblackqueen { background-image: url(../assets/bands/theblackqueen.png); }
.cancerbats { background-image: url(../assets/bands/cancerbats.png); }
.carpenterbrut { background-image: url(../assets/bands/carpenterbrut.png); }
.codeorange { background-image: url(../assets/bands/codeorange.png); }
.cultofluna { background-image: url(../assets/bands/cultofluna.png); }
.darkesthour { background-image: url(../assets/bands/darkesthour.png); }
.deicide { background-image: url(../assets/bands/deicide.png); }
.dimmuborgir { background-image: url(../assets/bands/dimmuborgir.png); }
.dyingfetus { background-image: url(../assets/bands/dyingfetus.png); }
.electricwizard { background-image: url(../assets/bands/electricwizard.png); }
.epica { background-image: url(../assets/bands/epica.png); }
.evilscarecrow { background-image: url(../assets/bands/evilscarecrow.png); }
.ghostwriters { background-image: url(../assets/bands/ghostwriters.png); }
.helloween { background-image: url(../assets/bands/helloween.png); }
.ho99o9 { background-image: url(../assets/bands/ho99o9.png); }
.inme { background-image: url(../assets/bands/inme.png); }
.kamelot { background-image: url(../assets/bands/kamelot.png); }
.killingjoke { background-image: url(../assets/bands/killingjoke.png); }
.kreator { background-image: url(../assets/bands/kreator.png); }
.lindemann { background-image: url(../assets/bands/lindemann.png); }
.ministry { background-image: url(../assets/bands/ministry.png); }
.monuments { background-image: url(../assets/bands/monuments.png); }
.mrbungle { background-image: url(../assets/bands/mrbungle.png); }
.municipalwaste { background-image: url(../assets/bands/municipalwaste.png); }
.mykur { background-image: url(../assets/bands/mykur.png); }
.napalmdeath { background-image: url(../assets/bands/napalmdeath.png); }
.necrophagist { background-image: url(../assets/bands/necrophagist.png); }
.neurosis { background-image: url(../assets/bands/neurosis.png); }
.oathbreaker { background-image: url(../assets/bands/oathbreaker.png); }
.paradiselost { background-image: url(../assets/bands/paradiselost.png); }
.puddleofmudd { background-image: url(../assets/bands/puddleofmudd.png); }
.ragingspeedhorn { background-image: url(../assets/bands/ragingspeedhorn.png); }
.russiancircles { background-image: url(../assets/bands/russiancircles.png); }
.satyricon { background-image: url(../assets/bands/satyricon.png); }
.sepultura { background-image: url(../assets/bands/sepultura.png); }
.soia { background-image: url(../assets/bands/soia.png); }
.sikth { background-image: url(../assets/bands/sikth.png); }
.spiritbox { background-image: url(../assets/bands/spiritbox.png); }
.sftp { background-image: url(../assets/bands/sftp.png); }
.suicidaltendencies { background-image: url(../assets/bands/suicidaltendencies.png); }
.suicidesilence { background-image: url(../assets/bands/suicidesilence.png); }
.sylosis { background-image: url(../assets/bands/sylosis.png); }
.testament { background-image: url(../assets/bands/testament.png); }
.therapy { background-image: url(../assets/bands/therapy.png); }
.thyartismurder { background-image: url(../assets/bands/thyartismurder.png); }
.venomprison { background-image: url(../assets/bands/venomprison.png); }
.watain { background-image: url(../assets/bands/watain.png); }

.malevolence { background-image: url(../assets/bands/malevolence.png); }
.arcticmonkeys { background-image: url(../assets/bands/arcticmonkeys.png); }
.jinjer { background-image: url(../assets/bands/jinjer.png); }
.maneskin { background-image: url(../assets/bands/maneskin.png); }
.turnstile { background-image: url(../assets/bands/turnstile.png); }
.ozzy { background-image: url(../assets/bands/ozzy.png); }
.fugazi { background-image: url(../assets/bands/fugazi.png); }
.fontainesdc { background-image: url(../assets/bands/fontainesdc.png); }
.twentyonepilots { background-image: url(../assets/bands/21pilots.png); }
.linkinpark { background-image: url(../assets/bands/linkinpark.png); }
.theprodigy { background-image: url(../assets/bands/theprodigy.png); }
.zealandardor { background-image: url(../assets/bands/zealandardor.png); }
.kendrick { background-image: url(../assets/bands/kendrick.png); }
.scorpions { background-image: url(../assets/bands/scorpions.png); }
.dreamtheater { background-image: url(../assets/bands/dreamtheater.png); }
.wargasm { background-image: url(../assets/bands/wargasm.png); }
.eminem { background-image: url(../assets/bands/eminem.png); }
.carcass { background-image: url(../assets/bands/carcass.png); }
.porcupinetree { background-image: url(../assets/bands/porcupinetree.png); }
.hollywoodundead { background-image: url(../assets/bands/hollywoodundead.png); }
.electriccallboy { background-image: url(../assets/bands/electriccallboy.png); }
.gecs { background-image: url(../assets/bands/100gecs.png); }
.holdingabsence { background-image: url(../assets/bands/holdingabsence.png); }
.cof { background-image: url(../assets/bands/cof.png); }
.foals { background-image: url(../assets/bands/foals.png); }
.imaginedragons { background-image: url(../assets/bands/imaginedragons.png); }
.nickelback { background-image: url(../assets/bands/nickelback.png); }
.wittr { background-image: url(../assets/bands/wittr.png); }
.ltj { background-image: url(../assets/bands/ltj.png); }
.rina { background-image: url(../assets/bands/rina.png); }
.wetleg { background-image: url(../assets/bands/wetleg.png); }
.whitesnake { background-image: url(../assets/bands/whitesnake.png); }
.feeder { background-image: url(../assets/bands/feeder.png); }
.interrupters { background-image: url(../assets/bands/interrupters.png); }
.kidkapichi { background-image: url(../assets/bands/kidkapichi.png); }
.msp { background-image: url(../assets/bands/msp.png); }
.mogwai { background-image: url(../assets/bands/mogwai.png); }
.sleeptoken { background-image: url(../assets/bands/sleeptoken.png); }
.staticdress { background-image: url(../assets/bands/staticdress.png); }
.thrice { background-image: url(../assets/bands/thrice.png); }
.theused { background-image: url(../assets/bands/theused.png); }
.skunkanansie { background-image: url(../assets/bands/skunkanansie.png); }
.heck { background-image: url(../assets/bands/heck.png); }
.twintemple { background-image: url(../assets/bands/twintemple.png); }
.baroness { background-image: url(../assets/bands/baroness.png); }
.silverchair { background-image: url(../assets/bands/silverchair.png); }
.lacunacoil { background-image: url(../assets/bands/lacunacoil.png); }
.inflames { background-image: url(../assets/bands/inflames.png); }
.slayer { background-image: url(../assets/bands/slayer.png); }
.pantera { background-image: url(../assets/bands/pantera.png); }
.thirtystm { background-image: url(../assets/bands/30stm.png); }
.gorillaz { background-image: url(../assets/bands/gorillaz.png); }
.oasis { background-image: url(../assets/bands/oasis.png); }

</style>
