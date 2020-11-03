
### Check-In App
A check-in  application that allows a user to provide his flight number and last name. Afterwards, they fill a simple form with basic information based on their nationality.The user would be able to review the information before confirming. In the last step, the user  sees the confirmation page. 

#### Demo
A demo for this application can be found [here](https://festive-hermann-3dd25b.netlify.app/).

#### Tools:
This project was generated with [Create React App](https://reactjs.org/docs/create-a-new-react-app.html)


- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [SWR](https://swr.vercel.app/)
- [Redux](http://redux.js.org/)
- [Fake Json](https://api.mocki.io/)
- [Nelify](https://netlify.com/)( for deployment )



#### How to setup
- Clone repository
- Do an `yarn install`
- Run `yarn start` to start a dev server. This runs the app in the development mode.\
  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
  The page will reload if you make edits.\
  You will also see any lint errors in the console.


- Run `yarn build` to build the app for production to the `build` folder.\ It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.\
                                                                           Your app is ready to be deployed!

- Run `yarn test` to run tests. Launches the test runner in the interactive watch mode.

#### Structure and Naming
```
    ─src
    │   App.tsx
    │   App.css
    │   index.css
    │   index.tsx
    │   constants.ts
    │   
    ├───assets
    │   └───flight.gif
    │   └───success.png
    │       
    ├───screens
    │       EnterDetails.tsx
    │       Success.tsx
    │       Welcome.tsx
    │       
    ├───redux
    │       actions.ts
    │       actionTypes.ts
    │       index.ts
    │       userReducer.ts         
    │           
    └───__tests__
    │   ├───actions
    │   │       index.ts
    │   │        
    │   └───reducers
    │   │       userReducer.ts
    │   │    
        └───components
                Success.txs
                Welcome.txs

```Powershell
Tags: Check-In, React, Redux, SWR.
```
