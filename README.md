<div align="center">

![react-promise-loader](https://repository-images.githubusercontent.com/236146663/28c41100-3f90-11ea-9922-a1ed44b60cbe)

[![Version](https://img.shields.io/npm/v/react-promise-loader)](https://www.npmjs.com/package/react-promise-loader)
[![Build](https://img.shields.io/github/workflow/status/react-promise-loader/Deploy)](https://github.com/awibox/react-promise-loader/actions)
[![Coverage](https://coveralls.io/repos/github/awibox/react-promise-loader/badge.svg?branch=master)](https://coveralls.io/github/awibox/react-promise-loader?branch=master)
[![Minified size](https://img.shields.io/bundlephobia/min/react-promise-loader)](https://github.com/awibox/react-promise-loader/blob/master/LICENSE)
[![Downloads](https://img.shields.io/npm/dm/react-promise-loader)](https://www.npmjs.com/package/react-promise-loader)
[![Dependabot](https://api.dependabot.com/badges/status?host=github&repo=awibox/react-promise-loader)](https://dependabot.com)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/awibox/react-promise-loader/pulls)
[![Tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

</div>

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
|**promiseTracker**|boolean|You need to set ```usePromiseTracker``` function from the ```react-promise-tracker```|``` false ```|
|**loading**|boolean|If you need to run the loader without tracking promises you should set ```true```|``` false ```|

<a name="contributing"></a>
## Contributing
Please read through our [CONTRIBUTING.md](/.github/CONTRIBUTING.md).
