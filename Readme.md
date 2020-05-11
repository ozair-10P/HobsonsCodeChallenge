**Hobsons Release Notes**

**In-Scope Items:**

1. [Hobsons.com](http://hobsons.com/) home page renders as expected.
2. On the home screen there is a Hero graphic with the text &quot; **We help students**  across the journey of a lifetime.&quot; Click the down arrow. Assert the page scrolls the next sections &quot;How can we help  **your students?**&quot; into the viewport window. Assert that it is correctly aligned with the top of the visible screen
3. When user clicks the &quot;hamburger&quot; menu at the top of the screen then the items the list drops down as expected with the sub-menu items. The menu I&#39;m referring to is Solutions, Services, Resources, About &amp; Blog. Assert that the &quot;_Resources_&quot; menus contain a list of child links including &quot;E_vents_&quot;.
4. Navigate to Resources \&gt; Events. Assert that all events on the page occurs in the future. Note you do NOT need to apply the filters, just assert on the default list that is displayed

**Repository:**

[https://github.com/ozair-10P/CodeChallenge](https://github.com/ozair-10P/CodeChallenge)

**Tool:**

Cypress (Mocha Framework)

**Installation:**

Cypress node modules will be required.

- **Install Cypress via npm:**

cd /your/project/path

npm install cypress --save-dev

[https://docs.cypress.io/guides/getting-started/installing-cypress.html#Installing](https://docs.cypress.io/guides/getting-started/installing-cypress.html#Installing)

**Commands:**

- For custom command used to run and create mocha reports:

-npm run test

- To open GUI:

-npx cypress open

- To run in CLI (headless):

-npx cypress run

- To run in chrome:

-npx cypress run --browser chrome

**Reports:**

- Mochawesome Reports are available in \cypress\reports\mochareports\report.html

**Approach:**

- All test files (i.e. home\_screen.spec.js and resource\_events\_screen.spec.js) are in integration folder and cases are independent.
- Fixture contains the config.js in which url is handled.
- Command.js contains the reusability code for opening website and gtg exception code is handled.
- BDD assertions are used i.e. should().
- Video folder contains the last execution.

**Limitation:**

For the 4th scenario i.e. &quot;Assert that all events on the page occurs in the future&quot;, partial logic was created to assert that whether event occurs in future. Limitation is that the dates in front-end do not follow a specific format and for some events dates are missing. From QA point of view better approach would be to follow a standard date template and an expected mock data should be provided.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*