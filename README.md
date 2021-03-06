# React Native Interview Assessment project

> For the Mobility function

## Instructions

In order to verify your skill set for the role there is a small task that must be accomplished. The URL supplied below contains a JSON payload that represents a mobility availability response. Using React Native create a Mobile application that displays a visual representation of the following feed.

URL feed: https://raw.githubusercontent.com/cartrawler/mobility-react-native-assessment/master/assets/availability.json

Template repository: https://github.com/cartrawler/mobility-react-native-assessment

Assets: https://github.com/cartrawler/mobility-react-native-assessment/tree/master/assets

### Core objectives:

- Provide a project made in React Native running on Android and/or iOS. (You may use the template repository provided as a base if you want)//DONE
- Parse message from URL feed//DONE
- Create a visual representation of the list of mobility products in React Native//DONE
- Each product block must contain the following data: supplier name, category, ETA (in min), price//DONE
- Default order of products must be driven by “ETA” //DONE
- When you tap on a product block, you should display a screen showing information for that product only (It can be the same information as on the full product list)//DONE
- Clean, organised, readable and easily understandable code is important//DONE
- Show us the quality of your code and project structure //DONE

### Advanced (optional):

- Display the Supplier logo for each product (You may use the SVG icons from the `assets/` folder of the repository provided)//DONE
- Display the Product type/Vehicle type icon for each product (You may use the SVG icons from the `assets/` folder of the repository provided)//DONE
- Offer different sorting orders//DONE
- Use the React Native Bridge to communicate between the native code and the JS code (e.g. Theme toggle on the native side, log the selected product on the native side, …)
- Use TypeScript
- Surprise us!

### Deliverable:

- Email in zipped up version of all code and libraries used, or provide a shared drive/dropbox link or repository

### Note:

- All core objectives must be met in order to validate your skill set.

---

## Setup your environment

Follow these instructions until `Creating a new application` for a macOS or Windows computers:
<https://reactnative.dev/docs/next/environment-setup>

Then install the dependencies:

```bash
yarn
```

---

## Run instructions for iOS

- `cd react-native-assesment && npx react-native run-ios`
- or -
- Open react-native-assesment/ios/reactNativeAssesment.xcworkspace in Xcode or run `cd react-native-assesment && xed -b ios`
- Hit the Run button

## Run instructions for Android

- Have an Android emulator running (quickest way to get started), or a device connected.
- `cd react-native-assesment && npx react-native run-android`
