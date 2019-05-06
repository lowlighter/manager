import get from 'lodash/get';

export default class {
  /* @ngInject */
  constructor($translate, CucCloudMessage, OvhApiCloudProjectNetworkPrivate) {
    this.$translate = $translate;
    this.CucCloudMessage = CucCloudMessage;
    this.OvhApiCloudProjectNetworkPrivate = OvhApiCloudProjectNetworkPrivate;
  }

  $onInit() {
    this.isLoading = true;
    return this.getPrivateNetwork()
      .finally(() => {
        this.isLoading = false;
      });
  }

  getPrivateNetwork() {
    return this.OvhApiCloudProjectNetworkPrivate.v6().get({
      serviceName: this.projectId,
      networkId: this.networkId,
    }).$promise
      .then((network) => {
        this.network = network;
      });
  }

  deleteNetwork() {
    this.isLoading = true;
    return this.OvhApiCloudProjectNetworkPrivate.v6().delete({
      serviceName: this.projectId,
      networkId: this.networkId,
    }).$promise
      .then(() => {
        this.CucCloudMessage.success(
          this.$translate.instant('pci_projects_project_network_private_delete_success', {
            name: this.network.name,
          }),
          this.messageContainer,
        );
      })
      .catch((error) => {
        this.CucCloudMessage.error(
          this.$translate.instant('pci_projects_project_network_private_delete_error', {
            message: get(error, 'data.message'),
          }),
          this.messageContainer,
        );
      })
      .finally(() => {
        this.isLoading = false;
        this.goBack();
      });
  }
}
