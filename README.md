# CypressCruk

Git clone the repository to a directory of your choice
- Git clone https://github.com/PCForeman/CypressCruk.git

cd into the directory run the following 
- npm install

Run the following command 
- npx cypress open

If prompted to install cypress follow the instructions to installonce install re-run
- npx cypress open

A GUI should be displayed click on the E2E Testing option
Select one of the browsers (Chrome, Edge, Atom) and click "Start E2E testing in {{browserName}}"
A WebPage will open click on cypress/e2e/makeDonation.cy.js and the test should automatically start running.

In my code I have tried to make some methods dynamic by passing variables into parameters, for example cy.fillOutDetails().
I have made the assumption the automation should somewhat act like a real-end user so I have made use of cy.waits() with a consistent period of time.




