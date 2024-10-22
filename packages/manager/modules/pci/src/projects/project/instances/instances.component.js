import controller from './instances.controller';
import template from './instances.html';

export default {
  controller,
  template,
  bindings: {
    pciFeatureRedirect: '<',
    addInstance: '<',
    assignFloatingIp: '<',
    betaWarning: '<',
    createBackupInstance: '<',
    deleteInstance: '<',
    editInstance: '<',
    enableMonthlyBillingInstance: '<',
    endRescueInstance: '<',
    guideUrl: '<',
    guideTrackingSectionTags: '<',
    trackClick: '<',
    trackPage: '<',
    hardRebootInstance: '<',
    help: '<',
    instanceLink: '<',
    instanceId: '<',
    instances: '<',
    hasComingSoonFlavorTag: '<',
    isAdditionalIpsAvailable: '<',
    projectId: '<',
    onListParamChange: '<',
    refreshInstances: '<',
    reinstallInstance: '<',
    resumeInstance: '<',
    scheduleAutoBackup: '<',
    softRebootInstance: '<',
    startRescueInstance: '<',
    startInstance: '<',
    stopInstance: '<',
    shelveInstance: '<',
    unshelveInstance: '<',
    viewInstance: '<',
    vrack: '<',
    vrackLink: '<',
    killTasks: '<',
    steins: '<',
    customerRegions: '<',
    instancesRegions: '<',
    getStateName: '<',
    goToRegion: '<',
    floatingIpsLink: '<',
    catalog: '<',
    isGridscaleLocalzoneAvailable: '<',
    hasGridscaleLocalzoneRegion: '<',
    isInstanceLocalZoneBackupAvailable: '<',
  },
};
