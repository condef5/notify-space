# Notify Space

Simple notifications for web applications

## Usage

1. First install the package with npm or Yarn.

```
# with yarn
yarn add notify-space
```

```
# or with npm
npm install notify-space
```

2. And here comes the fun part.

```
import notify from 'notify-space'

notify({
  text: "See you space cowboy ...",  // Message to be displayed
  duration: 4000. // Notificacion duration, it's optional, by default is `2000`
  theme: 'dark'. // Theme available => ['light', 'dark', 'success'], by default is `white`
})

```
