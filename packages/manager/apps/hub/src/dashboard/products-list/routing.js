import find from 'lodash/find';

import { ListLayoutHelper } from '@ovh-ux/manager-ng-layout-helpers';
import { urlQueryParams, params, component, resolves } from './config';

export const genericProductResolve = {
  apiPath: /* @ngInject */ (resourcePath) =>
    resourcePath.replace(/\/\{[a-zA-Z]+\}/g, ''),
  schema: /* @ngInject */ ($http, resourcePath) =>
    $http
      .get('/')
      .then(({ data: schema }) =>
        find(schema.apis, ({ path }) =>
          new RegExp(`^${path}/`).test(resourcePath),
        ),
      )
      .then(({ path }) => $http.get(`${path}.json`))
      .then(({ data }) => data),
};

export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state('app.dashboard.products', {
    url: `:product?${urlQueryParams}`,
    params,
    component,
    resolve: {
      ...ListLayoutHelper.stateResolves,
      ...resolves,
      ...genericProductResolve,
      productType: /* @ngInject */ ($transition$) =>
        $transition$.params().product.toUpperCase(),
    },
  });
};
