Cypress.Commands.add('xpath', (xpath) => {
    return cy.window().then((win) => {
      const result = win.document.evaluate(
        xpath,
        win.document,
        null,
        win.XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      );
      return cy.wrap(result.singleNodeValue);
    });
  });