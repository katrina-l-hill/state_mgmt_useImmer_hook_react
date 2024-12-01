# State Management with useImmer Hook

## Author: Katrina Hill

### Description
This project features a React component for managing and displaying a user profile using the **`use-immer`** hook. The **`use-immer`** hook simplifies state management by providing immutable state updates with a mutable-like syntax.

### Features
- **Dynamic Form Handling**: 
  - Inputs for updating user name, email, phone, and address.
  - Controlled components ensure the UI always reflects the current state.

- **Nested State Management**: 
  - Handles nested objects (e.g., `contactDetails` and `preferences`) seamlessly using **`use-immer`**.

- **Preference Management**:
  - A checkbox allows toggling newsletter subscription in the user preferences.

- **Real-Time State Display**:
  - A live preview of the user profile JSON state is displayed for easier debugging and state tracking.

- **Clean and Readable State Updates**:
  - Each part of the state is updated immutably using draft manipulation provided by **`use-immer`**.

### Files
- `UserProfileWithImmer.js`: this file contains the core React component for the user profile with immer.
- `App.test.js`: this file contains test cases for the application, ensuring correct functionality of the task logic.

### How to run
- clone the repository: https://github.com/katrina-l-hill/state_mgmt_useImmer_hook_react
- cd in the project directory: state-mgmt-app
- run `npm install immer use-immer` to install the dependencies
- run `npm start` to launch the app in the browser