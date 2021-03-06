const $style = document.createElement('style');
const $area = document.createElement('div');

$area.classList.add('area');
document.body.appendChild($area);

$style.innerHTML = `
.area {
  position: fixed;
  bottom: 10px;
  right: 20px;
  z-index: 2000;
  transition: transform 0.4s ease 0s;
}

.notify {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 9px;
  font-size: 14px;
  height: 60px;
  width: 300px;
  padding: 0px 20px;
}

.light {
  background: white;
  color: black;
}

.dark {
  background-color: black;
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

export default function notifySpace({
  text,
  duration = 2000,
  theme = 'light'
}: {
  text: string;
  duration?: number;
  theme?: string;
}) {
  const $notify = document.createElement('div');
  $notify.classList.add('notify', theme, 'up');
  $notify.innerText = text;

  $area.appendChild($notify);
  setTimeout(() => {
    notify.classList.add('down');
    setTimeout(() => {
      $area.removeChild($notify);
    }, 500);
  }, duration);
}
