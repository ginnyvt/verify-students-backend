# GitHub Verify Student API

> Simple application that uses Github API and OAuth 2.0 flow to authenticate and access to user's information.

This is Node/Express API to mainly store Secret Key that can be used to get access token from GitHub. The application can be found [here](https://verify-students-frontend.herokuapp.com/)

# Endpoints

## Request access_token [GET /access_token]

- Parameters:

      Name	Type	Description
      code	string	Temporary code you received from Github

# Usage

## Build and Manage OAuth Apps

More information about creating and manage 0Auth Apps can be found [here](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app)

## Environment variables

Create a .env file in the root folder and copy the following values

```bash
CLIENT_ID=Your Client ID
CLIENT_SECRET=Your Client Secret
```

## Install Dependencies

```bash
npm install
npm start  # Node :8000
```
