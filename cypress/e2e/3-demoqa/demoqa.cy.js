const { CheckboxPage } = require("../../pageObjects/checkbox.page");
const { RadioButtonsPage } = require("../../pageObjects/radiobuttons.page");
const { TextboxPage } = require("../../pageObjects/textbox.page");
const { WebTablesPage } = require("../../pageObjects/webtables.page");


describe("Demoqa", () => {
    context("Text Box", () => {
        beforeEach(() => {
            TextboxPage.visit();
        });

        it("Enter text field values - positive", () => {
            TextboxPage.fullnameTextField.type("John");
            TextboxPage.emailTextField.type("aaa@bbb.xyz");
            TextboxPage.currentAddressTextField.type("Some random current address");
            TextboxPage.permanentAddressTextField.type("Some random permanent address");
            TextboxPage.submitButton.click();
            TextboxPage.nameOutput.should("have.text", "Name:John");
            TextboxPage.emailOutput.should("have.text", "Email:aaa@bbb.xyz");
            TextboxPage.currentAddressOutput.should(
                "contain.text",
                "Current Address :Some random current address"
            );
            TextboxPage.permanentAddressOutput.should(
                "contain.text",
                "Permananet Address :Some random permanent address"
            );
        });

        it.only("Enter text field values - negative", () => {
            TextboxPage.emailTextField.type("aaa@bbb");
            TextboxPage.submitButton.click();
            TextboxPage.emailTextField.should(
                "have.class",
                "field-error"
            );
        });
    });

    context("Check Box", () => {
        beforeEach(() => {
            CheckboxPage.visit();
        });

        it.only("Check the checkboxes", () => {
            CheckboxPage.expandAllButton.click();
            CheckboxPage.checkboxes.contains("Notes").click();
            CheckboxPage.checkboxes.contains("Angular").click();
            CheckboxPage.checkboxes.contains("Private").click();
            CheckboxPage.checkboxes.contains("Excel File").click();

            CheckboxPage.checkedCheckboxOutput.should("have.text", "You have selected :notesangularprivateexcelFile")

            //validate the checkboxes are checked
            CheckboxPage.textSuccess.should("contain.text", "notes");
            CheckboxPage.textSuccess.should("contain.text", "angular");
            CheckboxPage.textSuccess.should("contain.text", "private");
            CheckboxPage.textSuccess.should("contain.text", "excelFile");


        });
    });

    context("Radio buttons", () => {
        beforeEach(() => {
            RadioButtonsPage.visit();
        });

        it("Click radio buttons - Yes", () => {
            RadioButtonsPage.yesRadioButton.click();
            RadioButtonsPage.resultOutput.should("have.text", "You have selected Yes");
        });

        it("Click radio buttons - Impressive", () => {
            RadioButtonsPage.impressiveRadioButton.click();
            RadioButtonsPage.resultOutput.should("have.text", "You have selected Impressive");
        });

        it("Click radio buttons - No", () => {
            RadioButtonsPage.noRadioButton.should("have.class", "disabled");
        });
    });

    context("Web Tables", () => {
        beforeEach(() => {
            WebTablesPage.visit();
        });

        it("Add new record", () => {
            WebTablesPage.addNewRecordButton.click();
            WebTablesPage.firstNameTextField.type("John");
            WebTablesPage.lastNameTextField.type("Doe");
            WebTablesPage.emailTextField.type("email@gmail.com");
            WebTablesPage.ageTextField.type("25");
            WebTablesPage.salaryTextField.type("10000");
            WebTablesPage.departmentTextField.type("IT");
            WebTablesPage.submitButton.click();

            // Validate the new record
            // check if grid cell contains the value 
            WebTablesPage.tableOutput.should("contain.text", "John");
            WebTablesPage.tableOutput.should("contain.text", "Doe");
            WebTablesPage.tableOutput.should("contain.text", "email@gmail.com");
            WebTablesPage.tableOutput.should("contain.text", "25");
            WebTablesPage.tableOutput.should("contain.text", "10000");
            WebTablesPage.tableOutput.should("contain.text", "IT");
        });

        it("Delete all records", () => {
            WebTablesPage.deleteRowBasedOnOption("Cierra").click();
            WebTablesPage.deleteRowBasedOnOption("Alden").click();
            WebTablesPage.deleteRowBasedOnOption("Kierra").click();


            // Validate if the table is empty
            WebTablesPage.validat.should("contain.text", "No rows found");
        });



    });


});