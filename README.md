# Tachyons Extra

> All of the css functional classes that are not included in the original Tachyons

To see all the added classes, look at the [`tachyons-extra.css`](https://raw.githubusercontent.com/accurat/tachyons-extra/master/tachyons-extra.css) file.

## Install

```sh
yarn add tachyons-extra
```

## Usage

If you're using webpack, import the module at the root of your project, just under the original `tachyons`

```js
import 'tachyons'
import 'tachyons-extra'
```

Otherwise you can use it from the CDN, put this in your html

```html
<link rel="stylesheet" href="https://unpkg.com/tachyons-extra/tachyons-extra.css">
```

## F.A.Q.

#### Why not making a PR to the original repo with all those classes?

Tachyons purposefully decided not to include a lot of these classes to keep the bundle as light as possible or [because of personal beliefs](https://github.com/tachyons-css/tachyons/issues/265), so it makes sense to regroup all of those in an external bundle.
