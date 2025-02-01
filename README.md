# Incorrect Height from Dimensions.get('window') on Android in React Native

This repository demonstrates a common issue encountered in React Native applications on Android where `Dimensions.get('window')` returns an incorrect height, often zero, during the initial component mount or before the layout is finalized.  The provided solution explains how to correctly handle this issue using the `onLayout` event or `useEffect` hook and async operations.

## Problem

The `Dimensions` API in React Native is commonly used to obtain screen dimensions. However, on Android, calling `Dimensions.get('window')` synchronously early in a component's lifecycle can lead to inaccurate height values. This might result in components not rendering correctly or having unexpected layouts.

## Solution

This repository presents two approaches to address this problem:

1. **Using the `onLayout` event:** The `onLayout` event ensures that the component has been properly laid out before retrieving the dimensions. This is a very effective, native, and straightforward way of solving this.  See `IncorrectHeightAndroidSolution.js` for an example.

2. **Using `useEffect` with `Dimensions.addEventListener`:** This method uses the event listener to asynchronously update the dimensions once they are available.  This allows for more flexible management of layout adjustments.  It's provided as an alternative method in the same file for illustration.  Please note that you should also use `Dimensions.removeEventListener` in the cleanup function of `useEffect` to prevent memory leaks and potential unexpected behavior.

## How to reproduce

1. Clone the repository.
2. Run `npm install` or `yarn install`.
3. Run `npx react-native run-android` (or your preferred React Native run command).
4. Observe the initial height value, which should be incorrect in `IncorrectHeightAndroid.js`, and then compare it to the correctly measured height in the solution file.
