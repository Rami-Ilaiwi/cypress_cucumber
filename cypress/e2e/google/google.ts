import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I navigate to automation exercise website", () => {
  cy.visit("https://automationexercise.com/");
});
