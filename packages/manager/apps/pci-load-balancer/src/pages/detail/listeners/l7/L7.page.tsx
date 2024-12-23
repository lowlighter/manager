import { useProject } from '@ovh-ux/manager-pci-common';
import {
  Headers,
  Links,
  LinkType,
  Notifications,
  useProjectUrl,
} from '@ovh-ux/manager-react-components';
import { OsdsBreadcrumb } from '@ovhcloud/ods-components/react';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useHref, useParams } from 'react-router-dom';
import { ROUTE_PATHS } from '@/routes';
import { useListener } from '@/api/hook/useListener';

export default function L7Page() {
  const { t: tPciCommon } = useTranslation('pci-common');
  const { t } = useTranslation('l7');
  const { t: tLoadBalancer } = useTranslation('load-balancer');
  const { t: tListener } = useTranslation('listeners');

  const { projectId, loadBalancerId, region, listenerId } = useParams();
  const { data: project } = useProject();
  const { data: listener } = useListener({
    projectId,
    region,
    loadBalancerId,
    listenerId,
  });

  const hrefProject = useProjectUrl('public-cloud');
  const hrefLoadBalancers = useHref('..');
  const hrefLoadBalancerDetail = useHref(
    `../${region}/${loadBalancerId}/${ROUTE_PATHS.GENERAL_INFORMATION}`,
  );
  const hrefListeners = useHref(
    `../${region}/${loadBalancerId}/${ROUTE_PATHS.LISTENERS}`,
  );

  return (
    <>
      <OsdsBreadcrumb
        items={[
          {
            href: hrefProject,
            label: project.description,
          },
          {
            href: hrefLoadBalancers,
            label: tLoadBalancer('octavia_load_balancers'),
          },
          {
            href: hrefLoadBalancerDetail,
            label: loadBalancerId,
          },
          {
            href: hrefListeners,
            label: tListener('octavia_load_balancer_listeners_title'),
          },
          {
            label: t('octavia_load_balancer_list_l7_policies_title'),
          },
        ]}
      />

      <div className="header mt-8">
        <Headers title={listener?.name} />
      </div>

      <Links
        label={tPciCommon('common_back_button_back_to_previous_page')}
        type={LinkType.back}
        href={hrefListeners}
      />

      <div className="mt-5">
        <Notifications />
      </div>

      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
