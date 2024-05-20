# Onafriq-QA-Assessment


This repo contains automated tests for the AutomationExercise at [here](https://www.automationexercise.com/) 

## Installation
To install the necessary dependencies, run the following command:


```npm install```

## Running the Tests
To run the tests, run the following command:

```npm run test```

This will open the Cypress Test Runner, where you can select the tests you want to run.

Alternatively, you can run the tests in headless mode using the following command:


```npm run test:headless```

This will run all the tests in the command line interface without opening the Test Runner.

## Configuring the Application URL
By default, the tests are configured to run against the demo application at [https://www.automationexercise.com/]. If you need to test against a different URL, you can set the BASE_URL environment variable before running the tests:


## Dependencies 

This project uses the following dependencies:

Cypress (for running the tests)
