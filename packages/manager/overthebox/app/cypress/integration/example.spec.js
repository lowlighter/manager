describe('OverTheBox', () => {
  it('Module is standalone', async () => {
    cy.server();

    // Mocks
    cy.route('GET', '/engine/apiv6/me', 'fixtures:me');
    cy.route('GET', '/engine/apiv6/overTheBox/overthebox.xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', 'fixtures:overthebox');
    cy.route('GET', '/engine/apiv6/overTheBox/overthebox.xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/serviceInfos', 'fixtures:serviceInfos');
    cy.route('POST', '/engine/apiv6/overTheBox/devices', 'fixtures:devices');
    cy.route('GET', '/engine/apiv6/overTheBox/overthebox.xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/tasks', 'fixtures:tasks');

    cy.route({
      method: 'GET',
      url: '/engine/apiv6/overTheBox/overthebox.xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/device/availableActions',
      status: 404,
      response: '',
    }).as('availableActions');

    cy.route({
      method: 'GET',
      url: '/engine/apiv6/overTheBox/overthebox.xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/device',
      status: 404,
      response: '',
    });

    cy.visit('/#!/overTheBox/overthebox.xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/details');

    cy.wait('@availableActions');

    cy.fixture('overthebox').as('overTheBoxFixture');
    const customServiceName = cy.wait('@overTheBoxFixture').then(overthebox => overthebox.customerDescription);

    cy
      .get('h1')
      .then(el => expect(el.text().trim()).to.equal(customServiceName));

    expect(true).to.equal(true);
    expect(false).to.equal(false);
  });
});
