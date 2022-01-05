# AchievIt

## Tech Stack:

# Frontend:

Typescript & React.js, Stripe

# Backend:

Node.js, PostgreSQL, Prisma, Stripe

This app allows users to create campaigns, as well as browse through other campaigns and donate in $10 amounts to the kickstarters of their choosing.

After choosing a campaign to fund, the Stripe prompts a payment page where users can enter their payment information. To test this out use fill all fields that require numbers with '42's.

Users can also update and delete fundraising campaigns that they own.

The architectural pattern used here was MVC.

Material UI was used for styling. The components used were: Button, TextField, Typography, Card, and Grid.

A component I made reusable was the 'SingleCampaign' component which is featured in 'Campaigns', 'Profile', and in the Home Page.

# To Install:

Fork and clone the repo.
npm install
cd client, npm install
cd ..
npm run dev

expected payload for a typical get route (/campaigns) for example is an object with all of the data in it.

View the deployed application [here](https://amber-kickstarter.herokuapp.com/)
