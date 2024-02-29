const circle = {
  r: 4,
  magnet: true,
  stroke: "#5F95FF",
  strokeWidth: 1,
  fill: "#fff",
  style: {
    visibility: "hidden",
  },
};

export const basicPorts = {
  groups: {
    top: {
      position: "top",
      attrs: { circle },
    },
    right: {
      position: "right",
      attrs: { circle },
    },
    bottom: {
      position: "bottom",
      attrs: { circle },
    },
    left: {
      position: "left",
      attrs: { circle },
    },
  },
  items: [
    {
      id: "top",
      group: "top",
    },
    {
      id: "right",
      group: "right",
    },
    {
      id: "bottom",
      group: "bottom",
    },
    {
      id: "left",
      group: "left",
    },
  ],
};

export const customPorts = {
  groups: {
    top: {
      position: {
        name: "absolute",
      },
    },
    right: {
      position: {
        name: "absolute",
      },
    },
    bottom: {
      position: {
        name: "absolute",
      },
    },
    left: {
      position: {
        name: "absolute",
      },
    },
  },
  items: [
    {
      id: "port1",
      group: "top",
      // 通过 args 指定绝对位置
      args: {
        x: "50%",
        y: "0%",
      },
      attrs: { circle },
    },
    {
      id: "port2",
      group: "right",
      args: {
        x: "100%",
        y: "50%",
      },
      attrs: { circle },
    },
    {
      id: "port3",
      group: "bottom",
      args: {
        x: "50%",
        y: "100%",
      },
      attrs: { circle },
    },
    {
      id: "port4",
      group: "left",
      args: {
        x: "0%",
        y: "50%",
      },
      attrs: { circle },
    },
  ],
};
export const outerPorts = {
  groups: {
    top: {
      position: {
        name: "absolute",
      },
    },
    right: {
      position: {
        name: "absolute",
      },
    },
    bottom: {
      position: {
        name: "absolute",
      },
    },
    left: {
      position: {
        name: "absolute",
      },
    },
  },
  items: [
    {
      id: "port1",
      group: "top",
      // 通过 args 指定绝对位置
      args: {
        x: "50%",
        y: "0%",
      },
      attrs: { circle },
    },
    {
      id: "port2",
      group: "right",
      args: {
        x: "100%",
        y: "10%",
      },
      attrs: { circle },
    },
    {
      id: "port3",
      group: "bottom",
      args: {
        x: "50%",
        y: "100%",
      },
      attrs: { circle },
    },
    {
      id: "port4",
      group: "left",
      args: {
        x: "0%",
        y: "50%",
      },
      attrs: { circle },
    },
  ],
};

export const outerPorts8 = {
  groups: {
    left: {
      position: {
        name: "absolute",
      },
    },
  },
  items: [
    {
      id: "port4",
      group: "left",
      args: {
        x: "20%",
        y: "60%",
      },
      attrs: { circle },
    },
  ],
}
export const outerPorts7 = {
  groups: {
    left: {
      position: {
        name: "absolute",
      },
      attrs: {
        circle: {
          r: 6,
          magnet: true,
          stroke: '#31d0c6',
          strokeWidth: 2,
          fill: '#fff',
        },
      },
    },
    right: {
      position: {
        name: "absolute",
      },
    },
  },
  items: [
    {
      id: "port4",
      group: "left",
      args: {
        x: "40%",
        y: "45%",
      },
      attrs: { circle },
    },
    {
      id: "port6",
      group: "right",
      args: {
        x: "56%",
        y: "54%",
      },
      attrs: { circle },
    },
    {
      id: "port7",
      group: "right",
      args: {
        x: "50%",
        y: "57%",
      },
      attrs: { circle },
    }
  ],
}
export const outerPorts6 = {
  groups: {
    left: {
      position: {
        name: "absolute",
      },
    },
  },
  items: [
    {
      id: "port4",
      group: "left",
      args: {
        x: "48%",
        y: "47%",
      },
      attrs: { circle },
    },
    {
      id: "port6",
      group: "left",
      args: {
        x: '95%',
        y: '45%',
      },
      attrs: { circle },
    },
  ],
}
export const outerPorts4 = {
  groups: {
    left: {
      position: {
        name: "absolute",
      },
    },
  },
  items: [
    {
      id: "port4",
      group: "left",
      args: {
        x: "34%",
        y: "43%",
      },
      attrs: { circle },
    },
    {
      id: "port6",
      group: "left",
      args: {
        x: "70%",
        y: "45%",
      },
      attrs: { circle },
    },
  ],
}
export const outerPorts1 = {
  groups: {
    left: {
      position: {
        name: "absolute",
      },
    },
  },
  items: [
    {
      id: "port4",
      group: "left",
      args: {
        x: "7%",
        y: "63%",
      },
      attrs: { circle },
    },
    {
      id: "port6",
      group: "left",
      args: {
        x: "7%",
        y: "78%",
      },
      attrs: { circle },
    },
  ],
}
export const outerPorts10 = {
  groups: {
    right: {
      position: {
        name: "absolute",
      },
    },
  },
  items: [
    {
      id: "port4",
      group: "right",
      args: {
        x: "64%",
        y: "65%",
      },
      attrs: { circle },
    },
  ],
}
export const outerPorts9 = {
  groups: {
    right: {
      position: {
        name: "absolute",
      },
    },
  },
  items: [
    {
      id: "port4",
      group: "right",
      args: {
        x: "53%",
        y: "64%",
      },
      attrs: { circle },
    },
  ],
}