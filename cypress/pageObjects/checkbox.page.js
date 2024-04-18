import { BasePage } from "./base.page";

export class CheckboxPage extends BasePage {
    static get url() {
        return "/checkbox";
    }

    static get expandAllButton() {
        return cy.get("[title='Expand all']");
    }

    static get checkboxes() {
        return cy.get(".rct-title");
    }

    static get checkedCheckboxOutput() {
        return cy.get("[id='result']");
    }

    static get textSuccess() {
        return cy.get(".text-success");
    }
}
