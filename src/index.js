const $style = document.createElement("style");
const $area = document.createElement("div");

$area.classList.add("area");
document.body.appendChild($area);

$style.innerHTML = `
.area {
  position: fixed;
  bottom: 10px;
  right: 20px;
  z-index: 2000;
  transition: transform 0.4s ease 0s;
  cursor: default;
}

.notify {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 5px;
  font-size: 0.875rem;
  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2),
    0px 6px 10px 0px rgba(0,0,0,0.14), 
    0px 1px 18px 0px rgba(0,0,0,0.12);
  padding: 14px 16px;
  min-width: 70px;
  max-width: 350px;
  letter-spacing: 0.01071em;
  justify-content: center;
  line-height: 1.43;
}

.light {
  background: white;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 9px;
}

.dark {
  background-color: rgba(0, 0, 0, 0.85);
  color: #fff;
}

.success {
  background-color: rgb(0, 118, 255);
  color: white;
}

.up {
  animation: up 0.5s linear;
}

.down {
  animation: down 1s linear;
}

@keyframes up {
  0% {
    transform: translateY(100px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes down {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100px);
  }
}
`;
document.body.appendChild($style);

function notifySpace(props) {
  const defaults = { duration: 3000, theme: "dark" };
  const settings =
    typeof props === "string"
      ? { ...defaults, text: props }
      : { ...defaults, ...props };

  const { text, duration, theme } = settings;
  const $notify = document.createElement("div");
  $notify.classList.add("notify", theme, "up");
  $notify.innerText = text;

  $area.appendChild($notify);
  setTimeout(() => {
    $notify.classList.add("down");
    setTimeout(() => {
      $area.removeChild($notify);
    }, 1000);
  }, duration);
}

module.exports = notifySpace;
