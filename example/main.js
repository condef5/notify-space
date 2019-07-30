import notify from "../src/";

notify({
  text: "See you space cowboy ...", // Message to be displayed
  duration: 20000, // Notificacion duration, it's optional, by default is `2000`
  theme: "dark" // Theme available => ['light', 'dark', 'success'], by default is `dark`
});

// or just

notify("The space is wonderful");
