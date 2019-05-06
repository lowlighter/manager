export default /* @ngInject */($stateProvider) => {
  $stateProvider
    .state('pci.projects.project.instances.instance.delete', {
      url: '/delete',
      views: {
        modal: {
          component: 'pciInstancesInstanceDelete',
        },
      },
      layout: 'modal',
      translations: {
        value: ['.'],
        format: 'json',
      },
      resolve: {
        goBack: /* @ngInject */ (goToInstances, goToInstance) => (message = false, type = 'success') => {
          if (type === 'success') {
            return goToInstances(message, type);
          }
          return goToInstance(message, type);
        },
      },
    });
};
