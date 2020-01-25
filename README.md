![react-promise-loader](https://repository-images.githubusercontent.com/236146663/26a78580-3f83-11ea-9773-25da38f10104)

<p align="center">
    <a href="https://www.npmjs.com/package/react-promise-loader">
        <img src="https://img.shields.io/npm/v/react-promise-loader" alt="npm version">
    </a>
    <a href="https://travis-ci.org/awibox/react-promise-loader">
        <img src='https://travis-ci.org/awibox/react-promise-loader.svg?branch=master' alt='Build' />
    </a>
    <a href='https://coveralls.io/github/awibox/react-promise-loader?branch=master'>
        <img src='https://coveralls.io/repos/github/awibox/react-promise-loader/badge.svg?branch=master' alt='Coverage Status' />
    </a>
    <a href="https://www.npmjs.com/package/react-promise-loader">
        <img src="https://img.shields.io/npm/dm/react-promise-loader" alt="Downloads">
    </a>
    <img src="https://img.shields.io/github/license/awibox/react-promise-loader" alt="license">
</p>

## Table of contents
* [Installation](#installation)
* [Getting started](#gettingstarted)
* [The settings of the component](#settings)
* [Contributing](#contributing)

<a name="installation"></a>
## Installation
You need to install promise loader and promise tracker packages:
```bash
npm install react-promise-loader react-promise-tracker
```
You can use yarn:
```bash
yarn add react-promise-loader react-promise-tracker
```
<a name="gettingstarted"></a>
## Getting started
Wrap promises that you would like to track as in the following example:
```diff
+ import { trackPromise} from 'react-promise-tracker';
//...

+ trackPromise(
    fetchUsers(); // You function that returns a promise
+ );
```
Then you need to add the Loader component and send data from the react-promise-tracker:
```diff
+ import { usePromiseTracker } from 'react-promise-tracker';
+ import Loader from 'react-promise-loader';

const App = () => (
  <div className="app">
    ...
+     <Loader promiseTracker={usePromiseTracker} color={'#3d5e61'} background={'rgba(255,255,255,.5)'} />
  </div>
);
export default App;
```

<a name="settings"></a>
## The settings of the component
|Parameter|Type|Description|Default|
|--------------------|--------|-----------|-------|
|**background**|string|Sets the color for the background in any format that supports css|``` rgba(255,255,255,.5) ```|
|**color**|string|Sets the color of the spinner|``` #000 ```|
|**promiseTracker**|boolean|You need to set ```usePromiseTracker``` function from the ```react-promise-tracker```||
|**loading**|boolean|If you need to run the loader without tracking promises you should set ```true```|``` false ```|

<a name="contributing"></a>
## Contributing
Please read through our [CONTRIBUTING.md](/.github/CONTRIBUTING.md).
