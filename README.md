# Bookly

## Getting Started

### Using Yarn

- First of all clone the repo `git clone https://github.com/klefcodes/bookly.git`

- Then you have to `cd bookly`

- Run the command below and make any changes necessary in that file
  ```sh
    $ cd server
    $ cp .env.example .env
  ```

- If you don't have yarn installed click the following link https://classic.yarnpkg.com/en/docs/install.

After copying the .env file, run the command below you need to go back to the root directory so as to install the dependencies.

- Run the 👇🏼 command
  ```sh
  $ cd ..
  $ yarn install
  $ yarn install:server
  ```
  This will install the dependencies meant for the whole application to run smoothly.
- Lastly you need to run 👇🏼

  ```sh
  $ yarn dev
  ```

  This serves the api by default on [http://localhost:3333](http://localhost:3333/api/v1) and the client side on [http://localhost:3000](http://localhost:3000/).

- To run integration test for server side, run 👇🏼
  ```sh
    $ cd server
    $ yarn test
  ```

  Happy coding 👨🏼‍💻
