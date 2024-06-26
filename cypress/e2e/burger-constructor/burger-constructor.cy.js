const DROP_ZONE_NAME = 'ingredients-drop-zone';
const BUN_INGREDIENT_NAME = 'ingredient_bun';
const MAIN_INGREDIENT_NAME = 'ingredient_main';
const CREATE_ORDER_BUTTON_NAME = 'create-order-button';
const EMAIL_FIELD_NAME = 'login-email-field';
const PASSWORD_FIELD_NAME = 'login-password-field';
const ORDER_MODAL_NAME = 'order-modal';
const LOGIN_BUTTON_NAME = 'login-button';
const BURGER_CONSTRUCTOR_BUN_TOP = 'burger-constructor-bun-top';
const BURGER_CONSTRUCTOR_BUN_BOTTOM = 'burger-constructor-bun-bottom';
const BURGER_CONSTRUCTOR_MAIN = 'burger-constructor-main';
const HOST = 'http://localhost:5173';
const TEST_LOGIN = 'depow90353@dcbin.com';
const TEST_PASSWORD = '1234567890';

const getByDataTestId = (string) => `[data-test-id="${string}"]`;

describe('Burger Order', () => {
  it('should create order', () => {
    cy.visit(HOST);

    cy.get(getByDataTestId(BUN_INGREDIENT_NAME))
      .should('exist')
      .drag(getByDataTestId(DROP_ZONE_NAME));

    cy.get(getByDataTestId(MAIN_INGREDIENT_NAME))
      .should('exist')
      .drag(getByDataTestId(DROP_ZONE_NAME));

    cy.get(getByDataTestId(BURGER_CONSTRUCTOR_BUN_TOP)).should('exist');

    cy.get(getByDataTestId(BURGER_CONSTRUCTOR_BUN_BOTTOM)).should('exist');

    cy.get(getByDataTestId(BURGER_CONSTRUCTOR_MAIN)).should('exist');

    cy.get(getByDataTestId(CREATE_ORDER_BUTTON_NAME)).should('exist').click();

    cy.get(getByDataTestId(EMAIL_FIELD_NAME)).should('exist').type(TEST_LOGIN);

    cy.get(getByDataTestId(PASSWORD_FIELD_NAME))
      .should('exist')
      .type(TEST_PASSWORD);

    cy.get(getByDataTestId(LOGIN_BUTTON_NAME)).should('exist').click();

    cy.get(getByDataTestId(CREATE_ORDER_BUTTON_NAME)).should('exist').click();

    cy.get(getByDataTestId(ORDER_MODAL_NAME), { timeout: 20000 }).should(
      'exist',
    );
  });
});
