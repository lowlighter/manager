import { Node, NodeTag } from '../node';
import illustration from '@/assets/images/sidebar/public-cloud.png';
import OvhProductName from '@ovh-ux/ovh-product-icons/utils/OvhProductNameEnum';

export const PUBLICCLOUD_UNIVERSE_ID = 'pci';

export const pciNode: Node = {
  id: PUBLICCLOUD_UNIVERSE_ID,
  idAttr: 'pci-link',
  translation: 'sidebar_pci',
  shortTranslation: 'sidebar_pci_short',
  illustration,
  universe: PUBLICCLOUD_UNIVERSE_ID,
  svgIcon: OvhProductName.GLOBE,
  features: ['public-cloud'],
  forceVisibility: true,
  routing: {
    application: 'public-cloud',
    hash: '#/pci/projects/{projectId}',
  },
};

pciNode.children = [
  {
    id: PUBLICCLOUD_UNIVERSE_ID,
    idAttr: 'pci-link',
    universe: PUBLICCLOUD_UNIVERSE_ID,
    translation: 'sidebar_pci',
    shortTranslation: 'sidebar_pci_short',
    illustration,
    hidden: true,
    features: ['public-cloud'],
    routing: {
      application: 'public-cloud',
      hash: '#/pci/projects/{projectId}',
    },
  },
  {
    id: PUBLICCLOUD_UNIVERSE_ID,
    idAttr: 'pci-link',
    universe: PUBLICCLOUD_UNIVERSE_ID,
    translation: 'sidebar_pci',
    shortTranslation: 'sidebar_pci_short',
    illustration,
    hidden: true,
    features: ['public-cloud'],
    routing: {
      application: 'public-cloud',
      hash: '',
    },
  },
  {
    id: 'pci-compute',
    idAttr: 'pci-compute-link',
    universe: PUBLICCLOUD_UNIVERSE_ID,
    translation: 'sidebar_pci_compute',
    features: ['instance'],
    forceVisibility: true,
    children: [
      {
        id: 'pci-instances',
        idAttr: 'pci-instances-link',
        universe: PUBLICCLOUD_UNIVERSE_ID,
        translation: 'sidebar_pci_instances',
        serviceType: 'CLOUD_PROJECT_INSTANCE',
        routing: {
          application: 'public-cloud',
          hash: '#/pci/projects/{projectId}/instances',
        },
        features: ['instance'],
        forceVisibility: true,
      },
    ],
  },
  {
    id: 'pci-storage',
    idAttr: 'pci-storage-link',
    universe: PUBLICCLOUD_UNIVERSE_ID,
    translation: 'sidebar_pci_storage',
    features: [
      'block-storage',
      'object-storage',
      'snapshot',
      'volume-backup',
      'instance-backup',
      'archive',
      'cold-archive',
    ],
    forceVisibility: true,
    children: [
      {
        id: 'pci-block-storage',
        idAttr: 'pci-block-storage-link',
        universe: PUBLICCLOUD_UNIVERSE_ID,
        translation: 'sidebar_pci_block_storage',
        serviceType: 'CLOUD_PROJECT_VOLUME',
        routing: {
          application: 'public-cloud',
          hash: '#/pci/projects/{projectId}/storages/blocks',
        },
        features: ['block-storage'],
        forceVisibility: true,
      },
      {
        id: 'pci-object-storage',
        idAttr: 'pci-object-storage-link',
        universe: PUBLICCLOUD_UNIVERSE_ID,
        translation: 'sidebar_pci_object_storage',
        serviceType: 'CLOUD_PROJECT_STORAGE_OBJECTS',
        routing: {
          application: 'public-cloud',
          hash: '#/pci/projects/{projectId}/storages/objects',
        },
        features: ['object-storage'],
        forceVisibility: true,
      },
      {
        id: 'pci-cloud-archive',
        idAttr: 'pci-cloud-archive-link',
        universe: PUBLICCLOUD_UNIVERSE_ID,
        translation: 'sidebar_pci_cloud_archive',
        serviceType: 'CLOUD_PROJECT_STORAGE_ARCHIVES',
        routing: {
          application: 'public-cloud',
          hash: '#/pci/projects/{projectId}/storages/cloud-archives',
        },
        features: ['archive'],
        forceVisibility: true,
      },
      {
        id: 'pci-cold-archive',
        idAttr: 'pci-cold-archive-link',
        universe: PUBLICCLOUD_UNIVERSE_ID,
        translation: 'sidebar_pci_cold_archive',
        serviceType: 'CLOUD_PROJECT_STORAGE_COLD_ARCHIVES',
        routing: {
          application: 'public-cloud',
          hash: '#/pci/projects/{projectId}/storages/cold-archive',
        },
        features: ['cold-archive'],
        forceVisibility: true,
        tag: NodeTag.NEW,
      },
      {
        id: 'pci-volume-snapshot',
        idAttr: 'pci-volume-snapshot-link',
        universe: PUBLICCLOUD_UNIVERSE_ID,
        translation: 'sidebar_pci_volume_snapshot',
        serviceType: 'CLOUD_PROJECT_VOLUME_SNAPSHOT',
        routing: {
          application: 'public-cloud',
          hash: '#/pci/projects/{projectId}/storages/volume-snapshots',
        },
        features: ['snapshot'],
        forceVisibility: true,
      },
      {
        id: 'pci-volume-backup',
        idAttr: 'pci-volume-backup-link',
        universe: PUBLICCLOUD_UNIVERSE_ID,
        translation: 'sidebar_pci_volume_backup',
        serviceType: 'CLOUD_PROJECT_VOLUME_BACKUP',
        routing: {
          application: 'public-cloud',
          hash: '#/pci/projects/{projectId}/storages/volume-backup',
        },
        features: ['volume-backup'],
        forceVisibility: true,
        tag: NodeTag.NEW,
      },
      {
        id: 'pci-instance-backup',
        idAttr: 'pci-instance-backup-link',
        universe: PUBLICCLOUD_UNIVERSE_ID,
        translation: 'sidebar_pci_instance_backup',
        serviceType: 'CLOUD_PROJECT_SNAPSHOT',
        routing: {
          application: 'public-cloud',
          hash: '#/pci/projects/{projectId}/storages/instance-backups',
        },
        features: ['instance-backup'],
        forceVisibility: true,
      },
      {
        id: 'pci-workflow',
        idAttr: 'pci-workflow-link',
        universe: PUBLICCLOUD_UNIVERSE_ID,
        translation: 'sidebar_pci_workflow',
        serviceType: 'CLOUD_PROJECT_WORKFLOW_BACKUP',
        routing: {
          application: 'public-cloud',
          hash: '#/pci/projects/{projectId}/workflow',
        },
        features: ['workflow-management'],
        forceVisibility: true,
      },
    ],
  },
  {
    id: 'pci-network',
    idAttr: 'pci-network-link',
    universe: PUBLICCLOUD_UNIVERSE_ID,
    translation: 'sidebar_pci_network',
    features: [
      'private-network',
      'octavia-load-balancer',
      'additional-ips',
      'public-gateways',
    ],
    forceVisibility: true,
    children: [
      {
        id: 'pci-private-network',
        idAttr: 'pci-private-network-link',
        universe: PUBLICCLOUD_UNIVERSE_ID,
        translation: 'sidebar_pci_private_network',
        serviceType: 'CLOUD_PROJECT_PRIVATE_NETWORK',
        routing: {
          application: 'public-cloud',
          hash: '#/pci/projects/{projectId}/private-networks',
        },
        features: ['private-network'],
        forceVisibility: true,
      },
      {
        id: 'pci-octavia-load-balancer',
        idAttr: 'pci-octavia-load-balancer-link',
        universe: PUBLICCLOUD_UNIVERSE_ID,
        translation: 'sidebar_pci_octavia_load_balancer',
        serviceType: 'CLOUD_PROJECT_OCTAVIA_LOAD_BALANCER',
        routing: {
          application: 'public-cloud',
          hash: '#/pci/projects/{projectId}/octavia-load-balancer',
        },
        features: ['octavia-load-balancer'],
        forceVisibility: true,
        tag: NodeTag.NEW,
      },
      {
        id: 'pci-additional-ips',
        idAttr: 'pci-additional-ips-link',
        universe: PUBLICCLOUD_UNIVERSE_ID,
        translation: 'sidebar_pci_additional_ips',
        serviceType: 'CLOUD_PROJECT_ADDITIONAL_IP',
        routing: {
          application: 'public-cloud',
          hash: '#/pci/projects/{projectId}/public-ips',
        },
        features: ['additional-ips'],
        forceVisibility: true,
      },
      {
        id: 'pci-public-gateways',
        idAttr: 'pci-public-gateways-link',
        universe: PUBLICCLOUD_UNIVERSE_ID,
        translation: 'sidebar_pci_public_gateways',
        serviceType: 'CLOUD_PROJECT_PUBLIC_GATEWAYS',
        routing: {
          application: 'public-cloud',
          hash: '#/pci/projects/{projectId}/gateway',
        },
        features: ['public-gateways'],
        forceVisibility: true,
      },
    ],
  },
  {
    id: 'pci-containers',
    idAttr: 'pci-containers-link',
    universe: PUBLICCLOUD_UNIVERSE_ID,
    translation: 'sidebar_pci_containers',
    features: [
      'pci-rancher',
      'kubernetes',
      'load-balancer',
      'private-registry',
      'workflow-management',
    ],
    forceVisibility: true,
    children: [
      {
        id: 'pci-rancher',
        idAttr: 'pci-rancher-link',
        universe: PUBLICCLOUD_UNIVERSE_ID,
        translation: 'sidebar_pci_rancher',
        serviceType: 'CLOUD_PROJECT_KUBE',
        routing: {
          application: 'public-cloud',
          hash: '#/pci/projects/{projectId}/rancher',
        },
        features: ['pci-rancher'],
        forceVisibility: true,
        tag: NodeTag.NEW,
      },
      {
        id: 'pci-kubernetes',
        idAttr: 'pci-kubernetes-link',
        universe: PUBLICCLOUD_UNIVERSE_ID,
        translation: 'sidebar_pci_kubernetes',
        serviceType: 'CLOUD_PROJECT_KUBE',
        routing: {
          application: 'public-cloud',
          hash: '#/pci/projects/{projectId}/kubernetes',
        },
        features: ['kubernetes'],
        forceVisibility: true,
      },
      {
        id: 'pci-private-registry',
        idAttr: 'pci-private-registry-link',
        universe: PUBLICCLOUD_UNIVERSE_ID,
        translation: 'sidebar_pci_private_registry',
        serviceType: 'CLOUD_PROJECT_CONTAINER_REGISTRY',
        routing: {
          application: 'public-cloud',
          hash: '#/pci/projects/{projectId}/private-registry',
        },
        features: ['private-registry'],
        forceVisibility: true,
      },
      {
        id: 'pci-kubernetes-load-balancer',
        idAttr: 'pci-kubernetes-load-balancer-link',
        universe: PUBLICCLOUD_UNIVERSE_ID,
        translation: 'sidebar_pci_kubernetes_load_balancer',
        serviceType: 'CLOUD_PROJECT_LOADBALANCER',
        routing: {
          application: 'public-cloud',
          hash: '#/pci/projects/{projectId}/load-balancer',
        },
        region: ['EU', 'CA'],
        features: ['load-balancer'],
        forceVisibility: true,
      },
      {
        id: 'pci-kubernetes-load-balancer',
        idAttr: 'pci-kubernetes-load-balancer-link',
        universe: PUBLICCLOUD_UNIVERSE_ID,
        translation: 'sidebar_pci_load_balancer',
        serviceType: 'CLOUD_PROJECT_LOADBALANCER',
        routing: {
          application: 'public-cloud',
          hash: '#/pci/projects/{projectId}/load-balancer',
        },
        region: ['US'],
        features: ['load-balancer'],
        forceVisibility: true,
      },
    ],
  },
  {
    id: 'pci-analytics',
    idAttr: 'pci-analytics-link',
    universe: PUBLICCLOUD_UNIVERSE_ID,
    translation: 'sidebar_pci_analytics',
    features: [
      'data-processing',
      'logs-data-platform',
      'databases-analysis',
      'databases-operational',
      'databases-streaming',
      'pci-databases-analytics-analysis',
      'pci-databases-analytics-operational',
      'pci-databases-analytics-streaming',
    ],
    forceVisibility: true,
    children: [
      //Entry menu for PCI Databases for Angular
      {
        id: 'pci-databases-operational',
        idAttr: 'pci-databases-operational',
        universe: PUBLICCLOUD_UNIVERSE_ID,
        translation: 'sidebar_pci_analytics_databases',
        serviceType: 'CLOUD_PROJECT_DATABASE',
        routing: {
          application: 'public-cloud',
          hash:
            '#/pci/projects/{projectId}/storages/databases-analytics/databases',
        },
        features: ['databases-operational'],
        forceVisibility: true,
      },
      //Entry menu for PCI Databases for React
      {
        id: 'pci-databases-analytics-operational',
        idAttr: 'pci-databases-analytics-operational',
        universe: PUBLICCLOUD_UNIVERSE_ID,
        translation: 'sidebar_pci_analytics_databases',
        serviceType: 'CLOUD_PROJECT_DATABASE',
        routing: {
          application: 'public-cloud',
          hash:
            '#/pci/projects/{projectId}/databases-analytics/operational/services',
        },
        features: ['pci-databases-analytics-operational'],
        forceVisibility: true,
      },
      //Entry menu for PCI Data Streaming for Angular
      {
        id: 'pci-databases-streaming',
        idAttr: 'pci-databases-streaming',
        universe: PUBLICCLOUD_UNIVERSE_ID,
        translation: 'sidebar_pci_analytics_data_streaming',
        serviceType: 'CLOUD_PROJECT_DATABASE',
        routing: {
          application: 'public-cloud',
          hash:
            '#/pci/projects/{projectId}/storages/databases-analytics/data-streaming',
        },
        features: ['databases-streaming'],
        forceVisibility: true,
      },
      //Entry menu for PCI Data Streaming for React
      {
        id: 'pci-databases-analytics-streaming',
        translation: 'sidebar_pci_analytics_data_streaming',
        serviceType: 'CLOUD_PROJECT_DATABASE',
        routing: {
          application: 'public-cloud',
          hash:
            '#/pci/projects/{projectId}/databases-analytics/streaming/services',
        },
        features: ['pci-databases-analytics-streaming'],
        forceVisibility: true,
      },
      {
        id: 'pci-data-processing',
        idAttr: 'pci-data-processing-link',
        universe: PUBLICCLOUD_UNIVERSE_ID,
        translation: 'sidebar_pci_data_processing',
        serviceType: 'CLOUD_PROJECT_DATAPROCESSING_JOBS',
        routing: {
          application: 'public-cloud',
          hash: '#/pci/projects/{projectId}/data-processing',
        },
        features: ['data-processing'],
        forceVisibility: true,
      },
      //Entry menu for PCI Data Analysis for Angular
      {
        id: 'pci-databases-analysis',
        idAttr: 'pci-databases-analysis-link',
        universe: PUBLICCLOUD_UNIVERSE_ID,
        translation: 'sidebar_pci_analytics_data_analysis',
        serviceType: 'CLOUD_PROJECT_DATABASE',
        routing: {
          application: 'public-cloud',
          hash:
            '#/pci/projects/{projectId}/storages/databases-analytics/data-analysis',
        },
        features: ['databases-analysis'],
        forceVisibility: true,
      },
      //Entry menu for PCI Data Analysis for React
      {
        id: 'pci-databases-analytics-analysis',
        idAttr: 'pci-databases-analytics-analysis-link',
        translation: 'sidebar_pci_analytics_data_analysis',
        serviceType: 'CLOUD_PROJECT_DATABASE',
        routing: {
          application: 'public-cloud',
          hash:
            '#/pci/projects/{projectId}/databases-analytics/analysis/services',
        },
        features: ['pci-databases-analytics-analysis'],
        forceVisibility: true,
      },
      {
        id: 'pci-analytics-data-platform',
        idAttr: 'pci-analytics-data-platform-link',
        universe: PUBLICCLOUD_UNIVERSE_ID,
        translation: 'sidebar_pci_analytics_data_platform',
        count: false,
        url: 'https://eu.dataplatform.ovh.net/',
        features: ['data-platform'],
        tag: NodeTag.BETA,
        isExternal: true,
      },
      {
        id: 'pci-logs-data-platform',
        idAttr: 'pci-logs-data-platform-link',
        universe: PUBLICCLOUD_UNIVERSE_ID,
        translation: 'sidebar_pci_logs_data_platform',
        serviceType: 'DBAAS_LOGS',
        routing: {
          application: 'dedicated',
          hash: '#/dbaas/logs',
        },
        features: ['logs-data-platform'],
        forceVisibility: true,
      },
    ],
  },
  {
    id: 'pci-ai',
    idAttr: 'pci-ai-link',
    universe: PUBLICCLOUD_UNIVERSE_ID,
    translation: 'sidebar_pci_ai',
    features: ['notebooks', 'ai-apps', 'training', 'ai-dashboard', 'ai-endpoints', 'pci-ai-endpoints'],
    forceVisibility: true,
    children: [
      {
        id: 'pci-ai-dashboard',
        idAttr: 'pci-ai-dashboard-link',
        universe: pciNode.id,
        translation: 'sidebar_pci_ai_dashboard',
        serviceType: 'CLOUD_PROJECT_AI_DASHBOARD',
        routing: {
          application: 'public-cloud',
          hash: '#/pci/projects/{projectId}/ai-dashboard/home',
        },
        features: ['ai-dashboard'],
        forceVisibility: true,
      },
      {
        id: 'pci-ai-notebooks',
        idAttr: 'pci-ai-notebooks-link',
        universe: PUBLICCLOUD_UNIVERSE_ID,
        translation: 'sidebar_pci_ai_notebooks',
        serviceType: 'CLOUD_PROJECT_AI_NOTEBOOK',
        routing: {
          application: 'public-cloud',
          hash: '#/pci/projects/{projectId}/notebooks',
        },
        features: ['notebooks'],
        forceVisibility: true,
      },
      {
        id: 'pci-ai-training',
        idAttr: 'pci-ai-training-link',
        universe: PUBLICCLOUD_UNIVERSE_ID,
        translation: 'sidebar_pci_ai_training',
        serviceType: 'CLOUD_PROJECT_AI_JOB',
        routing: {
          application: 'public-cloud',
          hash: '#/pci/projects/{projectId}/training',
        },
        features: ['training'],
        forceVisibility: true,
      },
      {
        id: 'pci-ai-app',
        idAttr: 'pci-ai-app-link',
        universe: PUBLICCLOUD_UNIVERSE_ID,
        translation: 'sidebar_pci_ai_app',
        serviceType: 'CLOUD_PROJECT_AI_APP',
        routing: {
          application: 'public-cloud',
          hash: '#/pci/projects/{projectId}/ai',
        },
        features: ['ai-apps'],
        forceVisibility: true,
      },
      {
        id: 'pci-ai-endpoints',
        idAttr: 'pci-ai-endpoints-link',
        universe: PUBLICCLOUD_UNIVERSE_ID,
        translation: 'sidebar_pci_ai_endpoints',
        count: false,
        url: 'https://endpoints.ai.cloud.ovh.net/',
        features: ['ai-endpoints'],
        tag: NodeTag.BETA,
        isExternal: true,
      },
      {
        id: 'pci-ai-endpoints-app',
        idAttr: 'pci-ai-endpoints-app-link',
        universe: PUBLICCLOUD_UNIVERSE_ID,
        translation: 'sidebar_pci_ai_endpoints',
        routing: {
          application: 'public-cloud',
          hash: '#/pci/projects/{projectId}/ai/endpoints',
        },
        features: ['pci-ai-endpoints'],
        forceVisibility: true,
        tag: NodeTag.BETA,
      },
    ],
  },
  {
    id: 'pci-management-interface',
    idAttr: 'pci-management-interface-link',
    universe: PUBLICCLOUD_UNIVERSE_ID,
    translation: 'sidebar_pci_management',
    features: ['horizon'],
    count: false,
    children: [
      {
        id: 'pci-horizon',
        idAttr: 'pci-horizon-link',
        universe: PUBLICCLOUD_UNIVERSE_ID,
        translation: 'sidebar_pci_horizon',
        count: false,
        url: {
          CA:
            'https://auth.cloud.ovh.net/v3/auth/OS-FEDERATION/identity_providers/ovhcloud-world/protocols/openid/websso?origin=https://horizon.cloud.ovh.net/auth/websso/',
          EU:
            'https://auth.cloud.ovh.net/v3/auth/OS-FEDERATION/identity_providers/ovhcloud-emea/protocols/openid/websso?origin=https://horizon.cloud.ovh.net/auth/websso/',
          US:
            'https://auth.cloud.ovh.us/v3/auth/OS-FEDERATION/identity_providers/ovhcloud-us/protocols/openid/websso?origin=https://horizon.cloud.ovh.us/auth/websso/',
        },
        isExternal: true,
        features: ['horizon'],
      },
    ],
  },
  {
    id: 'pci-settings',
    idAttr: 'pci-settings-link',
    universe: PUBLICCLOUD_UNIVERSE_ID,
    translation: 'sidebar_pci_settings',
    count: false,
    features: [
      'public-cloud:users',
      'public-cloud:quota',
      'public-cloud:ssh-keys',
      'public-cloud:billing',
      'public-cloud:vouchers',
      'public-cloud:contacts',
      'public-cloud:project-settings',
      'pci-savings-plan'
    ],
    children: [
      {
        id: 'pci-users-roles',
        idAttr: 'pci-users-roles-link',
        universe: PUBLICCLOUD_UNIVERSE_ID,
        translation: 'sidebar_pci_users_roles',
        routing: {
          application: 'public-cloud',
          hash: '#/pci/projects/{projectId}/users',
        },
        count: false,
        features: ['public-cloud:users'],
      },
      {
        id: 'pci-quota-region',
        idAttr: 'pci-quota-region-link',
        universe: PUBLICCLOUD_UNIVERSE_ID,
        translation: 'sidebar_pci_quota_regions',
        routing: {
          application: 'public-cloud',
          hash: '#/pci/projects/{projectId}/quota',
        },
        count: false,
        features: ['public-cloud:quota'],
      },
      {
        id: 'pci-ssh-keys',
        idAttr: 'pci-ssh-keys-link',
        universe: PUBLICCLOUD_UNIVERSE_ID,
        translation: 'sidebar_pci_ssh_keys',
        routing: {
          application: 'public-cloud',
          hash: '#/pci/projects/{projectId}/ssh',
        },
        count: false,
        features: ['public-cloud:ssh-keys'],
      },
      {
        id: 'pci-billing',
        idAttr: 'pci-billing-link',
        universe: PUBLICCLOUD_UNIVERSE_ID,
        translation: 'sidebar_pci_billing',
        routing: {
          application: 'public-cloud',
          hash: '#/pci/projects/{projectId}/billing',
        },
        count: false,
        features: ['public-cloud:billing'],
      },
      {
        id: 'pci-credits-vouchers',
        idAttr: 'pci-credits-vouchers-link',
        universe: PUBLICCLOUD_UNIVERSE_ID,
        translation: 'sidebar_pci_credits_vouchers',
        serviceType: 'CLOUD_PROJECT_CREDIT',
        routing: {
          application: 'public-cloud',
          hash: '#/pci/projects/{projectId}/vouchers',
        },
        count: false,
        features: ['public-cloud:vouchers'],
      },
      {
        id: 'pci-savings-plan',
        idAttr: 'pci-savings-plan',
        universe: pciNode.id,
        translation: 'sidebar_pci_savings_plan',
        routing: {
          application: 'public-cloud',
          hash: '#/pci/projects/{projectId}/savings-plan',
        },
        count: false,
        tag: NodeTag.NEW,
        features: ['pci-savings-plan'],
      },
      {
        id: 'pci-contacts-rights',
        idAttr: 'pci-contacts-rights-link',
        universe: PUBLICCLOUD_UNIVERSE_ID,
        translation: 'sidebar_pci_contacts_rights',
        routing: {
          application: 'public-cloud',
          hash: '#/pci/projects/{projectId}/contacts',
        },
        count: false,
        features: ['public-cloud:contacts'],
      },
      {
        id: 'pci-project-settings',
        idAttr: 'pci-project-settings-link',
        universe: PUBLICCLOUD_UNIVERSE_ID,
        translation: 'sidebar_pci_project_settings',
        routing: {
          application: 'public-cloud',
          hash: '#/pci/projects/{projectId}/edit',
        },
        count: false,
        features: ['public-cloud:project-settings'],
      },
    ],
  },
];

export default pciNode;
